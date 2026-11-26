
// =====================================================
// FINNEX - CONFIGURACIÓN CENTRAL
// Asistente virtual: LUCI
// Groq + ElevenLabs + Supabase
// =====================================================

const CONFIG = Object.freeze({

    // ============ SUPABASE ============
    SUPABASE_URL: "https://qoyfgxqsswlzpiriidwy.supabase.co",

    SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFveWZneHFzc3dsenBpcmlpZHd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEzMzUzMTIsImV4cCI6MjEwNjkxMTMxMn0.Ml2Qpfd3ct6du_QdV5CfSFvHCAuIil0xo8r84wEPHiw",

    // ============ GROQ ============
    GROQ_API_KEY: "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",

    URL_GROQ: "https://api.groq.com/openai/v1/chat/completions",

    MODELO_GROQ: "openai/gpt-oss-120b",

    // ============ ELEVENLABS ============
    ELEVENLABS_API_KEY: "sk_04a01e41e55743d3888862bfe66e43e86dc09f61c838f7e6",

    ELEVENLABS_URL: "https://api.elevenlabs.io/v1/text-to-speech/",

    // Voz Sarah
    ELEVENLABS_VOICE_ID: "EXAVITQu4vr4xnSDxMaL",

    ELEVENLABS_MODEL: "eleven_multilingual_v2",

    // Configuración de voz
    ELEVENLABS_VOICE_SETTINGS: {
        stability: 0.5,
        similarity_boost: 0.75,
        style: 0.3,
        use_speaker_boost: true
    },

    // ============ ASISTENTE ============
    ASISTENTE_NOMBRE: "Luci",

    ASISTENTE_ROL: "Asistente virtual de FinNex",

    ASISTENTE_AVATAR: "💜",

    ASISTENTE_SALUDO:
        "¡Hola! Soy Luci, tu asistente de FINNEX. ¿En qué te ayudo hoy?"

});

// Permite utilizar CONFIG desde otros archivos
// en proyectos que utilizan módulos CommonJS.
if (typeof module !== "undefined" && module.exports) {
    module.exports = CONFIG;
}
