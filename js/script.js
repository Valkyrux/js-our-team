const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];
// seleziono il container per le card
const container = document.querySelector(".team-container");
// genero le card e le inserisco
function printCardByObjectArray(objectArray, DOMPosition) {
// svuoto il contenuto del container per le card (non tocco l'HTML)
  DOMPosition.innerHTML = "";
  for(let i = 0; i < objectArray.length; i++) {
    // costruisco la card
    const teamCard = document.createElement("div");
    teamCard.classList.add("team-card");
    // costruisco l'img container
    const cardImage = document.createElement("div");
    cardImage.classList.add("card-image");
    // costruisco l'immagine
    const img = document.createElement("img");
    img.src = "img/" + objectArray[i].image;
    img.alt = objectArray[i].name;
    // metto l'img nel suo container
    cardImage.append(img);
    // img container nella card
    teamCard.append(cardImage);
    // creo il contenitore per il testo
    const cardText = document.createElement("div");
    cardText.classList.add("card-text");
    // creo l'h3
    const h3Name = document.createElement("h3");
    h3Name.append(objectArray[i].name);
    // creo il p
    const pRole = document.createElement("p");
    pRole.append(objectArray[i].role);
    // metto h3 e p su card-text
    cardText.append(h3Name);
    cardText.append(pRole);
    // metto tutto in teamCard
    teamCard.append(cardText);
    DOMPosition.append(teamCard);
  }
}  
// genero la pagina con l'oggetto dato
printCardByObjectArray(team, container);