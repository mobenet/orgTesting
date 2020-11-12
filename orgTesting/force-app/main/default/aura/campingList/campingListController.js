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
    

    handleUpdateItem: function(component, event, helper){
        let updatedItem = event.getParam("item");
        this.updateItem(component, updatedItem); 
    },

    
    handleAddItem: function (component, event, helper){
        let createdItem = event.getParam("item");
        this.createItem(component, createdItem);
    },


    saveItem: function(component, item, callback){
        //obtenemos el metodo de saveItems del aura enabled apex controller
        let action = component.get("c.saveItem"); 
        //attachamos a data payload
        action.setParams({
            "item":newItem
        });
        //si hay callback sera la createItem 
        if (callback) {
            action.setCallback(this, callback);
        }
        $A.enqueueAction(action); 
    },

    createItem : function(component, item) {
        this.saveItem(component, item, function(response){
            let state = response.getState();
            if (state == 'SUCCESS') {
                let items = component.get("v.items");
                items.push(response.getReturnValue());
                component.set("v.items", items);
            }
        });
    },

    updateItem: function(component, item){
      this.saveItem(component, item); 
    }
})
