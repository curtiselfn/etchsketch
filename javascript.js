const container = document.getElementById('container');

function createGrid(size) {
  // Clear any existing boxes
  container.innerHTML = '';

  // Set up the grid rows and columns
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  // Create the square boxes
  for (let i = 0; i < size * size; i++) {
    const box = document.createElement('div');
    box.classList.add('grid-box');

    // Draw on hover
    box.addEventListener('mouseover', () => {
      box.style.backgroundColor = 'black';
    });

    container.appendChild(box);
  }
}

createGrid(16); // start with a 16x16 grid

const resetBtn = document.getElementById('resetBtn');

resetBtn.addEventListener('click', () => {
  let newSize = parseInt(prompt("Enter new grid size (1–100):"));
  
  if (newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert("Invalid size! Please enter a number between 1 and 100.");
  }
});
