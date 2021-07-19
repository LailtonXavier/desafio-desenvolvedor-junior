import React from 'react';
import { FaCopyright } from 'react-icons/fa';
import { Foot } from './styled';

export default function Footer() {
  return (
    <Foot>
      {' '}
      <FaCopyright size={24} /> Desenvolvido por Lailton Xavier
    </Foot>
  );
}
