({
    clickCreateItem : function(component, event, helper) {
        let validItem = component.find('itemform').reduce(function (validSoFar, inputCmp){
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        if (validItem){
            let newItem = component.get("v.newItem");
            console.log("Create new item : " + JSON.stringify(newItem));
            let theItems = component.get("v.items");
            theItems.push(newItem);
            component.set("v.items", theItems);
        }
        component.set("v.newItem", {'sobjectType':'Camping_Item__c', 
                    'Name':'',
                    'Quantity__c':0, 
                    'Price__c': 0,
                    'Packed__c':false});
    }
})
