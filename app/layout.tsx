import '@/app/ui/global.css';
<<<<<<< HEAD
import {inter} from '@/app/ui/fonts'

=======
>>>>>>> 0b81f061246efaaf9b205acca2aa4af5c7edc208
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className = {`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
