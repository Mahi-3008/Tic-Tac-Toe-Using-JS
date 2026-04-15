function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid; // ="1"=> 1
    playerConfigOverlayElement.style.display = "block";
    backDropElement.style.display = "block";
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = "none";
    backDropElement.style.display = "none";
    formElement.firstElementChild.classList.remove("error");
    errorsOutputElement.textContent = "";
    formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
   event.preventDefault();
   const formData = new FormData(event.target);
   const enteredPlayername = formData.get("playername").trim();//trim()=> "     "=>"" or "    mahesh    " => "mahesh"

   if (!enteredPlayername) { //enteredPlayername === ""
      event.target.firstElementChild.classList.add("error");
      errorsOutputElement.textContent = "Please enter a valid name!";
      return;
   }
   
   const updatedPlayerDataElement = document.getElementById("player-" + editedPlayer + "-data");
   updatedPlayerDataElement.children[1].textContent = enteredPlayername;

//    if (editedPlayer === 1) {
//     player[0].name = enteredPlayername;
//    } else {
//     player[1].name = enteredPlayername;
//    }

   players[editedPlayer - 1].name = enteredPlayername; 

   closePlayerConfig();
}

