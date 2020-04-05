import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { MemoryRouter, Route, Redirect } from 'react-router-dom';
import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import { mount, shallow } from 'enzyme';
import ProtectedRoute from './ProtectedRoute';

describe('<ProtectedRoute />', () => {
  const mockStore = configureMockStore([thunk]);
  let store: MockStoreEnhanced<unknown, {}>;

  it('renders <Redirect /> when not authenticated', () => {
    const wrapper = mount(buildComponent());
    const ComponentToRender: React.ElementType = wrapper.find(Route).prop('render');
    const componentWrapper = shallow(<ComponentToRender location="/test-origin" />);
    const redirect = componentWrapper.find(Redirect);
    expect(redirect.length).toBe(1);
    expect(redirect.prop('to')).toEqual({
      pathname: '/signIn',
      state: {
        referrer: '/test-origin'
      }
    });
  });

  it('renders <TestComponent /> when authenticated', () => {
    const wrapper = mount(buildComponent(true));
    const ComponentToRender: React.ElementType = wrapper.find(Route).prop('render');
    const componentWrapper = mount(<ComponentToRender />);
    const testComponent = componentWrapper.find(TestComponent);
    expect(testComponent.length).toBe(1);
    expect(testComponent.prop('test-prop')).toBe('test');
  });

  const buildComponent = (isAuthenticated?: boolean): JSX.Element => {
    const authentication = isAuthenticated ? { user: {} } : {};
    store = mockStore({ authentication: authentication });

    return (
      <Provider store={store}>
        <MemoryRouter>
          <ProtectedRoute path='test-path' component={() => <TestComponent test-prop="test" />} />
        </MemoryRouter>
      </Provider>
    );
  }

  const TestComponent: React.FC = () => <></>;
});
