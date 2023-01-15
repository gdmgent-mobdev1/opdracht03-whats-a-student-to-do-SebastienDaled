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
          <input type="text" name="email" required>
          <p id="logEmailErr" class="errorMessage"></p>
        </div>
        <div class="fields">
          <label for="">Wachtwoord</label>
          <input type="password" name="password" required>
          <p id="logPassErr" class="errorMessage"></p>
        </div>

        <button type="submit" class="btn">Aanmelden</button>

        <p class="text--center">Of</p>

        <div class="other-flex">
          <button class="btn btn-other google" type="button">
            <img src="./src/images/google-logo-png-google-icon-download-icons-18.png" alt="">
          </button>
  
          <button class="btn btn-other github" type="button">
            <img src="./src/images/Octicons-mark-github.png" alt="">
          </button>
        </div>
        <p id="loginBtn" class="btn btn--third btnOther">Nog geen account? REGISTREREN</p>
      </div>
    </form>
    `;
    // loginContainer.appendChild(
    //   Elements.createHeader({
    //     textContent: 'Welcome to this page',
    //   }),
    // );

    return loginContainer;
  }
}

export default LoginComponents;
