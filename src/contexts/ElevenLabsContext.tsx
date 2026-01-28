import React, { createContext, useContext, useCallback, useState } from "react";
import { useConversation } from "@elevenlabs/react";

const AGENT_ID = "agent_6201kg2y4qptfv8tq446agbtveyr";

type ConversationStatus = "connected" | "connecting" | "disconnected";

interface ElevenLabsContextType {
  status: ConversationStatus;
  isSpeaking: boolean;
  isConnecting: boolean;
  toggleConversation: () => Promise<void>;
}

const ElevenLabsContext = createContext<ElevenLabsContextType | null>(null);

export const ElevenLabsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isConnecting, setIsConnecting] = useState(false);

  const conversation = useConversation({
    onConnect: () => {
      console.log("Connected to ElevenLabs agent");
      setIsConnecting(false);
    },
    onDisconnect: () => {
      console.log("Disconnected from ElevenLabs agent");
      setIsConnecting(false);
    },
    onError: (error) => {
      console.error("ElevenLabs error:", error);
      setIsConnecting(false);
    },
  });

  const startConversation = useCallback(async () => {
    setIsConnecting(true);
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      await conversation.startSession({
        agentId: AGENT_ID,
      } as any);
    } catch (error) {
      console.error("Failed to start conversation:", error);
      setIsConnecting(false);
    }
  }, [conversation]);

  const stopConversation = useCallback(async () => {
    await conversation.endSession();
  }, [conversation]);

  const toggleConversation = useCallback(async () => {
    if (conversation.status === "connected") {
      await stopConversation();
    } else if (conversation.status !== "connecting") {
      await startConversation();
    }
  }, [conversation.status, startConversation, stopConversation]);

  return (
    <ElevenLabsContext.Provider
      value={{
        status: conversation.status as ConversationStatus,
        isSpeaking: conversation.isSpeaking,
        isConnecting,
        toggleConversation,
      }}
    >
      {children}
    </ElevenLabsContext.Provider>
  );
};

export const useElevenLabs = () => {
  const context = useContext(ElevenLabsContext);
  if (!context) {
    throw new Error("useElevenLabs must be used within an ElevenLabsProvider");
  }
  return context;
};

