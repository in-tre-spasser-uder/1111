// ========== 文件数据配置 ==========
const fileData = {
    // 招生计划 -> 2026专升本计划
    'plan-2026': {
        name: '2026专升本计划',
        files: [
            {
                name: '2026专升本计划.pdf',
                fileUrl: './zhuanshengben/2026专升本计划.pdf',
                type: 'pdf'
            },
            {
                name: '2026专升本计划.jpg',
                fileUrl: './zhuanshengben/2026专升本计划.jpg',
                type: 'jpg'
            }
        ]
    },

    // 在 fileData 中添加（示例：添加英语和高数一真题）
    'past-politics': {
        name: '历年真题·政治',
        files: [
            {
                name: '19-25政治真题.pdf',
                fileUrl: './zhuanshengben/专升本题背资料/真题/政治/19-25政治真题.pdf',
                type: 'pdf'
            },
            {
                name: '19-25政治真题答案.pdf',
                fileUrl: './zhuanshengben/专升本题背资料/真题/政治/19-25政治真题答案.pdf',
                type: 'pdf'
            }
        ]
    },
    // 复制添加英语真题
    'past-english': {
        name: '历年真题·英语',
        files: [
            {
                name: '09-25英语真题.pdf',
                fileUrl: './zhuanshengben/专升本题背资料/真题/英语/09-25英语真题.pdf',
                type: 'pdf'
            },
            {
                name: '09-25英语真题答案.pdf',
                fileUrl: './zhuanshengben/专升本题背资料/真题/英语/09-25英语真题答案.pdf',
                type: 'pdf'
            }
        ]
    },
    // 复制添加高数一真题
    'past-math': {
        name: '历年真题·高数一',
        files: [
            {
                name: '14-25高数一真题.pdf',
                fileUrl: './zhuanshengben/专升本题背资料/真题/高数一/14-25高数一真题.pdf',
                type: 'pdf'
            },
            {
                name: '14-25高数一真题答案.pdf',
                fileUrl: './zhuanshengben/专升本题背资料/真题/高数一/14-25高数一真题答案.pdf',
                type: 'pdf'
            }
        ]
    },
    // 模拟题配置（新添加的）
    'mock-politics-1': {
        name: '政治模拟卷一',
        files: [
            {
                name: '政治模拟卷1.pdf',
                fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷1.pdf',
                type: 'pdf'
            },
            {
                name: '政治模拟卷1答案.pdf',
                fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷1答案.pdf',
                type: 'pdf'
            }
        ]
    },
    'mock-english-1': {
        name: '英语模拟卷一',
        files: [
            {
                name: '英语模拟卷1.pdf',
                fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷1.pdf',
                type: 'pdf'
            },
            {
                name: '英语模拟卷1答案.pdf',
                fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷1答案.pdf',
                type: 'pdf'
            }
        ]
    },
    'mock-math-1': {
        name: '高数模拟卷一',
        files: [
            {
                name: '高数模拟卷1.pdf',
                fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷1.pdf',
                type: 'pdf'
            },
            {
                name: '高数模拟卷1答案.pdf',
                fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷1答案.pdf',
                type: 'pdf'
            }
        ]
    },
    'mock-it-1': {
        name: '信息技术模拟卷一',
        files: [
            {
                name: '信息技术模拟卷1.pdf',
                fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷1.pdf',
                type: 'pdf'
            },
            {
                name: '信息技术模拟卷1答案.pdf',
                fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷1答案.pdf',
                type: 'pdf'
            }
        ]
    },
    // 考纲类
    'syllabus-2026-politics': {
        name: '政治考纲2026',
        files: [
            {
                name: '2026政治考纲.pdf',
                fileUrl: './zhuanshengben/考纲/2026/2026政治考纲.pdf',
                type: 'pdf'
            }
        ]
    },
    'syllabus-2026-english': {
        name: '英语考纲2026',
        files: [
            {
                name: '2026英语考纲.pdf',
                fileUrl: './zhuanshengben/考纲/2026/2026英语考纲.pdf',
                type: 'pdf'
            }
        ]
    },
    'syllabus-2026-math': {
        name: '高数考纲2026',
        files: [
            {
                name: '2026高数考纲.pdf',
                fileUrl: './zhuanshengben/考纲/2026/2026高数一考纲.pdf',
                type: 'pdf'
            }
        ]
    },
    'syllabus-2026-it': {
        name: '信息技术考纲2026',
        files: [
            {
                name: '2026信息技术考纲.pdf',
                fileUrl: './zhuanshengben/考纲/2026/2026信息技术基础考纲.pdf',
                type: 'pdf'
            }
        ]
    },
    'process': {
        name: '报考流程（了解理工3）',
        files: [
            {
                name: '了解理工3.pdf',
                fileUrl: './zhuanshengben/报考流程（了解理工3）/了解理工3.pdf',
                type: 'pdf'
            }
        ]
    },
    'syllabus-other': {
        name: '其他年份考纲',
        files: [
            {
                name: '其他年份考纲.pdf',
                fileUrl: './鱿鱼游戏.jpg',
                type: 'pdf'
            }
        ]
    },
};

