
var player1Acc = [];
var player2 = [];
var player2Acc = [];
var diceNum = _.random(1,6);


$(document).ready(function(){

    $("#instructions").click(function(){
        $("#instruShow").fadeToggle(1000);
    });

    $("#roll-1").click(function(){
        var player1 = [];
        
        if(diceNum===1){
            player1Acc.unshift(0);
            $(".playerTwo").css("background-color","green");
            $("#roll-1").attr("disabled",true);
            $("#hold-1").attr("disabled",true);
            $("#roll-2").attr("disabled",false);
            $("#hold-2").attr("disabled",false);

        }
        else{
            
            player1.push(diceNum);


        }
    

        
    });
    $("#hold-1").submit(function(){
        var player1Sum = player1.reduce();
        player1Acc.push(player1Sum);
        $(".playerTwo").css("background-color","green");
            $("#roll-1").attr("disabled",true);
            $("#hold-1").attr("disabled",true);
            $("#roll-2").attr("disabled",false);
            $("#hold-2").attr("disabled",false);

    $("#entries1").text(player1Acc.reduce());

    })

    $(".overallScore1").text(player1Acc.reduce);
})