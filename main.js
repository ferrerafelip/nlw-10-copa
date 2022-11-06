function createGame(team1, hour, team2){
   return `
   <li><img src="./assets/team_flags/${team1}_logo.svg" alt="Brazil">
        <strong>${hour}</strong>
        <img src="./assets/team_flags/${team2}_logo.svg" alt="Cameroon">
   </li>  
    `
}

delay = 0.1;
function createCard(date, day, games){
    delay = delay + 0.2;
    return `
    <div class="card" style = "animation-delay: ${delay}s">
        <h2>${date}
            <span>${day}</span>
        </h2>

        <ul>
            ${games}
        </ul>
    </div>
`
}


document.querySelector('#cards').innerHTML = 

    createCard('21/11', 'segunda',
    createGame('brazil', '08:00', 'cameroon') +
    createGame('hungary', '13:00', 'argentina') +
    createGame('colombia', '20:00', 'japan') ) +

    createCard('24/11', 'quinta',
    createGame('british_columbia', '08:00', 'cameroon') +
    createGame('india', '13:00', 'armenia') +
    createGame('comoros', '20:00', 'jordan'))

    