$ ->
	if location.href.indexOf("Home.aspx") isnt -1
		
		#Load the client object model only if the sp.js script is loaded on this page.
		ExecuteOrDelayUntilScriptLoaded loadCOM, "sp.js"

		#while true
		#	cosole.log(1);

		#Call the initCoffee function with passing only one parametre.
		#initCoffee("vardhaman")

		#Log all the hrefs on the page extracted from all the anchor links on the page.
		#console.log anchor.href for anchor in $("a")

		#Many SP devs have faced this following issue:
		#Check whether the current web is the root web and if its not, append a "/" to the end.
		currentUrl = _spPageContextInfo.webServerRelativeUrl
		currentFormattedUrl = if currentUrl is "/" then currentUrl else currentUrl + "/"
		#alert(currentFormattedUrl);

		#Create a new link
		myLink = $("<input id='cfLink' type='button' value='Click Me'/>")
		#Assign a click function to the link which sends the link itself as the first parameter
		myLink.click -> linkClicked (this)

		#Using jQuery method chaining, hide the ribbon and push myLink into the DOM after the ribbon container.
		$("#s4-ribbonrow").after myLink


#The initCoffee function has one required paramter (firstname) and one optional paramter (lastname) whose default valu has been provided.
initCoffee = (firstname, lastname="deshpande") ->
	#You can include wildcards whithin a string so you dont have to concatenate various strings together.
	alert "Hi #{firstname} #{lastname}! Welcome to CoffeeScript Demo on SharePoint"

#When this function is called, alert the current web server relavtive url.
linkClicked = (link) ->
	alert link.value

#Client Object Model Code Starts:

loadCOM = () ->
	context = new SP.ClientContext.get_current()
	web = context.get_web()
	context.load web
	context.executeQueryAsync  ->
								#Success Callback
								alert web.get_title()

							 , (sender,args)->
											#Failure CallBack
											alert "Failed. #{args.get_message()} \n #{args.get_stackTrace()}"


AddItem = () -> 
	context = new SP.ClientContext.get_current()
	list = context.get_web().get_lists().getByTitle "CoffeeList"
	listItemCreateInfo = new SP.ListItemCreationInformation
	listItem = list.addItem listItemCreateInfo
	listItem.set_item "Title","Mocha"
	listItem.update();
	context.executeQueryAsync ->
								#Success Callback
								alert "Item Added"

							 , (sender,args)->
											#Failure CallBack
											alert "Failed. #{args.get_message()} \n #{args.get_stackTrace()}"

UpdateItem = () ->
	context = new SP.ClientContext.get_current()
	list = context.get_web().get_lists().getByTitle "CoffeeList"
	listItem = list.getItemById 1
	listItem.set_item "Title", "Latte"
	listItem.update();
	context.executeQueryAsync  ->
								#Success Callback
								alert "Item Updated"

							 , (sender,args)->
											#Failure CallBack
											alert "Failed. #{args.get_message()} \n #{args.get_stackTrace()}"


DeleteItem = () ->
	context = new SP.ClientContext.get_current()
	list = context.get_web().get_lists().getByTitle "CoffeeList"
	listItem = list.getItemById 1
	listItem.deleteObject();
	context.executeQueryAsync  ->
								#Success Callback
								alert "Item Deleted"

							 , (sender,args)->
											#Failure CallBack
											alert "Failed. #{args.get_message()} \n #{args.get_stackTrace()}"


GetItems = () ->
	context = new SP.ClientContext.get_current()
	list = context.get_web().get_lists().getByTitle "CoffeeList"
	listItems = list.getItems ''
	context.load listItems
	context.executeQueryAsync  ->
								#Success CallBack
								itemEnum = listItems.getEnumerator()
								alert itemEnum.get_current().get_item "Title" while itemEnum.moveNext()
							,(sender,args)->
											#Failure CallBack
											alert "Failed. #{args.get_message()} \n #{args.get_stackTrace()}"
	
	