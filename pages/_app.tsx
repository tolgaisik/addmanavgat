import { Metadata } from 'next';

import { SITE } from '~/config.js';

import Providers from '~/components/atoms/Providers';
import Header from '~/components/widgets/Header';
import Announcement from '~/components/widgets/Announcement';
import Footer2 from '~/components/widgets/Footer2';

import { Righteous as CustomFont } from 'next/font/google';
import '~/assets/styles/base.css';
import { AppProps } from 'next/app';

export interface LayoutProps {
  children: React.ReactNode;
}

const customfont = CustomFont({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: `%s — ${SITE.name}`,
    default: SITE.title,
  },
  description: SITE.description,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <style jsx global>{`
        html {
          font-family: ${customfont.style.fontFamily};
        }
      `}</style>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer2 />
    </Providers>
  );
}

export default MyApp;
