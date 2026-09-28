import { useCallback, useEffect, useState } from 'react';
import { loadState, saveState, GlobalState, STORAGE_KEY, UPDATE_EVENT } from '../lib/storage';


export function useLocalProgress(): [GlobalState, (updater: (s: GlobalState) => GlobalState) => void] {
  const [state, setState] = useState<GlobalState>(() => loadState());

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY || e.key === null) setState(loadState());
    };
    const onLocalUpdate = () => setState(loadState());
    window.addEventListener('storage', onStorage);
    window.addEventListener(UPDATE_EVENT, onLocalUpdate);
    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener(UPDATE_EVENT, onLocalUpdate);
    };
  }, []);

  const update = useCallback((updater: (s: GlobalState) => GlobalState) => {
    const next = updater(loadState());
    saveState(next);
    setState(next);
  }, []);

  return [state, update];
}
