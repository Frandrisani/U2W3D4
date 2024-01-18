const generateCards = function (arrayOfimg) {
  // manipolazione del DOM
  arrayOfimg.forEach((img) => {
    const newCol = document.createElement("div");
    newCol.classList.add("col", "col-md-4", "col-md-4", "col-lg-3");
    newCol.innerHTML = `
      <div class="card mb-4 shadow-sm">
        <img
          src="https://picsum.photos/id/237/300/200"
          class="bd-placeholder-img card-img-top"
        />
        <div class="card-body">
          <h5 class="card-title">Lorem Ipsum</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </p>
          <div
            class="d-flex justify-content-between align-items-center"
          >
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
              >
                View
              </button>
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
              >
                Edit
              </button>
            </div>
            <small class="text-muted">9 mins</small>
          </div>
        </div>
      </div>
          `;
    // ci manca solo da appendere questa col alla row degli eventi
    const eventsRow = document.getElementById("events-row");
    eventsRow.appendChild(newCol);
  });
};

const getImg = function () {
  const myURL = `https://api.pexels.com/v1/search?query=kitten`;
  // nella homepage useremo questo URL per fare un'operazione di GET
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
      generateCards(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

getImg();
