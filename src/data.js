// función para obtener paises desde API
window.callCountry = () => {
  // resultado de la función, lo que haga el fetch
  return fetch('https://laboratoria-la-staging.firebaseapp.com/campuses').then((response) => {
    // si existe respuesta, que me la de en formato json
    if (response.ok) {
      return response.json();
      // si no existe respuesta arroja error
    } else {
      throw new Error('La llamada a la API falló');
    }
    // ahora pedire el dato,si hay dato damelo en la variable respuestaJson
  }).then((respuestaJson) => {
    return respuestaJson;
    // todo lo que no funcione capturalo como error
  }).catch((err) => {
    console.error(err);
  });
};

// función para obtener cohort según el campus desde API
window.callCohorts = (campus) => {
  return fetch(`https://laboratoria-la-staging.firebaseapp.com/cohorts?campus=${campus}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('La llamada a la API falló');
    }
  }).then((respuestaJson) => {
    return respuestaJson;
  }).catch((err) => {
    console.error(err);
  });
};

// función para obtener cursos según el cohort desde API
window.callCourses = (cohort) => {
  return fetch(`https://laboratoria-la-staging.firebaseapp.com/cohorts/${cohort}/courses`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('La llamada a la API falló');
    }
  }).then((respuestaJson) => {
    return respuestaJson;
  }).catch((err) => {
    console.error(err);
  });
};

// función para obtener usuarios según el cohort desde API
window.callUsers = (cohorta) => {
  // en el parametro elimino la letra a usada para diferenciar alumnas de unidades
  return fetch(`https://laboratoria-la-staging.firebaseapp.com/cohorts/${cohorta.slice(0, -1)}/users?role=student&basicProfile=`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('La llamada a la API falló');
    }
  }).then((respuestaJson) => {
    return respuestaJson;
  }).catch((err) => {
    console.error(err);
  });
};

// función para obtener usuario desde input según user.id desde API
window.callUserInput = (usersId) => {
  return fetch(`https://laboratoria-la-staging.firebaseapp.com/progress?uid=${usersId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('La llamada a la API falló');
    }
  }).then((respuestaJson) => {
    return respuestaJson;
  }).catch((err) => {
    console.error(err);
  });
};

// función para obtener unidades de los cursos desde API
window.callCourseCohortProgress = (cohortid, courseid) => {
  return fetch(`https://laboratoria-la-staging.firebaseapp.com/progress?cohortid=${cohortid}&courseid=${courseid}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('La llamada a la API falló');
    }
  }).then((respuestaJson) => {
    return respuestaJson;
  }).catch((err) => {
    console.error(err);
  });
};

// función para obtener progreso de users de un cohort desde API
window.callUsersCohort = (cohortId) => {
  return fetch(`https://laboratoria-la-staging.firebaseapp.com/cohorts/${cohortId}/progress`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('La llamada a la API falló');
    }
  }).then((respuestaJson) => {
    return respuestaJson;
  }).catch((err) => {
    console.error(err);
  });
};

window.computeUsersStats = (users, progress, courses) => {

};

window.sortUsers = (users, orderBy, orderDirection) => {

};

window.filterUsers = (users, search) => {

};

window.processCohortData = (options) => {

};