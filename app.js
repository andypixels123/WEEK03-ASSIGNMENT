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

//shop upgrades - API
// https://cookie-upgrade-api.vercel.app/api/upgrades

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

let totalCount = 0;
let cps = 0;

// get API DATA here *******************************************************
async function getData() {
    const response = await fetch("https://cookie-upgrade-api.vercel.app/api/upgrades");
    const json = await response.json();
    let rewardsName;
    console.log("JSON Data:", json);
    cpsEl.textContent = `panics per second = ${cps}`;

    for (i = 0; i < json.length; i++) {
        let rewardsElem = document.createElement("div");
        // console.log(i);
        // TODO: CREATE 'REWARDS' HTML FROM JSON DATA
        // TODO: ADD EVENT LISTENERS  
        rewardsName = json[i].name;
        // console.log(rewardsName);
        rewardsElem.textContent = `${rewardsName}`;
        shopContainer.appendChild(rewardsElem);
        rewardsElem.addEventListener("click", () => {
            initGame(json[i].cost, json[i].id, json[i].increase);
        });
        // json sample for reference    
        // cost: 1000
        // id: 3
        // increase: 10 // ms?
        // name: "Cookie Farm"
    }

    panicBtn.addEventListener("click", () => {
        initGame(json[0].cost, null, null);
    });
}

getData();



function initGame(cost, id, increase) { // increment total count / set timer
    // let T;
    // console.log(cost);
    totalCount++;
    totalEl.innerText = `Panic Count = ${totalCount}`;
    // console.log(totalCount);
    if (totalCount >= 100) {
        // reached 100 clicks
        console.log("reached 100 clicks");
        // TODO: start auto-count timer // timer changes every 1 second
        setInterval(function () {
            totalCount += cps;
            console.log(cps);
            totalEl.innerText = `Panic Count = ${totalCount}`;// TODO: fix this
            // update the DOM to reflect the changes in the values
            // save the values in local storage
        }, 1000); // remains at 1 second, do not change
        // clearInterval(T);
    }
}

// panicBtn.addEventListener("click", initGame);
// panicBtn.addEventListener("click", () => { // anonymous function calls function with params
//      func(params);
// });