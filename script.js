// ========== 文件数据配置 ==========
const fileData = {
    // 招生计划 -> 2026专升本计划
    'plan-2026': {
        name: '2026专升本计划',
        files: [
            {
                name: '2026专升本计划.pdf',
                fileUrl: './zhuanshengben/2026专升本计划.pdf',
                type: 'pdf',
                previewImgUrl: './zhuanshengben/2026专升本计划.jpg'  // 添加预览图片路径
            }
        ]
    },

    // 真题
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
    'past-it-intro': {
        name: '历年真题·信息技术概论',
        files: [
            {
                name: '信息技术概论真题.pdf',
                fileUrl: './zhuanshengben/专升本题背资料/真题/信息技术概论/信息技术概论真题.pdf',
                type: 'pdf'
            },
            {
                name: '信息技术概论真题答案.pdf',
                fileUrl: './zhuanshengben/专升本题背资料/真题/信息技术概论/信息技术概论真题答案.pdf',
                type: 'pdf'
            }
        ]
    },
    // 模拟题
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
    // 专业课程标准
    'course-english': {
        name: '英语课程标准',
        files: [
            {
                name: '高等职业教育专科英语课程标准（2021版）.pdf',
                fileUrl: './zhuanshengben/教学、课程标准/专业课程标准/高等职业教育专科英语课程标准（2021版）.pdf',
                type: 'pdf'
            }
        ]
    },
    'course-math': {
        name: '数学课程标准',
        files: [
            {
                name: '高等职业教育专科 《高等数学》课程标准 （2021年).pdf',
                fileUrl: './zhuanshengben/教学、课程标准/专业课程标准/高等职业教育专科 《高等数学》课程标准 （2021年).pdf',
                type: 'pdf'
            }
        ]
    },
    'course-it': {
        name: '信息技术概论课程标准',
        files: [
            {
                name: '高等职业教育专科信息技术课程标准（2021版）.pdf',
                fileUrl: './zhuanshengben/教学、课程标准/专业课程标准/高等职业教育专科信息技术课程标准（2021版）.pdf',
                type: 'pdf'
            }
        ]
    },

    // 专业教学标准
    'major-bigdata': {
        name: '大数据技术专业标准',
        files: [
            {
                name: '大数据技术专业职业教育专业教学标准-2025年修（制）订.pdf',
                fileUrl: './zhuanshengben/教学、课程标准/专业教学标准/大数据技术专业职业教育专业教学标准-2025年修（制）订.pdf',
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

// 为政治模拟卷2-19添加数据
for (let i = 2; i <= 19; i++) {
    fileData[`mock-politics-${i}`] = {
        name: `政治模拟卷${i}`,
        files: [
            {
                name: `政治模拟卷${i}.pdf`,
                fileUrl: `./zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷${i}.pdf`,
                type: 'pdf'
            },
            {
                name: `政治模拟卷${i}答案.pdf`,
                fileUrl: `./zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷${i}答案.pdf`,
                type: 'pdf'
            }
        ]
    };
}

// 为英语模拟卷2-19添加数据
for (let i = 2; i <= 19; i++) {
    fileData[`mock-english-${i}`] = {
        name: `英语模拟卷${i}`,
        files: [
            {
                name: `英语模拟卷${i}.pdf`,
                fileUrl: `./zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷${i}.pdf`,
                type: 'pdf'
            },
            {
                name: `英语模拟卷${i}答案.pdf`,
                fileUrl: `./zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷${i}答案.pdf`,
                type: 'pdf'
            }
        ]
    };
}

// 为信息技术模拟卷2-19添加数据
for (let i = 2; i <= 19; i++) {
    fileData[`mock-it-${i}`] = {
        name: `信息技术模拟卷${i}`,
        files: [
            {
                name: `信息技术模拟卷${i}.pdf`,
                fileUrl: `./zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷${i}.pdf`,
                type: 'pdf'
            },
            {
                name: `信息技术模拟卷${i}答案.pdf`,
                fileUrl: `./zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷${i}答案.pdf`,
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

// ===== 侧边栏折叠功能 =====
let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("showMenu");
    });
}

// ===== 点击固定展开/收缩功能 =====
function setupClickToFix() {
    const menuItems = document.querySelectorAll('.sidebar .nav-links > li');

    menuItems.forEach(item => {
        const links = item.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function (e) {
                e.stopPropagation();

                const parentLi = this.closest('li');
                if (!parentLi) return;

                const subMenu = parentLi.querySelector(':scope > .sub-menu');
                if (subMenu) {
                    parentLi.classList.toggle('fixed-open');
                    if (parentLi.classList.contains('fixed-open')) {
                        parentLi.classList.remove('showMenu');
                    }
                }

                const thirdLevelParent = this.closest('.has-third-level');
                if (thirdLevelParent) {
                    thirdLevelParent.classList.toggle('fixed-open');
                }
            });
        });
    });

    document.querySelectorAll('.has-third-level > .iocn-link').forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            const parent = this.closest('.has-third-level');
            if (parent) {
                parent.classList.toggle('fixed-open');
                if (parent.classList.contains('fixed-open')) {
                    parent.classList.remove('showMenu');
                }
            }
        });
    });
}

