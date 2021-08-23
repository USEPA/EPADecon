import { ChartOptions } from 'chart.js';
import IResultDetails from '../jobs/results/IResultDetails';

/** Provides default chart options for various kinds of charts */
export default interface IChartOptionsProvider {
  /** The result details of the chart being displayed.
   *   Required for histogram options.
   */
  details?: IResultDetails;

  /** Get default chart options */
  getDefaultOptions(): ChartOptions;

  /** Get default chart options for a histogram */
  getHistogramOptions(): ChartOptions;

  /** Get default chart options for a pie chart */
  getPieOptions(): ChartOptions;

  /** Get default chart options for a scatter plot */
  getScatterOptions(): ChartOptions;
}
