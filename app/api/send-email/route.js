import { Resend } from "resend";
import { NextResponse } from "next/server";
import { createReadStream } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { unlink } from "fs/promises";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const formData = await req.formData();

  const email = formData.get("email");
  const message = formData.get("message");
  const files = formData.getAll("files");

  // Validate file size and count
  let totalSize = 0;
  const maxFileCount = 5;
  const maxTotalSize = 50 * 1024 * 1024; // 50MB

  if (files.length > maxFileCount) {
    return NextResponse.json(
      { success: false, error: `Maximum ${maxFileCount} files allowed` },
      { status: 400 }
    );
  }

  for (const file of files) {
    totalSize += file.size;
  }

  if (totalSize > maxTotalSize) {
    return NextResponse.json(
      { success: false, error: "Total file size exceeds 100MB limit" },
      { status: 400 }
    );
  }

  try {
    // Prepare attachments for Resend
    const attachments = await Promise.all(
      files.map(async (file) => {
        // Save file temporarily
        const tempPath = join(tmpdir(), file.name);
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // In a real app, you might want to store this in a more permanent location
        // or process it before sending
        await require("fs").promises.writeFile(tempPath, buffer);

        return {
          filename: file.name,
          content: buffer,
          // Alternatively, you could use a path if using Resend's file system option
          // path: tempPath
        };
      })
    );

    const data = await resend.emails.send({
      from: "Kval Portfolio <onboarding@resend.dev>",
      to: "kg256853@gmail.com",
      subject: "New Mail From kval app",
      html: `<p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
      attachments: attachments,
    });

    // Clean up temporary files
    await Promise.all(
      attachments.map(async (attachment) => {
        if (attachment.path) {
          try {
            await unlink(attachment.path);
          } catch (cleanupError) {
            console.error("Error cleaning up file:", cleanupError);
          }
        }
      })
    );

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Email send failed:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
