import './OcultaMostraForm.css';
import BotaoOcultaMostraForm from '../BotaoOcultaMostraForm';

const OcultaMostraForm = (props) => {
    return (
        <section className="oculta-mostra-form">
            <h2 className='oculta-mostra-form__titulo' style={{color: '#6278f7', borderColor: '#6278f7'}}>Minha Organização</h2>
            <BotaoOcultaMostraForm esconderMostrarForms={props.esconderForms}/>
        </section>
    )
}

export default OcultaMostraForm;