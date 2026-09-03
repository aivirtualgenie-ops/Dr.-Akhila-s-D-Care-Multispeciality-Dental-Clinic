document.getElementById("year").textContent = new Date().getFullYear();

document.querySelector(".menu").addEventListener("click", () => {
  const nav = document.querySelector("nav");

  nav.style.display = nav.style.display === "flex" ? "" : "flex";
  nav.style.position = "absolute";
  nav.style.top = "70px";
  nav.style.left = "0";
  nav.style.right = "0";
  nav.style.padding = "20px 7%";
  nav.style.background = "#fff";
  nav.style.flexDirection = "column";
});
