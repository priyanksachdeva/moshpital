// js/doctors.js
import { db } from "./firebase.js";
import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

async function fetchDoctors() {
  const doctorsRef = collection(db, "doctors");
  const snapshot = await getDocs(doctorsRef);

  const doctorsList = document.getElementById("doctors-list");
  doctorsList.innerHTML = "";

  snapshot.forEach((doc) => {
    const doctor = doc.data();
    doctorsList.innerHTML += `<li>${doctor.name} - ${doctor.specialization}</li>`;
  });
}

document.addEventListener("DOMContentLoaded", fetchDoctors);
