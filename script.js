// ========== 文件数据配置 - 基础数据 ==========
const baseFileData = {
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
    }
};

// ========== 模拟题动态配置 ==========
const MOCK_EXAMS_CONFIG = {
    categories: [
        {
            id: 'politics',
            name: '政治模拟题',
            basePath: './zhuanshengben/专升本题背资料/模拟题/政治/',
            fileNamePattern: /^政治模拟卷(\d+)\.pdf$/i,
            answerPattern: /^政治模拟卷(\d+)答案\.pdf$/i,
            targetPrefix: 'mock-politics'
        },
        {
            id: 'english',
            name: '英语模拟题',
            basePath: './zhuanshengben/专升本题背资料/模拟题/英语/',
            fileNamePattern: /^英语模拟卷(\d+)\.pdf$/i,
            answerPattern: /^英语模拟卷(\d+)答案\.pdf$/i,
            targetPrefix: 'mock-english'
        },
        {
            id: 'math',
            name: '高数模拟题',
            basePath: './zhuanshengben/专升本题背资料/模拟题/高数一/',
            fileNamePattern: /^高数模拟卷(\d+)\.pdf$/i,
            answerPattern: /^高数模拟卷(\d+)答案\.pdf$/i,
            targetPrefix: 'mock-math'
        },
        {
            id: 'it',
            name: '信息技术模拟题',
            basePath: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/',
            fileNamePattern: /^信息技术模拟卷(\d+)\.pdf$/i,
            answerPattern: /^信息技术模拟卷(\d+)答案\.pdf$/i,
            targetPrefix: 'mock-it'
        }
    ]
};

// ========== 开背知识点配置 ==========
const KAIBEI_CONFIG = {
    categories: [
        {
            id: 'kaibei-politics',
            name: '政治开背知识点',
            basePath: './zhuanshengben/专升本题背资料/开背知识点/政治/',
            fileNamePattern: /^政治开背知识点(\d+)\.pdf$/i,
            targetPrefix: 'kaibei-politics'
        },
        {
            id: 'kaibei-english',
            name: '英语开背知识点',
            basePath: './zhuanshengben/专升本题背资料/开背知识点/英语/',
            fileNamePattern: /^英语开背知识点(\d+)\.pdf$/i,
            targetPrefix: 'kaibei-english'
        },
        {
            id: 'kaibei-math',
            name: '高数开背知识点',
            basePath: './zhuanshengben/专升本题背资料/开背知识点/高数一/',
            fileNamePattern: /^高数开背知识点(\d+)\.pdf$/i,
            targetPrefix: 'kaibei-math'
        },
        {
            id: 'kaibei-it',
            name: '信息技术开背知识点',
            basePath: './zhuanshengben/专升本题背资料/开背知识点/信息技术概论/',
            fileNamePattern: /^信息技术开背知识点(\d+)\.pdf$/i,
            targetPrefix: 'kaibei-it'
        }
    ]
};

// 最终的fileData对象
let fileData = { ...baseFileData };