// ========== 用循环添加高数模拟卷2-19 ==========
for (let i = 2; i <= 19; i++) {
    fileData[`mock-math-${i}`] = {
        name: `高数模拟卷${i}`,
        files: [
            {
                name: `高数模拟卷${i}.pdf`,
                fileUrl: `./zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷${i}.pdf`,
                type: 'pdf'
            },
            {
                name: `高数模拟卷${i}答案.pdf`,
                fileUrl: `./zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷${i}答案.pdf`,
                type: 'pdf'
            }
        ]
    };
}

// ========== DOM 元素 ==========
const dynamicDiv = document.getElementById('dynamic-content');
const contentPath = document.getElementById('content-path');
const titleText = document.getElementById('title-text');
const breadcrumbCat = document.getElementById('current-category');
const menuLinks = document.querySelectorAll('a[data-target]');

// 标签切换
const navTabs = document.querySelectorAll("#nav-tabs > a");
navTabs.forEach(tab => {
    tab.addEventListener("click", e => {
        e.preventDefault();
        navTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
    });
});

// 侧边栏折叠
const sidebar = document.getElementById('sidebar');
sidebar.addEventListener('click', function (e) {
    const parentLink = e.target.closest('.parent-link');
    if (!parentLink) return;
    e.preventDefault();
    const li = parentLink.closest('li.has-children');
    if (!li) return;
    const submenu = li.querySelector(':scope > ul.submenu');
    if (!submenu) return;
    const icon = parentLink.querySelector('.menu-toggle-icon');
    if (!submenu.style.maxHeight || submenu.style.maxHeight === '0px') {
        submenu.style.maxHeight = '500px';
        if (icon) icon.classList.add('rotated');
    } else {
        submenu.style.maxHeight = '0px';
        if (icon) icon.classList.remove('rotated');
    }
});

function setActiveMenuItem(clickedLink) {
    document.querySelectorAll('.site-nav li.active').forEach(li => li.classList.remove('active'));
    const parentLi = clickedLink.closest('li');
    if (parentLi) parentLi.classList.add('active');
}

// 预览状态管理
let currentPreviewFile = null;
let currentTarget = 'home';
let currentLinkText = '首页';

// 渲染预览内容（支持图片和PDF）
function renderPreview(file, container) {
    container.innerHTML = '';

    // 判断文件类型
    if (file.type === 'pdf' || file.name.toLowerCase().endsWith('.pdf')) {
        // PDF使用iframe嵌入
        const iframe = document.createElement('iframe');
        iframe.src = file.fileUrl;
        iframe.style.width = '100%';
        iframe.style.height = '800px';
        iframe.style.border = 'none';
        iframe.style.borderRadius = '4px';

        iframe.onerror = function () {
            container.innerHTML = `<div class="no-preview" style="color:#ef4444; padding:40px;">❌ PDF加载失败: ${file.fileUrl}<br>请检查路径或网络。</div>`;
        };
        container.appendChild(iframe);
    } else {
        // 图片使用img显示
        const img = document.createElement('img');
        img.src = file.fileUrl;
        img.alt = '预览图片';
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
        img.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        img.style.borderRadius = '4px';

        img.onerror = function () {
            container.innerHTML = `<div class="no-preview" style="color:#ef4444; padding:40px;">❌ 图片加载失败: ${file.fileUrl}<br>请检查路径或网络。</div>`;
        };
        container.appendChild(img);
    }
}

