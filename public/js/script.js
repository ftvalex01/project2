




document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("project2 JS imported successfully!");
  },
  false
);

function goToLogin(){
  window.location.pathname = "/auth/login"
}
function goToSignUp(){
  window.location.pathname= "/auth/signup"
}
function triggerLogOut(){
  axios.get("/auth/logout")
  window.location.pathname ="/"
}
