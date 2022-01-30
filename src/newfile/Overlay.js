import React from "react";
const Overlay = () => {
    return ( 
        <div className="w3-overlay w3-hide-large" onclick="w3_close()" style={{cursor: 'pointer'}} title="close side menu" id="myOverlay" />

     );
}
 
export default Overlay;