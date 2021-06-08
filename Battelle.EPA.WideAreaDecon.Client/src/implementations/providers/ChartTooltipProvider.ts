import TYPES from '@/dependencyInjection/types';
import IResultDetails from '@/interfaces/jobs/results/IResultDetails';
import IChartTooltipProvider from '@/interfaces/providers/IChartTooltipProvider';
import IJobResultProvider from '@/interfaces/providers/IJobResultProvider';
import { ChartTooltipCallback } from 'chart.js';
import { inject, injectable } from 'inversify';

@injectable()
export default class ChartTooltipProvider implements IChartTooltipProvider {
  private resultProvider: IJobResultProvider;

  constructor(@inject(TYPES.JobResultProvider) resultsProvider: IJobResultProvider) {
    this.resultProvider = resultsProvider;
  }

  details?: IResultDetails;

  histogramCallback: ChartTooltipCallback = {
    title: ([item], data) => {
      if (!this.details) {
        return '';
      }

      const ticks = data.labels as number[];
      const index = item.index ?? 0;
      const upper = this.resultProvider.formatNumber(ticks[index + 1] ?? this.details.maximum);
      const lower = this.resultProvider.formatNumber(ticks[index]);

      return `${lower} - ${upper}`;
    },
  };

  pieCallback: ChartTooltipCallback = {
    title: ([item], data) => {
      const index = item.index ?? 0;
      return data.labels?.[index].toString() ?? '';
    },
    label: (item, data) => {
      const index = item.index ?? 0;
      const value = (data.datasets?.[0].data?.[index] as number) ?? 0;
      return this.resultProvider.formatNumber(value);
    },
  };

  scatterCallback: ChartTooltipCallback = {
    label: (item) => {
      const x = this.resultProvider.formatNumber(Number(item.xLabel));
      const y = this.resultProvider.formatNumber(Number(item.yLabel));
      return `(${x}, ${y})`;
    },
  };
}
