public with sharing class ContactController {
    @AuraEnabled
    public static List<Contact> getContacts(){
        //primer comprovem que son accesibles per l'user
        String[] fieldsToCheck = new String[] {
            'Id', 'Name', 'MailingStreet', 'Phone', 'Email', 'LeadSource'
        };

        //obtengo el map de los fields de Contact
        Map<String,Schema.SObjectField> fieldDescribeTokens =
            Schema.SObjectType.Contact.fields.getMap();
        
        //recorro para ver si son accesibles los fields seleccionados
        for(String field: fieldsToCheck){
            if (! fieldDescribeTokens.get(field).getDescribe().isAccessible()){
                throw new System.NoAccessException();
            }
        }
        //son accessibles per tant:
        return [SELECT Id, Name, MailingStreet, Phone, Email, LeadSource FROM Contact ];
    }

}
      