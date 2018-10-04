$(document).ready(function () {
    var from, name, textbody;
    $("button").click(function () {
        name = $("#contact-name").val();
        from = $("#contact-email").val();
        text = $("#contact-text").val();
        $("#message").text("Sending E-mail...Please wait");
        
        $.get( "/send", {
            name: name,    
            from: from,
            textbody: text},function(data){
                if(data=="sent")
                {
                    $("#message").empty().html("Email has been sent to Jon!");
                }
            });
    });
});