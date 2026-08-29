import { useState } from "react";
import type { ChatMessage as ChatMessageType } from "../types/chat";

export function useChat() {
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [isThinking, setIsThinking] = useState(false);

  function sendMessage(message: string) {
    if (isThinking) {
      return;
    }

    const userMessage: ChatMessageType = {
      id: crypto.randomUUID(),
      role: "user",
      content: message,
    };

    setMessages((currentMessages) => [
      ...currentMessages,
      userMessage,
    ]);

    setIsThinking(true);

    setTimeout(() => {
      const response =
        "Hello! I'm EMLUCK. How can I help you today?";

      const assistantMessage: ChatMessageType = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: "",
      };

      setMessages((currentMessages) => [
        ...currentMessages,
        assistantMessage,
      ]);

      setIsThinking(false);

      let currentText = "";
      let characterIndex = 0;

      const typingInterval = setInterval(() => {
        currentText += response[characterIndex];

        setMessages((currentMessages) =>
          currentMessages.map((chatMessage) =>
            chatMessage.id === assistantMessage.id
              ? {
                ...chatMessage,
                content: currentText,
              }
              : chatMessage
          )
        );

        characterIndex += 1;

        if (characterIndex >= response.length) {
          clearInterval(typingInterval);
        }
      }, 35);
    }, 1500);
  }

  return {
    messages,
    isThinking,
    sendMessage,
  };
}