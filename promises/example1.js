"use strict";
function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Gowtham");
        }, 2000);
    });
}
fetchUser()
    .then((user) => {
    console.log(user);
});
