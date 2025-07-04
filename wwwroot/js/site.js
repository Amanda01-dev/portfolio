const squirrel = document.getElementById('squirrel');
const margin = 60; // proximity margin in pixels

document.addEventListener('mousemove', (e) => {
  const rect = squirrel.getBoundingClientRect();
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const inXRange = mouseX >= rect.left - margin && mouseX <= rect.right + margin;
  const inYRange = mouseY >= rect.top - margin && mouseY <= rect.bottom + margin;

  if (inXRange && inYRange) {
    squirrel.style.transform = 'translateY(-2px)';
  } else {
    squirrel.style.transform = 'translateY(0)';
  }
});
