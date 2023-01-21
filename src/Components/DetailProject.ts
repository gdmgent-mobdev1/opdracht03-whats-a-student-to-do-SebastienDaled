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
    const detailProject = document.createElement('div');
    detailProject.innerHTML = `
      <header>
        <h1>Whats a student to do</h1>
      </header>
      <p>djkfhushfkjhd</p>
      <button id="detailBackBtn" class="btn">terug</button>
      `;

    return detailProject;
  }
}

export default DetailProject;
