// console.log("is it working?");

//game logic
//when the user clicks on the cookie, the total count of cookies goes up by 1
//when the user clicks on the "buy" button in an upgrade in the shop, the total count of cookies goes down by the cost of the upgrade, and the cps value goes up

//we will need functions to contain the game logic
//we will get the shop upgrades data from the API: https://cookie-upgrade-api.vercel.app/api/upgrades
//to create the logic for the shop upgrades:
//- OPTION 1: you could have a function to handle each upgrade
//- OPTION 2: you could have a reusable function that works for ALL upgrades

//Tip on local storage:
//make sure the local storage values are updated after the user buys an upgrade AND when the user clicks on the cookie

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
const play = document.getElementById("play");
const save = document.getElementById("save");
let stats = {}; // init stats obj
let totalCount, cps;
const str = localStorage.getItem("stats") ? localStorage.getItem("stats") : null;
// console.log(str); // check local storage

if (str) { // not null
    try {
        const obj = JSON.parse(str);
        totalCount = obj.totaL;
        cps = obj.cPs;
    } catch (err) {
        console.error(err);
    }
} else {
    totalCount = 0;
    cps = 0;
}

// 'levels of panic' text created by Google AI
const anxLevel = {
    0: "Auto - Calm",
    1: "Mild Concern",
    2: "On Edge",
    3: "Anxious",
    4: "Significant Stress",
    5: "Intense Worry",
    6: "Approaching Panic",
    7: "Panic Attack",
    8: "Severe Distress",
    9: "Complete Meltdown"
}

function storeValues(K, val) { // save to local storage // key / value pairs
    let V = JSON.stringify(val);
    localStorage.setItem(K, V);
}

// Get API DATA here
// Application Programming Interface
async function getData() { // CREATE ELEMENTS / HANDLERS
    const response = await fetch("https://cookie-upgrade-api.vercel.app/api/upgrades");
    const json = await response.json();
    // console.log("JSON Data:", json); // check data
    cpsEl.innerText = `${cps} pps`;

    for (i = 0; i < json.length; i++) {
        let rewardsElem = document.createElement("button");
        // let rewardsElemP = document.createElement("p");
        let inc = json[i].increase;
        let cost = json[i].cost;
        // let rewardsName = json[i].name; // not used
        let aLevel = anxLevel[i];
        rewardsElem.id = `upgrade${json[i].id}`;
        rewardsElem.disabled = true;
        rewardsElem.title = `buy ${inc} pps for ${cost} panics`;
        rewardsElem.innerHTML = `<span>${aLevel}</span><br>Price - ${cost} Panics<br>Reward - ${inc} pps`;
        shopContainer.appendChild(rewardsElem);

        rewardsElem.addEventListener("click", () => { // event handler
            totalCount = totalCount - cost;
            cps = cps + inc;
            stats.totaL = totalCount;
            stats.cPs = cps;
            storeValues("stats", stats);
        });
    }

    panicBtn.addEventListener("click", () => { // event handler
        totalCount++;
        // totalEl.innerText = `${totalCount}`;
        let ttl = totalCount.toLocaleString();
        totalEl.innerText = ttl;
        stats.totaL = totalCount;
        stats.cPs = cps;
        storeValues("stats", stats);
    });
}

getData(); // get api data, create html


let flag = 0;
let T = setInterval(function () { // start auto count
    totalCount += cps;
    // totalEl.innerText = `${totalCount}`;
    let ttl = totalCount.toLocaleString();
    totalEl.innerText = ttl;
    cpsEl.innerText = `${cps} pps`;
    stats.totaL = totalCount;
    stats.cPs = cps;
    storeValues("stats", stats);

    switch (true) {
        case totalCount > 99 && flag === 0:
            const up1 = document.getElementById("upgrade1");
            up1.style.backgroundColor = "#66ffcc";
            up1.style.opacity = 1;
            up1.disabled = false;
            flag = 100;
            break;
        case totalCount > 499 && flag === 100:
            const up2 = document.getElementById("upgrade2");
            up2.style.backgroundColor = "#7df0b5";
            up2.style.opacity = 1;
            up2.disabled = false;
            flag = 500;
            break;
        case totalCount > 999 && flag === 500:
            const up3 = document.getElementById("upgrade3");
            up3.style.backgroundColor = "#94e09e";
            up3.style.opacity = 1;
            up3.disabled = false;
            flag = 1000;
            break;
        case totalCount > 1999 && flag === 1000:
            const up4 = document.getElementById("upgrade4");
            up4.style.backgroundColor = "#abd187";
            up4.style.opacity = 1;
            up4.disabled = false;
            flag = 2000;
            break;
        case totalCount > 4999 && flag === 2000:
            const up5 = document.getElementById("upgrade5");
            up5.style.backgroundColor = "#c9bd69";
            up5.style.opacity = 1;
            up5.disabled = false;
            flag = 5000;
            break;
        case totalCount > 9999 && flag === 5000:
            const up6 = document.getElementById("upgrade6");
            up6.style.backgroundColor = "#d9b259";
            up6.style.opacity = 1;
            up6.disabled = false;
            flag = 10000;
            break;
        case totalCount > 19999 && flag === 10000:
            const up7 = document.getElementById("upgrade7");
            up7.style.backgroundColor = "#e8a84a";
            up7.style.opacity = 1;
            up7.disabled = false;
            flag = 20000;
            break;
        case totalCount > 49999 && flag === 20000:
            const up8 = document.getElementById("upgrade8");
            up8.style.backgroundColor = "#f79e3b";
            up8.style.opacity = 1;
            up8.disabled = false;
            flag = 50000;
            break;
        case totalCount > 99999 && flag === 50000:
            const up9 = document.getElementById("upgrade9");
            up9.style.backgroundColor = "#f05814";
            up9.style.opacity = 1;
            up9.disabled = false;
            flag = 100000;
            break;
        case totalCount > 199999 && flag === 100000:
            const up10 = document.getElementById("upgrade10");
            up10.style.backgroundColor = "orangered";
            up10.style.opacity = 1;
            up10.disabled = false;
        // flag = 200000; // max // not required
    }
}, 1000);

save.addEventListener("click", () => { // stop auto count // save 'stats' to local storage
    clearInterval(T);
    // not req'd, stats are saved every second 
    // stats.totaL = totalCount;
    // stats.cPs = cps;
    // storeValues("stats", stats);
}
);

play.addEventListener("click", () => {
    let info = document.createElement("section");
    let closeBtn = document.createElement("div");
    info.id = "popup";
    info.innerHTML = "<h2>Game Play</h2><div class='scrollBox'><p>The object of this game is to accumulate clicks (aka panics). This kind of game is known as a 'clicker' or 'incremental' game and it uses Javascript logic to calculate values. Initially, click the panic button to start the game. When 100 clicks have accumulated, the shop will be opened for business. Further stock will be added when enough 'panics' have accumulated to pay for each item in the shop. When you purchase items from the shop, you are buying a higher rate of clicks (panics) per second. The cost of each purchase is deducted from the 'Total Stress' (total panics count) when making a purchase. Click an item in the shop to make your first purchase and the game will enter auto mode. Your stats will be saved every second so you can stop the game and pickup where you started next time you visit. The game continues infinitely until stopped by the user via the save / stop button or by closing the page.</p><p>Happy Stressing!</p></div>";
    closeBtn.id = "close";
    closeBtn.title = "click to close";
    closeBtn.textContent = "✕";
    document.body.appendChild(info);
    info.appendChild(closeBtn);
    closeBtn.addEventListener("click", () => {info.remove();});
});