// 在CSS中添加fixed-open类的样式
function addFixedStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .sidebar .nav-links li.fixed-open > .sub-menu {
            display: block !important;
        }
        
        .sidebar .nav-links li .sub-menu li.fixed-open > .sub-menu {
            display: block !important;
        }
        
        .sidebar .nav-links li.fixed-open > .iocn-link .arrow,
        .sidebar .nav-links li .sub-menu li.fixed-open > .iocn-link .arrow {
            transform: rotate(-180deg);
        }
        
        .sidebar .nav-links li:hover > .sub-menu {
            display: block;
        }
        
        .sidebar .nav-links li.fixed-open:hover > .sub-menu {
            display: block !important;
        }
    `;
    document.head.appendChild(style);
}

// 侧边栏折叠/展开
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

function setActiveMenuItem(clickedLink) {
    document.querySelectorAll('.sidebar li.active').forEach(li => li.classList.remove('active'));
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

    if (file.type === 'pdf' || file.name.toLowerCase().endsWith('.pdf')) {
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

        // 生成按钮HTML - 如果有previewImgUrl，则预览图片形式按钮使用该路径
        let previewImgBtnHtml = '';
        if (file.previewImgUrl) {
            const imgFile = {
                name: file.name.replace('.pdf', '') + '（图片预览）',
                fileUrl: file.previewImgUrl,
                type: 'jpg'
            };
            previewImgBtnHtml = `<button class="preview-img-btn" data-file='${JSON.stringify(imgFile).replace(/"/g, '&quot;')}'>预览图片形式</button>`;
        } else {
            previewImgBtnHtml = `<button class="preview-img-btn" data-file='${fileAttr}'>预览图片形式</button>`;
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
                    ${previewImgBtnHtml}
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

            // 绑定预览图片形式按钮
            document.querySelectorAll('.preview-img-btn').forEach(btn => {
                btn.addEventListener('click', function (e) {
                    e.stopPropagation();
                    const file = JSON.parse(this.getAttribute('data-file'));
                    currentPreviewFile = file;
                    updateContent(target, linkText);

                    setTimeout(() => {
                        const container = document.getElementById('preview-container');
                        if (container && currentPreviewFile) {
                            // 强制作为图片预览
                            const img = document.createElement('img');
                            img.src = currentPreviewFile.fileUrl;
                            img.alt = '预览图片';
                            img.style.maxWidth = '100%';
                            img.style.height = 'auto';
                            img.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                            img.style.borderRadius = '4px';

                            img.onerror = function () {
                                container.innerHTML = `<div class="no-preview" style="color:#ef4444; padding:40px;">❌ 图片加载失败: ${currentPreviewFile.fileUrl}<br>请检查路径或网络。</div>`;
                            };
                            container.innerHTML = '';
                            container.appendChild(img);
                        }
                    }, 50);
                });
            });

            // 绑定下载按钮
            document.querySelectorAll('.download-btn').forEach(btn => {
                btn.addEventListener('click', function (e) {
                    e.stopPropagation();
                    const file = JSON.parse(this.getAttribute('data-file'));
                    downloadFile(file);
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

// 初始化
function init() {
    addFixedStyles();
    setupClickToFix();
    updateContent('home', '首页');
    document.querySelectorAll('.sidebar li.active').forEach(li => li.classList.remove('active'));
    const homeLi = document.getElementById('menu-home');
    if (homeLi) homeLi.classList.add('active');
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

// 答案对照预览功能
(function () {
    const originalUpdateContent = window.updateContent;

    window.updateContent = function (target, linkText) {
        originalUpdateContent(target, linkText);

        setTimeout(() => {
            const fileItems = document.querySelectorAll('.file-item');
            const currentData = fileData[target];
            if (!currentData || !currentData.files || currentData.files.length < 2) {
                return;
            }

            const hasAnswerFile = currentData.files.some(file =>
                file.name.includes('答案') ||
                file.name.toLowerCase().includes('answer')
            );

            if (!hasAnswerFile) return;

            const questionFile = currentData.files.find(file =>
                !file.name.includes('答案') && !file.name.toLowerCase().includes('answer')
            ) || currentData.files[0];

            const answerFile = currentData.files.find(file =>
                file.name.includes('答案') || file.name.toLowerCase().includes('answer')
            ) || currentData.files[1];

            fileItems.forEach((item) => {
                if (item.querySelector('.answer-preview-btn')) return;

                const previewBtn = item.querySelector('.preview-btn');
                if (!previewBtn) return;

                const fileName = item.querySelector('.file-name')?.innerText || '';

                const btnWrapper = document.createElement('div');
                btnWrapper.className = 'action-buttons';
                previewBtn.parentNode.insertBefore(btnWrapper, previewBtn);
                btnWrapper.appendChild(previewBtn);

                const isQuestionFile = !fileName.includes('答案') && !fileName.toLowerCase().includes('answer');

                if (isQuestionFile) {
                    const ansBtn = document.createElement('button');
                    ansBtn.className = 'answer-preview-btn';
                    ansBtn.innerText = '📖 答案对照';

                    ansBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        showDualPreview(questionFile, answerFile);
                    });

                    btnWrapper.appendChild(ansBtn);
                }
            });
        }, 30);
    };

    window.showDualPreview = function (questionFile, answerFile) {
        const dynamicDiv = document.getElementById('dynamic-content');
        const existingDual = dynamicDiv.querySelector('.dual-preview-wrap');
        if (existingDual) existingDual.remove();
        const existingArea = dynamicDiv.querySelector('.preview-area');
        if (existingArea) existingArea.remove();

        const dualWrap = document.createElement('div');
        dualWrap.className = 'dual-preview-wrap';

        const leftCol = document.createElement('div');
        leftCol.className = 'dual-col';
        leftCol.innerHTML = `
            <div class="preview-header">📘 题目 · ${questionFile.name}</div>
            <div class="preview-content-inner" id="dual-question-inner"></div>
        `;

        const rightCol = document.createElement('div');
        rightCol.className = 'dual-col';
        rightCol.innerHTML = `
            <div class="preview-header">📖 答案 · ${answerFile.name}</div>
            <div class="preview-content-inner" id="dual-answer-inner"></div>
        `;

        dualWrap.appendChild(leftCol);
        dualWrap.appendChild(rightCol);
        dynamicDiv.appendChild(dualWrap);

        const closeDiv = document.createElement('div');
        closeDiv.className = 'dual-close-area';
        closeDiv.innerHTML = `<button class="close-dual-btn" id="closeDualBtn">关闭对照</button>`;
        dynamicDiv.appendChild(closeDiv);

        const leftInner = document.getElementById('dual-question-inner');
        const rightInner = document.getElementById('dual-answer-inner');

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

        document.getElementById('closeDualBtn').addEventListener('click', function () {
            if (dualWrap) dualWrap.remove();
            closeDiv.remove();
        });
    };

    document.querySelectorAll('a[data-target]').forEach(link => {
        const newLink = link.cloneNode(true);
        link.parentNode.replaceChild(newLink, link);
    });

    document.querySelectorAll('a[data-target]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = this.getAttribute('data-target');
            const linkText = this.innerText.trim();
            window.currentPreviewFile = null;
            window.updateContent(target, linkText);

            document.querySelectorAll('.sidebar li.active').forEach(li => li.classList.remove('active'));
            const parentLi = this.closest('li');
            if (parentLi) parentLi.classList.add('active');
        });
    });

    console.log('✅ 答案对照预览功能已启用');
})();

// 启动初始化
init();

// ========== 搜索功能实现 ==========
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const dynamicContent = document.getElementById('dynamic-content');

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    function performSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();

        if (searchTerm === '') {
            dynamicContent.innerHTML = `
                <svg viewBox="0 0 24 24">
                    <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                </svg>
                <h2>搜索资料</h2>
                <p>请输入关键词搜索相关资料</p>
                <div class="path-hint">当前显示：搜索框已就绪</div>
            `;
            return;
        }

        const searchResults = [];

        Object.keys(fileData).forEach(key => {
            const item = fileData[key];
            const nameMatch = item.name.toLowerCase().includes(searchTerm);

            item.files.forEach(file => {
                const fileNameMatch = file.name.toLowerCase().includes(searchTerm);
                const filePathMatch = file.fileUrl.toLowerCase().includes(searchTerm);

                if (fileNameMatch || filePathMatch || nameMatch) {
                    searchResults.push({
                        category: item.name,
                        fileName: file.name,
                        fileUrl: file.fileUrl,
                        fileType: file.type,
                        targetKey: key
                    });
                }
            });
        });

        const uniqueResults = [];
        const seen = new Set();
        searchResults.forEach(result => {
            const key = `${result.fileName}-${result.fileUrl}`;
            if (!seen.has(key)) {
                seen.add(key);
                uniqueResults.push(result);
            }
        });

        displaySearchResults(uniqueResults, searchTerm);
    }

    function displaySearchResults(results, searchTerm) {
        const dynamicContent = document.getElementById('dynamic-content');

        if (results.length === 0) {
            dynamicContent.innerHTML = `
                <svg viewBox="0 0 24 24">
                    <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                </svg>
                <h2>未找到匹配结果</h2>
                <p>没有找到包含 "<strong>${searchTerm}</strong>" 的资料</p>
                <div class="path-hint">建议：检查关键词或尝试其他搜索词</div>
            `;
            return;
        }

        let html = `
            <svg viewBox="0 0 24 24">
                <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
            </svg>
            <h2>搜索结果 (共 ${results.length} 个)</h2>
            <p>关键词：<strong>${searchTerm}</strong></p>
            <div class="search-results-list">
        `;

        const groupedResults = {};
        results.forEach(result => {
            if (!groupedResults[result.category]) {
                groupedResults[result.category] = [];
            }
            groupedResults[result.category].push(result);
        });

        Object.keys(groupedResults).forEach(category => {
            html += `
                <div class="search-category">
                    <h3 class="search-category-title">📁 ${category}</h3>
                    <div class="search-category-files">
            `;

            groupedResults[category].forEach(result => {
                const fileAttr = JSON.stringify({
                    name: result.fileName,
                    fileUrl: result.fileUrl,
                    type: result.fileType
                }).replace(/"/g, '&quot;');

                const fileIcon = result.fileType === 'pdf' ?
                    '<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 10h-8v-2h8v2zm0-4h-8V7h8v2z" />' :
                    '<path d="M14,2H6C4.9,2 4,2.9 4,4V20C4,21.1 4.9,22 6,22H18C19.1,22 20,21.1 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />';

                html += `
                    <div class="search-result-item">
                        <div class="search-result-info">
                            <svg viewBox="0 0 24 24" style="width:20px; height:20px; fill:#4a5568;">
                                ${fileIcon}
                            </svg>
                            <span class="search-result-name">${result.fileName}</span>
                        </div>
                        <div class="search-result-actions">
                            <button class="preview-img-btn search-preview-img" data-file='${fileAttr}'>预览图片形式</button>
                            <button class="download-btn search-download" data-file='${fileAttr}'>下载</button>
                            <button class="preview-btn search-preview" data-file='${fileAttr}'>预览</button>
                        </div>
                    </div>
                `;
            });

            html += `
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

        dynamicContent.innerHTML = html;
        bindSearchResultButtons();

        const closeBtn = document.getElementById('closePreviewBtn');
        if (closeBtn) {
            closeBtn.addEventListener('click', function () {
                currentPreviewFile = null;
                performSearch();
            });
        }
    }

    function bindSearchResultButtons() {
        // 预览图片形式按钮
        document.querySelectorAll('.search-preview-img, .preview-img-btn').forEach(btn => {
            if (btn.hasAttribute('data-file')) {
                btn.addEventListener('click', function (e) {
                    e.stopPropagation();
                    const file = JSON.parse(this.getAttribute('data-file'));
                    currentPreviewFile = file;
                    performSearch();

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

                            img.onerror = function () {
                                container.innerHTML = `<div class="no-preview" style="color:#ef4444; padding:40px;">❌ 图片加载失败: ${currentPreviewFile.fileUrl}<br>请检查路径或网络。</div>`;
                            };
                            container.innerHTML = '';
                            container.appendChild(img);
                        }
                    }, 50);
                });
            }
        });

        // 下载按钮
        document.querySelectorAll('.search-download, .download-btn').forEach(btn => {
            if (btn.hasAttribute('data-file')) {
                btn.addEventListener('click', function (e) {
                    e.stopPropagation();
                    const file = JSON.parse(this.getAttribute('data-file'));
                    downloadFile(file);
                });
            }
        });

        // 预览按钮
        document.querySelectorAll('.search-preview, .preview-btn').forEach(btn => {
            if (btn.hasAttribute('data-file')) {
                btn.addEventListener('click', function (e) {
                    e.stopPropagation();
                    const file = JSON.parse(this.getAttribute('data-file'));
                    currentPreviewFile = file;
                    performSearch();

                    setTimeout(() => {
                        const container = document.getElementById('preview-container');
                        if (container && currentPreviewFile) {
                            renderPreview(currentPreviewFile, container);
                        }
                    }, 50);
                });
            }
        });
    }

    const debouncedSearch = debounce(performSearch, 300);
    searchInput.addEventListener('input', debouncedSearch);

    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch();
        }
    });

    const searchBox = document.querySelector('.search-box');
    const clearButton = document.createElement('button');
    clearButton.innerHTML = '&times;';
    clearButton.className = 'search-clear-btn';
    clearButton.style.cssText = `
        position: absolute;
        right: 35px;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        font-size: 20px;
        color: #999;
        cursor: pointer;
        display: none;
        padding: 0 5px;
    `;
    clearButton.addEventListener('click', function () {
        searchInput.value = '';
        searchInput.focus();
        performSearch();
        this.style.display = 'none';
    });

    searchBox.style.position = 'relative';
    searchBox.appendChild(clearButton);

    searchInput.addEventListener('input', function () {
        clearButton.style.display = this.value ? 'block' : 'none';
    });

    const originalUpdateContent = window.updateContent;

    window.updateContent = function (target, linkText) {
        if (searchInput) {
            searchInput.value = '';
            clearButton.style.display = 'none';
        }
        originalUpdateContent(target, linkText);
    };

    console.log('✅ 搜索功能已启用');
});

