import React from "react";
import { Link } from "react-router-dom";

const PageLink:React.FC<{children:React.ReactNode, path:string, color?:string}> = ({children, path, color}):JSX.Element => {

    return(
        <Link 
            to={path} 
            style={{ 
                textDecoration: "none",
                color
            }}
        >
            {children}
        </Link>
    );

}

export default PageLink;