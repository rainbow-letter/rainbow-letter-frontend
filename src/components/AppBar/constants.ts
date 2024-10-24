interface AppBar {
  [key: string]: {
    title: string;
  };
}

const appBarConfig: AppBar = {
  '/my-page': {
    title: '마이페이지',
  },
  '/my-page/faqs': {
    title: '자주 묻는 질문',
  },
  '/my-page/leave': {
    title: '회원 탈퇴',
  },
  '/my-pets': {
    title: '우리아이',
  },
  '/my-pets/register': {
    title: '등록하기',
  },
  '/my-pets/edit': {
    title: '수정하기',
  },
  '/my-page/password': {
    title: '비밀번호 변경하기',
  },
  '/write-letter': {
    title: '편지쓰기',
  },
  '/letter-box': {
    title: '편지함',
  },
  // TODO: 변경
  '/letter-box-renew': {
    title: '편지함',
  },
  '/saved-image': {
    title: '이미지 저장',
  },
  '/my-page/register': {
    title: '등록하기',
  },
  '/contents': {
    title: '컨텐츠',
  },
  letterId: {
    title: '편지함',
  },
  shareLink: {
    title: '편지함',
  },
  '/admin/letters': {
    title: '편지 리스트 관리',
  },
  '/admin/pets': {
    title: '반려동물 리스트 관리',
  },
};

export default appBarConfig;
