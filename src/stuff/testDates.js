function minutes2hhmm(minutes) {
  let hh = Math.floor(minutes / 60);
  let mm = minutes - (hh * 60);
  return `${hh.toString().padStart(2, '0')}ч ${mm.toString().padStart(2, '0')}м`;
}

/* function getTimeFromDate(date: Date | string): string {
  let d: Date;
  if (typeof date === 'string') {
    d = new Date(date);
  } else {
    d = date;
  }
  let hh = d.getHours().toString().padStart(2, '0');
  let mm = d.getMinutes().toString().padStart(2, '0');
  return `${hh}:${mm}`;
}

// получить конечное время: прибваить к startDate количество минут
function getEndTime(startDate: Date | string, minutes: number): string {
  let d: Date;
  if (typeof startDate === 'string') {
    d = new Date(startDate);
  } else {
    d = startDate;
  }
  let msec: number = minutes * 60 * 1000;
  let newMsec = d.valueOf() + msec;
  let newDate = new Date(newMsec);
  return getTimeFromDate(newDate);

} */

console.log(minutes2hhmm(793));