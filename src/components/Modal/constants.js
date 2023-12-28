const MODAL_MESSAGE = [
  {
    type: 'TOPIC',
    title: '이런 주제로도 써보세요',
    body: [
      {
        id: 1,
        prefix: 'Q. ',
        contents: '오늘은 어떤 하루였나요?',
      },
      {
        id: 2,
        prefix: 'Q. ',
        contents: '내일은 무엇을 하며 보낼건가요?',
      },
      {
        id: 3,
        prefix: 'Q. ',
        contents: '최근 아이의 응원이 필요한 일이 있나요?',
      },
    ],
  },
  {
    type: 'REPLY',
    title: '문자로 답장 알림을 받아보세요',
    body: [
      {
        id: 1,
        contents: '답장은 1~2일 후에 도착해요',
      },
      {
        id: 2,
        contents: '답장이 도착하며 문자를 보내드려요',
      },
    ],
  },
  {
    type: 'COMPLETE',
    title: '편지가 출발했어요',
    body: [
      {
        id: 1,
        contents: '답장은 1~2일 후에 도착해요',
      },
    ],
  },
];

export default MODAL_MESSAGE;
