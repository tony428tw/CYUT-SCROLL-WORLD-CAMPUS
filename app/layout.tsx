import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '步步朝陽｜朝陽科技大學校園漫遊',
  description: '跟著光影走進微縮校園，探索朝陽的學習、綠意與日常。八個章節，一趟溫暖的滾動漫遊。',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: '步步朝陽｜朝陽科技大學校園漫遊',
    description: '八個停留，無數種相遇。跟著捲動鏡頭，走進溫暖的微縮校園。',
    locale: 'zh_TW', type: 'website',
    images: [{url:'/og.png',width:1672,height:941,alt:'步步朝陽微縮校園總覽'}],
  },
  twitter: {card:'summary_large_image',title:'步步朝陽｜朝陽科技大學校園漫遊',images:['/og.png']},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>
        {children}
      </body>
    </html>
  );
}
