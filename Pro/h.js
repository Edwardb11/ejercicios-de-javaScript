var padres  = {
    nombre: ['Rosa', 'Franklin'],
    edad: [42, 45],
    genero: ['Femenino', 'masculino'],
    intereses: ['la música', 'Comida'],
  };

    var hijo =  {
      nombre: 'Edward',
      edad: 18,
      genero: 'masculino',
      intereses: 'Programar',
  
    };
  
    var personas = [padres, hijo];

   
    for (var index = 0; index < personas.length; index++) {
      const element = personas[index];
      console.log(personas[index].nombre + ' -- ' + personas[index].edad + ' -- ' +  personas[index].genero + ' -- ' 
      + personas[index].intereses);
    }
   
