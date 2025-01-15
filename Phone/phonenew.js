let phone = document.querySelector(".phone");
let screen = document.querySelector(".screen");
let backgroundPhone = document.querySelector(".background-phone");
let timeTodayElm = screen.querySelector(".time-today");
let powerBtn = document.querySelector(".power-button");
let muteBtn = document.querySelector(".mute-button");
let increaseVolumeBtn = document.querySelector(".increase-sound-button");
let decreaseVolumeBtn = document.querySelector(".decrease-sound-button");
let volumeBarElm = phone.querySelector(".volume-bar");
let volumeProgressElm = phone.querySelector(".volume-progress");
let dynamicIsland = document.querySelector(".dynamic-island");
let isDynamicIslandOn = false;
let statusElm = document.querySelector(".status");
let statusMicElm = document.querySelector(".status-mic");
let statusMuteElm = document.querySelector(".status-mute");
let wrapperDynamicIslandElm = dynamicIsland.querySelector(".wrapper_dynamic-island");
let songNameDynamicIslandElm = wrapperDynamicIslandElm.querySelector(".song-name_dynamic-island");
let batteryProgressElm = document.querySelector("#battery-progress");
let homeBar = document.querySelector(".homeBar");
let wrapped = document.querySelector(".wrapped");
let isPhoneOn = true;

