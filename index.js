$(document).ready(function() {
    
    $(".cont").hide();
    $(".cover").show();
    
    $(".header>.link0").click(function() {
        $(".cont").hide();
        $(".cover").show();
    });
    
    $(".header>.link1").click(function() {
        $(".cont").hide();
        $(".container0").show();
    });
    
    $(".header>.link2").click(function() {
        $(".cont").hide();
        $(".container1").show();
    });
    
    $(".header>.link3").click(function() {
        $(".cont").hide();
    });
});
