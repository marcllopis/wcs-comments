let commentsContainer = document.getElementById('comments')

let button = document.getElementById('button')
let input = document.getElementById('user')
let text = document.getElementById('text')


let listComments = [
  {
    user: 'Marc',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, labore?'
  },
  {
    user: 'Andreas',
    text: 'Lorem ipsum dolor sit'
  },
  {
    user: 'Sergio',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing?'
  },
];

// const createListOfElementsFromArray = (array) => {
//   let arrayToHtml = '';
//   for(let i = 0; i < array.length; i++) {
//     arrayToHtml += `
//       <br>
//       <h4>${array[i].user} said:</h4>
//       <p>${array[i].text}</p>
//       <hr>
//       <br>
//     `
//   }
//   return arrayToHtml;
// }

const createListOfElementsFromArray = (array) => {
  let arrayToHtml = '';
  array.forEach(element => arrayToHtml += `
      <br>
      <h4>${element.user} said:</h4>
      <p>${element.text}</p>
      <hr>
      <br>
    `
  )
  return arrayToHtml;
}








button.addEventListener('click', () => {
  let inputValue = input.value
  let textValue = text.value

  let newComment = {
    user: inputValue,
    text: textValue
  }

  listComments.push(newComment);
  // listComments = [...listComments, newComment]

  input.value = ''
  text.value = ''

  commentsContainer.innerHTML = createListOfElementsFromArray(listComments)

})



commentsContainer.innerHTML = createListOfElementsFromArray(listComments)





localStorage