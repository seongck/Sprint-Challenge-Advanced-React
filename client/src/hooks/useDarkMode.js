import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage.js';

export const useDarkMode = () => {

  const [ storedValue, setValue ] = useLocalStorage('darkMode', false);

  const body = document.querySelector('body');

  useEffect(() => {
    storedValue ? 
      body.classList.add('dark-mode') :
      body.classList.remove('dark-mode')
  }, [storedValue, body.classList]);

  return [storedValue, setValue];
}

