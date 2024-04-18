const image = document.getElementById('draggableImage');

    let isDragging = false;
    let initialX;
    let initialY;
    let mouseX;
    let mouseY;

    image.addEventListener('mousedown', (event) => {
        isDragging = true;
        initialX = image.offsetLeft;
        initialY = image.offsetTop;
        mouseX = event.clientX;
        mouseY = event.clientY;
        event.preventDefault(); 
    });

   
    document.addEventListener('mousemove', (event) => {
        if (isDragging) {
          
            const deltaX = event.clientX - mouseX;
            const deltaY = event.clientY - mouseY;
            image.style.left = `${initialX + deltaX}px`;
            image.style.top = `${initialY + deltaY}px`;
        }
    });


    document.addEventListener('mouseup', () => {
        isDragging = false; 
    });
