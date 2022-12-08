const inputElement = document.getElementById('list-acceptor')
const btnElement = document.getElementById('submit-button')
const ulElement = document.getElementById('todo-list')


btnElement.addEventListener('click', function(evt){
  //create new li element
  const li = document.createElement('li')
  //sets the li content to the value at input
  li.textContent = inputElement.value
  // adds to the li content to the ul area
  document.querySelector('ul').appendChild(li)
  inputElement.value = ''
  //console.log(evt.target)
})