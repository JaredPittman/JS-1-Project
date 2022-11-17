"use strict";

const $ = selector => document.querySelector(selector);



document.addEventListener("DOMContentLoaded", () =>{

    function getRandomTerraria(){
        return Math.floor(Math.random() * 10);
    }
    function getRandomMinecraft(){
        return  Math.floor(Math.random() * 20) + 10;
    }
    
    console.log(getRandomMinecraft());
    console.log(getRandomTerraria());
})
