// Dades per llenguatges
var tagsHTML = {
    "html": "Defineix la pàgina HTML.",
    "head": "Conté metadades del document.",
    "title": "Defineix el títol del document.",
    "meta": "Defineix metadades com charset o viewport.",
    "link": "Enllaça fitxers externs (com CSS).",
    "script": "Insereix codi JavaScript.",
    "style": "Defineix estils CSS dins del document.",
    "body": "Conté el contingut visible de la pàgina.",
    "header": "Defineix una capçalera per una secció o pàgina.",
    "footer": "Defineix un peu de pàgina o secció.",
    "main": "Conté el contingut principal de la pàgina.",
    "section": "Defineix una secció del document.",
    "article": "Defineix contingut independent i auto-contenidor.",
    "nav": "Defineix un menú de navegació.",
    "aside": "Defineix contingut lateral o relacionat.",
    "h1": "Defineix un títol principal.",
    "h2": "Defineix un títol secundari.",
    "h3": "Defineix un títol terciari.",
    "h4": "Defineix un títol quart.",
    "h5": "Defineix un títol cinquè.",
    "h6": "Defineix un títol sisè.",
    "p": "Defineix un paràgraf.",
    "ul": "Defineix una llista no ordenada.",
    "ol": "Defineix una llista ordenada.",
    "li": "Defineix un element de llista.",
    "a": "Defineix un enllaç.",
    "img": "Defineix una imatge.",
    "table": "Defineix una taula.",
    "tr": "Defineix una fila dins d’una taula.",
    "td": "Defineix una cel·la de dades dins d’una taula.",
    "th": "Defineix una cel·la d’encapçalament dins d’una taula.",
    "form": "Defineix un formulari HTML.",
    "input": "Defineix un camp d'entrada.",
    "button": "Defineix un botó clicable.",
    "textarea": "Defineix un àrea d’entrada de text.",
    "label": "Defineix una etiqueta per un element de formulari.",
    "select": "Defineix un desplegable.",
    "option": "Defineix una opció dins d’un desplegable.",
    "iframe": "Defineix un marc embegut.",
    "canvas": "Defineix un espai per a gràfics en 2D.",
    "svg": "Defineix gràfics vectorials escalables."
};


var tagsCSS = {
    "color": "Defineix el color del text.",
    "background-color": "Defineix el color de fons.",
    "width": "Defineix l'amplada de l'element.",
    "height": "Defineix l'altura de l'element.",
    "margin": "Espai extern al voltant d’un element.",
    "padding": "Espai intern dins d’un element.",
    "border": "Defineix el contorn de l'element.",
    "font-size": "Defineix la mida del text.",
    "font-family": "Defineix la tipografia del text.",
    "text-align": "Defineix l'alineació del text (esquerra, centre, etc.).",
    "display": "Defineix com es mostra l'element (block, inline, etc.).",
    "position": "Defineix la posició d'un element (relative, absolute, fixed, etc.).",
    "top": "Defineix la distància des de la part superior.",
    "left": "Defineix la distància des de la part esquerra.",
    "z-index": "Defineix l'ordre de superposició.",
    "overflow": "Controla el desbordament del contingut.",
    "cursor": "Defineix el tipus de cursor.",
    "box-shadow": "Defineix una ombra per a l'element.",
    "transition": "Defineix animacions suaus.",
    "transform": "Defineix transformacions com rotació o escala."
};


var tagsJS = {
    "var": "Declara una variable (global o funció).",
    "let": "Declara una variable de bloc.",
    "const": "Declara una variable constant.",
    "function": "Declara una funció.",
    "if": "Control condicional.",
    "else": "Alternativa en una condició.",
    "for": "Crea un bucle que itera.",
    "while": "Crea un bucle basat en condició.",
    "console.log": "Mostra un missatge a la consola.",
    "document.querySelector": "Selecciona un element HTML.",
    "document.getElementById": "Selecciona un element per ID.",
    "addEventListener": "Afegeix un gestor d'esdeveniments.",
    "Math.random": "Genera un número aleatori.",
    "Math.floor": "Arrodoneix un número cap avall.",
    "setTimeout": "Executa una funció després d'un temps.",
    "setInterval": "Executa una funció repetidament.",
    "alert": "Mostra un missatge d'alerta.",
    "prompt": "Mostra un diàleg d'entrada."
};


var tagsPython = {
    "print": "Mostra text a la consola.",
    "def": "Declara una funció.",
    "if": "Control condicional.",
    "for": "Crea un bucle.",
    "import": "Importa mòduls o biblioteques."
};

var tagsLogo = {
    "forward": "Mou la tortuga cap endavant.",
    "backward": "Mou la tortuga cap enrere.",
    "right": "Gira la tortuga cap a la dreta.",
    "left": "Gira la tortuga cap a l’esquerra.",
    "penup": "Aixeca el llapis per no dibuixar."
};

var tagsKarel = {
    "move": "Mou Karel una casella endavant.",
    "turnLeft": "Gira Karel cap a l’esquerra.",
    "pickBeeper": "Recull un beeper.",
    "putBeeper": "Deixa un beeper.",
    "frontIsClear": "Comprova si el camí al davant és lliure."
};

// Funcions i esdeveniments
var checkButton = document.getElementById("checkButton");
var showTagsButton = document.getElementById("showTagsButton");
var textArea = document.getElementById("textArea");
var resultat = document.getElementById("resultat");
var llenguatge = document.getElementById("llenguatge");

function obtenirTags(lang) {
    if (lang === "html") return tagsHTML;
    if (lang === "css") return tagsCSS;
    if (lang === "js") return tagsJS;
    if (lang === "python") return tagsPython;
    if (lang === "logo") return tagsLogo;
    if (lang === "karel") return tagsKarel;
    if (lang === "tots") {
        return Object.assign({}, tagsHTML, tagsCSS, tagsJS, tagsPython, tagsLogo, tagsKarel);
    }
    return {};
}

// Comprovar un concepte
checkButton.addEventListener("click", function() {
    var lang = llenguatge.value;
    var tags = obtenirTags(lang);
    var entrada = textArea.value.trim().toLowerCase();
    if (tags[entrada]) {
        resultat.textContent = `${entrada} (${lang.toUpperCase()}): ${tags[entrada]}`;
    } else {
        resultat.textContent = "Aquest concepte no està definit o no és vàlid.";
    }
});

// Mostrar tots els conceptes
showTagsButton.addEventListener("click", function() {
    var lang = llenguatge.value;
    var tags = obtenirTags(lang);
    var llista = Object.keys(tags).join(", ");
    resultat.textContent = `Conceptes disponibles (${lang.toUpperCase()}): ${llista}`;
});
