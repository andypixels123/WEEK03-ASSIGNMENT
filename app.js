console.log("is it working?");

//game logic
//when the user clicks on the cookie, the total count of cookies goes up by 1
//when the user clicks on the "buy" button in an upgrade in the shop, the total count of cookies goes down by the cost of the upgrade, and the cps value goes up

//we will need functions to contain the game logic
//we will get the shop upgrades data from the API: https://cookie-upgrade-api.vercel.app/api/upgrades
//to create the logic for the shop upgrades:
//- OPTION 1: you could have a function to handle each upgrade
//- OPTION 2: you could have a reusable function that works for ALL upgrades

//Tip on local storage:
//- make sure the local storage values are updated after the user buys an upgrade AND when the user clicks on the cookie

//===========================================================================

// let stats = {
//   cookieCount: 0,
//   cps: 0,
// };

//if there is data already in local storage, update stats with this data, so the user picks it up where they left off

//============================================================================

//shop upgrades

// https://cookie-upgrade-api.vercel.app/api/upgrades

//fetch the upgrades from the API

//create multiple DOM elements to contain the upgrades (loop)

//TODO: create DOM elements for the shop upgrades
//- create element
//- assign the value to its property (textContent)
//- append it to the DOM

// after you complete this task, you should see the upgrades in your shop-container!

//TODO: create function(s) to handle the purchase action
//the user needs a button to buy the item
//when the user clicks the button:
//subtract cost of upgrade from totalCount
//add increase value to cps
//save new values in local storage

//============================================================================

const panicBtn = document.getElementById("panicBtn");
const cpsEl = document.getElementById("cps");
const totalEl = document.getElementById("total");
const shopContainer = document.getElementById("shopContainer");
const rewardsElem = document.createElement("div");
let totalCount = 0;
let cps = 0;

// get API DATA here *******************************************************
async function getData() {
    const response = await fetch("https://cookie-upgrade-api.vercel.app/api/upgrades");
    const json = await response.json();
    let rewardsName;
    // console.log("JSON Data:", json);

    panicBtn.addEventListener("click", () => {
        initGame(json[0].cost,null,null);
    });

    for(i = 0; i < json.length; i++) {
        // console.log(i);
        // TODO: CREATE 'REWARDS' HTML FROM JSON DATA
        // TODO: ADD EVENT LISTENERS
        // use json data as params for initGame ?? pass via event listeners ??
        // element.addEventListener("click", () => {
            // initGame(json[0].cost,id,increase);
        // });

        // rewardsName = json[i].name;
        // rewardsElem.textContent = json[i].increase;
        // shopContainer.appendChild();
        // shopContainer.innerHTML = ;

// json sample for reference    
// cost: 1000
// id: 3
// increase: 10 // ms?
// name: "Cookie Farm"


    }
}

getData();
 
function initGame(cost, id, increase) { // increment total count / set timer
    console.log(cost);
    totalCount++;
    totalEl.innerText = `Panic Count = ${totalCount}`;
    // console.log(totalCount);
    if(totalCount === cost) { // pass param here from rewards event handlers??
        console.log("reached cost");
    // TODO: start auto-count timer // update auto-count timer milliseconds
    // TODO: might need to put timer in different function 
        // let T = setInterval("", ms);
        // clearInterval(T);
    }
}



// panicBtn.addEventListener("click", initGame);
// panicBtn.addEventListener("click", () => { // anonymous function calls function with params
//      func(params);
// });


//cps.innerText = `cookies per second (cps): ${cps}`;

// increment count on each click
// save count to local storage

// setInterval(function () {
// totalCookieCount += cps; // totalCookieCount = totalCookieCount + cps
// update the DOM to reflect the changes in the values
// save the values in local storage
// }, 1000);

// }