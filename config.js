
// =====================================================
// FINNEX - CONFIGURACIÓN CENTRAL
// LUCI AI - GROQ + ELEVENLABS + SUPABASE
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
    ELEVENLABS_API_KEY: "sk_78da1fb7bc247f4509c4405b5f2c7c0b83ca1e517ffb96cd",
    ELEVENLABS_URL: "https://api.elevenlabs.io/v1/text-to-speech/",
    ELEVENLABS_VOICE_ID: "EXAVITQu4vr4xnSDxMaL",
    ELEVENLABS_MODEL: "eleven_multilingual_v2",

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

// =====================================================
// SISTEMA DE ERRORES VISIBLES
// =====================================================

function mostrarError(mensaje) {

    let panel = document.getElementById("error-config");

    if (!panel) {
        panel = document.createElement("div");
        panel.id = "error-config";

        Object.assign(panel.style, {
            position: "fixed",
            bottom: "20px",
            left: "20px",
            right: "20px",
            zIndex: "999999",
            background: "#35151d",
            color: "#ffffff",
            border: "1px solid #ff4d67",
            borderRadius: "12px",
            padding: "16px",
            fontFamily: "Arial, sans-serif",
            fontSize: "14px",
            boxShadow: "0 5px 25px rgba(0,0,0,0.4)"
        });

        document.body.appendChild(panel);
    }

    panel.textContent = "⚠️ ERROR FINNEX: " + mensaje;
    panel.style.display = "block";
}

function ocultarError() {
    const panel = document.getElementById("error-config");

    if (panel) {
        panel.style.display = "none";
    }
}

// =====================================================
// VALIDAR CONFIGURACIÓN
// =====================================================

function validarConfiguracion() {

    const errores = [];

    if (!CONFIG.SUPABASE_URL) {
        errores.push("Falta la URL de Supabase.");
    }

    if (!CONFIG.GROQ_API_KEY ||
        CONFIG.GROQ_API_KEY.startsWith("TU_")) {
        errores.push("La API KEY de Groq no está configurada.");
    }

    if (!CONFIG.ELEVENLABS_API_KEY ||
        CONFIG.ELEVENLABS_API_KEY.startsWith("TU_")) {
        errores.push("La API KEY de ElevenLabs no está configurada.");
    }

    if (!CONFIG.ELEVENLABS_VOICE_ID) {
        errores.push("Falta el ID de voz de ElevenLabs.");
    }

    if (errores.length > 0) {
        mostrarError(errores.join(" | "));
        return false;
    }

    ocultarError();
    return true;
}

// =====================================================
// MANEJAR ERRORES DE API
// =====================================================

function mostrarErrorAPI(servicio, status, detalle) {

    let mensaje = "";

    if (status === 401 || status === 403) {
        mensaje = `Clave API inválida o sin permisos en ${servicio}.`;
    } else if (status === 429) {
        mensaje = `Has alcanzado el límite de solicitudes de ${servicio}.`;
    } else if (status >= 500) {
        mensaje = `${servicio} presenta problemas en sus servidores.`;
    } else {
        mensaje = `Error ${status} en ${servicio}: ${detalle}`;
    }

    mostrarError(mensaje);
}

// =====================================================
// EXPORTAR CONFIGURACIÓN
// =====================================================

if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        ...CONFIG,
        mostrarError,
        ocultarError,
        validarConfiguracion,
        mostrarErrorAPI
    };
}
