  var turn = 1;
  var victory = 0;
  var round = 1;

  function checkVictory(){
	if(
		$("#c1_1").text()!=" "&&$("#c1_1").text()===$("#c1_2").text()&&$("#c1_3").text()===$("#c1_2").text()
		||
		$("#c2_1").text()!=" "&&$("#c2_1").text()===$("#c2_2").text()&&$("#c2_3").text()===$("#c2_2").text()
		||
		$("#c3_1").text()!=" "&&$("#c3_1").text()===$("#c3_2").text()&&$("#c3_3").text()===$("#c3_2").text()
		||
		$("#c1_1").text()!=" "&&$("#c1_1").text()===$("#c2_1").text()&&$("#c2_1").text()===$("#c3_1").text()
		||
		$("#c1_2").text()!=" "&&$("#c1_2").text()===$("#c2_2").text()&&$("#c2_2").text()===$("#c3_2").text()
		||
		$("#c1_3").text()!=" "&&$("#c1_3").text()===$("#c2_3").text()&&$("#c2_3").text()===$("#c3_3").text()
		||
		$("#c1_1").text()!=" "&&$("#c1_1").text()===$("#c2_2").text()&&$("#c2_2").text()===$("#c3_3").text()
		||
		$("#c1_3").text()!=" "&&$("#c1_3").text()===$("#c2_2").text()&&$("#c2_2").text()===$("#c3_1").text()
		){
			return true;
		}
		return false;
  }

  function tieCheck(){
    var result = 1;
    $("td").each(function(){
      if($(this).find("div").text()==" "){
        result = 0;
        return 0;
      }
    });
    return result;
  }

  function updateInfos(){
	$("#round").text(round);
    $("#player").text(turn);
	if(victory){
		$("#winner").text(turn);
		$("#victorySpan").removeClass("invisible");
	}
  if( tieCheck()===1 && !victory ){
    $("#tieSpan").removeClass("invisible");
  }
  }

  function newGame(){
    turn = 1;
    victory = 0;
    round = 1;
    $("td").find("div").text(" ");
	if(
		!$("#victorySpan").hasClass("invisible")
	){
		$("#victorySpan").addClass("invisible");
	}
  if(
		!$("#tieSpan").hasClass("invisible")
	){
		$("#tieSpan").addClass("invisible");
	}
    	updateInfos();
  	}

  $("table").on("click", "td div", function(event){
    if($(event.target).text()==" "&&victory===0){
      switch(turn){
        case 1:
        $(event.target).text("X");
        break;
        case 2:
        $(event.target).text("O");
        break;
      }
      if(checkVictory()) victory = 1;
      else {
        turn = (3-turn);
        round++;
      }
      updateInfos();
    }
  });

  $("#newGame").on("click", function(){
    newGame();
  } );
