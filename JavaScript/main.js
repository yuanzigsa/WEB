var yz = "yuanzi";
console.log(yz);

let a = 1;
console.log(a);

const Pi = 3.14;
console.log(Pi);

var x = 5;
x = x + 5;
console.log(x)

var age = 20;

do {
    a++;
    console.log(a);
}    while (age ==  a);

for(let i = 0; i < 5; i++) {
    age++;
    console.log(age);
}

switch(yz) {
    case "Simon":
        console.log("Simon");
        break;
    case "John":
        console.log("John");
    default:
        console.log("Stranger");
}


var obj = new Object();
var obj2 = {};

obj = {
    name:"Simon",
    age:"20",
    email:"simon@gmail.com",
    contact: {
        phone:"486485452",
        Telegram:"gsimon"
    }
};
obj.age = 35;

console.log(obj.age);

// 数组
var b = new Array();
var c = [];

b[0] = "李进元";
b[1] = "cat";
b[4] = "tiger";
b.push("song");

console.log(b[0]);
console.log(b[2]); // 输出未定义的值结果会是undefined，但是整个数组的占位依然会是5位

// 使用for遍历数组
for (let i in b){
    console.log(b[i]); 
}

// 函数
function add() {
    let sum = 0;
    
    for (let i = 0, j = arguments.length; i < j; i++){
        sum += arguments[i];
    }
    return sum;
}
let sum = add(1,2,3,4,5,6,7,8,9,10);
console.log(sum);

// 闭包
function makeAdder(a) {
    return function(b) {
        return a + b;
    };
}


var x = makeAdder(5);
var sub = x(6);
console.log(sub);

