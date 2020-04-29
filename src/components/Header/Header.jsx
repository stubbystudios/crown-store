import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { auth } from '../../firebase/firebase.utils';
import { HeaderContainer, LogoContainer, NavContainer, NavLink } from './Header.styles';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to='/' className='logo-container'>
        <Logo className='logo' />
      </LogoContainer>
      <NavContainer role='navigation' className="nav">
        <NavLink className='nav-item' to='/'>Home</NavLink>
        <NavLink className='nav-item' to='/shop'>Shop</NavLink>
        <NavLink className='nav-item' to='/contact'>Contact</NavLink>
        {currentUser
          ? <NavLink as='div' className='nav-item' onClick={() => auth.signOut()}>Sign out</NavLink>
          : <NavLink className='nav-item' to='/signin'>Sign-in</NavLink>
        }
        <CartIcon />
      </NavContainer>
      {hidden
        ? null
        : <CartDropdown />}
    </HeaderContainer>
  )
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);