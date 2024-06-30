import jwt from 'jsonwebtoken';

const SECRET = 'E8r$F!9kZm6qW@3N{arBITRARY#58z}';

export class AuthService {
  static generateToken(payload: object): string {
    return jwt.sign(payload, SECRET, { expiresIn: '1h' });
  }

  static verifyToken(token: string): object | null {
    try {
      const decoded = jwt.verify(token, SECRET);
      return typeof decoded === 'object' ? decoded : null;
    } catch (error) {
      return null;
    }
  }
}