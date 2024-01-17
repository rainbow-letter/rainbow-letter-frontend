/* eslint-disable */
export default function metaData(pathname) {
  if (!metaDataConfig[pathname]) return;

  const { title, description, ...metaData } = metaDataConfig[pathname];
  document.querySelector('title').innerText = title;
  document.querySelector('meta[name="description"]').content = description;

  for (const [key, value] of Object.entries(metaData)) {
    const element = document.querySelector(`meta[property="${key}"]`);
    element.content = value;
  }
}

const metaDataConfig = {
  default: {
    title: '무지개편지',
    description: '편지를 보내고 아이의 답장을 받아보세요.',
    'og:title': '무지개편지 : 먼저 간 반려동물에게 보내는 편지',
    'og:description': '무지개편지 : 편지를 보내고 아이의 답장을 받아보세요.',
  },
  '/': {
    title: '무지개편지',
    description: '편지를 보내고 아이의 답장을 받아보세요.',
    'og:title': '무지개편지 : 먼저 간 반려동물에게 보내는 편지',
    'og:description': '무지개편지 : 편지를 보내고 아이의 답장을 받아보세요.',
  },
  letterId: {
    title: '무지개편지 : 편지함',
    description: '아이와의 주고 받은 편지를 확인할 수 있어요.',
    'og:title': '무지개편지 : 아이와 주고받은 편지',
    'og:description': '',
  },
  '/write-letter': {
    title: '무지개편지 : 편지쓰기',
    description: '아이에게 편지를 보내보세요.',
  },
  '/letter-box': {
    title: '무지개편지 : 편지함',
    description: '아이와의 주고 받은 편지를 확인할 수 있어요.',
  },
  '/my-pets': {
    title: '무지개편지 : 아이정보',
    description: '아이의 정보를 확인하고 수정할 수 있어요.',
  },
  '/my-page': {
    title: '무지개편지 : 마이페이지',
    description: '내 정보를 확인하고 수정할 수 있어요.',
  },
  '/login': {
    title: '무지개편지 : 로그인',
    description: '편지를 보내고 아이의 답장을 받아보세요.',
  },
  '/sign-up': {
    title: '무지개편지 : 회원가입',
    description: '편지를 보내고 아이의 답장을 받아보세요.',
  },
  '/auth/email': {
    title: '무지개편지 : 비밀번호 찾기',
    description: '편지를 보내고 아이의 답장을 받아보세요.',
  },
  '/my-page/password': {
    title: '무지개편지 : 비밀번호 변경하기',
    description: '편지를 보내고 아이의 답장을 받아보세요.',
  },
  '/my-page/faqs': {
    title: '무지개편지 : 자주 묻는 질문',
    description: '지주 묻는 질문과 답변을 볼 수 있어요.',
  },
  '/my-page/leave': {
    title: '무지개편지 : 탈퇴',
    description: '편지를 보내고 아이의 답장을 받아보세요.',
  },
  '/my-pets/register': {
    title: '무지개편지 : 아이 정보 등록',
    description: '아이의 정보를 등록할 수 있어요.',
  },
  '/my-pets/edit': {
    title: '무지개편지 : 아이 정보 수정',
    description: '아이의 정보를 수정할 수 있어요.',
  },
};
