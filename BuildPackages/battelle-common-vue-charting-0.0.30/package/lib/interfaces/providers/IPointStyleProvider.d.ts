import { PointStyle } from 'chart.js';
export interface IPointStyleProvider {
    getNextStyle(): PointStyle;
}
