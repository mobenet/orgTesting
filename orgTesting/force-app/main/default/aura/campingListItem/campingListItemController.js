({
    clickPacked : function(component, event, helper) {
        //gets the event that changed
        let item = component.get("v.item");
        //creates an event named updateItem 
        let updateEvent = component.getEvent("updateItem");
        //packages item into the event
        updateEvent.setParams({ "item":item});
        //fires the event
        updateEvent.fire();
    },
    
})
