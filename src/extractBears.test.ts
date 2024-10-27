import { describe, expect, it, vi, beforeEach } from 'vitest';
import { extractBears } from './extractBears';
import { JSDOM } from 'jsdom';


// Mock fetchImageUrl to return a specific value instead of making actual API calls
vi.mock('./fetchImageUrl', () => ({
  fetchImageUrl: vi.fn().mockResolvedValue('https://example.com/bear_image.jpg'),
}));

describe('extractBears', () => {
  // Set up JSDOM to simulate the browser environment
  beforeEach(() => {
    const dom = new JSDOM(`<!DOCTYPE html><html><body><div class="more_bears"></div></body></html>`);
    global.document = dom.window.document;
  });

  it('should extract bear data and update the DOM correctly', async () => {
    const mockWikitext = `
      {{Species table/row|name=[[Polar bear]]|binomial=Ursus maritimus|image=polar_bear.jpg|range=Arctic}}
      {{Species table/end}}
    `;

    await extractBears(mockWikitext);

    // Check if the bears are extracted correctly
    const moreBearsSection = document.querySelector('.more_bears');
    expect(moreBearsSection?.innerHTML).toContain('Polar bear');
    expect(moreBearsSection?.innerHTML).toContain('Ursus maritimus');
    expect(moreBearsSection?.innerHTML).toContain('https://example.com/bear_image.jpg');
    expect(moreBearsSection?.innerHTML).toContain('Arctic');
  });

  it('should not update the DOM when image is missing', async () => {
    const mockWikitext = `
      {{Species table/row|name=[[Grizzly bear]]|binomial=Ursus arctos|range=North America}}
      {{Species table/end}}
    `;

    await extractBears(mockWikitext);

    // Check if the DOM was NOT updated due to missing image
    const moreBearsSection = document.querySelector('.more_bears');
    expect(moreBearsSection?.innerHTML).toBe(''); // No bear should be added since image is missing
  });
});
