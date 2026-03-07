// ========== DOM 元素 ==========
const dynamicDiv = document.getElementById('dynamic-content');
const contentPath = document.getElementById('content-path');
const titleText = document.getElementById('title-text');
const breadcrumbCat = document.getElementById('current-category');

// 标签切换
const navTabs = document.querySelectorAll("#nav-tabs > a");
navTabs.forEach(tab => {
    tab.addEventListener("click", e => {
        e.preventDefault();
        navTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
    });
});

// 侧边栏折叠/展开
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
if (sidebarBtn) {
    sidebarBtn.addEventListener("click", () => {
        sidebar.classList.toggle("close");
    });
}

// ===== 侧边栏多级菜单功能 =====
(function () {
    // 获取元素
    const sidebar = document.querySelector(".sidebar");
    const navLinks = document.getElementById('nav-links');

    // ===== 1. 关闭所有子菜单 =====
    function closeAllSubMenus() {
        const menuItems = document.querySelectorAll('.sidebar .nav-links li');
        menuItems.forEach(item => {
            if (item.classList.contains('expanded')) {
                item.classList.remove('expanded');
            }
            const arrow = item.querySelector('.arrow');
            if (arrow && arrow.classList.contains('rotated')) {
                arrow.classList.remove('rotated');
            }
        });
    }

    // ===== 2. 点击箭头展开/收起子菜单 =====
    function setupArrowClick() {
        const arrows = document.querySelectorAll('.sidebar .nav-links .arrow');
        arrows.forEach(arrow => {
            arrow.removeEventListener('click', handleArrowClick);
            arrow.addEventListener('click', handleArrowClick);
        });
    }

    function handleArrowClick(e) {
        e.preventDefault();
        e.stopPropagation();

        if (sidebar.classList.contains('close')) {
            return;
        }

        const arrow = e.currentTarget;
        const iocnLink = arrow.closest('.iocn-link');
        if (!iocnLink) return;

        const parentLi = iocnLink.closest('li');
        if (!parentLi) return;

        parentLi.classList.toggle('expanded');
        arrow.classList.toggle('rotated');
    }

    // ===== 3. 监听折叠状态 =====
    if (sidebarBtn) {
        sidebarBtn.addEventListener('click', function () {
            if (sidebar.classList.contains('close')) {
                closeAllSubMenus();
            }
        });
    }

    // ===== 4. 初始化 =====
    function initSidebar() {
        setupArrowClick();

        // 监听DOM变化
        const observer = new MutationObserver(function () {
            setupArrowClick();
        });

        if (navLinks) {
            observer.observe(navLinks, { childList: true, subtree: true });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSidebar);
    } else {
        initSidebar();
    }
})();

function setActiveMenuItem(clickedLink) {
    document.querySelectorAll('.sidebar li.active').forEach(li => li.classList.remove('active'));
    const parentLi = clickedLink.closest('li');
    if (parentLi) parentLi.classList.add('active');
}

// 预览状态管理
let currentPreviewFile = null;
let currentTarget = 'home';
let currentLinkText = '首页';

