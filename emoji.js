// 1) Make a regular expression ("regex") to find emoji (just one here)
var regex = /(?:\uD83D\uDE0D)/g;

// 2) Find the text of the element with the id "emojify"
var emojifyElement = document.getElementById("emojify");
var elementString = emojifyElement.innerHTML;

// 3) Use the Regex on the HTML element string
var match = regex.exec(elementString);

// 4) Make a new image element with the desired image
var img = new Image();
img.setAttribute('draggable', 'false');
img.className = "emojified";
img.alt = match[0];
img.src = "https://abs.twimg.com/emoji/v2/72x72/1f60d.png";

// 5) replace the emoji with the new img element, and update the DOM
emojifyElement.innerHTML = elementString.replace(regex, img.outerHTML);
