// is the script loaded
console.log("made it");
alert('hello');

// get all visible DOM elements and add to javascript object, then log that to the console



// Function to get all visible DOM elements


function getVisibleElements() {
    const elements = document.querySelectorAll('*'); // Select all elements
    const visibleElements = {};

    elements.forEach(element => {
        // Check if the element is visible
        const style = window.getComputedStyle(element);
        const isVisible = style.display !== 'none' && style.visibility !== 'hidden' && style.opacity > 0;

        if (isVisible) {
            // Add the element to the object with its tag name and other details
            visibleElements[element.tagName.toLowerCase()] = {
                id: element.id || null,
                classes: element.className ? element.className.split(' ') : [],
                textContent: element.textContent.trim()
            };
        }
    });

    return visibleElements;
}

// Get visible elements and log them to the console
const visibleElements = getVisibleElements();
console.log(visibleElements);


