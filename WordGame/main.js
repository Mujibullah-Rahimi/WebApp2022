const wordList = [
    "Huske",
    "Trene",
    "Danse",
    "Hoppe",
    "Sykle",
    "Gå",
    "Rulle",
    "Trille",
    "Kjøre",
    "Løpe",
    "Springe",
    "Hinke",
    "Sparke",
    "Sprinte",
    "Forflytte",
    "Trimme",
    "Løfte",
    "Snurre",
    "Svinge",
    "Svømme",
    "Flyte",
    "Fly",
    "Sveve",
    "Ake",
    "Dra",
  ];

  // hente ut alle elementer fra wordlist
  const spans = document.querySelectorAll("span");
  const inputs = document.querySelectorAll("input");
  const test = document.getElementById("test");

  const random =()=>{
    return Math.floor(Math.random() * wordList.length)
  }

  const addWords =()=>{
    [...spans].forEach((span)=> span.innerHTML = wordList[random()]);
  }
addWords();


  // sortere elementene som er hentet ut
  // legge til eventlistener på test-knappen
  // håndtere "click" på test-knappen, og hente verdier fra input-elementene
  // sjekke om input-verdiene stemmer overens med plassering av ord i den sorterte listen.
  // endre farge på test-knapp ved riktig/feil

