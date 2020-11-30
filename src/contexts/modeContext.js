/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {createContext, useCallback, useState, useMemo} from 'react';

const ModeContext = createContext('light');

export function ModeContextProvider({children}) {
  const [mode, setMode] = useState('light');
  const [puteame, setPuteame] = useState(false);

  const toggleMode = useCallback(function toggleMode() {
    setMode(mode => (mode === 'light' ? 'dark' : 'light'));
  }, []);

  function togglePuteame() {
    setPuteame(v => !v);
  }

  const value = useMemo(() => ({
    mode,
    toggleMode
  }), [mode, toggleMode]);

  return (
    <ModeContext.Provider value={value}>
      <div>
        {puteame ? 'Sí' : 'no'}
        <button onClick={togglePuteame}>Cambiar put</button>
      </div>
      {children}
    </ModeContext.Provider>
  );
}

export default ModeContext;
