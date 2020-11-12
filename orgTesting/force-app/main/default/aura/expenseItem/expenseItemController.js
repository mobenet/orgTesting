({
    doInit : function(component, event, helper) {
        let mydate = component.get("v.expense.Date__c");
        if(mydate){
            component.set("v.formatdate", new Date(mydate));
        }
    },

    clickReimbursed : function(component, event, helper) {
        //gets the expense that changed
        let expense = component.get("v.expense");
        //creates an event called updateExpense
        let updateEvent = component.getEvent("updateExpense");
        //packages expense into event 
        updateEvent.setParams({ "expense":expense});
        //fires event
        updateEvent.fire(); 
    }
})