import dayjs from 'dayjs';
import relative from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(relative);

export const Date = {
  /**
   * Given a date string, retruns how far in the past it occurred
   */
  relativeFromNow(dateStr: string | Date) {
    const d = Date.fromString(dateStr);
    return d.fromNow();
  },

  /**
   * Takes a string and parses it to a dayjs instance
   */
  fromString(dateStr: string | Date, format?: string) {
    return dayjs(dateStr, format);
  },
};
