//on button click let's create a board of a certain size

const createBoard = document.querySelector('#createBoard')
const grid = document.querySelector('#grid')
const pixel = document.createElement('div');
pixel.innerHTML = 'hello'

const populateGrid = function (e) {
  const input = prompt('enter a number 1-64')

  for(let i = 0; i < input; i++) {
    for(let j = 0; j < input; j++) {
      grid.appendChild(pixel)
    }
    grid.appendChild(pixel)
  }

}




