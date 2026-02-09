/*El Layout es el componente que envuelve toda la aplicación y contiene elementos
comunes como el Navbar y el Footer No es necesario colocar el elemento children 
dentro de otro archivo ya que duplicaria los elementos, el layout es el unico
con children y donde se importan los componentes como Navbar y Footer*/ 
import type { ReactNode } from "react"
import "./globals.css"; /*importa los estilos globales para toda la aplicación*/
import Navbar from "@/components/Navbar"; /*importa el Navbar para su uso en el Layout*/
import Footer from "@/components/Footer"; /*importa el footer para su uso en el Layout*/

export default function RootLayout({
  children,}:{
    children:ReactNode
  }){
  return(
    <html lang="es">
      <body>
        <Navbar /> 
        {children}
        <Footer />
      </body>
    </html>
  )
}