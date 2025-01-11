let homeBar = document.querySelector(".homeBar");
let isHover = document.querySelector(".is-hover");
let phone = document.querySelector(".phone");
let dynamicIsland = document.querySelector(".dynamic-island");
let statusElm = document.querySelector(".status")
let wrapped = document.querySelector(".wrapped");
let screen = document.querySelector(".screen");
let backgroundPhone = document.querySelector(".background-phone");


let musicApp = document.querySelector(".music-app");
let musicAppBtn = document.querySelector("#musicApp");
let playSongBtn = document.querySelector(".play-song");
let isPlaySong = false;


// let hideWrapped = function () {
//     wrapped.style.visibility = "visible";
//     wrapped.style.display = "none";
// }

let hideScreen = function () {
    // screen.style.visibility = "hidden";
    screen.style.display = "none";
}

let isOn = function () {
    homeBar.style.backgroundColor = "#000000";
    backgroundPhone.style.display = "flex";
    wrapped.style.display = "flex";
    wrapped.style.visibility = "visible";
    
};

let isOff = function () {
    wrapped.style.display = "none";
    backgroundPhone.style.display = "none";
    phone.style.backgroundColor = "#000000";
    homeBar.style.backgroundColor = "#000000";
};


let hideMusicApp = function() {
    musicApp.style.display = 'none';
    musicApp.style.visibility = 'hidden';
    
};

// <-------------------Music-app-------------------->


let loadSong = function () {
    let currentSong = findCurrentSong(); 
    return currentSong
}

let findCurrentSong = function () {
    let currentS = document.querySelector(".current-song");
    return currentS;
}

let playSong = function(data) {
    let promise = new Promise((resolve, reject) => {
        resolve(data);
    })
    
    promise
    
.then((data1) => {
    statusElm.innerHTML = `<img src="./assets/Status icon/music-svgrepo-com.svg" alt="" class="status-img">`
    playSongBtn.innerHTML = `<img src="./assets/pause-outline.svg" alt="">`
    return data1;
})

.then((song)=> {
    song.play();
})

.catch((err) => console.log('LOI!'))

};

let pauseSong = function(data) {
    let promise = new Promise((resolve, reject) => {
        statusElm.innerHTML = ""
        playSongBtn.innerHTML = `<img src="./assets/play-outline.svg" alt="">`
        data.pause();
        resolve(data);
    })
    
    promise
    
.then((song)=> {
        
})

.catch((err) => console.log('LOI!'))

};


playSongBtn.addEventListener('click',(e) => {
    isPlaySong = !isPlaySong;
    songLoaded = loadSong();
    if(isPlaySong) playSong(songLoaded);
    else pauseSong(songLoaded);
})


let runMusicApp = function () {
    musicApp.style.display = "block";
}

// <-------------------Dynamic-island-------------------->


let dynamicIslandOn = function () {
    dynamicIsland.style.width =  "60%";
    dynamicIsland.style.height = "14%";
    dynamicIsland.style.borderRadius = "20px";
}

let dynamicIslandOff = function () {
    dynamicIsland.style.width =  "30%";
    dynamicIsland.style.height = "4%";
    dynamicIsland.style.borderRadius = "20px";
}

// <----------------------Home-bar----------------------->

let homeBarActive = function () {
    homeBar.style.transform = "translateY(-4px)";
}

let homeBarDisable = function () {
    homeBar.style.transform = "translateY(0)";
}

musicAppBtn.addEventListener('click',() =>{
    runMusicApp();
})


homeBar.addEventListener('mouseover',() => {
    isOn();
    homeBarActive();
    hideMusicApp();
    backgroundPhone.style = "visibility: visible;"
    setTimeout(()=> {
        homeBarDisable()
    },500)
    
})

dynamicIsland.addEventListener("mouseover",() => {
    dynamicIslandOn();
    setId3 = setTimeout(() => {
        dynamicIslandOff();
    },5000);
})



// screen.addEventListener('click', (e) => {

//     if(e.isTrusted) {
//         isOn()
//     }

//     else {
//         var setId2 = setTimeout(()=> {
//             isOff();
//         },10000)

//     }
// })






