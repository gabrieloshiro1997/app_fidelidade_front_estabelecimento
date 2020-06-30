import React, { Component } from 'react';
import {  UncontrolledDropdown, DropdownMenu, DropdownToggle, Nav } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { Logout } from '../../app/redux/actions/Login/LoginActions'; 
import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {

  logout(e) {
    e.preventDefault();
    this.props.Logout();
    this.props.history.push('/Login');
  }
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
        //   full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
        //   minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <Nav className="ml-auto" navbar>
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle className="pr-3" nav>
			<Link   
                to="/Login"
                onClick={this.props.Logout}>
				<i id="icon-logout" class="fa fa-sign-out fa-2x" aria-hidden="true" data-toggle="tooltip" data-placement="bottom" title="Sair"></i>
            </Link>
            </DropdownToggle>
            <DropdownMenu right>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default connect(null, { Logout })(DefaultHeader);