// 生成文件列表HTML
function renderFileContent(target, title) {
    const data = fileData[target];
    if (!data) return null;

    let html = `
        <svg viewBox="0 0 24 24">
            <path d="M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M9,7H7V17H9V7M13,7H11V17H13V7M17,7H15V17H17V7Z" />
        </svg>
        <h2>${title}</h2>
        <div class="file-list">
    `;

    data.files.forEach(file => {
        const fileAttr = JSON.stringify(file).replace(/"/g, '&quot;');

        // 根据文件类型和名称判断图标
        let fileIcon = '';
        let fileBadge = '';

        if (file.type === 'pdf') {
            fileIcon = '<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 10h-8v-2h8v2zm0-4h-8V7h8v2z" />';
        } else {
            fileIcon = '<path d="M14,2H6C4.9,2 4,2.9 4,4V20C4,21.1 4.9,22 6,22H18C19.1,22 20,21.1 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />';
        }

        // 添加文件类型标识（题目/答案）
        if (file.name.includes('答案') || file.name.toLowerCase().includes('answer')) {
            fileBadge = '<span class="file-badge answer">答案</span>';
        } else {
            fileBadge = '<span class="file-badge question">题目</span>';
        }

        html += `
            <div class="file-item">
                <div class="file-info">
                    <svg viewBox="0 0 24 24">
                        ${fileIcon}
                    </svg>
                    <span class="file-name">${file.name}</span>
                    ${fileBadge}
                </div>
                <div class="action-buttons">
                    <button class="download-btn" data-file='${fileAttr}'>下载</button>
                    <button class="preview-btn" data-file='${fileAttr}'>预览</button>
                </div>
            </div>
        `;
    });

    html += `</div>`;

    if (currentPreviewFile) {
        const previewType = currentPreviewFile.type === 'pdf' ? 'PDF预览' : '图片预览';
        html += `
            <div class="preview-area">
                <div class="preview-header">
                    <h3>${currentPreviewFile.name} (${previewType})</h3>
                    <button class="close-preview" id="closePreviewBtn">&times;</button>
                </div>
                <div class="preview-content" id="preview-container"></div>
            </div>
        `;
    }
    return html;
}

// 更新右侧内容
function updateContent(target, linkText) {
    currentTarget = target;
    currentLinkText = linkText;

    let displayText = '';
    let iconPath = '';
    let title = '';

    // 首页
    if (target === 'home') {
        displayText = '首页总览';
        title = '首页 · 资料总览';
        iconPath = 'M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z';
        dynamicDiv.innerHTML = `
            <svg viewBox="0 0 24 24"><path d="${iconPath}" /></svg>
            <h2>${displayText}</h2>
            <p>欢迎使用专升本学习资料管理系统 (支持PDF和图片预览)。从左侧菜单选择具体项目查看文件，点击预览按钮查看内容。</p>
            <div class="path-hint">当前显示：首页</div>
        `;
        titleText.innerText = title;
        breadcrumbCat.innerText = '首页';
        contentPath.innerText = `当前显示：${displayText}`;
        const titleSvg = document.querySelector('#page-title svg path');
        if (titleSvg) titleSvg.setAttribute('d', iconPath);
        return;
    }

    // 有文件数据的菜单
    if (fileData[target]) {
        displayText = fileData[target].name || linkText;
        title = displayText;
        iconPath = 'M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M9,7H7V17H9V7M13,7H11V17H13V7M17,7H15V17H17V7Z';

        const content = renderFileContent(target, title);
        if (content) {
            dynamicDiv.innerHTML = content;
            titleText.innerText = title;
            breadcrumbCat.innerText = title.includes('·') ? title.split('·')[0] : title;
            contentPath.innerText = `当前显示：${displayText}`;
            const titleSvg = document.querySelector('#page-title svg path');
            if (titleSvg) titleSvg.setAttribute('d', iconPath);

            // 绑定预览按钮
            document.querySelectorAll('.preview-btn').forEach(btn => {
                btn.addEventListener('click', function (e) {
                    e.stopPropagation();
                    const file = JSON.parse(this.getAttribute('data-file'));
                    currentPreviewFile = file;
                    updateContent(target, linkText);

                    setTimeout(() => {
                        const container = document.getElementById('preview-container');
                        if (container && currentPreviewFile) {
                            renderPreview(currentPreviewFile, container);
                        }
                    }, 50);
                });
            });

            // 关闭预览按钮
            const closeBtn = document.getElementById('closePreviewBtn');
            if (closeBtn) {
                closeBtn.addEventListener('click', function () {
                    currentPreviewFile = null;
                    updateContent(target, linkText);
                });
            }
        }
    } else {
        // 没有文件数据的菜单占位
        displayText = linkText || '未知栏目';
        title = linkText || '资料';
        iconPath = 'M20 6H4V4H20V6M21 12V14H3V12H21M13 18H11V20H13V18Z';
        dynamicDiv.innerHTML = `
            <svg viewBox="0 0 24 24"><path d="${iconPath}" /></svg>
            <h2>${displayText}</h2>
            <p>这里是《${displayText}》的占位内容。实际文件尚未添加。</p>
            <div class="path-hint">当前路径：${title}</div>
        `;
        titleText.innerText = title;
        breadcrumbCat.innerText = title.includes('·') ? title.split('·')[0] : title;
        contentPath.innerText = `当前显示：${displayText}`;
        const titleSvg = document.querySelector('#page-title svg path');
        if (titleSvg) titleSvg.setAttribute('d', iconPath);
    }
    // 绑定预览按钮
    document.querySelectorAll('.preview-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            const file = JSON.parse(this.getAttribute('data-file'));
            currentPreviewFile = file;
            updateContent(target, linkText);

            setTimeout(() => {
                const container = document.getElementById('preview-container');
                if (container && currentPreviewFile) {
                    renderPreview(currentPreviewFile, container);
                }
            }, 50);
        });
    });

    // 新增：绑定下载按钮
    document.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            const file = JSON.parse(this.getAttribute('data-file'));
            downloadFile(file);
        });
    });
}

