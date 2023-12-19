const LOGIN_MESSAGE = [
  {
    pathname: '/login',
    title: '다시 와주셨네요!',
    describe: '또는 이메일로 로그인하기 :',
    question: '아직 계정이 없나요?',
    button: {
      google: '구글로 간편 로그인하기',
      default: '로그인하기',
    },
    forget: '비밀번호를 잊었어요',
    link: {
      address: '/sign-up',
      value: '무료 회원가입하기',
    },
  },
  {
    pathname: '/sign-up',
    title: '무료로 편지를 써보세요!',
    describe: '또는 이메일로 가입하기 : ',
    question: '이미 계정이 있나요?',
    button: {
      google: '구글로 간편 가입하기',
      default: '가입하기',
    },
    link: {
      address: '/login',
      value: '로그인하기',
    },
  },
];

const BUTTON_STYLE =
  'w-full rounded-[15px] flex justify-center items-center py-[17px]';

export { LOGIN_MESSAGE, BUTTON_STYLE };
