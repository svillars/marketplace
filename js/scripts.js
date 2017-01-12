var multiply = function(amount){
  return amount*15.35;
};

$(document).ready(function(){
  $("#blanks form").submit(function(event){
    var sizeInput = $(".radio input:checked").val();
    var colorInput = $("input#color").val();
    var nameInput = $("input#name").val();
    var streetaddressInput = $("input#streetaddress").val();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val();
    var zipcodeInput = $("input#zipcode").val();
    var ccInput = $("input#cc").val();
    var expireInput = $("input#expire").val();
    var shippingInput = $("option:selected").val();
    var totalpurchase = multiply(parseFloat($("input#amount").val()));

    $("#header h1").text("Your T-shirts are on the way!");
    $(".size").text(sizeInput);
    $(".color").text(colorInput);
    $(".color").css("color", colorInput);
    $(".color").css("background-color", colorInput);
    $(".total").text(totalpurchase);
    $(".name").text(nameInput);
    $(".streetaddress").text(streetaddressInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zipcode").text(zipcodeInput);
    $(".cc").text(ccInput.charAt(0)+ccInput.charAt(1)+ccInput.charAt(2)+ccInput.charAt(3));
    $(".expire").text(expireInput);
    $(".shipping").text(shippingInput);

    $("#receipt").show();
    $("#blanks").hide();

    event.preventDefault();

  });

});
