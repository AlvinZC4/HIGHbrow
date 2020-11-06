import React from "react"

function Header(props) {
 return (
    <div className="panel-heading mt-2">
        <div className="panel-title text-center">
            <h1 className="">{props.text}</h1>
            <hr />
        </div>
    </div>
 )
}

export default Header