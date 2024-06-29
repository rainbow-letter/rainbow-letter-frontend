export const isAndroid = () => {
  return /android/i.test(navigator.userAgent);
};

export const isiOS = () => {
  return /iphone|ipad/i.test(navigator.userAgent);
};

export const isiPhone = () => {
  return /iphone/i.test(navigator.userAgent);
};

export const isiPad = () => {
  return /ipad/i.test(navigator.userAgent);
};

export const isMobile = () => {
  return isAndroid() || isiOS();
};

export const isKakaoTalk = () => {
  const useragt = navigator.userAgent.toLowerCase();

  return useragt.match(/kakaotalk/i);
};
