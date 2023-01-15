import Component from '../lib/Components';
// import Elements from '../library/Elements';

class RegisterComponents extends Component {
  constructor() {
    super({
      name: 'register',
      model: {},
    });
  }

  // eslint-disable-next-line class-methods-use-this
  render(): HTMLElement {
    const regesterContainer = document.createElement('div');
    regesterContainer.innerHTML = `
    <form action="" class="regestration sign hide">
      <div class="signup">
        <div>
          <h2>Registreren</h2>
        </div>
        <div class="fields">
          <label for="email">Emailadres</label>
          <input type="email" name="email" required>
          <p id="signEmailErr" class="errorMessage"></p>
        </div>

        <div class="fields">
          <label for="">Gebruikersnaam</label>
          <input type="text" name="username" required>
          <p id="signUserErr" class="errorMessage"></p>
        </div>
        <div class="fields">
          <label for="">Wachtwoord</label>
          <input type="password" name="password" required>
          <p id="signPassErr" class="errorMessage"></p>
        </div>

        <button class="btn auth" type="submit">Signup</button>

        <p class="text--center">Or</p>

        <div class="other-flex">
          <button class="btn btn-other google" type="button">
            <img src="./src/images/google-logo-png-google-icon-download-icons-18.png" alt="">
          </button>
  
          <button class="btn btn-other github" type="button">
            <img src="./src/images/Octicons-mark-github.png" alt="">
          </button>
        </div>
        
        <p id="registerBtn" class="btn btn--third btnOther">Al een account? AANMELDEN</p>
      </div>
    </form>
    `;

    return regesterContainer;
  }
}

export default RegisterComponents;