// App music
let songList = [
    {   
        songid: 0,
        songlink: "y2mate.com -  Lofi Lyrics Người Lạ Thoáng Qua  Đinh Tùng Huy x meChill",
        songname: "Người Lạ Thoáng Qua",
        songauthor: "Đinh Tùng Huy x meChill"
    },
    {
        songid: 1,
        songlink: "y2mate.com -  Lyrics  Người Âm Phủ  OSAD x VRT",
        songname: "Người Âm Phủ",
        songauthor: "OSAD x VRT"
    },
    {
        songid: 2,
        songlink: "y2mate.com -  Ngày Em Cưới  Nguyễn Vĩ  Lofi Lyrics",
        songname: "Ngày Em Cưới",
        songauthor: "Nguyễn Vĩ"
    },
    {
        songid: 3,
        songlink: "y2mate.com - 4 Mùa Thương Em Lofi Lyrics  Lập Nguyên x Night T  Thương em khi mùa thu thương em sang mùa hạ",
        songname: "4 Mùa Thương Em Lofi Lyrics",
        songauthor: "Lập Nguyên x Night T"
    },
    {
        songid: 4,
        songlink: "y2mate.com - Anh Mệt Rồi Lofi Ver  Anh Quân Idol x MewMew  Người đời nói đúng không nên yêu thương ai quá",
        songname: "Anh Mệt Rồi Lofi Ver",
        songauthor: "Anh Quân Idol x MewMew"
    },
    {
        songid: 5,
        songlink: "y2mate.com - BAE Tăng Duy Tân  Bên Trên Tầng Lầu  Official Lyric Video",
        songname: "Bên Trên Tầng Lầu",
        songauthor: "BAE Tăng Duy Tân"
    },
    {
        songid: 6,
        songlink: "y2mate.com - Bán Duyên  Ver Lofi   Đình Dũng  Đăng Sơn",
        songname: "Bán Duyên Ver Lofi",
        songauthor: "Đình Dũng  Đăng Sơn"
    },
    {
        songid: 7,
        songlink: "y2mate.com - Bạn Tình Ơi 2  Htrol Remix   Yuni Boo ft Goctoi Mixer",
        songname: "Bạn Tình Ơi 2 Htrol Remix",
        songauthor: "Yuni Boo ft Goctoi Mixer"
    },
    {
        songid: 8,
        songlink: "y2mate.com - Có Chàng Trai Viết Lên Cây Lofi Lyrics  Chu Duyên x H2O  Ngày Cô Ấy Đi Theo Chân Mẹ Cha",
        songname: "Có Chàng Trai Viết Lên Cây Lofi Lyrics",
        songauthor: "Chu Duyên x H2O"
    },
    {
        songid: 9,
        songlink: "y2mate.com - Có Duyên Không Nợ Lofi  NB3 Hoài Bảo  Một Người Đứng Từ Xa Chờ Em Về Hot Tiktok  Nhạc Lofi Chill",
        songname: "Có Duyên Không Nợ Lofi",
        songauthor: "NB3 Hoài Bảo"
    },
    {
        songid: 10,
        songlink: "y2mate.com - Con tim em thay lòng  Cô Đơn Dành Cho Ai Lofi Ver  Lee Ken x Nal x KProx",
        songname: "Cô Đơn Dành Cho Ai Lofi Ver",
        songauthor: "Lee Ken x Nal x KProx"
    },
    {
        songid: 11,
        songlink: "y2mate.com - Cố Giang Tình Lofi Ver  X2X  Khóc cho nhau một lần rồi thôi không gặp nhau nữa đâu",
        songname: "Cố Giang Tình Lofi Ver",
        songauthor: "X2X"
    },
    {
        songid: 12,
        songlink: "y2mate.com - Chẳng Thể Tìm Được Em  PhucXp ft Freak D  Official Audio",
        songname: "Chẳng Thể Tìm Được Em",
        songauthor: "PhucXp ft Freak D"
    },
    {
        songid: 13,
        songlink: "y2mate.com - CHỈ MUỐN BÊN EM LÚC NÀY  JIKI X ft HUY VẠC FULL MV LYRIC",
        songname: "Chỉ Muốn Bên Em Lúc Này",
        songauthor: "JIKI X ft HUY VẠC"
    },
    {
        songid: 14,
        songlink: "y2mate.com - Chuyện Hoa Sim  H2K x KProxLo  Fi Ver Audio Lyrics Video",
        songname: "Chuyện Hoa Sim",
        songauthor: "H2K x KProx"
    },
    {
        songid: 15,
        songlink: "y2mate.com - Dễ Đến Dễ Đi Lofi Ver  Quang Hùng MasterD x Quốc Kiệm",
        songname: "Dễ Đến Dễ Đi Lofi Ver",
        songauthor: "Quang Hùng MasterD x Quốc Kiệm"
    },
    {
        songid: 16,
        songlink: "y2mate.com - Đã Lỡ Yêu Em Nhiều",
        songname: "Đã Lỡ Yêu Em Nhiều",
        songauthor: "Unknown"
    },
    {
        songid: 17,
        songlink: "y2mate.com - Đen x JustaTee  Đi Về Nhà MV",
        songname: "Đi Về Nhà",
        songauthor: "Đen x JustaTee"
    },
    {
        songid: 18,
        songlink: "y2mate.com - Đêm Trăng Tình Yêu Lofi Ver  Hương Tú x VuxƯớc chi trăng đừng tàn soi tình yêu chúng ta",
        songname: "Đêm Trăng Tình Yêu Lofi Ver",
        songauthor: "Hương Tú x VuxƯớc"
    },
    {
        songid: 19,
        songlink: "y2mate.com - Đừng quên tên anh  Hoa VinhLyrics VideoMeens",
        songname: "Đừng quên tên anh",
        songauthor: "Hoa Vinh"
    },
    {
        songid: 20,
        songlink: "y2mate.com - Đường Tôi Chở Em Về Lofi Ver  buitruonglinh x Freak D",
        songname: "Đường Tôi Chở Em Về Lofi Ver",
        songauthor: "buitruonglinh x Freak D"
    },
]
let musicAppBtn = document.querySelector("#musicApp");
let musicApp = document.querySelector(".music-app");
let songDetailElm = musicApp.querySelector(".song-detail");
let songListLength = Number(songList.length);
let songId;
let currentSong;
let currenttime;
let songDuration;
let musicControlElm = document.querySelector(".music-control");
let musicControlBtn = musicControlElm.querySelectorAll("div");
let shuffleSongBtn = document.querySelector(".shuffle-song");
let backSongBtns = document.querySelectorAll(".back-song");
let playSongBtns = document.querySelectorAll(".play-song");
let nextSongBtns = document.querySelectorAll(".next-song");
let repeatSongBtn = document.querySelector(".repeat-song");
let typeLoop = 0;
let mainThumbnail;
let angleMainThumnail = 0;
let rotateThumnailId;
let isOpenApp = false;
let isShuffleSong = false;
let currentVolume = 1;
let isPlaySong = false;
let isMute = false;
let currenTimeElm = document.querySelector(".song-current-time");
let progressElm = document.querySelector(".progress-bar");
let totalTimeElm = document.querySelector(".song-total-time");


let hideScreen = function () {
    isPhoneOn = !isPhoneOn;
    if(isPhoneOn) {
        screen.style.visibility = "visible";
        dynamicIsland.style.backgroundColor = "#000";
        if(isOpenApp) { runMusicApp() }
    }
    else {
        screen.style.visibility = "hidden";
        dynamicIsland.style.backgroundColor = "#8f8e8e";
        hideMusicApp();
    }
}

