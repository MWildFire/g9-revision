import { useCallback, useEffect, useState } from 'react';
import { loadState, saveState, GlobalState } from '../lib/storage';

const UPDATE_EVENT = 'g9-revision-state-update';

export function useLocalProgress(): [GlobalState, (updater: (s: GlobalState) => GlobalState) => void] {
  const [state, setState] = useState<GlobalState>(() => loadState());

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === 'g9-revision-state') setState(loadState());
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
    setState((prev) => {
      const next = updater(prev);
      saveState(next);
      // Notify other hook instances in the same tab
      window.dispatchEvent(new Event(UPDATE_EVENT));
      return next;
    });
  }, []);

  return [state, update];
}
