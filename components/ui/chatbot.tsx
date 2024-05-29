'use client'
import React, { useEffect } from 'react'


const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    script.async = true
    document.body.appendChild(script)
 
    script.onload = () => {
      window.botpressWebChat.init({
        composerPlaceholder: "Chat with AI Assistant",
        botConversationDescription: "Powered by SiliconMind",
        botId: "81fbc09c-4f0f-4a5c-a2ed-d1317d376e28",
        hostUrl: "https://cdn.botpress.cloud/webchat/v1",
        messagingUrl: "https://messaging.botpress.cloud",
        clientId: "81fbc09c-4f0f-4a5c-a2ed-d1317d376e28",
        webhookId: "1c7836bc-26ee-47e5-9d26-9735c0952dc5",
        lazySocket: true,
        themeName: "prism",
        botName: "AI Assistant",
        stylesheet: "https://webchat-styler-css.botpress.app/prod/code/ff7b6e0c-54f9-4315-90de-894888d97a2b/v73805/style.css",
        frontendVersion: "v1",
        theme: "prism",
        themeColor: "#2563eb",
      })

    }
  }, [])
 
  return <div id="webchat" />
}
 
export default Chatbot

