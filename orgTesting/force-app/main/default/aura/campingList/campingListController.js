({
    
    //load items from salesforce
    doInit: function(component, event, helper) {
        //create the action
        let action = component.get("c.getItems");
        //add callback behaviour for when response is received
        action.setCallback(this, function(response){  //this is the action handler function itself
            let state  = response.getState();
            if(state=== "SUCCESS"){
                component.set("v.items", response.getReturnValue());
            }
            else{
            console.log("failed with state: "+ state);
            }
        });
        //send action off to be executed
        $A.enqueueAction(action); 
    },
    
    clickCreateItem : function(component, event, helper) {
        let validItem = component.find('itemform').reduce(function (validSoFar, inputCmp){
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        if (validItem){
            let newItem = component.get("v.newItem");
            console.log("Create new item : " + JSON.stringify(newItem));
            helper.createItem(component, newItem);
        }
        component.set("v.newItem", {'sobjectType':'Camping_Item__c', 
            'Name':'',
            'Quantity__c':0, 
            'Price__c': 0,
            'Packed__c':false});
    }
})
