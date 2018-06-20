// función al cargar página carga funciones de datos y escritura
window.onload = () => {
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
        window.writeUser(dataUsers);
        dataUsers.map(users => userInput(users.id));
        dataUsers.map(users => UserCohort(users.id, users.signupCohort));
      });
  });
};

// función para buscar nombre desde input
const userInput = (users) => {
  const inpt = document.getElementById('inputButton');
  inpt.addEventListener('click', () => {
    window.callUserInput(users)
      .then((dataUserInput) => {
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

// función para obtener progreso de una alumna de un cohort 
const UserCohort = (user, cohortId) => {
  const btn = document.getElementById(user);
  btn.addEventListener('click', () => {
    window.callUsersCohort(cohortId)
      .then((dataUserCohort) => {
        const userCohortArr = Object.entries(dataUserCohort);
        for (let i = 0; i < userCohortArr.length; i++) {
          if (userCohortArr[i][0] === user) {
            let found = userCohortArr[i];
            console.log(found);
          };
        };
      });
  });
};