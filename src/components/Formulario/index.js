import Campo from '../Campo';
import './formulario.css';
import ListaSuspensa from '../ListaSuspensa';
import BotaoSubmit from '../BotaoSubmit';
import { useState } from 'react';

const Form = (props) => {
    
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('#000000'); // Cor padrão para evitar erro de cor inválida The specified value "" 
                                                // does not conform to the required format (#rrggbb).

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome, //nome: nome ...
            cargo,
            imagem,
            time
        });
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Campo obrigatorio={true} /* Ou simplesmente "obrigatorio" no caso do valor true */ label="Nome" placeholder="Digite seu nome" valor={nome} aoAlterado={valor => setNome(valor)} />
                <Campo obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" valor={cargo} aoAlterado={valor => setCargo(valor)}/>
                <Campo label="Imagem" placeholder="Informe o endereço da imagem" valor={imagem} aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa obrigatorio={true} label="Time" itens={props.times} valor={time} aoAlterado={valor => setTime(valor)}/>
                <BotaoSubmit>
                    Criar card
                </BotaoSubmit>
            </form>
            <form onSubmit={(evento) => {
                evento.preventDefault()
                props.cadastrarTime({ nomeTime: nomeTime, cor: corTime})
                
            }}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <Campo obrigatorio={true} label="Nome" placeholder="Digite o nome do time" valor={nomeTime} aoAlterado={valor => setNomeTime(valor)} />
                <Campo obrigatorio={true} type='color' label="Cor" placeholder="Digite a cor do time" valor={corTime} aoAlterado={valor => setCorTime(valor)}/>
                <BotaoSubmit>
                    Criar um novo time
                </BotaoSubmit>
            </form>
        </section>        
    )
}

export default Form;