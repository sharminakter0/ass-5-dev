// submit1
document.getElementById("submit1")
.addEventListener("click", function(event){
    alert("Board Updated sucessfully ")
   const total= document.getElementById("Assingd").innerText;
   //console.log (typeof total)
  const result = taskAssinged(total);
  //console.log (result)
   
document.getElementById("Assingd").innerText = result;
 const inactive = document.getElementById("submit1")
 inactive.disabled = true;
//  inactive.innerText = disabled;
const pointAdd1 = document.getElementById("point").innerText
const pointResult  = pointAdd(pointAdd1);
//console.log ( pointResult ,"hi");

document.getElementById('point').innerText =pointResult;
const commentDiv =document.getElementById('comment');
const newElement = document.createElement('p');
newElement.classList.add ("comment-background")
// const hour = now.getHours();
// console.log ('hour')

newElement.textContent ="  You have compelete the task mobile fix issue at  "
newElement.textContent += time();
//newElement.style.color = "red"
 commentDiv.appendChild(newElement)
})

// submit2
document.getElementById("submit2")
.addEventListener("click", function(event){
    alert("Board Updated sucessfully ")
   const total= document.getElementById("Assingd").innerText;
   //console.log (typeof total)
  const result = taskAssinged(total);
  //console.log (result)
   
document.getElementById("Assingd").innerText = result;
 const inactive = document.getElementById("submit2")
 inactive.disabled = true;
//  inactive.innerText = disabled;
const pointAdd1 = document.getElementById("point").innerText
const pointResult  = pointAdd(pointAdd1);
//console.log ( pointResult ,"hi");

document.getElementById('point').innerText =pointResult;
const commentDiv =document.getElementById('comment');
const newElement = document.createElement('p');
newElement.classList.add ("comment-background")
// const hour = now.getHours();
// console.log ('hour')

newElement.textContent ="  You have compelete the task Add Dark Mode at  "
newElement.textContent += time();
//newElement.style.color = "red"
 commentDiv.appendChild(newElement)
})
// submit3
document.getElementById("submit3")
.addEventListener("click", function(event){
    alert("Board Updated sucessfully ")
   const total= document.getElementById("Assingd").innerText;
   //console.log (typeof total)
  const result = taskAssinged(total);
  //console.log (result)
   
document.getElementById("Assingd").innerText = result;
 const inactive = document.getElementById("submit3")
 inactive.disabled = true;
//  inactive.innerText = disabled;
const pointAdd1 = document.getElementById("point").innerText
const pointResult  = pointAdd(pointAdd1);
//console.log ( pointResult ,"hi");

document.getElementById('point').innerText =pointResult;
const commentDiv =document.getElementById('comment');
const newElement = document.createElement('p');
newElement.classList.add ("comment-background")
// const hour = now.getHours();
// console.log ('hour')

newElement.textContent ="  You have compelete the task Optimize Home page at  "
newElement.textContent += time();
//newElement.style.color = "red"
 commentDiv.appendChild(newElement)
})
// submit4
document.getElementById("submit4")
.addEventListener("click", function(event){
    alert("Board Updated sucessfully ")
   const total= document.getElementById("Assingd").innerText;
   //console.log (typeof total)
  const result = taskAssinged(total);
  //console.log (result)
   
document.getElementById("Assingd").innerText = result;
 const inactive = document.getElementById("submit4")
 inactive.disabled = true;
//  inactive.innerText = disabled;
const pointAdd1 = document.getElementById("point").innerText
const pointResult  = pointAdd(pointAdd1);
//console.log ( pointResult ,"hi");

document.getElementById('point').innerText =pointResult;
const commentDiv =document.getElementById('comment');
const newElement = document.createElement('p');
newElement.classList.add ("comment-background")
// const hour = now.getHours();
// console.log ('hour')

newElement.textContent ="  You have compelete the task Add new emoji 🤲 at  "
newElement.textContent += time();
//newElement.style.color = "red"
 commentDiv.appendChild(newElement)
})
// submit5
document.getElementById("submit5")
.addEventListener("click", function(event){
    alert("Board Updated sucessfully ")
   const total= document.getElementById("Assingd").innerText;
   //console.log (typeof total)
  const result = taskAssinged(total);
  //console.log (result)
   
document.getElementById("Assingd").innerText = result;
 const inactive = document.getElementById("submit5")
 inactive.disabled = true;
//  inactive.innerText = disabled;
const pointAdd1 = document.getElementById("point").innerText
const pointResult  = pointAdd(pointAdd1);
//console.log ( pointResult ,"hi");

document.getElementById('point').innerText =pointResult;
const commentDiv =document.getElementById('comment');
const newElement = document.createElement('p');
newElement.classList.add ("comment-background")
// const hour = now.getHours();
// console.log ('hour')

newElement.textContent ="  You have compelete the task Integrate OpenAI API at  "
newElement.textContent += time();
//newElement.style.color = "red"
 commentDiv.appendChild(newElement)
})
// submit6
document.getElementById("submit6")
.addEventListener("click", function(event){
    alert("Board Updated sucessfully ")
    alert( " congratulation you are sucessfull added all the task")
   const total= document.getElementById("Assingd").innerText;
   //console.log (typeof total)
  const result = taskAssinged(total);
  //console.log (result)
   
document.getElementById("Assingd").innerText = result;
 const inactive = document.getElementById("submit6")
 inactive.disabled = true;
//  inactive.innerText = disabled;
const pointAdd1 = document.getElementById("point").innerText
const pointResult  = pointAdd(pointAdd1);
//console.log ( pointResult ,"hi");

document.getElementById('point').innerText =pointResult;
const commentDiv =document.getElementById('comment');
const newElement = document.createElement('p');
newElement.classList.add ("comment-background")

newElement.textContent ="  You have compelete the taskImprove Job searching at  "
newElement.textContent += time();
//newElement.style.color = "red"
 commentDiv.appendChild(newElement)
})

//History section

document.getElementById("clear-button")
.addEventListener("click", function(event){
    //alert();
    const divClear = document.getElementById("comment");
    divClear.innerHTML =  " ";





})
//date time
const setTime = document.getElementById("dateTime");
setTime.innerText = date();

