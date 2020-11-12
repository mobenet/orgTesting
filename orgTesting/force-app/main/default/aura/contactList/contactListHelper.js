({
    loadContacts : function(cmp) {
        //load all contact data
        //call the apex controller method getContacts
        let action = cmp.get("c.getContacts");
        //set callback behaviur for when response from server is received
        action.setCallback(this, function(response){
            let state = response.getState();
            if (state==="SUCCESS"){
                //this updates the view with the contact data
                cmp.set("v.contacts", response.getReturnValue());
                cmp.set("v.contactList", response.getReturnValue());
                //this updates the total number of contacts 
                this.updateTotal(cmp);
            }
            //display toast message to indicate load status
            var toastEvent = $A.get("e.force:showToast");
            if (state === "SUCCESS"){
                toastEvent.setParams({
                    "title": "Success!",
                    "message": " Your contacts have been loaded correctly."
                });
            }
            else {
                toastEvent.setParams({
                    "title": "Error!",
                    "message": "Something went wrong."
                });
            }
            toastEvent.fire();
        });
        $A.enqueueAction(action);
    },

    updateTotal: function(cmp){
        let contacts = cmp.get("v.contacts");
        cmp.set("v.totalContacts", contacts.length); 
    }
})