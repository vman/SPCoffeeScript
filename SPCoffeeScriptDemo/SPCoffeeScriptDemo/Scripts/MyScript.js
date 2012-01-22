(function() {
  var Failure, Success, initCoffee, linkClicked, loadCOM, web;

  $(function() {
    var myLink;
    if (location.href.indexOf("Home.aspx") !== -1) {
      ExecuteOrDelayUntilScriptLoaded(loadCOM, "sp.js");
      initCoffee("vardhaman");
      myLink = $("<a id='cfLink' href='#'>Click Me!</a>");
      myLink.click(function() {
        return linkClicked(this);
      });
      return $("#s4-ribbonrow").hide().after(myLink);
    }
  });

  initCoffee = function(firstname, lastname) {
    if (lastname == null) lastname = "deshpande";
    return alert("Hi " + firstname + " " + lastname + "! Welcome to CoffeeScript Demo on SharePoint");
  };

  linkClicked = function(link) {
    return alert(_spPageContextInfo.webServerRelativeUrl);
  };

  web = null;

  loadCOM = function() {
    var context;
    context = new SP.ClientContext.get_current();
    web = context.get_web();
    context.load(web);
    return context.executeQueryAsync(Success, Failure);
  };

  Success = function(sender, args) {
    return alert(web.get_title());
  };

  Failure = function(sender, args) {
    return alert("Failed. " + (args.get_message()) + " \n " + (args.get_stackTrace()));
  };

}).call(this);
