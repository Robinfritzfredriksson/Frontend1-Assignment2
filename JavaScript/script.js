
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++)
{
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

// Create a new list item when clicking on the "Lägg till" button
function newElement() {
  var li = document.createElement("li");
  var xGetOneTodoObject = getOneTodoObject();
  var todolist = [xGetOneTodoObject];
  todoText= document.getElementById("myInput").value;
  todoDate=document.getElementById("myDate").value;
  todoCategory=document.getElementById("selectedTodoCategory").value;
  var t = document.createTextNode(todoText + " --- " + todoDate + " --- " + todoCategory);
  li.appendChild(t);
  if (todoText === '') {
    alert("You must write something!");
  } else {
    let currentDate = new Date().toISOString().substring(0, 10);
    if(todoDate < currentDate)
    {
      li.style.color = "red";
      document.getElementById("myUL").appendChild(li);
    }else{
      document.getElementById("myUL").appendChild(li);
    }
  }
  document.getElementById("myInput").value = "";
  
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// Enter key todo //
function todoEnterKeyPressed(event) 
{
  if (event.keyCode == 13) {
     console.log("Enter key is pressed");
     newElement();
  } 
}

// Filter function
function myFilterFunction() 
{
  // Declare variables
  var input, filter, ul, li, a, i, txtValue, xCategory;
  input = document.getElementById("myFilterInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li"); //ändra här enligt sebbe
  xCategory = document.querySelector('input[name="todoCategory"]:checked').value;
  if(xCategory === "All"){xCategory = ""}
  
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) 
  {
    a = li[i];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(xCategory) > -1)
    {
      if (txtValue.toUpperCase().indexOf(filter) > -1) 
      {
        li[i].style.display = "";
      }else {
        li[i].style.display = "none";
      } 
    }else {
      li[i].style.display = "none";
    }
  }
}

function localDate()
{
  let currentDate = new Date().toISOString().substring(0, 10); //let är localt och var är accessbart i hela koden
  document.getElementById('myDate').defaultValue = currentDate;
}

function getOneTodoObject()
{
  var oneTodoObject = { 
    todoText: document.getElementById("myInput").value,
    todoDate: document.getElementById("myDate").value,
    todoCategory: document.getElementById("selectedTodoCategory").value
  };
  return oneTodoObject;
}