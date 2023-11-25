import './styles/FirstSection.css';
import img from '../images/fedx.svg';
import img2 from '../images/amazon.svg';
import img3 from '../images/fedex.svg';
import img4 from '../images/google.svg';
import img5 from '../images/windows.svg';
import img6 from '../images/first-img.svg';
import img7 from '../images/icon-click.svg';
import img8 from '../images/icon-downl.svg';
import img9 from '../images/img-diagramm.svg';

export default function FirstSection() {
    return (
        <section>
            <div className='container'>
                <div className='first-section'>
                    <img alt='' src={img} />
                    <img alt='' src={img2} />
                    <img alt='' src={img3} />
                    <img alt='' src={img4} />
                    <img alt='' src={img5} />
                </div>
                <div className='section-start'>
                    <div className='section-left'>
                        <img alt='' src={img6} />
                    </div>
                    <div className='section-right'>
                        <p>Lorem ipsum dolor</p>
                        <h1><span>Two</span> Saas are better <span>than one.</span> </h1>
                        <h2>
                            One of the most fundamental ways to go about that is to create a memorable <span>e-commerce</span> slogan.
                        </h2>
                        <div id='flex-s'>
                            <img alt='' src={img8} />
                            <p id='one-p'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                            </p>
                        </div>
                        <div id='flex-s'>
                            <img alt='' src={img7} />
                            <p id='two-p'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                            </p>
                        </div>
                        <div id='flex-s'>
                            <img alt='' src={img8} />
                            <p id='three-p'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                            </p>
                        </div>

                    </div>
                </div>
                <div className='section-center'>
                    <p id='center__first-p'>Lorem ipsum dolor</p>
                    <h1 id='center__first-h1'>With a name like Saas, it has to<span>be good.</span> </h1>
                    <div className='center-flex'>
                        <div className='mini-cards'>
                            <div className='mini-card'>
                                <h1>
                                    Review the facts Saas is the best? ^
                                </h1>
                                <p>
                                    Lorem <span>ipsum dolor sit</span> amet consectetur adipiscing elit sed do eiusmod tempor.Lorem consectetur adipiscing elit sed do eiusmod tempor.
                                </p>
                            </div>
                            <div className="mini-card2">
                                <select id="text">
                                    <option value="1">Lorem ipsum dolor sit amet consectetur?</option>
                                    <option value="2">Lorem ipsum dolor sit amet consectetur?</option>
                                    <option value="3">Lorem ipsum dolor sit amet consectetur?</option>
                                    <option value="4">Lorem ipsum dolor sit amet consectetur?</option>
                                </select>
                            </div>
                            <div className="mini-card2">
                                <select id="text">
                                    <option value="1">Lorem ipsum dolor sit amet consectetur?</option>
                                    <option value="2">Lorem ipsum dolor sit amet consectetur?</option>
                                    <option value="3">Lorem ipsum dolor sit amet consectetur?</option>
                                    <option value="4">Lorem ipsum dolor sit amet consectetur?</option>
                                </select>
                            </div>
                            <div className="mini-card2">
                                <select id="text">
                                    <option value="1">Lorem ipsum dolor sit amet consectetur?</option>
                                    <option value="2">Lorem ipsum dolor sit amet consectetur?</option>
                                    <option value="3">Lorem ipsum dolor sit amet consectetur?</option>
                                    <option value="4">Lorem ipsum dolor sit amet consectetur?</option>
                                </select>
                            </div>
                            <button id='btn-mini1'>free trial</button>
                            <button id='btn-mini2'>read more</button>
                        </div>

                        <div className='center-flex__right'>
                            <img alt='' src={img9} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
