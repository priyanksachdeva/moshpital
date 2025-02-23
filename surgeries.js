// js/surgeries.js
import { db } from "./firebase.js";
import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

async function fetchSurgeries() {
  const surgeriesRef = collection(db, "surgeries");
  const snapshot = await getDocs(surgeriesRef);

  const surgeriesList = document.getElementById("surgeries-list");
  surgeriesList.innerHTML = "";

  snapshot.forEach((doc) => {
    const surgery = doc.data();
    surgeriesList.innerHTML += `
      <li>${surgery.patient} - ${surgery.operation} 
      (${surgery.date} at ${surgery.room})</li>`;
  });
}

document.addEventListener("DOMContentLoaded", fetchSurgeries);
