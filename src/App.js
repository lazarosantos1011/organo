import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Formulario';
import Time from './components/Time';
import Footer from './components/Footer';

function App() {

  const times = [
    {
      nomeTime: "Programação",
      corPrimaria: '#57c278',
      corSecundaria: '#D9F7E9'
    },
    {
      nomeTime: "Front-End",
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nomeTime: "Data Science",
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nomeTime: "Devops",
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nomeTime: "UX e Design",
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nomeTime: "Mobile",
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nomeTime: "Inovação e Gestão",
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    //debugger
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Form times={times.map(time => time.nomeTime)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {times.map(time => <Time 
      key={time.nomeTime} 
      nomeTime={time.nomeTime} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nomeTime)} 
      />)}
      <Footer />
    </div>
  );
}

export default App;
