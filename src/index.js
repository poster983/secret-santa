// import {Base64, uuidv4} from "./common"
import { Base64 } from 'js-base64';
import anime from "animejs"
import * as Snow from "snowfall.js"



const giftTop = document.getElementById("box-top")
const giftBottom = document.getElementById("box-bottom")

// const resetButton = document.getElementById("reset")

const pathTop = document.getElementById("path-top");
const pathBottom = document.getElementById("path-bottom");

const bottomSVG = document.getElementById("bottom-svg")
const person = document.getElementById("person");
const rules = document.getElementById("rules");
const rulesContainer = document.getElementById("rules-container");
const title = document.getElementById("title")


//set parameters from query 
const urlSearchParams = new URLSearchParams(window.location.search)
let showRules = true;
if(urlSearchParams.has("data")) {
    console.log(Base64.decode(decodeURIComponent(urlSearchParams.get("data"))))
    if(urlSearchParams.has("santa")) {
        let titleTop = document.createElement("span")
        titleTop.innerText = `Hey ${decodeURIComponent(urlSearchParams.get("santa"))},`
        let br = document.createElement("br");
        title.prepend(br)
        title.prepend(titleTop)
    }
    try {
        let data = JSON.parse(Base64.decode(decodeURIComponent(urlSearchParams.get("data"))))
        console.log(data)
        person.innerText = data.recipient
        if(!data.specialRules) {
            showRules = false
        } else {
            rules.innerText = data.specialRules
        }
        
    } catch(e) {
        console.error(e)
        rules.innerText = "There was an error parsing the data"
    }
    
} 


const snow = new Snow.default({
    id: 'snow'
});


let giftOpen = anime.timeline({
    easing: 'easeInOutExpo',
    duration: 600,
    autoplay: false,
})
    .add({
        begin: function(anim) {
            title.classList.add("hide")
        },  
    })
    .add({
        targets: '#box-top',
        translateY: -800,
        // rotateZ: 15,
    })
    .add({
        targets: '#box-bottom',
        translateY: 800,
        rotateZ: 50,
    })
    .add({
        targets: ['#box-bottom', '#box-top'],
        opacity: 0
    }, "+=300")
    .add({
        begin: function(anim) {
            person.classList.add("show")
            
        },        
    }, 1300)
if(showRules) {
    giftOpen.add({
        targets: rulesContainer,
        opacity: 1,    
    }, 1300)
}
    
    // .add({
    //     targets: '#person',
    //     opacity: 1,
    //     scaleX: 1
    // },"+100")





// resetButton.addEventListener("click", () => {
//     giftOpen.pause()
//     giftOpen.restart()
    
// })
let openBox = () => {
    giftOpen.play()

}
giftOpen.finished
    .then(() => {
        snow.start()
        giftTop.style.display = "none";
        giftBottom.style.display = "none";
    })


bottomSVG.addEventListener("click", openBox);
// pathBottom.addEventListener("click", openBox);