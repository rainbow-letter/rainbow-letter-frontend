import { useEffect } from 'react';

function useAutoFocus(
  shouldFocus: boolean,
  ref: React.RefObject<HTMLDivElement>
) {
  useEffect(() => {
    if (shouldFocus && ref.current) {
      ref.current.focus();
    }
  }, [shouldFocus, ref]);
}

export default useAutoFocus;
