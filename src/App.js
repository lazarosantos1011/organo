import { useEffect, useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Formulario';
import Time from './components/Time';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';
import OcultaMostraForm from './components/OcultaMostraForm';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nomeTime: "Programação",
      cor: '#D9F7E9'
    },
    {
      id: uuidv4(),
      nomeTime: "Front-End",
      cor: '#E8F8FF'
    },
    {
      id: uuidv4(),
      nomeTime: "Data Science",
      cor: '#F0F8E2'
    },
    {
      id: uuidv4(),
      nomeTime: "Devops",
      cor: '#FDE7E8'
    },
    {
      id: uuidv4(),
      nomeTime: "UX e Design",
      cor: '#FAE9F5'
    },
    {
      id: uuidv4(),
      nomeTime: "Mobile",
      cor: '#FFF5D9'
    },
    {
      id: uuidv4(),
      nomeTime: "Inovação e Gestão",
      cor: '#FFEEDF'
    },
  ]);

  const [colaboradores, setColaboradores] = useState([]);

  useEffect(() => {
    fetch('https://organo-api-vercel.vercel.app/colaboradores')
    .then(response => response.json())
    .then(dados => setColaboradores(dados));
  }, []);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    //debugger
    const colaboradorComIdComFavorito = {...colaborador, id: uuidv4(), favorito: false};
    setColaboradores([...colaboradores, colaboradorComIdComFavorito]);
  }

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if(time.nomeTime === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, {...novoTime, id: uuidv4}]);
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) {
        colaborador.favorito = !colaborador.favorito;
      }
      return colaborador;
    }));
  }

  const [escondeForm, setEscondeForm] = useState(false);

  function escondeMostraForm() {
    setEscondeForm(!escondeForm);  
  }

  return (
    <div className="App">
      <Banner />
      {!escondeForm && (
      <>
      <Form 
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nomeTime)} 
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
        </>
      )}
      <OcultaMostraForm esconderForms={escondeMostraForm}/>
      {times.map(time => <Time 
        key={time.nomeTime} 
        nomeTime={time.nomeTime} 
        cor={time.cor}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nomeTime)}
        aoDeletar={deletarColaborador}
        mudarCor={mudarCorDoTime}
        aoFavoritar={resolverFavorito}
      />)
      }
      <Footer />
    </div>
  );
}

export default App;
