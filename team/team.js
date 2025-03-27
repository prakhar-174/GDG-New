 // Initial value
 let currentValue = 1;

 // Function to update content visibility
 function updateContentVisibility(value) {
     // Hide all content items
     for (let i = 1; i <= 5; i++) {
         const element = document.getElementById(i.toString());
         element.style.display = 'none';
     }

     // Show current content item
     const currentElement = document.getElementById(value.toString());
     currentElement.style.display = 'block';
 }

 // Initial display of first content
 updateContentVisibility(currentValue);

 // Previous button handler
 document.getElementById('prevBtn').addEventListener('click', () => {
     // Decrement or wrap around to 5
     currentValue = currentValue === 1 ? 5 : currentValue - 1;
     updateContentVisibility(currentValue);
 });

 // Next button handler
 document.getElementById('nextBtn').addEventListener('click', () => {
     // Increment or wrap around to 1
     currentValue = currentValue === 5 ? 1 : currentValue + 1;
     updateContentVisibility(currentValue);
 });