// ========== 统计卡片功能实现 ==========
function updateStatsCards() {
    const stats = {
        politics: 0,
        english: 0,
        math: 0,
        it: 0
    };

    Object.keys(fileData).forEach(key => {
        const item = fileData[key];
        const itemName = item.name.toLowerCase();
        const itemKey = key.toLowerCase();

        if (itemName.includes('政治') || itemKey.includes('politics')) {
            stats.politics += item.files.length;
        }
        if (itemName.includes('英语') || itemKey.includes('english')) {
            stats.english += item.files.length;
        }
        if (itemName.includes('高数') || itemKey.includes('math')) {
            stats.math += item.files.length;
        }
        if (itemName.includes('信息技术') || itemName.includes('it') ||
            itemKey.includes('it') || itemName.includes('信息')) {
            stats.it += item.files.length;
        }
    });

    updateStatsCardDisplay(stats);
}

function updateStatsCardDisplay(stats) {
    const statCards = document.querySelectorAll('.stat-card');

    statCards.forEach(card => {
        const title = card.querySelector('h3').innerText;
        const valueElement = card.querySelector('.value');
        const descElement = card.querySelector('.desc');

        if (title.includes('政治')) {
            valueElement.textContent = stats.politics;
            descElement.textContent = `包含 ${stats.politics} 个文件`;
        } else if (title.includes('英语')) {
            valueElement.textContent = stats.english;
            descElement.textContent = `包含 ${stats.english} 个文件`;
        } else if (title.includes('高数')) {
            valueElement.textContent = stats.math;
            descElement.textContent = `包含 ${stats.math} 个文件`;
        } else if (title.includes('信息技术')) {
            valueElement.textContent = stats.it;
            descElement.textContent = `包含 ${stats.it} 个文件`;
        }
    });
}

