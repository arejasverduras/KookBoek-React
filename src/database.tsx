  export interface Recepeh {
    id: number,
    naam: string,
    ingredienten: string[],
    voorkeur: string,
    kooktijd: number,
    categorie: string,
    picture?: string | null,
    instructie: string[]
  }

  export type RecepehBook = Recepeh[];

  export const initialBook: RecepehBook = [{
    id: 1,
    naam: 'Shakshuka',
    ingredienten: ['rode punt paprika', 'ei', 'ui', '2 pakjes tomatenblokje','wortel','koriander', 'naanbrood', 'aioli'],
    voorkeur: 'vega',
    kooktijd: 20,
    categorie: 'exotisch',
    picture: "./images/Shakshuka.jpg",
    instructie: []
  }]

  export const userRecipehBook: RecepehBook = [
    {
      id: 1,
      naam: 'Paddenstoelen Pasta',
      ingredienten: ['pasta','paddenstoelen','citroen', 'creme fraiche', ],
      voorkeur: 'vega',
      kooktijd: 15,
      categorie: 'pasta',
      picture: "/images/pasta-paddenstoelen.jpg", 
      instructie: ['Maak de paddenstoelen schoon door het vuil eraf te vegen met een keukenpapiertje.', 'Snijd de paddenstoelen in stukjes', 'Kook ondertussen de pasta', 'Verhit olijfolie in de koekenpan en bak de paddenstoelen met een beetje zout']
      },
    {
      id: 2,
      naam: 'Kikkererwten & pasta soep',
      ingredienten: ['olijfolie', 'knoflook', 'roosmarijn', 'tomaten', 'kipbouillon', 'kikkererwten', 'pasta'],
      voorkeur: 'vlees',
      kooktijd: 30, 
      categorie: 'pasta',
      picture: "/images/chickpea_pasta_soup.png",
      instructie: ['Verhit de olie in een grote pan op middelmatig vuur.','Voeg de knoflook toe en sauté voor 3-4 minuten, blijf roeren zodat de knoflook niet aanbrand.','Voeg de roosmarijn toe en kook voor 2 minuten.','Voeg de tomaten toe, dek de pan af en laat 15 minuten sudderen', 'Voeg de kippenbouillon toe en laat voor nog 10 minuten sudderen.','Voeg als laatste de kikkererwten en pasta toe. Kruid en kook voor 8-10 minuten to de pasta al-dente is']
    },
    {
      id: 3,
      naam: 'Shakshuka',
      ingredienten: ['rode punt paprika', 'ei', 'ui', '2 pakjes tomatenblokje','wortel','koriander', 'naanbrood', 'aioli'],
      voorkeur: 'vega',
      kooktijd: 20,
      categorie: 'exotisch',
      picture: "/images/Shakshuka.jpg",
      instructie: []

    },
    {
      id: 4,
      naam: 'Omnia Groente met Kip',
      ingredienten: ['zoete aardappel','broccoli','kip','knoflook','olijfolie','peper en zout'],
      voorkeur: 'vlees',
      kooktijd: 60,
      categorie: 'oven',
      picture: '/images/broccoli_zoeteaardappel.png',
      instructie: ['Snijd de zoete aardappel in plakjes, en de Brocolli in kleine roosjes', 'Doe olijfolie in de Omnia','Leg de kip als eerste in de Omnia','Bedek met de zoete aardappelschijfjes en de brocollie roosjes', 'Snijd wat knoflook in kleine stukjes en verdeel','Zet de omnia op het vuur en plaats het deksel erop. Wacht 40min. Houd de pan zoveel mogelijk dicht','Je kunt dit gerecht ook in een gewone oven maken. Gebruik dan een ovenschaal.']
    },
    {
      id: 5,
      naam: 'Zalm Broccoli Pasta',
      ingredienten: ['zalmsnippers', 'brocolli', 'ui', 'knoflook', 'slagroom', 'italiaanse Kruiden', 'pasta'],
      voorkeur: 'vis',
      kooktijd: 15,
      categorie: 'pasta',
      picture: '/images/zalm_broccoli_pasta.png',
      instructie: ['Zet water op voor de pasta',
                  'Knoflook & ui in de koekenpan', 
                  'Voeg de brocolli toe', 
                  'Snijd de zalm in zalmsnippers en voeg toe',
                  'Voeg de italiaanse kruiden toe',
                  'Als het water kookt, doe je de pasta erin',
                'Voeg de slagroom toe',
              'Zet de saus op een laag vuur, deze is nu klaar',
              'Voeg de pasta toe aan de saus als deze klaar is. Roer door en serveer. Eet smakelijk!' ]
    }
  ];
