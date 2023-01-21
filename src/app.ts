/* eslint-disable no-new */
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import {
  collection,
  onSnapshot,
} from 'firebase/firestore';
import { LoginComponents, RegisterComponents } from './Components';

// import firestore
import { fireStoreDb } from './lib/firebase-init';
import { showHomepage } from './lib/projects';
// import localstorage from './Lib/localStorage';
// ------------------------------------------------------------------------------------------------------------------------------
const auth : any = getAuth();

const appContainer = document.querySelector<HTMLDivElement>('#app')!;

const register = new RegisterComponents();
const login = new LoginComponents();

appContainer.appendChild(login.render());
appContainer.appendChild(register.render());

const otherAuth : HTMLElement | any = document.querySelectorAll('.btnOther');

const signupForm : HTMLElement | any = document.querySelector('.sign');
const loginForm : HTMLElement | any = document.querySelector('.login');
const googleBtn : HTMLElement | any = document.querySelectorAll('.google');
const githubBtn : HTMLElement | any = document.querySelectorAll('.github');

let userInfo = auth.currentUser;

const check = () => {
  otherAuth.forEach((btn:
  { addEventListener: (arg0: string, arg1: (e: any) => void) => void; }) => {
    btn.addEventListener('click', (e : any) => {
      // appContainer.innerHTML = '';
      if (e.originalTarget.id === 'loginBtn') {
        loginForm.classList.add('hide');
        signupForm.classList.remove('hide');
        // appContainer.appendChild(register.render());
        // otherAuth = document.querySelectorAll('.btnOther');
        // check();
      } else if (e.originalTarget.id === 'registerBtn') {
        loginForm.classList.remove('hide');
        signupForm.classList.add('hide');
        // appContainer.appendChild(login.render());
        // otherAuth = document.querySelectorAll('.btnOther');
        // check();
      }
    });
  });
};
check();
loginForm.addEventListener('submit', (e: { preventDefault: () => void; }) => {
  e.preventDefault();

  const emialErr : HTMLElement | any = document.querySelector('#logEmailErr');
  const passErr : HTMLElement | any = document.querySelector('#logPassErr');
  const email = loginForm.email.value;
  const password = loginForm.password.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log(`user logged in:${cred.user}`);
      loginForm.reset();
      hideAuthWhenLoggedIn();
      showHomepage();
    }).catch((err) => {
      console.log(err);

      console.log(err.message);
      if (err.message === 'Firebase: Error (auth/user-not-found).') {
        emialErr.innerText = 'je hebt een verkeerd emailadress ingegeven';
      }
      if (err.message === 'Firebase: Error (auth/wrong-password).') {
        passErr.innerText = 'je hebt een verkeerd wachtwoord ingegeven';
      }
    });
});

signupForm.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  // const emialErr : HTMLElement | any = document.querySelector('#signEmailErr');
  const passErr : HTMLElement | any = document.querySelector('#signPassErr');
  // const userErr : HTMLElement | any = document.querySelector('#signUserErr');

  const email = signupForm.email.value;
  const password = signupForm.password.value;
  const username = signupForm.username.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log(`user created:${cred.user}`);

      updateProfile(auth.currentUser, {
        displayName: username,
      });

      signupForm.reset();
      hideAuthWhenLoggedIn();
      showHomepage();
    }).catch((err) => {
      console.log(err.message);
      if (err.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
        passErr.innerText = 'Wachtwoord moet minstens 6 characters hebben';
      }
      if (err.message === 'Firebase: Error (auth/wrong-password).') {
        passErr.innerText = 'je hebt een verkeerd wachtwoord ingegeven';
      }
    });
});

const provider = new GoogleAuthProvider();
googleBtn.forEach((google: { addEventListener: (arg0: string, arg1: () => void) => void; }) => {
  google.addEventListener('click', () => {
    signInWithPopup(auth, provider)
      .then(() => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential : any = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        // const { user } = result;
        // ...
        userInfo = auth.currentUser;
        console.log(userInfo);
        hideAuthWhenLoggedIn();
        // showTrello();
        showHomepage();
        // const addDiv = document.querySelector("#addTodoListDiv")
        // addDiv?.classList.remove("hide");
        
      }).catch(() => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // The email of the user's account used.
        // const { email } = error.customData;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  });
});
const provider2 = new GithubAuthProvider();
githubBtn.forEach((git: { addEventListener: (arg0: string, arg1: () => void) => void; }) => {
  git.addEventListener('click', () => {
    signInWithPopup(auth, provider2)
      .then(() => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        // const credential : any = GithubAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;

        // The signed-in user info.
        // const { user } = result;
        hideAuthWhenLoggedIn();
        showHomepage();
        // ...
      }).catch(() => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // The email of the user's account used.
        // const { email } = error.customData;
        // The AuthCredential type that was used.
        // const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
  });
});
console.log(userInfo);

const hideAuthWhenLoggedIn = () => {
  if (!signupForm.classList.contains("hide")) {
    signupForm.classList.add("hide");
  }
  if (!loginForm.classList.contains("hide")) {
    loginForm.classList.add("hide");
  }
}

// ------------------------------------------------------------------------------------------------------------------------------
const colRefP = collection(fireStoreDb, 'projecten');
console.log(colRefP);
onSnapshot(colRefP, (snapshot) => {
    console.log(snapshot);
    
  snapshot.docs.forEach(doc => {
    console.log(doc.data());
    
  })

})
