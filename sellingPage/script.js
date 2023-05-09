let nav = document.getElementsByTagName("nav")
let titles = document.querySelectorAll("nav ul li a")
let phoneNav = document.querySelectorAll(".mobil-nav span")
let firstView = document.getElementById("first-view")[0]
let mainLogo = document.getElementById("main-logo")
let upBtn = document.getElementById("up-btn")

// ---------------------

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

// ------------------------------

let imgBox = document.getElementsByClassName("relativBox")
let textBox = document.getElementsByClassName("relativTextBox")


window.onscroll = function(){
    if(window.scrollY==0){
        nav[0].style.backgroundColor= 'rgba(255, 255, 255, 0.861)'
        phoneMedia()
    }
    else if(window.scrollY >= 650){
        nav[0].style.backgroundColor = 'black'
        for(let i=0 ; i<titles.length ; i++){
            titles[i].style.color = 'rgba(255, 255, 255)'
        }
        remove.style.color = 'rgba(255, 255, 255)'
        for(let i=0 ; i<phoneNav.length ;i++)
        phoneNav[i].style.backgroundColor = "white"

        mainLogo.src = "../pics/whiteLogo.png"
        // phoneMedia()

        upBtn.style.display = "block"
        
    }
    else{
        nav[0].style.backgroundColor= 'rgba(255, 255, 255)'
        for(let i=0 ; i<titles.length ; i++){
            titles[i].style.color = 'black'
        }
        for(let i=0 ; i<phoneNav.length ;i++)
        phoneNav[i].style.backgroundColor = "black"

       
        mainLogo.src = "../pics/blackLogo.png"
        // phoneMedia()

        upBtn.style.display = "none"
    }

    // -------------------------

    if(window.scrollY >= 332){
        imgBox[0].style.left = "0px"
        textBox[0].style.right = "0px"
    }

    if(window.scrollY >= 820){
        imgBox[1].style.left = "0px"
        textBox[1].style.right = "0px"
    }
    if(window.scrollY >= 1473){
        imgBox[2].style.left = "0px"
        textBox[2].style.right = "0px"
    }

}

function phoneMedia(){
    if( document.documentElement.clientWidth <= 743){
        for(let i=0 ; i<titles.length ; i++){
            titles[i].style.color = 'white'
            navPhone.style.backgroundColor = 'black'
        }
    }
}



let likes = document.querySelectorAll(".like")
let clicked = false

let likesArray = Array.from(likes)

likesArray.forEach(function(ele){
    ele.onclick = function(){
        let thumb = ele.getElementsByClassName("my-icon")[0]
    
        if(clicked===false){
            thumb.classList.remove("fa-thumbs-down")
            thumb.classList.add("fa-thumbs-up")
            
            thumb.style.color = "green"
            clicked = true
        }
        else if(clicked){
            thumb.style.color = "red"
            thumb.classList.remove("fa-thumbs-up")
            thumb.classList.add("fa-thumbs-down")
            clicked = false
        }
    }
})





// ------------------------- The form 


let inputs = document.querySelectorAll(".form-section input")
let labels = document.querySelectorAll(".form-section label")
let alertBox = document.getElementsByClassName("test-data")[0]

let firstName = window.localStorage.getItem("First-name")
let lastName = window.localStorage.getItem("Last-name")
let email = window.localStorage.getItem("email")
let password = window.localStorage.getItem("password")



inputs[0].oninput = function(){
    testData()
}

inputs[1].oninput = function(){
    testData()
}
inputs[2].oninput = function(){
    testData()
}
inputs[3].oninput = function(){
    testData()
}



function testData(){
    console.log("hi");
    if( inputs[0].value === firstName &&
        inputs[1].value === lastName&& 
        inputs[2].value === email &&
        inputs[3].value === password
    ){
        alertBox.style.display = "none"

        for(let i=4 ; i<inputs.length ;i++){
            inputs[i].removeAttribute("disabled")
        }
    }
    else{
        alertBox.style.display = "flex"
        for(let i=4 ; i<inputs.length ;i++){
            inputs[i].setAttribute("disabled")
        }
    }
}

let homeImg = document.getElementById("image-home")
let imgOwner = document.getElementById("img-owner")
homeImg.onchange = function(){
    let file = new FileReader()
    file.readAsDataURL(homeImg.files[0])

    file.onload = function(){
        imgOwner.src = file.result
    }
}
