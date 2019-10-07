$('.amount').reverse(function(){"##,###.##"});
var total_amount =function() {
var sum=0;
$(".mount").each(function(){
num = $(this).val().replace(',',''  );
if(num !=0){
    sum +=total_amount(num);
}
});
$('.amount').val(sum);
}
$('.amount').keyup(function(){
total_amount();
alert('Total Amount to be paid is' + " ");
});

