<template>
  <v-card height="100%">
    <v-card-title v-text="'Output Statistics'"></v-card-title>
    <v-divider class="mx-4" color="grey"></v-divider>
    <v-card-text>
      <div v-if="!results.length">Statistics will be displayed when a chart has been created</div>
      <div v-else>
        <v-simple-table v-for="(result, index) in results" :key="result">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-body-1 text-left">{{ result }}</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(value, detail) of detailsWithoutValues[index]" :key="detail">
                <td>{{ resultProvider.convertCamelToTitleCase(detail) }}</td>
                <td class="text-right">{{ value }}</td>
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

@Component
export default class OutputStatisticsPanel extends Vue {
  @Prop() details!: IResultDetails[];

  @Prop() results!: string[];

  private resultProvider = container.get<IJobResultProvider>(TYPES.JobResultProvider);

  get detailsWithoutValues(): { mean: number; minimum: number; maximum: number; stdDev: number }[] {
    return this.details.map((d) => omit(d, ['values']));
  }
}
</script>

<style></style>
