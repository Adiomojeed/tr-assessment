import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ErrorBoundary
          fallback={
            <div className="h-screen w-screen flex justify-center items-center">
              <h6 className="text-md text-red-600">Something went wrong!</h6>
            </div>
          }
        >
          <Suspense
            fallback={
              <div className="h-screen w-screen flex justify-center items-center">
                <h6 className="text-md">Loading...</h6>
              </div>
            }
          >
            {children}
          </Suspense>
        </ErrorBoundary>
      </body>
    </html>
  );
}
