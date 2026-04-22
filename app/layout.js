import './globals.css';
import { LanguageProvider } from '../components/LanguageProvider';

export const metadata = {
  title: 'bnbops.se | Airbnb Location Ready',
  description:
    'We prepare properties in Stockholm and Uppsala to become Airbnb-ready, guest-ready and launch-ready.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}