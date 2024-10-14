import { fetchImageUrl } from './fetchImageUrl';

// Function to extract bear data from the wikitext
export async function extractBears(wikitext: string) {
  const speciesTables = wikitext.split('{{Species table/end}}');
  const bears = [];
  for (const table of speciesTables) {
    const rows = table.split('{{Species table/row');

    for (const row of rows) {
      const nameMatch = row.match(/\|name=\[\[(.*?)\]\]/);
      const binomialMatch = row.match(/\|binomial=(.*?)\n/);
      const imageMatch = row.match(/\|image=(.*?)\n/);
      const rangeMatch = row.match(/\|range=([^|]*)/);

      if (nameMatch && binomialMatch && imageMatch) {
        const fileName = imageMatch[1].trim().replace('File:', '');

        // Fetch the image URL and handle the bear data
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
