function gameObject() {
    const gameStats = {
        home: {
            teamName: "Brooklyn Nets ",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    "number": 0, "shoe": 16, "points": 22,
                    "rebounds": 12, "assists": 12, "steals": 3, "blocks": 1,
                    "slamDunks": 1
                },
                "Reggie Evans": {
                    "number": 30, "shoe": 14, "points": 12,
                    "rebounds": 12, "assists": 12, "steals": 12, "blocks": 12,
                    "slamDunks": 7
                },
                "Brook Lopez": {
                    "number": 11, "shoe": 17, "points": 17,
                    "rebounds": 19, "assists": 10, "steals": 3, "blocks": 1,
                    "slamDunks": 15
                },
                "Mason Plumlee": {
                    "number": 1, "shoe": 19, "points": 26,
                    "rebounds": 12, "assists": 6, "steals": 3, "blocks": 8,
                    "slamDunks": 5
                },
                "Jason Terry": {
                    "number": 31, "shoe": 15, "points": 19,
                    "rebounds": 2, "assists": 2, "steals": 4, "blocks": 11,
                    "slamDunks": 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    "number": 4, "shoe": 18, "points": 10,
                    "rebounds": 1, "assists": 1, "steals": 2, "blocks": 7,
                    "slamDunks": 2
                },
                "Bismak Biyombo": {
                    "number": 0, "shoe": 16, "points": 12,
                    "rebounds": 4, "assists": 7, "steals": 7, "blocks": 15,
                    "slamDunks": 10
                },
                "DeSagna Diop": {
                    "number": 2, "shoe": 14, "points": 24,
                    "rebounds": 12, "assists": 12, "steals": 4, "blocks": 5,
                    "slamDunks": 5
                },
                "Ben Gordon": {
                    "number": 8, "shoe": 15, "points": 33,
                    "rebounds": 3, "assists": 2, "steals": 1, "blocks": 1,
                    "slamDunks": 0
                },
                "Brendan Haywood": {
                    "number": 33, "shoe": 15, "points": 6,
                    "rebounds": 12, "assists": 12, "steals": 22, "blocks": 5,
                    "slamDunks": 12
                }
            }
        }
    }
    return gameStats;
}
function locatePlayer(playerName) {
    
    /* O(1) refactor */
    // const gameData = gameObject()
    // return gameData.home.players[playerName] ? 
    //     gameData.home.players[playerName] : 
    //     gameData.away.players[playerName]
    
    for (let key in gameData) {
        const theTeam = gameData[key].players
        for (let player in theTeam) {
            if (playerName === player) {
                return theTeam[player]
            }
        }
    }
}

const numPointsScored = (playerName) => {
    const selectedPlayer = locatePlayer(playerName)
    if (selectedPlayer) {
        return found.points
    } 
    return 'player not found.'
}

function shoeSize(playerName) {
    const selectedPlayer = locatePlayer(playerName)
    if (selectedPlayer) {
        return found.shoe
    } 
    return 'player not found.'
}

function teamColors(nameOfTeam) {
    const gameData = gameObject()
    for (let key in gameData) {
       if (gameData[key].teamName === nameOfTeam) {
           return gameData[key].colors
       }
    }
}

function teamNames() {
    const gameData = gameObject()
    return Object.keys(gameData).map(team => {
        return gameData[team].teamName
    })
}

function playerNumbers(nameOfTeam) {
    const gameData = gameObject()

   
    for (let key in gameData) {  
        const theTeam = gameData[key]
        if (theTeam.teamName === nameOfTeam) {
            return Object.keys(theTeam.players).map(player => {
                const playerObject = theTeam.players[player]
                return playerObject.number
            })
        }
    }
}

function playerStats(nameOfPlayer) {
    return locatePlayer(nameOfPlayer)
}


function bigShoeRebounds() {
    const gameData = gameObject()

    const memory = {shoesize: 0}

   
    for (let key in gameData) {
        const theTeam = gameData[key]

        const thePlayers = theTeam.players
        for (let playerName in thePlayers) {
            const player = thePlayers[playerName]

            if (player.shoe > memory.shoesize) {
                memory.shoesize = player.shoe
                memory.rebounds = player.rebounds
            }
        }
    }
    return memory.rebounds
}