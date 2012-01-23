(function() {
  var AddItem, DeleteItem, GetItems, UpdateItem, initCoffee, linkClicked, loadCOM;

  $(function() {
    var currentFormattedUrl, currentUrl, myLink;
    if (location.href.indexOf("Home.aspx") !== -1) {
      ExecuteOrDelayUntilScriptLoaded(loadCOM, "sp.js");
      currentUrl = _spPageContextInfo.webServerRelativeUrl;
      currentFormattedUrl = currentUrl === "/" ? currentUrl : currentUrl + "/";
      myLink = $("<input id='cfLink' type='button' value='Click Me'/>");
      myLink.click(function() {
        return linkClicked(this);
      });
      return $("#s4-ribbonrow").after(myLink);
    }
  });

  initCoffee = function(firstname, lastname) {
    if (lastname == null) lastname = "deshpande";
    return alert("Hi " + firstname + " " + lastname + "! Welcome to CoffeeScript Demo on SharePoint");
  };

  linkClicked = function(link) {
    return alert(link.value);
  };

  loadCOM = function() {
    var context, web;
    context = new SP.ClientContext.get_current();
    web = context.get_web();
    context.load(web);
    return context.executeQueryAsync(function() {
      return alert(web.get_title(), function(sender, args) {
        return alert("Failed. " + (args.get_message()) + " \n " + (args.get_stackTrace()));
      });
    });
  };

  AddItem = function() {
    var context, list, listItem, listItemCreateInfo;
    context = new SP.ClientContext.get_current();
    list = context.get_web().get_lists().getByTitle("CoffeeList");
    listItemCreateInfo = new SP.ListItemCreationInformation;
    listItem = list.addItem(listItemCreateInfo);
    listItem.set_item("Title", "Mocha");
    listItem.update();
    return context.executeQueryAsync(function() {
      return alert("Item Added", function(sender, args) {
        return alert("Failed. " + (args.get_message()) + " \n " + (args.get_stackTrace()));
      });
    });
  };

  UpdateItem = function() {
    var context, list, listItem;
    context = new SP.ClientContext.get_current();
    list = context.get_web().get_lists().getByTitle("CoffeeList");
    listItem = list.getItemById(1);
    listItem.set_item("Title", "Latte");
    listItem.update();
    return context.executeQueryAsync(function() {
      return alert("Item Updated", function(sender, args) {
        return alert("Failed. " + (args.get_message()) + " \n " + (args.get_stackTrace()));
      });
    });
  };

  DeleteItem = function() {
    var context, list, listItem;
    context = new SP.ClientContext.get_current();
    list = context.get_web().get_lists().getByTitle("CoffeeList");
    listItem = list.getItemById(1);
    listItem.deleteObject();
    return context.executeQueryAsync(function() {
      return alert("Item Deleted", function(sender, args) {
        return alert("Failed. " + (args.get_message()) + " \n " + (args.get_stackTrace()));
      });
    });
  };

  GetItems = function() {
    var context, list, listItems;
    context = new SP.ClientContext.get_current();
    list = context.get_web().get_lists().getByTitle("CoffeeList");
    listItems = list.getItems('');
    context.load(listItems);
    return context.executeQueryAsync(function() {
      var itemEnum, _results;
      itemEnum = listItems.getEnumerator();
      _results = [];
      while (itemEnum.moveNext()) {
        _results.push(alert(itemEnum.get_current().get_item("Title")));
      }
      return _results;
    }, function(sender, args) {
      return alert("Failed. " + (args.get_message()) + " \n " + (args.get_stackTrace()));
    });
  };

}).call(this);
