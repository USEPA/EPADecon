<template>
  <v-row justify="center">
    <v-dialog v-model="isVisible" persistent max-width="425">
      <v-card>
        <v-card-title class="headline" v-text="'Chart Options'" />
        <v-card-text>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-body-1 text-left">Result Type</th>
                  <th class="text-body-1 text-center">X-Axis</th>
                  <th class="text-body-1 text-center">Y-Axis</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="(result, i) in resultNames" :key="result">
                  <td class="text-left">{{ result }}</td>

                  <td class="text-center">
                    <v-checkbox
                      off-icon="mdi-checkbox-blank-circle-outline"
                      on-icon="mdi-checkbox-marked-circle"
                      :ripple="false"
                      v-model="selected.x"
                      :value="resultValues[i]"
                    />
                  </td>

                  <td class="text-center">
                    <v-checkbox
                      :disabled="maxSeriesSelected && !selected.y.includes(resultValues[i])"
                      :ripple="false"
                      :value="resultValues[i]"
                      multiple
                      v-model="selected.y"
                    />
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>

          <p :style="{ visibility: selected.x ? 'visible' : 'hidden' }" class="text-right mb-0">
            Up to {{ maxNumberSeries }} series can be selected
          </p>
        </v-card-text>

        <v-card-actions>
          <v-spacer />

          <v-btn outlined color="primary darken-1" text @click="createChart" :disabled="!canCreateChart">
            {{ createText }}
          </v-btn>

          <v-btn outlined color="primary darken-1" text @click="isVisible = false"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { Component, VModel, Vue, Watch } from 'vue-property-decorator';
import Result from '@/enums/jobs/results/result';
import container from '@/dependencyInjection/config';
import IJobResultProvider from '@/interfaces/providers/IJobResultProvider';
import TYPES from '@/dependencyInjection/types';

@Component
export default class ChartOptions extends Vue {
  @VModel({ default: false }) isVisible!: boolean;

  ignoreNextYAxisSelctionChange = false;

  selected: { x: Result | null; y: Result[] } = { x: null, y: [] };

  private maxNumberSeries = 4;

  private resultProvider = container.get<IJobResultProvider>(TYPES.JobResultProvider);

  get canCreateChart(): boolean {
    return this.selected.x !== null || this.selected.y.length > 0;
  }

  get createText(): string {
    if (this.selected.x && !this.selected.y.length) {
      return 'Create Histogram';
    }

    if (!this.selected.x && this.selected.y.length) {
      return 'Create Pie Chart';
    }

    if (this.selected.x && this.selected.y.length) {
      return 'Create Scatter Plot';
    }

    return 'Create Chart';
  }

  get maxSeriesSelected(): boolean {
    return this.selected.x ? this.selected.y.length >= this.maxNumberSeries : false;
  }

  get resultNames(): string[] {
    return Object.keys(Result).map((p) => this.resultProvider.convertCamelToTitleCase(p));
  }

  // eslint-disable-next-line class-methods-use-this
  get resultValues(): Result[] {
    return Object.values(Result);
  }

  @Watch('selected.x')
  clearYAxisSelection(): void {
    if (!this.selected.x && this.selected.y.length > 1) {
      // remove y axis selections
      this.selected.y.splice(0);
    }
  }

  @Watch('selected.y')
  updateYAxisSelection(newValue: Result[]): void {
    if (this.ignoreNextYAxisSelctionChange) {
      this.ignoreNextYAxisSelctionChange = false;
      return;
    }

    this.ignoreNextYAxisSelctionChange = true;

    if (!this.selected.x) {
      // only take most recently selected element
      newValue.splice(0, newValue.length - 1);
      this.$set(this.selected, 'y', newValue);
    }
  }

  createChart(): void {
    this.$emit('createChart', this.selected);
    this.isVisible = false;
  }
}
</script>

<style lang="scss" scoped>
::v-deep td.text-center > .v-input--checkbox > div > div {
  justify-content: center;
}

::v-deep td.text-center > .v-input--checkbox > div > div > div {
  margin-right: 0px;
}
</style>
