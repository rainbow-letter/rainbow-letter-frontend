import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../Button';

function PetRegisterButton({ className, children }) {
  const navigate = useNavigate();
  const styles = className || '';

  return (
    <Button className={styles} onClick={() => navigate('register')}>
      {children}
    </Button>
  );
}

export default PetRegisterButton;
