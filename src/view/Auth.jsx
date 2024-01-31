import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { userActions } from '../store/user-slice';

export default function Auth() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = searchParams.get('token');

    dispatch(userActions.getToken(token));
    navigate('/home');
  }, []);

  return null;
}
