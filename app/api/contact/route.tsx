import { ContactFormDataType } from "@/Types/Types";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  const GOOGLE_PASSWORD = process.env.GOOGLE_PASS;
  const GOOGLE_USER = process.env.GOOGLE_USER;
  if (!GOOGLE_PASSWORD) {
    console.error(
      "Configuration error: GOOGLE_PASS environment variable is not set."
    );
    return NextResponse.json(
      { error: true, message: "Server configuration error." },
      { status: 500 } // Internal Server Error
    );
  }

  const data: Partial<ContactFormDataType> = await request.json(); // Use Partial if validating

  // Basic validation
  if (
    !data.name ||
    !data.email ||
    !data.message ||
    typeof data.name !== "string" ||
    typeof data.email !== "string" ||
    typeof data.message !== "string"
  ) {
    return NextResponse.json(
      { error: true, message: "Invalid input: Missing required fields." },
      { status: 400 } // Bad Request
    );
  }
  try {
    const transport = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      service: "gmail",
      auth: {
        user: GOOGLE_USER,
        pass: GOOGLE_PASSWORD,
      },
    });

    const mailOptions = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>body { font-family: Arial, sans-serif;} .email-container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fff; border: 2px solid #48AEDD; border-radius: 10px;} p { font-size: 20px; line-height: 1.5; margin-bottom: 10px; border: 2px solid #48AEDD; border-radius: 50px 20px; background-color: #48AEDD; color: white; padding: 5px; text-align: center; font-weight: 900;} ul { list-style-type: none; padding: 0;} li { margin-bottom: 5px;} .signature { font-style: italic; font-size: 14px;}</style></head><body><div class="email-container"><p>ckbeamsoftware</p><ul><li><strong>Name:</strong> ${data.name}</li><li><strong>Email:</strong> ${data.email}</li><li><strong>Phone:</strong> ${data.phoneNumber}</li><li><strong>Subject:</strong>${data.subject}</li><li><strong>Message:</strong><br>${data.message}</li></ul></div></body></html>`;
    const info = await transport.sendMail({
      from: `${data?.name}`,
      to: GOOGLE_USER,
      subject: `Inquiry from Christian's portfolio`,
      text: "",
      html: mailOptions,
    });
    if (info) {
      return NextResponse.json({
        error: false,
        message:
          "Message successfully sent! Thank you for contacting ckbeamsoftware",
      });
    } else {
      return NextResponse.json({
        error: true,
        message: "Something Went Wrong!",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error: true,
      message: "Something Went Wrong!",
    });
  }
}
