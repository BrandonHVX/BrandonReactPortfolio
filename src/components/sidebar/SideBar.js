import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy
} from '@fortawesome/free-solid-svg-icons'
import SubMenu from './SubMenu'
import { NavItem, NavLink, Nav } from 'reactstrap'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import brandonpic1 from '../../images/brandon1.jpg'

const sidebarpic = {
  width: '200px',
  borderRadius: '500px'
}

const SideBar = props => (
  <div className={classNames('sidebar', { 'is-open': props.isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={props.toggle} style={{ color: '#fff' }}>
        &times;
      </span>
      <h3>Sidebar</h3>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <p>Heading</p>
        <img src={brandonpic1} alt="" style={sidebarpic} />
        <NavItem>
          <NavLink
            tag={Link}
            to={'/about'}
            className="sidebar-mobile"
            onClick={props.toggle}
          >
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
            About
          </NavLink>
        </NavItem>
        <SubMenu title="Projects" icon={faImage} items={submenus[1]} />
        <NavItem>
          <NavLink tag={Link} to={'/resume'} onClick={props.toggle}>
            <FontAwesomeIcon icon={faCopy} className="mr-2" />
            Resume
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={'/contact'} onClick={props.toggle}>
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
            Contact
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
)

const submenus = [
  [
    {
      title: 'Home 1',
      target: 'Home-1'
    },
    {
      title: 'Home 2',
      target: 'Home-2'
    },
    {
      itle: 'Home 3',
      target: 'Home-3'
    }
  ],
  [
    {
      title: 'Web Development',
      target: 'WebDev'
    },
    {
      title: 'Video Production',
      target: 'Video'
    },
    {
      title: 'Digital Design',
      target: 'Design'
    },
    {
      title: 'Motion Graphics',
      target: 'Page-2'
    }
  ]
]

export default SideBar
