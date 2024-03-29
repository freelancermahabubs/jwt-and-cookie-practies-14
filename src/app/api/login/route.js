import {TokenCookie} from "@/app/utility/TokenCookie";
import {NextResponse} from "next/server";
import {cookies} from "next/headers";
export async function POST(req, res) {
  const JSONBody = await req.json();
  let email = JSONBody["email"];
  let password = JSONBody["password"];
  if (email === "info.freelancermahabub@gmail.com" && password === "1234") {
    let Cookie = await TokenCookie(email);
    return NextResponse.json(
      {status: true, message: "Login SucessFull"},
      {status: 200, headers: Cookie}
    );
  } else {
    return NextResponse.json({status: false, message: "Login Fail"});
  }
}

export async function GET(req, res) {
  cookies().delete("token");
  return NextResponse.json({status: true, message: "LogOut Success"});
}
