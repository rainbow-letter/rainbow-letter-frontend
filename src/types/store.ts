export interface State {
  user: {
    id: null | string;
    email: null | string;
    phoneNumber: null | string;
    role: null | string;
  };
  modal: {
    isOpen: null | boolean;
    type: null | string;
    canOpenAgain: null | boolean;
  };
  adminLetters: any;
  adminLetterUi: any;
}
