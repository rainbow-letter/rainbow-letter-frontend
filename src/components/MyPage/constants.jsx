import React from 'react';

export const PAGE_TITLES = {
  MY_INFO: '내 정보',
  FAQ: '자주 묻는 질문',
};

export const USER_INFO_LABELS = {
  EMAIL: '이메일',
  PHONE: '휴대폰 번호',
  NO_PHONE: '답장 알림을 문자로 받고 싶다면 등록해보세요',
};

export const USER_INFO_MESSAGES = {
  ENTER_DIGITS_ONLY: '-를 제외한 숫자만 입력해주세요.',
  INVALID_PHONE: '번호를 다시 확인해주세요.',
};

export const USER_ACTIONS = {
  EDIT: '수정',
  FINISH: '확인',
  CHANGE_PASSWORD: '비밀번호 변경하기',
  LEAVE: '탈퇴하기',
  LOG_OUT: '로그아웃',
};

export const QUESTION_PREFIX = 'Q. ';

export const FAQS = [
  {
    id: 1,
    question: '무지개편지는 어떤 서비스인가요?',
    answer:
      '펫로스 증후군을 겪고 있는 분들을 편지 주고 받기를 통해 위로하는 서비스예요. 심리상담학에서는 ‘글쓰기는 치유의 과정’이라고 강조해요. 자기 감정을 마음껏 표현하며 충분한 추모의  시간을 보내시길 바래요.',
  },
  {
    id: 2,
    question: '답장은 언제 오나요?',
    answer:
      '편지를 보낸 날로부터 1~2일 후 오전 10시에 도착해요. 밤 늦게 보낸 편지는 답장이 늦어질 수도 있어요.',
  },
  {
    id: 3,
    question: '답장이 온 건 어떻게 알 수 있나요?',
    answer:
      '가입하신 이메일 주소로 답장 도착 안내 메일을 보내드려요. 핸드폰 번호를 등록하면 문자도 보내드려요.',
  },
  {
    id: 4,
    question: '하트는 하루에 몇 번까지 보낼 수 있나요?',
    answer:
      '하루 최대 3번 가능해요. \n아침, 점심, 저녁 생각날 때 하트를 보내주세요.',
  },
  {
    id: 5,
    question: '서비스 공지사항은 어디에서 확인하나요?',
    answer: '네이버 ‘무지개편지’ 블로그를 확인해주세요. \n',
    link: 'https://blog.naver.com/rainbowletter',
  },
  {
    id: 6,
    question: '문의/제휴하고 싶다면 어디로 연락하나요?',
    answer: '메일 주시면 영업일 기준 1~2일 이내 회신 드릴게요. \n',
    email: 'rainbowletter41@gmail.com',
  },
];

export const ACCOUNT_DELETION = {
  GUIDELINES_TITLE: '탈퇴 안내사항',
  CONFIRM_MESSAGE: '위 내용을 확인하였으며, 탈퇴를 진행합니다.',
};

export const ACCOUNT_DELETION_GUIDELINES = [
  {
    ID: 1,
    CONTENT: ['탈퇴 시 ', <strong>편지는 모두 삭제</strong>, '됩니다.'],
  },
  {
    ID: 2,
    CONTENT: [
      '삭제된 데이터(편지, 동물정보 등)은 ',
      <strong>복구되지 않습니다.</strong>,
    ],
  },
  {
    ID: 3,
    CONTENT: [
      <strong>동일 이메일로 재가입해도</strong>,
      ' 삭제된 데이터는 복구되지 않습니다.',
    ],
  },
  {
    ID: 4,
    CONTENT: [
      '탈퇴 후 ',
      <strong>일주일 동안 재가입이 불가</strong>,
      '합니다.',
    ],
  },
];
