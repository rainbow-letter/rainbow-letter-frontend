interface Write_Message {
  [key: string]: string;
}

export const INFO_MESSAGES: Write_Message = Object.freeze({
  SUGGEST_TOPIC: 'TIP. 이런 주제로도 써보세요',
  SUGGEST_SEND_PHOTO: '사진을 보내보세요. ',
  POSSIBLE_NUMBER: '딱 1장만 보낼 수 있어요.',
  OPTION: '(선택)',
});

export const USER_ACTIONS: Write_Message = Object.freeze({
  ADD: '추가하기',
  RESISTER_PET: '편지 받을 아이를 등록해주세요',
});
