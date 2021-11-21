
// const xlsx = require("xlsx");

console.log("Hello!")

// const filePicker = document.getElementById("file")
const nameList = document.getElementById("name-list")
const generateButton = document.getElementById("submit")
const log = document.getElementById("log")


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


let generate = () => {
    //let sep = document.querySelector('input[name="sep"]:checked').value;
    //let sep = Array.from(document.getElementsByName("sep")).find(r => r.checked).value;
    let names = nameList.value
    if(nameList.value == "") {
        error("Must have at least 2 names")
        return
    }

    names = nameList.value.split(",");

    print(generatePairs(names))

    //print(sep)
}

let shuffle = (array) => {
    return array
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
}

let generatePairs = (people) => {
    // people = shuffle(people)
    // if (people.length < 2) { return []; }
    // var first = people[0],
    // rest  = people.slice(1),
    // pairs = rest.map(function (x) { return [first, x]; });
    // return pairs.concat(generatePairs(rest));
    let shuffled = shuffle(people)



    let pairs = people.map((value, index) => {
        return [value, shuffled[index]]
    })

    //fix same pairs
    let same = []
    pairs.forEach((pair, index) => {
        if(pair[0] == pair[1]) {
            same.push(index)
        }
    })

    if(same.length == 1) {
        let tmp = pairs[same[0]][1]
        if(pairs[same[0]+1] != undefined) {
            pairs[same[0]][1] = pairs[same[0]+1][1]
            pairs[same[0]+1][1] = tmp 
        } else if(pairs[same[0]-1] != undefined){
            pairs[same[0]][1] = pairs[same[0]-1][1]
            pairs[same[0]-1][1] = tmp 
        } else {
            error("Not enough people to have unique pairs");
            return 
        }
    } else if (same.length > 1) {
        same,forEach((sameInd, index) => {

        })
    }

    same.forEach((pairInd) => {

    })
}



generateButton.addEventListener("click", () => {
    
    generate()
})