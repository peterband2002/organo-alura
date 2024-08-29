import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href='facebook.com'>
                            <img src='/images/fb.png' alt='Facebook' />
                        </a>
                    </li>
                    <li>
                        <a href='x.com'>
                            <img src='/images/x.png' alt='X' />
                        </a>
                    </li>
                    <li>
                        <a href='instagram.com'>
                            <img src='/images/ig.png' alt='Instagram' />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img className='logo' src='/images/logo.png' alt='Organo' />
            </section>
            <section>
                <p> Desenvolvido por Pedro </p>
            </section>
        </footer>
    )
}

export default Rodape