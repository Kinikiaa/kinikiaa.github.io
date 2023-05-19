function biggerText() {
  document.getElementById("textInput").style.fontSize = "24pt";
}

function applyStyles() {
  var textarea = document.getElementById("textInput");
  var fancyRadio = document.getElementById("fancyRadio");
  var boringRadio = document.getElementById("boringRadio");

  if (fancyRadio.checked) {
    textarea.style.fontWeight = "bold";
    textarea.style.color = "blue";
    textarea.style.textDecoration = "underline";
  } else if (boringRadio.checked) {
    textarea.style.fontWeight = "normal";
    textarea.style.color = "";
    textarea.style.textDecoration = "";

  }
}
function handleRadioChange() {
  alert("Radio button changed!");
}

function uppercaseAndMoo() {
  var textarea = document.getElementById("textInput");
  var text = textarea.value;
  var sentences = text.split(". ");

  for (var i = 0; i < sentences.length; i++) {
    var words = sentences[i].split(" ");
    var lastWordIndex = words.length - 1;
    words[lastWordIndex] = words[lastWordIndex].toUpperCase() + "-Moo";
    sentences[i] = words.join(" ");
  }

  textarea.value = sentences.join(". ");
}