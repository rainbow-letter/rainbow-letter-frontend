export interface Letters {
  id: number;
  summary: string;
  status: 'REQUEST' | 'RESPONSE';
  petName: string;
  readStatus: string;
  createdAt: string;
  index?: number;
  // TODO: 추후 삭제
  number?: number;
}

export interface Letter {
  id: number;
  summary: string;
  content: string;
  shareLink: string;
  pet: {
    id: number;
    name: string;
    species: string;
    personalities: string;
    image: {
      id: null | number;
      objectKey: null | string;
      url: null | string;
    };
  };
  image: {
    id: number;
    objectKey: string;
    url: string;
  };
  reply: {
    id: number;
    summary: string;
    content: string;
    inspection: boolean;
    readStatus: string;
    type: string;
    timestamp: string;
  };
  createdAt: string;
}
