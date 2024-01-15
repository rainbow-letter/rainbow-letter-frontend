const LOGIN_MESSAGE = [
  {
    pathname: '/login',
    title: '다시 와주셨네요!',
    describe: '또는 이메일로 로그인하기',
    question: '아직 계정이 없나요?',
    button: {
      google: '구글로 간편 로그인하기',
      default: '로그인하기',
    },
    forget: '비밀번호를 잊었어요.',
    link: {
      address: '/sign-up',
      value: '무료 회원가입하기',
    },
  },
  {
    pathname: '/sign-up',
    title: '무료로 편지를 써보세요!',
    describe: '또는 이메일로 가입하기',
    question: '이미 계정이 있나요?',
    button: {
      google: '구글로 간편 가입하기',
      default: '가입하기',
    },
    forget: '비밀번호를 잊었어요.',
    link: {
      address: '/login',
      value: '로그인하기',
    },
  },
];

const ERROR_MESSAGE = Object.freeze({
  NOT_MATCH: '비밀번호를 다시 확인해주세요.',
  NOT_VALID_PASSWORD: '영어, 숫자 포함 8자리 이상 입력해주세요.',
  NOT_VALID_EMAIL: '이메일 형식이 아닙니다.',
});

const FIND_EMAIL_MESSAGE = Object.freeze({
  PASSWORD: '비밀번호를 찾을',
  EMAIL: '이메일을 입력해주세요',
  SUBMIT: '제출하기',
});

const UPDATE_PASSWORD_MESSAGE = Object.freeze({
  TITLE: '비밀번호 변경하기',
  DESCRIPTION: '새로운 비밀번호로 입력해주세요.',
  NEW_PASSWORD: '새 비밀번호',
  NEW_PASSWORD_CONFIRM: '새 비밀번호 확인',
  UPDATE: '변경하기',
});

const BUTTON_STYLE = 'w-full rounded-[15px] flex justify-center items-center';

export {
  LOGIN_MESSAGE,
  BUTTON_STYLE,
  ERROR_MESSAGE,
  FIND_EMAIL_MESSAGE,
  UPDATE_PASSWORD_MESSAGE,
};
