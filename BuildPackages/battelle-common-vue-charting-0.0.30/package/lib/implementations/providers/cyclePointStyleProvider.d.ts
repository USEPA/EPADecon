import { PointStyle } from 'chart.js';
import { IPointStyleProvider } from '../../interfaces/providers/IPointStyleProvider';
export declare class CyclePointStyleProvider implements IPointStyleProvider {
    constructor(styles?: PointStyle[]);
    private current;
    private styles;
    getNextStyle(): PointStyle;
}
