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

    createCard('22/11', 'terça',
    createGame('france', '16:00', 'australia'))
    +
    createCard('24/11', 'quinta',
    createGame('portugal', '13:00', 'ghana') +
    createGame('brazil', '16:00', 'serbia'))
    +
    createCard('28/11', 'segunda',
    createGame('brazil', '13:00', 'switzerland') +
    createGame('portugal', '16:00', 'uruguay'))

    