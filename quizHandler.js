// "use strict";

const $ = selector => document.querySelector(selector);
var questionArr = [];

var questionBank = [

    "What is the weakest armor in the game?",
    
    "In what biome, do you have to be to fight the Eater of Worlds?",
    
    "What is the second ingredient in a Hellstone bar, aside from Hellstone ore?",
    
    "What is the name of the boss with the most HP?",
    
    "What potion makes you immune to lava?",
    
    "What is the strongest pickaxe in Terraria?",
    
    "What is the sequence of pre-hardmode bosses",
    
    "What is the strongest spear in Terraria?",
    
    "What monster drops Tattered Cloth?",
    
    "How many flail-type weapons are there?",
    
    "What is the strongest material in the game used to craft Armor/Tools?",
    
    "In what biome, can you find above ground abandoned mineshafts?",
    
    "What is the second ingredient in a Jukebox Block, aside from wooden planks?",
    
    "What is the name of enchantment that boosts damage on undead monsters?",
    
    "What potion makes you jump higher?",
    
    "What type of pickaxe mines stone the fastest?",
    
    "How far will water flow on an even plot of land?",
    
    "Which of the following is NOT a version of minecraft currently available to play?",
    
    "What mob drops leather when killed?",
    
    "Which of the following is not a realm currently in Minecraft (As of 1.19)?"
    
]
var answerBank = {

    0 : ["Wood Armor",
            "Shadow Armor",
             "Gold Armor",
             "Copper Armor"],

    1 : ["Corruption",
            "Forest",
            "Hell",
            "Meteor"],

    2 : ["Iron Ore",
            "Obsidian",
            "Vile Mushroom",
            "Stone Block"],

    3 : ["Eater of Worlds",
            "Skeletron", 
            "Wall of Flesh",
            "Ender Dragon"],

    4 : ["Gills Potion",
            "Wrath Potion",
            "Iron Skin Potion",
            "Obsidian Skin Potion"],

    5 : ["Gold Pickaxe",
            "Nightmare Pickaxe",
            "Molten Pickaxe",
            "Silver Pickaxe"],

    6 : ["King Slime, Eye of Cthulhu, Eater of World",
            "Moon Lord, King Slime, Brain of Cthulhu",
            "Queen Bee, Empress of Light, Destroyer",
            "Skeletron Prime, The Twins, Plantrea"],

    7 : ["Dark Lance",
            "Ghastly Glaive",
            "Daybreak",
            "Chlorophyte Partisan"],

    8 : ["Tim",
            "Goblin Scout",
            "Jungle Slime",
            "Undead Miner"],

    9 : ["4",
            "12",
            "7",
            "15"],


///////////////////////// MINECRAFT QUESTIONS////////////////////////////////



    10 : ["Diamond",
            "Gold",
            "Iron",
            "Netherite"],

    11 : ["Badlands",
            "Giant Taiga",
            "Shattered Savannah",
            "Warm Ocean"],

    12 : ["Iron Ingot",
            "Redstone Dust",
            "Music Disc",
            "Diamond"],

    
    13 : ["Sharpness",
            "Smite",
            "Piercing",
            "Power"],

    14 : ["Potion of Leaping",
            "Potion of Jumping",
            "Potion of Rabbits Leg",
            "Potion of Leg Strength"],

    15 : ["Gold",
            "Netherite",
            "Diamond",
            "Stone"],

    16 : ["5 Blocks",
            "Infinitely",
            "7 Blocks",
            "10 Blocks"],

    17 : ["Minecraft PS Vita Edition",
            "Minecraft Wii Edition",
            "Minecraft Education Edition",
            "Minecraft New 3DS Edition"],

    18 : ["Sheep",
            "Pig",
            "Zombie",
            "Cow"],

    19 : ["Nether",
            "The End",
            "Aether",
            "Overworld"]
}
var imgBank = [

        "images/armor1.png",
        "images/forest2.png",
        "images/hellstone3.png",
        "images/enderDragon4.gif",
        "images/alchemyTable5.gif",
        "images/reaverShark6.png",
        "images/destroyer7.png",
        "images/darkLance8",
        "images/tim9.png",
        "images/dripplerCrippler10.png",
        "images/Q1_Ores.png",
        "images/Q2_Mineshaft.png",
        "images/Q3_Jukebox.png",
        "images/Q4_EnchantmentBook.png",
        "images/Q5_JumpPotion.png",
        "images/Q6_Pickaxe.png",
        "images/Q7_Water.png",
        "images/Q8_MinecraftVersion.png",
        "images/Q9_Leather.png",
        "images/Q10_Realms.png"
]

function getRandomTerraria(){
    return Math.floor(Math.random() * 10);
}
function getRandomMinecraft(){
    return  Math.floor(Math.random() * 10) + 10;
}

const submitClickHandler =  () => {
//     console.log(getRandomMinecraft());
//     let randomQuestion = getRandomMinecraft();
        if($('#option1').checked == false && $('#option2').checked == false && $('#option3').checked == false && $('#option4').checked == false){
        alert("Please select an option");
        }else {
                var randomQuestion = null
                let minecraftOrTerraria = Math.floor(Math.random() * 2);
            
                if(minecraftOrTerraria == 0){
                    randomQuestion = getRandomTerraria();
                } else{
                    randomQuestion = getRandomMinecraft();
                }
            
                $("#question").textContent = questionBank[randomQuestion];
            
                $("#option1").nextElementSibling.textContent = answerBank[randomQuestion][0];
                $("#option2").nextElementSibling.textContent = answerBank[randomQuestion][1];
                $("#option3").nextElementSibling.textContent = answerBank[randomQuestion][2];
                $("#option4").nextElementSibling.textContent = answerBank[randomQuestion][3];
            //     $('input[name="questionOption"]:checked').checked = false;
            
                $("#questionIMG").src = imgBank[randomQuestion];
            
                $('input[name="questionOption"]:checked').checked = false;
        }


}


document.addEventListener("DOMContentLoaded", () =>{

    $("#submit").addEventListener("click", submitClickHandler);

})





