//Business logic
//fetch size of pizza
function getPizzaSize() {
    return $("#pizza-size")
      .find(":selected")
      .val();
  }
  //fetch crust of pizza
  function getCrust() {
    return $("#pizza-crust")
      .find(":selected")
      .val();
  }
  //fetch topping of pizza
  function getToppings() {
    var toppingList = [];
    $(".toppings :checked").each(function() {
      toppingList.push($(this).val());
    });
    return toppingList;
  }







// UI logic
$("document").ready(
    function(){
        $("form").submit(
            function(){
                var size = $("#sizee").find(":selected").val();
                alert(size);
                }
        );
    }
);
$("document").ready(
    function(){
        $("form").submit(
            function(){
                var topping = $("#Toppings").find(":checked").val();
                alert(topping);
            }
        );
    }
);
$("document").ready(
    function(){
        $("form").submit(
            function(){
                var crust = $("#crust").find(":selected").val();
                alert(crust);
                }
        );
    }
);