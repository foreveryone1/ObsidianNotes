https://stackoverflow.com/questions/43010907/copying-an-element-and-changing-a-class-in-pure-javascript
https://bobbyhadz.com/blog/javascript-add-multiple-classes-to-element
https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore

```javascript
// Reference the .footer-menu
var ftMenu = document.querySelector('.footer-menu');

// Reference the .page-nav
var pgNav = document.querySelector('.page-nav');

// Clone the .footer-menu
var dupe = ftMenu.cloneNode(true);

// Clear .footer-menu of any classes
dupe.className = "";

// Add .main-menu to .footer-menu's clone
dupe.classList.add('main-menu');

// Append the clone of .footer-menu to .page-nav
pgNav.appendChild(dupe);
```

```javascript
const box = document.getElementById('box');

// ✅ Add multiple classes
box.classList.add('bg-blue', 'text-white');

// ✅ Remove multiple classes
box.classList.remove('first-class', 'second-class');
```

```
insertBefore(newNode, referenceNode);
```



### [Parameters](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore#parameters "Permalink to Parameters")

`newNode`

The node to be inserted.

`referenceNode`

The node before which `newNode` is inserted. If this is `null`, then `newNode` is inserted at the end of node's child nodes.