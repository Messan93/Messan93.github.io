//variable declarations.
const table = document.getElementById('pixel_canvas');
let gridHeight = document.getElementById('input_height');
let gridWidth = document.getElementById('input_width');
//Event listener for when submit is clicked it draws a grid.
document.getElementById('input_submit').addEventListener("click", function(event) {
	event.preventDefault();
	makeGrid();
});

//function that is responsible for making grid.
function makeGrid() {
	//variable declarations for the for loop.
    table.innerHTML = '';
    let heightValue = gridHeight.value;
    let widthValue = gridWidth.value;
    let color = document.getElementById('colorPicker');

   //for loop that makes the grid.
    for (let i = 0; i < heightValue; i++) {
        let row = table.insertRow(i);
        for (let j = 0; j < widthValue; j++) {
            let cell = row.insertCell(j);

            //allows cells to be colored based on users selected color.
            cell.addEventListener("click", function(event) {
            	event.target.style.backgroundColor = color.value;

            });
            
        }
    }
    
}




