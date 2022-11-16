import { PropsWithChildren } from "react";
import Introduction from "./landing/introduction";

export default function Layout( { children }: PropsWithChildren ) {
   return ( 
      <div className="container">

         <div className="row">
            <div className="col-md-8 m-auto">
                  {/* Introduction section */}
                     <Introduction/>
                  {/* Introduction section */}
                  {children}
            </div>
         </div>
      </div>
   )
}