
// // 确保在页面完全加载后执行
// window.addEventListener('load', function () {
//     console.log('页面加载完成，初始化AI');

//     const btn = document.getElementById('aiFloatBtn');
//     const win = document.getElementById('aiFloatWindow');
//     const closeBtn = document.getElementById('aiCloseBtn');
//     const minimizeBtn = document.getElementById('aiMinimizeBtn');
//     const modelBtns = document.querySelectorAll('.ai-model-btn');
//     const modelName = document.getElementById('aiModelName');
//     const chatArea = document.getElementById('aiFloatChats');
//     const input = document.getElementById('aiFloatInput');
//     const form = document.getElementById('aiFloatForm');
//     const clearBtn = document.getElementById('aiFloatClearBtn');
//     const themeBtn = document.getElementById('aiFloatThemeBtn');

//     if (!btn || !win) {
//         console.log('AI元素不存在');
//         return;
//     }

//     // 1. 按钮点击打开窗口
//     btn.onclick = function () {
//         win.style.display = 'flex';
//         btn.style.display = 'none';
//     };

//     // 2. 关闭按钮
//     if (closeBtn) {
//         closeBtn.onclick = function () {
//             win.style.display = 'none';
//             btn.style.display = 'flex';
//         };
//     }

//     // 3. 最小化按钮
//     if (minimizeBtn) {
//         minimizeBtn.onclick = function () {
//             win.classList.toggle('minimized');
//             minimizeBtn.textContent = win.classList.contains('minimized') ? '+' : '−';
//         };
//     }

//     // 4. 模型切换
//     if (modelBtns.length > 0 && modelName) {
//         modelBtns.forEach(btn => {
//             btn.onclick = function () {
//                 modelBtns.forEach(b => b.classList.remove('active'));
//                 this.classList.add('active');
//                 const model = this.textContent;
//                 modelName.textContent = model;

//                 // 更新欢迎消息
//                 if (chatArea) {
//                     chatArea.innerHTML = `
//                         <div class="ai-message ai-bot-message">
//                             <div class="ai-message-avatar"><i class='bx bx-chip'></i></div>
//                             <div class="ai-message-content">你好！我是${model}，可以帮你解答专升本问题</div>
//                         </div>
//                     `;
//                 }
//             };
//         });
//     }

//     // 5. 发送消息
//     if (form && input && chatArea) {
//         form.onsubmit = function (e) {
//             e.preventDefault();
//             const message = input.value.trim();
//             if (!message) return;

//             // 添加用户消息
//             const userDiv = document.createElement('div');
//             userDiv.className = 'ai-message ai-user-message';
//             userDiv.innerHTML = `
//                 <div class="ai-message-avatar"><i class='bx bx-user'></i></div>
//                 <div class="ai-message-content">${message}</div>
//             `;
//             chatArea.appendChild(userDiv);

//             // 清空输入
//             input.value = '';

//             // 添加机器人回复（模拟）
//             setTimeout(() => {
//                 const botDiv = document.createElement('div');
//                 botDiv.className = 'ai-message ai-bot-message';
//                 botDiv.innerHTML = `
//                     <div class="ai-message-avatar"><i class='bx bx-chip'></i></div>
//                     <div class="ai-message-content">已收到您的问题："${message}"，请配置API密钥后使用真实AI功能。</div>
//                 `;
//                 chatArea.appendChild(botDiv);
//                 chatArea.scrollTop = chatArea.scrollHeight;
//             }, 500);

//             chatArea.scrollTop = chatArea.scrollHeight;
//         };
//     }

//     // 6. 清空对话
//     if (clearBtn && chatArea && modelName) {
//         clearBtn.onclick = function () {
//             chatArea.innerHTML = `
//                 <div class="ai-message ai-bot-message">
//                     <div class="ai-message-avatar"><i class='bx bx-chip'></i></div>
//                     <div class="ai-message-content">你好！我是${modelName.textContent}，可以帮你解答专升本问题</div>
//                 </div>
//             `;
//         };
//     }



//     // 8. 拖拽功能
//     const header = document.getElementById('aiFloatHeader');
//     if (header && win) {
//         let isDragging = false;
//         let startX, startY, startLeft, startTop;

//         header.onmousedown = function (e) {
//             isDragging = true;
//             const rect = win.getBoundingClientRect();
//             startLeft = rect.left;
//             startTop = rect.top;
//             startX = e.clientX;
//             startY = e.clientY;

//             win.style.left = startLeft + 'px';
//             win.style.top = startTop + 'px';
//             win.style.right = 'auto';
//             win.style.bottom = 'auto';

//             document.onmousemove = function (e) {
//                 if (!isDragging) return;
//                 const dx = e.clientX - startX;
//                 const dy = e.clientY - startY;
//                 win.style.left = (startLeft + dx) + 'px';
//                 win.style.top = (startTop + dy) + 'px';
//             };

//             document.onmouseup = function () {
//                 isDragging = false;
//                 document.onmousemove = null;
//                 document.onmouseup = null;
//             };
//         };
//     }

//     console.log('AI手动绑定完成');
// });
