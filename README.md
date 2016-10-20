[![GitPitch](https://gitpitch.com/assets/badge.svg)](https://gitpitch.com/ridermansb/happy-number-meetup/master?grs=gitlab&t=black)

> This is a implementation of [Happy Number][0] for an [Meetup][1]

Is a happy number if starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number either equals 1. If ends with 1, is a Happy Number

E.g: 19

    1ˆ2 + 9ˆ2 = 82
    8ˆ2 + 2ˆ2 = 68
    6ˆ2 + 8ˆ2 = 100
    1ˆ2 + 0ˆ2 + 02 = 1
    
So **19** is a Happy Number

\* *`ˆ` is square*
 
 ## Docs
  [Assert library][2] for Jest
 
 [0]: https://en.wikipedia.org/wiki/Happy_number
 [1]: https://www.meetup.com/js-dojo-bh/events/233480372/
 [2]: https://facebook.github.io/jest/docs/api.html#writing-assertions-with-expect