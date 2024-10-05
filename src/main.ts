import { showOrHideComments, addingComments } from './comments';

showOrHideComments();
addingComments();

// Function to fetch the image URLs based on the file names
// COMMENT: auch hier die Variablen zu "Const" geändert, weil die Variablen innerhalb dre Funktion nicht geändert werden
// COMMENT: Try/Catch integriert, da wir hier etwas returnen.
const baseUrl = 'https://en.wikipedia.org/w/api.php';
const title = 'List_of_ursids';

const params = {
  action: 'parse',
  page: title,
  prop: 'wikitext',
  section: String(3),
  format: 'json',
  origin: '*',
};

// Define types for the image response
interface ImageInfo {
  url: string;
}
interface Page {
  imageinfo?: ImageInfo[];
}

const fetchImageUrl = async (fileName: string): Promise<string | undefined> => {
  const imageParams = {
    action: 'query',
    titles: `File:${fileName}`,
    prop: 'imageinfo',
    iiprop: 'url',
    format: 'json',
    origin: '*',
  };

  const url = `${baseUrl}?${new URLSearchParams(imageParams).toString()}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    const pages: Record<string, Page> = data.query.pages; //Use defined Page type
    const page = Object.values(pages)[0];

    if (page && page.imageinfo && page.imageinfo[0]) {
      const imageUrl = page.imageinfo[0].url;
      return imageUrl;
    } else {
      console.error('Image information not available');
      return undefined; // Handle the error
    }
  } catch (error) {
    console.error('Error fetching image URL:', error);
  }
};

// Function to extract bear data from the wikitext
// COMMENT: Habe die Funktion auf eine asynchrone geändert.
async function extractBears(wikitext: string) {
  const speciesTables = wikitext.split('{{Species table/end}}');
  const bears = [];
  //COMMENT: wegen dem await im try and catch block habe ich die forEach Schleifen
  //         auf For Schleifen geändert (for schleife warte auf das Ergebnis + try/catch funktioniert einfacher)
  for (const table of speciesTables) {
    const rows = table.split('{{Species table/row');

    for (const row of rows) {
      const nameMatch = row.match(/\|name=\[\[(.*?)\]\]/);
      const binomialMatch = row.match(/\|binomial=(.*?)\n/);
      const imageMatch = row.match(/\|image=(.*?)\n/);
      //COMMENT: hier habe ich die Konstante erstellt und im Try "rangeMatch[1]"" eingefügt
      const rangeMatch = row.match(/\|range=([^|]*)/);

      if (nameMatch && binomialMatch && imageMatch) {
        const fileName = imageMatch[1].trim().replace('File:', '');

        // Fetch the image URL and handle the bear data
        // COMMENT: Hier habe ich await eingefügt, um die Verschachtelung aufzulösen
        try {
          const imageUrl = await fetchImageUrl(fileName);

          const bear = {
            name: nameMatch[1],
            binomial: binomialMatch[1],
            image: imageUrl,
            range: rangeMatch ? rangeMatch[1] : 'Unknown', // Handle potential null
          };
          bears.push(bear);
        } catch (error) {
          console.error(error);
        }

        // Only update the UI after all bears are processed
        // COMMENT: IF Bedingung wurde hier entfernt, weil aufgrund der await funktion sowieso erstmal alle Aufrufe
        //          innerhalb ausgeführt werden bevor hier hergesprungen wird
        const moreBearsSection = document.querySelector<HTMLElement>('.more_bears');
        if (moreBearsSection) {
          bears.forEach((bear) => {
            moreBearsSection.innerHTML += `
            <div>
              <h3>${bear.name} (${bear.binomial})</h3>
              <img src="${bear.image}" alt="${bear.name}" style="width:200px; height:auto;">
              <p><strong>Range:</strong> ${bear.range}</p>
            </div>
            `;
          });
        } else {
          console.error(Error);
        }
      }
    }
  }
}

//COMMENT: hier habe ich die Funktion zu einer async Funktion gemacht, wegen den verschachtelten then Abrufen.
//         Weil wir hier returnen, habe ich auch ein try catch eingebaut,
async function getBearData() {
  const url = `${baseUrl}?${new URLSearchParams(params).toString()}`;
  try {
    const res = await fetch(url);
    const data = await res.json();

    const wikitext = data.parse.wikitext['*'];
    await extractBears(wikitext);
  } catch (error) {
    console.error(error);
  }
}

// Fetch and display the bear data
getBearData();
