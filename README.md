[![GitPitch](https://gitpitch.com/assets/badge.svg)](https://gitpitch.com/ridermansb/happy-number-meetup/master?grs=gitlab&t=black)

> This is a implementation of [Happy Number][11] for an [Meetup][10]

Is a happy number if starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number either equals 1. If ends with 1, is a Happy Number

E.g: 19

    1ˆ2 + 9ˆ2 = 82
    8ˆ2 + 2ˆ2 = 68
    6ˆ2 + 8ˆ2 = 100
    1ˆ2 + 0ˆ2 + 02 = 1
    
So **19** is a Happy Number

\* *`ˆ` is square*

## TODO
 - [x] Create a boilerplate with failing tests
 - [x] Create slide with basic ES6
   * Arrow functions
   * let, const
   * [Array.from][5] and others [prototype functions][8] `.entries()`, `.keys()`, `.values()`, `for (const [index, element] of ['a', 'b'].entries())`, `.find`, `forEach(), filter(), every() and some()`
   * [String templates][2] `tag'testing ${a}, as fn'`
   * Default values
   * [spread-operator][1] `...`
   * Shorthand properties
   * [Destructuring Assignment][3] `var [first,,,,fifth] = [1,3,2,6,5]`
   * [es6 Modules][4]
   * [Generators][6]
   * [Maps, WeekMaps][7] `new Map()`
 
 ## Use?
 - [x] Use [Jest][0] for tests
 
 ## Docs
  [Assert library][9] for Jest
 
 [0]: https://egghead.io/lessons/javascript-track-project-code-coverage-with-jest?utm_content=buffer989b1&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer
 [1]: https://egghead.io/lessons/ecmascript-6-using-the-es6-spread-operator?series=learn-es6-ecmascript-2015
 [2]: https://egghead.io/lessons/ecmascript-6-string-templates?series=learn-es6-ecmascript-2015
 [3]: https://egghead.io/lessons/ecmascript-6-destructuring-assignment?series=learn-es6-ecmascript-2015
 [4]: https://egghead.io/lessons/ecmascript-6-es6-modules-es2015-import-and-export?series=learn-es6-ecmascript-2015
 [5]: https://egghead.io/lessons/ecmascript-6-converting-an-array-like-object-into-an-array-with-array-from?series=learn-es6-ecmascript-2015
 [6]: https://egghead.io/lessons/ecmascript-6-generators?series=learn-es6-ecmascript-2015
 [7]: https://egghead.io/lessons/ecmascript-6-maps-and-weakmaps-with-es6?series=learn-es6-ecmascript-2015
 [8]: https://www.airpair.com/javascript/posts/mastering-es6-higher-order-functions-for-arrays
 [9]: https://facebook.github.io/jest/docs/api.html#writing-assertions-with-expect
 [10]: https://www.meetup.com/js-dojo-bh/events/233480372/
 [11]: https://en.wikipedia.org/wiki/Happy_number