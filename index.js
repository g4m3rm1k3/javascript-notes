function print(x){
  console.log(x)
}

//******Ternary operator ******** */

// let num = 7;
// num === 7 ? console.log("lucky"): console.log("unlucky")

// let status = "online";
// if (status == "online"){
//   color = "red";
// }else{
//   color = "Green";
// }

// let color = status == "offline" ? "red" : "green" ;
// console.log(color)


//*************Array***************** */
// let students = [];

// let colors =['red', 'orange', 'yellow'];

// let shoppingList = ['cheese', 'cereal','ice'];
// console.log(shoppingList);

// let lotto = [45, 12, 23, 25, 34];

// let myCollection = [12, 'dog', true, null, NaN ];
// let newp = new Array()

// ****************Array Indices****************

// let shoppingList = ['Cheddar Cheese', '2% Milk'];
// print(shoppingList);
// shoppingList[1] = 'Whole Milk';
// print(shoppingList);
// shoppingList[2] = 'Ice Cream';
// print(shoppingList);
// shoppingList[shoppingList.length] = 'Tomatoes';
// print(shoppingList);
// shoppingList[0] = 'Bread';
// print(shoppingList);

// *****************Array Methods********************

// let topSongs = [
//   'First Time ever I Saw Your Face', 
//   'God Only Knows',
//   'A Day In The Life',
//   'Life On Mars'
// ];
// print(topSongs);

// topSongs.push('Fortunate Son');
// print(topSongs);
// topSongs.push('Small World');
// print(topSongs);
// let last_song = topSongs.pop();
// print(topSongs);
// print(last_song);

// *******************Shift/UnShift*****************************

// push - add to end
// pop - remove from end
// shift - remove from start
// unshift - add to start

// let dishesToDo = ['big platter'];
// print(dishesToDo);
// dishesToDo.unshift('large plate');
// print(dishesToDo);
// print(dishesToDo.unshift('small plate'));
// print(dishesToDo);
// print(dishesToDo.unshift('cereal bowl'));
// print(dishesToDo.unshift('mug'));
// print(dishesToDo.unshift('dirty spoon'));
// print(dishesToDo);
// print(dishesToDo.shift());
// print(dishesToDo.shift());
// print(dishesToDo.shift());
// print(dishesToDo.shift());
// print(dishesToDo);
// dishesToDo.unshift('fork', 'knife');
// print(dishesToDo);
// dishesToDo.unshift('small spoon');
// dishesToDo.unshift('large spoon');
// print(dishesToDo);
// dishesToDo.push('platter')
// print(dishesToDo);
// dishesToDo.push("cutting board", 'cookie sheet');
// print(dishesToDo);


// ****************More Methods********************

// concat - merge arrays
// includes - look for a value
// indexOf - just like str.indexOf
// join - creates a string from arr
// reverse - revereses and array!
// slice - copy portion of an arr
// splice - remove/replace elements
// sort - sorts an array

// let fruits = ['apple', 'banana'];
// let veggies = ['asparagus', 'brussel sprouts'];
// let meats = ['steak', 'chicken breast'];

// console.log(fruits.concat(veggies));
// console.log(veggies.concat(veggies.concat(veggies.concat(meats))))

// let allFood = fruits.concat(veggies, meats);
// print(allFood);

let ingredients = [
  'water', 
  'corn starch', 
  'flour',
  'cheese',
  'brown sugar',
  'shrimp',
  'eel',
  'butter'
];


// print(ingredients);
// print(ingredients.includes('fish'));
// print(ingredients.includes('shrimp'));
// print(ingredients[1].includes('corn'));
// print(ingredients.includes('water', 3));
// print(ingredients.includes('water', 0));

// if(ingredients.includes('flour')){
//   print('I am gluten free, and I will not eat that')
// }


// print(ingredients.indexOf('eel'));
// print(ingredients.indexOf('maple syrup'));
// print(ingredients.indexOf('cheese', 5));
// print(ingredients.indexOf('cheese', 2));

// print(ingredients.indexOf('flour') !== -1)

// **************reverse/join***********************
// let letters = ['T', 'C', 'E', 'P', 'S', 'E', 'R'];
// letters.reverse()
// print(letters) 
// print([1,true, 'dsd'].reverse())
// **************join*******************
// let letters = ['T', 'C', 'E', 'P', 'S', 'E', 'R'];

