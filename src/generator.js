
// const xlsx = require("xlsx");
import {uuidv4} from "./common"
import { Base64 } from 'js-base64';

console.log("Hello!")

// const filePicker = document.getElementById("file")
const nameList = document.getElementById("name-list")
const generateButton = document.getElementById("submit")
const log = document.getElementById("log")
const table = document.getElementById("table");
const specialRules = document.getElementById("special-rules");
const showRecipients = document.getElementById("show-recipients")


const mainPage = window.location.href.replace("/generator.html", "")



let print = (...args) => {
    console.log(...args);
    let elm = document.createElement("p");
    elm.innerText = args.join(", ")
    log.prepend(elm)
}

let error = (...args) => {
    console.error(...args);
    let elm = document.createElement("p");
    elm.style.color="red";
    elm.innerText = args.join(", ")
    log.prepend(elm)
}


let tableGenerate = (table, headers, data, id=uuidv4()) => {

    table.innerHTML = ""
    //generate headers
    const tr = document.createElement("tr");

    headers.forEach((element, index) => {
        const th = document.createElement("th");
        th.innerHTML = element;
        tr.appendChild(th)
    });

    table.appendChild(tr)
    
    //generate body

    data.forEach((row) => {
        const tr = document.createElement("tr");
        row.forEach((item, index) => {
            const td = document.createElement("td");
            td.classList.add(`${id}-item-${index}`)
            if(typeof item == "object") {
                td.appendChild(item);
            } else {
                td.innerHTML = item;
            }
            
            tr.appendChild(td)
        })
        table.appendChild(tr)
    })

}

let showReciprientsFunct;

let generate = () => {
    let sep = document.querySelector('input[name="sep"]:checked').value;
    //let sep = Array.from(document.getElementsByName("sep")).find(r => r.checked).value;
    let names = nameList.value
    if(nameList.value == "") {
        error("Must have at least 2 names")
        return
    }

    
    //split string
    if(sep === "newline") {
        names = nameList.value.split("\n");
    } else {
        names = nameList.value.split(",");
    }

   
    if(names.length < 2) {
        error("Must have at least 2 names")
        return
    }

    //clean up text and generate links
    names = names.map((name)=> {
        return name.trim();
    })


    
    const pairs = generatePairs(names);

    const pairLink = pairs.map((pair) => {
        const data = {
            recipient: pair[1],
            specialRules: (specialRules.value=="")?null:specialRules.value
        }

        const link = `${mainPage}?data=${encodeURIComponent(Base64.encode(JSON.stringify(data)))}` 

        const span = document.createElement("span");
        span.onclick = ()=>{
            navigator.clipboard.writeText(link);
        }
        span.innerHTML = link

        return [pair[0], span, pair[1]]
    })


    const id = "output"
    tableGenerate(table, ["Santa", "Santa's Link (click to copy)", "Recipient"], pairLink, id)

    //setup show reciprients
    if(showReciprientsFunct) {
        showRecipients.removeEventListener("change", showReciprientsFunct)
    }
    

    showReciprientsFunct = () => {
        const elms = document.querySelectorAll(`.${id}-item-2`)
        elms.forEach(elm=>{

            elm.style.display = (showRecipients.checked)?null:"none"
        })
    }
    showReciprientsFunct()
    showRecipients.addEventListener("change", showReciprientsFunct)
    //print(sep)
}



let shuffle = (array) => {
    return array
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
}

let generatePairs = (people) => {
    let shuffled = shuffle(people)
    let pairs = shuffled.map((value, index) => {
        if(!shuffled[index+1]) { //end edge case
            return [value, shuffled[0]]
        }
        return [value, shuffled[index+1]]
    })

    return pairs

}



generateButton.addEventListener("click", () => {
    
    generate()
})