//getElementById()
const title = document.getElementById("main-heading")
//getElementByClassName()
const listItems = document.getElementsByClassName("list-item")
//getElementByTagName()
const listItems2 = document.getElementsByTagName("li")
//.querySelector()
const listItems3 = document.querySelector("div") //.querySelector select only the first element
//.querySelectorAll()
const listItems4 = document.querySelectorAll("div")//.querySelectorAll select all elements
    //it's better than using getElementById becuase  i am sure that i'll take the first element

//DOM MANIPULATION
const title2 = document.querySelector("#main-heading");
title.style.color = "white";
    //in this way we can change the color of the title

const listItems5 = document.querySelectorAll("li");
for(i = 0; i < listItems5.length; i++){
    listItems5[i].style.fontSize = "20px";
}
    //in this way we can change the font size of the list items

const ul = document.querySelector("ul");
const li = document.createElement("li");//in this way we can create a new li element
ul.append(li) //in this way we can add a new li to the ul
const firstListI = document.querySelector("list-item");

    //there are three main way to select text from the DOM
console.log(firstListI.innerText) //only shows the content "human readable" text
console.log(firstListI.textContent) //it shows the content respectin spaces form the html file
console.log(firstListI.innerHTML) //get everything, tag too
    //innerHTML can be dangerous because it displays the content in the html file

ul.append(li);
li.innerText = "X-men" //in this way we can add a new li to the ul and the text is "X-men"
    //we can format the text in the li element in this ways:
li.setAttribute("id","main-heading") //this add to li the property of the main-heading id/(class)
li.removeAttribute("main-heading") //this remove the property of the main-heading id/(class)

const title = document.querySelector("#main-heading");
console.log






