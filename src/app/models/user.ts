import { Photo } from './photo';

export interface User {
  user_id: number;
  userName: string;
  knownAs: string;
  age: number;
  gender: string;
  createdOn: Date;
  lastActive: Date;
  photoUrl: string;
  city: string;
  country: string;
  interests?: string;
  introduction?: string;
  lookingFor?: string;
  photos?: Photo[];
}
 