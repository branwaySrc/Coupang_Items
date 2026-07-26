import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://coupang-items.vercel.app"),
  title: "김프로 | 쿠팡 카페 아이템 추천",
  description:
    "카페 재료, 카페 주방, 카페 잡화를 심플하게 모아보는 쿠팡 추천 아이템 큐레이션.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "김프로 | 쿠팡 카페 아이템 추천",
    description:
      "카페 재료, 카페 주방, 카페 잡화를 심플하게 모아보는 쿠팡 추천 아이템 큐레이션.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "김프로 쿠팡 카페 아이템 추천",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "김프로 | 쿠팡 카페 아이템 추천",
    description:
      "카페 재료, 카페 주방, 카페 잡화를 심플하게 모아보는 쿠팡 추천 아이템 큐레이션.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
