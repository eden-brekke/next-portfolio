import '../styles/globals.css'
import { ThemeProvider } from 'next-themes';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
  <ThemeProvider defaultTheme = 'light' attribute= 'class'>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </ThemeProvider>
  );
}

export default MyApp
