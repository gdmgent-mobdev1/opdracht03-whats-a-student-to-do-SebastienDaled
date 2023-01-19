import Component from '../lib/Components';
// import Elements from '../library/Elements';

class Homepage extends Component {
  constructor() {
    super({
      name: 'register',
      model: {},
    });
  }

  // eslint-disable-next-line class-methods-use-this
  render(): HTMLElement {
    const Homepage = document.createElement('div');
    Homepage.innerHTML = `
    `;

    return Homepage;
  }
}

export default Homepage;
