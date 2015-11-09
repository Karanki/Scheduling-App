    
$("#signupMain").click( function() {
 $.post( $("#myForm").attr("action"),
         $("#myForm :input").serializeArray(),
         function(info){ $("#errorMsg").html(info);
        $("#errorMsg").css({"text-align": "center", "margin-top": "-11.5%", 'color': 'white'});
   }
       );
clearInput();
});
 
$("#myForm").submit( function() {
  return false;
});
function clearInput() {
    $("#myForm :input").each( function() {
       $(this).val('');
    });
}
        
     