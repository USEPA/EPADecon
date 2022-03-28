<template>
  <v-card height="100%" id="stats-panel">
    <v-card-title v-text="'Output Statistics'" />
    <v-divider class="mx-4" color="grey" />
    <v-card-text>
      <div v-if="hideStats">Statistics will be displayed when a chart has been created</div>
      <div v-else>
        <v-simple-table v-for="(result, index) in resultsFormatted" class="mb-2" :key="`${result}-${index}`">
          <template v-slot:default v-if="result">
            <thead>
              <tr>
                <th colspan="2" class="text-body-1 text-left">{{ result }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(value, detail) of detailsWithoutValues[index]" :key="detail">
                <td>{{ resultProvider.convertCamelToTitleCase(detail) }}</td>
                <td class="text-right">{{ resultProvider.formatNumber(value) }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import IResultDetails from '@/interfaces/jobs/results/IResultDetails';
import { omit } from 'lodash';
import container from '@/dependencyInjection/config';
import TYPES from '@/dependencyInjection/types';
import IJobResultProvider from '@/interfaces/providers/IJobResultProvider';
import Result from '@/enums/jobs/results/result';

@Component
export default class OutputStatisticsPanel extends Vue {
  @Prop() details!: { x: IResultDetails | null; y: IResultDetails[] };

  @Prop() results!: { x: Result | null; y: Result[] };

  private resultProvider = container.get<IJobResultProvider>(TYPES.JobResultProvider);

  get resultsFormatted(): (string | null)[] {
    return [
      ...new Set(
        [this.results.x, ...this.results.y].map((r) =>
          r ? this.resultProvider.convertCamelToTitleCase(r as string) : r,
        ),
      ),
    ];
  }

  get hideStats(): boolean {
    return this.detailsWithoutValues.every((d) => !d);
  }

  get detailsWithoutValues(): ({ mean: number; minimum: number; maximum: number; stdDev: number } | null)[] {
    return [this.details.x, ...this.details.y].map((d) => (d ? omit(d, ['values']) : d));
  }
}
</script>

<style scoped lang="scss">
#stats-panel {
  max-height: 630px;
  overflow-y: auto;
}
</style>
