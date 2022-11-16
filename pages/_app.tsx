import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider} from 'react-query'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/global.css'

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return(
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  ) 
}
