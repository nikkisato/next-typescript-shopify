import { AppProps } from "next/app"
import { FunctionComponent } from "react"
import "@assets/main.css"
import { UIProvider } from "@components/ui/context"
import 'keen-slider/keen-slider.min.css'


const Noop: FunctionComponent = ({children}) => <>{children}</>

function MyApp({Component, pageProps}: AppProps & {Component: {Layout: FunctionComponent}}) {
  const Layout = Component.Layout ?? Noop

  return (
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  )
}

export default MyApp