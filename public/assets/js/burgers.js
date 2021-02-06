$(function(){
    $(".create-form").on("submit",function(event){
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0
        }
        $.ajax("/api/burgers",{
            type: "POST",
            data: newBurger
        }).then(
            function(){
            console.log("A new burger has been added to your order!");
            
            location.reload();
        })
    })

    $(".eatbtn").on("click",function(event){
        event.preventDefault();

        var id = $(this).data("id");
        var d = {
            devoured: 1
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT", 
            data: d
        }).then(function(){
            console.log("You've Devoured your burger!");
            location.reload();
        });
    });

    $("#deletebtn").on("click", function(event){
        event.preventDefault();

        var id = $(this).data("id");

        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(
            location.reload()
        );
    });
});