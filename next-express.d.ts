import { Request } from 'express';
import { NextApiRequest } from 'next';

declare module 'next' {
  export interface NextApiRequest extends Request {}
}
