import { Vue } from 'vue-property-decorator';
import { ChartType } from 'chart.js';
import { IChartSeries } from '../interfaces/data/IChartSeries';
import { IChartPoint } from '../interfaces/data/IChartPoint';
export default class MultiSeriesChart extends Vue {
    baseline: IChartPoint[];
    current: IChartPoint[];
    requestedChartType: ChartType;
    xAxisLabel: string;
    yAxisLabel: string;
    xAxisScale: string;
    yAxisScale: string;
    yScaleMax: number;
    yScaleMin: number;
    draggableDataSet: number;
    forceXAxisMinZero: boolean;
    showDataPoints: boolean;
    dragYaxis: boolean;
    get dataPointSize(): number;
    get dataSeries(): IChartSeries[];
    static multiSeriesDefaultChartProperties(seriesIndex: number): Record<string, unknown>;
    valueChanged(index: number, datasetIndex: number, chart: Chart): void;
}
