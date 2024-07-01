import './BotaoOcultaMostraForm.css';
import botao from './botaoVisibilidade.png';

const BotaoOcultaMostraForm = (props) => {
    return (
        <button className="botao" onClick={props.esconderMostrarForms}>
            <img src={botao} alt=''/>
        </button>
    )
}

export default BotaoOcultaMostraForm;