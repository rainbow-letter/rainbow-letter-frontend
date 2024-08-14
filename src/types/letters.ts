type LetterStatus = 'REQUEST' | 'RESPONSE';
type ReadStatus = 'UNREAD' | 'READ';

export interface LetterResponse {
  id: number;
  summary: string;
  status: LetterStatus;
  petName: string;
  readStatus: ReadStatus;
  createdAt: string;
  number?: number;
}

export interface LetterRequest {
  summary: string;
  content: string;
  image: string;
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
