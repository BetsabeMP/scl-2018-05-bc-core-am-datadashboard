// función al cargar página carga funciones de datos y escritura
window.onload = () => {
  window.callCountry()
    .then((dataCountry) => {
      const dataCountryTrue = dataCountry.filter(country => country.active !== false);
      console.log(dataCountryTrue);
      window.writeCountry(dataCountryTrue);
    });

  const btn = document.getElementsByClassName('btnUno');
  btn.addEventListener('click', () => {
    console.log('Hola');
  });
};

