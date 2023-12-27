import React, { useState, useEffect } from 'react';

import { QUESTION_PREFIX, FAQS } from './constants';
// eslint-disable-next-line import/no-cycle
import { getFaqs } from '../../api/faqs';

function FAQ({ FAQData }) {
  return (
    <div className="pb-3">
      <header className="py-[10px] text-solo-large">
        <span className=" text-orange-400">{QUESTION_PREFIX}</span>
        <span>{FAQData.question}</span>
      </header>
      <main className="my-[10px] p-[18px] bg-gray-2 text-body-small text-gray-1 rounded-2xl">
        {FAQData.answer}
      </main>
    </div>
  );
}

function FAQs() {
  const [FAQData, setFAQData] = useState([]);

  useEffect(() => {
    const fetchAndSetFAQs = async () => {
      const res = await getFaqs();
      const transformedData = res.faqs.map((faq) => ({
        id: faq.id,
        question: faq.summary,
        answer: faq.detail,
      }));

      // TODO: API 연결 후 수정
      const data = transformedData.length > 0 ? transformedData : FAQS;

      setFAQData(data);
    };

    fetchAndSetFAQs();
  }, []);

  return (
    <section className="flex flex-col gap-y-3 mt-[22px]">
      {!!FAQData.length &&
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
