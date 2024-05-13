function bigger() {
    //alert("Hello, world!");
    document.getElementById("textArea").style.fontSize = "4em";
}

function changeStyle() {
    var textArea = document.getElementById("textArea");
    if (document.getElementById("fancyShmancy").checked) {
        alert("You're fancy1");
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    }
    else if (document.getElementById("boringBetty").checked) {
        alert("So boring...");
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function moo() {
    var textArea = document.getElementById("textArea");
    var sentences = textArea.value.toUpperCase().split(".");
    for (var i = 0; i < sentences.length; i++) {
        var words = sentences[i].trim().split(" ");
        if (words.length > 1) {
            words[words.length - 1];  // Append "-Moo" to the last word
        }
        sentences[i] = words.join(" ");
    }
    textArea.value = sentences.join(". -Moo") + (textArea.value.endsWith('.') ? '.' : '');
}