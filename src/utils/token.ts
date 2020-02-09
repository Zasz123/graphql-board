import jwt, { SignOptions } from "jsonwebtoken";
import { Context, Middleware, Next } from "koa";
import User from "../entities/User";

export const decodeToken = async (token: string): Promise<any> => {
  try {
    const decoded: any = await jwt.verify(token, "yanggaeng");

    return decoded;
  } catch (error) {
    if (error.message === "jwt expired") {
      return "ExpiredToken";
    }
    return undefined;
  }
};

export const createToken = async (
  payload: any,
  option?: SignOptions
): Promise<string> => {
  const token: string = await jwt.sign(payload, "yanggaeng", {
    expiresIn: "7d",
    ...option
  });
  return token;
};

export const refresh = async (ctx: Context, refreshToken: string) => {
  try {
    const decoded = await decodeToken(refreshToken);
    const user = await User.findOne(decoded.userId);
    if (!user) {
      throw new Error("Invalid User");
    }
    const token = await user.refreshUserToken(
      decoded.tokenId,
      decoded.exp,
      refreshToken
    );
    return decoded;
  } catch (error) {
    throw error;
  }
};

export const jwtConfig: Middleware = async (
  ctx: Context,
  next: Next
): Promise<void> => {
  const { accesstoken } = ctx.headers;
  try {
    if (!accesstoken) {
      throw new Error("NoAccessToken");
    }
    const accessTokenData = await decodeToken(accesstoken);

    ctx.state.user = accessTokenData.user;
  } catch (error) {}
  await next();
};
