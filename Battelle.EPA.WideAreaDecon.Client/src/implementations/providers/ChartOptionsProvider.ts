import TYPES from '@/dependencyInjection/types';
import IResultDetails from '@/interfaces/jobs/results/IResultDetails';
import IChartOptionsProvider from '@/interfaces/providers/IChartOptionsProvider';
import IJobResultProvider from '@/interfaces/providers/IJobResultProvider';
import { ChartOptions, ChartScales, ChartTooltipCallback } from 'chart.js';
import { inject, injectable } from 'inversify';
import { DefaultChartOptions } from 'battelle-common-vue-charting/src';

@injectable()
export default class ChartOptionsProvider implements IChartOptionsProvider {
  private resultProvider: IJobResultProvider;

  constructor(@inject(TYPES.JobResultProvider) resultsProvider: IJobResultProvider) {
    this.resultProvider = resultsProvider;
  }

  details?: IResultDetails;

  private histogramCallback: ChartTooltipCallback = {
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

  private histogramScales: ChartScales = {
    xAxes: [
      {
        scaleLabel: {
          display: false,
        },
        ticks: {
          callback: (value: number): string => this.resultProvider.formatNumber(value),
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          callback: (value: number): string => this.resultProvider.formatNumber(value),
        },
        scaleLabel: {
          display: true,
          labelString: 'Number of Realizations',
        },
      },
    ],
  };

  private pieCallback: ChartTooltipCallback = {
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

  private pieScales: ChartScales = {};

  private scatterCallback: ChartTooltipCallback = {
    label: (item) => {
      const x = this.resultProvider.formatNumber(Number(item.xLabel));
      const y = this.resultProvider.formatNumber(Number(item.yLabel));
      return `(${x}, ${y})`;
    },
  };

  private scatterScales: ChartScales = {
    xAxes: [
      {
        scaleLabel: {
          display: false,
        },
        ticks: {
          callback: (value: number): string => this.resultProvider.formatNumber(value),
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          callback: (value: number): string => this.resultProvider.formatNumber(value),
        },
        scaleLabel: {
          display: false,
        },
      },
    ],
  };

  // eslint-disable-next-line class-methods-use-this
  private getChartOptions(tooltipCallback: ChartTooltipCallback, scales: ChartScales): ChartOptions {
    const options = new DefaultChartOptions();

    options.tooltips = {
      enabled: true,
      callbacks: tooltipCallback,
    };

    options.scales = scales;

    return options;
  }

  // eslint-disable-next-line class-methods-use-this
  getDefaultOptions(): ChartOptions {
    return new DefaultChartOptions();
  }

  getHistogramOptions(): ChartOptions {
    return this.getChartOptions(this.histogramCallback, this.histogramScales);
  }

  getPieOptions(): ChartOptions {
    return this.getChartOptions(this.pieCallback, this.pieScales);
  }

  getScatterOptions(): ChartOptions {
    return this.getChartOptions(this.scatterCallback, this.scatterScales);
  }
}
