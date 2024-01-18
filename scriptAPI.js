const immagini = document.querySelectorAll(".card-img-top");
const tastoEdit = document.querySelectorAll(".edit");
const testoIdCard = document.querySelectorAll(".text-muted");
const firstLoad = document.querySelector(".load");
const secondLoad = document.querySelector(".Secondload");
const ricercaInput = document.getElementById("barraDiRicerca");
const search = document.querySelector(".formSearch");

const arrayImg = Array.from(immagini);
const arrayTasto = Array.from(tastoEdit);
const arrayIdCard = Array.from(testoIdCard);

const arrayFotoDaUsare = [];

search.addEventListener("submit", function (e) {
  e.preventDefault();
  const valoreRicerca = ricercaInput.value;
  const myURL = `https://api.pexels.com/v1/search?query=${valoreRicerca}`;
  fetch(myURL, {
    method: "GET",
    headers: {
      Authorization: "EuvT6meLjofTsPzhRiMkTPmEiezVGOlzH8SYOwpRH09L9dtgY2hTGeBa",
    },
  })
    .then((response) => {
      // tutto bene, ho ottenuto una response dal server
      console.log("response", response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("errore nella chiamata");
      }
    })
    .then((data) => {
      console.log("DATA", data);
      ricercaInput.value = "";
      console.log(arrayImg);
      arrayImg.forEach((img, i) => {
        img.src = data.photos[i].src.small;
      });
      arrayIdCard.forEach((id, i) => {
        id.innerHTML = `${data.photos[i].id}`;
      });
      arrayTasto.forEach((tasto, i) => {
        tasto.innerHTML = `Hide`;
        tasto.addEventListener("click", function (e) {
          e.target.closest(".col-md-4").remove();
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
