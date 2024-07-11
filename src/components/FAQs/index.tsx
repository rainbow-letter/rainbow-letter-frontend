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
      <main className="m-2.5 rounded-2xl bg-gray-2 p-[1.125rem] text-body-small text-gray-1">
        {FAQData.answer}
        {FAQData.link && (
          <a href={FAQData.link} rel="noopener noreferrer" target="_blank">
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
    <section className="mt-[1.375rem] flex h-full flex-col gap-y-8">
      {!!FAQS.length && FAQS.map((faq) => <FAQ key={faq.id} FAQData={faq} />)}
    </section>
  );
}

export default FAQs;
