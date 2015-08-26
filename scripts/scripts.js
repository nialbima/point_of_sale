// $(function(){

//arrays and objects
salads_array = [ "Salad",
  {item: "The Gates of Eden", price:10, has_meat:[false, ""], vegan: false, gluten_free: true},
  {item: "The Cheek Corea", price:8, has_meat:[true, "pork"], vegan: false, gluten_free: false}
];

soups_array = [ "Soup",
  {item: "Gazpacho", price:8, has_meat:[false, ""], vegan: true, gluten_free: true},
  {item: "Watermelon Soup", price:8, has_meat:[false, ""], vegan: true, gluten_free: true}
];

pizza_array = [ "Pizza",
  {item: "Brian DeParma", price:13, has_meat:[false, ""], vegan: false, gluten_free: false},
  {item: "Arugula Shmoogula", price:14, has_meat:[false, ""], vegan: false, gluten_free: false},
  {item: "Greenpointer", price: 15, has_meat: [false, ""], vegan: false, gluten_free: false},
  {item: "Monte Cristo", price:15, has_meat:[true, "pork"], vegan: false, gluten_free: false},
  {item: "Hellboy", price:17, has_meat:[true, "pork"], vegan: false, gluten_free: false},
  {item: "Hometown Brisket", price:17, has_meat:[true, "beef"], vegan: false, gluten_free: false},
  {item: "Cherry Jones", price:18, has_meat:[true, "pork"], vegan: false, gluten_free: false},
  {item: "Grapeful Dead", price:17, has_meat:[false, ""], vegan: false, gluten_free: false},
  {item: "Jackie Green", price:16, has_meat:[false, ""], vegan: true, gluten_free: false},
  {item: "In Ricotta Da Vegan", price:18, has_meat:[false, ""], vegan: true, gluten_free: false}
];

dessert_array = [ "Dessert",
  {item: "Apple Cider Caramel Dessert Pizza", price: 12, has_meat:[false, ""], vegan: false, gluten_free: false},
  {item: "Vegan Pistachio Ice Cream", price:6, has_meat:[false, ""], vegan: true, gluten_free: true},
  {item: "Hot Honey Sunday", price: 8, has_meat:[false, ""], vegan: false, gluten_free: true},
  {item: "Candied Orange Dessert Pizza", price:13, has_meat:[false, ""], vegan: false, gluten_free: false}
];

drinks_array = [ "Drinks",
  {item: "Coffee", price: 3, has_meat:[false, ""], vegan: true, gluten_free: true},
  {item: "Tea", price: 2, has_meat:[false, ""], vegan: true, gluten_free: true},
  {item: "Soda", price: 3, has_meat:[false, ""], vegan: true, gluten_free: true},
  {item: "Beer", price:6, has_meat:[false, ""], vegan: true, gluten_free: false},
  {item: "Wine", price:8, has_meat:[false, ""], vegan: false, gluten_free: true}
];

function menu_maker(array) {
  menu_library.push(array);
  return menu_library;
};

function menu_builder() {
  //load arrays into menu object
  menu_maker(salads_array);
  menu_maker(soups_array);
  menu_maker(pizza_array);
  menu_maker(dessert_array);
  menu_maker(drinks_array);

  menu_header = $("#menu-container");

  //append all menu_items to div header
  menu_library.forEach(function(element){
    section_header = "<ul class=food-category>"+element[0]+"</ul>"
    menu_header.append(section_header)

      for(j = 1; j < element.length; j++) {
        menu_item = "<li class=menu-item>"+element[j].item+"</li>";
        $(".food-category").last().append(menu_item)
      }
  })
}

var menu_library = [];

//necessary variables
var new_order = {}
var new_order_button = $("#new-order-button");
var kitchen_fire_button = $("#kitchen-fire-button")
var menu_item = $("li.menu-item")

menu_item.on('click', function() {
  //this.attr("class", "ordered-item");
  console.log("fired")
})

new_order_button.on('click', function() {
  new_order_button.remove();
  this_order = new_order;

  return this_order;
  // these need to be checkboxes
  // patron_count = prompt("How many patrons are at the table?");
  // vegan_flag = prompt("Any vegetarians?");
  // vegetarian_flag = prompt("Vegans?");
  // celiac_flag = prompt("Celiac/gluten-free folks?");
  });



//
// });
