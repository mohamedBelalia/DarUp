let navList = document.querySelectorAll("nav ul li a")
let nav = document.querySelector("nav")
let login = document.querySelector(".login")
let aa = document.querySelector(".login a")
let mainLogo = document.getElementById("main-logo")
let upBtn = document.getElementById("up-btn")
upBtn.onmouseover
// -------------------
let navPhone = document.getElementsByClassName("mobil-nav")[0]
let links = document.getElementsByClassName("links")[0]

let remove = document.createElement("h1")
remove.setAttribute("class","remove")
remove.innerHTML = "X"
navPhone.onclick = function(){
    links.style.right = "0%"
    links.insertAdjacentElement("beforebegin",remove)
    remove.style.display = "block"
    navPhone.style.display = "none"
}
remove.addEventListener("click",()=>{
    links.style.right = "-80%"
    remove.style.display = "none"
    navPhone.style.display = "flex"
})
// ----------------------------

function colorize(firstColor , SecoundColor){
    navList.forEach(function(ele){
    
    ele.onmouseover = function(){
        for(let i=0 ;i<navList.length ;i++){
            navList[i].style.color = firstColor
        }
        
        ele.style.color = SecoundColor
    }
     
})

phoneMedia()

} 

colorize('rgb(81, 81, 81,0.5)','black') 
// SECTION 1
let section1 = document.getElementById("section-1")
let section4 = document.querySelector(".section-4")
window.onscroll = function(){
    
    if(window.scrollY >= section1.offsetHeight ){

        nav.style.backgroundColor = 'rgb(0, 0, 0)'
        for(let i=0 ;i<navList.length ;i++){
            navList[i].style.color = 'rgb(255, 255, 255)'
        }
        
        colorize('rgba(255, 255, 255,0.5)','rgb(255, 255, 255)') 
        login.style.borderColor = "rgb(255, 255, 255)"
        aa.style.color = "rgb(255, 255, 255)"
        remove.style.color = "rgb(255, 255, 255)"

        mainLogo.src = "./pics/whiteLogo.png"
        upBtn.style.display = "block"
        
    }
    else{
        nav.style.backgroundColor = 'rgb(255, 255, 255)'
        for(let i=0 ;i<navList.length ;i++){
            navList[i].style.color = 'black'
        }
        
        colorize('rgb(81, 81, 81,0.5)','black') 
        login.style.borderColor = "rgb(0, 0, 0)"
        aa.style.color = "rgb(0, 0, 0)"
        remove.style.color = "rgb(0, 0, 0)"

        mainLogo.src = "./pics/blackLogo.png"

        upBtn.style.display = "none"

        
    }


  
    // Section 4

    
    let div1 = document.querySelector(".conter .parent-div .div1")
    let div2 = document.querySelector(".conter .parent-div .div2")
    let div3 = document.querySelector(".conter .parent-div .div3")
    let div4 = document.querySelector(".conter .parent-div .div4")
    let thrBtn = document.querySelector(".parent-text div")
 
    if(window.scrollY >= section4.offsetTop-100){
        console.log("Hello from sec 4");
        nav.style.backgroundColor = 'rgb(255, 255, 255)'
        for(let i=0 ;i<navList.length ;i++){
            navList[i].style.color = 'black'
        }
        colorize('rgb(81, 81, 81,0.5)','black') 
        login.style.borderColor = "rgb(0, 0, 0)"
        login.style.color = "rgb(0, 0, 0)"
        aa.style.color = "rgb(0, 0, 0)"
        
        mainLogo.src = "./pics/blackLogo.png"
    }

    if(window.scrollY >= 2526){
        div1.style.top = 0 + "px"
        div2.style.top = 0 + "px"
        remove.style.color = "rgb(0, 0, 0)"
    }
    if(window.scrollY >=2745){
        div3.style.top = 0 + "px"
        div4.style.top = 0 + "px"
    }
    
    console.log(window.scrollY);
}

function phoneMedia(){
    if( document.documentElement.clientWidth <= 743){
        for(let i=0 ; i<navList.length ; i++){
            navList[i].style.color = 'white'
        }
        navPhone.style.backgroundColor = 'black'
    }
}

// image slider
let contentImgs = document.querySelector(".content-imgs")
let leftBtn = document.querySelector(".left-dir")
let rightBtn = document.querySelector(".right-dir")

let stepVal = 450

leftBtn.onclick = function(){
    stepVal = stepVal - 450
    if(stepVal < 0){
        stepVal = 0
    }else{
      contentImgs.scrollLeft = stepVal
      console.log(stepVal);
    }
    
}

rightBtn.onclick = function(){
    stepVal = stepVal+450
    if(stepVal >= 1800){
        stepVal = 1350
    }else{
      contentImgs.scrollLeft = stepVal
      console.log(stepVal);
    }
    
    
}


// hover image
let allDivs = document.querySelectorAll(".content-imgs div")

allDivs.forEach(function(div){
    let img = div.querySelector("img")
    div.addEventListener("mouseover" , function(){  
        img.style.filter = "grayscale(0%)"
        
    })
    div.addEventListener("mouseleave" , function(){  
        img.style.filter = "grayscale(100%)"
        
    })

    
})


// SECTION 2
let allPicsSec2 = document.querySelectorAll(".section-2 .pics div")
// btn creation : 
let btn = document.createElement("button")
btn.setAttribute("class","city-btn")
btn.appendChild(document.createTextNode("SEE MORE"))
// bt creatin
allPicsSec2.forEach(function(div){
    let bg = div.querySelector("img")
    let title = div.querySelector("h2")
    div.addEventListener("mouseover",function(){
        bg.style.filter = 'brightness(30%)'
        bg.insertAdjacentElement("beforebegin",btn)
        title.style.marginTop = "20%"
    })
    div.addEventListener("mouseleave",function(){
        bg.style.filter = 'brightness(70%)'
        title.style.marginTop = "30%"
    })
})

// Choose Where You Live (Section 3)
let allTitles = document.querySelectorAll(".section-3 .container3 .titles p")
let Spans = document.querySelectorAll(".section-3 .container3 .titles span")
let toArr = Array.from(allTitles)
let allSpans = Array.from(document.querySelectorAll(".section-3 .container3 .titles span"))
let mainImg = document.querySelector(".section-3 .container3 .images img")

let images = [
    "pics/zz0.jpg",
    "pics/fb-.jpg",
    "pics/royal.jpg",
    "pics/Roy.jpg",
    "pics/riad.jpg"
]

allTitles.forEach(function(title){
    
    title.addEventListener("mouseover", function(){
        for(let i=0 ;i<allTitles.length ;i++){
            allTitles[i].style.color = "rgb(123, 123, 123)"
       }
       title.style.color = "black"
       Spans[toArr.indexOf(title)].style.width = '300px'
       mainImg.src = images[toArr.indexOf(title)]
    //    mainImg.style.marginRight = '40px'
    })
    title.addEventListener("mouseleave",function(){
        for(let i=0 ;i<allTitles.length ;i++){
            allTitles[i].style.color = "rgb(123, 123, 123)"
       }
        Spans[toArr.indexOf(title)].style.width = '0px'
        // mainImg.style.marginRight = '0px'
    })
})

// SECTION 4 2329


// login box

let centerBox = document.getElementsByClassName("center-box")[0]
let join = document.getElementById("login")

join.onclick = function(){
    centerBox.style.display = 'block'
    let loginBox = document.createElement("div")
    loginBox.setAttribute("class","loginBox")
    centerBox.appendChild(loginBox)
}
