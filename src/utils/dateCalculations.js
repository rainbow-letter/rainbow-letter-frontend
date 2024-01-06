// eslint-disable-next-line import/prefer-default-export
export const calculateDDay = (deathAnniversary) => {
  const anniversaryDate = new Date(deathAnniversary);
  const today = new Date();

  // 시간을 0시 0분 0초 0밀리초로 설정하여 날짜만 비교
  anniversaryDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const differenceInTime = anniversaryDate.getTime() - today.getTime();
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);

  return differenceInDays > 0
    ? `D-${Math.ceil(differenceInDays)}`
    : `D+${Math.abs(Math.ceil(differenceInDays))}`;
};
