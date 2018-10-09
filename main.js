$(document).ready(function () {

    

    
    $("#spanDate").html(new Date());
    
    var homeTeam = ["Giants","Minnesota","Washington","Miami","NY Jets", "Cincinnati","Oakland","Houston","Cleveland","Atlanta","Denver","Tennessee","Dallas","New England","Green Bay"]
    
    var awayTeam = [];
    
    
    for (i=0;i<homeTeam.length;i++){
    $("#home").append("<li>" + homeTeam[i] + "</li>");

}





}    