function getDetailedStats() {
    const detailedStats = {
        politics: { 真题: 0, 模拟题: 0, 考纲: 0, 其他: 0 },
        english: { 真题: 0, 模拟题: 0, 考纲: 0, 其他: 0 },
        math: { 真题: 0, 模拟题: 0, 考纲: 0, 其他: 0 },
        it: { 真题: 0, 模拟题: 0, 考纲: 0, 其他: 0 }
    };

    Object.keys(fileData).forEach(key => {
        const item = fileData[key];
        const itemName = item.name.toLowerCase();
        const itemKey = key.toLowerCase();
        const fileCount = item.files.length;

        let type = '其他';
        if (itemName.includes('真题') || itemKey.includes('past')) {
            type = '真题';
        } else if (itemName.includes('模拟') || itemKey.includes('mock')) {
            type = '模拟题';
        } else if (itemName.includes('考纲') || itemKey.includes('syllabus')) {
            type = '考纲';
        }

        if (itemName.includes('政治') || itemKey.includes('politics')) {
            detailedStats.politics[type] += fileCount;
        } else if (itemName.includes('英语') || itemKey.includes('english')) {
            detailedStats.english[type] += fileCount;
        } else if (itemName.includes('高数') || itemKey.includes('math')) {
            detailedStats.math[type] += fileCount;
        } else if (itemName.includes('信息技术') || itemName.includes('it') ||
            itemKey.includes('it') || itemName.includes('信息')) {
            detailedStats.it[type] += fileCount;
        }
    });

    return detailedStats;
}

