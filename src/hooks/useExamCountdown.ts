import { useEffect, useState } from 'react';
import { differenceInCalendarDays, differenceInWeeks } from 'date-fns';
import { getExamDate } from '../config/examDate';

export function useExamCountdown(): { days: number; weeks: number; examDate: Date } {
  const [examDate, setExamDateState] = useState<Date>(() => getExamDate());
  const [now, setNow] = useState<Date>(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => {
      setNow(new Date());
      setExamDateState(getExamDate());
    }, 60_000);

    const onStorage = (e: StorageEvent) => {
      if (e.key === 'g9-exam-date') setExamDateState(getExamDate());
    };
    window.addEventListener('storage', onStorage);

    return () => {
      window.clearInterval(id);
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  const days = Math.max(0, differenceInCalendarDays(examDate, now));
  const weeks = Math.max(0, differenceInWeeks(examDate, now));
  return { days, weeks, examDate };
}
