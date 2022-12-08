import './css/style.css';
import { LoginComponents } from './Components';

const login = new LoginComponents();
const appContainer = document.querySelector<HTMLDivElement>('#app')!;

appContainer.appendChild(login.render());
