export interface SessionIdResponse {
  sessionId: string;
}

export interface SavedLetterResponse {
  id: number;
  userId: number;
  petId: number;
  content: string;
  sessionId: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface SavedLetterRequest {
  id?: string;
  petId: number | undefined;
  content: string;
}

export interface ExistResponse {
  exists: boolean;
}

export interface GenerateSavedLetterResponse extends SessionIdResponse {
  id: number;
}
