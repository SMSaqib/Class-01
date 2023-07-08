var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Q2 Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var person = 'samEna jaMeel';
console.log('“Hello', person, ', would you like to  know how to design BOTs in Pyhton?”');
//Q3 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
console.log(person.toLowerCase());
console.log(person.toUpperCase());
function titleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}
console.log(titleCase(person));
//Q4 Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
console.log('Amy Poehler,"If you can dance and be free and be embarrassed, you can rule the world."');
//Q5 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famous_person = "Amy Poehler";
var message = "If you can dance and be free and be embarrassed, you can rule the world.";
console.log(famous_person + ',"' + message + '"');
//Q6 Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var person_name = " \t kashif \n karim ";
console.log(person_name);
console.log(person_name.trim());
//Q7 Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log("addition:", 2 + 6);
console.log("Multiplication:", 2 * 4);
console.log("Division:", 16 / 2);
console.log("Subtraction:", 10 - 2);
//Q8 You should create four lines that look like this:
console.log(5 + 3, "\n", 10 - 2, "\n", 4 * 2, "\n", 24 / 3);
//Q9 Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var favourite_number = '11'; // pagal ki oulad
console.log('“My lucky number is', favourite_number, ', would you like to try?”');
//Q10 Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// Operators Programm
//S.M.Saqib
//Date :06-Jun-2023
//Description: basic maths operator practice excerise in typescript
console.log(5 + 3, "\n", 10 - 2, "\n", 4 * 2, "\n", 24 / 3);
// Operators Programm
//S.M.Saqib
//Date :06-Jun-2023
//Description: Learn how to Write addition, subtraction, multiplication, and division operations that each result in the number 8
console.log("addition:", 2 + 6);
console.log("Multiplication:", 2 * 4);
console.log("Division:", 16 / 2);
console.log("Subtraction:", 10 - 2);
//Q11 Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var Names = ["saleem", "arshiyan", "arshman", "Ayesha", "Shahid"];
console.log(Names[0]);
console.log(Names[3]);
console.log(Names[2]);
//Q12 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var Greetings = ",hope you will be great in health.";
console.log("Hi " + Names[2] + Greetings);
//Q13 Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var transportation = ['I own Toyota Passo 2019.',
    'Since it was introduced to U.S. car buyers in 2001, the Toyota Prius has defined the concept of a "hybrid car."',
    'In 2012, Toyota began offering the Prius Plug-In, which is capable of getting 87 miles per gallon (mpg).',
    'Another popular multi-fuel option from Toyota, the Camry Hybrid gives car buyers a roomy interior and sporty exterior for a reasonable price.',
    'Another popular hybrid option from Toyota, the Highlander Hybrid has plenty of room for the whole family.'];
