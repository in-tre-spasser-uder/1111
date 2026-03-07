// ========== API 配置 ==========
// 此文件包含AI助手的所有配置信息和功能代码

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

// ========== AI 助手配置（用于悬浮窗口）==========
const floatAIConfig = {
    'deepseek': {
        name: 'DeepSeek-V3',
        apiKey: API_CONFIG.gitcode.apiKey,
        apiUrl: API_CONFIG.gitcode.apiUrl,
        welcomeMsg: '你好！我是DeepSeek-V3，可以帮你解答专升本问题。点击上方按钮可以切换不同模型。',
        model: API_CONFIG.gitcode.models.deepseek.modelId,
        maxTokens: API_CONFIG.gitcode.models.deepseek.maxTokens,
        temperature: API_CONFIG.gitcode.models.deepseek.temperature,
        topP: API_CONFIG.gitcode.models.deepseek.topP,
        topK: API_CONFIG.gitcode.models.deepseek.topK,
        frequencyPenalty: API_CONFIG.gitcode.models.deepseek.frequencyPenalty,
        thinkingBudget: API_CONFIG.gitcode.models.deepseek.thinkingBudget
    },
    'chatglm': {
        name: 'GLM-5',
        apiKey: API_CONFIG.gitcode.apiKey,
        apiUrl: API_CONFIG.gitcode.apiUrl,
        welcomeMsg: '你好！我是GLM-5，很高兴为你提供学习帮助。有什么专升本的问题都可以问我。',
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
        welcomeMsg: '你好！我是Qwen3.5，让我们一起攻克专升本。政治、英语、高数、信息技术都可以问我。',
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
        welcomeMsg: '你好！我是基于GitCode API的AI助手，专为专升本备考设计。请问有什么可以帮你的？',
        model: API_CONFIG.gitcode.models.deepseek.modelId,
        maxTokens: API_CONFIG.gitcode.models.deepseek.maxTokens,
        temperature: API_CONFIG.gitcode.models.deepseek.temperature,
        topP: API_CONFIG.gitcode.models.deepseek.topP,
        topK: API_CONFIG.gitcode.models.deepseek.topK
    }
};

