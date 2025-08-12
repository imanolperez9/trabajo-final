import { Footer } from "./footer/Footer"
import { Header } from "./header/Header"


const Layout = (props) =>   {
    return(
        <>
      <Header />
      <main>
        {props.children}
      </main>
      <Footer />

        </>
    )
}
export    { Layout }