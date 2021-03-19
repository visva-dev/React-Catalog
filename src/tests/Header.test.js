import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { shallow, configure } from 'enzyme';
import Header from '../components/Header';

configure({ adapter: new Adapter() });

it('contains 2 Links via shallow', () => {
  const numLinks = shallow(<Header />).find('Link').length;
  expect(numLinks).toEqual(2);
});

describe('navbar snapshot', () => {
  it('should match with snapshot', () => {
    const tree = render(<BrowserRouter><Header /></BrowserRouter>); expect(tree).toMatchSnapshot();
  });
});
