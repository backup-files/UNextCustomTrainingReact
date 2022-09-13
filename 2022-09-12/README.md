## Topics covered on 12-09-2022

1. Basics of HTML
    a. header
    b. paragraph
    c. div
    d. lists - unordered, ordered, definition
    e. Block elements v/s inline element - block elements go to new line, inline element render in same line
    f. span
    g. table - thead, tr, th, tbody, td
    h. attributes - border, id, class, required, style, title
    i. images - src (relative, absolute), alt 
    j. input elements
    k. anchor - redirect to link/page - href, target="_blank"/"popup"
    l. semantic elements
    m. textbox - input type text
    n. password - input type password
    o. number - input type number
    p. radio - input type radio
    q. checkbox - input type checkbox
    r. select and option - dropdown 
    s. select option group - grouped dropdown
    t. input attributes - readonly, required, disabled, pattern, maxlength, minlength, step, placeholder, min, max
    u. form - all input elements should be under form tag
    v. button - input type button - on click event 
    w. submit - submits the form data to the server
    x. <button>hodfsjksdfjl</button>
    y. indian zip code - "^[1-9][0-9]{5}$"
    z. email - input type email
    aa. audio
    ab. video

2. Basics of CSS
    1. Inline
    2. Embed
    3. External - link type='text/css'
    4. Element selectors
    5. Id selectors - #id
    6. class selectors - .class
    7. attribute selectors - [title], [title^="you"]
    8. Spcificity -> inline, id, class, element
    9. Combine selectors - div[title='center']
    10. Descendant selectors - div p
    11. Child selectors - div > p
    12. General Sibling selector - div ~ p
    13. Immediate Sibling selector - div + p
    14. Pseudo - a:hover, a:visited, a:active
    15. Cursor - pointer, move, hand
    16. display - block, none, visibility:hidden, inline
    17. first-child - first element of element
    18. focus - input[type='text']:focus
    19. multiple - select option[value='1'] 
    20. nth child - p:nth-child(4) if p is the fourth child of any page
    21. odd/even nth child - p:nth-child(odd), p:nth-child(even)
    22. nth child an+b - pth:nth-child(10n+7)
    23. Pseudo elements - p::first-line, p::first-letter, h1::before, h1::after 
    24. Responsive web design
    25. Box model - width, height, padding, margin, border
    26. Padding - TLBR
    27. box-sizing: border-box, content-box
    28. positions: static, relative (top, left), fixed (reference point window position), absolute (parent as the reference)
    29. x, y, z axis - z-index
    30. background image position,
    31. test style - align, font, decoration, transform, 
    
3. Basics of JS
   1. Object Destructuring 
   ```js
   const employee = {
    name: 'Tejas',
    age: 22
   };
   var { name, age } = employee;
   var { name: empName, age: empAge } = employee;
   ```
   2. Array Destructuring
   3. [y, x] = [x, y]
   4. Default parameters
   5. Rest parameters 
   ```js
   function total(name, ...marks) {
    console.log(name, marks);
   }
   var john = total('john', 1, 2, 3, 4);
   ```
   6. Spread parameters
   ```js
   function total(a, b, c, d) {
    return a + b + c + d;
   }
   var args = [1, 2, 3, 4];
   console.log(total(...args));
   ```
   7. Method overloading is not possible, it will take the latest definition
   ```js
   function add(a, b) {
    return a+b;
   }
   function add(a, b, c) {
    return a*b;
   }
   console.log(add(10, 20));
   ```
   8. Classes and constructor
   ```js
   class BankAccount {
    constructor(accountName, accountNumber) {
        this.accountName = accountName;
        this.accountNumber = accountNumber;
        this.balance = 2000;
    }
    withdraw(amount) {
        this.balance -= amount;
    }
    deposit(amount) {
        this.balance += amount;
    }
   }
   ```
   9. Supports inheritance `class SavingsAccount extends BankAccount`
   10. Classes are not hoisted, declarations of functions and variables are hoisted
   11. Arrays - forEach((item, index, array))
   12. Names and anonymous functions
   13. filter - var f = v.filter(function(item) {return item.price > 15000;}); - filter criteria as a boolean
   14. find - var f = v.find((x) => x > 1000)
   15. map - var m = v.map((x) => x*x)
   16. Object.assign({}, mobile) is used to create copy of an object
   17. reduce - var sum = v.reduce((s, x) => return s + x, 0);
   18. findIndex - firstIndexOf, index, 
   19. Arrow => functions
   20. Every function has a function context -> you can use this.
   21. function -> this will point to the invoker
   22. arrow -> this will point to the definer

4. Basics of TS
   1. Javascript with types
   2. For Angular, there are guidelines for how to create components, services, etc.
   3. npm install -g typescript
   4. tsc abc.ts
   5. Optionals
   6. Classes with data members
   7. Interfaces

## Assignment

1. Show roman numerals instead of numbers
2. Zip code html based application
3. Specificity - handle conflicts in style