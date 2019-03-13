// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/5PNlDRM/subway-train-moving-in-the-dark-tunnel-and-arriving-at-the-station-paris-france_spvwnedi__F0000.png",
    levels: {

        start: {
            message: "You come across a subway station",
            choices: [
                {
                    text: "Enter the subway",
                    nextLevel: "Subway",
                },

                {
                    text: "Keep on moving",
                    nextLevel: "field",
                },
            ]
        },

        Subway: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You have entered the subway and a ghost train arrives",
            choices: [
                {
                    text: "Board Train",
                    nextLevel: "Wakanda",
                },{
                    text: "Do not Board Train",
                    nextLevel:"Myers"
                }
            ]
        },
        Myers: {
            message:"Michael Myers Kills You",
            choices: [
                {
                    text:"Start Over",
                    nextLevel:"start",
                }
                ]
        },
        Wakanda:{
            message:"You are now in Wakanda",
            choices: [
                {
                    text:"Bring Killmonger back",
                    nextLevel:"Killmonger",
                },
                {
                    text:"Kill T'challa",
                    nextLevel:"Tchalla"
                }
            ]
        },
        Killmonger:{
            message:"Wakanda has been destroyed",
            choices: [
                {
                    text:"Start Over",
                    nextLevel:"start",
                },
            ]
        },
        Tchalla:{
            message:"Now you're dead I don't know why you tried that",
            choices: [
                {
                    text:"Start Over",
                    nextLevel:"start",
                },
            ]
        },
        field: {
            message: "Such a scaredy cat",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

    }
};
