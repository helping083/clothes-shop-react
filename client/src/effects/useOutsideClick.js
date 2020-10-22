import { useEffect } from 'react';

const useOutsideClick = (className, outSideClick) => {
  const backdropClickHandler = (e) => {
    const isClickOutside = !e.target.closest(`.${className}`);
    const notInPath = !e.path?.some((elem) => elem.className?.includes(`${className}`));
    if (isClickOutside && notInPath) {
      outSideClick();
    }
  }
  useEffect(()=>{
    document.addEventListener('mousedown', backdropClickHandler);
    return () => {
      document.removeEventListener('mousedown', backdropClickHandler);
    }
  },[outSideClick])
}

export default useOutsideClick;