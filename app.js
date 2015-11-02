var addItem = function() {
  var input = document.getElementById("input");
  var value = input.value;

  if (value === '') {
    alert('Please write a item');
    return;
  }

  // crear element
  var li = document.createElement("li");
  var span = document.createElement("span");
  var spanText = document.createTextNode("Remove");
  var text = document.createTextNode(value);
  var ul = document.getElementById("list");
  span.appendChild(spanText);
  li.appendChild(text);
  li.appendChild(span);
  bindClickToRemoveButton(li);
  ul.appendChild(li);
  clearInput();
};

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