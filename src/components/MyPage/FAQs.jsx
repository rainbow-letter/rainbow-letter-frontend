import React, { useState, useEffect } from 'react';

import { FAQS, QUESTION_PREFIX } from './constants';

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
  const [FAQData, setFAQData] = useState(FAQS);

  useEffect(() => {
    // TODO: 서버 요청 로직 구현 (GET)
    setFAQData(FAQS);
  }, []);

  return (
    <section className="flex flex-col gap-y-3">
      {FAQData.map((faq) => (
        <FAQ
          key={faq.ID}
          FAQData={{ question: faq.QUESTION, answer: faq.ANSWER }}
        />
      ))}
    </section>
  );
}

export default FAQs;
