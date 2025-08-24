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
    "text": "In quale sport si assegnano medaglie d'oro, argento e bronzo alle Olimpiadi?",
    "options": [
      "Tutti gli sport olimpici",
      "Solo atletica",
      "Solo nuoto",
      "Solo ginnastica"
    ],
    "answer": "Tutti gli sport olimpici"
  },
  {
    "id": 1003,
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
    "id": 1004,
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
    "id": 1008,
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
    "id": 1009,
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
    "id": 1010,
    "category": "cultura",
    "text": "Chi ha scritto 'La Divina Commedia'?",
    "options": [
      "Dante Alighieri",
      "Ugo Foscolo",
      "Giacomo Leopardi",
      "Alessandro Manzoni"
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
    "text": "Come si chiama una notizia leggera su vita privata dei VIP?",
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
      "Un regolamento scolastico",
      "Una sentenza"
    ],
    "answer": "La legge fondamentale"
  },
  {
    "id": 1028,
    "category": "politica",
    "text": "Il suffragio universale significa…",
    "options": [
      "Diritto di voto per tutti i cittadini adulti",
      "Voto solo per i laureati",
      "Voto solo per i lavoratori",
      "Voto solo per i proprietari"
    ],
    "answer": "Diritto di voto per tutti i cittadini adulti"
  },
  {
    "id": 1029,
    "category": "politica",
    "text": "Un disegno di legge diventa legge quando…",
    "options": [
      "È approvato da Parlamento e promulgato",
      "È proposto dal Governo",
      "È discusso in Commissione",
      "È pubblicato sui giornali"
    ],
    "answer": "È approvato da Parlamento e promulgato"
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
    "text": "Il Everest è…",
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
    "text": "Domanda Sport #6: regola o curiosità generica?",
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
    "text": "Domanda Sport #7: regola o curiosità generica?",
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
    "text": "Domanda Sport #8: regola o curiosità generica?",
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
    "text": "Domanda Sport #9: regola o curiosità generica?",
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
    "text": "Domanda Sport #10: regola o curiosità generica?",
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
    "text": "Domanda Sport #11: regola o curiosità generica?",
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
    "text": "Domanda Sport #12: regola o curiosità generica?",
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
    "text": "Domanda Sport #13: regola o curiosità generica?",
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
    "text": "Domanda Sport #14: regola o curiosità generica?",
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
    "text": "Domanda Sport #15: regola o curiosità generica?",
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
    "text": "Domanda Sport #16: regola o curiosità generica?",
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
    "text": "Domanda Sport #17: regola o curiosità generica?",
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
    "text": "Domanda Sport #18: regola o curiosità generica?",
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
    "text": "Domanda Sport #19: regola o curiosità generica?",
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
    "text": "Domanda Sport #20: regola o curiosità generica?",
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
    "text": "Domanda Sport #21: regola o curiosità generica?",
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
    "text": "Domanda Sport #22: regola o curiosità generica?",
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
    "text": "Domanda Sport #23: regola o curiosità generica?",
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
    "text": "Domanda Calcio #6: regola o curiosità generica?",
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
    "text": "Domanda Calcio #7: regola o curiosità generica?",
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
    "text": "Domanda Calcio #8: regola o curiosità generica?",
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
    "text": "Domanda Calcio #9: regola o curiosità generica?",
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
    "text": "Domanda Calcio #10: regola o curiosità generica?",
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
    "text": "Domanda Calcio #11: regola o curiosità generica?",
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
    "text": "Domanda Calcio #12: regola o curiosità generica?",
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
    "text": "Domanda Calcio #13: regola o curiosità generica?",
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
    "text": "Domanda Calcio #14: regola o curiosità generica?",
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
    "text": "Domanda Calcio #15: regola o curiosità generica?",
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
    "text": "Domanda Calcio #16: regola o curiosità generica?",
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
    "text": "Domanda Calcio #17: regola o curiosità generica?",
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
    "text": "Domanda Calcio #18: regola o curiosità generica?",
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
    "text": "Domanda Calcio #19: regola o curiosità generica?",
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
    "text": "Domanda Calcio #20: regola o curiosità generica?",
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
    "text": "Domanda Calcio #21: regola o curiosità generica?",
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
    "text": "Domanda Calcio #22: regola o curiosità generica?",
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
    "text": "Domanda Calcio #23: regola o curiosità generica?",
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
    "text": "Domanda di cultura generale #6: concetto base?",
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
    "text": "Domanda di cultura generale #7: concetto base?",
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
    "text": "Domanda di cultura generale #8: concetto base?",
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
    "text": "Domanda di cultura generale #9: concetto base?",
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
    "text": "Domanda di cultura generale #10: concetto base?",
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
    "text": "Domanda di cultura generale #11: concetto base?",
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
    "text": "Domanda di cultura generale #12: concetto base?",
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
    "text": "Domanda di cultura generale #13: concetto base?",
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
    "text": "Domanda di cultura generale #14: concetto base?",
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
    "text": "Domanda di cultura generale #15: concetto base?",
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
    "text": "Domanda di cultura generale #16: concetto base?",
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
    "text": "Domanda di cultura generale #17: concetto base?",
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
    "text": "Domanda di cultura generale #18: concetto base?",
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
    "text": "Domanda di cultura generale #19: concetto base?",
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
    "text": "Domanda di cultura generale #20: concetto base?",
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
    "text": "Domanda di cultura generale #21: concetto base?",
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
    "text": "Domanda di cultura generale #22: concetto base?",
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
    "text": "Domanda di cultura generale #23: concetto base?",
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
    "text": "Domanda Gossip #6: termine di tendenza?",
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
    "text": "Domanda Gossip #7: termine di tendenza?",
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
    "text": "Domanda Gossip #8: termine di tendenza?",
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
    "text": "Domanda Gossip #9: termine di tendenza?",
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
    "text": "Domanda Gossip #10: termine di tendenza?",
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
    "text": "Domanda Gossip #11: termine di tendenza?",
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
    "text": "Domanda Gossip #12: termine di tendenza?",
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
    "text": "Domanda Gossip #13: termine di tendenza?",
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
    "text": "Domanda Gossip #14: termine di tendenza?",
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
    "text": "Domanda Gossip #15: termine di tendenza?",
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
    "text": "Domanda Gossip #16: termine di tendenza?",
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
    "text": "Domanda Gossip #17: termine di tendenza?",
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
    "text": "Domanda Gossip #18: termine di tendenza?",
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
    "text": "Domanda Gossip #19: termine di tendenza?",
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
    "text": "Domanda Gossip #20: termine di tendenza?",
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
    "text": "Domanda Gossip #21: termine di tendenza?",
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
    "text": "Domanda Gossip #22: termine di tendenza?",
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
    "text": "Domanda Gossip #23: termine di tendenza?",
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
    "text": "Domanda Moda #6: termine di tendenza?",
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
    "text": "Domanda Moda #7: termine di tendenza?",
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
    "text": "Domanda Moda #8: termine di tendenza?",
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
    "text": "Domanda Moda #9: termine di tendenza?",
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
    "text": "Domanda Moda #10: termine di tendenza?",
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
    "text": "Domanda Moda #11: termine di tendenza?",
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
    "text": "Domanda Moda #12: termine di tendenza?",
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
    "text": "Domanda Moda #13: termine di tendenza?",
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
    "text": "Domanda Moda #14: termine di tendenza?",
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
    "text": "Domanda Moda #15: termine di tendenza?",
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
    "text": "Domanda Moda #16: termine di tendenza?",
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
    "text": "Domanda Moda #17: termine di tendenza?",
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
    "text": "Domanda Moda #18: termine di tendenza?",
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
    "text": "Domanda Moda #19: termine di tendenza?",
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
    "text": "Domanda Moda #20: termine di tendenza?",
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
    "text": "Domanda Moda #21: termine di tendenza?",
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
    "text": "Domanda Moda #22: termine di tendenza?",
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
    "text": "Domanda Moda #23: termine di tendenza?",
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
    "text": "Domanda politica #6: principio istituzionale?",
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
    "text": "Domanda politica #7: principio istituzionale?",
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
    "text": "Domanda politica #8: principio istituzionale?",
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
    "text": "Domanda politica #9: principio istituzionale?",
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
    "text": "Domanda politica #10: principio istituzionale?",
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
    "text": "Domanda politica #11: principio istituzionale?",
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
    "text": "Domanda politica #12: principio istituzionale?",
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
    "text": "Domanda politica #13: principio istituzionale?",
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
    "text": "Domanda politica #14: principio istituzionale?",
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
    "text": "Domanda politica #15: principio istituzionale?",
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
    "text": "Domanda politica #16: principio istituzionale?",
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
    "text": "Domanda politica #17: principio istituzionale?",
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
    "text": "Domanda politica #18: principio istituzionale?",
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
    "text": "Domanda politica #19: principio istituzionale?",
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
    "text": "Domanda politica #20: principio istituzionale?",
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
    "text": "Domanda politica #21: principio istituzionale?",
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
    "text": "Domanda politica #22: principio istituzionale?",
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
    "text": "Domanda politica #23: principio istituzionale?",
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
    "text": "Domanda di cucina #6: ingrediente base?",
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
    "text": "Domanda di cucina #7: ingrediente base?",
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
    "text": "Domanda di cucina #8: ingrediente base?",
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
    "text": "Domanda di cucina #9: ingrediente base?",
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
    "text": "Domanda di cucina #10: ingrediente base?",
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
    "text": "Domanda di cucina #11: ingrediente base?",
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
    "text": "Domanda di cucina #12: ingrediente base?",
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
    "text": "Domanda di cucina #13: ingrediente base?",
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
    "text": "Domanda di cucina #14: ingrediente base?",
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
    "text": "Domanda di cucina #15: ingrediente base?",
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
    "text": "Domanda di cucina #16: ingrediente base?",
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
    "text": "Domanda di cucina #17: ingrediente base?",
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
    "text": "Domanda di cucina #18: ingrediente base?",
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
    "text": "Domanda di cucina #19: ingrediente base?",
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
    "text": "Domanda di cucina #20: ingrediente base?",
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
    "text": "Domanda di cucina #21: ingrediente base?",
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
    "text": "Domanda di cucina #22: ingrediente base?",
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
    "text": "Domanda di cucina #23: ingrediente base?",
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
    "text": "Domanda geografia Italia #6: località o concetto?",
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
    "text": "Domanda geografia Italia #7: località o concetto?",
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
    "text": "Domanda geografia Italia #8: località o concetto?",
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
    "text": "Domanda geografia Italia #9: località o concetto?",
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
    "text": "Domanda geografia Italia #10: località o concetto?",
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
    "text": "Domanda geografia Italia #11: località o concetto?",
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
    "text": "Domanda geografia Italia #12: località o concetto?",
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
    "text": "Domanda geografia Italia #13: località o concetto?",
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
    "text": "Domanda geografia Italia #14: località o concetto?",
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
    "text": "Domanda geografia Italia #15: località o concetto?",
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
    "text": "Domanda geografia Italia #16: località o concetto?",
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
    "text": "Domanda geografia Italia #17: località o concetto?",
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
    "text": "Domanda geografia Italia #18: località o concetto?",
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
    "text": "Domanda geografia Italia #19: località o concetto?",
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
    "text": "Domanda geografia Italia #20: località o concetto?",
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
    "text": "Domanda geografia Italia #21: località o concetto?",
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
    "text": "Domanda geografia Italia #22: località o concetto?",
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
    "text": "Domanda geografia mondo #6: continente corretto?",
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
    "text": "Domanda geografia mondo #7: continente corretto?",
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
    "text": "Domanda geografia mondo #8: continente corretto?",
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
    "text": "Domanda geografia mondo #9: continente corretto?",
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
    "text": "Domanda geografia mondo #10: continente corretto?",
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
    "text": "Domanda geografia mondo #11: continente corretto?",
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
    "text": "Domanda geografia mondo #12: continente corretto?",
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
    "text": "Domanda geografia mondo #13: continente corretto?",
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
    "text": "Domanda geografia mondo #14: continente corretto?",
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
    "text": "Domanda geografia mondo #15: continente corretto?",
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
    "text": "Domanda geografia mondo #16: continente corretto?",
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
    "text": "Domanda geografia mondo #17: continente corretto?",
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
    "text": "Domanda geografia mondo #18: continente corretto?",
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
    "text": "Domanda geografia mondo #19: continente corretto?",
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
    "text": "Domanda geografia mondo #20: continente corretto?",
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
    "text": "Domanda geografia mondo #21: continente corretto?",
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
    "text": "Domanda geografia mondo #22: continente corretto?",
    "options": [
      "Africa",
      "Asia",
      "Europa",
      "America"
    ],
    "answer": "Europa"
  }
];
