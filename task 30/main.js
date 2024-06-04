"use strict";
let usersName = ["sam", "sami", "safdar", "hina", "admin"];
usersName.forEach(user => {
    if (user === "admin") {
        console.log(`Hello ${user}, \nwould you like to see a status report \n`);
    }
    else {
        console.log(`Hello ${user},\nthank you fpr login again\n`);
    }
});
