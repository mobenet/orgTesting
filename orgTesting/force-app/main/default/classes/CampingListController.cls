public with sharing class CampingListController {
	@AuraEnabled
    public static List<Camping_Item__c> getItems(){
        //primer comprovem que tots els fields son accesibles
        //pel user
        String[] fieldsToCheck = new String[]{
            'Id', 'Name', 'Quantity__c', 'Price__c', 'Packed__c'};
       
        //obtinc el map dels fields del objecte camping_item__c
       	Map<String,Schema.SObjectField> fieldDescribeTokens =
                Schema.SObjectType.Camping_Item__c.fields.getMap();
        //recorro els fields a chequejar per veure si son accesibles
        for(String field: fieldsToCheck){
            if(!fieldDescribeTokens.get(field).getDescribe().isAccessible()){
                throw new System.NoAccessException();
            }
        }
        //ho son:
        return [SELECT Id, Name, Quantity__c, Price__c, Packed__c
               FROM Camping_Item__c];  
    }
    
    @AuraEnabled
    public static Camping_Item__c saveItem(Camping_Item__c item){
        upsert item; 
        return item; 
    }
}