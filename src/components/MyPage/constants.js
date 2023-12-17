const titles = {
  header: '마이페이지',
  body: '내 정보',
  footer: '자주 묻는 질문',
};

const headerContents = {
  logOut: '로그아웃',
};

const userDetails = {
  email: '이메일',
  phone: '휴대폰 번호',
  noPhone: '등록된 번호 없음',
  edit: '수정하기',
};

const FAQs = [
  {
    id: 1,
    title: '무지개편지는 어떤 서비스인가요?',
    content:
      '펫로스 증후군을 겪고 있는 분들을 편지 주고 받기를 통해 위로하는 서비스예요. 심리상담학에서는 ‘글쓰기는 치유의 과정’이라고 강조해요. 자기 감정을 마음껏 표현하며 충분한 추모의 시간을 보내시길 바래요.',
  },
  {
    id: 2,
    title: '답장은 언제 오나요?',
    content:
      '편지를 보내고 1~2일 이내 도착해요. 서비스 내 편지함에서 확인해주세요.',
  },
  {
    id: 3,
    title: '답장이 온 건 어떻게 알 수 있나요?',
    content:
      '답장이 도착하면 가입하신 이메일 주소로 메일을 보내드려요. 핸드폰번호를 등록하면 문자도 보내드려요.',
  },
  {
    id: 4,
    title: '탈퇴는 어떻게 하나요?',
    content: '아래 이메일로 문의 주시면 도와드릴게요. swcteam41@gmail.com',
  },
];

export default { titles, headerContents, userDetails, FAQs };
