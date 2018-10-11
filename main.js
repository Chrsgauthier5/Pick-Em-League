$(document).ready(function () {




    $("#spanDate").html(new Date());

    var homeTeam = ["Giants (1-4) ", "Minnesota (2-2-1)", "Washington  (2-2)", "Miami (3-2)", "NY Jets (2-3)", "Cincinnati (4-1)", "Oakland (1-4)", "Houston (2-3)", "Cleveland (2-2-1)", "Atlanta (1-4)", "Denver (2-3)", "Tennessee (3-2)", "Dallas (2-3)", "New England (3-2)", "Green Bay (2-2-1)", "Detroit (2-3)"]

    var awayTeam = ["Philadelphia (2-3)", "Arizona (1-4)", "Carolina (3-1)", "Chicago (3-1)", "Indianapolis (1-4)", "Pittsburgh (2-2-1)", "Seattle (2-3)", "Buffalo (2-3)", "LA Chargers (3-2)", "Tampa Bay (2-2)", "LA Rams (5-0)", "Baltimore (3-2)", "Jacksonville (3-2)", "Kansas City (5-0)", "San Francisco (1-4)", "New Orleans (4-1)"];

    

    var arr2 = "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 Bye";
    var gamesList = arr2.split(" ");
    console.log(gamesList);

    var week= 6;
    var prevWinner = "Jumbo";

    $("#currentWeek").html("Current Week: " + week );
    $("#previousWeekWinner").html("Previous Week Winner: " + prevWinner );
   

    for (i = 0; i < gamesList.length; i++) {
        $("#gameList").append("<li>" + "Game: " + gamesList[i] + "</li>");
    }

    for (i = 0; i < homeTeam.length; i++) {
        $("#home").append("<li>" + homeTeam[i] + "</li>");
    }

    for (i = 0; i < awayTeam.length; i++) {
        $("#away").append("<li>" + awayTeam[i] + "</li>");
    }
    
    // for (i = 0; i < gamesNum.length; i++) {
    //     $("#points").append(gamesNum[i]+ ":" +"<input/>);
    // }

































});