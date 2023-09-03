let startIndex = 0;
const itemsPerPage = 20; 

const container = document.getElementById("container");

function renderTable(start, end) {
 
  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";

  const headerRow = document.createElement("tr");
  const headers = ["Bandera", "Nombre", "Capital", "Población"];
  headers.forEach(headerText => {
    const header = document.createElement("th");
    header.textContent = headerText;
    headerRow.appendChild(header);
  });
  table.appendChild(headerRow);

  for (let i = start; i < end; i++) {
    const country = data[i];

    const row = document.createElement("tr");

    const flagCell = document.createElement("td");
    const flagImg = document.createElement("img");
    flagImg.src = country.flags.png;
    flagImg.style.width = "50px";
    flagImg.style.height = "auto";
    flagCell.appendChild(flagImg);
   
    row.appendChild(flagCell);

    const nameCell = document.createElement("td");
    nameCell.textContent = country.name.common;
    nameCell.style.border = "1px solid black";
    nameCell.style.padding = "8px";
    row.appendChild(nameCell);

    const capitalCell = document.createElement("td");
    capitalCell.textContent = country.capital;
    capitalCell.style.border = "1px solid black";
    capitalCell.style.padding = "8px";
    row.appendChild(capitalCell);

    const populationCell = document.createElement("td");
    populationCell.textContent = country.population;
    populationCell.style.border = "1px solid black";
    populationCell.style.padding = "8px";
    row.appendChild(populationCell);

    table.appendChild(row);
  }

  while (container.firstChild) {
    container.firstChild.remove();
  }

  container.appendChild(table);
}

function handlePreviousClick() {
  if (startIndex >= itemsPerPage) {
    startIndex -= itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    renderTable(startIndex, endIndex);
  }
}

function handleNextClick() {
  if (startIndex + itemsPerPage < data.length) {
    startIndex += itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    renderTable(startIndex, endIndex);
  }
}

fetch("https://restcountries.com/v3.1/all")
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Error al realizar la solicitud. Código de estado: " + response.status);
    }
  })
  .then(responseData => {

    data = responseData;

    const endIndex = startIndex + itemsPerPage;
    renderTable(startIndex, endIndex);
  })
  .catch(error => {
    console.error("Error:", error);
  });

const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");

backButton.addEventListener("click", handlePreviousClick);
nextButton.addEventListener("click", handleNextClick);

const countryCode = "";
const apiKey = "HPXWM8SYCHHTLIWE9A7Y1ACSZP29N3XE";
const url = "https://api.geodatasource.com/neighbouring-countries?key=${apiKey}&country_code=${countryCode}";

fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Error al realizar la solicitud. Código de estado: " + response.status);
    }
  })
  .then(data => {
    console.log(JSON.stringify(data, null, 4));
  })
  .catch(error => {
    console.error("Error:", error);
  });