document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".submit")
    const homeLink = document.getElementById("home-link")
    const aboutLink = document.getElementById("about-link")
  
    form.addEventListener("click", (e) => {
      e.preventDefault();
      const username = document.querySelector('input[name="username"]').value
      const password = document.querySelector('input[name="password"]').value
      const authenticated = authentication(username, password)
  
      if (authenticated) {

      } 
      else {
        alert("No data matches your input.");
      }
    })
  
    homeLink.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Maaf, untuk saat ini halaman 'Home' masih belum tersedia.\n" + "Web ini dibuat dengan sangat sederhana dan masih belum lengkap, maaf atas ketidaknyamanan yang ditimbulkan\n" + "-Kenzie B");
    })
  
    aboutLink.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Maaf, untuk saat ini halaman 'About' masih belum tersedia.\n" + "Web ini dibuat dengan sangat sederhana dan masih belum lengkap, maaf atas ketidaknyamanan yang ditimbulkan\n" + "-Kenzie B");
    })
  
    document.getElementById("loginBtn").addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = 'index.html';
    })
})
function authentication (username,password){
    if(username =="Aretha" && password=="gtwMoPassApaWkwkwk"){
        window.location.href ='Aretha/Aretha.html'
        return true
    }
    else{
        return false
    }
}