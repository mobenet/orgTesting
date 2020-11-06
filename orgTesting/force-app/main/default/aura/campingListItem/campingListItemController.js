({
    packItem : function(component, event, helper) {
        var newMessage = event.getSource().get("v.label");
        console.log("handleClick2: Message: " + newMessage);
        component.set("v.item.Packed__c", true);
        component.set("v.packed!",disabled="true");
    },
    
})
