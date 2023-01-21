import { collection, doc, getFirestore, onSnapshot, setDoc } from "firebase/firestore";
import { Homepage } from "../Components"
import { showTrello } from "./showTrello";

const db = getFirestore();
const colRef = collection(db, 'projecten');

export const showHomepage = () => {
  const appContainer = document.querySelector<HTMLDivElement>('#app')!;

  const homepage = new Homepage();
  // const AddProjectComp = new AddProject();

  appContainer.appendChild(homepage.render());
  // const addProjectForm : HTMLElement | null= document.querySelector("#addProjectForm")!;
  const addProjectBtn : HTMLElement | null= document.querySelector("#addProjectBtn")!;
  const addProjectFormDiv : HTMLElement | null= document.querySelector("#addProjectFormDiv")!;
  const addProjectForm : HTMLFormElement | null= document.querySelector("#addProjectForm")!;
  const showProjectsDiv : HTMLFormElement | null= document.querySelector("#showProjectsDiv")!;
  const GotToTrello : HTMLFormElement | null= document.querySelector("#GotToTrello")!;
  // const addProjectInput = document.querySelector("#addProject");
  addProjectBtn.addEventListener("click", () => {
    if (addProjectFormDiv.classList.contains("hide")) {
      addProjectFormDiv.classList.remove("hide");
    } else {
      addProjectFormDiv.classList.add("hide");
    }
  })
  const cancelAdd = document.querySelector("#cancelPrjBtn");
  cancelAdd?.addEventListener("click", () => {
    addProjectFormDiv.classList.add("hide");
  })

  addProjectForm.addEventListener("submit", async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // console.log(date);
    
    await setDoc(doc(db, "projecten", makeRandomId(20)), {
      projectName: addProjectForm.naam.value,
      beschrijving: addProjectForm.beschrijving.value,
      deadline: addProjectForm.deadline.value,
    })

    addProjectForm.reset();
    addProjectFormDiv.classList.add("hide");
  })

  onSnapshot(colRef, (snapshot) => {
    showProjectsDiv.innerHTML = "";
    let projecten : any[] = [];
    // chatsDiv.innerHTML = "";

    snapshot.docs.forEach(doc => {
      // console.log(doc.data().chatName);
      console.log(doc);
      
      // console.log(doc.data().leftusers);
        projecten.push({ ...doc.data(), name: doc.id })
      
    })
    // console.log(chats);
  
    projecten.forEach(project => {
      console.log(project);
      
      showProjectsDiv.innerHTML += `
      <div class="prjDiv">
        <h2>${project.projectName}</h2>
        <h3>deadline: ${project.deadline}</h3>
        <p>beschrijving: ${project.beschrijving}</p>
       </div>
      `

      const prjDiv = document.querySelector(".prjDiv");

      prjDiv?.addEventListener("click", () => {
        
      })
    })
  })

  GotToTrello.addEventListener("click", () => {
    showTrello();
    const addDiv = document.querySelector("#addTodoListDiv")
    addDiv?.classList.remove("hide");
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

