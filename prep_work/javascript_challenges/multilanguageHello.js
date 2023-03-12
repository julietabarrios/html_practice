// write a function which takes two argument: name and the language and it
// returns a personalized greeting in the selected language 
// If no language is provided it defaults to English. 

// english: 'Welcome',
// czech: 'Vitejte',
// danish: 'Velkomst',
// dutch: 'Welkom',
// estonian: 'Tere tulemast',
// finnish: 'Tervetuloa',
// flemish: 'Welgekomen',
// french: 'Bienvenue',
// german: 'Willkommen',
// irish: 'Failte',
// italian: 'Benvenuto',
// latvian: 'Gaidits',
// lithuanian: 'Laukiamas',
// polish: 'Witamy',
// spanish: 'Bienvenido',
// swedish: 'Valkommen',
// welsh: 'Croeso'


function greeting(name, language){
    switch (language) {
        case "english":
            return "Welcome, " + name ;
        break;
        case "czech":
            return "Vitejte, " + name ;
        break;
        case "danish":
            return "Velkomst, " + name ;
        break;
        case "dutch":
            return "Welkom, " + name ;
        break;
        case "estonian":
            return "Tere tulemast," + name ;
        break;
        case "finnish":
            return "Tervetuloa, " + name ;
        break;
        case "flemishh":
            return "Welgekomen, " + name ;
        break;
        case "french":
            return "Bienvenue, " + name ;
        break;
        case "german":
            return "Willkommen, " + name ;
        break;
        case "irish":
            return "Failte," + name ;
        break;
        case "italian":
            return "Benvenuto, " + name ;
        break;
        case "latvian":
            return "Gaidits, " + name ;
        break;
        case "lithuanian":
            return "Laukiamas, " + name ;
        break;
        case "polish":
            return "Witamy, " + name ;
        break;
        case "spanish":
            return "Bienvenido, " + name ;
        break;
        case "swedish":
            return "Valkommen, " + name ;
        break;
        case "welsh":
            return "Croeso, " + name ;
        break;
        case undefined:
            return "Welcome, " + name;
        break;
        }
}