console.log(transportation[0]);
//Q14 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var Guest_List = ["taha", "Rafique", "Aresha"];
for (var i = 0; i < 3; i++) {
    console.log("Dear " + titleCase(Guest_List[i]) + "! you are cordially invited for dinner at 9:00 Pm tomorrow.");
}
//Q15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var Change_Guest_List = ["taha", "Rafique", "Sanober"];
for (var _i = 0, Change_Guest_List_1 = Change_Guest_List; _i < Change_Guest_List_1.length; _i++) {
    var val = Change_Guest_List_1[_i];
    console.log("Dear " + titleCase(val) + "! you are cordially invited for dinner at 9:00 Pm tomorrow.");
}
//Q16 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
var More_Guest_List = ["Kashif hameed", "taha", "Rafique", "Sanober", "Salman Khan"];
function append(array, x) {
    return array.push(x);
}
append(More_Guest_List, "Rameez Waleed");
for (var _a = 0, More_Guest_List_1 = More_Guest_List; _a < More_Guest_List_1.length; _a++) {
    var val = More_Guest_List_1[_a];
    console.log("Dear " + titleCase(val) + "! you are cordially invited for dinner at 9:00 Pm tomorrow.\nAs i have got the large table for dinner");
}
//Q17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
//delete More_Guest_List[1];
var Items_count = More_Guest_List.length;
for (var i = 0; i < Items_count; i++) {
    if (i <= 3) {
        console.log(i + 1 + ".", titleCase(More_Guest_List[0]));
        console.log(i + 1 + "." + "Dear " + titleCase(More_Guest_List[0]) + "! Sorry for inconvenience.\nAs i recently got to know the Booked dinner table ; would take time so that's why the prgramm is postponed.\nIn case of any change you will be informed accordingly");
    }
    else {
        console.log(i + 1 + "." + "Dear " + titleCase(More_Guest_List[0]) + "! you are cordially invited for dinner at 9:00 Pm tomorrow.\nAs i have got the large table for dinner");
    }
    More_Guest_List.splice(0, 1);
    console.log(More_Guest_List);
}
console.log(More_Guest_List.length);
//Q18 Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
var world = ["Poland", "France", "Australia", "UAE", "Canada"];
//• Print your array in its original order.
console.log(world);
//• Print your array in alphabetical order without modifying the actual list.
var sorteA_Z = __spreadArray([], world, true).sort();
console.log(sorteA_Z);
//• Show that your array is still in its original order by printing it.
console.log(world);
//• Print your array in reverse alphabetical order without changing the order of the original list.
var RsorteA_Z = __spreadArray([], sorteA_Z, true).reverse();
console.log(RsorteA_Z);
//console.log(world.sort())
//• Show that your array is still in its original order by printing it again.
console.log(world);
//• Reverse the order of your list. Print the array to show that its order has changed.
console.log(world.reverse());
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(world.reverse());
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(world.sort());
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(world.reverse());
//Q19 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var Dinner_Guests = ["Salman Khan", "Rameez Waleed"];
console.log("there are", Dinner_Guests.length, "guests invited for dinner");
//Q20 Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var C_type = ["BMW", "Toyota", "honda", "Suzuki", "Kia"];
var C_Year = ["2019", "2017", "2013", "2017", "2023"];
var C_Model = ["1 Series", "Corrola", "City", "Alto", "Sportage"];
//Q21 They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var car = { type: "BMW", model: "1 Series", year: 2019 };
console.log(car);
//Q22 Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
var list = [65, "alex", 'dog'];
console.log(list[3]);
console.log("Intentional Error calling  at 4th element which is out of range ........");
//Q23 Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
//let vcar = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(vcar == 'subaru')
var vc = [2, 3, "t", 5];
console.log("1.", vc[0] == 2);
console.log("2.", vc[0] == 2 * 1);
console.log("3.", vc[0] == 4 / 2);
console.log("4.", vc[2] == "t");
console.log("5.", vc[3] == 10 / 2);
console.log("6.", vc[2] != "t");
console.log("7.", vc[0] < vc[2]);
console.log("8.", vc[0] > vc[1]);
console.log("9.", vc[0] == vc[3]);
console.log("10.", vc[1] == "t");
//Q24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
console.log(vc[0] == 2);
console.log(vc[0] != 2);
//• Tests using the lower case function
var tp = "T";
console.log(tp.toLowerCase() == "t");
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var x = 5;
console.log(x == 2);
console.log(x != 2);
console.log(x >= 2);
console.log(x <= 2);
//• Tests using "and" and "or" operators
console.log(vc[0] == 2 && vc[1] != 2);
console.log(vc[1] == 3 || vc[1] == 9);
//• Test whether an item is in a array
console.log(2 in vc);
//• Test whether an item is not in a array
console.log(vc.indexOf("S") > -1);
//Q25 Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
var alien_color = ['green', 'yellow', 'red'];
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
if (alien_color.indexOf("green") > -1) {
    console.log("you choose the Alien Green;you just earned 5 points.");
}
//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
if (alien_color[0] == "green") {
    console.log("you choose the Alien", alien_color[0], ";you just earned 5 points.");
}
if (alien_color[1] == "green") {
    console.log("you choose the Alien", alien_color[0], ";you just earned 5 points.");
}
//Q26 Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
if (alien_color[0] == "green") {
    console.log("you choose the Alien", alien_color[0], ";you just earned 5 points for shooting.");
}
else {
    console.log("you choose the Alien", alien_color[0], ";you just earned 10 points.");
}
//• Write one version of this program that runs the if block and another that runs the else block.
if (alien_color[1] == "green") {
    console.log("you choose the Alien", alien_color[1], ";you just earned 5 points for shooting.");
}
else {
    console.log("you choose the Alien", alien_color[1], ";you just earned 10 points.");
}
//Q27 Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
if (alien_color[0] == "green") {
    console.log("you choose the Alien", alien_color[0], ";you just earned 5 points for shooting.");
}
//• If the alien is yellow, print a message that the player earned 10 points
if (alien_color[1] == "yellow") {
    console.log("you choose the Alien", alien_color[1], ";you just earned 10 points.");
}
//• If the alien is red, print a message that the player earned 15 points.
if (alien_color[2] == "red") {
    console.log("you choose the Alien", alien_color[2], ";you just earned 15 points.");
}
//• Write three versions of this program, making sure each message is printed for the appropriate color alien.
if (alien_color[2] == "green") {
    console.log("you choose the Alien", alien_color[2], ";you just earned 5 points for shooting.");
}
else if (alien_color[2] == "yellow") {
    console.log("you choose the Alien", alien_color[2], ";you just earned 10 points.");
}
else if (alien_color[2] == "red") {
    console.log("you choose the Alien", alien_color[2], ";you just earned 15 points.");
}
//Q28 Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
var age = 3;
//• If the person is less than 2 years old, print a message that the person is a baby.
if (age < 2) {
    console.log("baby");
}
//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
if (age >= 2 && age < 4) {
    console.log("toddler");
}
//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
if (age >= 4 && age < 13) {
    console.log("kid");
}
//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
if (age >= 13 && age < 20) {
    console.log("teenager");
}
//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
if (age >= 20 && age < 65) {
    console.log("adult");
}
//• If the person is age 65 or older, print a message that the person is an elder.
if (age >= 65) {
    console.log("elder");
}
//Q29 Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
var fruits = ["banana", "apple", "mango"];
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
if (fruits[0] == "banana") {
    console.log("I really like", fruits[0], "!!!");
}
if (fruits[1] == "apple") {
    console.log("I really like", fruits[1], "!!!");
}
if (fruits[2] == "mango") {
    console.log("I really like", fruits[2], "!!!");
}
if (fruits[0] == "lichi") {
    console.log("I really like", fruits[0], "!!!");
}
if (fruits[0] == "appricot") {
    console.log("I really like", fruits[0], "!!!");
}
//Q30 Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
var usernames = ['eric', 'willie', 'admin', 'erin', 'ever'];
for (var _b = 0, usernames_1 = usernames; _b < usernames_1.length; _b++) {
    var username = usernames_1[_b];
    if (username == 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello " + username + ", thank you for logging in again!");
    }
}
//Q31 No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
for (var i = 0; i < 5; i++) {
    usernames.splice(0, 1);
}
console.log(usernames.length);
if (usernames.length > 0) { }
else {
    console.log("we need to find some users");
}
//Q32 Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
var current_users = ['eric', 'willie', 'admin', 'erin', 'Ever'];
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
var new_users = ['sarah', 'Willie', 'PHIL', 'ever', 'Iona'];
var Low_new_users = [];
for (var _c = 0, new_users_1 = new_users; _c < new_users_1.length; _c++) {
    var Cu = new_users_1[_c];
    append(Low_new_users, Cu.toLowerCase());
    console.log(Low_new_users);
}
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
var Low_current_users = [];
for (var _d = 0, current_users_1 = current_users; _d < current_users_1.length; _d++) {
    var Cu = current_users_1[_d];
    append(Low_current_users, Cu.toLowerCase());
    console.log(Low_current_users);
}
for (var _e = 0, Low_new_users_1 = Low_new_users; _e < Low_new_users_1.length; _e++) {
    var user = Low_new_users_1[_e];
    if (Low_current_users.indexOf(user) > -1) {
        console.log(user);
        console.log("you need to enter a new username as the username provided is already in use");
    }
    else {
        console.log(user);
        console.log("you may use this username as it is available");
    }
}
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
//Q33 Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
var Ordinal = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//• Store the numbers 1 through 9 in a array.
//• Loop through the array.
for (var i = 0; i < 9; i++) {
    console.log(Ordinal[i]);
}
//• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
for (var i = 0; i < 9; i++) {
    console.log(Ordinal[i]);
    if (Ordinal[i] == 1) {
        console.log("1st");
    }
    else if (Ordinal[i] == 2) {
        console.log("2nd");
    }
    else if (Ordinal[i] == 3) {
        console.log("3rd");
    }
    else {
        console.log(Ordinal[i] + "th");
    }
    ;
}
//Q34 Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
var pizza = ["fajita", "BBQ", "Malai Botti"];
for (var _f = 0, pizza_1 = pizza; _f < pizza_1.length; _f++) {
    var piz = pizza_1[_f];
    console.log(piz);
}
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
for (var _g = 0, pizza_2 = pizza; _g < pizza_2.length; _g++) {
    var piz = pizza_2[_g];
    console.log("I like " + piz + " !");
}
console.log("I like to eat pizza with my family and friends."
    + "\nThere are many different kinds of pizza.\nMy favorite pizza is pepperoni pizza."
    + "\nI like to eat pizza for lunch or dinner.");