// ========== 模拟题文件列表 ==========
const MOCK_FILES = [
    // 政治模拟题
    { category: 'politics', number: 1, hasAnswer: true },
    { category: 'politics', number: 2, hasAnswer: true },
    { category: 'politics', number: 3, hasAnswer: true },
    { category: 'politics', number: 4, hasAnswer: true },
    { category: 'politics', number: 5, hasAnswer: true },
    { category: 'politics', number: 6, hasAnswer: true },
    { category: 'politics', number: 7, hasAnswer: true },
    { category: 'politics', number: 8, hasAnswer: true },
    { category: 'politics', number: 9, hasAnswer: true },
    { category: 'politics', number: 10, hasAnswer: true },
    { category: 'politics', number: 11, hasAnswer: true },
    { category: 'politics', number: 12, hasAnswer: true },
    { category: 'politics', number: 13, hasAnswer: true },
    { category: 'politics', number: 14, hasAnswer: true },
    { category: 'politics', number: 15, hasAnswer: true },
    { category: 'politics', number: 16, hasAnswer: true },
    { category: 'politics', number: 17, hasAnswer: true },
    { category: 'politics', number: 18, hasAnswer: true },
    { category: 'politics', number: 19, hasAnswer: true },
    { category: 'politics', number: 20, hasAnswer: true },

    // 英语模拟题
    { category: 'english', number: 1, hasAnswer: true },
    { category: 'english', number: 2, hasAnswer: true },
    { category: 'english', number: 3, hasAnswer: true },
    { category: 'english', number: 4, hasAnswer: true },
    { category: 'english', number: 5, hasAnswer: true },
    { category: 'english', number: 6, hasAnswer: true },
    { category: 'english', number: 7, hasAnswer: true },
    { category: 'english', number: 8, hasAnswer: true },
    { category: 'english', number: 9, hasAnswer: true },
    { category: 'english', number: 10, hasAnswer: true },
    { category: 'english', number: 11, hasAnswer: true },
    { category: 'english', number: 12, hasAnswer: true },
    { category: 'english', number: 13, hasAnswer: true },
    { category: 'english', number: 14, hasAnswer: true },
    { category: 'english', number: 15, hasAnswer: true },
    { category: 'english', number: 16, hasAnswer: true },
    { category: 'english', number: 17, hasAnswer: true },
    { category: 'english', number: 18, hasAnswer: true },
    { category: 'english', number: 19, hasAnswer: true },

    // 高数模拟题
    { category: 'math', number: 1, hasAnswer: true },
    { category: 'math', number: 2, hasAnswer: true },
    { category: 'math', number: 3, hasAnswer: true },
    { category: 'math', number: 4, hasAnswer: true },
    { category: 'math', number: 5, hasAnswer: true },
    { category: 'math', number: 6, hasAnswer: true },
    { category: 'math', number: 7, hasAnswer: true },
    { category: 'math', number: 8, hasAnswer: true },
    { category: 'math', number: 9, hasAnswer: true },
    { category: 'math', number: 10, hasAnswer: true },
    { category: 'math', number: 11, hasAnswer: true },
    { category: 'math', number: 12, hasAnswer: true },
    { category: 'math', number: 13, hasAnswer: true },
    { category: 'math', number: 14, hasAnswer: true },
    { category: 'math', number: 15, hasAnswer: true },
    { category: 'math', number: 16, hasAnswer: true },
    { category: 'math', number: 17, hasAnswer: true },
    { category: 'math', number: 18, hasAnswer: true },
    { category: 'math', number: 19, hasAnswer: true },

    // 信息技术模拟题
    { category: 'it', number: 1, hasAnswer: true },
    { category: 'it', number: 2, hasAnswer: true },
    { category: 'it', number: 3, hasAnswer: true },
    { category: 'it', number: 4, hasAnswer: true },
    { category: 'it', number: 5, hasAnswer: true },
    { category: 'it', number: 6, hasAnswer: true },
    { category: 'it', number: 7, hasAnswer: true },
    { category: 'it', number: 8, hasAnswer: true },
    { category: 'it', number: 9, hasAnswer: true },
    { category: 'it', number: 10, hasAnswer: true },
    { category: 'it', number: 11, hasAnswer: true },
    { category: 'it', number: 12, hasAnswer: true },
    { category: 'it', number: 13, hasAnswer: true },
    { category: 'it', number: 14, hasAnswer: true },
    { category: 'it', number: 15, hasAnswer: true },
    { category: 'it', number: 16, hasAnswer: true },
    { category: 'it', number: 17, hasAnswer: true },
    { category: 'it', number: 18, hasAnswer: true },
    { category: 'it', number: 19, hasAnswer: true }
];

// ========== 开背知识点文件列表 ==========
const KAIBEI_FILES = [
    // 政治开背知识点
    { category: 'kaibei-politics', number: 1 },
    { category: 'kaibei-politics', number: 2 },
    { category: 'kaibei-politics', number: 3 },

    // 英语开背知识点
    { category: 'kaibei-english', number: 1 },
    { category: 'kaibei-english', number: 2 },
    { category: 'kaibei-english', number: 3 },

    // 高数开背知识点
    { category: 'kaibei-math', number: 1 },
    { category: 'kaibei-math', number: 2 },
    { category: 'kaibei-math', number: 3 },

    // 信息技术开背知识点
    { category: 'kaibei-it', number: 1 },
    { category: 'kaibei-it', number: 2 },
    { category: 'kaibei-it', number: 3 }
];

// ========== 动态生成模拟题数据 ==========
function generateMockExamData() {
    console.log('开始动态生成模拟题数据...');

    const groupedByCategory = {};
    MOCK_FILES.forEach(file => {
        if (!groupedByCategory[file.category]) {
            groupedByCategory[file.category] = [];
        }
        groupedByCategory[file.category].push(file);
    });

    Object.keys(groupedByCategory).forEach(categoryId => {
        const category = MOCK_EXAMS_CONFIG.categories.find(c => c.id === categoryId);
        if (!category) return;

        const files = groupedByCategory[categoryId];

        files.forEach(file => {
            const targetKey = `${category.targetPrefix}-${file.number}`;
            const filesArray = [];

            const questionFileName = `政治模拟卷${file.number}.pdf`
                .replace('政治', category.name.replace('模拟题', '').trim());
            filesArray.push({
                name: questionFileName,
                fileUrl: `${category.basePath}${questionFileName}`,
                type: 'pdf'
            });

            if (file.hasAnswer) {
                const answerFileName = `政治模拟卷${file.number}答案.pdf`
                    .replace('政治', category.name.replace('模拟题', '').trim());
                filesArray.push({
                    name: answerFileName,
                    fileUrl: `${category.basePath}${answerFileName}`,
                    type: 'pdf'
                });
            }

            fileData[targetKey] = {
                name: `${category.name.replace('模拟题', '')}模拟卷${file.number}`,
                files: filesArray
            };
        });
    });

    console.log('模拟题数据生成完成');
}

