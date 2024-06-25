import './BotaoSubmit.css';

const BotaoSubmit = (props) => {
    return (
        <button className="botao-submit">
            {props.children}
        </button>
    )
}

export default BotaoSubmit;