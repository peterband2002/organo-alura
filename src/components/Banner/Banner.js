import './Banner.css'

export const Banner = () => {
    // JSX - Isso é como o React trabalha com a parte visual. Ele lê esse elemento e transforma em um componente do DOM. Parece HTML, mas não, é JSX
    return (
        <> {/* Essa tag vazia é a mesma coisa de utilizar o <Fragment> do React */}
            <header className="banner"> {/* Como "class" é uma palavra reservada do JS, quando trabalhamos com React, utilizaremos "className" */}
                <img src="/images/banner.png" alt="Banner principal" />
            </header>
        </>
    )
}