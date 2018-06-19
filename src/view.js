// función que escribe los paises en pantalla
window.writeCountry = (countries) => {
  let countryHTML = '';
  for (let country of countries) {
    countryHTML = countryHTML + `<div class="pais">
     <p class="txt1">${country.name}</p>
     <button id="${country.id}">CONTINUAR</button>
     </div>`;
  };
  let divCountry = document.getElementById('counter');
  divCountry.innerHTML = countryHTML;
  const divMenu = document.getElementById('menu');
  divMenu.innerHTML = `<div class="col menuLeft">
  <p class="menu">PAÍS</p>
  </div>`;
};

// función que escribe cohort en pantalla
window.writeCohort = (cohorts) => {
  let cohortHTML = '';
  for (let cohort of cohorts) {
    cohortHTML = cohortHTML + `<div class="cohort">
     <p class="txt2">${cohort.id}</p>
     <button id="${cohort.id}">UNIDADES</button>
     <button id="${cohort.id}a">ALUMNAS</button>
     </div>`;
  };
  let divCohort = document.getElementById('counter');
  divCohort.innerHTML = cohortHTML;
  const divMenu = document.getElementById('menu');
  divMenu.innerHTML = `<div class="col menuLeft">
  <p class="menu">COHORT</p>
  </div>`;
};

// función que escribe alumnas en pantalla
window.writeUser = (users) => {
  let userHTML = '';
  for (let user of users) {
    userHTML = userHTML + `<div class="user">
     <p class="txt2">${user.name}</p>
     </div>`;
  };
  let divUser = document.getElementById('counter');
  divUser.innerHTML = userHTML;
  const divMenu = document.getElementById('menu');
  divMenu.innerHTML = `<div class="col menuLeft">
  <p class="menu">COHORT</p>
  </div>`;
};

// función que escribe course en pantalla
window.writeCourse = (courses) => {
  let courseHTML = '';
  for (let course of courses) {
    courseHTML = courseHTML + `<div class="course">
     <p class="txt2">${course.id}</p>
     <button id="${course.id}">CONTINUAR</button>
     </div>`;
  };
  let divCourse = document.getElementById('counter');
  divCourse.innerHTML = courseHTML;
  const divMenu = document.getElementById('menu');
  divMenu.innerHTML = `<div class="col menuLeft">
  <p class="menu">UNIDADES</p>
  </div>`;
};