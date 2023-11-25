import './styles/Header.css';
import img from '../images/header-bg.svg';

export default function Header() {
    return (
        <header className='container'>
            <div className='header-flex'>
            <div className='header__left'>
                <p>Lorem ipsum dolor</p>
                <h1>
                    Always the <span> real</span> thing, always <span>Saas</span>
                </h1>
                <p>
                    And that number is growing every day. That means <span> e-commerce</span> is thriving.
                </p>
               
                <button> Try for free</button>
                <button> Try for free</button>
                 <p id='second-p'>
                    There are some things money can’t buy. For everything else there’s ‘’<span>MasterCard”</span> is a good example.
                </p>
            </div>
            <div className='header__right'>
                <img src={img} alt="" />
            </div>
            </div>
        </header>
    )
}