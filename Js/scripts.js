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
           var topping= $('input[name=radio]:checked').val();
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

    function Getvalue(size,toppings,crust,quantity){
        this.selectedSize=size;
        this.selectedToppings=toppings;
        this.selectedCrust=crust;
        this.selectedQuantity=quantity;
    }
    function Total(size,quantity,delivery){
        this.size=size;
        this.quantity=quantity;
        this.delivery=delivery;
    }
    Total.prototype.finalTotal =function(){
        return this.size+this.quantity+this.delivery;
    }
    (doocument).ready(function(){
        $(".allme").click(event).preventDefault(){
            var selectedCrust=("$crust").val();
            var selectedSize=("$size").val();
            var selectedQuantity=parseInt("$nums").val();
            var selected    Toppings=("$Toppings").val();
            var selectedDelivery=("$devs").val();
            var deliveryPrices=[100,0];
            var pizaPrices=[600,800,1400];
            var deliveryPrices(InputtedPrice-1);
            var PizzaPrice(InputtedPrice-1);

            Total= new Total()




        });
    };
    
function sizeCalcPrice(size) {
    if (size === "small") {
      return sizePrice.small * 1;
    } 
    else if (size === "medium") {
      return sizePrice.medium * 1;
    } 
    else {
      return sizePrice.large * 1;
    };
  });

    