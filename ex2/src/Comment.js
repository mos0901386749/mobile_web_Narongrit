import React from 'react'
import "./Comment.css"

export default function Comment (props) {
    return (
        <div className="dialogbox">
            <div className="body">
                <span className="body">
                    <span className="tip tip-up"></span>
                    <div className="message">
                        <span>
                            <b>{props.userId}</b> - {props.message}
                        </span>
                    </div>
                </span>
            </div>
            
        </div>
    )
}
