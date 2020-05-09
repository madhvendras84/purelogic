$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('.sidebar-main').toggleClass('activenow');
    });    
});


function hideShow(){
    $('#hideShow').on('click',function(event){
        // jQuery('body').find('#sidebarCollapse').trigger('click');        
        $('#sidebar').removeClass('active');
        $('.sidebar-main').removeClass('activenow');
    });
}