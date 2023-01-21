import { collection, doc, getFirestore, onSnapshot, setDoc } from "firebase/firestore";
import { DetailProject } from "../Components"
import { showHomepage } from "./projects";
import { showTrello } from "./showTrello";

const db = getFirestore();
const colRef = collection(db, 'projecten');

export const showDetail = () => {
  const appContainer = document.querySelector<HTMLDivElement>('#app')!;

  const detailproject = new DetailProject();
  // const AddProjectComp = new AddProject();
  appContainer.innerHTML = "";
  appContainer.appendChild(detailproject.render());
  
  const detailBackBtn = document.querySelector("#detailBackBtn");

  detailBackBtn?.addEventListener("click", () => {
    showHomepage();
  })
} 

const makeRandomId = (length : number) => {
  let result : string = "";
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  // console.log(result);
  
  return result;
}

