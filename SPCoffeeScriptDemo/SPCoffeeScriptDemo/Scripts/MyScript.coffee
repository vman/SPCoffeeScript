$(document).ready ->
	if location.href.indexOf("Home.aspx") isnt -1
		# alert "CoffeeScript + SharePoint + jQuery""
		initCoffee("vardhaman")


initCoffee = (firstname, lastname="deshpande") ->
	str = "Hi #{firstname} #{lastname}"
	alert str