//on button click let's create a board of a certain size

const container = document.querySelector('#container')
const grid = document.querySelector('#grid')
const pixel = document.createElement('div');
pixel.innerHTML = 'hello'

const populateGrid = function (e) {
  const input = prompt('enter a number 1-64')

  makeRows(input);
  makeCells(input);


}

const makeRows = function (num) {
  //add number of rows
  for (let i = 0; i < num; i++) {
    let row = document.createElement('div')
    row.innerHTML ='hello'
    row.id = 'row' + i;
    row.className = 'row'
    container.appendChild(row);

  }
}

const makeCells = function (num) {
  for (let i = 0; i < num; i++) {

    let row = 'row' + i;
    row = document.getElementById(row)
    for (let j = 0; j<num; j++) {
      let cell = document.createElement('div');
      cell.innerHTML = 'world'
      cell.className = 'cell'
      row.appendChild(cell)
    }
  }

  //add number of cells in row
}



