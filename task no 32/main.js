"use strict";
// array of current user
let current_users = ["sam", "sami", "safdar", "ali"];
// array of new users
let new_users = ["hina", "sam", "amber", "Ali"];
//loop through new_users to check for user name availability
new_users.forEach(new_one_user => {
    // making a condition for user name already exist and save in our_condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase());
    // print different messages using if,else statment
    if (our_condition) {
        console.log(`sorry ${new_one_user} is already taken!`);
    }
    else {
        console.log(`this user_name${new_one_user}is available `);
    }
});
