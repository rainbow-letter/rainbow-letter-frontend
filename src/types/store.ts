export interface State {
  user: {
    id: null | string;
    email: null | string;
    phoneNumber: null | string;
    role: null | string;
  };
  modal: {
    isOpen: boolean;
    type: null | string;
  };
  adminLetters: any;
  adminLetterUi: any;
}

export type Status = 'idle' | 'loading' | 'success' | 'failed';
export type Error = string | null;
