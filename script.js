// this will add an event listener to the 'Add' button
document.getElementById('addButton').addEventListener('click', function() {
    // it will get the input field and trim any extra spaces
    const input = document.getElementById('todoInput');
    const todoText = input.value.trim();

    // it check if the input is not empty
    if (todoText !== '') {
        // get the list where new items will be added
        const todoList = document.getElementById('todoList');

        // it will create now a new list item
        const li = document.createElement('li');
        
        // this create a checkbox for the list item
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        // it add an event listener to the checkbox for marking as completed
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                li.classList.add('completed'); // Mark as completed
                todoList.appendChild(li); // Move to the bottom of the list
            } else {
                li.classList.remove('completed'); // Unmark as completed
            }
        });

        // now i create a text node with the input text
        const text = document.createTextNode(todoText);
        
        // it make a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete';

        // now add an event listener to the delete button for removing the item
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(li); // Remove the list item
        });

        // to Append the checkbox, text, and delete button to the list item
        li.appendChild(checkbox);
        li.appendChild(text);
        li.appendChild(deleteButton);
        
        // append the list item to the list
        todoList.appendChild(li);

        // it will clear the input field and focus it for the next entry
        input.value = '';
        input.focus();
    }
});