// print(letters.join('$'))
// print(letters.reverse().join('-'))
// print([12.3, 60, false].join(' # ->'))

// ******************slice*********************************

// let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

// let swimmers = animals.slice(0,3);
// print(swimmers);
// let mammels = animals.slice(2,4);
// print(mammels);
// // let reptiles = animals.slice(4, 6);
// let reptiles = animals.slice(4);
// print(reptiles);
// print(reptiles)

// quadruped = animals.slice(-3);
// print(quadruped);
// print(animals.slice(-3,-1));
// let animals2 = animals.slice()
// animals2[0] = "cat";
// print(animals2)
// print(animals)

// ******************splice*********************************

// let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

// animals.splice(1,0,'octopus');
// print(animals);

// print(animals.splice(3,2));
// print(animals)
// animals.splice(3,0,'snake', 'monkey', 'frog');
// print(animals);
// animals.splice(0,2,'SHARK', 'OCTOPUS');
// print(animals);


// *******************sort*************************

// let people = ['Mrs. Robinson', 'Angie', 'Jolene', 'Maggie May', 'Roxanne'];

// print(people.sort());
// let nums = [34, 10, 100000000, 67, 99];
// print(nums.sort());

// ***********************using const with arrays*************************

// const city = "Lisbon";
// const PI = 3.14159;
// const foods = ['milk'];
// foods.push('chocolate');
// print(foods);
// foods.unshift('tortillas');
// print(foods.pop())
// print(foods.pop())
// print(foods.pop())
// print(foods)

// ********************nested arrays***************************************//

// const colors = [
//   ['red', 'crimson'],
//   ['orange', 'dark orange'],
//   ['yellow', 'golden rod'],
//   ['green', 'olive'],
//   ['blue', 'navy blue'],
//   ['purple', 'orchid']
// ];

//  


// const boardf = [
//   ['O', null, 'X'],
//   [null, 'X', 'O'],
//   ['X', 'O', null]
// ];
// print(boardf);

// *************objects***************************
// {} - object literal

// const fitbitData = {
//   totalSteps      : 308727,
//   totalMiles      : 211.7,
//   avgCalorieBurn  : 5755,
//   workoutsThisWeek: '5 of 7',
//   avgGoodSleep    : '2:13', 
// };
// print(fitbitData);

// print("asd".length);
// print(fitbitData.avgCalorieBurn);

// let data = {a:1,b:2,c:3};
// print(data)
// print(data.a)

// const numbers = {
//   100           : 'one hundred',
//   16            : 'sixteen',
//   '76 trombones': 'great song',
// };
// print(numbers[100]);
// print(numbers[16]);
// print(numbers['76 trombones'])

// const palette = {
//   red    : '#eb4d4b',
//   yellow : '#f9ca24',
//   blue   : '#30336b'
// };
// print(palette.blue)
// let mysteryColor = 'yellow';
// print(palette[mysteryColor]);

// const userReviews = {

// }

// userReviews['queenBee49'] = 4.0;
// print(userReviews);
// userReviews.mrSmith78 = 3.5;
// print(userReviews);
// print(userReviews.colt);
// userReviews.colt = '5';
// print(userReviews);
// userReviews['colt'] = 5;
// print(userReviews);
// userReviews['queenBee49'] ++;
// print(userReviews);

// const student = {
//   firstName : 'David',
//   lastName  : 'Jones',
//   strengths : ['Music', 'Art'],
//   exams     : {
//     midterm : 92,
//     final   : 88
//   }     
// };

// print((student.exams.midterm+student.exams.final)/2)
// print(student.strengths[1]).

// const shoppingCart = [
//   {
//     product : 'Jenga Classic',
//     price   : 6.88,
//     quantity: 1
//   },
//   {
//     product : 'Echo Dot',
//     price   : 29.99,
//     quantity: 3
//   },
//   {
//     product : 'Fire Stick',
//     price   : 29.99,
//     quantity: 2
//   }
// ]

// let nums = [1,2,3];
// let mystery = [1,2,3];
// print(nums.slice() == mystery.slice());
// let moreNums = nums.slice();
// print(moreNums == nums);
// print(moreNums);
// moreNums.push(8);
// print(nums);
// print(moreNums);

// const user = {
//   username : 'CherryGarcia8',
//   email    : 'garcia@gmail.com',
//   notifications: []
// };

// if (user.notifications.length){
//   print("Hello");
// }else{
//   print("Goodbye")
// }