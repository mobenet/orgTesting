({
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

    }


})
