import React from 'react'

export default function MessageInput({ sendMessage, message, setMessage }) {
    return (
        <form className="msger-inputarea">
            <input 
            className="msger-input" 
            type="text" 
            placeholder="digite....."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' ? sendMessage(e.target.value) : null }
            />
            <button 
            className="msger-send-btn" 
            type="submit"
            onClick={(e) => sendMessage(e)}
            >
            Send
            </button>
        </form>
    )
}
