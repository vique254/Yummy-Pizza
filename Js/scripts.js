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

  function area(name, estate) {
    this.name = name;
    this.estate = estate;
  }       
  function Details(size, crust, Toppings,quantity){
    this.size = size;
    this.crust = crust;
    this.Toppings =Toppings;
    this.quantity =quantity;
  }
  function Total(price, quantity, delivery){
    this.price = price;
    this.quantity = quantity;
    this.delivery = delivery;
    this.total=this.price+this.quantity+this.delivery;
  }
  Total.prototype.finalTotal = function(){
    return this.price * this.quantity + this.delivery;
  }





// UI logic

    $(document).ready(function(){
      $('form').submit(function(event){
        var size = $("#size").find(":selected").val();
        alert(size);
        function priceBySize(){
          if(size === "small"){
            return 600 * 1;
          }
          else if(size === "medium"){
            return 800 * 1;
          }
          else{
            return 1100 * 1;
          }
        }
        priceBySize();
        function priceByCrust() {
          if(crust === "Crispy") {
            return 300 * 1;
          } 
          else if(crust === "Stuffed") {
            return 150 * 1;
          }
           else{
            return 200 * 1;
          };
        }
        priceByCrust();
        function priceByToppings() {
          if (Toppings === "Pepperoni") {
            return 300 * 1;
          } 
          else if (Toppings === "Bacon") {
            return 250 * 1;
          } 
          else {
            return 150 * 1;
          }
        }
        priceByToppings();
        var Toppings= $('input[name=radio]:checked').val();
        alert(Toppings);
        var crust = $("#crust").find(":selected").val();
        alert(crust);
        event.preventDefault();
        var delivery =$('#delivery').val();
        var deliveryPrices = ["yes", "no"];
        if(deliveryPrices === "yes"){
          var area=prompt ("Enter your location");
          alert(delivery + area);
          return 100;
        }
        else{
          alert('thank you')
        }
        
        
       var quantity=$("#quantity").val()
        var deliveryPrices = deliveryPrices[delivery];
        var newDetails = new Details(size, crust, Toppings,quantity);
        
        console.log(newDetails);
     
        var newBill = new Total(newDetails.price,newDetails.quantity,newDetails.delivery);
        alert("your order is " + ", " + newDetails.size+" ," + newDetails.Toppings + ', and ' + newDetails.crust  +' '+ 'pizza'+". click ok to view your bill");
        alert(Total.finalTotal());
        console.log(newBill);
        
      });
    });
  

  

    