let makeTimeToday = function () {
    let date = new Date;
    let day = date.getDay() + 1;
    let hour = date.getHours();
    let minute = date.getMinutes();
    day == 8 ? day = "Chủ nhật" : day = 'Thứ ' + day;
    hour.toString().length < 2 ? hour = "0" + hour : hour = hour;
    minute.toString().length < 2 ? minute = "0" + minute : minute = minute;
    timeTodayElm.innerHTML = `
        <div class="phone-time">${hour}:${minute}</div>
        <div class="phone-date">${day}, ${date.getDate()} tháng ${date.getMonth() + 1} </div>
    `
}


setInterval(() => {makeTimeToday();},500)

// <-------------------Phone-------------------->
// Power
powerBtn.addEventListener('click', () => {hideScreen()});

// Dinamic island
let dynamicIslandOn = function () {
    isDynamicIslandOn = true;
    dynamicIsland.style.width =  "64%";
    dynamicIsland.style.height = "18%";
    dynamicIsland.style.borderRadius = "20px";
    statusElm.style.top = "5.5px";
    statusElm.style.left = "20%";
    statusMuteElm.style.top = "5px"
    statusMuteElm.style.left = "52%";
    // statusMicElm.style.left = "37%";
    // statusMicElm.style.top = "5px";
    if(isPlaySong) {
        wrapperDynamicIslandElm.style.visibility = "visible";
    }
    if(isDynamicIslandOn) {
        songNameDynamicIslandElm.innerHTML = `${songList[songId].songname}`;
        wrapperDynamicIslandElm.style.visibility = "visible";
    }
}

let dynamicIslandOff = function () {
    isDynamicIslandOn = false;
    dynamicIsland.style.width =  "30%";
    dynamicIsland.style.height = "4%";
    dynamicIsland.style.borderRadius = "20px";
    statusElm.style.top = "18%";
    statusElm.style.left = "12%";
    statusMuteElm.style.top = "18%";
    statusMuteElm.style.left = "56%";
    // statusMicElm.style.top = "4px";
    // statusMicElm.style.left = "36%";
    wrapperDynamicIslandElm.style.visibility = "hidden";
    if(isDynamicIslandOn) {
        songNameDynamicIslandElm.innerHTML = `${songList[songId].songname}`;
        wrapperDynamicIslandElm.style.visibility = "visible";
    }
}

dynamicIsland.addEventListener("click", () => {
    dynamicIslandOn();
    setTimeout(() => { dynamicIslandOff(); },5000);
})

// Battery

let chargingBattery = function () {
    let percenBattery = 60;
    if ( percenBattery >= 0 && percenBattery <= 90) {
        percenBattery = percenBattery;
    }
    else if ( percenBattery < 0) {
        percenBattery = 0;
    }
    else if ( percenBattery > 90 ) {
        percenBattery = 90;
    }
    batteryProgressElm.style.width = `${percenBattery}%`;
};

chargingBattery();

// Home bar
let homeBarActive = function () {
    isOpenApp = !isOpenApp;
    homeBar.style.transform = "translateY(-4px)";
}

let homeBarDisable = function () {
    // musicApp.style.visibility = "hidden";
    hideMusicApp();
    homeBar.style.transform = "translateY(0)";
}

homeBar.addEventListener("click", () => {
    homeBarActive();
    setTimeout(() => { homeBarDisable(); }, 500)
})

// Volume
muteBtn.onclick = () => {
    isMute = !isMute;
    if (isMute) {
        currentSong.muted = true;
        statusMuteElm.innerHTML = `<img src="./assets/Status icon/bell-off-svgrepo-com.svg" alt="">`;
    } else {
        currentSong.muted = false;
        // statusMuteElm.innerHTML = `<img src="./assets/Status icon/bell-svgrepo-com.svg" alt="">`;
        statusMuteElm.innerHTML = "";
    }
}

let displayVolumeBarElm = function() {
    volumeBarElm.style.width = "4px";
    volumeBarElm.style.height = "16%";
    volumeBarElm.style.left = "3px";
    volumeBarElm.style.top = "20%";
    volumeBarElm.style.opacity = "1";
    volumeBarElm.style.visibility = 'visible';
}

let hideVolumeBarElm = function() {
    volumeBarElm.style.width = "1px";
    volumeBarElm.style.height = "15%";
    volumeBarElm.style.left = "0px";
    volumeBarElm.style.top = "21%"; 
    volumeBarElm.style.opacity = "0";
    volumeBarElm.style.visibility = 'hidden';
}

increaseVolumeBtn.onclick = () => {
    displayVolumeBarElm();
    if(currentVolume < 0.9 || currentVolume = 0.9) {
        currentVolume += 0.1;
        currentSong.volume = currentVolume;
    };
    volumeProgressElm.style.height = `${currentVolume * 100}%`;
    setTimeout(() => {
        hideVolumeBarElm()
    },5000)
};

