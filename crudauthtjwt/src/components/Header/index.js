import React from 'react';
import { FaPowerOff, FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/modules/auth/actions';

import { CarShop, Nav } from './styled';

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(actions.loginFailure());
    // history.push('/');  eu ja estou mandando, mas pode ser assim tbm
  };
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>

      <Link to="/register">
        <FaUserAlt size={24} />
      </Link>

      {isLoggedIn ? (
        <Link onClick={handleClick} to="/">
          <FaPowerOff size={24} />
        </Link>
      ) : (
        <Link to="/login">
          <FaSignInAlt size={24} />
        </Link>
      )}

      {/* {isLoggedIn && <FaCircle size={24} color="#FFF" />} */}
      {isLoggedIn && (
        <img src="https://github.com/LailtonXavier.png" alt="Lailton" />
      )}

      <CarShop>
        Teste
        <div>
          <h2>Teste</h2>
          <h2>Teste</h2>
        </div>
      </CarShop>
    </Nav>
  );
}
