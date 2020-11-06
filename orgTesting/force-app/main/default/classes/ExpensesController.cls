public with sharing class ExpensesController {
	@AuraEnabled
    public static List<Expense__c> getExpenses(){
        //Primer de tot hem de comprobar que tots els fields 
    	//son accesibles per l'user
        String[] fieldsToCheck = new String[] {
            'Id', 'Name', 'Amount__c', 'Client__c', 
            'Reimbursed__c', 'CreatedDate'
        };
        Map<String,Schema.SObjectField> fieldDescribeTokens =
            Schema.SObjectType.Expense__c.fields.getMap();
        for(String field: fieldsToCheck){
            if( ! fieldDescribeTokens.get(field).getDescribe().isAccessible()){
                throw new System.NoAccessException();
            }
        }
        //Son accessibles per tant: 
        return [SELECT Id, Name, Amount__c, Client__c, 
               Reimbursed__c, CreatedDate
               FROM Expense__c];
    }
    
    @AuraEnabled
    public static Expense__c saveExpense(Expense__c expense){
        upsert expense;
        return expense;
    }
}