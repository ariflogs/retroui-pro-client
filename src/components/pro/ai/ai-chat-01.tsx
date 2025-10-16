import { useState, useRef, useEffect } from "react";
import {
  User,
  Bot,
  Send,
  Mic,
  ImageIcon,
  Paperclip,
  MoreVertical,
  Sparkles,
} from "lucide-react";
import { Text } from "@/components/retroui/Text";
import { Button } from "@/components/retroui/Button";
import { Textarea } from "@/components/retroui/Textarea";

// Define message types
type MessageType = {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
};

export function AIChatInterface() {
  const [messages, setMessages] = useState<MessageType[]>([
    {
      id: "1",
      content: "Hello! I'm Retro AI. How can I help you today?",
      sender: "ai",
      timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isAiTyping, setIsAiTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Handle sending a new message
  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const newUserMessage: MessageType = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue("");

    // Simulate AI typing
    setIsAiTyping(true);

    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponses = [
        "Well, AI models are expensive! So maybe you can buy RetroUI Pro and I might be able to answer your questions. 😛",
      ];

      const randomResponse =
        aiResponses[Math.floor(Math.random() * aiResponses.length)];

      const newAiMessage: MessageType = {
        id: Date.now().toString(),
        content: randomResponse,
        sender: "ai",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, newAiMessage]);
      setIsAiTyping(false);
    }, 1500);
  };

  return (
    <div className="border-4 w-full border-black bg-white h-[800px] overflow-y-auto flex flex-col">
      {/* Header */}
      <div className="border-b-4 border-black p-4 bg-primary">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <Text as="h3">Retro AI</Text>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="bg-white p-2 border-2 border-black hover:bg-gray-100">
              <Sparkles className="h-5 w-5" />
            </button>
            <button className="bg-white p-2 border-2 border-black hover:bg-gray-100">
              <MoreVertical className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-6">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start gap-3 max-w-3xl ${
              message.sender === "user" ? "ml-auto flex-row-reverse" : ""
            }`}
          >
            <div
              className={`${
                message.sender === "user"
                  ? "bg-accent text-black"
                  : "bg-black text-white"
              } p-2 border-2 border-black transform`}
            >
              {message.sender === "user" ? (
                <User className="h-5 w-5" />
              ) : (
                <Bot className="h-5 w-5" />
              )}
            </div>
            <div
              className={`border-2 border-black bg-accent p-4 ${
                message.sender === "user" ? "bg-accent" : "bg-white"
              }`}
            >
              <p>{message.content}</p>
            </div>
          </div>
        ))}

        {/* AI Typing Indicator */}
        {isAiTyping && (
          <div className="flex items-start gap-3 max-w-3xl">
            <div className="bg-black text-white p-2 border-2 border-black transform">
              <Bot className="h-5 w-5" />
            </div>
            <div className="bg-white border-2 border-black p-4 font-mono transform rotate-1 flex items-center gap-2">
              <div className="h-2 w-2 bg-black rounded-full animate-bounce"></div>
              <div
                className="h-2 w-2 bg-black rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="h-2 w-2 bg-black rounded-full animate-bounce"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>
        )}

        {/* Invisible element for auto-scrolling */}
        <div ref={messagesEndRef} />
      </div>
      {/* Input Area */}
      <div className="border-t-4 border-black p-4 bg-gray-100">
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <Textarea
              type="text"
              placeholder="Ask RetroUI AI anything about UI design..."
              className="w-full mb-4 py-4 h-28 bg-background"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />
          </div>

          <div className="flex justify-between">
            <div className="flex gap-2">
              <Button
                className="p-3 shadow-none bg-purple-400 hover:bg-purple-500"
                onClick={handleSendMessage}
              >
                <Paperclip className="h-5 w-5" />
              </Button>
              <Button
                className="p-3 shadow-none bg-red-400 hover:bg-red-500"
                onClick={handleSendMessage}
              >
                <ImageIcon className="h-5 w-5" />
              </Button>
              <Button
                className="p-3 shadow-none bg-green-400 hover:bg-green-500"
                onClick={handleSendMessage}
              >
                <Mic className="h-5 w-5" />
              </Button>
            </div>

            <Button className="p-3 shadow-none" onClick={handleSendMessage}>
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AIChatPageOne() {
  return (
    <div className="relative px-4 py-20 max-w-4xl mx-auto">
      <AIChatInterface />
    </div>
  );
}
