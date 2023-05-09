let nextBtn = document.getElementsByClassName("next-btn")[0]
let imprtantInfo = document.getElementsByClassName("imprtant-info")[0]


let registerBox = document.querySelector(".register")

let validat = false

// Account Type Side ====================

let accountType = document.createElement("div")
accountType.setAttribute("class","accountType")
let accountTitle = document.createElement("h2")
accountTitle.appendChild(document.createTextNode("Choose Account Type"))

let personImg = document.createElement("img")
personImg.src = "profile.png"
let brokerImg = document.createElement("img")
brokerImg.src = "brocker.png"

let brokerType = document.createElement("div")
brokerType.setAttribute("class","brokerType")
brokerType.appendChild(document.createTextNode("broker"))
let normalPerson = document.createElement("div")
normalPerson.setAttribute("class","normalPerson")
normalPerson.appendChild(document.createTextNode("Normal Person"))

normalPerson.appendChild(personImg)
brokerType.appendChild(brokerImg)

let TypeBox =  document.createElement("div") 
TypeBox.setAttribute("class","TypeBox") 
TypeBox.appendChild(brokerType)
TypeBox.appendChild(normalPerson)

accountType.appendChild(accountTitle)
accountType.appendChild(TypeBox)

normalPerson.onclick = ()=>{
    normalPerson.style.backgroundColor ="rgb(217, 217, 241)"
    brokerType.style.backgroundColor ="white"
    nextBtnControl()
}
brokerType.onclick = ()=>{
    brokerType.style.backgroundColor ="rgb(217, 217, 241)"
    normalPerson.style.backgroundColor ="white"
    nextBtnControl()
}


//============================================

// Name info Side ====================

let nameInfo = document.createElement("div")
let inputsBox = document.createElement("div")
inputsBox.setAttribute("class","inputsBox")
nameInfo.setAttribute("class","accountType")
let nameTitle = document.createElement("h2")
nameTitle.appendChild(document.createTextNode("Full Your Name"))
let FirstNameLabel = document.createElement("label")
FirstNameLabel.appendChild(document.createTextNode("First Name"))
let LastNameLabel = document.createElement("label")
LastNameLabel.appendChild(document.createTextNode("Last Name"))
let inputFirstNameInput = document.createElement("input")
let inputLastNameInput = document.createElement("input")




nameInfo.appendChild(nameTitle)
inputsBox.appendChild(FirstNameLabel)
inputsBox.appendChild(inputFirstNameInput)
inputsBox.appendChild(LastNameLabel)
inputsBox.appendChild(inputLastNameInput)
nameInfo.appendChild(inputsBox)

inputFirstNameInput.onfocus = function(){
    FirstNameLabel.style.top = '0px'
}

inputFirstNameInput.onmouseleave = function(){
    if(inputFirstNameInput.value == ''){
        FirstNameLabel.style.top = '30px'
    }
}

inputLastNameInput.onfocus = function(){
    LastNameLabel.style.top = '0px'
}
inputLastNameInput.onmouseleave = function(){
    if(inputLastNameInput.value == ''){
        LastNameLabel.style.top = '30px'
    }
}

inputLastNameInput.oninput = function(){
    if(inputLastNameInput.value.length>3 && inputFirstNameInput.value.length>3 ){
        nextBtnControl()
    }
    else{
        nextBtnDefault()
    }
    
}
inputFirstNameInput.oninput = function(){
    if(inputLastNameInput.value.length>3 && inputFirstNameInput.value.length>3 ){
        nextBtnControl()
    }
    else{
        nextBtnDefault()
    }
    
}



//============================================

// Contact info Side ====================

let ContactInfo = document.createElement("div")
let contactBox = document.createElement("div")
contactBox.setAttribute("class","inputsBox")
ContactInfo.setAttribute("class","accountType")
let contactTitle = document.createElement("h2")
contactTitle.appendChild(document.createTextNode("Your Contact"))
let emailLabel = document.createElement("label")
emailLabel.appendChild(document.createTextNode("Email"))
let phoneLabel = document.createElement("label")
phoneLabel.appendChild(document.createTextNode("Phone Number"))
let emailInput = document.createElement("input")
let phoneInput = document.createElement("input")
phoneInput.setAttribute("id","phone")
phoneLabel.setAttribute("for","phone")
emailInput.setAttribute("id","email")
emailLabel.setAttribute("for","email")
emailInput.setAttribute("type","email")



//===============





//==============


ContactInfo.appendChild(contactTitle)
contactBox.appendChild(emailLabel)
contactBox.appendChild(emailInput)
contactBox.appendChild(phoneLabel)
contactBox.appendChild(phoneInput)
ContactInfo.appendChild(contactBox)


emailInput.oninput = function(){
    let emailRegEx = /\w+@\w+\.\w+/ig

    if(!emailRegEx.test(emailInput.value)){
        emailLabel.style.color = 'red'
    }
    else{
        emailLabel.style.color = 'rgb(65, 65, 65)'
    }
}


emailInput.onfocus = function(){
    emailLabel.style.top = '0px'

}

