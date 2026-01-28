import { useEffect } from "react";

const AGENT_ID = "agent_6201kg2y4qptfv8tq446agbtveyr";

const ElevenLabsWidget = () => {
  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector('script[src*="elevenlabs/convai-widget-embed"]');
    if (existingScript) return;

    // Create and add the ElevenLabs widget script
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      const widget = document.querySelector("elevenlabs-convai");
      if (widget) {
        widget.remove();
      }
    };
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<elevenlabs-convai agent-id="${AGENT_ID}"></elevenlabs-convai>`,
      }}
    />
  );
};

export default ElevenLabsWidget;
