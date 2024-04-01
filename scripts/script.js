document.getElementById("clear-input-btn").onclick = function () {
    document.getElementById("input").value = "";
}

document.getElementById("clear-output-btn").onclick = function () {
    document.getElementById("output").innerHTML = "";
}

document.getElementById("btn1").onclick = function () {
    alert("This is an alert!");
    document.getElementById("output").innerHTML = "";
}

document.getElementById("btn2").onclick = function () {
    let name = document.getElementById("input").value;
    if (name == "") {
        alert("Please Enter Your Name!");
    }
    else {
        document.getElementById("output").innerHTML = name;
    }
}

let cities = ["Faisalabad", "Lahore", "Islamabad", "Karachi", "Rawalpindi"];

for (let i = 0; i < cities.length; i++) {
    document.getElementById("original-string").innerText += " " + (i + 1) + ") " + cities[i];
}

document.getElementById("btn3").onclick = function () {
    document.getElementById("output").innerHTML = "";
    for (let i = 0; i < cities.length; i++) {
        document.getElementById("output").innerHTML += "<p>" + (i + 1) + ") " + cities[i] + "</p>";
    }
}

document.getElementById("btn4").onclick = function () {
    document.getElementById("output").innerHTML = "";
    let city = document.getElementById("input").value;
    if (city == "") {
        alert("Please Enter City Name!");
    }
    else {
        cities.push(city);
        document.getElementById("original-string").innerText = "";
        for (let i = 0; i < cities.length; i++) {
            document.getElementById("original-string").innerText += " " + (i + 1) + ") " + cities[i];
        }
        for (let i = 0; i < cities.length; i++) {
            document.getElementById("output").innerHTML += "<p>" + (i + 1) + ") " + cities[i] + "</p>";
        }
    }
}

document.getElementById("btn5").onclick = function () {
    document.getElementById("output").innerHTML = "";
    let multiplyWith = document.getElementById("input").value;
    if (multiplyWith == "") {
        alert("Please Enter Number Of Which You Want To Generate Table!");
    }
    else {
        let multiplyTimes = prompt("How Long The Table You Want?");
        for (let i = 0; i < multiplyTimes; i++) {
            document.getElementById("output").innerHTML += "<p>" + multiplyWith + " x " + (i + 1) + " = " + eval(multiplyWith * (i + 1)) + "</p>";
        }
    }
}