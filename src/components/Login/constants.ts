import googleIcon from '../../assets/google_icon_btn.png';
import naverIcon from '../../assets/naver_icon_btn.png';

export type Message = {
  pathname: string;
  title: string;
  describe: string;
  findPassword?: string;
  button: {
    google: string;
    default: string;
  };
  link: {
    address: string;
    value: string;
  };
};

interface ErrorMessage {
  [key: string]: string;
}

const LOGIN_MESSAGE: Message[] = [
  {
    pathname: '/login',
    title: '다시 와주셨네요!',
    describe: '또는 이메일로 로그인하기',
    findPassword: '비밀번호 찾기',
    button: {
      google: '구글로 간편 로그인하기',
      default: '로그인하기',
    },
    link: {
      address: '/sign-up',
      value: '회원가입',
    },
  },
  {
    pathname: '/sign-up',
    title: '무료로 편지를 써보세요!',
    describe: '또는 이메일로 가입하기',
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

const ERROR_MESSAGE: ErrorMessage = Object.freeze({
  NOT_MATCH: '비밀번호를 다시 확인해주세요.',
  NOT_VALID_PASSWORD: '영어, 숫자 포함 8자리 이상 입력해주세요.',
  NOT_VALID_EMAIL: '이메일 형식이 아닙니다.',
});

const FIND_EMAIL_MESSAGE = Object.freeze({
  TITLE: '비밀번호 재설정',
  DESCRIPTION: '이메일로 비밀번호 재설정 링크가 발송돼요',
  SUBMIT: '제출하기',
  ANNOUNCEMENT_1: '메일을 받지 못했다면',
  ANNOUNCEMENT: '공지사항',
  ANNOUNCEMENT_2: '을 확인해주세요',
});

const UPDATE_PASSWORD_MESSAGE = Object.freeze({
  TITLE: '비밀번호 변경하기',
  DESCRIPTION: '새로운 비밀번호로 입력해주세요.',
  NEW_PASSWORD: '새 비밀번호',
  NEW_PASSWORD_CONFIRM: '새 비밀번호 확인',
  UPDATE: '변경하기',
});

export {
  LOGIN_MESSAGE,
  ERROR_MESSAGE,
  FIND_EMAIL_MESSAGE,
  UPDATE_PASSWORD_MESSAGE,
};

// url 입력
export const SNS_LOGIN = [
  {
    id: 0,
    icon: googleIcon,
    name: 'google',
    url: `${process.env.REACT_APP_API_URL}/api/oauth2/authorization/google`,
  },
  {
    id: 1,
    icon: naverIcon,
    name: 'naver',
    url: `${process.env.REACT_APP_API_URL}/api/oauth2/authorization/naver`,
  },
];