function showDetailedStats(card, type) {
    const detailedStats = getDetailedStats();
    const stats = detailedStats[type];

    let tooltipContent = '';
    if (stats) {
        tooltipContent = `
            <div style="padding: 8px;">
                <strong>详细统计：</strong><br>
                真题：${stats.真题} 个<br>
                模拟题：${stats.模拟题} 个<br>
                考纲：${stats.考纲} 个<br>
                其他：${stats.其他} 个
            </div>
        `;
    }

    let tooltip = card.querySelector('.stat-tooltip');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.className = 'stat-tooltip';
        card.appendChild(tooltip);
    }
    tooltip.innerHTML = tooltipContent;
    tooltip.style.display = 'block';
}

function initStatsCards() {
    const style = document.createElement('style');
    style.textContent = `
        .stat-card {
            position: relative;
            transition: all 0.3s ease;
            cursor: help;
        }
        
        .stat-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        
        .stat-card .value {
            font-size: 32px;
            font-weight: bold;
            color: #2c3e50;
            transition: all 0.3s ease;
        }
        
        .stat-card:hover .value {
            color: #3498db;
        }
        
        .stat-card .desc {
            font-size: 12px;
            color: #7f8c8d;
            margin-top: 5px;
        }
        
        .stat-tooltip {
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0,0,0,0.8);
            color: white;
            padding: 5px 0;
            border-radius: 4px;
            font-size: 12px;
            white-space: nowrap;
            z-index: 1000;
            margin-top: 5px;
            display: none;
        }
        
        .stat-tooltip::before {
            content: '';
            position: absolute;
            top: -5px;
            left: 50%;
            transform: translateX(-50%);
            border-width: 0 5px 5px 5px;
            border-style: solid;
            border-color: transparent transparent rgba(0,0,0,0.8) transparent;
        }
        
        .stat-card.politics {
            border-left: 4px solid #e74c3c;
        }
        
        .stat-card.english {
            border-left: 4px solid #3498db;
        }
        
        .stat-card.math {
            border-left: 4px solid #2ecc71;
        }
        
        .stat-card.it {
            border-left: 4px solid #f39c12;
        }
        
        .value-update {
            animation: countUp 0.5s ease-out;
        }
        
        @keyframes countUp {
            0% {
                transform: scale(1);
                color: #3498db;
            }
            50% {
                transform: scale(1.2);
                color: #e74c3c;
            }
            100% {
                transform: scale(1);
                color: #2c3e50;
            }
        }
        
        @media (max-width: 768px) {
            .stats-cards {
                grid-template-columns: repeat(2, 1fr) !important;
                gap: 10px;
            }
            
            .stat-card .value {
                font-size: 24px;
            }
        }
    `;
    document.head.appendChild(style);

    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        const title = card.querySelector('h3').innerText;
        let type = '';

        if (title.includes('政治')) type = 'politics';
        else if (title.includes('英语')) type = 'english';
        else if (title.includes('高数')) type = 'math';
        else if (title.includes('信息技术')) type = 'it';

        card.addEventListener('mouseenter', function () {
            showDetailedStats(this, type);
        });

        card.addEventListener('mouseleave', function () {
            const tooltip = this.querySelector('.stat-tooltip');
            if (tooltip) {
                tooltip.style.display = 'none';
            }
        });

        card.addEventListener('click', function () {
            updateStatsCards();

            const valueElement = this.querySelector('.value');
            valueElement.classList.add('value-update');
            setTimeout(() => {
                valueElement.classList.remove('value-update');
            }, 500);
        });
    });
}

function watchForUpdates() {
    const originalUpdateContent = window.updateContent;

    window.updateContent = function (target, linkText) {
        if (originalUpdateContent) {
            originalUpdateContent(target, linkText);
        }

        setTimeout(() => {
            updateStatsCards();
        }, 100);
    };

    if (window.performSearch) {
        const originalSearch = window.performSearch;
        window.performSearch = function () {
            originalSearch();
            setTimeout(() => {
                updateStatsCards();
            }, 100);
        };
    }
}

function initStats() {
    updateStatsCards();
    initStatsCards();
    watchForUpdates();

    setInterval(() => {
        updateStatsCards();
    }, 30000);

    console.log('✅ 统计卡片功能已启用');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStats);
} else {
    initStats();
}

// 添加预览图片形式按钮样式
const style = document.createElement('style');
style.textContent = `
    .preview-img-btn {
        background: #f97316;
        color: white;
        border: none;
        padding: 6px 16px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 400;
        transition: all 0.2s ease;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    }

    .preview-img-btn:hover {
        background: #ea580c;
        transform: translateY(-1px);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .preview-img-btn:active {
        transform: translateY(0);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    }
`;
document.head.appendChild(style);