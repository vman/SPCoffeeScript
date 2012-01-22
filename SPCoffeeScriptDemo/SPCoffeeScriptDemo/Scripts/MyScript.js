(function() {
  var initCoffee;

  $(document).ready(function() {
    if (location.href.indexOf("Home.aspx") !== -1) return initCoffee("vardhaman");
  });

  initCoffee = function(firstname, lastname) {
    if (lastname == null) lastname = "deshpande";
    return alert("Hi " + firstname + " " + lastname + "! Welcome to CoffeeScript Demo on SharePoint");
  };

}).call(this);
