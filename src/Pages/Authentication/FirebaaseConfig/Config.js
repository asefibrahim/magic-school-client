// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyBQX-vMNY3CpVzBe-zCSEQklnrJcWJYHi4",
//     authDomain: "magic-illusion-70851.firebaseapp.com",
//     projectId: "magic-illusion-70851",
//     storageBucket: "magic-illusion-70851.appspot.com",
//     messagingSenderId: "730209646637",
//     appId: "1:730209646637:web:826f9aee394ace2a24e0a4"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app