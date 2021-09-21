import TYPES from '@/dependencyInjection/types';
import IResultDetails from '@/interfaces/jobs/results/IResultDetails';
import IChartOptionsProvider from '@/interfaces/providers/IChartOptionsProvider';
import IJobResultProvider from '@/interfaces/providers/IJobResultProvider';
import { ChartOptions, ChartType, ScaleChartOptions, TooltipCallbacks } from 'chart.js';
import { inject, injectable } from 'inversify';
import { CreateDefaultChartOptions } from 'battelle-common-vue-charting';

@injectable()
export default class ChartOptionsProvider implements IChartOptionsProvider {
  private resultProvider: IJobResultProvider;

  constructor(@inject(TYPES.JobResultProvider) resultsProvider: IJobResultProvider) {
    this.resultProvider = resultsProvider;
  }

  details?: IResultDetails;

  private tickCallback = (value: number): string => this.resultProvider.formatNumber(value);

  private histogramCallback: Partial<TooltipCallbacks<'bar'>> = {
    title: (tooltipItems) => {
      if (!this.details) {
        return '';
      }

      const index = tooltipItems[0].dataIndex;
      const ticks =
        tooltipItems[0].chart.data.labels?.map((l) => Number.parseFloat((l as string).replace(/,/g, ''))) ?? [];

      if (ticks.length === 1) {
        return this.resultProvider.formatNumber(ticks[0]);
      }

      const upper = this.resultProvider.formatNumber(
        index === ticks.length - 1 ? this.details.maximum : ticks[index + 1],
      );
      const lower = this.resultProvider.formatNumber(index === 0 ? this.details.minimum : ticks[index]);

      return `${lower} - ${upper}`;
    },
  };

  private histogramScales = {
    y: {
      title: {
        display: true,
        text: 'Number of Realizations',
      },
      ticks: {
        callback: this.tickCallback,
      },
      beginAtZero: true,
    },
  };

  private pieCallback: Partial<TooltipCallbacks<'pie'>> = {
    title: (toolTipItems) => {
      return toolTipItems[0].dataset.label ?? '';
    },
    label: (tooltipItem) => this.resultProvider.formatNumber(tooltipItem.parsed),
  };

  private pieScales = {};

  private scatterCallback: Partial<TooltipCallbacks<'scatter'>> = {
    label: (tooltipItem) => {
      const data = tooltipItem.parsed;
      const x = this.resultProvider.formatNumber(data.x);
      const y = this.resultProvider.formatNumber(data.y);
      return `(${x}, ${y})`;
    },
    title: (tooltipItems) => {
      return tooltipItems.length > 1
        ? `Runs ${tooltipItems.map((i) => i.dataIndex + 1).join(', ')}`
        : `Run ${tooltipItems[0].dataIndex + 1}`;
    },
  };

  private scatterScales = {
    x: {
      title: {
        display: false,
      },
      ticks: {
        callback: this.tickCallback,
      },
    },
    y: {
      title: {
        display: false,
      },
      ticks: {
        callback: this.tickCallback,
      },
      beginAtZero: true,
    },
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private getChartOptions(tooltipCallback: any, scales: Partial<ScaleChartOptions<ChartType>>): ChartOptions {
    const options = this.getDefaultOptions();

    options.plugins = {
      tooltip: {
        enabled: true,
        callbacks: tooltipCallback,
      },
    };

    options.scales = scales;

    return options;
  }

  // eslint-disable-next-line class-methods-use-this
  getDefaultOptions(): ChartOptions {
    return CreateDefaultChartOptions();
  }

  getHistogramOptions(): ChartOptions {
    // @ts-expect-error (types for chart.js wants ALL properties defined on scales)
    const opts = this.getChartOptions(this.histogramCallback, this.histogramScales);
    if (opts.plugins) {
      // hide legend on histograms
      opts.plugins.legend = {
        display: false,
      };
    }
    return opts;
  }

  getPieOptions(): ChartOptions {
    return this.getChartOptions(this.pieCallback, this.pieScales);
  }

  getScatterOptions(): ChartOptions {
    // @ts-expect-error (types for chart.js wants ALL properties defined on scales)
    return this.getChartOptions(this.scatterCallback, this.scatterScales);
  }
}
