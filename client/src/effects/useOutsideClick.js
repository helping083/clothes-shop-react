import { useEffect, useCallback } from 'react';

const useOutsideClick = (className, outSideClick) => {
  const backdropClickHandler = useCallback((e) => {
    const isClickOutside = !e.target.closest(`.${className}`);
    const notInPath = !e.path?.some((elem) => elem.className?.includes(`${className}`));
    if (isClickOutside && notInPath) {
      outSideClick();
    }
    console.log('works');
  }, [className, outSideClick]);

  useEffect(()=>{
    document.addEventListener('mousedown', backdropClickHandler);
    return () => {
      document.removeEventListener('mousedown', backdropClickHandler);
    }
  },[backdropClickHandler, outSideClick])
}

export default useOutsideClick;