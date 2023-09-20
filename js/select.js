const dropdownToggleColor = document.getElementById('selectMenuButtonColor');
const dropdownMenuColor = document.querySelector('.menu-color');
const dropdownItemsColor = document.querySelectorAll('.item-color');

dropdownToggleColor.addEventListener('click', function() {
    dropdownMenuColor.classList.toggle('show');
    dropdownToggleColor.classList.toggle("show-arrow")
});

dropdownItemsColor.forEach(function(item) {
    item.addEventListener('click', function() {
        const value = this.textContent;
        dropdownToggleColor.textContent = value;
        dropdownMenuColor.classList.remove('show');
    });
});


const dropdownToggleSize = document.getElementById('selectMenuButtonSize');
const dropdownMenuSize = document.querySelector('.menu-size');
const dropdownItemsSize = document.querySelectorAll('.item-size');

dropdownToggleSize.addEventListener('click', function() {
    dropdownMenuSize.classList.toggle('show');
    dropdownToggleSize.classList.toggle("show-arrow")
});

dropdownItemsSize.forEach(function(item) {
    item.addEventListener('click', function() {
        const value = this.textContent;
        dropdownToggleSize.textContent = value;
        dropdownMenuSize.classList.remove('show');
    });
});