$(document).ready ->
	if location.href.indexOf("Home.aspx") isnt -1
		# alert "CoffeeScript + SharePoint + jQuery""
		initCoffee("vardhaman")


initCoffee = (firstname, lastname="deshpande") ->
	alert "Hi #{firstname} #{lastname}! Welcome to CoffeeScript Demo on SharePoint"