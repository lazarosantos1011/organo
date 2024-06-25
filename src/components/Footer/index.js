import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__social">
                <a href="https://www.facebook.com/" target='_blank' rel='noreferrer'>
                    <img src="/images/fb.png" alt=''/>
                </a>
                <a href="https://www.instagram.com/" target='_blank' rel='noreferrer'>
                    <img src="/images/ig.png" alt=''/>
                </a>
                <a href="https://www.twitter.com/" target='_blank' rel='noreferrer'>
                    <img src="/images/tw.png" alt=''/>
                </a>
            </div>
            <div>
                <img src="/images/logo.png" alt="Logo do Organo"/>
            </div>
            <p>Desenvolvido por Alura.</p>
        </footer>
    )
}

export default Footer;