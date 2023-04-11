import { Session } from 'next-auth';

export interface SessionData {
  session: Session;
  status: 'loading' | 'authenticated' | 'unauthenticated';
}
