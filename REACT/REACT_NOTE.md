# REACT NOTES:

```javascript
ReactDOM.render(WHAT TO SHOW, WHERE TO SHOW IT);

ReactDOM.render(WHAT TO SHOW, WHERE TO SHOW IT, callback (optional));
```

### EXAMPLE:

```javascript
ReactDOM.render(<h1>HELLO KITTENS!</h1>, document.getElementById("root"));

```

## HOW DOES THE MAGIC WORK?

* Babel -- JavaScript Compiler

It turns this:

```JavaScript
ReactDOM.render(<h1>HELLO KITTENS!</h1>, document.getElementById("root"));
```

Into this: (so we don't have to write all this!)

```JavaScript
var h1 = document.createElement("h1")
h1.innerHTML = "Hello World";
document.getElementById("root").appendChild(h1)
```


And the really remarkable thing right here is that if you think about it, we're inside a JavaScript file

and we're able to write plain HTML without any sort of fancy angle brackets or for example the EJS

brackets or anything to denote that this is somehow not Javascript.

So what exactly is this magic?

Well this is what JSX does. React works by creating these JSX files, so files where we've got

HTML right in the body of a JavaScript file. And what happened behind the scenes is that our HTML

is picked up by a compiler and it gets converted or compiled down to actual JavaScript. And the compiler

comes from including this React module right here.

So you can see that if I go ahead and comment this out then we're going to be getting some major problems

right here.

React is not defined and we no longer get our h1 being rendered.

So inside the React module, there is something called Babel. And Babel, as they tell you, is a JavaScript

compiler. So it's able to take next generation JavaScript like ES 6, 7, 8 and compile it down

to a version of JavaScript that every browser can understand.

And this includes compiling JSX down to plain old JavaScript.
