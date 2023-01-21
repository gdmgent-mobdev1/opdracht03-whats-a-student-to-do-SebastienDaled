import { arrayUnion, collection, doc, getFirestore, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { DetailProject } from "../Components"
import { showHomepage } from "./projects";
import { showTrello } from "./showTrello";

const db = getFirestore();
const colRef = collection(db, 'projecten');

export const showDetail = (projectId: string) => {
  const appContainer = document.querySelector<HTMLDivElement>('#app')!;

  const detailproject = new DetailProject();
  // const AddProjectComp = new AddProject();
  appContainer.innerHTML = "";
  appContainer.appendChild(detailproject.render());
  
  const detailBackBtn = document.querySelector("#detailBackBtn");
  const subTaskDiv : HTMLElement | null = document.querySelector("#subTaskDiv")!;
  const addSubtaskBtn = document.querySelector("#addSubtaskBtn");
  const addSubtaskFormDiv = document.querySelector("#addSubtaskFormDiv");
  const descriptionDiv : HTMLElement | null= document.querySelector("#descriptionDiv")!;
  const GotToTrelloSub : HTMLElement | null= document.querySelector("#GotToTrelloSub")!;


  detailBackBtn?.addEventListener("click", () => {
    appContainer.innerHTML = "";
    showHomepage();
  })

  addSubtaskBtn?.addEventListener("click", () => {
    addSubtaskFormDiv?.classList.remove("hide")
    makeSubTask(projectId)
  });

  GotToTrelloSub.addEventListener("click", () => {
    showTrello();
  })

  onSnapshot(colRef, (snapshot: { docs: any[]; }) => {
    let project : any;
    subTaskDiv.innerHTML = "";
    snapshot.docs.forEach(doc => {
      // console.log(doc.data());
      
      if (doc.id === projectId) {
        project = ({ ...doc.data(), name: doc.id })
      }
    })
    descriptionDiv.innerHTML = `
    <h2>${project.projectName}</h2>
    <h3><span class="bold">deadline:</span> ${project.deadline}</h3>
    <p><span class="bold">beschrijving:</span> ${project.beschrijving}</p>
    `; 

    project.subTasks.forEach((task: {
      beschrijving: any;
      taskName: any; deadline: any; 
    }) => {
      subTaskDiv.innerHTML += `
        <div class="subTaak">
          <h2>${task.taskName}</h2>
          <h3>deadline: ${task.deadline}</h3>
          <p>beschrijving: ${task.beschrijving}</p>
        </div
      `;
    });
    console.log(project);
  })

} 

const makeSubTask = async (id: string) => {
  const addSubtaskFormDiv : HTMLElement | null = document.querySelector("#addSubtaskFormDiv")!;
  const cancelSubBtn : HTMLButtonElement| null = document.querySelector("#cancelSubBtn")!;
  const addSubtaskForm : HTMLFormElement | null = document.querySelector("#addSubtaskForm");
  console.log(addSubtaskForm);
  
  addSubtaskForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    await updateDoc(doc(db, "projecten", id), {
      subTasks: arrayUnion({
        taskName: addSubtaskForm.naam.value,
        beschrijving: addSubtaskForm.beschrijving.value,
        deadline: addSubtaskForm.deadline.value,
      })
    });

    addSubtaskForm.reset();
    addSubtaskFormDiv.classList.add("hide");
  })
  
  cancelSubBtn?.addEventListener("click", () => {
    addSubtaskFormDiv.classList.add("hide");
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

