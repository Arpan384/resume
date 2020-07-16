window.addEventListener("load", () => {

    let skillBtns = document.querySelectorAll("#skills .outer .card-content .row .col>a");
    skillBtns.forEach((b)=>b.addEventListener("click", skillFocus))

    let trainBtns = document.querySelectorAll("#trainings .list");
    trainBtns.forEach((b)=>{
        b.addEventListener("click", trainingHandler)
    })
    trainBtns[0].click()

    let clientWidth = document.querySelector("header").clientWidth
    let cardWidth = document.querySelector(".bgimg").clientWidth
    setInterval((bubbleGen, cardWidth) => {
        bubbleGen(cardWidth)
    }, 800, bubbleGen, cardWidth);
    setInterval((cubeGen, clientWidth) => {
        cubeGen(clientWidth)
    }, 400, cubeGen, clientWidth);
})

let skill_details= {
    ds:"Data Structure can be defined as the group of data elements which provides an efficient way of storing and organising data in the computer so that it can be used efficiently.",
    cpp:"C++ is a powerful general-purpose programming language and can be used to develop operating systems, browsers, etc. It supports different ways of programming like procedural, object-oriented, functional, and so on which makes it powerful as well as flexible.",
    java:"Java is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible. It is intended to let application developers write once, run anywhere.",
    algo:"Algorithm is a step-by-step procedure, which defines a set of instructions to be executed in a certain order to get the desired output.",
    oops:"Object Oriented Pprogramming (OOP) is a concept that works on the principles of abstraction, encapsulation, inheritance, and polymorphism. It allows users to create the objects along with methods to handle those objects. ",
    angular:"AngularJS is a very powerful JavaScript Framework. It is used in Single Page Application (SPA) projects. It extends HTML DOM with additional attributes and makes it more responsive to user actions.",
    react:"React is an open-source JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
    html:"HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.",
    css:"Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML. CSS describes how elements should be rendered on screen.",
    js:"JavaScript is a fun and flexible programming language. It’s one of the core technologies of web development and can be used on both the front-end and the back-end.",
    api:"An API (application programming interface) is a set of definitions and protocols for building and integrating application software. APIs let your service communicate with other services without having to know how they’re implemented.",
    mongo:"MongoDB is a cross-platform document-oriented database program written in C++. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
    jquery:"jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler to implement.",
    node:"Node.js is a free, open-sourced, cross-platform JavaScript run-time environment that lets developers write command line tools and server-side scripts outside of a browser.",
    ml:"Machine learning is an application of artificial intelligence (AI) that provides systems the ability to automatically learn and improve from experience without being explicitly programmed.",
    sql:"SQL stands for Structured Query Language. It is a database computer language designed for the retrieval and management of data in a relational database.",
    flask:"Flask is a Python web framework built with a small core and easy-to-extend philosophy. It is designed to make getting started quick and easy, with the ability to scale up to complex applications.",
    puppeteer:"Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol. It is a tool for browser automation and provides features like PDF generation, file uploads, screenshots etc.",
    selenium:"Selenium is an umbrella project for a range of tools and libraries that enable and support the automation of web browsers. It provides extensions to emulate user interaction with browsers and much more.",
}

function skillFocus(){
    let slide = this.parentElement.parentElement.parentElement.parentElement.querySelector(".slide");
    let title = slide.querySelector(".topic");
    let desc = slide.querySelector(".desc");
    let heading = this.innerText;
    
    if(slide.classList.contains("showAnim") && title.innerText===heading){
        slide.classList.toggle("showAnim")
        return;
    }

    title.innerText = heading
    desc.innerText = skill_details[this.id]
    slide.classList.add("showAnim");
    
}

function cubeGen(clientWidth) {
    let marg = 0.1 * clientWidth
    marg += Math.random() * 0.8 * clientWidth
    let ht = Math.random() * 50 + 10
    createCube(marg, ht);
}

