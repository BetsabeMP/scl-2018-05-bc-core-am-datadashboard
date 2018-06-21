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

const getPercentCourse = (user) => {
  const courses = Object.keys(user);
  const percentList = courses.map(
    course => user[course].percent
  ).reduce(
    (tot, value) => tot + value
  );
  return (percentList / courses.length);
};

// función para obtener datos de cada tema y unidad
const getUnits = (units) => {
  console.log('units', units);
  let summationCompleted = 0;
  let summationDuration = 0;
  let summationCompletedRead = 0;
  let summationDurationRead = 0;
  let summationCompletedPractice = 0;
  let summationDurationPractice = 0;
  let summationCompletedQuiz = 0;
  let summationDurationQuiz = 0;

  // unitsKey obtengo subindice de unidades (0,1,2,...)
  const unitsKey = Object.keys(units);

  // recorro arreglo units segun sub indice y obtengo parts y percent
  const unitDetail = unitsKey.map(unit => {
    const partObj = units[unit].parts;
    const percentObj = units[unit].percent;

    // partKey obtengo subindice de unidades (0,1,2,...)
    const partKey = Object.keys(units[unit].parts);

    // recorro arreglo partObj segun sub indice y obtengo duraciones y type
    const partDetail = partKey.map(part => {
      const completedUnit = partObj[part].completed;
      const durationUnit = partObj[part].duration;
      const typeUnit = partObj[part].type;
      console.log('percentObj', percentObj, 'completedUnit', completedUnit, 'durationUnit', durationUnit, 'typeUnit', typeUnit);

      // sumo completed y duration 
      summationCompleted = summationCompleted + completedUnit;
      summationDuration = summationDuration + durationUnit;
      console.log('summationCompleted', summationCompleted, 'summationDuration', summationDuration);

      // sumo con read
      if (typeUnit === 'read') {
        completedUnitRead = completedUnit;
        durationUnitRead = durationUnit;
      } else {
        completedUnitRead = 0;
        durationUnitRead = 0;
      };
      summationCompletedRead = summationCompletedRead + completedUnitRead;
      summationDurationRead = summationDurationRead + durationUnitRead;
      console.log('summationCompletedRead', summationCompletedRead, 'summationDurationRead', summationDurationRead);

      // sumo con practice
      if (typeUnit === 'practice') {
        completedUnitPractice = completedUnit;
        durationUnitPractice = durationUnit;
      } else {
        completedUnitPractice = 0;
        durationUnitPractice = 0;
      };
      summationCompletedPractice = summationCompletedPractice + completedUnitPractice;
      summationDurationPractice = summationDurationPractice + durationUnitPractice;
      console.log('summationCompletedPractice', summationCompletedPractice, 'summationDurationPractice', summationDurationPractice);

      // sumo con quiz
      if (typeUnit === 'quiz') {
        completedUnitQuiz = completedUnit;
        durationUnitQuiz = durationUnit;
      } else {
        completedUnitQuiz = 0;
        durationUnitQuiz = 0;
      };
      summationCompletedQuiz = summationCompletedQuiz + completedUnitQuiz;
      summationDurationQuiz = summationDurationQuiz + durationUnitQuiz;
      console.log('summationCompletedQuiz', summationCompletedQuiz, 'summationDurationQuiz', summationDurationQuiz);
    });
    return partDetail;
  });
  return unitDetail;
};


// función para obtener unidades y courses  desde la info de alumna
const getCourseInfo = (user) => {
  const courses = Object.keys(user);
  let coursesInfo = [];
  for (let course of courses) {
    coursesInfo[course] = getUnits(user[course].units);
  };

  return coursesInfo;
};

// funcion para trabajar datos de alumnas
const infoUser = (user) => {
  const percentCourse = getPercentCourse(user);
  const courseInfo = getCourseInfo(user);

  console.info('salida', {
    percentCourse,
    courseInfo
  });
};

// función para obtener progreso de una alumna de un cohort 
const UserCohort = (user, cohortId) => {
  const btn = document.getElementById(user);
  btn.addEventListener('click', () => {
    window.callUsersCohort(cohortId)
      .then((dataUserCohort) => {
        // const userCohortArr = Object.entries(dataUserCohort);
        // for (let i = 0; i < userCohortArr.length; i++) {
        //   if (userCohortArr[i][0] === user) {
        //     let found = userCohortArr[i];
        //     console.log(found);
        //   };
        // };
        infoUser(dataUserCohort[user]);
      });
  });
};

