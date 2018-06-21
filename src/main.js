
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
        console.log(dataCourses);
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

const getUnits = (units) => {
  const unitsKey = Object.keys(units);
  const unitDetail = unitsKey.map(unit => {
    // llamar a algo q recorra las sub partes
    return units[unit].parts;
  });
  return unitDetail;
}

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
        console.log('>>>', user, '>>>', dataUserCohort[user]);
        infoUser(dataUserCohort[user]);
      });
  });
};

