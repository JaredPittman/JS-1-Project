"use strict";

const $ = selector => document.querySelector(selector);

var answerBank = {

    0 : ["What is the weakest armor in the game?",
        "Wood Armor",
        "Shadow Armor",
        "Gold Armor",
        "Copper Armor",
        'D'],

    1 : ["In what biome, do you have to be to fight the Eater of Worlds?",
        "Corruption",
        "Forest",
        "Hell",
        "Meteor",
        'A'],

    2 : ["What is the second ingredient in a Hellstone bar, aside from Hellstone ore?",
        "Iron Ore",
        "Obsidian",
        "Vile Mushroom",
        "Stone Block",
        'B'],

    3 : ["What is the name of the Terraria boss with the most HP?",
        "Eater of Worlds",
        "Skeletron", 
        "Wall of Flesh",
        "Ender Dragon",
        'C'],

    4 : ["What potion makes you immune to lava?",
        "Gills Potion",
        "Wrath Potion",
        "Iron Skin Potion",
        "Obsidian Skin Potion",
        'D'],

    5 : ["What is the strongest pickaxe in Terraria?",
        "Gold Pickaxe",
        "Nightmare Pickaxe",
        "Molten Pickaxe",
        "Silver Pickaxe",
        'C'],

    6 : ["What is the sequence of pre-hardmode bosses",
        "King Slime, Eye of Cthulhu, Eater of World",
        "Moon Lord, King Slime, Brain of Cthulhu",
        "Queen Bee, Empress of Light, Destroyer",
        "Skeletron Prime, The Twins, Plantrea",
        'A'],

    7 : ["What is the strongest spear in Terraria?",
        "Dark Lance",
        "Ghastly Glaive",
        "Daybreak",
        "Chlorophyte Partisan",
        'C'],

    8 : ["What monster drops Tattered Cloth?",
        "Tim",
        "Goblin Scout",
        "Jungle Slime",
        "Undead Miner",
        'B'],

    9 : ["How many flail-type weapons are there?",
        "4",
        "12",
        "7",
        "15",
        'D'],


///////////////////////// MINECRAFT QUESTIONS////////////////////////////////



    10 : ["What is the strongest material in the game used to craft Armor/Tools?",
        "Diamond",
        "Gold",
        "Iron",
        "Netherite",
        'D'],

    11 : ["In what biome, can you find above ground abandoned mineshafts?",
        "Badlands",
        "Giant Taiga",
        "Shattered Savannah",
        "Warm Ocean",
        'A'],

    12 : ["What is the second ingredient in a Jukebox Block, aside from wooden planks?",
        "Iron Ingot",
        "Redstone Dust",
        "Music Disc",
        "Diamond",
        'D'],

    
    13 : ["What enchantment allows players to deal more damage to undead monsters?",
        "Sharpness",
        "Smite",
        "Piercing",
        "Power",
        'B'],

    14 : ["What potion makes you jump higher?",
        "Potion of Leaping",
        "Potion of Jumping",
        "Potion of Rabbits Leg",
        "Potion of Leg Strength",
        'A'],

    15 : ["What type of pickaxe mines stone the fastest?",
        "Gold",
        "Netherite",
        "Diamond",
        "Stone",
        'A'],

    16 : ["How far will water flow on an even plot of land?",
        "5 Blocks",
        "Infinitely",
        "7 Blocks",
        "10 Blocks",
        'C'],                                                   

    17 : ["Which of the following is NOT a version of minecraft currently available to play?",
        "Minecraft PS Vita Edition",
        "Minecraft Wii Edition",
        "Minecraft Education Edition",
        "Minecraft New 3DS Edition",
        'B'],

    18 : ["What mob drops leather when killed?",
        "Sheep",
        "Pig",
        "Zombie",
        "Cow",
        'D'],

    19 : ["Which of the following is not a realm currently in Minecraft (As of 1.19)?",
        "Nether",
        "The End",
        "Aether",
        "Overworld",
        'C']
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
function randomQuesitonIdList(){
    let qList = [];

    for(let j = 0; j < 10;){
        let num =  Math.floor(Math.random() * 19) + 1;
        if(!qList.includes(num)){
            qList.push(num);
            j++;
        }
    }
    return qList;
}

function questionTextHandler(questionId){

    $("#question").textContent = answerBank[questionId][0];
            
    $("#option1").nextElementSibling.textContent = answerBank[questionId][1];
    $("#option2").nextElementSibling.textContent = answerBank[questionId][2];
    $("#option3").nextElementSibling.textContent = answerBank[questionId][3];
    $("#option4").nextElementSibling.textContent = answerBank[questionId][4];
    $("#questionIMG").src = imgBank[questionId];

}

let score = 0;
let randomList = randomQuesitonIdList();
let option;

const checkAnswer = (num) =>{
    let testNum = randomList[num];
    if($('#option1').checked == true){
    option = 'A';
    }
    else if($('#option2').checked == true){
        option = 'B';
    }
    else if($('#option3').checked == true){
        option = 'C';
    }
    else if($('#option4').checked == true){
        option = 'D';
    }
    if(option == answerBank[testNum][5]){
        score ++;
    }
    return score;
}

    

document.addEventListener("DOMContentLoaded", () =>{

        
    let i = 1;
    questionTextHandler(randomList[0]); 

    $("#submit").addEventListener ("click", ()=>{

    if($('#option1').checked == false && 
    $('#option2').checked == false && 
    $('#option3').checked == false && 
    $('#option4').checked == false){
    alert("Please select an option");
    } 
    else{
        document.getElementById("selectionAudio").play();
            if(i <= 10){         
                checkAnswer(i-1);
                    if(i < 10){
                        questionTextHandler(randomList[i]); 
                    }else{
                        document.getElementById("webpageAudio").play();   
                        $("#questionIMG").src = "Trophy_Image.png";     
                        $("h1").textContent = "Thank you for completing our quiz!";
                        $("#question").textContent = "You scored "+ score + "/10!!";
                        document.getElementById("answersForm").style.display = "none";
                        }
                    }
                    $('input[name="questionOption"]:checked').checked = false;
                    i++;
            }
        });
})