emailInput.onmouseleave = function(){
    if(emailInput.value == ''){
        emailLabel.style.top = '30px'
    }

    
}

phoneInput.onfocus = function(){
    phoneLabel.style.top = '0px'
}
phoneInput.onmouseleave = function(){
    if(phoneInput.value == ''){
        phoneLabel.style.top = '30px'
    }
}

emailInput.oninput = function(){
    if(emailInput.value.length>3 && phoneInput.value.length>3 ){
        nextBtnControl()
    }
    else{
        nextBtnDefault()
    }
    
}
phoneInput.oninput = function(){
    if(emailInput.value.length>3 && phoneInput.value.length>3 ){
        nextBtnControl()
    }
    else{
        nextBtnDefault()
    }
    
}


//============================================

// Password Side ====================
let passwordInfo = document.createElement("div")
let passwordBox = document.createElement("div")
passwordBox.setAttribute("class","inputsBox")
passwordInfo.setAttribute("class","accountType")
let passwordTitle = document.createElement("h2")
passwordTitle.appendChild(document.createTextNode("Your Password"))
let passwordLabel = document.createElement("label")
passwordLabel.appendChild(document.createTextNode("Password"))
let confirmeLabel = document.createElement("label")
confirmeLabel.id = "confirmeLabel"
confirmeLabel.appendChild(document.createTextNode("Confirme Password"))
let passwordInput = document.createElement("input")
let confirmeInput = document.createElement("input")
passwordInput.setAttribute("id","password")
passwordLabel.setAttribute("for","password")
confirmeInput.setAttribute("id","confirme")
confirmeLabel.setAttribute("for","confirme")
passwordInput.setAttribute("type","password")
confirmeInput.setAttribute("type","password")

let showPassword = document.createElement("p")
showPassword.appendChild(document.createTextNode("show"))
showPassword.setAttribute("class","showPassword")

let p1 = document.createElement("p")
p1.appendChild(document.createTextNode("Min 9 Charachters"))
let p2 = document.createElement("p")
p2.appendChild(document.createTextNode("Min 2 Numbers"))
let p3 = document.createElement("p")
p3.appendChild(document.createTextNode("Min 2 sampols"))

// ====================

let lettersArray = []
let numbersArray = []
let symbolsArray = []


passwordInput.oninput = function(){
  

  let regExpSymbo = /\W/ig
  let regExpLetters = /[a-zA-Z]/ig
  let regExpNumbers = /\d/ig

lettersArray.push(passwordInput.value.match(regExpLetters))
numbersArray.push(passwordInput.value.match(regExpNumbers))
symbolsArray.push(passwordInput.value.match(regExpSymbo))



if(lettersArray[lettersArray.length-1] ===null){
  lettersArray[lettersArray.length-1] = []
}
if(numbersArray[numbersArray.length-1] ===null){
  numbersArray[numbersArray.length-1] = []
}
if(symbolsArray[symbolsArray.length-1] ===null){
  symbolsArray[symbolsArray.length-1] = []
}

passwordValidation(lettersArray[lettersArray.length-1],numbersArray[numbersArray.length-1],symbolsArray[symbolsArray.length-1])


// for the next btn
if(passwordInput.value.length>3 && confirmeInput.value.length>3 ){
    nextBtnControl()
}
else{
    nextBtnDefault()
}


}

function passwordValidation(letters, numbers , symbols){

    console.log("hi");

if(letters.length >= 9){
  p1.style.color = 'green'
}
else{
  p1.style.color = 'red'
}

if(numbers.length >= 2){
  p2.style.color = 'green'
}
else{
  p2.style.color = 'red'
}
if(symbols.length >= 2){
  p3.style.color = 'green'
}
else{
  p3.style.color = 'red'
}

}


// ====================



passwordInfo.appendChild(passwordTitle)
passwordBox.appendChild(showPassword)
passwordBox.appendChild(passwordLabel)
passwordBox.appendChild(passwordInput)
passwordBox.appendChild(p1)
passwordBox.appendChild(p2)
passwordBox.appendChild(p3)
passwordBox.appendChild(confirmeLabel)
passwordBox.appendChild(confirmeInput)
passwordInfo.appendChild(passwordBox)

let changePasswordType = true
showPassword.onclick = function(){
    if(changePasswordType){
        passwordInput.type = 'text'
        changePasswordType = false
        showPassword.innerHTML = "hide"
    }
    else{
        passwordInput.type = 'password'
        changePasswordType = true
        showPassword.innerHTML = "show"
    }
    
}

passwordInput.onfocus = function(){
    passwordLabel.style.top = '0px'
  
}

passwordInput.onmouseleave = function(){
    if(passwordInput.value == ''){
        passwordLabel.style.top = '30px'
        
    }
}

confirmeInput.onfocus = function(){
    confirmeLabel.style.top = '0px'
   
}
confirmeInput.onmouseleave = function(){
    if(confirmeInput.value == ''){
        confirmeLabel.style.top = '30px'
      
    }
}