// 渲染预览内容
function renderPreview(file, container) {
    container.innerHTML = '';

    if (file.type === 'pdf' || file.name.toLowerCase().endsWith('.pdf')) {
        const iframe = document.createElement('iframe');
        iframe.src = file.fileUrl;
        iframe.style.width = '100%';
        iframe.style.height = '1000px';
        iframe.style.border = 'none';
        iframe.style.borderRadius = '4px';

        iframe.onerror = function () {
            container.innerHTML = `<div class="no-preview" style="color:#ef4444; padding:40px;">❌ PDF加载失败: ${file.fileUrl}<br>请检查路径或网络。</div>`;
        };
        container.appendChild(iframe);
    } else {
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

// 双栏对照预览函数
function showDualPreview(file1, file2, target, linkText) {
    currentPreviewFile = null;
    const content = renderFileContent(target, fileData[target].name);

    const dualHtml = `
        <div class="dual-preview-wrap" id="dualPreviewWrap">
            <div class="dual-col">
                <div class="preview-header">${file1.name}</div>
                <div class="preview-content-inner" id="dual-preview-left"></div>
            </div>
            <div class="dual-col">
                <div class="preview-header">${file2.name}</div>
                <div class="preview-content-inner" id="dual-preview-right"></div>
            </div>
        </div>
        <div class="dual-close-area">
            <button class="close-dual-btn" id="closeDualPreviewBtn">关闭对照</button>
        </div>
    `;

    dynamicDiv.innerHTML = content + dualHtml;
    rebindAllButtons(target, linkText);

    setTimeout(() => {
        const leftContainer = document.getElementById('dual-preview-left');
        const rightContainer = document.getElementById('dual-preview-right');

        if (leftContainer && rightContainer) {
            const iframe1 = document.createElement('iframe');
            iframe1.src = file1.fileUrl;
            iframe1.style.width = '100%';
            iframe1.style.height = '550px';
            iframe1.style.border = 'none';
            leftContainer.innerHTML = '';
            leftContainer.appendChild(iframe1);

            const iframe2 = document.createElement('iframe');
            iframe2.src = file2.fileUrl;
            iframe2.style.width = '100%';
            iframe2.style.height = '550px';
            iframe2.style.border = 'none';
            rightContainer.innerHTML = '';
            rightContainer.appendChild(iframe2);
        }
    }, 50);

    document.getElementById('closeDualPreviewBtn').addEventListener('click', function () {
        const dualWrap = document.getElementById('dualPreviewWrap');
        const closeArea = document.querySelector('.dual-close-area');
        if (dualWrap) dualWrap.remove();
        if (closeArea) closeArea.remove();
        rebindAllButtons(target, linkText);
    });
}

// 生成文件列表HTML
function renderFileContent(target, title) {
    const data = fileData[target];
    if (!data) return null;

    let html = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M4 20h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2z" />
            <path d="M4 8h16" stroke-dasharray="2 2" />
        </svg>
        <h2>${title}</h2>
        <div class="file-list">
    `;

    data.files.forEach(file => {
        const fileAttr = JSON.stringify(file).replace(/"/g, '&quot;');

        let fileIcon = file.type === 'pdf' ?
            '<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 10h-8v-2h8v2zm0-4h-8V7h8v2z" />' :
            '<path d="M14,2H6C4.9,2 4,2.9 4,4V20C4,21.1 4.9,22 6,22H18C19.1,22 20,21.1 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />';

        let fileBadge = file.name.includes('答案') || file.name.toLowerCase().includes('answer') ?
            '<span class="file-badge answer">答案</span>' :
            '<span class="file-badge question">题目</span>';

        const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'bmp', 'svg'];
        const baseFileName = file.name.replace('.pdf', '');
        const baseFilePath = file.fileUrl.replace('.pdf', '');

        const imgFiles = imageExtensions.map(ext => ({
            name: baseFileName + '（图片预览）',
            fileUrl: baseFilePath + '.' + ext,
            type: ext
        }));

        const imgFilesAttr = JSON.stringify(imgFiles).replace(/"/g, '&quot;');

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
            <button class="preview-img-btn" data-img-files='${imgFilesAttr}' data-base-path='${baseFilePath}'>预览图片形式</button>
            <button class="download-btn" data-file='${fileAttr}'>下载</button>
            <button class="preview-btn" data-file='${fileAttr}'>预览</button>
            ${(file.name.includes('模拟卷') || file.name.includes('真题')) && !file.name.includes('答案') ?
                `<button class="dual-preview-btn" data-file='${fileAttr}' data-base-name='${file.name.replace('.pdf', '')}'>题答对照</button>` :
                ''}
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

    if (fileData[target]) {
        displayText = fileData[target].name || linkText;
        title = displayText;
        iconPath = 'M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z';

        const content = renderFileContent(target, title);
        if (content) {
            dynamicDiv.innerHTML = content;
            titleText.innerText = title;
            breadcrumbCat.innerText = title.includes('·') ? title.split('·')[0] : title;
            contentPath.innerText = `当前显示：${displayText}`;
            const titleSvg = document.querySelector('#page-title svg path');
            if (titleSvg) titleSvg.setAttribute('d', iconPath);

            rebindAllButtons(target, linkText);
        }
    } else {
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
function bindMenuLinks() {
    const menuLinks = document.querySelectorAll('a[data-target]');
    menuLinks.forEach(link => {
        const newLink = link.cloneNode(true);
        link.parentNode.replaceChild(newLink, link);

        newLink.addEventListener('click', function (e) {
            e.preventDefault();
            const target = this.getAttribute('data-target');
            const linkText = this.innerText.trim();
            currentPreviewFile = null;
            updateContent(target, linkText);
            setActiveMenuItem(this);
        });
    });
}

// 下载文件函数
function downloadFile(file) {
    const link = document.createElement('a');
    link.href = file.fileUrl;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log(`开始下载: ${file.name}`);
}

// ========== 搜索功能 ==========
const searchInput = document.getElementById('search-input');

function performSearch() {
    const keyword = searchInput.value.trim().toLowerCase();
    if (!keyword) {
        updateContent(currentTarget, currentLinkText);
        return;
    }

    const results = [];

    for (const [target, data] of Object.entries(fileData)) {
        if (target === 'home') continue;

        if (data.name.toLowerCase().includes(keyword)) {
            results.push({
                type: 'category',
                name: data.name,
                target: target,
                files: data.files
            });
        }

        data.files.forEach(file => {
            if (file.name.toLowerCase().includes(keyword)) {
                results.push({
                    type: 'file',
                    name: file.name,
                    target: target,
                    category: data.name,
                    file: file
                });
            }
        });
    }

    displaySearchResults(results, keyword);
}

function displaySearchResults(results, keyword) {
    if (results.length === 0) {
        dynamicDiv.innerHTML = `
            <svg viewBox="0 0 24 24">
                <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
            </svg>
            <h2>未找到相关结果</h2>
            <p>没有找到包含 "${keyword}" 的资料</p>
            <button class="back-btn" onclick="updateContent('${currentTarget}', '${currentLinkText}')">返回</button>
        `;
        return;
    }

    const categories = {};

    results.forEach(result => {
        if (result.type === 'category') {
            if (!categories[result.name]) {
                categories[result.name] = { categoryName: result.name, files: [], fileSet: new Set() };
            }
            result.files.forEach(file => {
                const fileKey = file.name + file.fileUrl;
                if (!categories[result.name].fileSet.has(fileKey)) {
                    categories[result.name].fileSet.add(fileKey);
                    categories[result.name].files.push(file);
                }
            });
        } else {
            if (!categories[result.category]) {
                categories[result.category] = { categoryName: result.category, files: [], fileSet: new Set() };
            }
            const fileKey = result.file.name + result.file.fileUrl;
            if (!categories[result.category].fileSet.has(fileKey)) {
                categories[result.category].fileSet.add(fileKey);
                categories[result.category].files.push(result.file);
            }
        }
    });

    let html = `
        <svg viewBox="0 0 24 24">
            <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
        </svg>
        <h2>搜索结果: "${keyword}"</h2>
        <div class="search-results-list">
    `;

    for (const [catName, catData] of Object.entries(categories)) {
        if (catData.files && catData.files.length > 0) {
            html += `
                <div class="search-category">
                    <h3 class="search-category-title">${catName}</h3>
                    <div class="search-category-files">
            `;

            catData.files.forEach(file => {
                const fileAttr = JSON.stringify(file).replace(/"/g, '&quot;');

                let fileIcon = file.type === 'pdf' ?
                    '<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 10h-8v-2h8v2zm0-4h-8V7h8v2z" />' :
                    '<path d="M14,2H6C4.9,2 4,2.9 4,4V20C4,21.1 4.9,22 6,22H18C19.1,22 20,21.1 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />';

                let fileBadge = file.name.includes('答案') || file.name.toLowerCase().includes('answer') ?
                    '<span class="file-badge answer">答案</span>' :
                    '<span class="file-badge question">题目</span>';

                html += `
                    <div class="search-result-item">
                        <div class="search-result-info">
                            <svg viewBox="0 0 24 24" style="width:20px; height:20px; fill:#4096ff;">
                                ${fileIcon}
                            </svg>
                            <span class="search-result-name">${file.name}</span>
                            ${fileBadge}
                        </div>
                        <div class="search-result-actions">
                            <button class="preview-btn" data-file='${fileAttr}'>预览</button>
                            <button class="download-btn" data-file='${fileAttr}'>下载</button>
                        </div>
                    </div>
                `;
            });

            html += `</div></div>`;
        }
    }

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

    dynamicDiv.innerHTML = html;

    document.querySelectorAll('.preview-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            const file = JSON.parse(this.getAttribute('data-file'));
            currentPreviewFile = file;
            displaySearchResults(results, keyword);

            setTimeout(() => {
                const container = document.getElementById('preview-container');
                if (container && currentPreviewFile) {
                    renderPreview(currentPreviewFile, container);
                }
            }, 50);
        });
    });

    document.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            const file = JSON.parse(this.getAttribute('data-file'));
            downloadFile(file);
        });
    });

    const closeBtn = document.getElementById('closePreviewBtn');
    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            currentPreviewFile = null;
            displaySearchResults(results, keyword);
        });
    }
}

// 搜索输入事件
if (searchInput) {
    const searchBox = document.querySelector('.search-box');
    if (searchBox && !document.querySelector('.search-clear-btn')) {
        const clearBtn = document.createElement('button');
        clearBtn.className = 'search-clear-btn';
        clearBtn.innerHTML = '×';
        clearBtn.style.display = 'none';
        clearBtn.addEventListener('click', function () {
            searchInput.value = '';
            this.style.display = 'none';
            updateContent(currentTarget, currentLinkText);
        });
        searchBox.appendChild(clearBtn);
    }

    searchInput.addEventListener('input', function () {
        const clearBtn = document.querySelector('.search-clear-btn');
        if (clearBtn) {
            clearBtn.style.display = this.value.length > 0 ? 'block' : 'none';
        }
        if (this.value.length >= 1) {
            performSearch();
        } else {
            updateContent(currentTarget, currentLinkText);
        }
    });

    searchInput.addEventListener('keyup', function (e) {
        if (e.key === 'Escape') {
            this.value = '';
            const clearBtn = document.querySelector('.search-clear-btn');
            if (clearBtn) clearBtn.style.display = 'none';
            updateContent(currentTarget, currentLinkText);
        }
    });
}

// 添加搜索样式
function addSearchStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .search-results-list {
            width: 100%;
            max-height: 600px;
            overflow-y: auto;
            margin-top: 20px;
            text-align: left;
        }
        .search-category {
            margin-bottom: 25px;
            background: var(--hover-bg);
            border-radius: 12px;
            padding: 16px;
            border: 1px solid var(--border-color);
        }
        .search-category-title {
            font-size: 16px;
            color: var(--text-primary);
            margin: 0 0 15px 0;
            padding-bottom: 8px;
            border-bottom: 2px solid #4096ff;
            font-weight: 600;
        }
        .search-category-files {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .search-result-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 15px;
            background: var(--bg-secondary);
            border-radius: 8px;
            border: 1px solid var(--border-color);
            transition: all 0.2s ease;
        }
        .search-result-item:hover {
            border-color: #4096ff;
            box-shadow: 0 2px 8px rgba(64, 150, 255, 0.1);
        }
        .search-result-info {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 1;
        }
        .search-result-name {
            font-size: 14px;
            color: var(--text-primary);
            font-weight: 500;
        }
        .search-result-actions {
            display: flex;
            gap: 8px;
        }
        .search-clear-btn {
            position: absolute;
            right: 35px;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            font-size: 24px;
            color: var(--text-secondary);
            cursor: pointer;
            padding: 0 5px;
            z-index: 10;
            line-height: 1;
        }
        .search-clear-btn:hover {
            color: #ef4444;
        }
        .search-highlight {
            background-color: #fff3cd;
            padding: 2px 4px;
            border-radius: 4px;
            font-weight: 600;
        }
        body.dark-theme .search-highlight {
            background-color: #5b4a1e;
            color: #ffd966;
        }
    `;
    document.head.appendChild(style);
}

// ========== 统计卡片功能 ==========
function updateStatsCards() {
    const stats = {
        politics: { total: 0, mock: 0, past: 0, kaibei: 0 },
        english: { total: 0, mock: 0, past: 0, kaibei: 0 },
        math: { total: 0, mock: 0, past: 0, kaibei: 0 },
        it: { total: 0, mock: 0, past: 0, kaibei: 0 }
    };

    Object.entries(fileData).forEach(([key, data]) => {
        if (key === 'home') return;
        const filesCount = data.files ? data.files.length : 0;

        if (key.includes('politics') || key.includes('政治')) {
            stats.politics.total += filesCount;
            if (key.includes('mock')) stats.politics.mock += filesCount;
            else if (key.includes('past')) stats.politics.past += filesCount;
            else if (key.includes('kaibei')) stats.politics.kaibei += filesCount;
        }
        else if (key.includes('english') || key.includes('英语')) {
            stats.english.total += filesCount;
            if (key.includes('mock')) stats.english.mock += filesCount;
            else if (key.includes('past')) stats.english.past += filesCount;
            else if (key.includes('kaibei')) stats.english.kaibei += filesCount;
        }
        else if (key.includes('math') || key.includes('高数')) {
            stats.math.total += filesCount;
            if (key.includes('mock')) stats.math.mock += filesCount;
            else if (key.includes('past')) stats.math.past += filesCount;
            else if (key.includes('kaibei')) stats.math.kaibei += filesCount;
        }
        else if (key.includes('it') || key.includes('信息技术')) {
            stats.it.total += filesCount;
            if (key.includes('mock')) stats.it.mock += filesCount;
            else if (key.includes('past')) stats.it.past += filesCount;
            else if (key.includes('kaibei')) stats.it.kaibei += filesCount;
        }
    });

    updateStatCard('politics', stats.politics);
    updateStatCard('english', stats.english);
    updateStatCard('math', stats.math);
    updateStatCard('it', stats.it);
}

function updateStatCard(subject, data) {
    const card = document.querySelector(`.stat-card.${subject}`);
    if (!card) return;

    const valueEl = card.querySelector('.value');
    const descEl = card.querySelector('.desc');

    if (valueEl) {
        valueEl.textContent = `${data.total}个文件`;
    }
    if (descEl) {
        descEl.textContent = `模拟:${data.mock} 真题:${data.past} 开背:${data.kaibei}`;
    }
}

// 统一的按钮绑定函数
function rebindAllButtons(target, linkText) {
    // 预览按钮
    document.querySelectorAll('.preview-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            e.preventDefault();

            const dualWrap = document.getElementById('dualPreviewWrap');
            const closeArea = document.querySelector('.dual-close-area');
            if (dualWrap) dualWrap.remove();
            if (closeArea) closeArea.remove();

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

    // 预览图片形式按钮
    document.querySelectorAll('.preview-img-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            e.preventDefault();

            const dualWrap = document.getElementById('dualPreviewWrap');
            const closeArea = document.querySelector('.dual-close-area');
            if (dualWrap) dualWrap.remove();
            if (closeArea) closeArea.remove();

            const imgFiles = JSON.parse(this.getAttribute('data-img-files'));
            const basePath = this.getAttribute('data-base-path');

            function tryLoadImage(files, index) {
                if (index >= files.length) {
                    const container = document.getElementById('preview-container');
                    if (container) {
                        container.innerHTML = `<div class="no-preview" style="color:#ef4444; padding:40px;">❌ 未找到对应的图片文件<br>请确保存在以下格式之一的图片：jpg、png、gif等</div>`;
                    }
                    return;
                }

                const file = files[index];
                currentPreviewFile = file;
                updateContent(target, linkText);

                setTimeout(() => {
                    const container = document.getElementById('preview-container');
                    if (container && currentPreviewFile) {
                        const img = document.createElement('img');
                        img.src = currentPreviewFile.fileUrl;
                        img.alt = '预览图片';
                        img.style.maxWidth = '100%';
                        img.style.height = 'auto';
                        img.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                        img.style.borderRadius = '4px';

                        img.onload = function () {
                            container.innerHTML = '';
                            container.appendChild(img);
                        };

                        img.onerror = function () {
                            tryLoadImage(files, index + 1);
                        };

                        container.innerHTML = '<div style="padding:20px;">正在尝试加载图片...</div>';
                        container.appendChild(img);
                    }
                }, 50);
            }

            tryLoadImage(imgFiles, 0);
        });
    });

    // 下载按钮
    document.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            const file = JSON.parse(this.getAttribute('data-file'));
            downloadFile(file);
        });
    });

    // 题答对照按钮
    document.querySelectorAll('.dual-preview-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            e.preventDefault();

            currentPreviewFile = null;

            const file = JSON.parse(this.getAttribute('data-file'));
            const baseName = this.getAttribute('data-base-name');

            const answerFileName = baseName + '答案.pdf';
            const answerFileUrl = file.fileUrl.replace('.pdf', '答案.pdf');

            const answerFile = {
                name: answerFileName,
                fileUrl: answerFileUrl,
                type: 'pdf'
            };

            showDualPreview(file, answerFile, target, linkText);
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

// ========== 初始化 ==========
function init() {
    console.log('初始化静态版本...');

    addSearchStyles();
    bindMenuLinks();
    updateContent('home', '首页');
    updateStatsCards();

    document.querySelectorAll('.sidebar li.active').forEach(li => li.classList.remove('active'));
    const homeLi = document.getElementById('menu-home');
    if (homeLi) homeLi.classList.add('active');

    console.log('初始化完成，fileData包含', Object.keys(fileData).length, '个条目');
}

// 启动初始化
init();