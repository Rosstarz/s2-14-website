var dummyData = [
    { rank: 1, player: "Ross", score: 200, time: 190 },
    { rank: 2, player: "Leo", score: 180, time: 200 },
    { rank: 3, player: "Lukas", score: 150, time: 500 },
    { rank: 4, player: "Lilit", score: 100, time: 700 },
];


//To fill the score board with the dummy data we created

function populateScoreData() {
    var tbody = document.querySelector("#scoreboard tbody");

    // Clear any existing rows
    tbody.innerHTML = "";
    var scoreboard = document.getElementById("scoreboard");

    dummyData.forEach(function (score) {
        // Create a new table row
        var row = document.createElement("tr");

        // Create table cells for rank, player, score and time
        var rankCell = document.createElement("td");
        rankCell.textContent = score.rank;
        var playerCell = document.createElement("td");
        playerCell.textContent = score.player;
        var scoreCell = document.createElement("td");
        scoreCell.textContent = score.score;
        var timeCell = document.createElement("td");
        timeCell.textContent = score.time;

        // Append the cells to the row
        row.appendChild(rankCell);
        row.appendChild(playerCell);
        row.appendChild(scoreCell);
        row.appendChild(timeCell);

        // Append the row to the table body
        scoreboard.querySelector("tbody").appendChild(row);
    });
}

    populateScoreData();

