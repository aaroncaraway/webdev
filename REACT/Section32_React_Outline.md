# Section 32: React.

[RESOURCES](https://www.appbrewery.co/p/web-development-course-resources/)

### 412. What is React?


### 413. What we will make in this React module


### 414. Introduction to Code Sandbox and the Structure of the Module


### 415. Introduction to JSX and Babel

* Babel lets us embed html inside javascript
* js(html)

```JavaScript
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>Cats I have</h1>
    <ul>
      <li>Tonks</li>
      <li>Pippin</li>
      <li>Uli</li>
    </ul>
  </div>,
  document.getElementById("root")
);
```

### 416. JSX Code Practice

* We can ALSO include JavaScript inside the html inside the JavaScript
* js(html{js})

```JavaScript
import React from "react";
import ReactDOM from "react-dom";

const mskc = "Michael Scott Kitten Company"
ReactDOM.render(
  <div>
    <h1>Cats I have</h1>
    <ul>
      <li>Tonks</li>
      <li>Pippin</li>
      <li>Uli</li>
      <li>{mskc}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
```

```JavaScript
import React from "react";
import ReactDOM from "react-dom";

const mskc_mom = "Michael Scott"
const mskc_babies = "Kitten Company"
ReactDOM.render(
  <div>
    <h1>Cats I have</h1>
    <ul>
      <li>Tonks</li>
      <li>Pippin</li>
      <li>Uli</li>
      <li>{mskc_mom + ' ' + mskc_babies}</li>
      <li>{mskc_mom} {mskc_babies}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
```


### 417. Javascript Expressions in JSX & ES6 Template Literals

also can do TEMPLATE LITERALS (String Interpolation)

```JavaScript
<li> {`${mskc_mom} ${mskc_babies}`}</li>
```

But that isn't necessarily best. Angela prefers first method.

#### NOTES:

# REMEMBER: Codesandbox works best with a new window

[Statements vs. Expressions](https://www.youtube.com/watch?v=WVyCrI1cHi8&list=PL-xu4i_QDSxcoDNeh8rx5-pHCCTOg0XsI&index=15)

* can embed JS EXPRESSIONS into the html but not statements
* expressions are VALUES
* statements are INSTRUCTIONS (conditionals, while/for loops etc)
* you cannot put statements where expressions are expected (e.g. cannot put a statement into a console.log())


### 418. Javascript Expressions in JSX Practice


### 419. JSX Attributes & Styling React Elements

#### NOTES:
* Styles have to be className because it's still getting rendered to JS not css
* must change JavaScript to JSX on the root page

From this:
```Javascript
    <script src="../src/index.js" type="text/javascript"></script>
```

To this:
```Javascript
    <script src="../src/index.js" type="text/javascript"></script>
```

* html elements must be in camel case

* You can insert both JavaScript AND css into react elements

* NOTE: "Unterminated JSX Context" usually means you just forgot a backslash

### 420. Inline Styling for React Elements

```JavaScript
ReactDOM.render(
  <div>
    <h1 className="heading">My Favorite Foods</h1>
  </div>,
  document.getElementById("root")
);
```

* NOTE: Even though it LOOKS like html, it's JSX


```JavaScript
ReactDOM.render(
  <div>
    <h1 style={{color: "red"}}>My Favorite Foods</h1>
  </div>,
  document.getElementById("root")
);
```

### 421. React Styling Practice


### 422. React Components

* In Pascal Case so Components named `Heading`

### 423. React Components Practice

#### index.js

```Javascript
import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";
import List from "./List";

ReactDOM.render(
  <div>
    <Heading />
    <List />
  </div>,
  document.getElementById("root")
);
```
#### Heading.jsx

```Javascript
import React from "react";
function Heading() {
  return <h1>My Favorite Foods</h1>;
}

export default Heading;
```

#### List.jsx

```Javascript
import React from "react";

function List() {
  return (
    <ul>
      <li>Jam</li>
      <li>Candy</li>
      <li>Spinach</li>
    </ul>
  );
}

export default List;
```

#### CODESANDBOX

[Link](https://codesandbox.io/s/react-components-practice-4em25?file=/src/components/Heading.js)

### 424. Javascript ES6 - Import, Export and Modules


### 425. Javascript ES6 Import, Export and Modules Practice


### 426. [Windows]​ Local Environment Setup for React Development


### 427. [Mac] Local Environment Setup for React Development​


### 428. Keeper App Project - Part 1 Challenge


### 429. Keeper App Part 1 Solution


### 430. React Props


### 431. React Props Practice


### 432. React DevTools


### 433. Mapping Data to Components


### 434. Mapping Data to Components​ Practice


### 435. Javascript ES6 Map/Filter/Reduce


### 436. Javascript ES6 Arrow functions


### 437. Keeper App Project - Part 2


### 438. React Conditional Rendering with the Ternary Operator & AND Operator


### 439. Conditional Rendering Practice


### 440. State in React - Declarative vs. Imperative Programming


### 441. React Hooks - useState


### 442. useState Hook Practice


### 443. Javascript ES6 Object & Array Destructuring


### 444. Javascript ​ES6 Destructuring Challenge Solution


### 445. Event Handling in React


### 446. React Forms


### 447. Class Components vs. Functional Components


### 448. Changing Complex State


### 449. Changing Complex State Practice


### 450. Javascript ES6 Spread Operator


### 451. Javascript ES6 Spread Operator Practice


### 452. Managing a Component Tree


### 453. Managing a Component Tree Practice


### 454. Keeper App Project - Part 3


### 455. React Dependencies & Styling the Keeper App


### 456. Tip from Angela - How to Build Your Own Product


### 457. Feedback Time!
