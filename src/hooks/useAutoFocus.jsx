import { useEffect } from 'react';

function useAutoFocus(shouldFocus, ref) {
  useEffect(() => {
    if (shouldFocus && ref.current) {
      ref.current.focus();
    }
  }, [shouldFocus, ref]);
}

export default useAutoFocus;