decreaseVolumeBtn.onclick = () => {
    displayVolumeBarElm();
    if(currentVolume > 0.1 || currentVolume = 0.1) {
        currentVolume -= 0.1;
        currentSong.volume = currentVolume;
    };
    volumeProgressElm.style.height = `${currentVolume * 100}%`;
    setTimeout(() => {
        hideVolumeBarElm();
    },5000)
};
// <-------------------Music-app-------------------->

let displayFullContent = function () {
    if ((songList[songId].songname.length * 12) > songDetailElm.offsetWidth) {
        songDetailElm.querySelector(".song-name").style.justifyContent = "start";
    }
}

let loadSong = function(songInfor) {
    songId = songInfor.songid;
    songDetailElm.innerHTML = `
        <audio class="current-song" src="./assets/music list/${songInfor.songlink}.mp3" type="audio/mpeg"></audio>
        <div class="main-thumbnail">
            <img class="main-img" src="assets/white-icon/music-thumnail-svgrepo-com.svg" alt="">
        </div>

        <div class="song-infor">
            <div class="song-name">${songInfor.songname}</div>
            <p class="author">${songInfor.songauthor}</p>
        </div>
        `
    displayFullContent();
    currentSong = songDetailElm.querySelector(".current-song");
    currentSong.setAttribute("preload", "metadata");
    currentSong.addEventListener('loadedmetadata', ()=> {
        songDuration = Number(currentSong.duration.toFixed());
        makeSongTime(songDuration);
    })
}

loadSong(songList[0]);

let makeCurrentTime = function (time) {
    let minute = (Math.floor(time/60));
    if (minute < 10) minute = '0' + minute.toString()
        let second = Math.floor(time - minute*60)
    if (second < 10) second = '0' + second.toString()
        currenTimeElm.innerHTML = `${minute}:${second}`;
}

let makeProgress = function (time,duration) {
    let currentProgress = Math.floor(time/duration*100);
    progressElm.value = currentProgress;
}

let makeDurationtime = function (time) {
    let minute = Math.floor(time/60);
    if (minute < 10) minute = '0' + minute.toString()
        let second = Math.floor(time - minute*60)
    if (second < 10) second = '0' + second.toString()
        totalTimeElm.innerHTML = `${minute}:${second}`;
}

let makeSongTime = function (songDuration) {
    songDuration = currentSong.duration;
    makeDurationtime(songDuration);
    currentSong.ontimeupdate = function() {
        currenttime = currentSong.currentTime;
        makeCurrentTime(currenttime);
        makeProgress(currenttime,songDuration);
        if(currentSong.ended) {
            if(isShuffleSong) {shuffleSong();}
            else if(typeLoop == 0 && isShuffleSong == false) {nextSong();}
            else if(typeLoop == 1) {loadSong(songList[songId]);playSong()}
            else if(typeLoop == 2) {nextSong();};           
            }
    }
}

let rotateThumnail = function() {
    angleMainThumnail += 5;
    angleMainThumnail >= 360 ? angleMainThumnail = 0 : angleMainThumnail = angleMainThumnail; 
    mainThumbnail.style.transform = `rotate(${angleMainThumnail}deg)` 
}

let playSong = function () {  
    isPlaySong = true;
    currentSong.play();
    playSongBtns.forEach((btn) => {
        btn.querySelector("img").src = "./assets/white-icon/pause-svgrepo-com.svg";
    })
    statusElm.innerHTML = `<img class="status-img" src="./assets/Status icon/music-svgrepo-com.svg" alt="">`;
    // rotateThumnailId = setInterval(() => {rotateThumnail()},500);
}

// offsetX,Y: tọa độ của điểm trong phần tử đó, có gốc tọa độ là góc trên bên trái của phần tử đó (điểm bắt đầu)
// offsetWidth,Height: lấy chiều rộng, dài của phần tử đó
progressElm.addEventListener('click', (e) => {
    progressElm.value = e.offsetX/progressElm.offsetWidth*100;
    currentSong.currentTime = e.offsetX/progressElm.offsetWidth*songDuration;
});

let pauseSong = function() {
    currentSong.pause();
    playSongBtns.forEach(btn => {
        btn.querySelector("img").src = "./assets/white-icon/play-svgrepo-com.svg";
    })
    statusElm.innerHTML = "";
    // clearInterval(rotateThumnailId);
}

let nextSong = function() {
    if(isShuffleSong) {
        shuffleSong();
    } else {
        songId < songListLength - 1? songId += 1 : songId = 0;
        loadSong(songList[songId]);
        isPlaySong = true;
        playSong();
    }
}

