import { IColorProvider } from '../../interfaces/providers/IColorProvider';
export declare class CycleColorProvider implements IColorProvider {
    constructor(colorChoices?: string[]);
    private currentColor;
    private colorChoices;
    getNextColor(): string;
}
