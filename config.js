// config.js
// Configuracion central de NexusPay / FinNex - Usando openai/gpt-oss-120b

const CONFIG = {
    // ============ SUPABASE ============
    SUPABASE_URL: "https://qoyfgxqsswlzpiriidwy.supabase.co",
    SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFveWZneHFzc3dsenBpcmlpZHd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEzMzUzMTIsImV4cCI6MjEwNjkxMTMxMn0.Ml2Qpfd3ct6du_QdV5CfSFvHCAuIil0xo8r84wEPHiw",

    // ============ API KEYS (GROQ) ============
    GROQ_API_KEY: "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",
    URL_GROQ: "https://api.groq.com/openai/v1/chat/completions",
    MODELO_GROQ: "openai/gpt-oss-120b", // <--- Modelo actualizado
  ELEVENLABS_API_KEY: "sk_e5c05b8ebb08e23c26ca51f9e5566ffafbbe3361c364f997",

      // ============ ELEVENLABS (voz de Luci) ============
  // Voz predefinida (Sarah): funciona con el plan gratuito.
  // La voz de la librería "ZqvIIuD5aI9JFejebHiH" requiere un plan de pago.
  ELEVENLABS_VOICE_ID: "EXAVITQu4vr4xnSDxMaL",
  ELEVENLABS_MODEL: "eleven_multilingual_v2",

    // ============ ASISTENTE ============
    ASISTENTE_NOMBRE: "Luci",
    ASISTENTE_ROL: "Asistente virtual de FinNex",
    ASISTENTE_AVATAR: "💜",
    ASISTENTE_SALUDO: "Hola! Soy Luci, tu asistente de FINNEX. ¿En qué te ayudo hoy?"
};
