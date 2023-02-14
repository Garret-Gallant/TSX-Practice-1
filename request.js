"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/users/1";
axios_1["default"].get(url).then(function (response) {
    var user = response.data;
    var id = user.id;
    var name = user.name;
    var email = user.email;
    logUser(id, name, email);
});
var logUser = function (id, name, email) {
    console.log("\n  The User id is: ".concat(id, "\n  Their name is ").concat(name, "\n  Their email is: ").concat(email, "\n  "));
};
