export { default as ExpoInAppPurchasesView } from './ExpoInAppPurchasesView';
declare type ValidItemType = 'inapp' | 'subs';
interface QueryResponse {
    responseCode: Number;
    results: Array<object>;
}
export declare function connectToAppStoreAsync(): Promise<QueryResponse>;
export declare function queryPurchasableItemsAsync(itemType: ValidItemType, itemList: string[]): Promise<QueryResponse>;
export declare function initiatePurchaseFlowAsync(itemId: String, oldItem?: String): Promise<void>;
export declare function disconnectAsync(): Promise<void>;
