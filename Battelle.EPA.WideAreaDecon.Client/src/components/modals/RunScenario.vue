<template>
  <v-row justify="center">
    <v-dialog v-model="isVisible" persistent max-width="600">
      <v-card>
        <v-card-title class="headline"> Run Scenario </v-card-title>
        <v-card-text>
          <v-form ref="form">
            <v-container>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Number of Runs"
                    v-model.number="numberRealizations"
                    type="number"
                    :rules="[validationRulesShared, validationRulesRealizations]"
                    hide-details="auto"
                    :disabled="disableInputs"
                  />
                  <v-btn-toggle>
                    <v-btn-toggle v-model="numberRealizations" dense background-color="primary">
                      <v-btn small tile v-for="runCount in presetRunCounts" :key="runCount" :value="runCount">
                        {{ runCount }}
                      </v-btn>
                    </v-btn-toggle>
                  </v-btn-toggle>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Seed 1"
                    v-model.number="seed1"
                    type="number"
                    hide-details="auto"
                    :disabled="disableInputs"
                    :rules="[validationRulesShared]"
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    label="Seed 2"
                    v-model.number="seed2"
                    type="number"
                    hide-details="auto"
                    :disabled="disableInputs"
                    :rules="[validationRulesShared]"
                  />
                </v-col>
              </v-row>
            </v-container>
          </v-form>
          <v-container>
            <v-progress-linear :value="currentJob.progress" class="mb-3" />
            Job Status: {{ currentJobStatus }}
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            v-if="showRunButton"
            outlined
            color="primary darken-1"
            text
            @click="runClick"
            :disabled="!canRun || isRunning"
          >
            {{ runButtonText }}
          </v-btn>
          <v-btn v-else outlined color="primary darken-1" text @click="viewResults"> View Results </v-btn>
          <v-btn outlined color="primary darken-1" text @click="closeOrCancel"> {{ secondaryButtonText }} </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, VModel, Watch } from 'vue-property-decorator';
import { Action, Getter, State } from 'vuex-class';
import container from '@/dependencyInjection/config';
import TYPES from '@/dependencyInjection/types';
import IJobProvider from '@/interfaces/providers/IJobProvider';
import ICreateJobRequestPayload from '@/interfaces/store/jobs/ICreateJobRequestPayload';
import JobRequest from '@/implementations/jobs/JobRequest';
import JobManager from '@/implementations/providers/JobManager';
import JobStatus from '@/enums/jobs/jobStatus';
import IGetJobResultsPayload from '@/interfaces/store/jobs/IGetJobResultsPayload';
import IJobResultProvider from '@/interfaces/providers/IJobResultProvider';
import { nameof } from 'ts-simple-nameof';
import { StoreNames } from '@/constants/store/store';
import ICurrentJob from '@/interfaces/store/jobs/ICurrentJob';
import { JobsStoreActions, JobsStoreGetters } from '@/constants/store/Jobs';
import { ParameterSelectionStoreGetters } from '@/constants/store/ParameterSelection';

@Component
export default class RunScenario extends Vue {
  @VModel({ default: () => false }) isVisible!: boolean;

  @Action(JobsStoreActions.CREATE_JOB_REQUEST, { namespace: StoreNames.JOBS })
  createJobRequest!: (payload: ICreateJobRequestPayload) => void;

  @Action(JobsStoreActions.POST_CURRENT_JOB_REQUEST, { namespace: StoreNames.JOBS })
  postCurrentJobRequest!: (jobProvider: IJobProvider) => Promise<void>;

  @Action(JobsStoreActions.GET_CURRENT_JOB_RESULTS, { namespace: StoreNames.JOBS })
  getCurrentJobResults!: (payload: IGetJobResultsPayload) => Promise<void>;

  @Action(JobsStoreActions.CANCEL_CURRENT_JOB_REQUEST, { namespace: StoreNames.JOBS })
  cancelCurrentJobRequest!: (jobProvider: IJobProvider) => Promise<JobRequest>;

  @Action(JobsStoreActions.UPDATE_JOB_STATUS, { namespace: StoreNames.JOBS })
  UpdateJobStatus!: (status: JobStatus) => void;

