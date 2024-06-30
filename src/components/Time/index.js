import Colaborador from '../Colaborador';
import './Time.css';
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {
    // O componente Time recebe as propriedades de <Time /> em App.js
    return (
        
        // Ou style={css} onde css é o objeto const css = {backgroundColor: props.corSecundaria}
        (props.colaboradores.length > 0) ? <section className="time" style={{backgroundImage: '/public/images/fundo.png', backgroundColor: hexToRgba(props.cor, '0.6')}}>
            <input type="color" className="input-cor" value={props.cor} onChange={evento => props.mudarCor(evento.target.value, props.nomeTime)} />
            <h3 style={{borderColor: props.cor}}>{props.nomeTime}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map((colaborador) => {
                    return (
                        <Colaborador 
                            key={colaborador.id} 
                            id={colaborador.id} 
                            nome={colaborador.nome} 
                            cargo={colaborador.cargo} 
                            imagem={colaborador.imagem} 
                            corDeFundo={props.cor} 
                            aoDeletar={() => props.aoDeletar(colaborador.id)} 
                            favorito={colaborador.favorito}
                            aoFavoritar={props.aoFavoritar} 
                        />
                    );
                })}
            </div>
        </section>
        : ''

        // Ou (props.colaboradores.length > 0) && <section etc...
    )
}

export default Time;