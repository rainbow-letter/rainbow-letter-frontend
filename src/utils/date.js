// eslint-disable-next-line import/prefer-default-export
export const calculateDDay = (deathAnniversary) => {
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

export const convertDateStringToObject = (dateStr) => {
  const parts = dateStr.split('-');
  const year = parts[0];
  const month = String(parseInt(parts[1], 10));
  const day = String(parseInt(parts[2], 10));

  return { year, month, day };
};

export const formatDateToYMD = (data = new Date()) => {
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };
  let formattedDate = data.toLocaleDateString('ko-KR', options);
  formattedDate = formattedDate.replace(/\./g, '').replace(/ /g, '-');

  return formattedDate;
};

export const formatDateToYYDDMMHHMM = (date) => {
  const newDate = new Date(date);
  const year = newDate.getFullYear().toString().substr(-2);
  const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
  const day = newDate.getDate().toString().padStart(2, '0');
  const hours = newDate.getHours().toString().padStart(2, '0');
  const minutes = newDate.getMinutes().toString().padStart(2, '0');

  return `${year}.${day}.${month} ${hours}:${minutes}`;
};

export const getPastDate = (daysAgo) => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return formatDateToYMD(date);
};
