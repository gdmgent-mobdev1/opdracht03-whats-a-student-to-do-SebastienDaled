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
      <header class="header__sub">
        <button id="detailBackBtn" class="btn btnBack"><</button>
        <h1>Whats a student to do</h1>
      </header>
      <div class="actionBtnDiv">
        <button id="addSubtaskBtn" class="btn actionBtn">voeg subtaak toe</button>
        <button id="GotToTrelloSub" class="btn actionBtn">To-Do</button>
      </div>
      <div id="descriptionDiv" class="descriptionDiv"></div>
      <h2 class="subtitle">Subtaken:</h2>
      <div id="subTaskDiv" class="subTaskDiv"></div>

      <div id="addSubtaskFormDiv" class="addProjectFormDiv hide">
        <form id="addSubtaskForm" class="addProjectForm">
          <h2>maak een nieuw project</h2>
          <input type="text" placeholder="maak een subtaak" name="naam" required>
          <input type="text" placeholder="voeg beschrijving toe" name="beschrijving" required>
          <input type="date" name="deadline" id="" required placeholder="vul de deadline in">
          <button type="submit" class="btn addPrjBtn">Add</button>
          <button id="cancelSubBtn" class="btn addPrjBtn cancelPrjBtn">cancel</button>
        </form>
      </div>
      `;

    return detailProject;
  }
}

export default DetailProject;
