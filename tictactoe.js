
$(function () {
    var xOrO = "X";
    var count = 0;

    $("tbody td").click(function () {
        var currentValue = $(this).text();
        if (currentValue != "?") {
            $("tfoot td").text("Stop cheating, this move is illegal.");
            return;
        }

        count++;
        $("tfoot td").text("Number of moves " + count);


        $(this).text(xOrO);
        xOrO = xOrO == "X" ? "O" : "X";

        var status = {
            whoWon: "X",
            winningCombo: [0, 1, 2],
            isWinner: false
        };

        var moves = $("tbody td").text();

        $.get("tictactoe?moves=" + moves  , (data, status) => {
                console.log({data, status});
        });

        if (status.isWinner == true) {
            var tds = $("tbody td");
            var p1, p2, p3;

            p1 = status.winningCombo[0];
            p2 = status.winningCombo[1];
            p3 = status.winningCombo[2];

            $(tds[p1]).addClass("winner");
            $(tds[p2]).addClass("winner");
            $(tds[p3]).addClass("winner");

        }

    });
});