  @Action(JobsStoreActions.UPDATE_JOB_PROGRESS, { namespace: StoreNames.JOBS })
  UpdateJobProgress!: (progress: number) => void;

  @Getter(ParameterSelectionStoreGetters.CAN_RUN, { namespace: StoreNames.PARAMETER_SELECTION }) canRun!: boolean;

  @Getter(JobsStoreGetters.HAS_RESULTS, { namespace: StoreNames.JOBS }) hasResults!: boolean;

  @State(nameof<ICurrentJob>((s) => s.currentJob), { namespace: StoreNames.JOBS })
  currentJob!: JobRequest;

  jobProvider = container.get<IJobProvider>(TYPES.JobProvider);

  jobResultsProvider = container.get<IJobResultProvider>(TYPES.JobResultProvider);

  jobManager?: JobManager;

  numberRealizations = 100;

  seed1 = 12345;

  seed2 = 67890;

  presetRunCounts = [1, 10, 100, 1000, 10000];

  isRunning = false;

  completedJobStatuses: JobStatus[] = [JobStatus.completed, JobStatus.cancelled, JobStatus.error];

  closeOrCancel(): void {
    if (this.isRunning) {
      this.cancelClick();
      return;
    }

    this.isVisible = false;
  }

  @Watch('currentJob.status')
  async onJobStatusChagned(newStatus: JobStatus): Promise<void> {
    if (this.completedJobStatuses.includes(newStatus)) {
      if (newStatus === JobStatus.completed) {
        await this.getCurrentJobResults({ jobProvider: this.jobProvider, resultProvider: this.jobResultsProvider });
      }
      await this.jobManager?.StopWatchJobProgress();
      this.isRunning = false;
    }
  }

  async runClick(): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const form = this.$refs.form as any;
    if (this.canRun && form.validate()) {
      this.isRunning = true;
      const payload: ICreateJobRequestPayload = {
        jobProvider: this.jobProvider,
        numberRealizations: this.numberRealizations,
        seed1: this.seed1,
        seed2: this.seed2,
      };
      this.createJobRequest(payload);
      await this.postCurrentJobRequest(this.jobProvider);
      this.jobManager = new JobManager(this.currentJob.id, this.UpdateJobStatus, this.UpdateJobProgress);
      await this.jobManager.StartWatchJobProgress();
    }
  }

  async cancelClick(): Promise<void> {
    await this.cancelCurrentJobRequest(this.jobProvider);
    this.isRunning = false;

    if (this.canRepeatRun) {
      // user canceled repeated run
      this.$router.push({ name: 'defineScenario' });
    }
  }

  get canRepeatRun(): boolean {
    return this.$route.name === 'viewResults' && this.canRun;
  }

  get currentJobStatus(): string {
    return this.currentJob.status === JobStatus.unknown ? 'Not Running' : this.currentJob.status;
  }

  get disableInputs(): boolean {
    return (this.isRunning || this.hasResults) && !this.canRepeatRun;
  }

  get runButtonText(): string {
    const run = 'Run';
    return this.canRepeatRun ? `${run} Job Again` : run;
  }

  get secondaryButtonText(): string {
    return this.isRunning ? 'Cancel' : 'Close';
  }

  get showRunButton(): boolean {
    return !this.hasResults || this.canRepeatRun;
  }

  validationRulesRealizations(value: number): boolean | string {
    const max = this.presetRunCounts[this.presetRunCounts.length - 1];
    if (value > max) {
      return `Value must be no more than ${max}`;
    }
    return true;
  }

  // eslint-disable-next-line class-methods-use-this
  validationRulesShared(value: number): boolean | string {
    if (value === undefined || !value.toString()) {
      return 'Value is required';
    }
    if (value % 1 !== 0) {
      return 'Value must be a whole number';
    }
    if (value < 1) {
      return 'Value must be greater than zero';
    }
    return true;
  }

  viewResults(): void {
    this.$router.push({ name: 'viewResults' });
    this.isVisible = false;
  }
}
</script>

<style lang="scss" scoped></style>
