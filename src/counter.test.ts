import { describe, it, expect, beforeEach } from 'vitest';
import { setupCounter } from './counter';
import { JSDOM } from 'jsdom';

describe('setupCounter', () => {
  let button: HTMLButtonElement;

  beforeEach(() => {
    // Set up JSDOM to simulate a browser-like environment
    const dom = new JSDOM('<!DOCTYPE html><html><body><button></button></body></html>');
    global.document = dom.window.document;
    button = document.querySelector('button') as HTMLButtonElement;

    // Initialize the counter on the button
    setupCounter(button);
  });

  it('should initialize the counter to 0', () => {
    // Test that the initial button text is "count is 0"
    expect(button.innerHTML).toBe('count is 0');
  });

  it('should increment the counter when clicked', () => {
    // Simulate a click and check if the counter increments
    button.click();
    expect(button.innerHTML).toBe('count is 1');
    
    button.click();
    expect(button.innerHTML).toBe('count is 2');
  });
});