function createCube(margin, ht) {
    let cubeWrap = document.createElement("div");
    cubeWrap.id = "cube-wrap"
    let wrapDiv = document.createElement("div");
    wrapDiv.id = "cube"
    
    wrapDiv.style.height = ht + "px";
    wrapDiv.style.width = ht + "px";

    let rand = Math.floor(Math.random() * (8) + 1);
    wrapDiv.style.animationName = "anim" + rand

    rand = Math.random() * (5) + 2;
    wrapDiv.style.animationDuration = rand + "s";

    let fr = document.createElement("div");
    fr.id = "front"
    let bk = document.createElement("div");
    bk.id = "back"
    let top = document.createElement("div");
    top.id = "top"
    let bot = document.createElement("div");
    bot.id = "bottom"
    let lft = document.createElement("div");
    lft.id = "left"
    let rgt = document.createElement("div");
    rgt.id = "right"

    bk.style.transform = `translateZ(${-ht}px)`

    let sides = [fr, bk, top, bot, lft, rgt]

    for (let side of sides) {
        wrapDiv.appendChild(side)
    }

    cubeWrap.style.width = `${ht}px`
    wrapDiv.style.left = margin + "px";
    wrapDiv.style.position = "absolute"

    rand = Math.floor(Math.random() * 5.999999);
    let cols = ["rgba(233, 68, 68, 0.5)", "rgba(198, 212, 69, 0.5)", "rgba(32, 63, 121, 0.5)", "rgba(73, 236, 122, 0.5)", "rgba(255, 255, 255, 0.5)", "rgba(0, 0, 0, 0.5)"]

    for (let side of sides) {
        side.style.backgroundColor = cols[rand]
        side.style.border = "1px solid rgba(0,0,0,1)"
    }

    rand = Math.floor(Math.random() * (7) + 3);
    cubeWrap.style.animationDuration = rand + "s";

    setTimeout((cubeWrap) => {
        document.querySelector("#cube-section").removeChild(cubeWrap)
    }, rand * 1000, cubeWrap)

    cubeWrap.appendChild(wrapDiv)
    document.querySelector("#cube-section").appendChild(cubeWrap)
}


function bubbleGen(cardWidth) {
    for (cat in skill_cats) {
        let str = `#skills #${cat} #bubble-section`
        let par = document.querySelector(str)
        str = `#skills #${cat} .bgimg`
        cardWidth = document.querySelector(str).clientWidth
        let marg = Math.random() * cardWidth
        let ht = Math.random() * 40 + 10
        createBubble(cat, marg, ht, par);
    }
}

const skill_cats = {
    programming: ["cpp1.png", "java1.png", "ds2.png", "oops1.png", "algo1.png"],
    developement: ["html1.png", "css1.png", "javascript1.jfif", "api3.png", "angular1.png", "bootstrap1.png", "express1.png", "materialize1.png", "mongo1.png", "node1.webp", "react1.png", "jquery1.png","electron.png"],
    others: ["flask1.png", "sql1.png", "machLearn1.png", "python1.png", "puppeteer1.png", "selenium1.png"]
}


