import React from 'react'

export default function Chat({ userMessage, assistantMessage }) {
    return (
        <div className="chat-container">
            <div className="message user">
                <div className="message-avatar">🙋</div>
                <div className="message-bubble">{userMessage}</div>
            </div>
            <div className="message assistant">
                <div className="message-avatar">🤖</div>
                <div className="message-bubble">{assistantMessage}</div>
            </div>
        </div>
    )
}
