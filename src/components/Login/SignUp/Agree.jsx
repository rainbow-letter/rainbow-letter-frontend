/* eslint-disable  */
import React, { useState, useEffect } from 'react';

import CheckBox from './CheckBox';
import ArrowLink from './ArrowLink';

const CHECK_LIST = [
  { id: 0, name: '서비스 이용약관 동의' },
  { id: 1, name: '개인정보 처리방침 동의' },
];

export default function Agree({ setIsChecked }) {
  const [checkItems, setCheckItems] = useState([]);

  useEffect(() => {
    if (checkItems.length === CHECK_LIST.length) {
      return setIsChecked(true);
    }

    return setIsChecked(false);
  }, [checkItems]);

  const handleAllCheck = ({ target }) => {
    if (target.checked) {
      return setCheckItems(CHECK_LIST.map((item) => item.name));
    }

    return setCheckItems([]);
  };

  const handleSingleCheck = (e, name) => {
    if (e.target.checked) {
      return setCheckItems((prev) => [...prev, name]);
    }

    return setCheckItems(checkItems.filter((item) => item !== name));
  };

  return (
    <section className="mt-[28px] text-left text-caption">
      <article className="bg-gray-2 rounded-[15px] py-[13px] pl-[22px] mb-3 flex items-center gap-3">
        <CheckBox
          id={'all-checkBox'}
          label={'전체 동의'}
          onChange={handleAllCheck}
          checked={CHECK_LIST.length === checkItems.length}
        />
      </article>
      <article className="pl-[22px] flex mb-[13px] gap-3 relative pr-6">
        <CheckBox
          id={'service-checkbox'}
          label={'서비스 이용약관 동의'}
          onChange={handleSingleCheck}
          checked={checkItems.includes('서비스 이용약관 동의')}
        />
        <ArrowLink
          url={
            'https://drive.google.com/file/d/1Q92p6wHlIETZh9P_8Van4m4oJN7FGCV3/view'
          }
        />
      </article>
      <article className="pl-[22px] flex gap-3 relative pr-6">
        <CheckBox
          id={'infomation-checkbox'}
          label={'개인정보 처리방침 동의'}
          onChange={handleSingleCheck}
          checked={checkItems.includes('개인정보 처리방침 동의')}
        />
        <ArrowLink
          url={
            'https://drive.google.com/file/d/1M1wWAB0IaKC4s_wTSVCl98tnibgxuet9/view'
          }
        />
      </article>
    </section>
  );
}
