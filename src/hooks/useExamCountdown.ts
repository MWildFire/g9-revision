import { useEffect, useState } from 'react';
import { differenceInCalendarDays, differenceInWeeks } from 'date-fns';
import { getExamDate, EXAM_DATE_EVENT, EXAM_DATE_STORAGE_KEY } from '../config/examDate';

function msUntilNextMidnight(): number {
  const now = new Date();
  const next = new Date(now);
  next.setHours(24, 0, 0, 0);
  return next.getTime() - now.getTime();
}

export function useExamCountdown(): { days: number; weeks: number; examDate: Date } {
  const [examDate, setExamDateState] = useState<Date>(() => getExamDate());
  const [now, setNow] = useState<Date>(() => new Date());

  useEffect(() => {
    let timeoutId: number;
    const scheduleNextTick = () => {
      timeoutId = window.setTimeout(() => {
        setNow(new Date());
        scheduleNextTick();
      }, msUntilNextMidnight() + 1000);
    };
    scheduleNextTick();

    const refreshExamDate = () => setExamDateState(getExamDate());
    const onStorage = (e: StorageEvent) => {
      if (e.key === EXAM_DATE_STORAGE_KEY) refreshExamDate();
    };

    window.addEventListener(EXAM_DATE_EVENT, refreshExamDate);
    window.addEventListener('storage', onStorage);

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener(EXAM_DATE_EVENT, refreshExamDate);
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  const days = Math.max(0, differenceInCalendarDays(examDate, now));
  const weeks = Math.max(0, differenceInWeeks(examDate, now));
  return { days, weeks, examDate };
}
