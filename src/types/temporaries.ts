export interface SavedLetterResponse {
  id: number;
  memberId: number;
  petId: number;
  content: string;
  sessionId: string;
  status: string;
}

export interface SavedLetterRequest {
  id?: string;
  petId: number | undefined;
  content: string;
}
