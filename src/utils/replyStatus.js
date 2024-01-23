/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import { isPastNextDay10AM } from './date';

export const checkLetterStatus = (inspectionDate, dispatchDate) => {
  const isInspectionPassed = isPastNextDay10AM(inspectionDate);
  // const isDispatched = dispatchDate && isPastNextDay10AM(dispatchDate);

  if (dispatchDate) return '성공';

  if (!inspectionDate && !dispatchDate) {
    return '';
  }

  if (!isInspectionPassed) {
    return '대기';
  }

  if (isInspectionPassed && !dispatchDate) {
    return '실패';
  }
};
