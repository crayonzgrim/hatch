import { SidebarStateProvider } from '@/components/providers/sidebar-state-provider';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Hatch',
  description: 'Hatch for foreigners who live in Korea'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-full antialiased`}
      >
        <SidebarStateProvider>{children}</SidebarStateProvider>
      </body>
    </html>
  );
}

// import type { Metadata } from 'next';
// import { cookies } from 'next/headers';
// import { Geist, Geist_Mono } from 'next/font/google';
//
// import { SidebarStateProvider } from '@/components/providers/sidebar-state-provider';
//
// import './globals.css';
//
// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin']
// });
//
// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin']
// });
//
// export const metadata: Metadata = {
//   title: 'Hatch',
//   description: 'Hatch for foreigners who live in Korea'
// };
//
// export default async function RootLayout({
//   children
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   // 서버에서 쿠키 읽기
//   const cookieStore = await cookies();
//   const sidebarState = cookieStore.get('sidebar_state');
//   const defaultOpen = sidebarState?.value === 'false' ? false : true;
//
//   return (
//     <html lang="en" className="h-full">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} min-h-full antialiased`}
//       >
//         <SidebarStateProvider defaultOpen={defaultOpen}>
//           {children}
//         </SidebarStateProvider>
//       </body>
//     </html>
//   );
// }
