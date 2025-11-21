import { GoogleGenAI } from "@google/genai";

// Ensure API Key is present
const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

export const getLearningPathSuggestion = async (userGoal: string): Promise<string> => {
  if (!apiKey) {
    return "Erro: API Key não configurada. Por favor, configure a chave no ambiente.";
  }

  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      Você é um Consultor Sênior de Carreira em TI e Negócios chamado "Mentor INEMA".
      Você representa a plataforma INEMA.PRO, um centro de treinamento de elite focado em tecnologias corporativas (similar a centros oficiais Microsoft, Cisco, AWS, EXIN).
      O usuário tem o seguinte objetivo: "${userGoal}".
      
      Crie um roadmap de certificação e estudos (max 300 palavras).
      O tom deve ser: Corporativo, Estratégico, Focado em Empregabilidade e Certificações.
      
      Estruture a resposta em Markdown:
      1. **Diagnóstico Profissional**: Análise breve do objetivo.
      2. **Trilha de Certificações**: Recomende exames oficiais (ex: PL-300, AZ-900, ITIL 4, PSM I) se aplicável.
      3. **Habilidades Técnicas (Hard Skills)**: O que estudar (ex: DAX, PowerShell, Cloud Governance).
      
      Use emojis sóbrios (💼, 📊, 🖥️). Não invente URLs.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "Processando dados corporativos... tente novamente.";
  } catch (error) {
    console.error("Erro ao chamar Gemini:", error);
    return "Falha na conexão com o servidor de consultoria. Tente novamente.";
  }
};