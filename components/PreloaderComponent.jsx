import React from "react";

const Preloader = () => {
    return(
        <div id="js-preloader" className="js-preloader">
            <div className="preloader-inner">
                <span className="dot"/>
                <div className="dots">
                    <span/>
                    <span/>
                    <span/>
                </div>
            </div>
        </div>
    )
}

export default Preloader