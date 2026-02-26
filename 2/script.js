        (function () {
            // ========== 文件数据配置 (简版，保留核心) ==========
            const fileData = {
                'plan-2026': { name: '2026专升本计划', files: [{ name: '2026专升本计划.pdf', fileUrl: './zhuanshengben/2026专升本计划.pdf', type: 'pdf' }] },
                'past-politics': { name: '历年真题·政治', files: [{ name: '19-25政治真题.pdf', fileUrl: './zhuanshengben/专升本题背资料/真题/政治/19-25政治真题.pdf', type: 'pdf' }, { name: '答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/真题/政治/19-25政治真题答案.pdf', type: 'pdf' }] },
                'past-english': { name: '历年真题·英语', files: [{ name: '09-25英语真题.pdf', fileUrl: './zhuanshengben/专升本题背资料/真题/英语/09-25英语真题.pdf', type: 'pdf' }, { name: '答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/真题/英语/09-25英语真题答案.pdf', type: 'pdf' }] },
                'past-math': { name: '历年真题·高数一', files: [{ name: '14-25高数一真题.pdf', fileUrl: './zhuanshengben/专升本题背资料/真题/高数一/14-25高数一真题.pdf', type: 'pdf' }, { name: '答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/真题/高数一/14-25高数一真题答案.pdf', type: 'pdf' }] },
                'past-it-intro': { name: '历年真题·信息技术概论', files: [{ name: '信息技术概论真题.pdf', fileUrl: './zhuanshengben/专升本题背资料/真题/信息技术概论/信息技术概论真题.pdf', type: 'pdf' }, { name: '答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/真题/信息技术概论/信息技术概论真题答案.pdf', type: 'pdf' }] },
                'syllabus-2026-politics': { name: '政治考纲2026', files: [{ name: '2026政治考纲.pdf', fileUrl: './zhuanshengben/考纲/2026/2026政治考纲.pdf', type: 'pdf' }] },
                'syllabus-2026-english': { name: '英语考纲2026', files: [{ name: '2026英语考纲.pdf', fileUrl: './zhuanshengben/考纲/2026/2026英语考纲.pdf', type: 'pdf' }] },
                'syllabus-2026-math': { name: '高数考纲2026', files: [{ name: '2026高数考纲.pdf', fileUrl: './zhuanshengben/考纲/2026/2026高数一考纲.pdf', type: 'pdf' }] },
                'syllabus-2026-it': { name: '信息技术考纲2026', files: [{ name: '2026信息技术考纲.pdf', fileUrl: './zhuanshengben/考纲/2026/2026信息技术基础考纲.pdf', type: 'pdf' }] },
                'process': { name: '报考流程', files: [{ name: '了解理工3.pdf', fileUrl: './zhuanshengben/报考流程（了解理工3）/了解理工3.pdf', type: 'pdf' }] },
                'course-english': { name: '英语课程标准', files: [{ name: '英语课程标准.pdf', fileUrl: './zhuanshengben/教学、课程标准/专业课程标准/高等职业教育专科英语课程标准（2021版）.pdf', type: 'pdf' }] },
                'course-math': { name: '数学课程标准', files: [{ name: '数学课程标准.pdf', fileUrl: './zhuanshengben/教学、课程标准/专业课程标准/高等职业教育专科 《高等数学》课程标准 （2021年).pdf', type: 'pdf' }] },
                'course-it': { name: '信息技术课程标准', files: [{ name: '信息技术课程标准.pdf', fileUrl: './zhuanshengben/教学、课程标准/专业课程标准/高等职业教育专科信息技术课程标准（2021版）.pdf', type: 'pdf' }] },
                'major-bigdata': { name: '大数据技术专业标准', files: [{ name: '大数据技术专业教学标准.pdf', fileUrl: './zhuanshengben/教学、课程标准/专业教学标准/大数据技术专业职业教育专业教学标准-2025年修（制）订.pdf', type: 'pdf' }] },
            };

            // 模拟卷数据循环
            for (let i = 1; i <= 3; i++) { // 简化只生成3份
                fileData[`mock-politics-${i}`] = { name: `政治模拟卷${i}`, files: [{ name: `政治模拟卷${i}.pdf`, fileUrl: `./zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷${i}.pdf`, type: 'pdf' }, { name: `答案${i}.pdf`, fileUrl: `./zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷${i}答案.pdf`, type: 'pdf' }] };
                fileData[`mock-english-${i}`] = { name: `英语模拟卷${i}`, files: [{ name: `英语模拟卷${i}.pdf`, fileUrl: `./zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷${i}.pdf`, type: 'pdf' }, { name: `答案${i}.pdf`, fileUrl: `./zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷${i}答案.pdf`, type: 'pdf' }] };
                fileData[`mock-math-${i}`] = { name: `高数模拟卷${i}`, files: [{ name: `高数模拟卷${i}.pdf`, fileUrl: `./zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷${i}.pdf`, type: 'pdf' }, { name: `答案${i}.pdf`, fileUrl: `./zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷${i}答案.pdf`, type: 'pdf' }] };
                fileData[`mock-it-${i}`] = { name: `信息技术模拟卷${i}`, files: [{ name: `信息技术模拟卷${i}.pdf`, fileUrl: `./zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概论模拟卷${i}.pdf`, type: 'pdf' }, { name: `答案${i}.pdf`, fileUrl: `./zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概论模拟卷${i}答案.pdf`, type: 'pdf' }] };
            }

            // DOM 元素
            const sidebarEl = document.getElementById('sidebar');
            const toggleBtn = document.getElementById('sidebarToggle');
            const overlay = document.getElementById('sidebarOverlay');
            const dynamicDiv = document.getElementById('dynamic-content');
            const contentPath = document.getElementById('content-path');
            const titleText = document.getElementById('title-text');
            const breadcrumbCat = document.getElementById('current-category');
            const menuLinks = document.querySelectorAll('a[data-target]');
            let currentPreviewFile = null;

            // 移动端判断
            function isMobile() { return window.innerWidth <= 768; }

            // 切换侧边栏函数（适配PC和移动）
            function toggleSidebar() {
                if (isMobile()) {
                    sidebarEl.classList.toggle('mobile-open');
                    if (sidebarEl.classList.contains('mobile-open')) {
                        overlay.classList.add('active');
                    } else {
                        overlay.classList.remove('active');
                    }
                } else {
                    sidebarEl.classList.toggle('close');
                }
            }

            // 关闭移动端侧边栏
            function closeMobileSidebar() {
                if (isMobile() && sidebarEl.classList.contains('mobile-open')) {
                    sidebarEl.classList.remove('mobile-open');
                    overlay.classList.remove('active');
                }
            }

            // 监听横杠点击
            toggleBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleSidebar();
            });

            // 点击遮罩关闭侧边栏
            overlay.addEventListener('click', closeMobileSidebar);

            // 窗口大小变化时重置状态 (避免混乱)
            window.addEventListener('resize', () => {
                if (!isMobile()) {
                    sidebarEl.classList.remove('mobile-open');
                    overlay.classList.remove('active');
                    // 保证PC端有close类（默认有）
                    if (!sidebarEl.classList.contains('close')) sidebarEl.classList.add('close');
                } else {
                    // 移动端默认收起（移除close类？但移动端不使用close类控制显示隐藏，而用mobile-open）
                    sidebarEl.classList.remove('mobile-open');
                    overlay.classList.remove('active');
                }
            });

            // 右侧内容更新函数 (简化预览功能)
            function updateContent(target, linkText) {
                let displayText = '首页';
                let iconPath = 'M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z';
                if (target === 'home') {
                    dynamicDiv.innerHTML = `<svg viewBox="0 0 24 24"><path d="${iconPath}" /></svg><h2>首页总览</h2><p>欢迎使用专升本学习资料管理系统。从左侧菜单选择具体项目查看文件。</p><div class="path-hint">当前显示：首页</div>`;
                    titleText.innerText = '首页 · 资料总览';
                    breadcrumbCat.innerText = '首页';
                    contentPath.innerText = '当前显示：首页';
                } else if (fileData[target]) {
                    const data = fileData[target];
                    let html = `<svg viewBox="0 0 24 24"><path d="M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M9,7H7V17H9V7M13,7H11V17H13V7M17,7H15V17H17V7Z" /></svg><h2>${data.name}</h2><div class="file-list">`;
                    data.files.forEach(f => {
                        let fileIcon = '<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 10h-8v-2h8v2zm0-4h-8V7h8v2z" />';
                        let btn = `<div class="file-item"><div class="file-info"><svg viewBox="0 0 24 24">${fileIcon}</svg><span class="file-name">${f.name}</span></div><div class="action-buttons"><button class="preview-btn" data-file='${JSON.stringify(f).replace(/'/g, "&apos;")}'>预览</button><button class="download-btn" data-file='${JSON.stringify(f).replace(/'/g, "&apos;")}'>下载</button></div></div>`;
                        html += btn;
                    });
                    html += '</div>';
                    if (currentPreviewFile) {
                        html += `<div class="preview-area"><div class="preview-header"><h3>${currentPreviewFile.name}</h3><button class="close-preview" id="closePreviewBtn">&times;</button></div><div class="preview-content" id="preview-container"></div></div>`;
                    }
                    dynamicDiv.innerHTML = html;
                    titleText.innerText = data.name;
                    breadcrumbCat.innerText = data.name;
                    contentPath.innerText = `当前显示：${data.name}`;
                    // 绑定预览下载
                    dynamicDiv.querySelectorAll('.preview-btn').forEach(btn => {
                        btn.addEventListener('click', (e) => {
                            e.stopPropagation();
                            const file = JSON.parse(btn.dataset.file.replace(/&apos;/g, "'"));
                            currentPreviewFile = file;
                            updateContent(target, linkText);
                            setTimeout(() => {
                                const container = document.getElementById('preview-container');
                                if (container && currentPreviewFile) {
                                    if (currentPreviewFile.type === 'pdf') {
                                        const iframe = document.createElement('iframe');
                                        iframe.src = currentPreviewFile.fileUrl;
                                        iframe.style.width = '100%'; iframe.style.height = '500px';
                                        container.innerHTML = ''; container.appendChild(iframe);
                                    } else {
                                        const img = document.createElement('img');
                                        img.src = currentPreviewFile.fileUrl; img.style.maxWidth = '100%';
                                        container.innerHTML = ''; container.appendChild(img);
                                    }
                                }
                            }, 50);
                        });
                    });
                    dynamicDiv.querySelectorAll('.download-btn').forEach(btn => {
                        btn.addEventListener('click', (e) => {
                            e.stopPropagation();
                            const file = JSON.parse(btn.dataset.file.replace(/&apos;/g, "'"));
                            const a = document.createElement('a');
                            a.href = file.fileUrl; a.download = file.name; a.click();
                        });
                    });
                    const closeBtn = document.getElementById('closePreviewBtn');
                    if (closeBtn) closeBtn.addEventListener('click', () => { currentPreviewFile = null; updateContent(target, linkText); });
                } else {
                    dynamicDiv.innerHTML = `<svg viewBox="0 0 24 24"><path d="M20 6H4V4H20V6M21 12V14H3V12H21M13 18H11V20H13V18Z" /></svg><h2>${linkText}</h2><p>占位内容，文件尚未添加。</p>`;
                }
                // 移动端点击菜单后自动收起侧边栏
                closeMobileSidebar();
            }

            // 绑定所有data-target菜单
            menuLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const target = link.getAttribute('data-target');
                    const text = link.innerText.trim();
                    currentPreviewFile = null;
                    updateContent(target, text);
                    // 高亮处理略
                });
            });

            // 初始化首页
            updateContent('home', '首页');

            // 箭头展开/折叠 (简单处理)
            document.querySelectorAll('.arrow').forEach(arrow => {
                arrow.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const parentLi = arrow.closest('li');
                    if (parentLi) parentLi.classList.toggle('showMenu');
                });
            });

            // 统计卡片简单更新 (省略具体计数，仅示例)
            // 直接硬编码显示一些数值
            document.querySelector('.stat-card.politics .value').innerText = '41';
            document.querySelector('.stat-card.english .value').innerText = '42';
            document.querySelector('.stat-card.math .value').innerText = '40';
            document.querySelector('.stat-card.it .value').innerText = '83';

            // 搜索框清空按钮逻辑
            const searchInput = document.getElementById('search-input');
            const clearBtn = document.createElement('button');
            clearBtn.innerHTML = '&times;';
            clearBtn.className = 'search-clear-btn';
            document.querySelector('.search-box').appendChild(clearBtn);
            searchInput.addEventListener('input', () => { clearBtn.style.display = searchInput.value ? 'block' : 'none'; });
            clearBtn.addEventListener('click', () => { searchInput.value = ''; clearBtn.style.display = 'none'; });
        })();
        
    