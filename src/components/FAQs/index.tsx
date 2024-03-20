import React from 'react';

import { QUESTION_PREFIX, FAQS, Faqs } from 'components/FAQs/constants';
// import { getFaqs } from '../../api/faqs';

type Props = {
  FAQData: Faqs;
};

function FAQ({ FAQData }: Props) {
  return (
    <div>
      <header className="flex gap-x-1 p-2.5 text-solo-large">
        <span className="pt-1 text-orange-400">{QUESTION_PREFIX}</span>
        <span className="leading-7">{FAQData.question}</span>
      </header>
      <main className="m-2.5 p-[1.125rem] bg-gray-2 text-body-small text-gray-1 rounded-2xl">
        {FAQData.answer}
        {FAQData.link && (
          <a href={FAQData.link} target="_blank" rel="noopener noreferrer">
            {FAQData.link}
          </a>
        )}
        {FAQData.email && (
          <a href={`mailto:${FAQData.email}`}>{FAQData.email}</a>
        )}
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
    <section className="h-full flex flex-col gap-y-8 mt-[1.375rem]">
      {!!FAQS.length && FAQS.map((faq) => <FAQ key={faq.id} FAQData={faq} />)}
    </section>
  );
}

export default FAQs;
