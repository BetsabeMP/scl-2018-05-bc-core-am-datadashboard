// función al cargar página carga funciones de datos y escritura
window.onload = () => {
  window.callCountry()
    .then((dataCountry) => {
      const dataCountryTrue = dataCountry.filter(country => country.active !== false);
      console.log(dataCountryTrue);
      window.writeCountry(dataCountryTrue);
    });
};

// función para obtener cohort según el campus y escribirlos
const cohort = (campus) => {
  const btn = document.getElementById(campus);
  btn.addEventListener('click', () => {
    window.callCohorts(campus)
      .then((dataCohorts) => {
        window.writeCohort(dataCohorts);
        dataCohorts.map(cohort => course(cohort.id));
        dataCohorts.map(cohort => user(cohort.id + 'a'));
      });
  });
};

// función para obtener cohort según el cohort y escribirlos
const user = (cohorta) => {
  const btn = document.getElementById(cohorta);
  btn.addEventListener('click', () => {
    window.callUsers(cohorta)
      .then((dataUsers) => {
        window.writeUser(dataUsers);
      });
  });
};

// función para obtener course según el cohort y escribirlos
const course = (cohort) => {
  const btn = document.getElementById(cohort);
  btn.addEventListener('click', () => {
    window.callCourses(cohort)
      .then((dataCourses) => {
        window.writeCourse(dataCourses);
      });
  });
};
