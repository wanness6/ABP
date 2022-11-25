import { LightningElement, wire } from 'lwc';
import ACCOUNT_ID from '@salesforce/schema/Account.Id';
import OLD_VALUE from '@salesforce/schema/Asset_History__c.OldValue__c';
import NEW_VALUE from '@salesforce/schema/Asset_History__c.NewValue__c';
import CHANGEDBY from '@salesforce/schema/Asset_History__c.LastChangedById__c';
import getAssetHistory from '@salesforce/apex/AssetHistory.getAssetHistory';
const COLUMNS = [
    { label: 'Account Id', fieldName: ACCOUNT_ID.fieldApiName, type: 'text' },
    { label: 'Old value', fieldName: OLD_VALUE.fieldApiName, type: 'text' },
    { label: 'New value', fieldName: NEW_VALUE.fieldApiName, type: 'text' },
    { label: 'Changed by', fieldName: CHANGEDBY.fieldApiName, type: 'text' }
    //test
];
export default class hisoryTracking extends LightningElement {
    columns = COLUMNS;
    @wire(getAssetHistory)
    assetHistory;
}