//Q35 Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
var animals = ['dog', 'cat', 'rabbit'];
for (var _h = 0, animals_1 = animals; _h < animals_1.length; _h++) {
    var animal = animals_1[_h];
    console.log(animal);
}
for (var _j = 0, animals_2 = animals; _j < animals_2.length; _j++) {
    var animal = animals_2[_j];
    console.log("A ".concat(animal, " would make a great pet."));
}
console.log("These animals have in common that they are domesticated animals commonly kept as pets.");
//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
//Q36 T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
//function make_shirt(size: string, message: string) {
//  console.log("The T-shirt is size" ,size+" and has the message '"+message+"' printed on it.");
//}
// Calling the function
//make_shirt("XL", "Kuch Bhi!!!");
//Q37 Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message
function make_shirt(size, message) {
    if (size === void 0) { size = "L"; }
    if (message === void 0) { message = "I Love TYPESCRIPT"; }
    console.log("The T-shirt  is", size + " and has the message '" + message + "' printed on it.");
}
// Calling the function
make_shirt("L", "Really I dont mind");
make_shirt("XL", "Really I dont mind");
make_shirt("M", "fsdf");
make_shirt();
//Q38 Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log(city + " is in " + country + ".");
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Multan");
describe_city("Mexico", "USA");
//Q39  City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this: 
function city_country(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log('"' + city + ',' + country + '"');
}
city_country("Karachi");
city_country("Lahore");
city_country("Multan");
city_country("Mexico", "USA");
//Q40 Album: Write a function called make_album() that builds a Object describing a music album.
// The function should take in an artist name and an album title,
// and it should return a Object containing these two pieces of information.
// Use the function to make three dictionaries representing different albums. 
//Print each return value to show that Objects are storing the album information correctly.
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
//If the calling line includes a value for the number of tracks, add that value to the album’s Object.
// Make at least one new function call that includes the number of tracks on an album.
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var A1 = make_album("Sajjad Ali", "ZULM");
var A2 = make_album("Sonu Nigam", "YAD", 12);
var A3 = make_album("Arijith Singh", "Wasta", 8);
console.log(A1);
console.log(A2);
console.log(A3);
//Q41 Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var i = magicians_1[_i];
        console.log(i);
    }
}
var magicians = ["Harry Houdin", "David Copperfield", "David Blaine"];
show_magicians(magicians);
function make_great(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        greatMagicians.push(magician + ' the Great');
    }
    return greatMagicians;
}
var greatMagicians = make_great(magicians);
show_magicians(greatMagicians);
var originalMagicians = ["Harry Houdin", "David Copperfield", "David Blaine"];
var unchangedMagicians = make_great(__spreadArray([], originalMagicians, true));
show_magicians(originalMagicians);
show_magicians(unchangedMagicians);
function make_sandwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    console.log("Sandwich ingredients:");
    for (var _a = 0, ingredients_1 = ingredients; _a < ingredients_1.length; _a++) {
        var ingredient = ingredients_1[_a];
        console.log("- " + ingredient);
    }
    console.log("Enjoy your sandwich!\n");
}
make_sandwich("Bread", "Ham", "Cheese");
make_sandwich("Bread", "Turkey", "Lettuce", "Tomato");
make_sandwich("Bread", "Peanut Butter", "Jelly");
make_sandwich();
function create_car(manufacturer, model) {
    var Options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        Options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
        Options: Options
    };
    return car;
}
var Car_1 = create_car("Honda", "Civic", { color: "Red" }, { powerWindows: true, Transmission: "Automatic" });
var Car_2 = create_car("Toyota", "Camry", { color: "Green" }, { powerWindows: true }, { Transmission: "Automatic" }, { leatherSeats: true, navigation: true });
console.log(Car_1);
console.log(Car_2);
