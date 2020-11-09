({
    createItem : function(component, item) {
        //obtenemos el metodo saveItems del aura enabled del apex controller
        let action = component.get("c.saveItem");
        //ATTACH A DATA PAYLOAD     TO THE ACTION 
        action.setParams({
            "item":item
        });
        action.setCallback(this, function(response){
        let state = response.getState();
        if (state == 'SUCCESS') {
            let items = component.get("v.items");
            items.push(response.getReturnValue());
            component.set("v.items", items);
        }
        });
        $A.enqueueAction(action);
    }
})
