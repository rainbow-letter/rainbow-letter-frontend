import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getToken } from '../../store/user';

export default function Auth() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = searchParams.get('token');
    dispatch(getToken(token));
    navigate('/');
  }, []);

  return null;
}
