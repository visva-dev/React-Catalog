import '@testing-library/jest-dom';
import configureStore from '../app/store';

describe('The configureStore object', () => {
  it('should validate redux configureStore object', () => {
    expect(configureStore).toBeTruthy();
    expect(typeof configureStore).toBe('object');
  });
});
