import { Footer } from "./footer/Footer"
import { Header } from "./header/Header"


const Layout = (props) =>   {
    return(
         <div className=  {props.backgound} >
            <Header />
      
      <main>
        {props.children}
      </main>
      <Footer />

         </div>
    )
    
        
}
export    { Layout }