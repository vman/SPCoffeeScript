(function() {
  var initCoffee, linkClicked;

  $(function() {
    var myLink;
    if (location.href.indexOf("Home.aspx") !== -1) {
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

}).call(this);
