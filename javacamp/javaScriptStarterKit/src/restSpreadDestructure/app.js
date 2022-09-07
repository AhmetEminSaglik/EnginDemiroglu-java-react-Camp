// var, let, const 

let student = { id: 1, name: "Ahmet Emin" } // obje tanimi

let printTypeOf = (p) => {
    console.log(typeof (p))
}
let print = (p) => {
    console.log(p)
}

let testObject = (n = 10, p) => {
    console.log(n);
    console.log(p);
    console.log(p.name);
    console.log(p["name"]);
}
function testArray(array) {
    console.log(array);
}

let showProducts = function (id, ...products) {
    console.log(id);
    console.log(products);
    printTypeOf(products);
}

testObject(undefined, student)



let students = ["Abdullah Ahmet Askin", "Omer Sevval Koramaz", "Omer Akkoca", "Eren SoyadiniUnuttum"]
testArray(students);
let students2 = [student, { id: 2, name: "Askin" }, "Eren", { a: "a", b: "b", c: "c", 1: -11, 2: "String : 222" }, "Abc"];
testArray(students2);

let products = { apple: "Elma", banana: "muz", orange: "portakal", Language: { "English": "Turkish", english: 'turkish' } }
showProducts(123, students);
showProducts(123, products);


printTypeOf(student);
printTypeOf(students);
printTypeOf(students2);
printTypeOf(products);

console.log("--------------------------------------")
showProducts(10, "elma", "armut", "Karpuz")
showProducts(10, ["elma", "armut", "Karpuz"])

console.log("--------------------------------------")
let points = [1, 2, 3, 4, 55, 3214, 123]
console.log(points)
console.log(...points)
console.log(..."ABC", "D", "EFG", ..."H", 12345) // --> A B C D EFG H  

let populations = [1000, 2000, 3000, [111, 222]];
let [small, medium, high, [innerLow, innerHigh]] = populations;
print(small)
print(medium)
print(high)
print(innerLow)
print(innerHigh)

console.log(populations)
console.log(...populations)

function someFunction([small1],number){
    console.log(small1)
}

someFunction(populations);
let category={id:1, name:"icecek"}
console.log(category.id);
let {id,name1}=category;
print(id)
print(name1)























