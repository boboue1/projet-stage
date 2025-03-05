const questionsData = {
    HTML: {
      faciles: [
        { question: "Quel élément HTML est utilisé pour les paragraphes ?", options: ["<p>", "<div>", "<h1>", "<span>"], answer: "<p>" },
        { question: "Quel attribut permet d’ajouter une image dans HTML ?", options: ["href", "src", "alt", "link"], answer: "src" },
        { question: "Quelle est la bonne structure de base d'un document HTML ?", options: ["<html><body><head>", "<html><head><body>", "<head><body><html>", "<body><head><html>"], answer: "<html><head><body>" },
        { question: "Quelle balise est utilisée pour un lien hypertexte ?", options: ["<link>", "<a>", "<href>", "<nav>"], answer: "<a>" },
        { question: "Quel élément HTML représente une liste non ordonnée ?", options: ["<ul>", "<li>", "<ol>", "<dl>"], answer: "<ul>" }
      ],
      moyennes: [
        { question: "Quelle balise HTML est utilisée pour les tableaux ?", options: ["<table>", "<tr>", "<td>", "<grid>"], answer: "<table>" },
        { question: "Quel attribut permet d’ajouter du texte alternatif à une image ?", options: ["alt", "title", "desc", "caption"], answer: "alt" },
        { question: "Quel élément HTML permet d’ajouter une vidéo ?", options: ["<vid>", "<video>", "<media>", "<movie>"], answer: "<video>" },
        { question: "Quelle balise est utilisée pour créer un formulaire ?", options: ["<form>", "<input>", "<fieldset>", "<button>"], answer: "<form>" },
        { question: "Quel élément HTML permet d’insérer une ligne horizontale ?", options: ["<hr>", "<line>", "<border>", "<br>"], answer: "<hr>" }
      ],
      difficiles: [
        { question: "Quelle balise est utilisée pour inclure du code JavaScript dans HTML ?", options: ["<script>", "<js>", "<javascript>", "<code>"], answer: "<script>" },
        { question: "Quel attribut permet d'ouvrir un lien dans un nouvel onglet ?", options: ["target='_self'", "target='_blank'", "open='new'", "link='_new'"], answer: "target='_blank'" },
        { question: "Quel élément HTML permet d’intégrer du contenu externe comme une carte Google Maps ?", options: ["<embed>", "<iframe>", "<object>", "<div>"], answer: "<iframe>" },
        { question: "Quel attribut permet d'ajouter un identifiant unique à un élément HTML ?", options: ["class", "id", "name", "key"], answer: "id" },
        { question: "Quelle balise HTML est utilisée pour définir une zone interactive sur une image ?", options: ["<map>", "<area>", "<imgmap>", "<region>"], answer: "<map>" }
      ]
    },
    CSS: {
      faciles: [
        { question: "Quel est le langage utilisé pour styliser une page web ?", options: ["HTML", "CSS", "JavaScript", "PHP"], answer: "CSS" },
        { question: "Quelle propriété CSS est utilisée pour changer la couleur du texte ?", options: ["color", "background-color", "text-color", "font-color"], answer: "color" },
        { question: "Quelle propriété CSS contrôle la taille de la police ?", options: ["text-size", "font-style", "font-size", "size"], answer: "font-size" },
        { question: "Quelle propriété CSS est utilisée pour ajouter une marge extérieure ?", options: ["padding", "border", "margin", "space"], answer: "margin" },
        { question: "Quel sélecteur cible tous les éléments d'une page HTML ?", options: ["*", "#", ".", "all"], answer: "*" }
      ],
      moyennes: [
        { question: "Quelle propriété CSS est utilisée pour changer le type d'affichage d'un élément ?", options: ["display", "visibility", "position", "block"], answer: "display" },
        { question: "Quelle valeur de position permet de fixer un élément même en faisant défiler la page ?", options: ["absolute", "relative", "fixed", "sticky"], answer: "fixed" },
        { question: "Quelle unité est relative à la taille de l'élément parent ?", options: ["px", "em", "%", "rem"], answer: "em" },
        { question: "Quelle propriété CSS est utilisée pour aligner le texte ?", options: ["align", "text-align", "justify", "position"], answer: "text-align" },
        { question: "Quelle propriété CSS définit l’espace intérieur d’un élément ?", options: ["padding", "margin", "border", "spacing"], answer: "padding" }
      ],
      difficiles: [
        { question: "Quelle propriété CSS permet d’ajouter une ombre à un élément ?", options: ["shadow", "text-shadow", "box-shadow", "outline"], answer: "box-shadow" },
        { question: "Quelle propriété CSS est utilisée pour créer une animation ?", options: ["animation", "transition", "keyframes", "transform"], answer: "animation" },
        { question: "Quelle propriété CSS contrôle la transparence d’un élément ?", options: ["visibility", "opacity", "alpha", "transparent"], answer: "opacity" },
        { question: "Quelle valeur CSS applique une flexbox sur un conteneur ?", options: ["block", "flex", "grid", "inline-flex"], answer: "flex" },
        { question: "Quelle pseudo-classe cible le premier enfant d’un élément ?", options: [":first", ":first-child", ":child", ":nth-child(1)"], answer: ":first-child" }
      ]
    },
    JavaScript: {
      faciles: [
        { question: "Quel mot-clé est utilisé pour déclarer une variable en JavaScript ?", options: ["var", "let", "const", "int"], answer: "var" },
        { question: "Quelle fonction affiche un message dans une boîte de dialogue ?", options: ["console.log", "alert", "prompt", "confirm"], answer: "alert" },
        { question: "Quelle est la bonne syntaxe pour un commentaire en JavaScript ?", options: ["// commentaire", "/* commentaire */", "-- commentaire", "# commentaire"], answer: "// commentaire" },
        { question: "Quelle fonction permet d’afficher un message dans la console ?", options: ["console.log", "print", "echo", "display"], answer: "console.log" },
        { question: "Quelle méthode permet d’ajouter un élément à la fin d’un tableau ?", options: ["push", "pop", "shift", "unshift"], answer: "push" }
      ],
      moyennes: [
        { question: "Quelle méthode est utilisée pour sélectionner un élément par son ID ?", options: ["getElementById", "querySelector", "getElement", "selectById"], answer: "getElementById" },
        { question: "Comment déclarer une fonction en JavaScript ?", options: ["function maFonction() {}", "def maFonction() {}", "fn maFonction() {}", "fonction maFonction() {}"], answer: "function maFonction() {}" },
        { question: "Quelle méthode permet de convertir une chaîne de caractères en nombre entier ?", options: ["parseInt", "toInteger", "Integer", "parseNumber"], answer: "parseInt" },
        { question: "Quelle méthode permet d’exécuter une fonction après un certain délai ?", options: ["setTimeout", "setInterval", "wait", "delay"], answer: "setTimeout" },
        { question: "Quel opérateur est utilisé pour comparer la valeur et le type en JavaScript ?", options: ["==", "===", "!=", "=~"], answer: "===" }
      ],
      difficiles: [
        { question: "Comment déclarer une classe en JavaScript ?", options: ["class MaClasse {}", "new Class MaClasse {}", "MaClasse() { }", "define class MaClasse {}"], answer: "class MaClasse {}" },
        { question: "Quelle méthode est utilisée pour parcourir un tableau en exécutant une fonction sur chaque élément ?", options: ["forEach", "map", "filter", "reduce"], answer: "forEach" },
        { question: "Quelle est la sortie de 'typeof null' en JavaScript ?", options: ["null", "undefined", "object", "string"], answer: "object" },
        { question: "Comment empêcher la propagation d'un événement en JavaScript ?", options: ["event.stopPropagation()", "event.preventDefault()", "event.stop()", "event.cancel()"], answer: "event.stopPropagation()" },
        { question: "Quelle méthode permet de transformer une chaîne en tableau en utilisant un séparateur ?", options: ["split", "slice", "splice", "join"], answer: "split" }
      ]
    }
  };
  
  export default questionsData;
  