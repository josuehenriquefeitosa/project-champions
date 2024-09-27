import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";



export const database: PlayerModel[] = [
    {
        id: 1,
        name: "Erling Haaland",
        club: "Manchester City",
        nationality: "Norwegian",
        position: "Forward",
        statistics: {
            Overall: 91,
            Pace: 88,
            Shooting: 94,
            Passing: 65,
            Dribbling: 80,
            Defending: 45,
            Physical: 87
        }
    },
    {
        id: 2,
        name: "Kevin De Bruyne",
        club: "Manchester City",
        nationality: "Belgian",
        position: "Midfielder",
        statistics: {
            Overall: 91,
            Pace: 74,
            Shooting: 86,
            Passing: 93,
            Dribbling: 87,
            Defending: 64,
            Physical: 77
        }
    },
    {
        id: 3,
        name: "Kylian Mbappé",
        club: "Paris Saint-Germain",
        nationality: "French",
        position: "Forward",
        statistics: {
            Overall: 91,
            Pace: 97,
            Shooting: 89,
            Passing: 80,
            Dribbling: 92,
            Defending: 36,
            Physical: 76
        }
    },
    {
        id: 4,
        name: "Robert Lewandowski",
        club: "Barcelona",
        nationality: "Polish",
        position: "Forward",
        statistics: {
            Overall: 91,
            Pace: 78,
            Shooting: 91,
            Passing: 79,
            Dribbling: 85,
            Defending: 44,
            Physical: 82
        }
    },
    {
        id: 5,
        name: "Luka Modrić",
        club: "Real Madrid",
        nationality: "Croatian",
        position: "Midfielder",
        statistics: {
            Overall: 88,
            Pace: 72,
            Shooting: 76,
            Passing: 89,
            Dribbling: 90,
            Defending: 72,
            Physical: 66
        }
    },
    {
        id: 6,
        name: "Virgil van Dijk",
        club: "Liverpool",
        nationality: "Dutch",
        position: "Defender",
        statistics: {
            Overall: 90,
            Pace: 81,
            Shooting: 60,
            Passing: 71,
            Dribbling: 72,
            Defending: 91,
            Physical: 86
        }
    },
    {
        id: 7,
        name: "Lionel Messi",
        club: "Paris Saint-Germain",
        nationality: "Argentinian",
        position: "Forward",
        statistics: {
            Overall: 93,
            Pace: 85,
            Shooting: 92,
            Passing: 91,
            Dribbling: 95,
            Defending: 34,
            Physical: 68
        }
    },
    {
        id: 8,
        name: "Karim Benzema",
        club: "Real Madrid",
        nationality: "French",
        position: "Forward",
        statistics: {
            Overall: 91,
            Pace: 76,
            Shooting: 88,
            Passing: 83,
            Dribbling: 87,
            Defending: 42,
            Physical: 78
        }
    },
    {
        id: 9,
        name: "Neymar Jr.",
        club: "Paris Saint-Germain",
        nationality: "Brazilian",
        position: "Forward",
        statistics: {
            Overall: 89,
            Pace: 85,
            Shooting: 83,
            Passing: 85,
            Dribbling: 93,
            Defending: 38,
            Physical: 63
        }
    },
    {
        id: 10,
        name: "Joshua Kimmich",
        club: "Bayern Munich",
        nationality: "German",
        position: "Midfielder",
        statistics: {
            Overall: 89,
            Pace: 70,
            Shooting: 74,
            Passing: 87,
            Dribbling: 84,
            Defending: 82,
            Physical: 78
        }
    },
    {
        id: 11,
        name: "Mohamed Salah",
        club: "Liverpool",
        nationality: "Egyptian",
        position: "Forward",
        statistics: {
            Overall: 90,
            Pace: 90,
            Shooting: 87,
            Passing: 81,
            Dribbling: 90,
            Defending: 45,
            Physical: 75
        }
    },
    {
        id: 12,
        name: "Harry Kane",
        club: "Tottenham Hotspur",
        nationality: "English",
        position: "Forward",
        statistics: {
            Overall: 90,
            Pace: 70,
            Shooting: 91,
            Passing: 83,
            Dribbling: 81,
            Defending: 47,
            Physical: 83
        }
    },
    {
        id: 13,
        name: "Bruno Fernandes",
        club: "Manchester United",
        nationality: "Portuguese",
        position: "Midfielder",
        statistics: {
            Overall: 88,
            Pace: 72,
            Shooting: 82,
            Passing: 89,
            Dribbling: 84,
            Defending: 67,
            Physical: 76
        }
    },
    {
        id: 14,
        name: "Jan Oblak",
        club: "Atlético Madrid",
        nationality: "Slovenian",
        position: "Goalkeeper",
        statistics: {
            Overall: 89,
            Pace: 50,
            Shooting: 20,
            Passing: 31,
            Dribbling: 42,
            Defending: 18,
            Physical: 79
        }
    },
    {
        id: 15,
        name: "Marc-André ter Stegen",
        club: "Barcelona",
        nationality: "German",
        position: "Goalkeeper",
        statistics: {
            Overall: 90,
            Pace: 50,
            Shooting: 20,
            Passing: 40,
            Dribbling: 45,
            Defending: 18,
            Physical: 80
        }
    },
    {
        id: 16,
        name: "Jude Bellingham",
        club: "Real Madrid",
        nationality: "English",
        position: "Midfielder",
        statistics: {
            Overall: 86,
            Pace: 75,
            Shooting: 77,
            Passing: 82,
            Dribbling: 85,
            Defending: 76,
            Physical: 78
        }
    },
    {
        id: 17,
        name: "Pedri",
        club: "Barcelona",
        nationality: "Spanish",
        position: "Midfielder",
        statistics: {
            Overall: 86,
            Pace: 74,
            Shooting: 70,
            Passing: 85,
            Dribbling: 88,
            Defending: 65,
            Physical: 65
        }
    },
    {
        id: 18,
        name: "Achraf Hakimi",
        club: "Paris Saint-Germain",
        nationality: "Moroccan",
        position: "Defender",
        statistics: {
            Overall: 85,
            Pace: 95,
            Shooting: 70,
            Passing: 80,
            Dribbling: 83,
            Defending: 78,
            Physical: 76
        }
    },
    {
        id: 19,
        name: "Trent Alexander-Arnold",
        club: "Liverpool",
        nationality: "English",
        position: "Defender",
        statistics: {
            Overall: 87,
            Pace: 80,
            Shooting: 66,
            Passing: 90,
            Dribbling: 80,
            Defending: 76,
            Physical: 72
        }
    },
    {
        id: 20,
        name: "João Cancelo",
        club: "Barcelona",
        nationality: "Portuguese",
        position: "Defender",
        statistics: {
            Overall: 86,
            Pace: 84,
            Shooting: 70,
            Passing: 85,
            Dribbling: 85,
            Defending: 79,
            Physical: 75
        }
    },
    {
        id: 21,
        name: "Thibaut Courtois",
        club: "Real Madrid",
        nationality: "Belgian",
        position: "Goalkeeper",
        statistics: {
            Overall: 91,
            Pace: 45,
            Shooting: 20,
            Passing: 40,
            Dribbling: 43,
            Defending: 18,
            Physical: 80
        }
    },
    {
        id: 22,
        name: "Rúben Dias",
        club: "Manchester City",
        nationality: "Portuguese",
        position: "Defender",
        statistics: {
            Overall: 88,
            Pace: 75,
            Shooting: 52,
            Passing: 70,
            Dribbling: 70,
            Defending: 89,
            Physical: 85
        }
    },
    {
        id: 23,
        name: "Alphonso Davies",
        club: "Bayern Munich",
        nationality: "Canadian",
        position: "Defender",
        statistics: {
            Overall: 84,
            Pace: 96,
            Shooting: 68,
            Passing: 78,
            Dribbling: 84,
            Defending: 78,
            Physical: 75
        }
    },
    {
        id: 24,
        name: "Vinícius Júnior",
        club: "Real Madrid",
        nationality: "Brazilian",
        position: "Forward",
        statistics: {
            Overall: 89,
            Pace: 95,
            Shooting: 79,
            Passing: 77,
            Dribbling: 92,
            Defending: 30,
            Physical: 69
        }
    },
    {
        id: 25,
        name: "Rodri",
        club: "Manchester City",
        nationality: "Spanish",
        position: "Midfielder",
        statistics: {
            Overall: 89,
            Pace: 65,
            Shooting: 72,
            Passing: 85,
            Dribbling: 80,
            Defending: 84,
            Physical: 82
        }
    }
];


export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
}

export const findPlayerById = async (
    id: number
): Promise<PlayerModel | undefined> => {
    return database.find((player) => player.id === id);
}

export const insertPlayer = async (player: PlayerModel) => {
    database.push(player)
}

export const deleteOnePlayer = async (id:number) => {
    const index = database.findIndex((p) => p.id === id)

    if(index!== -1){
        database.splice(index,1);
        return true
    }
    return false
}

export const findAndModifyPlayer = async (id:number, statistics: StatisticsModel): Promise<PlayerModel> => {

    const playerIndex = database.findIndex((player) => player.id === id)

    if(playerIndex!== -1){
        database[playerIndex].statistics = statistics
    }

    return database[playerIndex]
}