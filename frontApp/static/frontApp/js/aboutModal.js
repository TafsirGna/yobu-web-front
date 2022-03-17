// Global variables
var about_modal_selected_pane_index = 0;

console.log(about_modal_selected_pane_index);

$('#aboutModal .nav-tabs .nav-item').click(function(){

    about_modal_selected_pane_index = $(this).index();

    $('#aboutModal .nav-tabs .nav-link.active').removeClass('active');
    $(this).children().first().addClass("active");

    $('#aboutModal .card-body .card-body-pane').addClass("d-none");
    $('#aboutModal .card-body .card-body-pane').eq(about_modal_selected_pane_index).removeClass("d-none");

});