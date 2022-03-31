import { ChartDataset, ScatterDataPoint } from 'chart.js';
import { IColorProvider } from '../../interfaces/providers/IColorProvider';
import { IPointStyleProvider } from '../../interfaces/providers/IPointStyleProvider';
export declare const ScatterChartDatasetDefaultSettings: Partial<ChartDataset<'scatter'>>;
export declare function CreateScatterChartDataset(data: ScatterDataPoint[], label: string, colorProvider: IColorProvider, pointStyleProvider?: IPointStyleProvider, backgroundColor?: string, borderColor?: string): ChartDataset;
