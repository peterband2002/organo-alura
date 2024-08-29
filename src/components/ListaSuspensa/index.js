import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={event => props.aoAlterado(event.target.value)} value={props.valor}>
                <option></option>
                {props.itens.map(item => <option key={item}>{item}</option>)} {/* Aqui, para cada item, estou retornando uma '<option>'. Nessa forma, o return foi omitido */}
            </select>
        </div>
    )
}

export default ListaSuspensa