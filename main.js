document.getElementById("button1").onclick = function() {
    let numDice = document.getElementById("diceNum").value;
    let container = document.getElementById("dieContainer");
    let  result = [];
    let sum = 0;
  
    container.innerHTML = "";
  
    for (let i = 0; i < numDice; i++) {
      let diceRoll = Math.floor(Math.random() * 6) + 1;
        result.push(diceRoll);
      container.innerHTML += '<li class="dice">' + diceRoll + '</li>';
      document.getElementById("dieContainer").style.display = "none";
    };

    sum = result.reduce(function(a, b) {
        return a + b;
    })
    totaldice.innerHTML = document.getElementById("totaldice").innerHTML + sum;
    
    console.log(sum);
  };

  document.getElementById("show").onclick = function() {
    let x = document.getElementById("dieContainer");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


