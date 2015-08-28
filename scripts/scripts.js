// $(function(){

  //necessary variables
  var new_order = [];
  var current_orders = [];

  var new_order_button = $("#new-order-button"); //begins new order
  var kitchen_fire_button = $("#fire-button"); //adds to  bill`
  var edit_order_button = $("#edit-order-button");
  var print_button = $("#print-button")

  var menu_library = []; //stores menu

  var current_server; //used to display orders`
  var servers = [{name:"Calvin", id:1}, {name:"Harry", id:2}, {name:"Brian",id:3}, {name:"Nick",id:4}]


  //arrays and objects
  salads_array = [ "Salad",
    {item: "The Gates of Eden", price:10},
    {item: "The Cheek Corea", price:8}
  ];

  soups_array = [ "Soup",
    {item: "Gazpacho", price:8},
    {item: "Watermelon Soup", price:8}
  ];

  pizza_array = [ "Pizza",
    {item: "Brian DeParma", price:13},
    {item: "Arugula Shmoogula", price:14},
    {item: "Greenpointer", price: 15},
    {item: "Monte Cristo", price:15},
    {item: "Hellboy", price:17},
    {item: "Hometown Brisket", price:17},
    {item: "Cherry Jones", price:18},
    {item: "Grapeful Dead", price:17},
    {item: "Jackie Green", price:16},
    {item: "In Ricotta Da Vegan", price:18}
  ];

  dessert_array = [ "Dessert",
    {item: "Apple Cider Caramel Dessert Pizza", price: 12},
    {item: "Vegan Pistachio Ice Cream", price:6 },
    {item: "Hot Honey Sunday", price: 8},
    {item: "Candied Orange Dessert Pizza", price:13}
  ];

  drinks_array = [ "Drinks",
    {item: "Coffee", price: 3 },
    {item: "Tea", price: 2 },
    {item: "Soda", price: 3 },
    {item: "Beer", price: 6 },
    {item: "Wine", price:8 }
  ];

  function menu_maker(array) {
    menu_library.push(salads_array);
    menu_library.push(soups_array);
    menu_library.push(pizza_array);
    menu_library.push(dessert_array);
    menu_library.push(drinks_array);
    return menu_library;
  };

  function menu_builder() {
    //load arrays into menu object.
    menu_maker();

    menu_header = $("#menu-container");

    //append all menu_items to div header
    menu_library.forEach(function(element){
      section_header = "<ul class=food-category>"+element[0]+"</ul>"
      menu_header.append(section_header)

        for(j = 1; j < element.length; j++) {
          menu_item = "<li> <div class=menu-item>"+element[j].item+"</div>"+element[j].price+"</li>";
          $(".food-category").last().append(menu_item)
        }
    })
  }

  // Make stored orders retrievalable
  function set_retrieval_data(index, server) {
    retrieval_object = {}
    retrieval_object["id"] = index;
    retrieval_object["server"] = server;

    return retrieval_object
  }

  //switch server on click event tied to "switch server button"
  //use a a filter/map function to pull only the orders that are present
  //therefore would need another array
  //alternately, store all those values in ind. server arrays

  //currently, can only fire once before needing reload. this is fine for now.
  function begin_new_order() {
    new_order_button.on('click', function() {
      new_order_button.hide();
      this_order = new_order;

      $("#current-order").append("<ul id='customer-order'></ul>")

      return this_order;
    })
  }

  //moves menu items to customer order
  function add_menu_item() {
    $(".menu-item").on('click', function(element) {
      ordered_item = $("<li class=ordered-item></li>")
      ordered_item.text($(element.target).text())
      $("#customer-order").append(ordered_item)
    })
  }


  // Stores an order, holy god
 $("#fire-button").on('click', function(event) {
     current_orders.push([]);
     last_index = current_orders.length - 1
     set_retrieval_data(last_index, "Nick")
     current_orders[last_index].push(retrieval_object)

     //iterates through the food library to find all available stuff
     $("li.ordered-item").each(function() {
       menu_library.forEach(function(element) {
         element.forEach(function(food) {
           ordered_food_item = $(".ordered-item").last();

           if (ordered_food_item.text() === food.item) {
            current_orders[last_index].push(food);
            ordered_food_item.remove();
        }});
      });

    });

    new_order_button.show();

    //adds recall ability
    $("#last-fired").removeAttr("id", "#last-fired")
    $("#order-toggle").append("<div class=recall-order id='last-fired'> Order #"+current_orders[last_index][0]['id']+" </div")


    $(".recall-order").on("click", function(element) {
      console.log('fired');

      index = $(element.target).index();

      //COULD BE A FILTER
       for (i = 1; i<current_orders[index].length; i++) {
            ordered_item = $("<li class=ordered-item></li>");
            ordered_item.text(current_orders[index][i].item);
            $("#bill-list").append(ordered_item);
       }

       //$(element.target).remove(); //yaaaaas okay it works, and solves the error. the ideal situation is "table #" so index position matters 0%

       //basic console calculator event handler


      for (i = 1; i < current_orders[index].length; i++) {
          price_count = current_orders[index][i].price
          console.log(price_count)



          // if (current_orders[order][food].indexOf(food) > 0) {
          //   console.log(current_orders[order][food]['item'])
          // }
        }})
      });

  $("#edit-order-button").on("click", function(element){
    //remove recall-order from div
    last_index = $(".recall-order").index()
    $("#last-fired").removeAttr("id", "last-fired")
    $("#customer-order").append($(".ordered-item"))
  })

  menu_builder();
  begin_new_order();
  add_menu_item();
// });
