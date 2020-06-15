import jwt from 'jsonwebtoken';

const extractPayloadFromToken = (token) => {
  if (!token) return false;
  const payload = jwt.decode(token);
  if (!payload || typeof(payload) === 'string') return false;
  return payload; 
};

export const isValidToken = (token) => {
  const payload = extractPayloadFromToken(token);
  return !!payload && Date.now() <= payload.exp * 1000;
};
