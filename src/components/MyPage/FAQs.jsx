import React, { useState, useEffect } from 'react';

import { QUESTION_PREFIX } from './constants';
// eslint-disable-next-line import/no-cycle
import { getFaqs } from '../../api/faqs';

function FAQ({ FAQData }) {
  return (
    <div className="py-3">
      <header className="p-[10px] text-solo-large">
        <span className=" text-orange-400">{QUESTION_PREFIX}</span>
        <span>{FAQData.question}</span>
      </header>
      <main className="m-[10px] p-[18px] bg-gray-2 text-body-small text-gray-1 rounded-2xl">
        {FAQData.answer}
      </main>
    </div>
  );
}

function FAQs() {
  const [FAQData, setFAQData] = useState(null);

  useEffect(() => {
    const res = getFaqs();
    setFAQData({
      ...res,
      id: Math.random(),
      question: res.summary,
      answer: res.detail,
    });
  }, []);

  return (
    <section className="flex flex-col gap-y-3">
      {FAQData &&
        FAQData.map((faq) => (
          <FAQ
            key={faq.id}
            FAQData={{ question: faq.question, answer: faq.answer }}
          />
        ))}
    </section>
  );
}

export default FAQs;
