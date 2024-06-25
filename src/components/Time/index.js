import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {
    // O componente Time recebe as propriedades nomeTime, corPrimaria e corSecundaria
    return (
        
        // Ou style={css} onde css é o objeto const css = {backgroundColor: props.corSecundaria}
        (props.colaboradores.length > 0) ? <section className="time" style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nomeTime}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} corDeFundo={props.corPrimaria} />)}
            </div>
        </section>
        : ''

        // Ou (props.colaboradores.length > 0) && <section etc...
    )
}

export default Time;