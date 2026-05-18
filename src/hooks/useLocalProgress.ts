import { useCallback, useEffect, useState } from 'react';
import { loadState, saveState, GlobalState } from '../lib/storage';

export function useLocalProgress(): [GlobalState, (updater: (s: GlobalState) => GlobalState) => void] {
  const [state, setState] = useState<GlobalState>(() => loadState());

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === 'g9-revision-state') setState(loadState());
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const update = useCallback((updater: (s: GlobalState) => GlobalState) => {
    setState((prev) => {
      const next = updater(prev);
      saveState(next);
      return next;
    });
  }, []);

  return [state, update];
}
