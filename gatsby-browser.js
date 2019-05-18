import "normalize.css"

import "./src/style/global.css"
import Layout from "./src/components/shared/layout"

export const wrapPageElement = Layout

const console_greeting = `
███████╗ █████╗ ██████╗ ██████╗ ███████╗██╗   ██╗
╚══███╔╝██╔══██╗██╔══██╗██╔══██╗██╔════╝██║   ██║
  ███╔╝ ███████║██████╔╝██║  ██║█████╗  ██║   ██║
 ███╔╝  ██╔══██║██╔═══╝ ██║  ██║██╔══╝  ╚██╗ ██╔╝
███████╗██║  ██║██║██╗  ██████╔╝███████╗ ╚████╔╝ 
╚══════╝╚═╝  ╚═╝╚═╝╚═╝  ╚═════╝ ╚══════╝  ╚═══╝  
________ 🦑 WELCOME TO THE DEBUG ZONE 🦑 ________
`
console.log(console_greeting)
