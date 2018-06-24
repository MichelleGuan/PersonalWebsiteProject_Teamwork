import { JsSysAPI } from "../routes/home/homeTypes";
import { AnyAction } from "redux";
import { infiniteTake, DataUrl, take } from "../data/fetch";

export type FetchAction<T> = { type: any, data: Promise<T> };

export type HomeActionType = "getSysAPIName" | "getSysKeywordName" | "getNewFeaturesName" | undefined;

export class HomeAction implements AnyAction {
    [extraProps: string]: any;
    type: HomeActionType;

    static getData<T>(type: HomeActionType): FetchAction<T> {

        switch (type) {
            case 'getSysAPIName':
                return {
                    type: 'getSysAPIName',
                    data: take<T>(DataUrl.JsSysAPIAddress)
                }
            case 'getSysKeywordName':
                return {
                    type: 'getSysKeywordName',
                    data: take<T>(DataUrl.keywordsAddress)
                }
            default:
                return {
                    type: undefined,
                    data: take<T>('')
                }
        }


    }
}



export function homeReducer(previousState = 1, action: HomeAction) {
    switch (action.type) {
        case 'getSysAPIName':
            return previousState;
        case 'getSysKeywordName':
            return previousState;
        default:
            return previousState
    }
}