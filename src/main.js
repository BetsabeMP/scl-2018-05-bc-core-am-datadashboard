// función que al cargar página carga funciones de datos y escritura
window.onload = () => {
  // llama la función callContry
  window.callCountry()
    // cuando tengas la respuesta de fetch escribela como dataCountry
    .then((dataCountry) => {
      // filtro que elimina las .active false y solo deja las .active true en variable dataCountryTrue
      const dataCountryTrue = dataCountry.filter(country => country.active !== false);
      // llama a la función writeCountry y pasale el arreglo dataCountryTrue
      window.writeCountry(dataCountryTrue);

      // pasa a la función cohort los datos de dataCountryTrue.id, el map para crear arreglo con esos id
      dataCountryTrue.map(country => cohort(country.id));
    });
};

// función para obtener datos de cada tema y unidad
const getUnits = (units) => {
  // console.log('units', units);


  // unitsKey obtengo subindice de unidades (0,1,2,...)
  const unitsKey = Object.keys(units);

  // recorro arreglo units segun sub indice y obtengo parts y percent

  let totUnitSummationCompleted = 0;
  let totUnitSummationDuration = 0;
  let totUnitSummationCompletedRead = 0;
  let totUnitSummationDurationRead = 0;
  let totUnitSummationCompletedPractice = 0;
  let totUnitSummationDurationPractice = 0;
  let totUnitSummationCompletedQuiz = 0;
  let totUnitSummationDurationQuiz = 0;
  for (let unit of unitsKey) {
    const partObj = units[unit].parts;
    const percentObj = units[unit].percent;

    // partKey obtengo subindice de unidades (0,1,2,...)
    const partKey = Object.keys(units[unit].parts);

    // recorro arreglo partObj segun sub indice partKey y obtengo duraciones y type
    // const partDetail = partKey.map(part => {

    let totSummationCompleted = 0;
    let totSummationDuration = 0;
    let totSummationCompletedRead = 0;
    let totSummationDurationRead = 0;
    let totSummationCompletedPractice = 0;
    let totSummationDurationPractice = 0;
    let totSummationCompletedQuiz = 0;
    let totSummationDurationQuiz = 0;

    for (let part of partKey) {
      const completedUnit = partObj[part].completed;
      const durationUnit = partObj[part].duration;
      const typeUnit = partObj[part].type;
      // console.log('percentObj', percentObj, 'completedUnit', completedUnit, 'durationUnit', durationUnit, 'typeUnit', typeUnit);

      // declaro variables para las sumatorias
      let summationCompleted = 0;
      let summationDuration = 0;
      let summationCompletedRead = 0;
      let summationDurationRead = 0;
      let summationCompletedPractice = 0;
      let summationDurationPractice = 0;
      let summationCompletedQuiz = 0;
      let summationDurationQuiz = 0;

      // sumo completed y duration 
      summationCompleted = summationCompleted + completedUnit;
      summationDuration = summationDuration + durationUnit;
      // console.log('summationCompleted', summationCompleted, 'summationDuration', summationDuration);

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
      // console.log('summationCompletedRead', summationCompletedRead, 'summationDurationRead', summationDurationRead);

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
      // console.log('summationCompletedPractice', summationCompletedPractice, 'summationDurationPractice', summationDurationPractice);

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
      // console.log('summationCompletedQuiz', summationCompletedQuiz, 'summationDurationQuiz', summationDurationQuiz);

      totSummationCompleted += summationCompleted;
      totSummationDuration += summationDuration;
      totSummationCompletedRead += summationCompletedRead;
      totSummationDurationRead += summationDurationRead;
      totSummationCompletedPractice += summationCompletedPractice;
      totSummationDurationPractice += summationDurationPractice;
      totSummationCompletedQuiz += summationCompletedQuiz;
      totSummationDurationQuiz += summationDurationQuiz;
    };

    totUnitSummationCompleted += totSummationCompleted;
    totUnitSummationDuration += totSummationDuration;
    totUnitSummationCompletedRead += totSummationCompletedRead;
    totUnitSummationDurationRead += totSummationDurationRead;
    totUnitSummationCompletedPractice += totSummationCompletedPractice;
    totUnitSummationDurationPractice += totSummationDurationPractice;
    totUnitSummationCompletedQuiz += totSummationCompletedQuiz;
    totUnitSummationDurationQuiz += totSummationDurationQuiz;
  };
  return {
    totUnitSummationCompleted,
    totUnitSummationDuration,
    totUnitSummationCompletedRead,
    totUnitSummationDurationRead,
    totUnitSummationCompletedPractice,
    totUnitSummationDurationPractice,
    totUnitSummationCompletedQuiz,
    totUnitSummationDurationQuiz
  };
};

// función para obtener unidades y courses  desde la info de alumna
const getCourseInfo = (user) => {
  const courses = Object.keys(user);
  let coursesInfo = [];
  for (let course of courses) {
    coursesInfo[course] = getUnits(user[course].units);
    // con las keys obtener unidades y esas unidades pasalas getUnits
  };
  return coursesInfo;
};

// función calcula porcentaje total
const getPercentCourse = (user) => {
  // user es un objeto x eso uso Object.keys para obtener un arreglo solo con las keys
  const courses = Object.keys(user);
  // recorra el arreglo user.course(basic..),percent y que lo redusca a un valor que es la sumatoria 
  const percentList = courses.map(course => user[course].percent).reduce((tot, value) => tot + value);
  // la sumatoria/cantidad de unidades y obtengo porcentaje total
  return (percentList / courses.length);
};

// funcion para trabajar datos de alumnas
const getInfoUser = (user) => {
  // guarda la info que obtienes al ejecutar función getPercentCourse en la variable percentCourse
  const percentCourse = getPercentCourse(user);

  // idem
  const courseInfo = getCourseInfo(user);

  return {
    percentCourse,
    courseInfo
  };
};

// función para obtener progreso de una alumna de un cohort 
const userCohort = (user, cohortId) => {
  // en boton el id esta con user
  const btn = document.getElementById(user);
  btn.addEventListener('click', () => {
    // la función callUsersCohort me pide el cohort (por eso dos parametros)
    window.callUsersCohort(cohortId)
      .then((datauserCohort) => {
        // obtengo un objeto
        // ejecuta la funcion infoUser dandole datauserCohort.user necesarios para trabajar con el progreso de la alumna
        const infoUser = getInfoUser(datauserCohort[user]);
        console.info('salida', infoUser);
      });
  });
};

// función para buscar nombre desde input, aun no util
const userInput = (users) => {
  const inpt = document.getElementById('inputButton');
  inpt.addEventListener('click', () => {
    window.callUserInput(users)
      .then((dataUserInput) => {
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

        // sigue el ciclo dandole datos a userInput y userCohort
        dataUsers.map(users => userInput(users.id));
        dataUsers.map(users => userCohort(users.id, users.signupCohort));
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
        // escribimos una lista y termina el ciclo
      });
  });
};

// función para obtener cohort según el campus y escribirlos
const cohort = (campus) => {
  // evento boton, cuando haga click en un boton con un id, campus sera ese id
  const btn = document.getElementById(campus);
  btn.addEventListener('click', () => {
    // llamado función de datos
    window.callCohorts(campus)
      // cuando tenga respuesta nombrala dataCohorts
      .then((dataCohorts) => {
        // dale a la función escritura dataCohorts
        window.writeCohort(dataCohorts);

        // para lo que viene, dale los parametros que necesitan (course>> cohort.id user>> cohort.id+a)
        dataCohorts.map(cohort => course(cohort.id));
        dataCohorts.map(cohort => user(cohort.id + 'a'));
      });
  });
};