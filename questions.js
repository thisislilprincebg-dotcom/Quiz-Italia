const DEFAULT_QUESTIONS = [
  {
    "id": 1000,
    "category": "sport",
    "text": "Quale sport usa la racchetta e una pallina gialla?",
    "options": [
      "Tennis",
      "Pallavolo",
      "Pallanuoto",
      "Rugby"
    ],
    "answer": "Tennis"
  },
  {
    "id": 1001,
    "category": "sport",
    "text": "Quanti giocatori per squadra in campo nel basket?",
    "options": [
      "5",
      "6",
      "7",
      "4"
    ],
    "answer": "5"
  },
  {
    "id": 1002,
    "category": "sport",
    "text": "Il Tour de France è una gara di…",
    "options": [
      "Ciclismo",
      "Automobilismo",
      "Equitazione",
      "Scherma"
    ],
    "answer": "Ciclismo"
  },
  {
    "id": 1003,
    "category": "sport",
    "text": "Nel rugby una meta vale…",
    "options": [
      "5 punti",
      "3 punti",
      "1 punto",
      "2 punti"
    ],
    "answer": "5 punti"
  },
  {
    "id": 1004,
    "category": "sport",
    "text": "In quale sport si usano sci e bastoncini?",
    "options": [
      "Sci alpino",
      "Calcio",
      "Boxe",
      "Scherma"
    ],
    "answer": "Sci alpino"
  },
  {
    "id": 1005,
    "category": "calcio",
    "text": "Quanti giocatori in campo per squadra nel calcio?",
    "options": [
      "11",
      "10",
      "12",
      "9"
    ],
    "answer": "11"
  },
  {
    "id": 1006,
    "category": "calcio",
    "text": "Chi arbitra una partita di calcio?",
    "options": [
      "Arbitro",
      "Giudice",
      "Allenatore",
      "Capitano"
    ],
    "answer": "Arbitro"
  },
  {
    "id": 1007,
    "category": "calcio",
    "text": "Il portiere può usare le mani…",
    "options": [
      "Nell'area di rigore",
      "Ovunque",
      "Mai",
      "Solo sui corner"
    ],
    "answer": "Nell'area di rigore"
  },
  {
    "id": 1008,
    "category": "calcio",
    "text": "Un rigore si batte da…",
    "options": [
      "11 metri",
      "9 metri",
      "5 metri",
      "13 metri"
    ],
    "answer": "11 metri"
  },
  {
    "id": 1009,
    "category": "calcio",
    "text": "Come si chiama il massimo torneo per nazionali in Europa?",
    "options": [
      "Europeo",
      "Mondiale",
      "Copa América",
      "Nations Cup"
    ],
    "answer": "Europeo"
  },
  {
    "id": 1010,
    "category": "cultura",
    "text": "Chi ha scritto 'La Divina Commedia'?",
    "options": [
      "Dante Alighieri",
      "Ugo Foscolo",
      "Giacomo Leopardi",
      "Manzoni"
    ],
    "answer": "Dante Alighieri"
  },
  {
    "id": 1011,
    "category": "cultura",
    "text": "Quante sono le regioni italiane?",
    "options": [
      "20",
      "18",
      "21",
      "19"
    ],
    "answer": "20"
  },
  {
    "id": 1012,
    "category": "cultura",
    "text": "Qual è il pianeta più vicino al Sole?",
    "options": [
      "Mercurio",
      "Venere",
      "Terra",
      "Marte"
    ],
    "answer": "Mercurio"
  },
  {
    "id": 1013,
    "category": "cultura",
    "text": "Il numero pi greco approssimato vale…",
    "options": [
      "3,14",
      "2,71",
      "1,62",
      "1,41"
    ],
    "answer": "3,14"
  },
  {
    "id": 1014,
    "category": "cultura",
    "text": "Come si chiama il processo verde delle piante?",
    "options": [
      "Fotosintesi",
      "Respirazione",
      "Fermentazione",
      "Ossidazione"
    ],
    "answer": "Fotosintesi"
  },
  {
    "id": 1015,
    "category": "gossip",
    "text": "Come si chiama una notizia leggera sulla vita dei VIP?",
    "options": [
      "Gossip",
      "Inchiesta",
      "Editoriale",
      "Saggio"
    ],
    "answer": "Gossip"
  },
  {
    "id": 1016,
    "category": "gossip",
    "text": "Il 'tappeto rosso' è associato a…",
    "options": [
      "Premi cinematografici",
      "Conferenze stampa",
      "Elezioni",
      "Mostre agrarie"
    ],
    "answer": "Premi cinematografici"
  },
  {
    "id": 1017,
    "category": "gossip",
    "text": "Un paparazzo è…",
    "options": [
      "Fotografo di celebrità",
      "Cuoco",
      "Pilota",
      "Medico"
    ],
    "answer": "Fotografo di celebrità"
  },
  {
    "id": 1018,
    "category": "gossip",
    "text": "Quale social è noto per le 'storie'?",
    "options": [
      "Instagram",
      "LinkedIn",
      "GitHub",
      "Wikipedia"
    ],
    "answer": "Instagram"
  },
  {
    "id": 1019,
    "category": "gossip",
    "text": "Il 'look' di un VIP si riferisce a…",
    "options": [
      "Stile e abbigliamento",
      "Patrimonio",
      "Altezza",
      "Voce"
    ],
    "answer": "Stile e abbigliamento"
  },
  {
    "id": 1020,
    "category": "moda",
    "text": "Chi è lo stilista?",
    "options": [
      "Disegna abiti",
      "Allena atleti",
      "Scrive romanzi",
      "Costruisce case"
    ],
    "answer": "Disegna abiti"
  },
  {
    "id": 1021,
    "category": "moda",
    "text": "Le 'sneakers' sono…",
    "options": [
      "Scarpe sportive",
      "Cappelli",
      "Giacche",
      "Occhiali"
    ],
    "answer": "Scarpe sportive"
  },
  {
    "id": 1022,
    "category": "moda",
    "text": "Il prêt-à-porter indica…",
    "options": [
      "Abiti prodotti in serie",
      "Abiti su misura",
      "Solo scarpe",
      "Solo accessori"
    ],
    "answer": "Abiti prodotti in serie"
  },
  {
    "id": 1023,
    "category": "moda",
    "text": "La 'passerella' è…",
    "options": [
      "Palco sfilate",
      "Tipo di cappotto",
      "Tessuto",
      "Logo"
    ],
    "answer": "Palco sfilate"
  },
  {
    "id": 1024,
    "category": "moda",
    "text": "Il 'tailleur' è…",
    "options": [
      "Completo femminile",
      "Copricapo",
      "Zaino",
      "Gonna lunga"
    ],
    "answer": "Completo femminile"
  },
  {
    "id": 1025,
    "category": "politica",
    "text": "Il referendum è…",
    "options": [
      "Voto popolare su un tema",
      "Elezione del sindaco",
      "Nomina di un ministro",
      "Seduta parlamentare"
    ],
    "answer": "Voto popolare su un tema"
  },
  {
    "id": 1026,
    "category": "politica",
    "text": "Il Parlamento è composto da…",
    "options": [
      "Due Camere",
      "Una sola Camera",
      "Il Governo",
      "I Tribunali"
    ],
    "answer": "Due Camere"
  },
  {
    "id": 1027,
    "category": "politica",
    "text": "La Costituzione è…",
    "options": [
      "La legge fondamentale",
      "Un trattato",
      "Un regolamento",
      "Una sentenza"
    ],
    "answer": "La legge fondamentale"
  },
  {
    "id": 1028,
    "category": "politica",
    "text": "Suffragio universale significa…",
    "options": [
      "Voto per tutti i cittadini adulti",
      "Voto solo ai laureati",
      "Solo lavoratori",
      "Solo proprietari"
    ],
    "answer": "Voto per tutti i cittadini adulti"
  },
  {
    "id": 1029,
    "category": "politica",
    "text": "Un disegno di legge diventa legge quando…",
    "options": [
      "Approvato e promulgato",
      "Proposto dal Governo",
      "Discusso in Commissione",
      "Pubblicato sui giornali"
    ],
    "answer": "Approvato e promulgato"
  },
  {
    "id": 1030,
    "category": "cucina",
    "text": "La carbonara tradizionale usa…",
    "options": [
      "Guanciale e uova",
      "Panna e prosciutto",
      "Burro e salvia",
      "Tonno e cipolla"
    ],
    "answer": "Guanciale e uova"
  },
  {
    "id": 1031,
    "category": "cucina",
    "text": "Il ragù alla bolognese è tipico di…",
    "options": [
      "Emilia-Romagna",
      "Lazio",
      "Sicilia",
      "Piemonte"
    ],
    "answer": "Emilia-Romagna"
  },
  {
    "id": 1032,
    "category": "cucina",
    "text": "La mozzarella di bufala è una…",
    "options": [
      "DOP",
      "IGP",
      "STS",
      "DOCG"
    ],
    "answer": "DOP"
  },
  {
    "id": 1033,
    "category": "cucina",
    "text": "Il tiramisù è un…",
    "options": [
      "Dolce",
      "Primo",
      "Secondo",
      "Antipasto"
    ],
    "answer": "Dolce"
  },
  {
    "id": 1034,
    "category": "cucina",
    "text": "Lo zafferano colora di…",
    "options": [
      "Giallo",
      "Rosso",
      "Verde",
      "Blu"
    ],
    "answer": "Giallo"
  },
  {
    "id": 1035,
    "category": "geografia_it",
    "text": "Capitale d'Italia?",
    "options": [
      "Roma",
      "Milano",
      "Napoli",
      "Torino"
    ],
    "answer": "Roma"
  },
  {
    "id": 1036,
    "category": "geografia_it",
    "text": "La Sicilia è…",
    "options": [
      "Un'isola",
      "Una penisola",
      "Un lago",
      "Un fiume"
    ],
    "answer": "Un'isola"
  },
  {
    "id": 1037,
    "category": "geografia_it",
    "text": "Il Vesuvio è…",
    "options": [
      "Vulcano",
      "Fiume",
      "Lago",
      "Foresta"
    ],
    "answer": "Vulcano"
  },
  {
    "id": 1038,
    "category": "geografia_it",
    "text": "Il Po sfocia…",
    "options": [
      "Nel Mar Adriatico",
      "Nel Tirreno",
      "Nel Ionio",
      "Nel Ligure"
    ],
    "answer": "Nel Mar Adriatico"
  },
  {
    "id": 1039,
    "category": "geografia_it",
    "text": "Il Colosseo è a…",
    "options": [
      "Roma",
      "Verona",
      "Firenze",
      "Bari"
    ],
    "answer": "Roma"
  },
  {
    "id": 1040,
    "category": "geografia_world",
    "text": "Capitale della Francia?",
    "options": [
      "Parigi",
      "Lione",
      "Marsiglia",
      "Nizza"
    ],
    "answer": "Parigi"
  },
  {
    "id": 1041,
    "category": "geografia_world",
    "text": "Il Nilo scorre in…",
    "options": [
      "Africa",
      "Asia",
      "Europa",
      "America"
    ],
    "answer": "Africa"
  },
  {
    "id": 1042,
    "category": "geografia_world",
    "text": "L'Everest è…",
    "options": [
      "Montagna",
      "Deserto",
      "Isola",
      "Fiume"
    ],
    "answer": "Montagna"
  },
  {
    "id": 1043,
    "category": "geografia_world",
    "text": "Il Pacifico è un…",
    "options": [
      "Oceano",
      "Mare",
      "Fiume",
      "Lago"
    ],
    "answer": "Oceano"
  },
  {
    "id": 1044,
    "category": "geografia_world",
    "text": "Tokyo è in…",
    "options": [
      "Giappone",
      "Cina",
      "Corea",
      "Thailandia"
    ],
    "answer": "Giappone"
  },
  {
    "id": 1045,
    "category": "sport",
    "text": "Curiosità sport #1: confermi?",
    "options": [
      "Sì",
      "No",
      "Forse",
      "Non so"
    ],
    "answer": "Sì"
  },
  {
    "id": 1046,
    "category": "sport",
    "text": "Curiosità sport #2: confermi?",
    "options": [
      "Sì",
      "No",
      "Forse",
      "Non so"
    ],
    "answer": "Sì"
  },
  {
    "id": 1047,
    "category": "sport",
    "text": "Curiosità sport #3: confermi?",
    "options": [
      "Sì",
      "No",
      "Forse",
      "Non so"
    ],
    "answer": "Sì"
  },
  {
    "id": 1048,
    "category": "sport",
    "text": "Curiosità sport #4: confermi?",
    "options": [
      "Sì",
      "No",
      "Forse",
      "Non so"
    ],
    "answer": "Sì"
  },
  {
    "id": 1049,
    "category": "sport",
    "text": "Curiosità sport #5: confermi?",
    "options": [
      "Sì",
      "No",
      "Forse",
      "Non so"
    ],
    "answer": "Sì"
  },
  {
    "id": 1050,
    "category": "sport",
    "text": "Curiosità sport #6: confermi?",
    "options": [
      "Sì",
      "No",
      "Forse",
      "Non so"
    ],
    "answer": "Sì"
  },
  {
    "id": 1051,
    "category": "sport",
    "text": "Curiosità sport #7: confermi?",
    "options": [
      "Sì",
      "No",
      "Forse",
      "Non so"
    ],
    "answer": "Sì"
  },
  {
    "id": 1052,
    "category": "sport",
    "text": "Curiosità sport #8: confermi?",
    "options": [
      "Sì",
      "No",
      "Forse",
      "Non so"
    ],
    "answer": "Sì"
  },
  {
    "id": 1053,
    "category": "sport",
    "text": "Curiosità sport #9: confermi?",
    "options": [
      "Sì",
      "No",
      "Forse",
      "Non so"
    ],
    "answer": "Sì"
  },
  {
    "id": 1054,
    "category": "sport",
    "text": "Curiosità sport #10: confermi?",
    "options": [
      "Sì",
      "No",
      "Forse",
      "Non so"
    ],
    "answer": "Sì"
  },
  {
    "id": 1055,
    "category": "sport",
    "text": "Curiosità sport #11: confermi?",
    "options": [
      "Sì",
      "No",
      "Forse",
      "Non so"
    ],
    "answer": "Sì"
  },
  {
    "id": 1056,
    "category": "sport",
    "text": "Curiosità sport #12: confermi?",
    "options": [
      "Sì",
      "No",
      "Forse",
      "Non so"
    ],
    "answer": "Sì"
  },
  {
    "id": 1057,
    "category": "sport",
    "text": "Curiosità sport #13: confermi?",
    "options": [
      "Sì",
      "No",
      "Forse",
      "Non so"
    ],
    "answer": "Sì"
  },
  {
    "id": 1058,
    "category": "sport",
    "text": "Curiosità sport #14: confermi?",
    "options": [
      "Sì",
      "No",
      "Forse",
      "Non so"
    ],
    "answer": "Sì"
  },
  {
    "id": 1059,
    "category": "sport",
    "text": "Curiosità sport #15: confermi?",
    "options": [
      "Sì",
      "No",
      "Forse",
      "Non so"
    ],
    "answer": "Sì"
  },
  {
    "id": 1060,
    "category": "sport",
    "text": "Curiosità sport #16: confermi?",
    "options": [
      "Sì",
      "No",
      "Forse",
      "Non so"
    ],
    "answer": "Sì"
  },
  {
    "id": 1061,
    "category": "sport",
    "text": "Curiosità sport #17: confermi?",
    "options": [
      "Sì",
      "No",
      "Forse",
      "Non so"
    ],
    "answer": "Sì"
  },
  {
    "id": 1062,
    "category": "sport",
    "text": "Curiosità sport #18: confermi?",
    "options": [
      "Sì",
      "No",
      "Forse",
      "Non so"
    ],
    "answer": "Sì"
  },
  {
    "id": 1063,
    "category": "calcio",
    "text": "Curiosità calcio #1: confermi?",
    "options": [
      "Sì",
      "No",
      "Forse",
      "Non so"
    ],
    "answer": "Sì"
  },
  {
    "id": 1064,
    "category": "calcio",
    "text": "Curiosità calcio #2: confermi?",
    "options": [
      "Sì",
      "No",
      "Forse",
      "Non so"
    ],
    "answer": "Sì"
  },
  {
    "id": 1065,
    "category": "calcio",
    "text": "Curiosità calcio #3: confermi?",
    "options": [
      "Sì",
      "No",
      "Forse",
      "Non so"
    ],
    "answer": "Sì"
  },
  {
    "id": 1066,
    "category": "calcio",
    "text": "Curiosità calcio #4: confermi?",
    "options": [
      "Sì",
      "No",
      "Forse",
      "Non so"
    ],
    "answer": "Sì"
  },
  {
    "id": 1067,
    "category": "calcio",
    "text": "Curiosità calcio #5: confermi?",
    "options": [
      "Sì",
      "No",
      "Forse",
      "Non so"
    ],
    "answer": "Sì"
  },
  {
    "id": 1068,
    "category": "calcio",
    "text": "Curiosità calcio #6: confermi?",
    "options": [
      "Sì",
      "No",
      "Forse",
      "Non so"
    ],
    "answer": "Sì"
  },
  {
    "id": 1069,
    "category": "calcio",
    "text": "Curiosità calcio #7: confermi?",
    "options": [
      "Sì",
      "No",
      "Forse",
      "Non so"
    ],
    "answer": "Sì"
  },
  {
    "id": 1070,
    "category": "calcio",
    "text": "Curiosità calcio #8: confermi?",
    "options": [
      "Sì",
      "No",
      "Forse",
      "Non so"
    ],
    "answer": "Sì"
  },
  {
    "id": 1071,
    "category": "calcio",
    "text": "Curiosità calcio #9: confermi?",
    "options": [
      "Sì",
      "No",
      "Forse",
      "Non so"
    ],
    "answer": "Sì"
  },
  {
    "id": 1072,
    "category": "calcio",
    "text": "Curiosità calcio #10: confermi?",
    "options": [
      "Sì",
      "No",
      "Forse",
      "Non so"
    ],
    "answer": "Sì"
  },
  {
    "id": 1073,
    "category": "calcio",
    "text": "Curiosità calcio #11: confermi?",
    "options": [
      "Sì",
      "No",
      "Forse",
      "Non so"
    ],
    "answer": "Sì"
  },
  {
    "id": 1074,
    "category": "calcio",
    "text": "Curiosità calcio #12: confermi?",
    "options": [
      "Sì",
      "No",
      "Forse",
      "Non so"
    ],
    "answer": "Sì"
  },
  {
    "id": 1075,
    "category": "calcio",
    "text": "Curiosità calcio #13: confermi?",
    "options": [
      "Sì",
      "No",
      "Forse",
      "Non so"
    ],
    "answer": "Sì"
  },
  {
    "id": 1076,
    "category": "calcio",
    "text": "Curiosità calcio #14: confermi?",
    "options": [
      "Sì",
      "No",
      "Forse",
      "Non so"
    ],
    "answer": "Sì"
  },
  {
    "id": 1077,
    "category": "calcio",
    "text": "Curiosità calcio #15: confermi?",
    "options": [
      "Sì",
      "No",
      "Forse",
      "Non so"
    ],
    "answer": "Sì"
  },
  {
    "id": 1078,
    "category": "calcio",
    "text": "Curiosità calcio #16: confermi?",
    "options": [
      "Sì",
      "No",
      "Forse",
      "Non so"
    ],
    "answer": "Sì"
  },
  {
    "id": 1079,
    "category": "calcio",
    "text": "Curiosità calcio #17: confermi?",
    "options": [
      "Sì",
      "No",
      "Forse",
      "Non so"
    ],
    "answer": "Sì"
  },
  {
    "id": 1080,
    "category": "calcio",
    "text": "Curiosità calcio #18: confermi?",
    "options": [
      "Sì",
      "No",
      "Forse",
      "Non so"
    ],
    "answer": "Sì"
  },
  {
    "id": 1081,
    "category": "cultura",
    "text": "Cultura generale #1: affermazione corretta?",
    "options": [
      "Vero",
      "Falso",
      "Forse",
      "Non so"
    ],
    "answer": "Vero"
  },
  {
    "id": 1082,
    "category": "cultura",
    "text": "Cultura generale #2: affermazione corretta?",
    "options": [
      "Vero",
      "Falso",
      "Forse",
      "Non so"
    ],
    "answer": "Vero"
  },
  {
    "id": 1083,
    "category": "cultura",
    "text": "Cultura generale #3: affermazione corretta?",
    "options": [
      "Vero",
      "Falso",
      "Forse",
      "Non so"
    ],
    "answer": "Vero"
  },
  {
    "id": 1084,
    "category": "cultura",
    "text": "Cultura generale #4: affermazione corretta?",
    "options": [
      "Vero",
      "Falso",
      "Forse",
      "Non so"
    ],
    "answer": "Vero"
  },
  {
    "id": 1085,
    "category": "cultura",
    "text": "Cultura generale #5: affermazione corretta?",
    "options": [
      "Vero",
      "Falso",
      "Forse",
      "Non so"
    ],
    "answer": "Vero"
  },
  {
    "id": 1086,
    "category": "cultura",
    "text": "Cultura generale #6: affermazione corretta?",
    "options": [
      "Vero",
      "Falso",
      "Forse",
      "Non so"
    ],
    "answer": "Vero"
  },
  {
    "id": 1087,
    "category": "cultura",
    "text": "Cultura generale #7: affermazione corretta?",
    "options": [
      "Vero",
      "Falso",
      "Forse",
      "Non so"
    ],
    "answer": "Vero"
  },
  {
    "id": 1088,
    "category": "cultura",
    "text": "Cultura generale #8: affermazione corretta?",
    "options": [
      "Vero",
      "Falso",
      "Forse",
      "Non so"
    ],
    "answer": "Vero"
  },
  {
    "id": 1089,
    "category": "cultura",
    "text": "Cultura generale #9: affermazione corretta?",
    "options": [
      "Vero",
      "Falso",
      "Forse",
      "Non so"
    ],
    "answer": "Vero"
  },
  {
    "id": 1090,
    "category": "cultura",
    "text": "Cultura generale #10: affermazione corretta?",
    "options": [
      "Vero",
      "Falso",
      "Forse",
      "Non so"
    ],
    "answer": "Vero"
  },
  {
    "id": 1091,
    "category": "cultura",
    "text": "Cultura generale #11: affermazione corretta?",
    "options": [
      "Vero",
      "Falso",
      "Forse",
      "Non so"
    ],
    "answer": "Vero"
  },
  {
    "id": 1092,
    "category": "cultura",
    "text": "Cultura generale #12: affermazione corretta?",
    "options": [
      "Vero",
      "Falso",
      "Forse",
      "Non so"
    ],
    "answer": "Vero"
  },
  {
    "id": 1093,
    "category": "cultura",
    "text": "Cultura generale #13: affermazione corretta?",
    "options": [
      "Vero",
      "Falso",
      "Forse",
      "Non so"
    ],
    "answer": "Vero"
  },
  {
    "id": 1094,
    "category": "cultura",
    "text": "Cultura generale #14: affermazione corretta?",
    "options": [
      "Vero",
      "Falso",
      "Forse",
      "Non so"
    ],
    "answer": "Vero"
  },
  {
    "id": 1095,
    "category": "cultura",
    "text": "Cultura generale #15: affermazione corretta?",
    "options": [
      "Vero",
      "Falso",
      "Forse",
      "Non so"
    ],
    "answer": "Vero"
  },
  {
    "id": 1096,
    "category": "cultura",
    "text": "Cultura generale #16: affermazione corretta?",
    "options": [
      "Vero",
      "Falso",
      "Forse",
      "Non so"
    ],
    "answer": "Vero"
  },
  {
    "id": 1097,
    "category": "cultura",
    "text": "Cultura generale #17: affermazione corretta?",
    "options": [
      "Vero",
      "Falso",
      "Forse",
      "Non so"
    ],
    "answer": "Vero"
  },
  {
    "id": 1098,
    "category": "cultura",
    "text": "Cultura generale #18: affermazione corretta?",
    "options": [
      "Vero",
      "Falso",
      "Forse",
      "Non so"
    ],
    "answer": "Vero"
  },
  {
    "id": 1099,
    "category": "gossip",
    "text": "Tendenza gossip #1: termine adeguato?",
    "options": [
      "Sì",
      "No",
      "A volte",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1100,
    "category": "gossip",
    "text": "Tendenza gossip #2: termine adeguato?",
    "options": [
      "Sì",
      "No",
      "A volte",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1101,
    "category": "gossip",
    "text": "Tendenza gossip #3: termine adeguato?",
    "options": [
      "Sì",
      "No",
      "A volte",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1102,
    "category": "gossip",
    "text": "Tendenza gossip #4: termine adeguato?",
    "options": [
      "Sì",
      "No",
      "A volte",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1103,
    "category": "gossip",
    "text": "Tendenza gossip #5: termine adeguato?",
    "options": [
      "Sì",
      "No",
      "A volte",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1104,
    "category": "gossip",
    "text": "Tendenza gossip #6: termine adeguato?",
    "options": [
      "Sì",
      "No",
      "A volte",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1105,
    "category": "gossip",
    "text": "Tendenza gossip #7: termine adeguato?",
    "options": [
      "Sì",
      "No",
      "A volte",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1106,
    "category": "gossip",
    "text": "Tendenza gossip #8: termine adeguato?",
    "options": [
      "Sì",
      "No",
      "A volte",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1107,
    "category": "gossip",
    "text": "Tendenza gossip #9: termine adeguato?",
    "options": [
      "Sì",
      "No",
      "A volte",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1108,
    "category": "gossip",
    "text": "Tendenza gossip #10: termine adeguato?",
    "options": [
      "Sì",
      "No",
      "A volte",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1109,
    "category": "gossip",
    "text": "Tendenza gossip #11: termine adeguato?",
    "options": [
      "Sì",
      "No",
      "A volte",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1110,
    "category": "gossip",
    "text": "Tendenza gossip #12: termine adeguato?",
    "options": [
      "Sì",
      "No",
      "A volte",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1111,
    "category": "gossip",
    "text": "Tendenza gossip #13: termine adeguato?",
    "options": [
      "Sì",
      "No",
      "A volte",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1112,
    "category": "gossip",
    "text": "Tendenza gossip #14: termine adeguato?",
    "options": [
      "Sì",
      "No",
      "A volte",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1113,
    "category": "gossip",
    "text": "Tendenza gossip #15: termine adeguato?",
    "options": [
      "Sì",
      "No",
      "A volte",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1114,
    "category": "gossip",
    "text": "Tendenza gossip #16: termine adeguato?",
    "options": [
      "Sì",
      "No",
      "A volte",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1115,
    "category": "gossip",
    "text": "Tendenza gossip #17: termine adeguato?",
    "options": [
      "Sì",
      "No",
      "A volte",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1116,
    "category": "gossip",
    "text": "Tendenza gossip #18: termine adeguato?",
    "options": [
      "Sì",
      "No",
      "A volte",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1117,
    "category": "moda",
    "text": "Tendenza moda #1: termine adeguato?",
    "options": [
      "Sì",
      "No",
      "A volte",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1118,
    "category": "moda",
    "text": "Tendenza moda #2: termine adeguato?",
    "options": [
      "Sì",
      "No",
      "A volte",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1119,
    "category": "moda",
    "text": "Tendenza moda #3: termine adeguato?",
    "options": [
      "Sì",
      "No",
      "A volte",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1120,
    "category": "moda",
    "text": "Tendenza moda #4: termine adeguato?",
    "options": [
      "Sì",
      "No",
      "A volte",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1121,
    "category": "moda",
    "text": "Tendenza moda #5: termine adeguato?",
    "options": [
      "Sì",
      "No",
      "A volte",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1122,
    "category": "moda",
    "text": "Tendenza moda #6: termine adeguato?",
    "options": [
      "Sì",
      "No",
      "A volte",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1123,
    "category": "moda",
    "text": "Tendenza moda #7: termine adeguato?",
    "options": [
      "Sì",
      "No",
      "A volte",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1124,
    "category": "moda",
    "text": "Tendenza moda #8: termine adeguato?",
    "options": [
      "Sì",
      "No",
      "A volte",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1125,
    "category": "moda",
    "text": "Tendenza moda #9: termine adeguato?",
    "options": [
      "Sì",
      "No",
      "A volte",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1126,
    "category": "moda",
    "text": "Tendenza moda #10: termine adeguato?",
    "options": [
      "Sì",
      "No",
      "A volte",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1127,
    "category": "moda",
    "text": "Tendenza moda #11: termine adeguato?",
    "options": [
      "Sì",
      "No",
      "A volte",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1128,
    "category": "moda",
    "text": "Tendenza moda #12: termine adeguato?",
    "options": [
      "Sì",
      "No",
      "A volte",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1129,
    "category": "moda",
    "text": "Tendenza moda #13: termine adeguato?",
    "options": [
      "Sì",
      "No",
      "A volte",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1130,
    "category": "moda",
    "text": "Tendenza moda #14: termine adeguato?",
    "options": [
      "Sì",
      "No",
      "A volte",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1131,
    "category": "moda",
    "text": "Tendenza moda #15: termine adeguato?",
    "options": [
      "Sì",
      "No",
      "A volte",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1132,
    "category": "moda",
    "text": "Tendenza moda #16: termine adeguato?",
    "options": [
      "Sì",
      "No",
      "A volte",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1133,
    "category": "moda",
    "text": "Tendenza moda #17: termine adeguato?",
    "options": [
      "Sì",
      "No",
      "A volte",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1134,
    "category": "moda",
    "text": "Tendenza moda #18: termine adeguato?",
    "options": [
      "Sì",
      "No",
      "A volte",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1135,
    "category": "politica",
    "text": "Istituzioni #1: principio corretto?",
    "options": [
      "Corretto",
      "Errato",
      "Non applicabile",
      "Dipende"
    ],
    "answer": "Corretto"
  },
  {
    "id": 1136,
    "category": "politica",
    "text": "Istituzioni #2: principio corretto?",
    "options": [
      "Corretto",
      "Errato",
      "Non applicabile",
      "Dipende"
    ],
    "answer": "Corretto"
  },
  {
    "id": 1137,
    "category": "politica",
    "text": "Istituzioni #3: principio corretto?",
    "options": [
      "Corretto",
      "Errato",
      "Non applicabile",
      "Dipende"
    ],
    "answer": "Corretto"
  },
  {
    "id": 1138,
    "category": "politica",
    "text": "Istituzioni #4: principio corretto?",
    "options": [
      "Corretto",
      "Errato",
      "Non applicabile",
      "Dipende"
    ],
    "answer": "Corretto"
  },
  {
    "id": 1139,
    "category": "politica",
    "text": "Istituzioni #5: principio corretto?",
    "options": [
      "Corretto",
      "Errato",
      "Non applicabile",
      "Dipende"
    ],
    "answer": "Corretto"
  },
  {
    "id": 1140,
    "category": "politica",
    "text": "Istituzioni #6: principio corretto?",
    "options": [
      "Corretto",
      "Errato",
      "Non applicabile",
      "Dipende"
    ],
    "answer": "Corretto"
  },
  {
    "id": 1141,
    "category": "politica",
    "text": "Istituzioni #7: principio corretto?",
    "options": [
      "Corretto",
      "Errato",
      "Non applicabile",
      "Dipende"
    ],
    "answer": "Corretto"
  },
  {
    "id": 1142,
    "category": "politica",
    "text": "Istituzioni #8: principio corretto?",
    "options": [
      "Corretto",
      "Errato",
      "Non applicabile",
      "Dipende"
    ],
    "answer": "Corretto"
  },
  {
    "id": 1143,
    "category": "politica",
    "text": "Istituzioni #9: principio corretto?",
    "options": [
      "Corretto",
      "Errato",
      "Non applicabile",
      "Dipende"
    ],
    "answer": "Corretto"
  },
  {
    "id": 1144,
    "category": "politica",
    "text": "Istituzioni #10: principio corretto?",
    "options": [
      "Corretto",
      "Errato",
      "Non applicabile",
      "Dipende"
    ],
    "answer": "Corretto"
  },
  {
    "id": 1145,
    "category": "politica",
    "text": "Istituzioni #11: principio corretto?",
    "options": [
      "Corretto",
      "Errato",
      "Non applicabile",
      "Dipende"
    ],
    "answer": "Corretto"
  },
  {
    "id": 1146,
    "category": "politica",
    "text": "Istituzioni #12: principio corretto?",
    "options": [
      "Corretto",
      "Errato",
      "Non applicabile",
      "Dipende"
    ],
    "answer": "Corretto"
  },
  {
    "id": 1147,
    "category": "politica",
    "text": "Istituzioni #13: principio corretto?",
    "options": [
      "Corretto",
      "Errato",
      "Non applicabile",
      "Dipende"
    ],
    "answer": "Corretto"
  },
  {
    "id": 1148,
    "category": "politica",
    "text": "Istituzioni #14: principio corretto?",
    "options": [
      "Corretto",
      "Errato",
      "Non applicabile",
      "Dipende"
    ],
    "answer": "Corretto"
  },
  {
    "id": 1149,
    "category": "politica",
    "text": "Istituzioni #15: principio corretto?",
    "options": [
      "Corretto",
      "Errato",
      "Non applicabile",
      "Dipende"
    ],
    "answer": "Corretto"
  },
  {
    "id": 1150,
    "category": "politica",
    "text": "Istituzioni #16: principio corretto?",
    "options": [
      "Corretto",
      "Errato",
      "Non applicabile",
      "Dipende"
    ],
    "answer": "Corretto"
  },
  {
    "id": 1151,
    "category": "politica",
    "text": "Istituzioni #17: principio corretto?",
    "options": [
      "Corretto",
      "Errato",
      "Non applicabile",
      "Dipende"
    ],
    "answer": "Corretto"
  },
  {
    "id": 1152,
    "category": "politica",
    "text": "Istituzioni #18: principio corretto?",
    "options": [
      "Corretto",
      "Errato",
      "Non applicabile",
      "Dipende"
    ],
    "answer": "Corretto"
  },
  {
    "id": 1153,
    "category": "cucina",
    "text": "Cucina #1: ingrediente base?",
    "options": [
      "Sì",
      "No",
      "Dipende",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1154,
    "category": "cucina",
    "text": "Cucina #2: ingrediente base?",
    "options": [
      "Sì",
      "No",
      "Dipende",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1155,
    "category": "cucina",
    "text": "Cucina #3: ingrediente base?",
    "options": [
      "Sì",
      "No",
      "Dipende",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1156,
    "category": "cucina",
    "text": "Cucina #4: ingrediente base?",
    "options": [
      "Sì",
      "No",
      "Dipende",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1157,
    "category": "cucina",
    "text": "Cucina #5: ingrediente base?",
    "options": [
      "Sì",
      "No",
      "Dipende",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1158,
    "category": "cucina",
    "text": "Cucina #6: ingrediente base?",
    "options": [
      "Sì",
      "No",
      "Dipende",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1159,
    "category": "cucina",
    "text": "Cucina #7: ingrediente base?",
    "options": [
      "Sì",
      "No",
      "Dipende",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1160,
    "category": "cucina",
    "text": "Cucina #8: ingrediente base?",
    "options": [
      "Sì",
      "No",
      "Dipende",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1161,
    "category": "cucina",
    "text": "Cucina #9: ingrediente base?",
    "options": [
      "Sì",
      "No",
      "Dipende",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1162,
    "category": "cucina",
    "text": "Cucina #10: ingrediente base?",
    "options": [
      "Sì",
      "No",
      "Dipende",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1163,
    "category": "cucina",
    "text": "Cucina #11: ingrediente base?",
    "options": [
      "Sì",
      "No",
      "Dipende",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1164,
    "category": "cucina",
    "text": "Cucina #12: ingrediente base?",
    "options": [
      "Sì",
      "No",
      "Dipende",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1165,
    "category": "cucina",
    "text": "Cucina #13: ingrediente base?",
    "options": [
      "Sì",
      "No",
      "Dipende",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1166,
    "category": "cucina",
    "text": "Cucina #14: ingrediente base?",
    "options": [
      "Sì",
      "No",
      "Dipende",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1167,
    "category": "cucina",
    "text": "Cucina #15: ingrediente base?",
    "options": [
      "Sì",
      "No",
      "Dipende",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1168,
    "category": "cucina",
    "text": "Cucina #16: ingrediente base?",
    "options": [
      "Sì",
      "No",
      "Dipende",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1169,
    "category": "cucina",
    "text": "Cucina #17: ingrediente base?",
    "options": [
      "Sì",
      "No",
      "Dipende",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1170,
    "category": "cucina",
    "text": "Cucina #18: ingrediente base?",
    "options": [
      "Sì",
      "No",
      "Dipende",
      "Mai"
    ],
    "answer": "Sì"
  },
  {
    "id": 1171,
    "category": "geografia_it",
    "text": "Geografia Italia #1: area corretta?",
    "options": [
      "Nord",
      "Centro",
      "Sud",
      "Isole"
    ],
    "answer": "Nord"
  },
  {
    "id": 1172,
    "category": "geografia_it",
    "text": "Geografia Italia #2: area corretta?",
    "options": [
      "Nord",
      "Centro",
      "Sud",
      "Isole"
    ],
    "answer": "Nord"
  },
  {
    "id": 1173,
    "category": "geografia_it",
    "text": "Geografia Italia #3: area corretta?",
    "options": [
      "Nord",
      "Centro",
      "Sud",
      "Isole"
    ],
    "answer": "Sud"
  },
  {
    "id": 1174,
    "category": "geografia_it",
    "text": "Geografia Italia #4: area corretta?",
    "options": [
      "Nord",
      "Centro",
      "Sud",
      "Isole"
    ],
    "answer": "Centro"
  },
  {
    "id": 1175,
    "category": "geografia_it",
    "text": "Geografia Italia #5: area corretta?",
    "options": [
      "Nord",
      "Centro",
      "Sud",
      "Isole"
    ],
    "answer": "Centro"
  },
  {
    "id": 1176,
    "category": "geografia_it",
    "text": "Geografia Italia #6: area corretta?",
    "options": [
      "Nord",
      "Centro",
      "Sud",
      "Isole"
    ],
    "answer": "Centro"
  },
  {
    "id": 1177,
    "category": "geografia_it",
    "text": "Geografia Italia #7: area corretta?",
    "options": [
      "Nord",
      "Centro",
      "Sud",
      "Isole"
    ],
    "answer": "Nord"
  },
  {
    "id": 1178,
    "category": "geografia_it",
    "text": "Geografia Italia #8: area corretta?",
    "options": [
      "Nord",
      "Centro",
      "Sud",
      "Isole"
    ],
    "answer": "Nord"
  },
  {
    "id": 1179,
    "category": "geografia_it",
    "text": "Geografia Italia #9: area corretta?",
    "options": [
      "Nord",
      "Centro",
      "Sud",
      "Isole"
    ],
    "answer": "Isole"
  },
  {
    "id": 1180,
    "category": "geografia_it",
    "text": "Geografia Italia #10: area corretta?",
    "options": [
      "Nord",
      "Centro",
      "Sud",
      "Isole"
    ],
    "answer": "Nord"
  },
  {
    "id": 1181,
    "category": "geografia_it",
    "text": "Geografia Italia #11: area corretta?",
    "options": [
      "Nord",
      "Centro",
      "Sud",
      "Isole"
    ],
    "answer": "Nord"
  },
  {
    "id": 1182,
    "category": "geografia_it",
    "text": "Geografia Italia #12: area corretta?",
    "options": [
      "Nord",
      "Centro",
      "Sud",
      "Isole"
    ],
    "answer": "Nord"
  },
  {
    "id": 1183,
    "category": "geografia_it",
    "text": "Geografia Italia #13: area corretta?",
    "options": [
      "Nord",
      "Centro",
      "Sud",
      "Isole"
    ],
    "answer": "Centro"
  },
  {
    "id": 1184,
    "category": "geografia_it",
    "text": "Geografia Italia #14: area corretta?",
    "options": [
      "Nord",
      "Centro",
      "Sud",
      "Isole"
    ],
    "answer": "Centro"
  },
  {
    "id": 1185,
    "category": "geografia_it",
    "text": "Geografia Italia #15: area corretta?",
    "options": [
      "Nord",
      "Centro",
      "Sud",
      "Isole"
    ],
    "answer": "Nord"
  },
  {
    "id": 1186,
    "category": "geografia_it",
    "text": "Geografia Italia #16: area corretta?",
    "options": [
      "Nord",
      "Centro",
      "Sud",
      "Isole"
    ],
    "answer": "Centro"
  },
  {
    "id": 1187,
    "category": "geografia_it",
    "text": "Geografia Italia #17: area corretta?",
    "options": [
      "Nord",
      "Centro",
      "Sud",
      "Isole"
    ],
    "answer": "Isole"
  },
  {
    "id": 1188,
    "category": "geografia_world",
    "text": "Geografia mondo #1: continente corretto?",
    "options": [
      "Africa",
      "Asia",
      "Europa",
      "America"
    ],
    "answer": "Asia"
  },
  {
    "id": 1189,
    "category": "geografia_world",
    "text": "Geografia mondo #2: continente corretto?",
    "options": [
      "Africa",
      "Asia",
      "Europa",
      "America"
    ],
    "answer": "America"
  },
  {
    "id": 1190,
    "category": "geografia_world",
    "text": "Geografia mondo #3: continente corretto?",
    "options": [
      "Africa",
      "Asia",
      "Europa",
      "America"
    ],
    "answer": "Europa"
  },
  {
    "id": 1191,
    "category": "geografia_world",
    "text": "Geografia mondo #4: continente corretto?",
    "options": [
      "Africa",
      "Asia",
      "Europa",
      "America"
    ],
    "answer": "Africa"
  },
  {
    "id": 1192,
    "category": "geografia_world",
    "text": "Geografia mondo #5: continente corretto?",
    "options": [
      "Africa",
      "Asia",
      "Europa",
      "America"
    ],
    "answer": "Asia"
  },
  {
    "id": 1193,
    "category": "geografia_world",
    "text": "Geografia mondo #6: continente corretto?",
    "options": [
      "Africa",
      "Asia",
      "Europa",
      "America"
    ],
    "answer": "America"
  },
  {
    "id": 1194,
    "category": "geografia_world",
    "text": "Geografia mondo #7: continente corretto?",
    "options": [
      "Africa",
      "Asia",
      "Europa",
      "America"
    ],
    "answer": "Europa"
  },
  {
    "id": 1195,
    "category": "geografia_world",
    "text": "Geografia mondo #8: continente corretto?",
    "options": [
      "Africa",
      "Asia",
      "Europa",
      "America"
    ],
    "answer": "Europa"
  },
  {
    "id": 1196,
    "category": "geografia_world",
    "text": "Geografia mondo #9: continente corretto?",
    "options": [
      "Africa",
      "Asia",
      "Europa",
      "America"
    ],
    "answer": "Asia"
  },
  {
    "id": 1197,
    "category": "geografia_world",
    "text": "Geografia mondo #10: continente corretto?",
    "options": [
      "Africa",
      "Asia",
      "Europa",
      "America"
    ],
    "answer": "Asia"
  },
  {
    "id": 1198,
    "category": "geografia_world",
    "text": "Geografia mondo #11: continente corretto?",
    "options": [
      "Africa",
      "Asia",
      "Europa",
      "America"
    ],
    "answer": "Europa"
  },
  {
    "id": 1199,
    "category": "geografia_world",
    "text": "Geografia mondo #12: continente corretto?",
    "options": [
      "Africa",
      "Asia",
      "Europa",
      "America"
    ],
    "answer": "Africa"
  },
  {
    "id": 1200,
    "category": "geografia_world",
    "text": "Geografia mondo #13: continente corretto?",
    "options": [
      "Africa",
      "Asia",
      "Europa",
      "America"
    ],
    "answer": "Africa"
  },
  {
    "id": 1201,
    "category": "geografia_world",
    "text": "Geografia mondo #14: continente corretto?",
    "options": [
      "Africa",
      "Asia",
      "Europa",
      "America"
    ],
    "answer": "America"
  },
  {
    "id": 1202,
    "category": "geografia_world",
    "text": "Geografia mondo #15: continente corretto?",
    "options": [
      "Africa",
      "Asia",
      "Europa",
      "America"
    ],
    "answer": "Africa"
  },
  {
    "id": 1203,
    "category": "geografia_world",
    "text": "Geografia mondo #16: continente corretto?",
    "options": [
      "Africa",
      "Asia",
      "Europa",
      "America"
    ],
    "answer": "Europa"
  },
  {
    "id": 1204,
    "category": "geografia_world",
    "text": "Geografia mondo #17: continente corretto?",
    "options": [
      "Africa",
      "Asia",
      "Europa",
      "America"
    ],
    "answer": "Europa"
  }
];
