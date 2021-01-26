import { useState } from 'react';

export function useDarkMode() {
    const [ isDarkMode, setIsDarkMode ] = useState(false)

    function handleToggle() {
        setIsDarkMode(!isDarkMode)
        document.getElementById('root').classList.toggle('dark-mode')
      }

    return [isDarkMode, handleToggle]
}