import { NextResponse } from "next/server";
import {VerifyToken} from "./JWTHelper";

export async function CheckCookieAuth(req, next) {
  try {
    let token = req.cookies.get("token");
    let payload = await VerifyToken(token["value"]);
    const requestheaders = new Headers(req.headers);
    requestheaders.set("email", payload["email"]);
    return NextResponse.next({
        request: {headers: requestheaders}
    })
  } catch (e) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
}
