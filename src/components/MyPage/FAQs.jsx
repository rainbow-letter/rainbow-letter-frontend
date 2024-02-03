import React from 'react';

import { QUESTION_PREFIX, FAQS } from './constants';
// import { getFaqs } from '../../api/faqs';

function FAQ({ FAQData }) {
  return (
    <div>
      <header className="p-2.5 text-solo-large">
        <span className=" text-orange-400">{QUESTION_PREFIX}</span>
        <span>{FAQData.question}</span>
      </header>
      <main className="m-2.5 p-[18px] bg-gray-2 text-body-small text-gray-1 rounded-2xl">
        {FAQData.answer}
      </main>
    </div>
  );
}

function FAQs() {
  // TODO: API 연결 후 수정
  // const [FAQData, setFAQData] = useState([]);

  // useEffect(() => {
  //   const fetchAndSetFAQs = async () => {
  //     const res = await getFaqs();
  //     const transformedData = res.faqs.map((faq) => ({
  //       id: faq.id,
  //       question: faq.summary,
  //       answer: faq.detail,
  //     }));

  //     const data = transformedData.length > 0 ? transformedData : FAQS;

  //     setFAQData(data);
  //   };

  //   fetchAndSetFAQs();
  // }, []);

  return (
    <section className="h-full flex flex-col gap-y-[32px] mt-[22px]">
      {!!FAQS.length &&
        FAQS.map((faq) => (
          <FAQ
            key={faq.id}
            FAQData={{ question: faq.question, answer: faq.answer }}
          />
        ))}
    </section>
  );
}

export default FAQs;
