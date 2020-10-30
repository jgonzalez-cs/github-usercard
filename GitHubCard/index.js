/*  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name> */

import axios from "axios"; 

// JavaScript gives us an object that represents the future value(s) that we want (A PROMISE)

console.log("1. About to fetch data with axios")

axios.get("https://api.github.com/users/jgonzalez-cs") // invoke the function that returns the promise
    .then(futureData => { // chain a .then()
        // future code for when data arrives
        // freedom to assume data is here
        console.log("2. Here is the future data", futureData) 
        console.log("Here is the RESPONSE BODY", futureData.data)
    })
    .catch(drama => {
        //handle the error
        console.log(drama)
    }) // to hand le the possibility of errors

console.log("3. We requested data with axios")

const result = axios.get("https://api.github.com/users/jgonzalez-cs")
console.log("I AM THE RESULT", result)
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

console.log(result)

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

// const followersArray = [];

// Step 3
function cardMaker(obj) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("card")

    const newImage = document.createElement("img");
    newImage.setAttribute("src", obj.data.avatar_url)

    const secondDiv = document.createElement("div");
    secondDiv.classList.add("card-info");

    newDiv.appendChild(newImage);
    newDiv.appendChild(secondDiv);

    const h3 = document.createElement("h3");
    h3.classList.add("name");
    h3.textContent = obj.data.login;
    newDiv.appendChild(h3)
    
    return newDiv
}
console.log("I AM THE RESULT", result)
const newCard = cardMaker(result);
console.log(newCard);

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
