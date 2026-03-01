// ========== API 配置 ==========
// 注意：此文件包含敏感信息，已被.gitignore忽略
// 请勿直接修改此文件中的API密钥，如需更换请使用新的密钥

const API_CONFIG = {
    // GitCode API 统一配置
    gitcode: {
        name: 'GitCode API',
        apiKey: 'QA_XYdSXwDM2Xy3EzkF8GjkQ',  // 您的GitCode API密钥
        apiUrl: 'https://api-ai.gitcode.com/v1/chat/completions',
        welcomeMsg: '你好！我是AI助手，可以帮你解答专升本问题',
        // 可用的模型列表
        models: {
            deepseek: {
                name: 'DeepSeek-V3',
                modelId: 'deepseek-ai/DeepSeek-V3',
                maxTokens: 4096,
                temperature: 0.6,
                topP: 0.95,
                topK: 50,
                frequencyPenalty: 0,
                thinkingBudget: 32768
            },
            qwen35: {
                name: 'Qwen3.5-397B',
                modelId: 'Qwen/Qwen3.5-397B-A17B',
                maxTokens: 2048,
                temperature: 0.6,
                topP: 0.95,
                topK: 50
            },
            glm5: {
                name: 'GLM-5',
                modelId: 'zai-org/GLM-5',
                maxTokens: 4096,
                temperature: 0.6,
                topP: 0.95,
                topK: 50
            },
            gotOcr: {
                name: 'GOT-OCR-2.0',
                modelId: 'StepFun/GOT-OCR-2.0-hf',
                maxTokens: 1024,
                temperature: 0.7,
                topP: 0.7,
                topK: 50
            }
        }
    }
};

// 为了兼容性，也保留原来的格式
const floatAIConfig = {
    'deepseek': {
        name: 'DeepSeek-V3',
        apiKey: API_CONFIG.gitcode.apiKey,
        apiUrl: API_CONFIG.gitcode.apiUrl,
        welcomeMsg: '你好！我是DeepSeek-V3，可以帮你解答专升本问题',
        model: API_CONFIG.gitcode.models.deepseek.modelId,
        maxTokens: API_CONFIG.gitcode.models.deepseek.maxTokens,
        temperature: API_CONFIG.gitcode.models.deepseek.temperature,
        topP: API_CONFIG.gitcode.models.deepseek.topP,
        topK: API_CONFIG.gitcode.models.deepseek.topK,
        frequencyPenalty: API_CONFIG.gitcode.models.deepseek.frequencyPenalty,
        thinkingBudget: API_CONFIG.gitcode.models.deepseek.thinkingBudget
    },
    'chatglm': {
        name: 'ChatGLM',
        apiKey: API_CONFIG.gitcode.apiKey,
        apiUrl: API_CONFIG.gitcode.apiUrl,
        welcomeMsg: '你好！我是GLM-5，很高兴为你提供学习帮助',
        model: API_CONFIG.gitcode.models.glm5.modelId,
        maxTokens: API_CONFIG.gitcode.models.glm5.maxTokens,
        temperature: API_CONFIG.gitcode.models.glm5.temperature,
        topP: API_CONFIG.gitcode.models.glm5.topP,
        topK: API_CONFIG.gitcode.models.glm5.topK
    },
    'qwen': {
        name: '通义千问',
        apiKey: API_CONFIG.gitcode.apiKey,
        apiUrl: API_CONFIG.gitcode.apiUrl,
        welcomeMsg: '你好！我是Qwen3.5，让我们一起攻克专升本',
        model: API_CONFIG.gitcode.models.qwen35.modelId,
        maxTokens: API_CONFIG.gitcode.models.qwen35.maxTokens,
        temperature: API_CONFIG.gitcode.models.qwen35.temperature,
        topP: API_CONFIG.gitcode.models.qwen35.topP,
        topK: API_CONFIG.gitcode.models.qwen35.topK
    },
    'ernie': {
        name: '文心一言',
        apiKey: API_CONFIG.gitcode.apiKey,
        apiUrl: API_CONFIG.gitcode.apiUrl,
        welcomeMsg: '你好！我是基于GitCode API的AI助手，专为专升本备考设计',
        model: API_CONFIG.gitcode.models.deepseek.modelId,  // 默认使用DeepSeek
        maxTokens: API_CONFIG.gitcode.models.deepseek.maxTokens,
        temperature: API_CONFIG.gitcode.models.deepseek.temperature,
        topP: API_CONFIG.gitcode.models.deepseek.topP,
        topK: API_CONFIG.gitcode.models.deepseek.topK
    }
};