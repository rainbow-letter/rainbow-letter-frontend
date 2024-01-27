/* eslint-disable import/no-cycle */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { checkTokenValidity } from '../api/user';
import { removeToken } from '../store/user';

const useTokenValidation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.user);

  useEffect(() => {
    const validateToken = async () => {
      if (token) {
        try {
          const response = await checkTokenValidity(token);
          if (response.status !== 200) {
            // eslint-disable-next-line no-console
            console.log('200번이 안왔어!');
            dispatch(removeToken());
            navigate('/login');
          }
        } catch (error) {
          // eslint-disable-next-line no-alert
          alert('Token validation error:', error);
          dispatch(removeToken());
          navigate('/login');
        }
      }
    };

    validateToken();
  }, [token, dispatch, navigate]);
};

export default useTokenValidation;
