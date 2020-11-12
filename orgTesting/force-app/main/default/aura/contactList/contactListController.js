({
    doInit : function(component, event, helper) {
        //retrieve contacts from salesforce
        helper.loadContacts(component);
    },

    handleSelect: function(component, event, helper){

        var contacts = component.get("v.contacts");
        var contactList = component.get("v.contactList");

        //get the selected option: "Referral", "Social Media" or "All"
        var selected = event.getSource().get("v.value");

        var filter = [];
        var k = 0;

        for (var i = 0; i<contactList.length; i++){
            var c = contactList[i];
            if (selected != "All"){
                if (c.LeadSource == selected){
                    filter[k] = c; 
                    k++;
                }
            }
            else {
                filter = contactList;   
            }
        }
        //set the filtered list of contacts based on the selected option
        component.set("v.contacts", filter);
        //cridem al helper per a que faci els server-side actions de update the view and the total number 
        //of contacts 
        helper.updateTotal(component);
    }
})
