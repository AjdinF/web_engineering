const baseUrl = 'https://en.wikipedia.org/w/api.php';
// Define types for the image response
interface ImageInfo {
  url: string;
}
interface Page {
  imageinfo?: ImageInfo[]; // imageinfo is optional
}

export const fetchImageUrl = async (fileName: string): Promise<string | undefined> => {
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