// ========== 动态生成开背知识点数据 ==========
function generateKaibeiData() {
    console.log('开始动态生成开背知识点数据...');

    const groupedByCategory = {};
    KAIBEI_FILES.forEach(file => {
        if (!groupedByCategory[file.category]) {
            groupedByCategory[file.category] = [];
        }
        groupedByCategory[file.category].push(file);
    });

    Object.keys(groupedByCategory).forEach(categoryId => {
        const category = KAIBEI_CONFIG.categories.find(c => c.id === categoryId);
        if (!category) return;

        const files = groupedByCategory[categoryId];

        files.forEach(file => {
            const targetKey = `${category.targetPrefix}-${file.number}`;
            const filesArray = [];

            const fileName = `政治开背知识点${file.number}.pdf`
                .replace('政治', category.name.replace('开背知识点', '').trim());

            filesArray.push({
                name: fileName,
                fileUrl: `${category.basePath}${fileName}`,
                type: 'pdf'
            });

            fileData[targetKey] = {
                name: `${category.name.replace('开背知识点', '')}开背知识点${file.number}`,
                files: filesArray
            };
        });
    });

    console.log('开背知识点数据生成完成');
}

// ========== 动态生成模拟题菜单 ==========
function generateMockExamMenu() {
    const mockExamsSubmenu = document.getElementById('mock-exams-submenu');
    if (!mockExamsSubmenu) return;

    mockExamsSubmenu.innerHTML = '<li><a class="link_name" href="#">模拟题</a></li>';

    MOCK_EXAMS_CONFIG.categories.forEach(category => {
        const categoryLi = document.createElement('li');
        categoryLi.className = 'has-third-level';

        const categoryFiles = MOCK_FILES.filter(f => f.category === category.id);
        if (categoryFiles.length === 0) return;

        categoryLi.innerHTML = `
            <div class="iocn-link" style="padding-left:0;">
                <a href="#" style="padding-left:16px;"><span>${category.name}</span></a>
                <i class='bx bxs-chevron-down arrow'></i>
            </div>
            <ul class="sub-menu" style="padding-left:30px;" id="submenu-${category.id}">
                <li><a class="link_name" href="#">${category.name}</a></li>
                ${categoryFiles.map(file => `
                    <li><a href="#" data-target="${category.targetPrefix}-${file.number}">${category.name.replace('模拟题', '')}模拟卷${file.number}</a></li>
                `).join('')}
            </ul>
        `;

        mockExamsSubmenu.appendChild(categoryLi);
    });

    rebindArrowEvents();
}

// ========== 动态生成开背知识点菜单 ==========
function generateKaibeiMenu() {
    const kaibeiSubmenu = document.getElementById('kaibei-submenu');
    if (!kaibeiSubmenu) return;

    kaibeiSubmenu.innerHTML = '<li><a class="link_name" href="#">开背（知识点）</a></li>';

    KAIBEI_CONFIG.categories.forEach(category => {
        const categoryLi = document.createElement('li');
        categoryLi.className = 'has-third-level';

        const categoryFiles = KAIBEI_FILES.filter(f => f.category === category.id);
        if (categoryFiles.length === 0) return;

        categoryLi.innerHTML = `
            <div class="iocn-link" style="padding-left:0;">
                <a href="#" style="padding-left:16px;"><span>${category.name}</span></a>
                <i class='bx bxs-chevron-down arrow'></i>
            </div>
            <ul class="sub-menu" style="padding-left:30px;" id="submenu-${category.id}">
                <li><a class="link_name" href="#">${category.name}</a></li>
                ${categoryFiles.map(file => `
                    <li><a href="#" data-target="${category.targetPrefix}-${file.number}">${category.name.replace('开背知识点', '')}开背知识点${file.number}</a></li>
                `).join('')}
            </ul>
        `;

        kaibeiSubmenu.appendChild(categoryLi);
    });

    rebindArrowEvents();
}