function createBubble(cat, margin, ht, par) {
    let bubbleWrap = document.createElement("div");
    bubbleWrap.id = "bubble-wrap"
    let wrapDiv = document.createElement("div");
    wrapDiv.id = "bubble"
    bubbleWrap.style.marginLeft = margin + "px";

    wrapDiv.style.height = ht * 0.8 + "px";
    wrapDiv.style.width = ht * 0.8 + "px";
    bubbleWrap.style.height = ht + "px";
    bubbleWrap.style.width = ht + "px";
    wrapDiv.style.borderRadius = ht * 0.4 + "px";
    bubbleWrap.style.borderRadius = ht / 2 + "px";

    let rand = Math.floor(Math.random() * (2) + 1);
    wrapDiv.style.animationName = "bubble" + rand
    wrapDiv.style.animationIterationCount = "infinite"
    wrapDiv.style.animationTimingFunction = "linear"

    rand = Math.floor(Math.random() * (4) + 2);
    wrapDiv.style.animationDuration = rand + "s";
    wrapDiv.style.marginLeft = ht * .1 + "px"
    wrapDiv.style.marginTop = ht * .1 + "px"

    rand = Math.floor(Math.random() * (skill_cats[cat].length - 0.0000001));
    let img = skill_cats[cat][rand]

    wrapDiv.style.backgroundImage = "url(./skills/" + img + ")"
    wrapDiv.style.backgroundPosition = "center"
    wrapDiv.style.backgroundSize = "cover"

    wrapDiv.style.position = "absolute"

    rand = Math.floor(Math.random() * (7) + 2);
    bubbleWrap.style.animationDuration = rand + "s";

    setTimeout((bubbleWrap, par) => {
        par.removeChild(bubbleWrap)
    }, rand * 1000 + 500, bubbleWrap, par)

    bubbleWrap.appendChild(wrapDiv)
    par.appendChild(bubbleWrap)

}


const training_details = {
    "ui": {
        desc: "For websites, HTML acts as the skeleton, CSS as the beauty and JavaScript adds the functionality. I learnt to brew a perfect combination of these 3 ingredients to create beatiful and interactive websites.\n Making the websites responsive was an added feature along with JQuery and Animations !!",
        img: "./certificates/ui.jpg",
        date:"Jan. 1, 2019  -  March 31, 2019",
        inst:"Ravikant Tyagi",
        by:"Brain Mentors Pvt. Ltd."
    },
    "mean": {
        desc: "This course taught me alot about building Web Based Applications from scratch and how the data is exchanged between clients and server.\n I also learnt using templating engines, interacting with MongoDB and File System and building RESTful web services.\n My Full Stack Developer Journey began here!!",
        img: "./certificates/mean.jpg",
        date:"June 1, 2019  -  July 31, 2019",
        inst:"Amit Srivastava",
        by:"Brain Mentors Pvt. Ltd."
    },
    "levelup": {
        desc: "Problem solving is a skill, and this course 'levelled' it up. I learnt how to approach complex programming problems and apply 'difficult-to-learn' algorithms with ease. The course unified cpp & java programming and helped me become fluent with both of them.\n It was essential to brush-up my logics and practice some real-life interview questions.",
        img: "./certificates/comingsoon.jpg",
        date:"Jan. 11, 2020  -  May 5, 2020",
        inst:"Rajneesh Kumar",
        by:"Pep Coding Education Pvt. Ltd."
    },
    "inception": {
        desc: "This course helped me kickstart my career in Computer Science Field where i had no prior experience. I learned how awesome it is to make the computer solve our problems. Creation and Usage of Data Strutures and Algorithms was also taught.\n It really imbibed in me the problem solving skills!!",
        img: "./certificates/ninjas_completion.jpg",
        date:"June 4, 2018  -  Sept. 10, 2018",
        inst:"Nidhi Agarwal",
        by:"Coding Ninjas Pvt. Ltd."
    }
}

function trainingHandler() {
    let trainBtns = document.querySelectorAll("#trainings .list");

    let tar = document.querySelector("#trainings #target");
    let h5 = tar.querySelector("h5");
    let p1 = tar.querySelector("p.desc");
    let p2 = tar.querySelector("p.date");
    let p3 = tar.querySelector("span.inst");
    let p4 = tar.querySelector(".byline span");
    
    let img = tar.querySelector("img");
    
    tar.classList.remove("hide")
    h5.innerText = this.innerText;
    p1.innerText = training_details[this.id]["desc"]
    p2.innerText = training_details[this.id]["date"]
    p3.innerText = training_details[this.id]["inst"]
    p4.innerText = training_details[this.id]["by"]
    img.src = training_details[this.id]["img"]

}
