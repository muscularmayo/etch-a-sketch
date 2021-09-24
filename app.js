//on button click let's create a board of a certain size

const container = document.querySelector('#container')
let grid = document.querySelector('#grid')


const defaultGrid = function () {
  makeRows(16);
  makeCells(16);
}
window.onload = function () {
  defaultGrid();
}

const populateGrid = function (e) {
  const input = prompt('enter a number 1-64')

  clearGrid();

  makeRows(input);
  makeCells(input);


}

const makeRows = function (num) {
  //add number of rows
  let grid = document.querySelector('#grid')

  for (let i = 0; i < num; i++) {
    let row = document.createElement('div')
    row.id = 'row' + i;
    row.className = 'row'
    grid.appendChild(row);

  }
}

const makeCells = function (num) {
  let grid = document.querySelector('#grid')

  for (let i = 0; i < num; i++) {

    let row = 'row' + i;
    row = document.getElementById(row)
    for (let j = 0; j<num; j++) {
      let cell = document.createElement('div');
      cell.id = '' + i + j
      cell.id = parseInt(cell.id)
      cell.className = 'cell'
      cell.addEventListener('mouseover', hoverEffect)

      row.appendChild(cell)
    }
  }

  //add number of cells in row
}

const clearGrid = function() {
  /*const rows = document.querySelectorAll('.row')
  const cells = document.querySelectorAll('.cell')
  cells.parentElement.removeChild(cells)
  rows.parentElement.removeChild(rows)*/
  let grid = document.querySelector('#grid')

  grid.remove()
  let grid2 = document.createElement('div')
  grid2.id = 'grid'
  container.appendChild(grid2);




}

const hoverEffect = function (e) {
  this.style.backgroundColor = 'black'
}

//cell.addEventListener('hover', hoverEffect)
//hover effect is to make a color appear when we
