$(function() {
    var xOrO = "X";
    var count = 0;

    $("tbody td").click(function(){
        var currentValue = $(this).text();
        if(currentValue != "?" )
        {
            $("tfoot td").text("Stop Cheating, this move is illegal");
            return;
        }

        count++;
        $("tfoot td").text("Number of moves "+ count);
      $(this).text(xOrO);
      xOrO = xOrO == "X" ? "O" : "X";
    });
    


})



