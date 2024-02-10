// eslint-disable-next-line import/prefer-default-export
type Options = {
  [key: string]: string;
};

type FutureDate = {
  year: number;
  month: number;
  day: number;
};

export const calculateDDay = (deathAnniversary: string) => {
  const anniversaryDate = new Date(deathAnniversary);
  const today = new Date();

  anniversaryDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const differenceInTime = anniversaryDate.getTime() - today.getTime();
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);

  return differenceInDays > 0
    ? `D-${Math.ceil(differenceInDays)}`
    : `D+${Math.abs(Math.ceil(differenceInDays))}`;
};

export const convertDateStringToObject = (dateStr: string) => {
  const parts = dateStr.split('-');
  const year = parts[0];
  const month = String(parseInt(parts[1], 10));
  const day = String(parseInt(parts[2], 10));

  return { year, month, day };
};

export const formatDateToYMD = (data = new Date()): string => {
  const options: Options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };
  let formattedDate = data.toLocaleDateString('ko-KR', options);
  formattedDate = formattedDate.replace(/\./g, '').replace(/ /g, '-');

  return formattedDate;
};

export const formatDateToYYDDMMHHMM = (date: string): string => {
  if (!date) return '';
  const newDate = new Date(date);
  const year = newDate.getFullYear().toString().substr(-2);
  const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
  const day = newDate.getDate().toString().padStart(2, '0');
  const hours = newDate.getHours().toString().padStart(2, '0');
  const minutes = newDate.getMinutes().toString().padStart(2, '0');

  return `${year}.${month}.${day} ${hours}:${minutes}`;
};

export const getPastDate = (daysAgo: number) => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return formatDateToYMD(date);
};

export const isFutureDate = ({ year, month, day }: FutureDate): boolean => {
  if (!year || !month || !day) {
    return false;
  }

  const inputDate = new Date(year, month - 1, day);
  const currentDate = new Date();

  currentDate.setHours(0, 0, 0, 0);

  return inputDate > currentDate;
};

export const isPastNextDay10AM = (dateString: string): boolean => {
  if (!dateString) return false;

  const givenDate = new Date(dateString);
  const nextDay10AM = new Date(
    givenDate.getFullYear(),
    givenDate.getMonth(),
    givenDate.getDate() + 1,
    10,
    0,
    0,
    0
  );

  const now = new Date();
  return now > nextDay10AM;
};
