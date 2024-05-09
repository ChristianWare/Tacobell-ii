import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const SEND_EMAIL = "chris.ware.dev@gmail.com";
const PASSWORD = "eayw aboq lrso ugqx";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: SEND_EMAIL,
    pass: PASSWORD,
  },
});

export async function POST(request: Request) {
  const data = await request.json();
  const info = await transporter.sendMail({
    from: `"Taco Bell Redesign" <${SEND_EMAIL}>`, // sender name and address
    to: SEND_EMAIL, // list of receivers
    replyTo: data.email, // reply-to address
    subject: "Taco Bell Contact Form Submission", // Subject line
    text: "Hello world?",
    html: `<b>First Name:</b> <br/> 
            ${data?.firstName} <br/> <br/>
            <b>Last Name:</b> <br/> 
            ${data?.lastName} <br/> <br/>
            <b>Email:</b> </b> <br/> 
            ${data?.email} <br/> <br/>
            <b>Message:</b> </b> 
            ${data?.message}`,
  });

  return NextResponse.json({
    messageId: info.messageId,
  });
}
