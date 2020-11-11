({
    createItem: function(component, newItem){
        let addItem = component.getEvent("addItemEvent");
        addItem.setParams({"item":newItem});
        addItem.fire(); 
        component.set("v.newItem", {'sobjectType':'Camping_Item__c', 
        'Name':'',
        'Quantity__c':0, 
        'Price__c': 0,
        'Packed__c':false});
    }
})
