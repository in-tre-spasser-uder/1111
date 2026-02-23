// ========== 文件数据配置 ==========
const fileData = {
    // 招生计划 -> 2026专升本计划
    'plan-2026': {
        name: '2026专升本计划',
        files: [
            {
                name: '2026专升本计划.pdf',
                imageUrl: './zhuanshengben/2026专升本计划.jpg'
            },
            {
                name: '2026专升本计划.jpg',
                imageUrl: './zhuanshengben/2026专升本计划.jpg'
            }
        ]
    },
    // 历年真题·政治
    'past-politics': {
        name: '历年真题·政治',
        files: [
            {
                name: '政治真题.pdf',
                imageUrl: './鱿鱼游戏.jpg'
            },
            {
                name: '鱿鱼游戏.jpg',
                imageUrl: './鱿鱼游戏.jpg'
            }
        ]
    },
    // 模拟试卷·英语
    'mock-english': {
        name: '模拟试卷·英语',
        files: [
            {
                name: '英语模拟卷.pdf',
                imageUrl: './鱿鱼游戏.jpg'
            },
            {
                name: '鱿鱼游戏.jpg',
                imageUrl: './鱿鱼游戏.jpg'
            }
        ]
    },
    // 考纲类
    'syllabus-2026-politics': {
        name: '政治考纲2026',
        files: [
            {
                name: '2026政治考纲.pdf',
                imageUrl: './鱿鱼游戏.jpg'
            }
        ]
    },
    'syllabus-2026-english': {
        name: '英语考纲2026',
        files: [
            {
                name: '2026英语考纲.pdf',
                imageUrl: './鱿鱼游戏.jpg'
            }
        ]
    },
    'syllabus-2026-math': {
        name: '高数考纲2026',
        files: [
            {
                name: '2026高数考纲.pdf',
                imageUrl: './鱿鱼游戏.jpg'
            }
        ]
    },
    'syllabus-2026-it': {
        name: '信息技术考纲2026',
        files: [
            {
                name: '2026信息技术考纲.pdf',
                imageUrl: './鱿鱼游戏.jpg'
            }
        ]
    },
    'process': {
        name: '报考流程',
        files: [
            {
                name: '报考流程.pdf',
                imageUrl: './鱿鱼游戏.jpg'
            }
        ]
    },
    'syllabus-other': {
        name: '其他年份考纲',
        files: [
            {
                name: '其他年份考纲.pdf',
                imageUrl: './鱿鱼游戏.jpg'
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

// 渲染图片到预览容器
function renderImagePreview(imageUrl, container) {
    container.innerHTML = '';
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = '预览图片';
    img.style.maxWidth = '100%';
    img.style.height = 'auto';
    img.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    img.style.borderRadius = '4px';

    img.onerror = function () {
        container.innerHTML = `<div class="no-preview" style="color:#ef4444; padding:40px;">❌ 图片加载失败: ${imageUrl}<br>请检查路径或网络。</div>`;
    };
    container.appendChild(img);
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
        html += `
            <div class="file-item">
                <div class="file-info">
                    <svg viewBox="0 0 24 24">
                        <path d="M14,2H6C4.9,2 4,2.9 4,4V20C4,21.1 4.9,22 6,22H18C19.1,22 20,21.1 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                    </svg>
                    <span class="file-name">${file.name}</span>
                </div>
                <button class="preview-btn" data-file='${fileAttr}'>预览</button>
            </div>
        `;
    });

    html += `</div>`;

    if (currentPreviewFile) {
        html += `
            <div class="preview-area">
                <div class="preview-header">
                    <h3>${currentPreviewFile.name} (图片预览)</h3>
                    <button class="close-preview" id="closePreviewBtn">&times;</button>
                </div>
                <div class="preview-content" id="image-preview-container"></div>
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
            <p>欢迎使用专升本学习资料管理系统 (纯图片预览版)。从左侧菜单选择具体项目查看文件，点击预览以图片展示。</p>
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
                    if (!file.imageUrl) {
                        file.imageUrl = './鱿鱼游戏.jpg';
                    }
                    currentPreviewFile = file;
                    updateContent(target, linkText);

                    setTimeout(() => {
                        const container = document.getElementById('image-preview-container');
                        if (container && currentPreviewFile) {
                            renderImagePreview(currentPreviewFile.imageUrl, container);
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