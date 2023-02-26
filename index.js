let incrementBtn = document.querySelector("#increment-btn");
let countEl = document.querySelector("#count-el");
let saveEl = document.querySelector("#save-btn");
let storeEl = document.querySelector("#store-el");
let enteriesEl = document.querySelector("#enteries-el")
let count = 0;

    function incrementFunct(){
        count += 1;
        countEl.textContent = count;
    }
    function saveFunct(){

        let countStr = count + "-";
        enteriesEl.textContent += countStr;
        
        countEl.textContent = 0;
        count = 0;

        
    }