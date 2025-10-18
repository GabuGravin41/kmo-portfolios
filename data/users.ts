import { User, Role } from '../types';

export const users: User[] = [
  { id: 101, email: 'student@kmo.com', password: 'password', role: Role.STUDENT, studentId: 1 },
  { id: 102, email: 'trainer@kmo.com', password: 'password', role: Role.TRAINER },
  { id: 103, email: 'admin@kmo.com', password: 'password', role: Role.ADMIN },
];
