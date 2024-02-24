import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <ul className="icons">
            <li>
                <a href="https://www.linkedin.com/in/ricardoguntur/" className="icon fa-linkedin" target='_blank' rel="noreferrer">
                    <span className="label">Linkedin</span>
                </a>
            </li>
            <li>
                <a
                    href="https://github.com/guntur-ricardo"
                    className="icon fa-github"
                    target='_blank'
                    rel="noreferrer"
                >
                    <span className="label">GitHub</span>
                </a>
            </li>
            <li>
                <a
                    href="https://twitter.com/GunturRicardo"
                    className="icon fa-twitter"
                    target='_blank'
                    rel="noreferrer"
                >
                    <span className="label">Twitter</span>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/skuatbae/" className="icon fa-instagram" target='_blank' rel="noreferrer">
                    <span className="label">Instagram</span>
                </a>
            </li>
        </ul>
        {/*<p className="copyright">&copy; Gatsby Starter - Dimension. Design: <a href="https://html5up.net">HTML5 UP</a>.*/}
            {/*Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a></p>*/}
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
