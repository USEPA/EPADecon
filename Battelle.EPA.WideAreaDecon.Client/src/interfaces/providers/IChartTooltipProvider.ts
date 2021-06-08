import { ChartTooltipCallback } from 'chart.js';
import IResultDetails from '../jobs/results/IResultDetails';

export default interface IChartTooltipProvider {
  /** The result details of the chart being displayed.
   *   Required for histogram callback.
   */
  details?: IResultDetails;

  /** Callback for displaying histogram tooltips.
   *  Requires details being set.
   */
  histogramCallback: ChartTooltipCallback;

  /** Callback for displaying pie chart tooltips. */
  pieCallback: ChartTooltipCallback;

  /** Callback for displaying scatter plot tooltips. */
  scatterCallback: ChartTooltipCallback;
}
