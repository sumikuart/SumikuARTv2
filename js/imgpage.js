var myData = localStorage['imgdatanumber'];



var request = new XMLHttpRequest();
request.open("GET", "../api/art.json", false);
request.send(null);
var artapi = JSON.parse(request.responseText);




var currentimgid = myData.split('_')[1] 
console.log(artapi.art[currentimgid].imgfilnavn)

document.getElementById("headlineart").innerHTML = artapi.art[currentimgid].title

var currentimgfigure = document.createElement("figure")
currentimgfigure.innerHTML = '<img src="../../assets/complete/'+artapi.art[currentimgid].imgfilnavn+'" class="frameimg">'
imgholder.appendChild(currentimgfigure);


var currenttextfigure = document.createElement("div")

currenttextfigure.innerHTML = "<p id='imgtitle'> Title: "+ artapi.art[currentimgid].title+" <span></span> Score: "+artapi.art[currentimgid].score+"  <span></span>  Made: "+artapi.art[currentimgid].updated+"<span></span> Character(s): " +artapi.art[currentimgid].character+"</p>"
currenttextfigure.innerHTML += "<p id='commenttext'>"+ artapi.art[currentimgid].comment+"</p>"
textholder.appendChild(currenttextfigure);
