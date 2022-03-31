import { PointStyle } from 'chart.js';
import { IPointStyleProvider } from '../../interfaces/providers/IPointStyleProvider';
export declare class ConstantPointStyleProvider implements IPointStyleProvider {
    constructor(type: PointStyle);
    private type;
    getNextStyle(): PointStyle;
}
