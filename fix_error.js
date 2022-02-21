console.log("Loaded Module 1 (Wiiki Fixer)");
var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedfix = text.replace('Fixed error', 'made a stupid edit');

            if (replacedfix !== text) {
                element.replaceChild(document.createTextNode(replacedfix), node);
            }

        }
    }
}
