import '../styles/globals.css'
import type { AppProps } from 'next/app'
import UserContainer from "../components/shared/UserContainer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserContainer>
      <Component {...pageProps} />
    </UserContainer>
  );
}

export default MyApp
