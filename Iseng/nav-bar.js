document.addEventListener("DOMContentLoaded", function() {
    const homeLink = document.getElementById("home-link");
    const aboutLink = document.getElementById("about-link");
  
    homeLink.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Jgn di teken dlu kak, blom bikin halaman redirect 😔👉👈\n" + "-Knz");
    });
  
    aboutLink.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Jgn di teken dlu kak, blom bikin halaman redirect 😔👉👈\n" + "-Knz");
    });
  
    document.getElementById("loginBtn").addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = '../index.html';
    });
});   