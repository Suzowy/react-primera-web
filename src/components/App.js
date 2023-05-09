import { useState } from 'react';

import '../styles/App.css';
import Button from './Button';
import Hero from './Hero';
import Subtitle from './Subtitle';
import Info from './Info';
import Input from './input';

function App() {
  const person = {
    name: 'Asdrubal',
    lastname: 'El Bello',
  };

  const [counter, setCounter] = useState(0);
  //setCounter(counter + 1);
  // counter ++ --> counter = counter +1
const [text, setText]= useState("")
  return (
    <div className="App">
      <header className="App-header">
        <Hero />
        <h1>Cartelera</h1>
        <Subtitle loquequiera="aventuras" />
        <Subtitle loquequiera="terror" />
        <Button
          titulo="Boton rojo"
          counter={counter}
          changeCounter={setCounter}
        />
        {/*  si al llamar  este componente no le envias counter, changeCounter se rompe la web porque estaran undefined */}
        <Button titulo="Boton verde" />
        <Input
      
          changeText={setText} />
        {/*imprimo la variable de estado en el h3*/}

        <h3> {counter} </h3>
        <h3>{text}</h3>
        <Info person={person} estilo="info" />

        <p>
          Se ha buscado: <span> </span>
        </p>
      </header>
    </div>
  );
}
export default App;