console.log("this is a cry for help");

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let answer1 = document.getElementById("q1").value.toLowerCase();
  let answer2 = document.getElementById("q2").value.toLowerCase();
  let answer3 = document.getElementById("q3").value.toLowerCase();
  let answer4 = document.getElementById("q4").value.toLowerCase();

  let correctanswers = 0;

  if (answer1 === "kim dokja") {
    correctanswers++;
    document.getElementById("q1").style.color = "#00FF00";
  } else {
    document.getElementById("q1").style.color = "#FF0000";
  }

  if (answer2 === "yoo joonghyuk") {
    correctanswers++;
    document.getElementById("q2").style.color = "#00FF00";
  } else {
    document.getElementById("q2").style.color = "#FF0000";
  }

  if (answer3 === "han sooyoung") {
    correctanswers++;
    document.getElementById("q3").style.color = "#00FF00";
  } else {
    document.getElementById("q3").style.color = "#FF0000";
  }

  if (answer4 === "kim dokja") {
    correctanswers++;
    document.getElementById("q4").style.color = "#00FF00";
  } else if (answer4 === "yoo joonghyuk") {
    correctanswers++;
    document.getElementById("q4").style.color = "#00FF00";
  } else if (answer4 === "han sooyoung") {
    correctanswers++;
    document.getElementById("q4").style.color = "#00FF00";
  } else {
    document.getElementById("q4").style.color = "#FF0000";
  }

  document.getElementById("number").innerHTML = correctanswers;
  document.getElementById("percentage").innerHTML = (correctanswers / 4) * 100;

  if (correctanswers > 2) {
    document.getElementById("comments").innerHTML = "Nice job!";
  } else {
    document.getElementById("comments").innerHTML = "Close!";
  }
}