// ========== 重新绑定箭头事件 ==========
function rebindArrowEvents() {
    const oldArrows = document.querySelectorAll(".arrow");
    oldArrows.forEach(arrow => {
        const newArrow = arrow.cloneNode(true);
        arrow.parentNode.replaceChild(newArrow, arrow);
    });

    const newArrows = document.querySelectorAll(".arrow");
    newArrows.forEach(arrow => {
        arrow.addEventListener("click", (e) => {
            let arrowParent = e.target.parentElement.parentElement;
            arrowParent.classList.toggle("showMenu");
        });
    });
}

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
        iframe.style.height = '3000px';
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

        let fileIcon = '';
        let fileBadge = '';

        if (file.type === 'pdf') {
            fileIcon = '<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 10h-8v-2h8v2zm0-4h-8V7h8v2z" />';
        } else {
            fileIcon = '<path d="M14,2H6C4.9,2 4,2.9 4,4V20C4,21.1 4.9,22 6,22H18C19.1,22 20,21.1 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />';
        }

        if (file.name.includes('答案') || file.name.toLowerCase().includes('answer')) {
            fileBadge = '<span class="file-badge answer">答案</span>';
        } else {
            fileBadge = '<span class="file-badge question">题目</span>';
        }

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
        iconPath = 'M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M9,7H7V17H9V7M13,7H11V17H13V7M17,7H15V17H17V7Z';

        const content = renderFileContent(target, title);
        if (content) {
            dynamicDiv.innerHTML = content;
            titleText.innerText = title;
            breadcrumbCat.innerText = title.includes('·') ? title.split('·')[0] : title;
            contentPath.innerText = `当前显示：${displayText}`;
            const titleSvg = document.querySelector('#page-title svg path');
            if (titleSvg) titleSvg.setAttribute('d', iconPath);

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

            document.querySelectorAll('.preview-img-btn').forEach(btn => {
                btn.addEventListener('click', function (e) {
                    e.stopPropagation();

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
                    updateContent(target, linkText);
                });
            }
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

// 初始化
function init() {
    // 生成模拟题数据
    generateMockExamData();

    // 生成开背知识点数据
    generateKaibeiData();

    // 生成模拟题菜单
    generateMockExamMenu();

    // 生成开背知识点菜单
    generateKaibeiMenu();

    // 添加固定样式
    addFixedStyles();

    // 设置点击固定展开/收缩功能
    setupClickToFix();

    // 绑定菜单链接
    bindMenuLinks();

    // 更新首页内容
    updateContent('home', '首页');

    // 设置首页为活动状态
    document.querySelectorAll('.sidebar li.active').forEach(li => li.classList.remove('active'));
    const homeLi = document.getElementById('menu-home');
    if (homeLi) homeLi.classList.add('active');

    console.log('初始化完成，当前fileData包含', Object.keys(fileData).length, '个条目');

    // 移动端触摸优化
    function initMobileTouch() {
        if (window.innerWidth <= 768) {
            document.addEventListener('click', function (e) {
                const sidebar = document.querySelector('.sidebar');
                const menuBtn = document.querySelector('.bx-menu');

                if (!sidebar.classList.contains('close') &&
                    !sidebar.contains(e.target) &&
                    e.target !== menuBtn &&
                    !menuBtn.contains(e.target)) {
                    sidebar.classList.add('close');
                }
            });

            document.querySelectorAll('.sidebar a, .sidebar .arrow').forEach(el => {
                el.addEventListener('click', function (e) {
                    e.stopPropagation();
                });
            });

            const navLinks = document.querySelector('.sidebar .nav-links');
            if (navLinks) {
                navLinks.style.webkitOverflowScrolling = 'touch';
            }
        }
    }

    initMobileTouch();

    window.addEventListener('resize', function () {
        if (window.innerWidth <= 768) {
            document.querySelector('.sidebar').classList.add('close');
        } else {
            document.querySelector('.sidebar').classList.remove('close');
        }
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

    console.log('✅ 答案对照预览功能已启用');
})();

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
        document.querySelectorAll('.search-preview-img, .preview-img-btn').forEach(btn => {
            if (btn.hasAttribute('data-img-files')) {
                btn.addEventListener('click', function (e) {
                    e.stopPropagation();

                    const imgFiles = JSON.parse(this.getAttribute('data-img-files'));

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
            }
        });

        document.querySelectorAll('.search-download, .download-btn').forEach(btn => {
            if (btn.hasAttribute('data-file')) {
                btn.addEventListener('click', function (e) {
                    e.stopPropagation();
                    const file = JSON.parse(this.getAttribute('data-file'));
                    downloadFile(file);
                });
            }
        });

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

// 启动初始化
init();
initStats();