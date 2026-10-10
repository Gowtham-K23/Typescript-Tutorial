const element = document.getElementById("myElement")

element.value = "Hello Typescript"

// In typescript we externally denote what it is 
const ele = document.getElementById("myEle") as HTMLInputElement
ele.value = "Hello Typescript"