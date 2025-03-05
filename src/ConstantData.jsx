const questionsData = {
  premiere: {
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
      // Ajoutez les questions pour la première année
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
  },
  deuxieme: {
    PHP: {
      faciles: [
        { question: "Quelle est la syntaxe correcte pour afficher 'Hello World' en PHP ?", options: ["echo 'Hello World';", "print('Hello World')", "cout << 'Hello World';", "Console.log('Hello World');"], answer: "echo 'Hello World';" },
        { question: "Quelle extension de fichier est utilisée pour un script PHP ?", options: [".html", ".js", ".php", ".css"], answer: ".php" },
        { question: "Quelle fonction est utilisée pour compter le nombre d'éléments dans un tableau ?", options: ["count()", "size()", "length()", "total()"], answer: "count()" },
        { question: "Quel mot-clé est utilisé pour définir une constante en PHP ?", options: ["let", "define", "const", "static"], answer: "define" },
        { question: "Quelle commande PHP est utilisée pour inclure un autre fichier ?", options: ["require", "import", "include", "load"], answer: "include" }
      ],
      moyennes: [
        { question: "Quel symbole est utilisé pour les variables en PHP ?", options: ["$", "#", "@", "&"], answer: "$" },
        { question: "Quelle fonction est utilisée pour se connecter à une base de données MySQL en PHP ?", options: ["mysqli_connect()", "mysql_connect()", "connect_db()", "open_database()"], answer: "mysqli_connect()" },
        { question: "Comment vérifier si une variable est définie en PHP ?", options: ["isset()", "exists()", "defined()", "isnull()"], answer: "isset()" },
        { question: "Quelle boucle est utilisée pour parcourir un tableau associatif en PHP ?", options: ["for", "while", "foreach", "do-while"], answer: "foreach" },
        { question: "Quel opérateur est utilisé pour concaténer des chaînes de caractères en PHP ?", options: ["+", "&", ".", "*"], answer: "." }
      ],
      difficiles: [
        { question: "Quelle fonction permet de récupérer les données envoyées en POST ?", options: ["$_GET", "$_POST", "$_REQUEST", "$_SESSION"], answer: "$_POST" },
        { question: "Comment empêcher l'exécution d'un script PHP en cas d'erreur fatale ?", options: ["try/catch", "error_reporting(0)", "exit()", "die()"], answer: "die()" },
        { question: "Quelle est la valeur retournée par strpos() si la chaîne n'est pas trouvée ?", options: ["false", "-1", "null", "0"], answer: "false" },
        { question: "Quelle est la portée par défaut d'une variable déclarée dans une fonction en PHP ?", options: ["Global", "Local", "Static", "Public"], answer: "Local" },
        { question: "Quel mot-clé est utilisé pour hériter d'une classe en PHP ?", options: ["implements", "extends", "inherits", "uses"], answer: "extends" }
      ]
    },
    SQL: {
      faciles: [
        { question: "Quelle commande SQL est utilisée pour récupérer des données d'une table ?", options: ["SELECT", "FETCH", "GET", "RETRIEVE"], answer: "SELECT" },
        { question: "Quel mot-clé est utilisé pour filtrer les résultats dans une requête SQL ?", options: ["WHERE", "FILTER", "HAVING", "ORDER BY"], answer: "WHERE" },
        { question: "Quelle clause SQL est utilisée pour trier les résultats ?", options: ["SORT BY", "ORDER BY", "GROUP BY", "FILTER BY"], answer: "ORDER BY" },
        { question: "Quelle commande permet d'insérer une nouvelle ligne dans une table ?", options: ["INSERT INTO", "ADD ROW", "NEW RECORD", "PUT INTO"], answer: "INSERT INTO" },
        { question: "Quelle fonction SQL est utilisée pour compter le nombre de lignes dans une table ?", options: ["COUNT()", "SUM()", "TOTAL()", "NUMBER()"], answer: "COUNT()" }
      ],
      moyennes: [
        { question: "Quelle commande SQL est utilisée pour modifier des données existantes ?", options: ["UPDATE", "MODIFY", "CHANGE", "ALTER"], answer: "UPDATE" },
        { question: "Quel mot-clé SQL est utilisé pour regrouper des enregistrements similaires ?", options: ["GROUP BY", "ORDER BY", "FILTER", "CLUSTER BY"], answer: "GROUP BY" },
        { question: "Quelle contrainte SQL garantit l'unicité d'une colonne ?", options: ["UNIQUE", "PRIMARY KEY", "INDEX", "DISTINCT"], answer: "UNIQUE" },
        { question: "Quelle clause est utilisée pour limiter le nombre de résultats retournés par une requête ?", options: ["LIMIT", "MAX", "TOP", "ROWNUM"], answer: "LIMIT" },
        { question: "Quelle jointure SQL est utilisée pour retourner toutes les lignes de deux tables, même s'il n'y a pas de correspondance ?", options: ["INNER JOIN", "FULL OUTER JOIN", "LEFT JOIN", "RIGHT JOIN"], answer: "FULL OUTER JOIN" }
      ],
      difficiles: [
        { question: "Quelle commande SQL est utilisée pour supprimer une table ?", options: ["DELETE", "DROP", "REMOVE", "CLEAR"], answer: "DROP" },
        { question: "Quelle fonction SQL est utilisée pour retourner la date actuelle ?", options: ["NOW()", "CURRENT_DATE()", "TODAY()", "GETDATE()"], answer: "NOW()" },
        { question: "Quelle clause SQL est utilisée pour filtrer les résultats après l'agrégation ?", options: ["WHERE", "HAVING", "FILTER", "ORDER BY"], answer: "HAVING" },
        { question: "Quel type de jointure retourne uniquement les correspondances entre deux tables ?", options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL JOIN"], answer: "INNER JOIN" },
        { question: "Quel type d'indexation peut accélérer la recherche de données dans une table SQL ?", options: ["PRIMARY KEY", "UNIQUE", "INDEX", "FOREIGN KEY"], answer: "INDEX" }
      ]
    },
    Electron: {
      faciles: [
        { question: "Quel langage est principalement utilisé pour développer avec Electron ?", options: ["Python", "Java", "JavaScript", "C++"], answer: "JavaScript" },
        { question: "Quelle méthode est utilisée pour créer une fenêtre dans Electron ?", options: ["createWindow()", "new BrowserWindow()", "window.open()", "startWindow()"], answer: "new BrowserWindow()" },
        { question: "Quel fichier est le point d'entrée d'une application Electron ?", options: ["index.html", "app.js", "main.js", "electron.js"], answer: "main.js" },
        { question: "Quel module Electron est utilisé pour gérer les menus d'application ?", options: ["Menu", "AppMenu", "WindowMenu", "Navigation"], answer: "Menu" },
        { question: "Quelle méthode permet de charger un fichier HTML dans une fenêtre Electron ?", options: ["loadFile()", "openHTML()", "setHTML()", "navigate()"], answer: "loadFile()" }
      ],
      moyennes: [
        { question: "Quel module Electron est utilisé pour gérer le cycle de vie de l'application ?", options: ["app", "mainWindow", "session", "process"], answer: "app" },
        { question: "Quelle API Electron permet d'exécuter des commandes système ?", options: ["shell", "os", "process", "cmd"], answer: "shell" },
        { question: "Quel format de fichier est utilisé pour définir les métadonnées d'une application Electron ?", options: ["package.json", "config.json", "electron.config", "metadata.json"], answer: "package.json" },
        { question: "Quel module Electron permet de gérer les communications entre les processus principal et rendu ?", options: ["ipcMain & ipcRenderer", "mainProcess & renderProcess", "events & listeners", "broadcast & receiver"], answer: "ipcMain & ipcRenderer" },
        { question: "Quelle commande npm permet d'installer Electron ?", options: ["npm install electron", "npm add electron", "npm get electron", "npm create electron"], answer: "npm install electron" }
      ],
      difficiles: [
        { question: "Quelle fonctionnalité permet de créer des applications multi-plateformes avec Electron ?", options: ["Cross-Platform API", "Electron Forge", "Electron Builder", "Web Technologies"], answer: "Web Technologies" },
        { question: "Comment empaqueter une application Electron pour la distribution ?", options: ["electron-packager", "npm build", "electron-compile", "electron-bundle"], answer: "electron-packager" },
        { question: "Quel module Electron permet de gérer les sessions utilisateur ?", options: ["session", "userData", "cookies", "storage"], answer: "session" },
        { question: "Quel événement doit être écouté avant de quitter proprement une application Electron ?", options: ["before-quit", "close", "exit", "app-exit"], answer: "before-quit" },
        { question: "Quel paramètre permet d'exécuter une application Electron en arrière-plan ?", options: ["background: true", "hidden: true", "show: false", "minimized: true"], answer: "show: false" }
      ]
    }
  },
  troisieme: {
      Symfony: {
        faciles: [
          { question: "Symfony est basé sur quel langage ?", options: ["Java", "Python", "PHP", "Ruby"], answer: "PHP" },
          { question: "Quel composant Symfony est utilisé pour gérer les routes ?", options: ["Routing", "Router", "RouteManager", "Navigation"], answer: "Routing" },
          { question: "Quel fichier contient la configuration principale d'un projet Symfony ?", options: ["config.yml", "app.php", "index.php", "settings.json"], answer: "config.yml" },
          { question: "Quelle commande permet de démarrer un serveur de développement Symfony ?", options: ["symfony server:start", "php bin/console serve", "start-server", "php artisan serve"], answer: "symfony server:start" },
          { question: "Quel fichier définit les dépendances d'un projet Symfony ?", options: ["composer.json", "package.json", "dependencies.xml", "symfony.lock"], answer: "composer.json" }
        ],
        moyennes: [
          { question: "Quelle commande Symfony est utilisée pour créer un contrôleur ?", options: ["php bin/console make:controller", "symfony new controller", "create-controller", "make:action"], answer: "php bin/console make:controller" },
          { question: "Quel moteur de template est principalement utilisé avec Symfony ?", options: ["Twig", "Blade", "Smarty", "Jinja"], answer: "Twig" },
          { question: "Quelle commande permet de générer une entité Doctrine en Symfony ?", options: ["php bin/console make:entity", "php bin/console generate:entity", "make:model", "create-entity"], answer: "php bin/console make:entity" },
          { question: "Quel service Symfony permet d'effectuer des requêtes HTTP facilement ?", options: ["HttpClient", "Request", "Guzzle", "FetchAPI"], answer: "HttpClient" },
          { question: "Dans Symfony, où sont généralement définies les routes ?", options: ["config/routes.yaml", "src/Controller.php", "routes.json", "app/config.yml"], answer: "config/routes.yaml" }
        ],
        difficiles: [
          { question: "Quel est le rôle de Doctrine dans Symfony ?", options: ["Gérer les vues", "Gérer les bases de données", "Créer des API", "Faire du routage"], answer: "Gérer les bases de données" },
          { question: "Comment injecter un service dans un contrôleur Symfony ?", options: ["En passant par le constructeur", "Via une méthode statique", "Avec une variable globale", "En utilisant un middleware"], answer: "En passant par le constructeur" },
          { question: "Quel fichier de configuration permet de définir les paramètres de l'application Symfony ?", options: [".env", "config/services.yaml", "parameters.json", "settings.xml"], answer: ".env" },
          { question: "Quel composant Symfony permet d'effectuer des migrations de base de données ?", options: ["Doctrine Migrations", "DatabaseUpdater", "SchemaTool", "DbVersioning"], answer: "Doctrine Migrations" },
          { question: "Quelle annotation est utilisée pour définir une route dans un contrôleur Symfony ?", options: ["@Route", "@Path", "@Url", "@Mapping"], answer: "@Route" }
        ]
      },
    "Node.js":{
      faciles: [
        { question: "Qu'est-ce que Node.js ?", options: ["Un framework JavaScript", "Un moteur de base de données", "Un environnement d'exécution JavaScript", "Un serveur web"], answer: "Un environnement d'exécution JavaScript" },
        { question: "Quelle commande permet d'initialiser un projet Node.js ?", options: ["npm init", "node start", "npm create", "node new"], answer: "npm init" },
        { question: "Quel module intégré permet de manipuler les fichiers en Node.js ?", options: ["fs", "fileSystem", "path", "http"], answer: "fs" },
        { question: "Quel framework est souvent utilisé avec Node.js pour créer des API ?", options: ["Express.js", "Django", "Flask", "Laravel"], answer: "Express.js" },
        { question: "Quelle méthode permet de lire une variable d'environnement en Node.js ?", options: ["process.env", "env.get()", "config.read()", "settings.getEnv()"], answer: "process.env" }
      ],
      moyennes: [
        { question: "Quel module Node.js permet de gérer les requêtes HTTP ?", options: ["http", "fetch", "axios", "request"], answer: "http" },
        { question: "Quelle commande permet d'installer un package en Node.js ?", options: ["npm install", "node install", "package add", "node get"], answer: "npm install" },
        { question: "Comment exporter une fonction dans un module Node.js ?", options: ["module.exports = maFonction", "export default maFonction", "exports: maFonction", "module:export maFonction"], answer: "module.exports = maFonction" },
        { question: "Quelle méthode permet de lire un fichier en Node.js ?", options: ["fs.readFile", "file.read", "read.file", "fs.getFile"], answer: "fs.readFile" },
        { question: "Quel package est utilisé pour gérer les websockets en Node.js ?", options: ["socket.io", "ws", "websocket", "node-websockets"], answer: "socket.io" }
      ],
      difficiles: [
        { question: "Quel module Node.js permet de travailler avec les processus enfants ?", options: ["child_process", "process_child", "spawn", "fork"], answer: "child_process" },
        { question: "Quelle est la différence entre 'spawn' et 'exec' en Node.js ?", options: ["spawn est asynchrone, exec est synchrone", "exec est asynchrone, spawn est synchrone", "Ils sont identiques", "exec permet d'exécuter des fichiers binaires"], answer: "spawn est asynchrone, exec est synchrone" },
        { question: "Quelle méthode permet de créer un serveur HTTP en Node.js ?", options: ["http.createServer", "server.new()", "http.newServer", "create.httpServer"], answer: "http.createServer" },
        { question: "Quel gestionnaire de packages alternatif peut être utilisé à la place de npm ?", options: ["yarn", "bower", "composer", "grunt"], answer: "yarn" },
        { question: "Comment gérer les erreurs dans un callback Node.js ?", options: ["En vérifiant le premier argument", "Avec try/catch", "Avec un return false", "Avec un console.error"], answer: "En vérifiant le premier argument" }
      ]
    },
    Angular: {
      faciles: [
        { question: "Quel langage est utilisé avec Angular ?", options: ["JavaScript", "TypeScript", "Python", "PHP"], answer: "TypeScript" },
        { question: "Quelle commande permet de créer un nouveau projet Angular ?", options: ["ng new", "angular create", "npm init angular", "create-angular"], answer: "ng new" },
        { question: "Quel fichier Angular contient les métadonnées d'un composant ?", options: ["component.ts", "module.ts", "service.ts", "directive.ts"], answer: "component.ts" },
        { question: "Quelle directive est utilisée pour afficher une liste d'éléments en Angular ?", options: ["*ngIf", "*ngFor", "*ngSwitch", "*ngShow"], answer: "*ngFor" },
        { question: "Quel fichier contient la configuration principale d’un projet Angular ?", options: ["angular.json", "package.json", "config.json", "app.config"], answer: "angular.json" }
      ],
      moyennes: [
        { question: "Quel module est requis pour les formulaires en Angular ?", options: ["FormsModule", "HttpClientModule", "CommonModule", "ReactiveModule"], answer: "FormsModule" },
        { question: "Quelle méthode est utilisée pour gérer les événements en Angular ?", options: ["(click)", "@Event", "onClick", "handleClick"], answer: "(click)" },
        { question: "Quel service est utilisé pour les requêtes HTTP en Angular ?", options: ["HttpClient", "HttpService", "FetchAPI", "AngularHTTP"], answer: "HttpClient" },
        { question: "Quelle commande permet de générer un composant Angular ?", options: ["ng generate component", "ng create component", "ng new component", "angular make component"], answer: "ng generate component" },
        { question: "Quel élément permet de définir une route en Angular ?", options: ["RouterModule", "AppRoutingModule", "RouteConfig", "NgRoute"], answer: "RouterModule" }
      ],
      difficiles: [
        { question: "Quel décorateur est utilisé pour un service en Angular ?", options: ["@Injectable", "@Component", "@Service", "@Module"], answer: "@Injectable" },
        { question: "Comment partager des données entre composants Angular ?", options: ["Services", "@Input/@Output", "State Management", "Toutes les réponses"], answer: "Toutes les réponses" },
        { question: "Quel outil Angular est utilisé pour le State Management ?", options: ["NgRx", "Redux", "MobX", "Vuex"], answer: "NgRx" },
        { question: "Comment créer un module Angular ?", options: ["ng generate module", "ng create module", "angular module", "ng new module"], answer: "ng generate module" },
        { question: "Quelle commande permet de créer un service en Angular ?", options: ["ng generate service", "ng create service", "angular make service", "ng new service"], answer: "ng generate service" }
      ]
    }
  }
};

export default questionsData;
