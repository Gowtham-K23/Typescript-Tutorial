"use strict";
var complexType = { name: "myName", id: 1 };
complexType = { id: 2, name: "anotherName" };
complexType = { id: 3 };
complexType = { name: "myName2" };
complexType = { address: "Address" };
console.log(complexType);
// Line 1 - Default structure: name and id
// Line 2 - Interchanging structures, but same name and values with same data types, so no error here
// Line 3 - Missing name
// Line 4 - Missing id
// Line 5 - Missing name and id, but added new value name: address - so error comes
