$(document).ready(function(){

   $("div[id^='num_']").click(function(){
        var number = $(this).children().text();
        console.log(number);
        $("#current").html($("#current").text() + number);
   });

    $("#AC").click(function(){
        $("#current").html('');
        $("#result").html('Result: ');
    });

    $("div[id='sum']").click(function(){
        var summa = $(this).children().text();
        console.log(summa);
        $("#current").html($("#current").text() + summa);
   });

   $("div[id='min']").click(function(){
        var min = $(this).children().text();
        console.log(min);
        $("#current").html($("#current").text() + min);
   });

    $("div[id='mult']").click(function(){
        var mult = $(this).children().text();
        console.log(mult);
        $("#current").html($("#current").text() + mult);
   });

   $("div[id='del']").click(function(){
        var del = $(this).children().text();
        console.log(del);
        $("#current").html($("#current").text() + del);
   });

       $("div[id='root']").click(function(){
        var sqrt = $(this).children().text();
        console.log(sqrt);
        $("#current").html("Math.sqrt(" + $("#current").text() + ")");
   });

    $("div[id='step2']").click(function(){
        var step = $(this).children().text();
        console.log(step);
        $("#current").html('Math.pow('+$("#current").text() + ",2)");
   });

   $("div[id='step3']").click(function(){
        var percent = $(this).children().text();
        console.log(step3);
        $("#current").html('Math.pow('+$("#current").text() + ",3)");
   });

    $("div[id='=']").click(function(){
        var to_count = $("#current").text();

        to_count = to_count.replace(/\s/g,'').replace('x','*');
        console.log(to_count.split(''));

        var result = eval(to_count);
        console.log(result);
        $("#result").html("Result: "+result);
    });

});