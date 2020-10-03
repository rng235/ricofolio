import PropTypes from 'prop-types'
import React from 'react'
import meIcon from '../images/me-in-a-box.jpg'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo-oval">
      <img alt='logo img' className="oval-icon" src={meIcon}/>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Ricardo Guntur</h1>
        <p>
          Programming is just pushing a sequence of buttons to make stuff happen,
          <br />
            sometimes good stuff. And yes, that's me in a cardboard box.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
