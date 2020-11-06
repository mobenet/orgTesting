({
    createCampingItems: function(component, newCampingItem){
        //creo la action setting the appexcontroller method saveCamping
        let action = component.get("c.saveItem");
        //seteo parametros . we attach a payload que son los
        //datos del nuevo camping item. le damos un JSON style obj
        action.setParams({
            "newCampingItem": newCampingItem
        });
       //set callback request. lo que pasara cuando el server devuelva una response
        action.setCallback(this, function(response){
            let state = response.getState();
            if(state==="SUCCESS"){
                let campings = component.get("v.items");
                campings.push(response.getReturnValue());
                component.set("v.items", campings);
            }
        });
        $A.enqueueAction(action);
    }		
	
})