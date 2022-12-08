import Component from '../library/Components';
import Elements from '../library/Elements';

class LoginComponents extends Component {
  constructor() {
    super({
      name: 'Login',
      model: {},
    });
  }

  // eslint-disable-next-line class-methods-use-this
  render(): HTMLElement {
    const loginContainer = document.createElement('div');
    loginContainer.appendChild(
      Elements.createHeader({
        textContent: 'Welcome to this page',
      }),
    );
    return loginContainer;
  }
}

export default LoginComponents;
