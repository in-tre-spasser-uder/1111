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
    // 历年真题·政治
    'past-politics': {
        name: '历年真题·政治',
        files: [
            {
                name: '19-25政治真题.pdf',
                fileUrl: './zhuanshengben/专升本题背资料/真题/政治/19-25政治真题.pdf',  // 修改为正确的PDF路径
                type: 'pdf'
            },
            {
                name: '19-25政治真题答案.pdf',
                fileUrl: './zhuanshengben/专升本题背资料/真题/政治/19-25政治真题答案.pdf',  // 修改为正确的PNG路径
                type: 'pdf'
            }
        ]
    },
    // 模拟试卷·英语
    'mock-english': {
        name: '模拟试卷·英语',
        files: [
            {
                name: '英语模拟卷.pdf',
                fileUrl: './鱿鱼游戏.jpg',
                type: 'pdf'
            },
            {
                name: '鱿鱼游戏.jpg',
                fileUrl: './鱿鱼游戏.jpg',
                type: 'jpg'
            }
        ]
    },
    // 考纲类
    'syllabus-2026-politics': {
        name: '政治考纲2026',
        files: [
            {
                name: '2026政治考纲.pdf',
                fileUrl: './鱿鱼游戏.jpg',
                type: 'pdf'
            }
        ]
    },
    'syllabus-2026-english': {
        name: '英语考纲2026',
        files: [
            {
                name: '2026英语考纲.pdf',
                fileUrl: './鱿鱼游戏.jpg',
                type: 'pdf'
            }
        ]
    },
    'syllabus-2026-math': {
        name: '高数考纲2026',
        files: [
            {
                name: '2026高数考纲.pdf',
                fileUrl: './鱿鱼游戏.jpg',
                type: 'pdf'
            }
        ]
    },
    'syllabus-2026-it': {
        name: '信息技术考纲2026',
        files: [
            {
                name: '2026信息技术考纲.pdf',
                fileUrl: './鱿鱼游戏.jpg',
                type: 'pdf'
            }
        ]
    },
    'process': {
        name: '报考流程',
        files: [
            {
                name: '报考流程.pdf',
                fileUrl: './鱿鱼游戏.jpg',
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
    }
};

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
        // 根据文件类型显示不同图标
        const fileIcon = file.type === 'pdf' ?
            '<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 10h-8v-2h8v2zm0-4h-8V7h8v2z" />' :
            '<path d="M14,2H6C4.9,2 4,2.9 4,4V20C4,21.1 4.9,22 6,22H18C19.1,22 20,21.1 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />';

        html += `
            <div class="file-item">
                <div class="file-info">
                    <svg viewBox="0 0 24 24">
                        ${fileIcon}
                    </svg>
                    <span class="file-name">${file.name}</span>
                </div>
                <button class="preview-btn" data-file='${fileAttr}'>预览</button>
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

    // 重写 updateContent 以在原逻辑之后注入真题答案预览按钮
    window.updateContent = function (target, linkText) {
        // 先调用原函数
        originalUpdateContent(target, linkText);

        // 只在政治真题页面添加真题答案预览按钮
        if (target === 'past-politics') {
            // 稍等DOM更新
            setTimeout(() => {
                const fileItems = document.querySelectorAll('.file-item');

                // 获取政治真题的所有文件
                const politicsData = fileData['past-politics'];
                if (!politicsData || !politicsData.files || politicsData.files.length < 2) {
                    console.warn('政治真题需要至少两个文件（真题和答案）');
                    return;
                }

                // 假设第一个文件是真题，第二个文件是答案
                const questionFile = politicsData.files[0]; // 真题
                const answerFile = politicsData.files[1];   // 答案

                fileItems.forEach((item, index) => {
                    // 避免重复插入
                    if (item.querySelector('.answer-preview-btn')) return;

                    const previewBtn = item.querySelector('.preview-btn');
                    if (!previewBtn) return;

                    // 创建按钮容器
                    const btnWrapper = document.createElement('div');
                    btnWrapper.className = 'action-buttons';
                    previewBtn.parentNode.insertBefore(btnWrapper, previewBtn);
                    btnWrapper.appendChild(previewBtn); // 预览按钮移入

                    // 只在第一个文件（真题）旁边添加“真题答案预览”按钮
                    if (index === 0) {
                        const ansBtn = document.createElement('button');
                        ansBtn.className = 'answer-preview-btn';
                        ansBtn.innerText = '真题答案预览';

                        ansBtn.addEventListener('click', (e) => {
                            e.stopPropagation();
                            // 调用并排显示函数，传入真题和答案
                            showDualPreview(questionFile, answerFile);
                        });

                        btnWrapper.appendChild(ansBtn);
                    }
                });
            }, 30);
        }
    };

    // 全局并排预览函数 (真题和答案各占50%)
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

        // 左侧真题列
        const leftCol = document.createElement('div');
        leftCol.className = 'dual-col';
        leftCol.innerHTML = `
                    <div class="preview-header">📘 真题 · ${questionFile.name}</div>
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

        // 渲染真题
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
    const menuLinks = document.querySelectorAll('a[data-target]');
    menuLinks.forEach(link => {
        link.removeEventListener('click', handleOriginalClick); // 无法直接移除，采用克隆替换
    });

    // 简便方法: 重新获取所有链接并绑定新函数
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

    console.log('真题答案预览增强已启用 - 只在政治真题第一个文件显示按钮，左右分屏显示真题和答案');
})();
