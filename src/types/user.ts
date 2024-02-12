export type User = {
  id: string;
  email: string;
  phoneNumber: string | null;
  role: 'ROLE_USER' | 'ROLE_ADMIN';
};
