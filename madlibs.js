function changeToUpperCase(founder) {
    return founder.toUpperCase();
  }

const noun = prompt("Enter a noun:");
const noun2 = prompt("Enter a second noun:");
const place = prompt("Enter a place:");
const verb = prompt("Enter a verb:");
const pNoun = prompt("Enter a plural noun:");
const adjective = prompt("Enter an adjective:");
const noun3 = prompt("Enter another noun:");

document.body.style.background = "darkblue";
document.body.style.color = "white";
document.body.style.fontFamily = "Courier";
document.body.style.textAlign = "center";

document.write("<br><br>");

document.write("<b><u>WARNING</u></b>: This is Captain " + changeToUpperCase(noun) + " of the Intergalactic Space Agency speaking. <br><br>");

document.write("It has come to our attention that a gigantic " + changeToUpperCase(noun2) + " is hurtling towards " + changeToUpperCase(place) + ". <br><br>");

document.write("There is no need to " + changeToUpperCase(verb) + ", however you may want to consider immediate evacuation. <br><br>");

document.write("Failure to do so may result in many " + changeToUpperCase(pNoun) + ", which is a very " + changeToUpperCase(adjective) + " situation. <br><br><br>");

document.write("Good luck, and may the " + changeToUpperCase(noun3) + " be with you all. <br><br>");

document.write("This is Captain " + changeToUpperCase(noun) + " signing off. <br><br><br>");

document.write("<a href = \"javascript:window.location.reload(false)\"> <br><br><br> Play Again? </a>");