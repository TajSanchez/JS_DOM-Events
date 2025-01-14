/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */

document.getElementById("node1").innertext = "I used the getElementById (\"node1\") method to access this";
document.getElementsByClassName("node2")[0].innertext = 'I used the getElementsByClassName("node2")method to access this';

const h3Nodes = document.getElementsByTagName("h3");
for (let node of h3Nodes) {
    node.innerText = 'I used the getElementByTagName("h3") method to access all of these';
}



/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this element.createElement() and put this text inside "This node was created using the createElement() method"
// TODO: Append the created node to the parent node using the element.appendChild() method

// TODO: Create a <a> element using this element.createElement() and put this text inside "I am a <p> tag"
// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method

// BONUS: Add a link href to the <a>

const p = document.createElement("p");
p.innerText = "I am a p element";
const parent = document.getElementById("parent");
parent.appendChild(p);
const a = document.createElement("VisitMe");
a.innerText = "Visit me";
parent.insertBefore(a, p);



/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

//TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
const newP = document.createElement("p");
newP.innerText = "New Child Node";
// TODO: Remove the "New Child Node"
const exercise3 = document.getElementById("exercise3");
exercise3.replaceChild(newP, document.getElementById("N1"));

/*----------- Exercise #4: ANIMATIONS ----------- */

// TODO: Write your JavaScript here to make the red box go from right to left
// BONUS - Make the red box go all the way around the perimeter of the green box */

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
