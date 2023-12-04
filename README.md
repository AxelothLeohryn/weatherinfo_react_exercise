### Ejercicio WEATHER INFO 

Vamos a practicar **useEffect** y asincronía con React

- Un **Componente WeatherList** que recorra una lista de items con la información del pronóstico extendido de los próximos días. 
- Un **Componente WeatherCard** que contenga la información meteorológica de las próximas horas ese día (horario, temperatura, estado del tiempo (ej: clear, clouds, rain))
- Un formulario con input + botón para buscar una ciudad en concreto.

### Flujo de esta vista: 
- En esta vista se mostrará por defecto el pronóstico extendido de Madrid. Al introducir una nueva ciudad en el input de tipo texto y hacer click en el botón, la información se actualizará con los datos correspondientes a la ciudad buscada. 
- *EXTRA 1:* Agregar al componente una imágen que ilustre el estado del tiempo de cada día.
- *EXTRA 2:* En la primera carga de datos de esta vista, reemplazar Madrid por la geolocalización actual del usuario. 
