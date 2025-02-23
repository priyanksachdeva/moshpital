import { auth, googleProvider } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Register user with email & password
document
  .getElementById("register-form")
  ?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User registered successfully!");
      window.location.href = "index.html"; // Redirect to login
    } catch (error) {
      alert(error.message);
    }
  });

// Login user with email & password
document.getElementById("login-form")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful!");
    window.location.href = "doctors.html"; // Redirect to doctor details
  } catch (error) {
    alert(error.message);
  }
});

// Google login
document.getElementById("google-login")?.addEventListener("click", async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    alert(`Google login successful! Welcome, ${result.user.displayName}`);
    window.location.href = "doctors.html"; // Redirect to doctor details
  } catch (error) {
    alert(error.message);
  }
});
