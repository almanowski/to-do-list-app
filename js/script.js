function newItem() {
    //1. Adding a new item to the list of items:
    const li = $('<li></li>');
    const inputValue = $('#input').val();

    li.append(inputValue);

    if (inputValue === '') {
        alert('You must write something!');
    } else {
        $('#list').append(li);
    }


    //2. Crossing out an item from the list of items:
    li.on('dblclick', function () {
        li.addClass('strike');
    });


    //3(i). Adding the delete button "X":
    const crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode("X"));
    li.append(crossOutButton);

    //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
    crossOutButton.on('click', function () {
        li.addClass('delete');
    });


        // 4. Reordering the items:
        $('#list').sortable();
}
