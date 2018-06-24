export interface IObjectInfo {
    [index: string]: undefined | number;
    new(): IObjectInfo;
    fields?: number
    functions?: number;
    events?: number;
    classes?: number;
}

