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