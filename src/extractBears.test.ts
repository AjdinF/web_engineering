import { describe, expect, it } from 'vitest';
import { extractBears } from './extractBears';

describe('extractBears', () => {
  it('should correctly extract bear data from wikitext', async () => {
    const mockWikitext = `
      {{Species table/row|name=[[Polar bear]]|binomial=Ursus maritimus|image=polar_bear.jpg|range=Arctic}}
      {{Species table/end}}
    `;

    const bears = await extractBears(mockWikitext);

    expect(bears).toHaveLength(1);
    expect(bears[0].name).toBe('Polar bear');
    expect(bears[0].binomial).toBe('Ursus maritimus');
    expect(bears[0].image).toBeUndefined(); // Assuming image fetching is external and not part of this test
    expect(bears[0].range).toBe('Arctic');
  });

  it('should handle cases where bear data is incomplete', async () => {
    const mockWikitext = `
      {{Species table/row|name=[[Grizzly bear]]|binomial=Ursus arctos|range=North America}}
      {{Species table/end}}
    `;

    const bears = await extractBears(mockWikitext);

    expect(bears).toHaveLength(1);
    expect(bears[0].name).toBe('Grizzly bear');
    expect(bears[0].binomial).toBe('Ursus arctos');
    expect(bears[0].image).toBeUndefined(); // No image provided in wikitext
    expect(bears[0].range).toBe('North America');
  });
});
