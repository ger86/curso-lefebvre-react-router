import {useContext} from 'react';
import ModeContext from 'contexts/modeContext';

export default function useMode() {
  return useContext(ModeContext);
}
