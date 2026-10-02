"use client";

import AppNav from "@/components/AppNav";
import { demoMessages } from "@/lib/demo-data";
import { useState } from "react";
import { Send, ShieldAlert } from "lucide-react";

export default function MessagesPage() {
  const [messages, setMessages] = useState(demoMessages);
  const [draft, setDraft] = useState("");

  function send() {
    if (!draft.trim()) return;
    setMessages((current) => [
      ...current,
      { id: Date.now(), sender: "You", body: draft.trim(), time: "Now" },
    ]);
    setDraft("");
  }

  return (
    <main>
      <AppNav />
      <section className="chatShell">
        <aside className="chatList">
          <div className="eyebrow">Messages</div>
          <div className="chatPerson activeChat">
            <div className="avatar">J</div>
            <div><strong>Jordan</strong><p>Active match</p></div>
          </div>
        </aside>

        <section className="chatPanel">
          <header className="chatHeader">
            <div><strong>Jordan</strong><p>Matched through recovery and relationship alignment</p></div>
            <a className="iconLink" href="/safety"><ShieldAlert size={20} /> Safety</a>
          </header>

          <div className="messages">
            {messages.map((message) => (
              <div className={message.sender === "You" ? "message mine" : "message"} key={message.id}>
                <div>{message.body}</div>
                <small>{message.time}</small>
              </div>
            ))}
          </div>

          <div className="composer">
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Write a message..."
            />
            <button onClick={send}><Send size={19} /></button>
          </div>
        </section>
      </section>
    </main>
  );
}
