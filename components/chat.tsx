export default function ChatHistory(userMessage, assistantMessage) {
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
  );
}
