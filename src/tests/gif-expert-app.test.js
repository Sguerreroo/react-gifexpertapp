import { shallow } from 'enzyme';

import GifExpertApp from '../GifExpertApp';

describe('<GifExpertApp />', () => {

  let wrapper = shallow(<GifExpertApp />);

  beforeEach(() => {
    wrapper = shallow(<GifExpertApp />);
  });

  test('should render <GifExpertApp /> component successfully', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render an h2 element', () => {
    const gifExpertAppTitle = wrapper.find('h2');

    expect(gifExpertAppTitle.length).toBe(1);
  });

  test('should render an h2 element with GifExpertApp text', () => {
    const gifExpertAppTitleText = wrapper.find('h2').text();

    expect(gifExpertAppTitleText).toBe('GifExpertApp');
  });

  test('should render an hr element', () => {
    const gifExpertAppTitle = wrapper.find('hr');

    expect(gifExpertAppTitle.length).toBe(1);
  });

});
