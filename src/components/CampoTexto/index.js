import './CampoTexto.css'

const CampoTexto = (props) => { // Utilizar arrow function ao invés de uma function comum, é apenas um coding style, muito adotado por grades empresas.
    // Ainda sobre a linha de código acima, estou passando propriedades como parâmetro para utilizar no escopo JSX abaixo

    const aoDigitado = (event) => {
        props.aoAlterado(event.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label> {/* Aqui estou pegando o valor armazenado em "label", que foi passado como parâmetro pela arrow function */}
            <input value={props.valor} onChange={aoDigitado} placeholder={props.placeholder} required={props.obrigatorio} />
        </div>
    )
}

export default CampoTexto