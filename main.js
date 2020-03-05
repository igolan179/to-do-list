var addButton = $('.fa-plus');
var drawings = $('.draw>i');
var input = $('.newtask');
drawings.hide();
function adjustWidth() {
    if (input.val().length > 5){
        if(input.val().length >= 25) input.css('width', `${25 * 25}px`)
     else input.css('width', `${input.val().length * 25}px`);
    }
    else input.css('width', '150px');
}
function addTask() {
    if (input.val().length > 0) {
        $(".list").append(`<li><span>${input.val()}</span><i class="fas fa-times"></i></li>`);
        $('li:last-child').hide()
        $('li:last-child').fadeIn()
        addDrawing(input.val());
        input.val("");
        adjustWidth();
        input.focus();
    }
}
function addDrawing(val) {
    let str = val.toLowerCase();
    if (str.includes("workout") || str.includes("run") || str.includes("walk")) $('.fa-running').fadeIn();
    if (str.includes("shop")) $('.fa-shopping-cart').fadeIn();
    if (str.includes("study") || str.includes("read")) $('.fa-book').fadeIn();
}
function removeDrawing(val) {
    let str = val.toLowerCase();
    if (str.includes("workout") || str.includes("run") || str.includes("walk")) $('.fa-running').fadeOut();
    if (str.includes("shop")) $('.fa-shopping-cart').fadeOut();
    if (str.includes("study") || str.includes("read")) $('.fa-book').fadeOut();
}
input.on('input', function () {

    adjustWidth();
});
input.keypress(function (e) {
    var key = e.which;
    if (key == 13 && input.is(":focus")) addTask();
});
addButton.click(function () {
    addTask();

});
$(document).on('click', '.fa-times', function () {
    var listItem = $(this).parent();
    removeDrawing(listItem.text());
    listItem.fadeTo("normal", 0.00, function () {
        listItem.slideUp("fast", function () {
            listItem.remove();
        });
    });
});
$(document).on('mouseover', '.list>li>span', function () {
    if ($(this).attr('class') != "strike") $(this).addClass('Mark');
});
$(document).on('mouseleave', '.list>li>span', function () {
    if ($(this).attr('class') != "strike") $(this).removeClass('Mark');
});
$(document).on('click', '.list>li>span', function () {
    $(this).toggleClass('strike');
    $(this).removeClass('Mark')
});