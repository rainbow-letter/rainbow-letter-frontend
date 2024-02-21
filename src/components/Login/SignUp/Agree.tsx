import React, { useState, useEffect } from 'react';

import CheckBox from 'components/Login/SignUp/CheckBox';
import ArrowLink from 'components/Login/SignUp/ArrowLink';

const CHECK_LIST = [
  { id: 0, name: '서비스 이용약관 동의' },
  { id: 1, name: '개인정보 처리방침 동의' },
];

type Props = {
  setIsChecked: (isChecked: boolean) => void;
};

export default function Agree({ setIsChecked }: Props) {
  const [checkItems, setCheckItems] = useState<string[]>([]);

  useEffect(() => {
    if (checkItems.length === CHECK_LIST.length) {
      return setIsChecked(true);
    }

    return setIsChecked(false);
  }, [checkItems]);

  const handleAllCheck = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (target.checked) {
      return setCheckItems(CHECK_LIST.map((item) => item.name));
    }

    return setCheckItems([]);
  };

  const handleSingleCheck = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    if (e.target.checked) {
      return setCheckItems((prev) => [...prev, name]);
    }

    return setCheckItems(checkItems.filter((item) => item !== name));
  };

  return (
    <section className="mt-7 text-left text-caption">
      <article className="bg-gray-2 rounded-2xl py-[0.813rem] pl-[1.375rem] mb-3 flex items-center gap-3">
        <CheckBox
          id="all-checkBox"
          label="전체 동의"
          onChange={handleAllCheck}
          checked={CHECK_LIST.length === checkItems.length}
        />
      </article>
      <article className="pl-[1.375rem] flex mb-[0.813rem] gap-3 relative pr-6">
        <CheckBox
          id="service-checkbox"
          label="서비스 이용약관 동의"
          onChange={handleSingleCheck}
          checked={checkItems.includes('서비스 이용약관 동의')}
        />
        <ArrowLink url="https://drive.google.com/file/d/1Q92p6wHlIETZh9P_8Van4m4oJN7FGCV3/view" />
      </article>
      <article className="pl-[1.375rem] flex gap-3 relative pr-6">
        <CheckBox
          id="infomation-checkbox"
          label="개인정보 처리방침 동의"
          onChange={handleSingleCheck}
          checked={checkItems.includes('개인정보 처리방침 동의')}
        />
        <ArrowLink url="https://drive.google.com/file/d/1M1wWAB0IaKC4s_wTSVCl98tnibgxuet9/view" />
      </article>
    </section>
  );
}
