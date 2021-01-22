# CRUD de Clientes

**Este CRUD( de las siglas Create, Read, Update and Delete) permite la inserción, lectura, modificación y eliminación de clientes**

*Se implementa el framework React Native Paper para mejorar la interfaz de la App.*

*Genera tu propio API gracias a [json-server](https://github.com/typicode/json-server).*

### Dependencias
- Se utilizan las siguientes dependecias:
    - @react-navigation/native
    - react-native-reanimated 
    - react-native-gesture-handler 
    - react-native-screens 
    - react-native-safe-area-context 
    - @react-native-community/masked-view
    - @react-navigation/stack
    - axios
    - react-native-paper
    - react-native-vector-icons

### Implementacion de React Navigation

1. Instalar react-navigation/native
``npm install @react-navigation/native``

2. Instalar todas las dependencias
``npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view``

3. Instalar navegación de tipo Stack
``npm i @react-navigation/stack``

4. Por ultimo dependiendo si desarrollas para android, ios o ambos: 

**Si desarrollas una app para iOS**
- DESDE LA CONSOLA ``cd ios/``
- LUEGO ``pod install`` para instalar correctamente las dependencias

**Si desarrollas en Android ve a la ruta android/app/build.gradle**
- Agregar debajo de los implementation, las siguientes lineas: <br/>
*implementation 'androidx.appcompat:appcompat:1.1.0-rc01'*<br/>
*implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'*

5. Para finalizar en el archivo App.js agregar la siguiente dependencia al inicio del todo el código
- import 'react-native-gesture-handler';

### Implementacion de React Native Paper

1. Instalar las dependencias:   <br/> 
``npm i react-native-paper``    <br/> 
``npm i react-native-vector-icons`` <br/>


Recuerda para ejecutar esta apliacion debes:
1. utilizar ```npm install``` para instalar todas las dependencias
2. Luego ```npx react-native run-android``` o ```npx react-native run-ios``` para lanzar la aplicacion, según el dispositivo o emulador que utilices
