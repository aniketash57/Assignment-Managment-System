//learnt append and on method to account for elements which aren't there 
//check of specific Todos By Clicing 
$("ul").on("click","li",function()
{
    console.log("you clicke");
    //if li is gray
    if($(this).css("color")==="rgb(128, 128, 128)")
    {
        console.log("gray");

        $(this).css({
            color:"black",
            textDecoration:"none"
        });
    }
    //if li is not gray
    else 
    {

        $(this).css({
            color : "gray",
            textDecoration: "line-through"
        }
        );
    }
}
);
$("ul").on("click","span",function(event){
    console.log("remove");
    $(this).parent().fadeOut(500,function()
    
    {
        $(this).remove();
    });
    event.stopPropagation();
});
$("input[type='text']").keypress(function(event)
{
    if(event.which===13)
    {
        console.log("key");
        var txt=$(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'> </i></span> " + txt + "</li>");
    }
});
$(".fa-plus").on("click",function(){
    $("input[type='text']").fadeToggle();
})
