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
    const homepage = document.createElement('div');
    homepage.innerHTML = `
      <header>
        <h1>Whats a student to do</h1>
      </header>
      <div class="actionBtnDiv">
        <button id="addProjectBtn" class="btn actionBtn">voeg project toe</button>
        <button id="GotToTrello" class="btn actionBtn">To-Do</button>
      </div>
      <div id="showProjectsDiv">
      </div>
      <div id="addProjectFormDiv" class="addProjectFormDiv hide">
        <form id="addProjectForm" class="addProjectForm">
          <h2>maak een nieuw project</h2>
          <input type="text" placeholder="maak project" name="naam" required>
          <input type="text" placeholder="voeg beschrijving toe" name="beschrijving" required>
          <input type="date" name="deadline" id="" required placeholder="vul de deadline in">
          <button type="submit" class="btn addPrjBtn">Add</button>
          <button id="cancelPrjBtn" class="btn addPrjBtn cancelPrjBtn">cancel</button>
        </form>
      </div>
      `;

    return homepage;
  }
}

export default Homepage;