// 菜单点击绑定
menuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.getAttribute('data-target');
        const linkText = this.innerText.trim();
        currentPreviewFile = null;
        updateContent(target, linkText);
        setActiveMenuItem(this);
    });
});

// 初始化首页
updateContent('home', '首页');
document.querySelectorAll('.site-nav li.active').forEach(li => li.classList.remove('active'));
const homeLi = document.getElementById('menu-home');
if (homeLi) homeLi.classList.add('active');


(function () {
    // 确保原脚本已加载，且 fileData 存在
    if (typeof fileData === 'undefined') {
        console.warn('等待原脚本加载...');
        return;
    }

    // 保存原始 updateContent 引用
    const originalUpdateContent = window.updateContent;

    // 重写 updateContent 以在原逻辑之后注入答案预览按钮
    window.updateContent = function (target, linkText) {
        // 先调用原函数
        originalUpdateContent(target, linkText);

        // 为所有带答案的资料添加对照预览按钮（真题、模拟题等）
        setTimeout(() => {
            const fileItems = document.querySelectorAll('.file-item');

            // 获取当前资料的所有文件
            const currentData = fileData[target];
            if (!currentData || !currentData.files || currentData.files.length < 2) {
                return; // 少于两个文件的不处理
            }

            // 判断是否包含答案文件（文件名包含"答案"、"answer"等关键词）
            const hasAnswerFile = currentData.files.some(file =>
                file.name.includes('答案') ||
                file.name.toLowerCase().includes('answer')
            );

            if (!hasAnswerFile) return; // 没有答案文件的不处理

            // 找出题文件和答案文件
            const questionFile = currentData.files.find(file =>
                !file.name.includes('答案') && !file.name.toLowerCase().includes('answer')
            ) || currentData.files[0]; // 如果没有明显的题文件，取第一个作为题

            const answerFile = currentData.files.find(file =>
                file.name.includes('答案') || file.name.toLowerCase().includes('answer')
            ) || currentData.files[1]; // 如果没有明显的答案文件，取第二个作为答案

            fileItems.forEach((item, index) => {
                // 避免重复插入
                if (item.querySelector('.answer-preview-btn')) return;

                const previewBtn = item.querySelector('.preview-btn');
                if (!previewBtn) return;

                const fileName = item.querySelector('.file-name')?.innerText || '';

                // 创建按钮容器
                const btnWrapper = document.createElement('div');
                btnWrapper.className = 'action-buttons';
                previewBtn.parentNode.insertBefore(btnWrapper, previewBtn);
                btnWrapper.appendChild(previewBtn); // 预览按钮移入

                // 判断当前文件是题还是答案
                const isQuestionFile = !fileName.includes('答案') && !fileName.toLowerCase().includes('answer');
                const isAnswerFile = fileName.includes('答案') || fileName.toLowerCase().includes('answer');

                // 为题的旁边添加"答案对照预览"按钮
                if (isQuestionFile) {
                    const ansBtn = document.createElement('button');
                    ansBtn.className = 'answer-preview-btn';
                    ansBtn.innerText = '📖 答案对照';

                    ansBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        // 调用并排显示函数，传入题和答案
                        showDualPreview(questionFile, answerFile);
                    });

                    btnWrapper.appendChild(ansBtn);
                }

                // 为答案的文件，可以保持现有按钮不变（已经有下载和预览）
                // 或者也可以添加特殊标识，但根据你的需求，答案保持下载+预览即可
            });
        }, 30);
    };

    // 全局并排预览函数 (题和答案各占50%)
    window.showDualPreview = function (questionFile, answerFile) {
        const dynamicDiv = document.getElementById('dynamic-content');
        // 移除已存在的并排预览或普通预览区 (保持干净)
        const existingDual = dynamicDiv.querySelector('.dual-preview-wrap');
        if (existingDual) existingDual.remove();
        const existingArea = dynamicDiv.querySelector('.preview-area');
        if (existingArea) existingArea.remove(); // 清除单文件预览区，避免干扰

        // 构建并排容器
        const dualWrap = document.createElement('div');
        dualWrap.className = 'dual-preview-wrap';

        // 左侧题列
        const leftCol = document.createElement('div');
        leftCol.className = 'dual-col';
        leftCol.innerHTML = `
            <div class="preview-header">📘 题目 · ${questionFile.name}</div>
            <div class="preview-content-inner" id="dual-question-inner"></div>
        `;

        // 右侧答案列
        const rightCol = document.createElement('div');
        rightCol.className = 'dual-col';
        rightCol.innerHTML = `
            <div class="preview-header">📖 答案 · ${answerFile.name}</div>
            <div class="preview-content-inner" id="dual-answer-inner"></div>
        `;

        dualWrap.appendChild(leftCol);
        dualWrap.appendChild(rightCol);
        dynamicDiv.appendChild(dualWrap);

        // 添加关闭按钮区域
        const closeDiv = document.createElement('div');
        closeDiv.className = 'dual-close-area';
        closeDiv.innerHTML = `<button class="close-dual-btn" id="closeDualBtn">关闭对照</button>`;
        dynamicDiv.appendChild(closeDiv);

        // 渲染题
        const leftInner = document.getElementById('dual-question-inner');
        const rightInner = document.getElementById('dual-answer-inner');

        // 复用渲染逻辑
        function renderFileInContainer(file, container) {
            if (file.type === 'pdf' || file.name.toLowerCase().endsWith('.pdf')) {
                const iframe = document.createElement('iframe');
                iframe.src = file.fileUrl;
                iframe.style.width = '100%';
                iframe.style.height = '550px';
                iframe.style.border = 'none';
                iframe.onerror = () => {
                    container.innerHTML = `<div class="no-preview" style="color:#ef4444; padding:40px;">❌ PDF加载失败: ${file.fileUrl}</div>`;
                };
                container.appendChild(iframe);
            } else {
                const img = document.createElement('img');
                img.src = file.fileUrl;
                img.alt = '预览';
                img.style.maxWidth = '100%';
                img.onerror = () => {
                    container.innerHTML = `<div class="no-preview" style="color:#ef4444; padding:40px;">❌ 图片加载失败: ${file.fileUrl}</div>`;
                };
                container.appendChild(img);
            }
        }

        renderFileInContainer(questionFile, leftInner);
        renderFileInContainer(answerFile, rightInner);

        // 关闭按钮事件
        document.getElementById('closeDualBtn').addEventListener('click', function () {
            if (dualWrap) dualWrap.remove();
            closeDiv.remove();
        });
    };

    // 由于原菜单已经绑定了 updateContent，我们需要确保菜单使用新函数。
    // 重新绑定菜单点击 (保留原有 active 逻辑)
    document.querySelectorAll('a[data-target]').forEach(link => {
        // 移除所有已绑定事件（通过克隆）
        const newLink = link.cloneNode(true);
        link.parentNode.replaceChild(newLink, link);
    });

    // 重新绑定点击事件
    document.querySelectorAll('a[data-target]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = this.getAttribute('data-target');
            const linkText = this.innerText.trim();
            window.currentPreviewFile = null; // 重置原预览
            window.updateContent(target, linkText);

            // 设置active类
            document.querySelectorAll('.site-nav li.active').forEach(li => li.classList.remove('active'));
            const parentLi = this.closest('li');
            if (parentLi) parentLi.classList.add('active');
        });
    });

    console.log('✅ 答案对照预览功能已启用 - 所有带答案的资料都会显示"答案对照"按钮');
})();

// 下载文件函数
function downloadFile(file) {
    // 创建一个隐藏的a标签
    const link = document.createElement('a');
    link.href = file.fileUrl;
    link.download = file.name; // 下载的文件名

    // 添加到body，点击，然后移除
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // 可选：显示提示
    console.log(`开始下载: ${file.name}`);
}
