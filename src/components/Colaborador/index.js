import './Colaborador.css';
import { IoIosCloseCircle } from "react-icons/io";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

const Colaborador = (props /* Ou { nome, imagem, cargo, corDeFundo, aoDeletar } */) => {

    function favoritar() {
        props.aoFavoritar(props.id);
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return (
        <div className="colaborador">
            <IoIosCloseCircle 
                size={25} 
                className="deletar" 
                onClick={props.aoDeletar} 
            />
            <div className="cabecalho" style={ {backgroundColor: props.corDeFundo} }>
                <img src={props.imagem} alt={props.nome} />
            </div>

            <div className="rodape">
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
                <div className='favoritar'>
                    {props.favorito 
                        ? <IoIosStar {...propsFavorito} color='#FFD700' className='Stars'/> 
                        : <IoIosStarOutline {...propsFavorito} className='Stars StarsOutline'/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Colaborador;