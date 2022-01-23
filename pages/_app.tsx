import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {} from "styled-components/cssprop";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
