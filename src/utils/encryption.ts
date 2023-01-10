import { createCipheriv, randomBytes } from 'crypto';

export const localEncrypt = (
  text: string,
  iv = null as any,
  options = {} as any,
) => {
  const initVector = randomBytes(16);
  const Securitykey = randomBytes(32);
  const cipher = createCipheriv('aes-256-cbc', Securitykey, initVector);
  let encryptedData = cipher.update(text, 'utf-8', 'hex');

  return encryptedData;
};
