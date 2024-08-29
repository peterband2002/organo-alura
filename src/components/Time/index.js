import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria }

    return (
        (props.colaboradores.length > 0) ? <section className='time' style={css}> {/* Aqui é como é feito um "if" em React. Podendo substituir o "?" por um "&&" */}
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
            </div>
        </section>
        : '' //* Caso a condição acima for falsa, então o React irá retornar um componente vazio
    )
}

export default Time