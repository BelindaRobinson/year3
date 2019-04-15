/*
 * Constructor function for a PhoneWidget instance.
 * 
 * container_element : a DOM element inside which the widget will place its UI
 *
 */
 
function PhoneWidget(container_element){
	
	//declare variables for the data properties of the widget
	
	var _list = [];   //an array of currently downloaded phone listings as PhoneLine objects
	var _request ;    //the XHR request object
	var _currentSortOrder = 1;    //keep track of how the data is sorted, default is 1 = sort by name
	
	var _ui = {     //an inner object literal representing the widget's UI
		
		sortByName  :   null,    //a button to sort by name
		sortById	:   null,    // a button to sort by id
		nameEntry   :   null,    // for entering a name to find
		nameFind    :   null,    //button to find name
		container	:	null,	// the container for all of the UI elements
		titlebar	:	null,	//div to organise UI elements
		toolbar		: 	null,   //div to organise UI elements
		list		: 	null,  //the div area which will hold the PhoneLine object UIs
	};


	//private method to construct the DOM subtree for the UI and put into container element
	var _createUI = function(){
	
	//create the container for all of the UI elements and set up the titlebar
		_ui.container = container_element;
		_ui.container.className = "monitor";
		_ui.titlebar = document.createElement("div");
		_ui.titlebar.className = "title";
		_ui.titlebar.label = document.createElement("span");
		_ui.titlebar.label.innerHTML = "Contact Details ";
		_ui.titlebar.appendChild(_ui.titlebar.label);
		
		//now create and set up the toolbar elements
		_ui.toolbar = document.createElement("div");
		_ui.nameEntry = document.createElement("input");
		//set any other properties you need for the nameEntry element
		
		_ui.nameFind = document.createElement("button");
		//add things like the button label and onclick behaviour
	
		_ui.sortByName = document.createElement("button");
		//add things like the button label and onclick behaviour
		_ui.sortById = document.createElement("button");
		//add things like the button label and onclick behaviour
		
		_ui.toolbar.appendChild(_ui.nameEntry);
		//append all of the other elements needed to toolbar in the same way
		
		//finally create the div which will hold the PhoneList items
		_ui.list = document.createElement("div");
		
		//add the three components to the _ui container
		_ui.container.appendChild(_ui.titlebar);
		_ui.container.appendChild(_ui.toolbar);
		_ui.container.appendChild(_ui.list);

		//end of UI creation function
	}
		 

	//private methods for the rest of the functionality are below 

	 /**
	  *  function to add a new name to the list
	  * first checks if name is already displayed
	  * if not then makes the AJAX request to get the details for this name
	  */  
	var _addNewName = function(name){
	
		//first check if this person is already in the list
		//by iterating over the _list array
		//if they are already there let the user know

		//otherwise make an AJAX request
		_request = new XMLHttpRequest();
		var url = "php/getPhone.php?name=" + name;
		//  etc. usual AJAX setup and send
	}
	
	/**
	 *  AJAX Callback function 
	 *  Checks if data was returned
	 *  if yes then create a new PhoneLine item with the data and add to _list array
	 *  calls _refreshPhoneList to update the UI display with the new data
	 */
	 	var _addNewPhoneListItem = function(){
		
			if (_request.readyState == 4) {
				if (_request.status == 200) {
					var data = JSON.parse(_request.responseText);
					if(data.length == 0){
						alert("No such person");
						return;
					}
					var n = data[0].name;
					var p = data[0].phone;
					var i = data[0].ID;
				
					var pitem = new PhoneLine(n,p,i); //create a PhoneLine instance
					_list.push(pitem);   //add it to the _list array
					_refreshPhoneList();  //refresh the UI display on the page

				}
			}
		}
		
			  
	 /**
	 * private method to refresh the phonelist display
	 * first removes all displayed items
	 * then makes sure sort order for _list is correct
	 * then adds each item in _list to the _ui display
	 */
	 var _refreshPhoneList = function() {
	 	//first remove all child nodes of the ui.list div
	 	if(_ui.list == null)
	 		return;
	 	while(_ui.list.hasChildNodes()){
	 		_ui.list.removeChild(_ui.list.lastChild);
	 	}
	 	//make sure the data is correctly sorted

		if(_currentSortOrder == 1){
	 		_list.sort(_namesort);
	 	} else {
	 		_list.sort(_phonesort);
	 	}
	 	
	 	//add all items back to the UI
	 	for(var i = 0; i < _list.length; i++){
	 		var pline = _list[i];
	 		_ui.list.appendChild(pline.getDomElement());
	 	}
	 }

	
	/**
	 *  private method to sort the data - sets the _currentSortParameter and then
	 *  calls _refreshPhoneList where the sorting occurs and display is updated
	 */
	  
	 var _doSort = function(sortBy){
	 	if(sortBy == 1){
	 	_currentSortOrder = 1;	 	
	 	}
	 	else{
	 		_currentSortOrder = 0;
	 	}
		 	_refreshPhoneList();
	 }
	 
	 /**
	  *  Comparator functions for sorting phonelist items
	  */	  
	
	
	var _phonesort = function(a,b){
		return a.getPhone() - b.getPhone();
	}
	
	var _namesort = function(a, b){
		if(a.getName() > b.getName())
			return 1;
		else if (a.getName() < b.getName())
			return -1;
		else
			return 0;
		}

	 
	 /**
	  * private method to intialise the widget's UI on start up
	  */
	  var _initialise = function(container_element){
	  	_createUI(container_element);

	  	}
	  	
	  _initialise(container_element);   //finally call the _initialise function 
	  
	  	
	/**
	* Constructor function for an inner object to hold the phone data for a person
	*/

	var PhoneLine = function(name, phone, id){
		
		//declare variables for the data properties
		
		var _name = name;
		var _phone = phone;
		var _id = id;
	
		var _ui = {					//an object literal representing the UI for the name info			
			dom_element  : null,   //the dom element for each line of data
			name_label   : null,   //label for the visible data - name
			phone_label  : null,   //label for the visible data - phone number
		};
		
		/* function to create the DOM elements needed for the PhoneLine UI
		*/
		var _createUI = function(){
				
			_ui.dom_element = document.createElement('div');
			//etc, create elements for all of the items in the _ui object
		
			_ui.dom_element.appendChild(_ui.name_label);
			_ui.dom_element.appendChild(_ui.phone_label);

		};
		

		//getter methods for all of the private data
	
		//public method to return the Dom element so the PhoneWidget can add it to its own UI
		this.getDomElement = function(){
			return _ui.dom_element;
		}
	
		this.getName = function(){
			return _name;
		}	
	
		this.getPhone = function(){
			return _phone;
		}
	
		this.getId = function(){
			return _id;
		}	
	
		_createUI();    //call this function last to build the UI
	 
  };  //end of PhoneLine constructor function
  
  
}  //end of PhoneWidget constructor function
	 

	 
	 