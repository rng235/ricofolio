import PropTypes from 'prop-types'
import React from 'react'
import pandiumLogo from '../images/pandiumLogo.png'
import bluecore from '../images/bluecore.jpg'

class Main extends React.Component {
    render() {
        let close = (
            <div
                className="close"
                onClick={() => {
                    this.props.onCloseArticle()
                }}
            />
        )

        return (
            <div
                ref={this.props.setWrapperRef}
                id="main"
                style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}
            >
                {/*TODO unused tab*/}
                {/*<article*/}
                {/*id="intro"*/}
                {/*className={`${this.props.article === 'intro' ? 'active' : ''} ${*/}
                {/*this.props.articleTimeout ? 'timeout' : ''*/}
                {/*}`}*/}
                {/*style={{ display: 'none' }}*/}
                {/*>*/}
                {/*<h2 className="major">Intro</h2>*/}
                {/*<span className="image main">*/}
                {/*<img src={pic01} alt="" />*/}
                {/*</span>*/}
                {/*<p>*/}
                {/*Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin*/}
                {/*aliquam facilisis ante interdum congue. Integer mollis, nisl amet*/}
                {/*convallis, porttitor magna ullamcorper, amet egestas mauris. Ut*/}
                {/*magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.*/}
                {/*By the way, check out my <a href="#work">awesome work</a>.*/}
                {/*</p>*/}
                {/*<p>*/}
                {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis*/}
                {/*dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora*/}
                {/*torquent per conubia nostra, per inceptos himenaeos. Etiam tristique*/}
                {/*libero eu nibh porttitor fermentum. Nullam venenatis erat id*/}
                {/*vehicula viverra. Nunc ultrices eros ut ultricies condimentum.*/}
                {/*Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae*/}
                {/*dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in*/}
                {/*lectus. Pellentesque habitant morbi tristique senectus et netus et*/}
                {/*malesuada fames ac turpis egestas. In non lorem sit amet elit*/}
                {/*placerat maximus. Pellentesque aliquam maximus risus, vel sed*/}
                {/*vehicula.*/}
                {/*</p>*/}
                {/*{close}*/}
                {/*</article>*/}

                <article
                    id="work"
                    className={`${this.props.article === 'work' ? 'active' : ''} ${
                        this.props.articleTimeout ? 'timeout' : ''
                    }`}
                    style={{display: 'none'}}
                >
                    <h2 className="major">Work</h2>
                    <span className="image main">
            <img src={pandiumLogo} alt="pandiumLogo"/>
          </span>
                    <p>
                        <a href='https://pandium.com' target='_blank' rel="noreferrer">Pandium</a> is platform for B2B
                        SaaS business to build and launch native software integrations.
                        I lead a small but talented team of engineers that deliver platform features and integrations
                        from start to finish in greenfield work.
                    </p>
                    <p>
                        As the founding engineer, I have built our admin and user dashboards
                        from the ground up. Utilizing modern tools/frameworks like React with <a
                        href='https://marmelab.com/react-admin/' target='_blank' rel="noreferrer">React Admin</a> to
                        prevent
                        reinventing the wheel and themed by <a href='https://material-ui.com/' target='_blank'
                                                               rel="noreferrer">Material-UI</a>.
                        Powered by <a href='https://kubernetes.io/' target='_blank' rel="noreferrer">Google's
                        Kubernetes</a>,
                        easily deployed with Docker, and an API quickly iterated in Python.

                        Today, the integrations I've led process millions of ecommerce orders a month for our clients.
                        Scaling wonderfully, even during heavy days like Black Friday.
                    </p>
                    {close}
                </article>

                <article
                    id="about"
                    className={`${this.props.article === 'about' ? 'active' : ''} ${
                        this.props.articleTimeout ? 'timeout' : ''
                    }`}
                    style={{display: 'none'}}
                >
                    <h2 className="major">About</h2>
                    <span className="image main">
            <img src={bluecore} alt="bluecore"/>
          </span>
                    <p>
                        That's me in white, way back when I was at <a href="https://bluecore.com" target='_blank'
                                                                      rel="noreferrer">Bluecore</a>.
                        Building integrations for retail sites. Read more below for non-technical info about me.
                    </p>
                    <p>
                        Post-work you'll find me in my garage gym, pursuing a novice/casual powerlifting career. Ask me
                        about my deadlift max.
                        Or playing all genre of video games from RPGs, shooters and strategy. On sunny days my wife and
                        I will be out on the biking/hiking trails. Or ski slopes in the winter.
                    </p>
                    {close}
                </article>

                {/*<article*/}
                {/*id="contact"*/}
                {/*className={`${this.props.article === 'contact' ? 'active' : ''} ${*/}
                {/*this.props.articleTimeout ? 'timeout' : ''*/}
                {/*}`}*/}
                {/*style={{ display: 'none' }}*/}
                {/*>*/}
                {/*<h2 className="major">Contact</h2>*/}
                {/*<form method="post" action="#">*/}
                {/*<div className="field half first">*/}
                {/*<label htmlFor="name">Name</label>*/}
                {/*<input type="text" name="name" id="name" />*/}
                {/*</div>*/}
                {/*<div className="field half">*/}
                {/*<label htmlFor="email">Email</label>*/}
                {/*<input type="text" name="email" id="email" />*/}
                {/*</div>*/}
                {/*<div className="field">*/}
                {/*<label htmlFor="message">Message</label>*/}
                {/*<textarea name="message" id="message" rows="4"></textarea>*/}
                {/*</div>*/}
                {/*<ul className="actions">*/}
                {/*<li>*/}
                {/*<input type="submit" value="Send Message" className="special" />*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<input type="reset" value="Reset" />*/}
                {/*</li>*/}
                {/*</ul>*/}
                {/*</form>*/}
                {/*<ul className="icons">*/}
                {/*<li>*/}
                {/*<a*/}
                {/*href="https://twitter.com/GunturRicardo"*/}
                {/*className="icon fa-twitter"*/}
                {/*target='_blank'*/}
                {/*>*/}
                {/*<span className="label">Twitter</span>*/}
                {/*</a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<a href="https://www.linkedin.com/in/ricardoguntur/" className="icon fa-linkedin" target='_blank'>*/}
                {/*<span className="label">Linkedin</span>*/}
                {/*</a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<a href="https://www.instagram.com/skuatbae/" className="icon fa-instagram" target='_blank'>*/}
                {/*<span className="label">Instagram</span>*/}
                {/*</a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<a*/}
                {/*href="https://github.com/rng235"*/}
                {/*className="icon fa-github"*/}
                {/*target='_blank'*/}
                {/*>*/}
                {/*<span className="label">GitHub</span>*/}
                {/*</a>*/}
                {/*</li>*/}
                {/*</ul>*/}
                {/*{close}*/}
                {/*</article>*/}
            </div>
        )
    }
}

Main.propTypes = {
    route: PropTypes.object,
    article: PropTypes.string,
    articleTimeout: PropTypes.bool,
    onCloseArticle: PropTypes.func,
    timeout: PropTypes.bool,
    setWrapperRef: PropTypes.func.isRequired,
}

export default Main
