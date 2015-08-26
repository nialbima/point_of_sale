$(function(){

//arrays and objects

//salads_array[0] gives us the name of the array
salads_array = [ "Salad",
  {item: "The Gates of Eden", price:10, has_meat:[false, ""], vegan: false, gluten_free: true},
  {item: "The Cheek Corea", price:8, has_meat:[true, "pork"], vegan: false, gluten_free: false}
]

soups_array = [ "Soup",
  {item: "Gazpacho", price:8, has_meat:[false, ""], vegan: true, gluten_free: true},
  {item: "Watermelon Soup", price:8, has_meat:[false, ""], vegan: true, gluten_free: true}
]

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
]

dessert_array = [ "Dessert",
  {item: "Apple Cider Caramel Dessert Pizza", price: 12, has_meat:[false, ""], vegan: false, gluten_free: false},
  {item: "Vegan Pistachio Ice Cream", price:6, has_meat:[false, ""], vegan: true, gluten_free: true},
  {item: "Hot Honey Sunday", price: 8, has_meat:[false, ""], vegan: false, gluten_free: true},
  {item: "Candied Orange Dessert Pizza", price:13, has_meat:[false, ""], vegan: false, gluten_free: false}
]

drinks_array = [ "Drinks",
  {item: "Coffee", price: 3, has_meat:[false, ""], vegan: true, gluten_free: true},
  {item: "Tea", price: 2, has_meat:[false, ""], vegan: true, gluten_free: true},
  {item: "Soda", price: 3, has_meat:[false, ""], vegan: true, gluten_free: true},
  {item: "Beer", price:6, has_meat:[false, ""], vegan: true, gluten_free: false},
  {item: "Wine", price:8, has_meat:[false, ""], vegan: false, gluten_free: true}
]

function menu_maker(array, key_name) {
  menu_library[key_name] = array;
  return menu_library;
}

var menu_library = {};

//load arrays into menu object
menu_maker(salads_array, salads_array[0]);
menu_maker(soups_array, soups_array[0]);
menu_maker(pizza_array, pizza_array[0]);
menu_maker(dessert_array, dessert_array[0]);
menu_maker(drinks_array, drinks_array[0]);
//console.log(menu_library)
//console.log(menu_library.Salad[1].item)

//necessary variables
var new_order = {}
var new_order_button = $("#new-order-button");
var kitchen_fire_button = $("#kitchen-fire-button")


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



});




//key_name is a string

// for each item in each menu array, add to menu (.push the object together, don't write it out)
//
//menu should look like this:
//menu = {  [each salad offered], [each sandwich offered]}
//where each of those elements is an object
//
//
// from key_translator:
// //dynamically generate page table
// symbol_library.forEach(function(element) {
//   var new_row = '<div class="row"><div class="command-column-cell">'+element.keyname+'</div><div class="symbol-column-cell">'+element.symbol+'</div></div>'
//   $(".row").last().append(new_row)
// })
