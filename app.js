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

// json sample for reference    
// cost: 1000
// id: 3
// increase: 10
// name: "Cookie Farm"

//============================================================================

const panicBtn = document.getElementById("panicBtn");
const cpsEl = document.getElementById("cps");
const totalEl = document.getElementById("total");
const shopContainer = document.getElementById("shopContainer");
let totalCount = 0;
let cps = 0;

// get API DATA here *******************************************************
async function getData() { // CREATE ELEMENTS / HANDLERS
    const response = await fetch("https://cookie-upgrade-api.vercel.app/api/upgrades");
    const json = await response.json();
    // console.log("JSON Data:", json);
    cpsEl.textContent = `Panics per second = ${cps}`;

    for (i = 0; i < json.length; i++) {
        let rewardsElem = document.createElement("div");
        let inc = json[i].increase;
        let cost = json[i].cost;
        let rewardsName = json[i].name;
        rewardsElem.textContent = `${rewardsName}`;
        rewardsElem.id = `upgrade${json[i].id}`;
        // console.log(rewardsElem);
        shopContainer.appendChild(rewardsElem);
        // console.log(json[i].increase);
        rewardsElem.addEventListener("click", () => {
            totalCount = totalCount - cost;
            cps = cps + inc;
        });
    }

    panicBtn.addEventListener("click", () => {
        totalCount++;
        totalEl.innerText = `Panic Count = ${totalCount}`;
    });
}

getData();


// ***************************************************
// TODO: hide upgrade buttons until earned
// const rewards = document.querySelectorAll("#upgrade1,#upgrade2,#upgrade3,#upgrade4,#upgrade5,#upgrade6,#upgrade7,#upgrade8,#upgrade9,#upgrade10");
// console.log(rewards);

// rewards.forEach(myFunction);
// function myFunction() {
//     style.display="none";
// }
// ***************************************************

let T = setInterval(function () {
    totalCount += cps;
    // console.log(totalCount);
    totalEl.innerText = `Panic Count = ${totalCount}`;
    cpsEl.textContent = `Panics per second = ${cps}`;

    // switch (cps) {
    //     case 100: console.log("reached 100");// document.getElementById("upgrade1").style.display = "block"
    //         break;
    //     case 500: document.getElementById("upgrade2").style.display = "block"
    //         break;
    //     case 1000: document.getElementById("upgrade3").style.display = "block"
    //         break;
    //     case 2000: document.getElementById("upgrade4").style.display = "block"
    //         break;
    //     case 5000: document.getElementById("upgrade5").style.display = "block"
    //         break;
    //     case 10000: document.getElementById("upgrade6").style.display = "block"
    //         break;
    //     case 20000: document.getElementById("upgrade7").style.display = "block"
    //         break;
    //     case 50000: document.getElementById("upgrade8").style.display = "block"
    //         break;
    //     case 100000: document.getElementById("upgrade9").style.display = "block"
    //         break;
    //     case 200000: document.getElementById("upgrade10").style.display = "block";
    // }

}, 1000);

// clearInterval(T);