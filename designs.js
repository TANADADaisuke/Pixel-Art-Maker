// When size is submitted by the user, call makeGrid()
function makeGrid(event) {

    event.preventDefault();

    // reset the grid to a blank state
    document.querySelectorAll('tr').forEach(function(element) {
        element.remove();
    });

    // set height and width variables
    const gridHeight = allInputs[0].value;
    const gridWidth = allInputs[1].value;

    // make a grid table of given height and width
    const tableElement = document.querySelector('table');
    // create each row
    for (let rowNumber = 0; rowNumber < gridHeight; rowNumber++) {
        const tableRowElement = document.createElement('tr');

        // create each column
        for (let columnNumber = 0; columnNumber < gridWidth; columnNumber++) {
            const tableColumnElement = document.createElement('td');
            tableRowElement.appendChild(tableColumnElement);

            // add event lister to change background color
            tableColumnElement.addEventListener('click', changeTheColor);
        };

        tableElement.appendChild(tableRowElement);
    };

}


// When a grid is clicked, call changeTheColor()
function changeTheColor(event) {
    const color = allInputs[3].value;
    event.target.style.backgroundColor = color;
}


// set input elements variable to be chosen when needed
const allInputs = document.querySelectorAll('input');

// assign submit element
const submit = allInputs[2];

// add event listener on submit button
submit.addEventListener('click', makeGrid);
