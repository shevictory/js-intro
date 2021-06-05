const h1IdElement = document.getElementById("pageHead");
const userInfoClassElement = document.getElementsByClassName("userInfo");
const liElenent = document.getElementsByTagName("li");
const namedElement = document.getElementsByName("firstName");

const selectorElement = document.querySelector("li");
const selectorAll0Element = document.querySelectorAll("li");

/**
 * EventTarget
 */

const buttonElement = document.querySelector("button");

buttonElement.addEventListener("click", buttonClickHandler);

/**
 *
 * @param {MouseEvent} event
 */
function buttonClickHandler(event) {
  alert("Hello from onClickHandler");
  console.log(`event`, event);
}
