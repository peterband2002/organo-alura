import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (props) => {

    const [nome, setNome] = useState('') // Esse hook, é para eu manter o estado de uma variável dentro de uma função.
                                         // Essa função do React me retorna o valor em si, para eu ler, como também uma forma para eu alterar o valor, que não pode ser feito
                                         // sem o 'setNome'
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    // const aoDigitado = (event) => {
    //     setNome(event.target.value)
    //     console.log(valor)
    // }

    const aoSalvar = (event) => {
        event.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2> Preencha os dados para criar o card do colaborador </h2>
                <CampoTexto
                    obrigatorio="true"
                    label='Nome'
                    placeholder='Digite seu nome'
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio="true"
                    label='Cargo'
                    placeholder='Digite seu cargo'
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label='Imagem'
                    placeholder='Digite o endereço da imagem'
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    label='Times'
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario