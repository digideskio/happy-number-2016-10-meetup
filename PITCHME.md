#HSLIDE?image=pitchme/assets/es6-background.png

#VSLIDE
# ES6 Basics

#VSLIDE 
# let, const

Both let and const create variables that are block-scoped 

```
function order(x, y) {
    if (x > y) { // (A)
        let tmp = x;
        x = y;
        y = tmp;
    }
    console.log(tmp===x); // ReferenceError: tmp is not defined
    return [x, y];
}
```

Const makes the contract that no rebinding will happen.

```
const foo;
    // SyntaxError: missing = in const declaration

const bar = 123;
bar = 456;
    // TypeError: `bar` is read-only
```


#VSLIDE 
# Arrow functions

```
var multiply = function (x, y) { return x * y }
```
-------
```
var multiply = (x, y) => x * y
```

#VSLIDE 
# Array

```
> Array.from(['a', 'b'].keys())
[ 0, 1 ]
> Array.from(['a', 'b'].values())
[ 'a', 'b' ]
> Array.from(['a', 'b'].entries())
[ [ 0, 'a' ],
  [ 1, 'b' ] ]
> [6, -5, 8].find(x => x < 0) // Find
  -5
 > Array.from(document.querySelectorAll('span.name'), s => s.textContent)
```

#VSLIDE 
# Template literals

```
`string text ${expression} string text`
```

Tagged template literals

```
var a = 5, b = 10

function tag(strings, ...values) {
  console.log(strings[0]) // "Hello "
  console.log(strings[1]) // " world "
  console.log(strings[2]) // ""
  console.log(values[0])  // 15
  console.log(values[1])  // 50

  return "Bazinga!"
}

tag`Hello ${ a + b } world ${ a * b }`
// "Bazinga!"
```

#VSLIDE 
# Default values
```
function multiply(a, b) { // OLD WAY
  var b = (typeof b !== 'undefined') ?  b : 1;
  return a*b;
}
multiply(5); // 5
```
-------
```
function multiply(a, b = 1) { // NEW WAY
  return a*b;
}
multiply(5); // 5
```

#VSLIDE 
# Spread syntax

```
var arr1 = [0, 1, 2] // OLD WAY
var arr2 = [3, 4, 5]
// Append all items from arr2 onto arr1
Array.prototype.push.apply(arr1, arr2)
```
------
```
var arr1 = [0, 1, 2] // NEW WAY
var arr2 = [3, 4, 5]
arr1.push(...arr2)
```

#VSLIDE 
Shorthand properties

#VSLIDE 
Destructuring Assignment `var [first,,,,fifth] = [1,3,2,6,5]`

#VSLIDE 
es6 Modules

#VSLIDE 
Generators

#VSLIDE 
Maps, WeekMaps `new Map()`





#HSLIDE

## Happy Number

How to find?

#HSLIDE

Any positive integer, replace the number by the **sum of the squares of its digits**, and repeat the process **until the number** either **equals 1. If ends with 1**, is a **Happy Number**

#HSLIDE