confirmeInput.oninput = function(){
    if(passwordInput.value.length>3 && confirmeInput.value.length>3 && confirmeInput.value == passwordInput.value ){
        nextBtnControl()
        imprtantInfo.innerHTML = `<p>important information to fill out <br>for the next step</p>`
    }
    else{
        imprtantInfo.innerHTML = "You Password confirmation is wrong"
        nextBtnDefault()
    }
    
}
//============================================


// Image Side ====================
let ImageProfile = document.createElement("div")
ImageProfile.setAttribute("class","accountType")
let imageTitle = document.createElement("h2")
imageTitle.appendChild(document.createTextNode("Your Image"))
let uploadImageBox = document.createElement("div")
uploadImageBox.setAttribute("class","uploadImageBox")

let profileImag = document.createElement("img")
profileImag.src = "profile.png"

let uploadInput = document.createElement("input")
uploadInput.type = "file"
uploadInput.id = "imageFile"
uploadInput.style.display = 'none'
let uploadLabel = document.createElement("label")
uploadLabel.setAttribute("for","imageFile")
uploadLabel.className = "imgLabel"
uploadLabel.appendChild(document.createTextNode("Upload image"))

uploadInput.onchange = function(){
    let file = new FileReader()
    file.readAsDataURL(uploadInput.files[0])

    file.onload = function(){
        profileImag.src = file.result
    }
}



ImageProfile.appendChild(imageTitle)
uploadImageBox.appendChild(profileImag)
uploadImageBox.appendChild(uploadInput)
uploadImageBox.appendChild(uploadLabel)
ImageProfile.appendChild(uploadImageBox)

//============================================

// successful creating ====================


let successfulBox = document.createElement("div")
successfulBox.setAttribute("class","successful-box")
let successfulImage = document.createElement("img")

let FirstName = document.createElement("h3")

let LastName = document.createElement("h3")

let theName = document.createElement("div")
theName.appendChild(FirstName)

theName.appendChild(LastName)
theName.setAttribute("class","theNameContainer")
let messageAlert = document.createElement("h1")
messageAlert.innerHTML = "Your Account Created Successfully"
let openBtn = document.createElement("button")
openBtn.innerHTML = "Open"
successfulBox.appendChild(successfulImage)
successfulBox.appendChild(theName)
successfulBox.appendChild(messageAlert)
successfulBox.appendChild(openBtn)
//============================================

registerBox.appendChild(accountType)

let process = document.getElementById("process")

// Next button function Side
let nextDiv = 0
nextBtn.onclick = function(){
    switch (nextDiv){
        case 0 :    nextBtnDefault()
                    registerBox.removeChild(accountType) ;
                    registerBox.appendChild(nameInfo);
                    process.style.width = '25%'
                    
        break;
        case 1 :
            nextBtnDefault()
                registerBox.removeChild(nameInfo) ;
                 registerBox.appendChild(ContactInfo) ;
                 process.style.width = '50%'
                 localStorage.setItem("First-name",inputFirstNameInput.value)
                 localStorage.setItem("Last-name",inputLastNameInput.value)
                 
                
        break;
        case 2 :
                 nextBtnDefault() 
                registerBox.removeChild(ContactInfo) ;
                 registerBox.appendChild(passwordInfo) ;
                 process.style.width = '75%'
                 localStorage.setItem("email",emailInput.value)
                 localStorage.setItem("phone",phoneInput.value)
        break;
        case 3 : 

                registerBox.removeChild(passwordInfo) ;
                 registerBox.appendChild(ImageProfile) ;
                 process.style.width = '100%'
                 nextBtn.innerHTML = 'Create'
                 localStorage.setItem("password",passwordInput.value)
        break;
        case 4 : 
            
                registerBox.removeChild(ImageProfile) ;
                timer()
                
                 this.remove()
                 document.getElementById("haveAccount").remove()
    }

    nextDiv++
}



function nextBtnControl(){
    imprtantInfo.setAttribute("style","display:none;")
    nextBtn.setAttribute("style","display:flex;")
}

function nextBtnDefault(){
    imprtantInfo.setAttribute("style","display:flex;")
    nextBtn.setAttribute("style","display:none;")
    
}


// setTimeout(animationLoading,2000)


function timer(){
    let animationBox = document.createElement("div")
    animationBox.setAttribute("class","circle")
    let loadText = document.createElement("p")
    loadText.innerHTML = "Please with 4s to creat your account"

    let madrid = setTimeout(hola,0);

setTimeout(stoop,5000)

function stoop(){
    clearTimeout(madrid)
    registerBox.removeChild(animationBox)
    registerBox.removeChild(loadText)
    // ----------------------
    FirstName.appendChild(document.createTextNode(localStorage.getItem("First-name")))
    LastName.appendChild(document.createTextNode(localStorage.getItem("Last-name")))
    successfulImage.src = profileImag.src
    registerBox.appendChild(successfulBox)
    localStorage.setItem("profile-image",profileImag.src)
}


function hola(){
    registerBox.appendChild(animationBox)
    registerBox.appendChild(loadText)
}
}

