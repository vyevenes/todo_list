var addItem = function() {
  var input = document.getElementById("input");
  var value = input.value;

  if (value === '') {
    alert('Please write a item');
    return;
  }
  // The function createElement get two arguments (element and text) >> la funcion createElement recibe 2 argumentos (elemento, texto)
  // The element and text are a string  >> el elemento es un string y texto es un string
  function createElement(element, text) {
    element = document.createElement(element);
    text = document.createTextNode(text);
    element.appendChild(text);
    return element;
  }

  // create element
  var li = createElement('li', value);
  var removeButton = createElement('span', 'Remove');

  // Get the element with the id list >> obtiene el elemento con el id list
  var ul = document.getElementById('list');

  // Add >> agrega el remove button al elemento li que vamos a agregar a la lista
  li.appendChild(removeButton);

  // bindea el elemento al btn remover //url: http://www.w3schools.com/jquery/event_bind.asp
  bindClickToRemoveButton(li);

  // Al elemento ul le inserta un li
  ul.appendChild(li);

  // reset the input cada vez que inserta un li
  clearInput();
};

// url http://stackoverflow.com/questions/6750445/javascript-to-clear-form-field-on-button-click
var clearInput = function() {
  document.getElementById("input").value = '';
}

var removeItem = function(event) {
 var currentTarget = event.currentTarget;
 currentTarget.parentNode.remove();
}

var button = document.getElementById("button");
button.onclick = addItem;

var bindClickToRemoveButton = function(li) {
  var removeButton = li.querySelector("span");
  removeButton.onclick = removeItem;
}