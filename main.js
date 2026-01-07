//movimentação do nav
const nav = document.getElementById("nav-bar");

nav.addEventListener("mousemove", (e) => {
  const rect = nav.getBoundingClientRect();

  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;

  nav.style.setProperty("--x", `${x}%`);
  nav.style.setProperty("--y", `${y}%`);
});

//copia instantanea
const Container = document.querySelector('#Home')
  const email = document.getElementById("email");
  const zap = document.getElementById("zap")
  email.addEventListener("click", () => {
    const email = "gabrielbittencourteprado@gmail.com";

    navigator.clipboard.writeText(email).then(() => {
  
    let fedback = document.createElement('span')
    let divfedback = document.createElement('div')
         fedback.textContent = "Copiado com sucesso!";
         fedback.style.color = "salmon";
       Container.appendChild(divfedback)
     divfedback.appendChild(fedback)

     setTimeout(() => {
        divfedback.remove("div-fedback")
     }, 700);
    });
  });
  zap.addEventListener("click", () => {
    const numero = "67 99649-0584";

    navigator.clipboard.writeText(numero).then(() => {
  
    let fedbacknum = document.createElement('span')
    let divfedbacknum = document.createElement('div')
         fedbacknum.textContent = "Copiado com sucesso!";
         fedbacknum.style.color = "green";
       Container.appendChild(divfedbacknum)
     divfedbacknum.appendChild(fedbacknum)

     setTimeout(() => {
        divfedbacknum.remove("div-fedbacknum")
     }, 700);
    });
  });
//linhas
const info = document.getElementById("info");

document.querySelectorAll("[data-text]").forEach(el => {

  el.addEventListener("mouseover", () => {
    info.textContent = el.dataset.text;
  });

  el.addEventListener("mouseout", () => {
    info.textContent = "";
  });

});