// ========== AI 助手功能代码 ==========
// 当config.js被加载时，自动执行AI助手初始化
(function () {
    console.log('config.js已加载，准备初始化AI助手功能');

    // 等待DOM加载完成
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAIFeatures);
    } else {
        // DOM已经加载完成，直接初始化
        setTimeout(initAIFeatures, 100);
    }

    // 强制显示AI按钮的函数
    function forceShowButton() {
        const btn = document.getElementById('aiFloatBtn');
        if (btn) {
            btn.style.display = 'flex';
            btn.style.opacity = '1';
            btn.style.visibility = 'visible';
            btn.style.zIndex = '999999';
            console.log('AI按钮已强制显示');
        }
    }

    // 主初始化函数
    function initAIFeatures() {
        console.log('初始化AI助手功能...');

        // 获取所有AI相关元素
        const aiFloatBtn = document.getElementById('aiFloatBtn');
        const aiFloatWindow = document.getElementById('aiFloatWindow');
        const aiFloatHeader = document.getElementById('aiFloatHeader');
        const aiMinimizeBtn = document.getElementById('aiMinimizeBtn');
        const aiCloseBtn = document.getElementById('aiCloseBtn');
        const aiFloatChats = document.getElementById('aiFloatChats');
        const aiFloatForm = document.getElementById('aiFloatForm');
        const aiFloatInput = document.getElementById('aiFloatInput');
        const aiFloatClearBtn = document.getElementById('aiFloatClearBtn');
        const aiFloatThemeBtn = document.getElementById('aiFloatThemeBtn');
        const aiModelName = document.getElementById('aiModelName');

        if (!aiFloatBtn) {
            console.error('AI按钮不存在，请检查HTML');
            return;
        }

        // AI状态
        let floatCurrentModel = 'deepseek';
        let floatChatHistory = [];
        let floatController = null;
        let floatIsMinimized = false;

        // 添加欢迎消息
        function addWelcomeMessage(model) {
            if (!aiFloatChats) return;

            const config = floatAIConfig[model] || floatAIConfig['deepseek'];

            let iconUrl = '';
            if (model === 'deepseek') {
                iconUrl = 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/deepseek.svg';
            } else if (model === 'chatglm') {
                iconUrl = 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/chatglm.svg';
            } else if (model === 'qwen') {
                iconUrl = 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/qwen.svg';
            } else if (model === 'ernie') {
                iconUrl = 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/baidu.svg';
            }

            aiFloatChats.innerHTML = `
                <div class="ai-message ai-bot-message">
                    <div class="ai-message-avatar">
                        <img src="${iconUrl}" width="20" height="20" alt="${model}" style="border-radius: 4px;">
                    </div>
                    <div class="ai-message-content">
                        ${config.welcomeMsg || '你好！我是AI助手，有什么可以帮你的？'}
                    </div>
                </div>
            `;
        }

        // 切换AI模型
        function switchFloatModel(model) {
            floatCurrentModel = model;
            floatChatHistory = [];

            document.querySelectorAll('.ai-model-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.model === model);
            });

            if (aiModelName) {
                aiModelName.textContent = floatAIConfig[model]?.name || 'AI助手';
            }

            addWelcomeMessage(model);
        }

        // 添加用户消息
        function addUserMessage(text) {
            if (!aiFloatChats) return;

            const messageDiv = document.createElement('div');
            messageDiv.className = 'ai-message ai-user-message';
            messageDiv.innerHTML = `
                <div class="ai-message-avatar">
                    <i class='bx bx-user'></i>
                </div>
                <div class="ai-message-content">${text}</div>
            `;
            aiFloatChats.appendChild(messageDiv);
            aiFloatChats.scrollTop = aiFloatChats.scrollHeight;
        }

        // 添加机器人消息（加载状态）
        function addBotLoadingMessage() {
            if (!aiFloatChats) return null;

            const model = floatCurrentModel;

            let iconUrl = '';
            if (model === 'deepseek') {
                iconUrl = 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/deepseek.svg';
            } else if (model === 'chatglm') {
                iconUrl = 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/chatglm.svg';
            } else if (model === 'qwen') {
                iconUrl = 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/qwen.svg';
            } else if (model === 'ernie') {
                iconUrl = 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/baidu.svg';
            }

            const messageDiv = document.createElement('div');
            messageDiv.className = 'ai-message ai-bot-message ai-loading';
            messageDiv.id = 'ai-loading-message';
            messageDiv.innerHTML = `
                <div class="ai-message-avatar">
                    <img src="${iconUrl}" width="20" height="20" alt="${model}" style="border-radius: 4px;">
                </div>
                <div class="ai-message-content">正在思考</div>
            `;
            aiFloatChats.appendChild(messageDiv);
            aiFloatChats.scrollTop = aiFloatChats.scrollHeight;
            return messageDiv;
        }

        // 更新机器人消息
        function updateBotMessage(text) {
            const loadingMsg = document.getElementById('ai-loading-message');
            if (loadingMsg) {
                loadingMsg.classList.remove('ai-loading');
                loadingMsg.querySelector('.ai-message-content').innerHTML = formatMessage(text);
            }
        }

        // 格式化消息
        function formatMessage(text) {
            return text.replace(/\n/g, '<br>').replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
        }

        // 发送消息
        async function sendFloatMessage() {
            const message = aiFloatInput.value.trim();
            if (!message) return;

            aiFloatInput.value = '';
            addUserMessage(message);
            addBotLoadingMessage();

            const config = floatAIConfig[floatCurrentModel];
            floatController = new AbortController();

            try {
                if (!config || !config.apiKey) {
                    setTimeout(() => {
                        updateBotMessage('API配置错误，请检查config.js文件中的配置。');
                    }, 500);
                    return;
                }

                const response = await fetch(config.apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${config.apiKey}`
                    },
                    body: JSON.stringify({
                        model: config.model,
                        messages: [
                            {
                                role: "system",
                                content: "你是一个专升本备考助手，专门帮助用户解答专升本考试相关问题，包括政治、英语、高等数学、信息技术概论等科目。请用中文友好地回答用户问题。"
                            },
                            {
                                role: "user",
                                content: message
                            }
                        ],
                        stream: false,
                        max_tokens: config.maxTokens || 4096,
                        temperature: config.temperature || 0.6
                    }),
                    signal: floatController.signal
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.error?.message || `请求失败 (${response.status})`);
                }

                let responseText = '';
                if (data.choices && data.choices.length > 0) {
                    responseText = data.choices[0].message?.content || '未获取到回复内容';
                } else {
                    responseText = 'API返回格式异常';
                }

                updateBotMessage(responseText);
                floatChatHistory.push(
                    { role: 'user', content: message },
                    { role: 'assistant', content: responseText }
                );

            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.error('请求错误:', error);
                    updateBotMessage('抱歉，请求失败：' + error.message);
                }
            }
        }

        // 清空对话
        function clearFloatChats() {
            floatChatHistory = [];
            if (aiFloatChats) {
                aiFloatChats.innerHTML = '';
                addWelcomeMessage(floatCurrentModel);
            }
        }

        // 切换主题
        function toggleFloatTheme() {
            document.body.classList.toggle('dark-theme');
            const isDark = document.body.classList.contains('dark-theme');
            if (aiFloatThemeBtn) {
                aiFloatThemeBtn.innerHTML = isDark ? '<i class="bx bx-sun"></i>' : '<i class="bx bx-moon"></i>';
            }
            localStorage.setItem('themeMode', isDark ? 'dark' : 'light');
        }

        // 初始化主题
        function initTheme() {
            const savedTheme = localStorage.getItem('themeMode');
            if (savedTheme === 'dark') {
                document.body.classList.add('dark-theme');
                if (aiFloatThemeBtn) aiFloatThemeBtn.innerHTML = '<i class="bx bx-sun"></i>';
            } else {
                document.body.classList.remove('dark-theme');
                if (aiFloatThemeBtn) aiFloatThemeBtn.innerHTML = '<i class="bx bx-moon"></i>';
            }
        }

        // 加载位置
        function loadFloatPosition() {
            if (!aiFloatWindow) return;

            const left = localStorage.getItem('aiFloatLeft');
            const top = localStorage.getItem('aiFloatTop');

            if (left && top) {
                aiFloatWindow.style.left = left + 'px';
                aiFloatWindow.style.top = top + 'px';
                aiFloatWindow.style.right = 'auto';
                aiFloatWindow.style.bottom = 'auto';
            }
        }

        // 保存位置
        function saveFloatPosition(left, top) {
            localStorage.setItem('aiFloatLeft', left);
            localStorage.setItem('aiFloatTop', top);
        }

        // 拖拽功能
        function makeDraggable(element, handle) {
            if (!element || !handle) return;

            let isDragging = false;
            let startX, startY, startLeft, startTop;

            handle.addEventListener('mousedown', startDrag);
            handle.addEventListener('touchstart', startDrag, { passive: false });

            function startDrag(e) {
                e.preventDefault();
                e.stopPropagation();

                isDragging = true;
                const rect = element.getBoundingClientRect();
                startLeft = rect.left;
                startTop = rect.top;

                if (e.type === 'mousedown') {
                    startX = e.clientX;
                    startY = e.clientY;
                    document.addEventListener('mousemove', onDrag);
                    document.addEventListener('mouseup', stopDrag);
                } else {
                    startX = e.touches[0].clientX;
                    startY = e.touches[0].clientY;
                    document.addEventListener('touchmove', onDrag, { passive: false });
                    document.addEventListener('touchend', stopDrag);
                    document.addEventListener('touchcancel', stopDrag);
                }

                element.classList.add('dragging');
                element.style.left = startLeft + 'px';
                element.style.top = startTop + 'px';
                element.style.right = 'auto';
                element.style.bottom = 'auto';
            }

            function onDrag(e) {
                if (!isDragging) return;
                e.preventDefault();
                e.stopPropagation();

                let clientX, clientY;
                if (e.type === 'mousemove') {
                    clientX = e.clientX;
                    clientY = e.clientY;
                } else {
                    clientX = e.touches[0].clientX;
                    clientY = e.touches[0].clientY;
                }

                const deltaX = clientX - startX;
                const deltaY = clientY - startY;

                let newLeft = startLeft + deltaX;
                let newTop = startTop + deltaY;

                const maxLeft = window.innerWidth - element.offsetWidth;
                const maxTop = window.innerHeight - element.offsetHeight;

                newLeft = Math.max(0, Math.min(newLeft, maxLeft));
                newTop = Math.max(0, Math.min(newTop, maxTop));

                element.style.left = newLeft + 'px';
                element.style.top = newTop + 'px';
            }

            function stopDrag() {
                if (!isDragging) return;
                isDragging = false;
                element.classList.remove('dragging');

                const left = parseFloat(element.style.left);
                const top = parseFloat(element.style.top);
                if (!isNaN(left) && !isNaN(top)) {
                    saveFloatPosition(left, top);
                }

                document.removeEventListener('mousemove', onDrag);
                document.removeEventListener('mouseup', stopDrag);
                document.removeEventListener('touchmove', onDrag);
                document.removeEventListener('touchend', stopDrag);
                document.removeEventListener('touchcancel', stopDrag);
            }
        }

        // 绑定所有事件
        function bindEvents() {
            // 点击按钮显示窗口
            aiFloatBtn.onclick = function (e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('AI按钮被点击');
                aiFloatWindow.style.display = 'flex';
                aiFloatBtn.style.display = 'none';
            };

            // 关闭按钮
            aiCloseBtn.onclick = function (e) {
                e.preventDefault();
                e.stopPropagation();
                aiFloatWindow.style.display = 'none';
                aiFloatBtn.style.display = 'flex';
            };

            // 最小化按钮
            aiMinimizeBtn.onclick = function (e) {
                e.preventDefault();
                e.stopPropagation();
                floatIsMinimized = !floatIsMinimized;
                aiFloatWindow.classList.toggle('minimized', floatIsMinimized);
                aiMinimizeBtn.textContent = floatIsMinimized ? '+' : '−';
            };

            // 表单提交
            aiFloatForm.onsubmit = function (e) {
                e.preventDefault();
                sendFloatMessage();
            };

            // 清空对话
            aiFloatClearBtn.onclick = function (e) {
                e.preventDefault();
                e.stopPropagation();
                clearFloatChats();
            };

            // 切换主题
            aiFloatThemeBtn.onclick = function (e) {
                e.preventDefault();
                e.stopPropagation();
                toggleFloatTheme();
            };

            // 模型切换
            document.querySelectorAll('.ai-model-btn').forEach(btn => {
                btn.onclick = function () {
                    switchFloatModel(this.dataset.model);
                };
            });

            // 启用拖拽
            makeDraggable(aiFloatWindow, aiFloatHeader);
        }

        // 初始化欢迎消息
        addWelcomeMessage(floatCurrentModel);

        // 加载位置
        loadFloatPosition();

        // 初始化主题
        initTheme();

        // 绑定事件
        bindEvents();

        // 强制显示按钮
        forceShowButton();
    }

    // 多次强制显示按钮，确保显示
    setTimeout(forceShowButton, 500);
    setTimeout(forceShowButton, 1000);
    setTimeout(forceShowButton, 2000);
})();

// 导出配置（如果需要）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { API_CONFIG, floatAIConfig };
}