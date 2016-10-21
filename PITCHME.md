#HSLIDE?image=pitchme/assets/es6-background.png

#VSLIDE
<!-- .slide: data-background-transition="none" -->
<div style="text-align:center"><img style="border: 0" width="70%" src="http://www.ciandt.com/ciandt-e/images/logo.png" /></div>

#VSLIDE
<!-- .slide: data-background-transition="none" -->
<div style="text-align:center; text-align: center; font-size: 30px; color: #00B5AD">
    <img style="border: none" width="70%" src="http://i.imgur.com/tmplMiO.png" />
    <span style="color: #00B5AD">facebook.com/gitskills</span>
    | 
    <span style="color: #00B5AD">@gitskills</span>
</div>

#HSLIDE
# ES6 Basics

#VSLIDE 
# let, const

Both let and const create variables that are block-scoped 

```
function order(x, y) {
    if (x > y) {
        let tmp = x;
        x = y;
        y = tmp;
    }
    console.log(tmp===x); // ReferenceError: tmp is not defined
    return [x, y];
}
```

#VSLIDE 

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

#VSLIDE

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
# Shorthand properties
```
// Shorthand property names (ES6)
var a = "foo", b = 42, c = {};
var o = { a, b, c };
```

#VSLIDE 
# Destructuring Assignment 

```
({a, b} = {a:1, b:2})
console.log(a) // 1
console.log(b) // 2
```

#VSLIDE 

```
[a, b, ...rest] = [1, 2, 3, 4, 5]
console.log(a) // 1
console.log(b) // 2
console.log(rest) // [3, 4, 5]
```

#VSLIDE 
# Generators

```
function *foo() {
    yield 1
    yield 2
    yield 3
}
var it = foo();
```

#VSLIDE 

```
var message = it.next();
console.log( message ); // { value:1, done:false }
console.log( it.next() ); // { value:2, done:false }
console.log( it.next() ); // { value:3, done:false }
console.log( it.next() ); // { value:undefined, done:true }
```

#HSLIDE

## Happy Number

A happy number is a number defined by the following process that result in `1`

#VSLIDE

 - Starting with any positive integer
 - Replace the number by the sum of the squares of its digits
 - Repeat the process until the number either equals 1 

#VSLIDE


E.g: **19** is a Happy Number!

    1ˆ2 + 9ˆ2 = 82
    8ˆ2 + 2ˆ2 = 68
    6ˆ2 + 8ˆ2 = 100
    1ˆ2 + 0ˆ2 + 02 = 1
    
\* *`ˆ` is square*