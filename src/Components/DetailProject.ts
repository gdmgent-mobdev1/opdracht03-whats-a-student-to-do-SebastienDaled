import Component from '../lib/Components';
// import Elements from '../library/Elements';

class DetailProject extends Component {
  constructor() {
    super({
      name: 'detailProject',
      model: {},
    });
  }

  // eslint-disable-next-line class-methods-use-this
  render(): HTMLElement {
    const homepage = document.createElement('div');
    homepage.innerHTML = `
      <header>
        <h1>Whats a student to do</h1>
      </header>
      
      `;

    return homepage;
  }
}

export default DetailProject;
