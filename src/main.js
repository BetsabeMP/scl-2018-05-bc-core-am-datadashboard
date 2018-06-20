
window.onload = () => {
  country();
};

// función para obtener paises y escribirlos
const country = () => {
  window.callCountry()
    .then((dataCountry) => {
      const dataCountryTrue = dataCountry.filter(country => country.active !== false);
      window.writeCountry(dataCountryTrue);
      dataCountryTrue.map(country => cohort(country.id));
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
<<<<<<< HEAD
=======
        dataCohorts.map(cohort => user(cohort.id + 'a'));
      });
  });
};

// función para obtener usuarios según el cohort y escribirlos
const user = (cohorta) => {
  const btn = document.getElementById(cohorta);
  btn.addEventListener('click', () => {
    window.callUsers(cohorta)
      .then((dataUsers) => {
        const sotedDataUser = dataUsers.sort();
        window.writeUser(sotedDataUser);
        sotedDataUser.map(users => userInput(users.id));
      });
  });
};

// función para buscar nombre desde input
const userInput = (users) => {
  const inpt = document.getElementById('inputButton');
  inpt.addEventListener('click', () => {
    window.callUserInput(users)
      .then((dataUserInput) => {
        console.log(dataUserInput);
>>>>>>> upstream/master
      });
  });
};

// función para obtener course según el cohort y escribirlos
const course = (cohort) => {
  const btn = document.getElementById(cohort);
  btn.addEventListener('click', () => {
    window.callCourses(cohort)
      .then((dataCourses) => {
        console.log(dataCourses);
        window.writeCourse(dataCourses);
      });
  });
};
