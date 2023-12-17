import React from 'react';

import { FAQs, titles, userInfoContents } from './constants';

function MyPage() {
  return (
    <div className="px-6 pt-10">
      <section>
        <div className="text-heading-1">{titles.body}</div>
        <div>
          <div>{userInfoContents.email}</div>
          <div>{userInfoContents.email}</div>
        </div>
        <div>
          <div>{userInfoContents.phone}</div>
          <div>{userInfoContents.phone}</div>
          <div>{userInfoContents.noPhone}</div>
        </div>
      </section>
      <section>
        <div>{titles.footer}</div>
        <div>
          {FAQs.map((FAQ) => (
            <div key={FAQ.id}>
              <div>{FAQ.question}</div>
              <div>{FAQ.answer}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default MyPage;
