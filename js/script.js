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
}
