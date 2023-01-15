/* eslint-disable @typescript-eslint/no-unused-vars */
// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import {
  addDoc, collection, deleteDoc, doc, getFirestore, setDoc,
} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: 'AIzaSyCO2cj2etr0Klauhe3x6mIEsYcHviZLxi8',

  authDomain: 'todo-app-6c5f1.firebaseapp.com',

  projectId: 'todo-app-6c5f1',

  storageBucket: 'todo-app-6c5f1.appspot.com',

  messagingSenderId: '401988469025',

  appId: '1:401988469025:web:4a67a7230039ecfd3dbe60',

};

// Initialize Firebase

export const fireStoreApp = initializeApp(firebaseConfig);

// get data from firestore
export const fireStoreDb = getFirestore(fireStoreApp);
export const addTodoFirebase = async (text: string, todoId: string) => {
  const cardsSnapShot = collection(fireStoreDb, `lists/${todoId}/cards`);

  const docRef = await addDoc(cardsSnapShot, {
    title: text,
    description: '',
    comments: [],
  });
  return docRef.id;
};

export const updateTodoFirebase = async (
  todoListId: string,
  id: string,
  attribute: string,
  value: string,
) => {
  console.log(todoListId, id, attribute, value);
  if (attribute === 'title') {
    const answer = await setDoc(doc(fireStoreDb, `lists/${todoListId}/cards`, id), {
      title: value,
    }, { merge: true });
  } else {
    const answer = await setDoc(doc(fireStoreDb, `lists/${todoListId}/cards`, id), {
      description: value,
    }, { merge: true });
  }
};

export const deleteTodoListFirebase = async (id: string) => {
  await deleteDoc(doc(fireStoreDb, 'lists', id));
};

export const deleteCardFromFirebase = async (todoListId: string, id: string) => {
  await deleteDoc(doc(fireStoreDb, `lists/${todoListId}/cards`, id));
};
