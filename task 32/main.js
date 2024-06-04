// array of current user
var current_users = ["sam", "sami", "safdar", "ali"];
// array of new users
var new_users = ["hina", "sam", "amber", "Ali"];
//loop through new_users to check for user name availability
new_users.forEach(function (new_one_user) {
    // making a condition for user name already exist and save in our_condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // print different messages using if,else statment
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("this user_name".concat(new_one_user, "is available "));
    }
});
