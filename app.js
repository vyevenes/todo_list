// Define `addItem` function.
var addItem = function() {
  var input = document.getElementById("input");
  var value = input.value;

  if (value === '') {
    alert('Please write a item');
    return;
  }

  // The function `createElement` get two arguments (element and text).
  // Element and text are strings.
  function createElement(element, text) {
    element = document.createElement(element);
    text = document.createTextNode(text);
    element.appendChild(text);
    return element;
  }

  // Create an li element to be appended on the ul container.
  var li = createElement('li', value);

  // Create an span element to use as a `removeButton`.
  var removeButton = createElement('span', 'Remove');

  // Get the element with the id #list.
  var ul = document.getElementById('list');

  // Append the `removeButton` to li element.
  li.appendChild(removeButton);

  // Bind click event to remove button.
  bindClickToRemoveButton(li);

  // Append li element to the ul container.
  ul.appendChild(li);

  // Clear the input field.
  clearInput();
};

// Define `clearInput` function. http://stackoverflow.com/questions/6750445/javascript-to-clear-form-field-on-button-click
var clearInput = function() {
  document.getElementById("input").value = '';
}
// Define `removeItem` function.
var removeItem = function(event) {
 var currentTarget = event.currentTarget;
 currentTarget.parentNode.remove();
}

// Define `button` variable
var button = document.getElementById("button");
button.onclick = addItem;

// Define `bindClickToRemoveButton` function. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
var bindClickToRemoveButton = function(li) {
  var removeButton = li.querySelector("span");
  removeButton.onclick = removeItem;
}