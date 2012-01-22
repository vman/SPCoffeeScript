$ ->
	if location.href.indexOf("Home.aspx") isnt -1
		
		ExecuteOrDelayUntilScriptLoaded loadCOM, "sp.js"

		#Call the initCoffee function with passing only one parametre.
		initCoffee("vardhaman")
	
		#Create a new link
		myLink = $("<a id='cfLink' href='#'>Click Me!</a>")
		#Assign a click function to the link which sends the link itself as the first parameter
		myLink.click -> linkClicked (this)

		#Using jQuery method chaining, hide the ribbon and push myLink into the DOM after the ribbon container.
		$("#s4-ribbonrow").hide().after(myLink)
		
#The initCoffee function has one required paramter (firstname) and one optional paramter (lastname) whose default valu has been provided.
initCoffee = (firstname, lastname="deshpande") ->
	#You can include wildcards whithin a string so you dont have to concatenate various strings together.
	alert "Hi #{firstname} #{lastname}! Welcome to CoffeeScript Demo on SharePoint"

#When this function is called, alert the current web server relavtive url.
linkClicked = (link) ->
	alert _spPageContextInfo.webServerRelativeUrl

web = null;

loadCOM = () ->
	context = new SP.ClientContext.get_current()
	web = context.get_web()
	context.load web
	context.executeQueryAsync Success, Failure

Success = (sender,args) ->
	alert web.get_title()

Failure = (sender, args) ->
	alert "Failed. #{args.get_message()}"