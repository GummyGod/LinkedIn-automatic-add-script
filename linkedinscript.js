// You can stop the bot for a period of time with this function
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function add() {
  ul = $('ul.mn-pymk-list__cards')[0];
  people = ul.querySelector('li');
  counter = 0; // counts the number of added people
  while(people && counter < 100){ // stops after adding a certain number of persons
    buttonToClick = people.querySelector("button[data-control-name=invite]");
    // verify if there's 'Connect' inside the button
    if (buttonToClick.innerText.includes("Connect")){
      //if so, click and increase counter
      buttonToClick.click();
      counter += 1;
      console.log("Added " + counter + " people.");
    }
    ul.removeChild(people);
    await sleep(1000); // stop for one second
    people = ul.querySelector('li');
  }


//this function can scroll
//   setInterval(function(){
//   var scrollingElement = (document.scrollingElement || document.body);
//   scrollingElement.scrollTop = scrollingElement.scrollHeight;
//   $('[data-control-name="invite"]').click()
//    }, 3000);
// }
add();
