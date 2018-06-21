// función que escribe los paises en pantalla
window.writeCountry = (countries) => {
  // declarar donde escribire lo concatenado, declarada vacio (string) 
  let countryHTML = '';
  // recorre el arreglo countries por pais(country) 
  for (let country of countries) {
    // concateno el codigo a escribir
    countryHTML = countryHTML +
      `<div class="pais">
      <p class="txt1">${country.name}</p>
      <button id="${country.id}" class="botonPaises">CONTINUAR</button>
      </div>`;
    // ciclo hasta que terminen los paises
  };
  // crea la variable del dom con id 'counter' y en esa insertale (html) lo que concateno
  let divCountry = document.getElementById('counter');
  divCountry.innerHTML = countryHTML;

  // crea la variable del dom con id 'menú'y titulo igual
  const divMenu = document.getElementById('menu');
  divMenu.innerHTML =
    `<div class="col menuLeft">
    <p class="menu">DATA DASHBOARD</p>
    </div>`;
  const divTitle = document.getElementById('title');
  divTitle.innerHTML =
    '<h1 class="titleUno">DATA LABORATORIA</h1>';
};

// función que escribe cohort en pantalla
window.writeCohort = (cohorts) => {
  let cohortHTML = '';
  for (let cohort of cohorts) {
    // ${cohort.id}a es para diferenciar los id de unidades y alumnas
    cohortHTML = cohortHTML +
      `<div class="cohort">
      <p class="txt2">${cohort.id}</p>
      <button id="${cohort.id}">UNIDADES</button>
      <button id="${cohort.id}a">ALUMNAS</button>
      </div>`;
  };
  let divCohort = document.getElementById('counter');
  divCohort.innerHTML = cohortHTML;
  const divMenu = document.getElementById('menu');
  divMenu.innerHTML =
    `<div class="col menuLeft">
    <a href="javascript:history.go('menu')" class="menu">VOLVER AL MENÚ</a>
    </div>`;
  const divTitle = document.getElementById('title');
  divTitle.innerHTML =
    '<h1 class="titleUno">COHORT</h1>';
};

// función que escribe input y alumnas en pantalla
window.writeUser = (users) => {
  let userHTML = '';
  for (let user of users) {
    userHTML = userHTML +
      `<div class="user">
      <button id="${user.id}" class="botonVerAlumnas">VER</button>
      <p class="txt3">${user.name}</p>
      <p class="txta">id=${user.id}</p>
      </div > `;
  };
  let divUser = document.getElementById('counter');
  divUser.innerHTML =
    `<div class="inputAlumnas">
    <input id="inputName" type="text" placeholder="Nombre">
    <button id="inputButton">BUSCAR</button>
    </div>
    <br>
    ${userHTML}`;
  const divMenu = document.getElementById('menu');
  divMenu.innerHTML =
    `<div class="col menuLeft">
    <a href="javascript:history.go('menu')" class="menu">VOLVER AL MENÚ</a>
    </div>`;
  const divTitle = document.getElementById('title');
  divTitle.innerHTML =
    '<h1 class="titleUno">ALUMNAS</h1>';
};

// función que escribe course en pantalla
window.writeCourse = (courses) => {
  let courseHTML = '';
  for (let course of courses) {
    courseHTML = courseHTML +
      `<div class="course">
      <p class="txt2">${course.id}</p>
      </div>`;
  };
  let divCourse = document.getElementById('counter');
  divCourse.innerHTML = courseHTML;
  const divMenu = document.getElementById('menu');
  divMenu.innerHTML =
    `<div class="col menuLeft">
    <a href="javascript:history.go('menu')" class="menu">VOLVER AL MENÚ</a>
      </div>`;
  const divTitle = document.getElementById('title');
  divTitle.innerHTML =
    '<h1 class="titleUno">UNIDADES</h1>';
};

