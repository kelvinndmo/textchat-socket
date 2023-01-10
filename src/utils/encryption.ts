import { createCipheriv, createDecipheriv, randomBytes } from 'crypto';

const characterMatrixForRandomIVStringGeneration = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '-',
  '_',
];

export const localEncrypt = (
  text: string,
  iv = null as any,
  options = {} as any,
) => {
  if (!text) return text;

  let secretKey = options.secretKey || process.env.SECRET_KEY;

  const initVector = randomBytes(16);
  const Securitykey = randomBytes(32);
  const cipher = createCipheriv('aes-256-cbc', Securitykey, initVector);
  let encryptedData = cipher.update(text, 'utf-8', 'hex');

  // let key = cryptlib.getHashSha256(secretKey as string, 32); //32 bytes = 256 bits
  // let cypherText = `${iv}${cryptlib.encrypt(text as string, key, iv)}`; //prepend iv
  return encryptedData;
};
