// función al cargar página carga funciones de datos y escritura
window.onload = () => {
  window.callCountry()
    .then((dataCountry) => {
      window.writeCountry(dataCountry);
    });
};