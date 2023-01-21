import Component from '../lib/Components';
// import Elements from '../library/Elements';

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
    loginContainer.innerHTML = `
    <form action="" class="regestration login">
      <div class="signup">
        <div>
          <h2>Aanmelden</h2>
        </div>
        <div class="fields">
          <label for="">Emailadress</label>
          <input type="text" name="email" required placeholder="vul je email in">
          <p id="logEmailErr" class="errorMessage"></p>
        </div>
        <div class="fields">
          <label for="">Wachtwoord</label>
          <input type="password" name="password" required placeholder="vul je wachtwoord in">
          <p id="logPassErr" class="errorMessage"></p>
        </div>

        <button type="submit" class="btn btn-auth">Aanmelden</button>

        <p class="text--center">Of</p>

        <div class="other-flex">
          <button class="btn btn-other google" type="button">
            <img src="./src/images/google-logo-png-google-icon-download-icons-18.png" alt="GoogleLogo">
          </button>
  
          <button class="btn btn-other github" type="button">
            <img src="./src/images/Octicons-mark-github.png" alt="githubLogo">
          </button>
        </div>
        <p id="loginBtn" class="btn btn--third btnOther">Nog geen account? REGISTREREN</p>
      </div>
    </form>
    `;

    const otherForm = document.querySelector(".btnOther");

    otherForm?.addEventListener('click', () => {
      
    })

    return loginContainer;
  }
}

export default LoginComponents;