let backSong = function() {
    if(isShuffleSong) {
        shuffleSong();
    } else {
        songId < 1? songId = songListLength - 1 : songId -= 1;
        loadSong(songList[songId]);
        isPlaySong = true;
        playSong();
    }
}

let shuffleSong = function() {
    let newSongId;
    do {
        newSongId =  Math.floor(Math.random() * songListLength);
    } while (newSongId == songId);       
    loadSong(songList[newSongId]);
    isPlaySong = true;
    playSong();
}

let runMusicApp = function () {
    mainThumbnail = musicApp.querySelector(".main-thumbnail");
    musicApp.style.visibility = "visible";
}
let hideMusicApp = function () {
    mainThumbnail = musicApp.querySelector(".main-thumbnail");
    musicApp.style.visibility = "hidden";
}

musicAppBtn.addEventListener('click',() => {
    isOpenApp = !isOpenApp;
    runMusicApp();
})


musicControlBtn.forEach((btn) => {
    btn.addEventListener("mouseover", () => {
        btn.style.backgroundColor = "#8d66da";
        btn.style.borderRadius = "inherit";
    })
    btn.addEventListener("mouseleave", () => {
        btn.style.backgroundColor = "unset";
    })
})
playSongBtns.forEach((btn) => {
        btn.addEventListener('click' , () => {
        isPlaySong = !isPlaySong;
        if(isPlaySong) {
            playSong();
        }
        else {
            pauseSong();
        }
    })
})

nextSongBtns.forEach((btn) => {
    btn.addEventListener('click', () => { nextSong(); })
});

backSongBtns.forEach((btn) => {
    btn.addEventListener('click', () => {  backSong(); })
});

shuffleSongBtn.addEventListener("click", () => {
    isShuffleSong = !isShuffleSong;
    if(isShuffleSong) {
        shuffleSongBtn.innerHTML = `<img src="./assets/color-icon/shuffle-colorful-svgrepo-com.svg" alt="">`
        shuffleSong();
    }
    else{
        shuffleSongBtn.innerHTML = `<img src="./assets/white-icon/shuffle-svgrepo-com.svg" alt="">`
    }
})

repeatSongBtn.addEventListener("click", () => {
    typeLoop += 1;
    typeLoop > 2 ? typeLoop = 0 : typeLoop =  typeLoop;
    switch(typeLoop) {
        case 0: {
            repeatSongBtn.innerHTML = `<img src="./assets/white-icon/repeat-svgrepo-com.svg" alt="">`;
            break;
        } 
        case 1: {
            repeatSongBtn.innerHTML = `<img src="./assets/color-icon/repeat-one-svgrepo-com.svg" alt="">`;
            break;
        }
        case 2: {
            repeatSongBtn.innerHTML = `<img src="./assets/color-icon/repeat-infinite-svgrepo-com.svg" alt="">`;
            break;
        }
    }
})



// let promise = new Promise((resolve, reject) => {
//     resolve(data);
// })
// promise
//     .then((data1) => {
//     })
    
//     .then((data2) => {
//     })

//     .catch((err) => console.log("Error"))

// -------------------------------AI------------------------------------

// var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
// const recognition = new SpeechRecognition();
// recognition.lang = "vi-VN";
// recognition.continuous = false;

// const microphone = document.querySelector("#pictureApp");

// const handleVoice = function (voice) {
//     if (voice=='phát nhạc'||voice =='chạy nhạc'||voice =='lên nhạc'||voice=='chơi nhạc') {playSong();}
//     else if (voice=='bài tiếp'||voice=='tiếp theo'||voice=='bài tiếp theo'||voice=='next') {nextSong();}
//     else if (voice=='bài trước') {backSong();}
//     else if (voice=='phát ngẫu nhiên'||voice=='ngẫu nhiên'||voice=='random'||voice=='shuffle') {shuffleSong();}
//     else if (voice=='dừng nhạc'||voice=='tắt nhạc'||voice=='ngắt nhạc') {pauseSong();}
//     else if(voice=='tắt máy'||voice=='tắt màn hình') {hideScreen();}
//     else {console.log(1)};
// }

// microphone.addEventListener("click", (e) => {
//     e.preventDefault();
//     if(isPlaySong) {
//         pauseSong();
//         recognition.start();
//     } else recognition.start();
// })

// recognition.onspeechend = () => {
//     recognition.stop();
// }

// recognition.onerror = (err) => {
//     console.error(err);
// }

// recognition.onresult = (rels) => {
//     let text = rels.results[0][0].transcript;
//     text = text.toLowerCase();
//     console.log(text);
//     handleVoice(text);
// }
