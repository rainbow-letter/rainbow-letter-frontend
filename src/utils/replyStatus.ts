import { isPastNextDay10AM } from 'utils/date';

export const checkLetterStatus = (
  inspectionDate: string,
  dispatchDate: string
) => {
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

export const letterReplyStatus = (reply: string) => {
  switch (reply) {
    case 'REQUEST':
      return '답장 중';
    case 'RESPONSE':
      return '답장완료';
    default:
      return null;
  }
};

export const isCheckUnread = (isRead: string, reply: string): boolean => {
  if (reply === 'REQUEST') return false;
  if (isRead === 'READ') return false;

  return true;
};
