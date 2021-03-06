import Test from '../Test.page';

// Note: test renderer must be required after react-native.
import React from 'react';
import renderer from 'react-test-renderer';

describe('Test', () => {
  let component;

  beforeEach(() => {
    component = <Test/>;
  });

  it('renders correctly', () => {
    const tree = renderer.create(component);
    expect(tree).toMatchSnapshot();
  });
});
