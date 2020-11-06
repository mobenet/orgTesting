({ 
	//load expenses from salesforce
    doInit: function(component, event, helper){
        //create the action getting the apexcontroller method
        let action = component.get("c.getItems");
        //Add callback behaviour for when response is received
        action.setCallback(this, function(response){
            let state=response.getStatre();
            if(!state==="SUCCESS"){
                component.set("v.items", response.getReturnValue());
            }
            else {
                console.log("Failed with state: "+ state);
            }
        });
   		//send action off to be executed
   		$A.enqueueAction(action);
    }, 
    
    
	clickCreateItem : function(component, event, helper) {
		 var validCamping = component.find('campingform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        // If we pass error checking, do some real work
        if(validCamping){
            // Create the new expense
            
            let newCampingItem = component.get("v.newItem");
			console.log("Create camping: " + JSON.stringify(newCampingItem));
        	helper.createCampingItems(component, newCampingItem);
        }		
	}
})