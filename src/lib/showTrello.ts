/* eslint-disable no-new */
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import {
  collection,
  getDocs,
  onSnapshot,
  addDoc,
} from 'firebase/firestore';
import { Card, LoginComponents, RegisterComponents, TodoList } from '../Components';
import { State, root } from '.';

// import firestore
import { fireStoreDb } from './firebase-init';
// import localstorage from './Lib/localStorage';
// -------------main------------
export const showTrello = () => {
  const app = document.querySelector("#app");

  const addDiv = document.createElement("div");
  addDiv.setAttribute("id", "addTodoListDiv");

  const addInput = document.createElement("input");
  addInput.setAttribute("id", "addTodoListInput");
  addInput.setAttribute("class", "comment");
  
  const addButton : HTMLButtonElement | null = document.createElement("button")!;
  addButton.setAttribute("id", "addTodoListButton");
  addButton.setAttribute("class", "btn-save");
  addButton.innerText = "Add list";

  addDiv.appendChild(addInput);
  addDiv.appendChild(addButton);
  app?.appendChild(addDiv);
  const addTodoListInput = document.getElementById('addTodoListInput') as HTMLInputElement;
  const addTodoListButton = document.getElementById('addTodoListButton') as HTMLElement;

  const addTodoListFirebase = async (title: string) => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const docRef = await addDoc(colRef, {
      title,
    });
    console.log('Document written with ID: ', docRef.id);
    return docRef.id;
  };

  addTodoListButton.addEventListener('click', async () => {
    if (addTodoListInput.value.trim() !== '') {
      await addTodoListFirebase(addTodoListInput.value);
      // new TodoList(root, addTodoListInput.value, id);

      addTodoListInput.value = '';
    }
  });

  const getCards = async (id: string) => {
    const cardsSnapShot = collection(fireStoreDb, `lists/${id}/cards`);
    const qSnap = await getDocs(cardsSnapShot);
    return qSnap.docs.map((d) => (
      {
        id: d.id,
        title: d.data().title,
        description: d.data().description,
        comments: d.data().comments,
        parentId: d.data().parentId,
      }
    ));
  };
  const createTodoList = ({ id, cards, title }: { id: string; cards: State[], title: string }) => {
    const newList: TodoList = new TodoList(root, title, id);

    cards.forEach((card: State) => {
      new Card(card.title, newList.div as HTMLElement, newList, card.id, id);
      // newList.addToDo();
    });
  };

  // select collection
  // We willen nu referen naar onze collectie `owl-statues`
  const colRef = collection(fireStoreDb, 'lists');
  console.log(colRef);

  // get data
  onSnapshot(colRef, (snapshot) => {
    snapshot.docChanges().forEach(async (change) => {
      if (change.type === 'added') {
        // snapshot.docs.forEach(async (doc) => {
        //   addTodoListInput.value = '';
        
        const cards = await getCards(change.doc.id);
        const { id } = change.doc;
        const { title } = change.doc.data();
        createTodoList({
          title, id, cards, ...change.doc.data(),
        });
        // });
      }
      if (change.type === 'modified') {
        // rerendering
      }
      if (change.type === 'removed') {
        // removing
      }
    });

  // document.querySelector('#app')!.innerHTML = '';
});
// const snapshot =  await getDocs(colRef);

// lists.forEach((listElement) => {
//   console.log(listElement)

//   // listElement.cards.forEach(
//   //   (card) => {
//   //     // newList.addToDo(card.)
//   //   }
//   // )

// });
}
