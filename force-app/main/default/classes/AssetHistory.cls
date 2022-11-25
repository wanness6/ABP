public with sharing class AssetHistory {
    @AuraEnabled(cacheable=true)
    public static List<Asset_History__c> getAssetHistory() {
        return [
            SELECT OwnerId, OldValue__c, NewValue__c, LastChangedById__c
            FROM Asset_History__c
            WITH SECURITY_ENFORCED
        ];
    }
}