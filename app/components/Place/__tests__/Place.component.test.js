import Place from '../Place.component';

// Note: test renderer must be required after react-native.
import React from 'react';
import renderer from 'react-test-renderer';

describe('Place', () => {
  let component;

  beforeEach(() => {
    component = <Place/>;
  });

  it('renders correctly', () => {
    const tree = renderer.create(component);
    expect(tree).toMatchSnapshot();
  });
});
