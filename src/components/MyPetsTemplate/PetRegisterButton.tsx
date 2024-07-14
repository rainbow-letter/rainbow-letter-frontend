import { useNavigate } from 'react-router-dom';
import { ReactNode } from 'react';

import Button from 'components/Button';

type Props = {
  className?: string;
  children: ReactNode;
};

function PetRegisterButton({ className, children }: Props) {
  const navigate = useNavigate();
  const styles = className || '';

  return (
    <Button className={styles} onClick={() => navigate('/my-pets/register')}>
      {children}
    </Button>
  );
}

export default PetRegisterButton;
