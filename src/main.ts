import { showOrHideComments, addingComments } from './comments';
import { extractBears } from './extractBears';
showOrHideComments();
addingComments();

// Function to fetch the image URLs based on the file names
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
