
// window.addEventListener("load",()=>{
const quoteText = document.querySelector(".quote")
const authorName = document.querySelector(".name")
const firstPage = document.getElementById("first-part")
const secondPage = document.getElementById("second-part")

fetch("https://type.fit/api/quotes")
    .then((response) => response.json())
    .then((data) => {
        const formatedData = data
        console.log(formatedData,"DATA")
        let index = 0
        
       setInterval(() => {
        index += 1
        quoteText.innerHTML = formatedData[index].text
        authorName.innerHTML =  formatedData[index].author
        console.log(index,"INDEX")
      }, 7000);
    
    setTimeout()
    }).catch((err) => console.log(err, "quotes are not found"))



 setTimeout(() => {
     secondPage.classList.remove('hidden')
       firstPage.classList.add('hidden')
 }, 5000);

const iconBtn = document.querySelector(".heart-icon");
iconBtn.onclick = function () {
    iconBtn.classList.toggle("active");
}