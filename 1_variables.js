const accountId = 14443
let accountEmail = "singhworld.12345@gamil.com";
var accountPassword = "5123";
accountCity = "Jaipur";
let accountState;
// accountId = 2;  // NOt allowed 

accountEmail = "hc@hodsnf";
accountPassword = "23411";
accountCity = "Bengaluru";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);