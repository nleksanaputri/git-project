const ultraman = {
    isDead: false,
    address: {
        planet: {
            name: "namex",
            galaxy: "andromeda",
        },
    }
    weapons: ["sword", "shiedl"],
    attack: () => {
        console.log("sword attack!");
    },
    beam: (number) => {
        console.log("spacium ray beam " + number + "%");
    }
}