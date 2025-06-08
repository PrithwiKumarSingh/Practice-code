const restaurant = [];
const images = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "Eigth", "nine", "tenth"];
const restaurantNames = [
    "The Spice Garden",
    "Olive & Thyme",
    "Urban Tandoor",
    "The Coastal Crave",
    "Grill & Chill",
    "Curry Leaf Bistro",
    "Taste of Tuscany",
    "Bamboo Bowl",
    "The Hungry Fork",
    "Flame & Skillet",
    "Golden Wok",
    "Saffron Street",
    "The Rustic Table",
    "Midnight Biryani",
    "Casa Mexicana",
    "Zen Noodle House",
    "Royal Kebab Corner",
    "Mama's Kitchen",
    "Smoky Hills BBQ",
    "The Urban Diner"
  ];
  const foodTypes = [
    "Italian",
    "Chinese",
    "Indian",
    "Mexican",
    "Thai",
    "Japanese",
    "Mediterranean",
    "American",
    "French",
    "Korean"
  ];

  const biharLocations = [
    "Patna",
    "Gaya",
    "Bhagalpur",
    "Muzaffarpur",
    "Darbhanga",
    "Purnia",
    "Arrah",
    "Begusarai",
    "Samastipur",
    "Sasaram"
  ];
  
for(let i=0; i<100; i++){

    const obj = {};
    obj["image"] = images[Math.floor(Math.random()*10)];
    obj["name"] = restaurantNames[Math.floor(Math.random()*20)];
    obj["rating"] = Math.floor(Math.random()*5+1);
    obj["food_type"] = foodTypes[Math.floor(Math.random()*10)];
    obj["price_for_two"] = Math.floor(Math.random()*2401+100);
    obj["location"] = biharLocations[Math.floor(Math.random()*10)];
    obj["Distance_from_customer_house"] = Math.floor(Math.random()*10).toFixed(1);
    obj["offers"] = Math.floor(Math.random()*30);
    obj["alcholol"] = Math.random() > 0.7;
    obj["Restaurant_open_time"] = Math.floor(Math.random()*24);
    obj["Restaurant_close_time"] = (obj["Restaurant_open_time"]+12)%24;

    restaurant.push(obj);
}


console.log(restaurant);