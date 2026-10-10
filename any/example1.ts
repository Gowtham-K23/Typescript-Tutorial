var item1 = { id: 1, name: "Item 1" }
item1 = { id: 2, name: "Item 2" }
item1 = { id: 3 }

// Here the property is missing in 3rd line - The name is not here
// So it leads to error

// Here comes the type - any. It refers to the structure and type may change in future so it accepts all 
var item2: any = { id: 1, name: "Item 1"}
item2 = { id: 2, name: "Item 2"}
item2 = { address: "Address 1"}
item2 = 10
// So the any type accepts every changes made in the data type and structure 
