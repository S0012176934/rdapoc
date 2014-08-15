sap.ui.controller("view.MainView", {
	logonDialog: null,
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf saprdapoc.MainView
*/
//	onInit: function() {
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf saprdapoc.MainView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf saprdapoc.MainView
*/
	onAfterRendering: function() {
		this.logonDialog = sap.ui.xmlfragment("logon.Logon", this);
		//this.getView().addDependent(this.logonDialog);
		//jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView(), logonBox);
		this.logonDialog.open();

	},

	logonClicked: function() {
		this.logonDialog.close();
	},
	
	openTierSettings: function() {
		this.logonDialog = sap.ui.xmlfragment("dialogs.TierSettings", this);
		//this.getView().addDependent(this.logonDialog);
		//jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView(), logonBox);
		this.logonDialog.open();
	},
	
	 fnClose:function(oResult){
	        if (oResult) {
	            jQuery.sap.log.info("ConfirmDialog - isConfirmed: " + oResult.isConfirmed);
	            if (oResult.sNote) {
	                jQuery.sap.log.info("ConfirmDialog - note: " + oResult.sNote);
	            }
	        }
	    }	
/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf saprdapoc.MainView
*/
//	onExit: function() {
//
//	}

});