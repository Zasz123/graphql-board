import jwt from "jsonwebtoken";

const createJWT = (id: number): string => {
  const token = jwt.sign(
    {
      id
    },
    "yanggaeng"
  );
  return token;
};

export default createJWT;
