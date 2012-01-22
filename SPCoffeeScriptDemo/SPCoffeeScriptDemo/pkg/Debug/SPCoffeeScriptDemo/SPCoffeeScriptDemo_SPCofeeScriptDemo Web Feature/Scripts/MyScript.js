(function() {
  var initCoffee;

  $(document).ready(function() {
    if (location.href.indexOf("Home.aspx") !== -1) return initCoffee("vardhaman");
  });

  initCoffee = function(firstname, lastname) {
    var str;
    if (lastname == null) lastname = "deshpande";
    str = "Hi " + firstname + " " + lastname;
    return alert(str);
  };

}).call(this);
