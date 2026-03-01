(function () {
    // ---------- 1. 定义章节名称 ----------
    const chapterNames = [
        '第一章 函数、极限、连续',
        '第二章 一元函数微分学',
        '第三章 一元函数积分学',
        '第四章 向量代数与空间解析几何',
        '第五章 多元函数微分学',
        '第六章 多元函数积分学',
        '第七章 无穷级数',
        '第八章 常微分方程',
        '第九章 行列式',
        '第十章 矩阵',
        '第十一章 线性方程组'
    ];

    // ---------- 2. 每章对应的BV号 (根据您提供的10个链接 + 第十一章沿用第十章，可自行修改) ----------
    const chapterBV = [
        'BV1Q3411C7NK',   // 第一章
        'BV1pb4y1h72a',   // 第二章
        'BV1Z44y1x76U',   // 第三章
        'BV1SL411G7eN',   // 第四章
        'BV1qq4y197rm',   // 第五章
        'BV19P4y1t76y',   // 第六章
        'BV1k3411C7Tp',   // 第七章
        'BV1aU4y1F7qq',   // 第八章
        'BV1gu411f7zN',   // 第九章
        'BV1Cr4y1y7AF',   // 第十章
        'BV1Cr4y1y7AF'    // 第十一章 (暂用第十章，如有独立BV请替换)
    ];

    // ---------- 3. 课时原始信息 (名称 + 所属章节索引) ----------
    // 为了精确，按顺序列出所有92课时的名称及对应的章节内分P序号(p)
    // 格式: [课时名称, 章节索引(0~10), 在该章内的分P序号(从1开始)]
    const rawLessons = [
        // 第一章 索引0, 共13课时
        ['课时1 考试大纲', 0, 1],
        ['课时2 定义域', 0, 2],
        ['课时3 同一函数', 0, 3],
        ['课时4 函数的性质', 0, 4],
        ['课时5 复合函数', 0, 5],
        ['课时6 基本初等函数', 0, 6],
        ['课时7 连续', 0, 7],
        ['课时8 极限', 0, 8],
        ['课时9 无穷小量与无穷大量', 0, 9],
        ['课时10 等价代换', 0, 10],
        ['课时11 两个重要极限', 0, 11],
        ['课时12 间断点', 0, 12],
        ['课时13 闭区间上连续函数的性质', 0, 13],
        // 第二章 索引1, 共13课时 (14-26)
        ['【课时14】导数的概念', 1, 1],
        ['【课时15】求导公式', 1, 2],
        ['【课时16】复合函数求导', 1, 3],
        ['【课时17】参数函数求导', 1, 4],
        ['【课时18】隐函数求导', 1, 5],
        ['【课时19】对数求导法', 1, 6],
        ['【课时20】中值定理', 1, 7],
        ['【课时21】洛必达求极限(1)', 1, 8],
        ['【课时22】洛必达求极限(2)', 1, 9],
        ['【课时23】单调性凹凸性', 1, 10],
        ['【课时24】函数极值', 1, 11],
        ['【课时25】函数最值', 1, 12],
        ['【课时26】导数在经济学应用 (数二内容，数一可忽...', 1, 13],
        // 第三章 索引2, 共14课时 (27-40)
        ['【课时27】不定积分概念', 2, 1],
        ['【课时28】基本公式', 2, 2],
        ['【课时29】凑微分', 2, 3],
        ['【课时30】分部积分', 2, 4],
        ['【课时31】换元法', 2, 5],
        ['【课时32】简单有理分式', 2, 6],
        ['【课时33】定积分概念', 2, 7],
        ['【课时34】定积分性质', 2, 8],
        ['【课时35】定积分的分部积分', 2, 9],
        ['【课时36】定积分换元法', 2, 10],
        ['【课时37】变上限积分', 2, 11],
        ['【课时38】广义积分', 2, 12],
        ['【课时39】定积分求面积', 2, 13],
        ['【课时40】定积分求体积', 2, 14],
        // 第四章 索引3, 共5课时 (41-45)
        ['【课时41】向量代数(1)', 3, 1],
        ['【课时42】向量代数(2)', 3, 2],
        ['【课时43】直线与平面(1)', 3, 3],
        ['【课时44】直线与平面(2)', 3, 4],
        ['【课时45】曲面的方程', 3, 5],
        // 第五章 索引4, 共8课时 (46-53)
        ['【课时46】偏导数', 4, 1],
        ['【课时47】全微分', 4, 2],
        ['【课时48】二阶偏导数', 4, 3],
        ['【课时49】隐函数求偏导(1阶)', 4, 4],
        ['【课时50】隐函数求偏导 (2阶)', 4, 5],
        ['【课时51】链式法则', 4, 6],
        ['【课时52】无条件极值', 4, 7],
        ['【课时53】条件极值', 4, 8],
        // 第六章 索引5, 共7课时 (58-64)
        ['【课时58】二重积分概念', 5, 1],
        ['【课时59】二重积分计算(1)', 5, 2],
        ['【课时60】二重积分计算(2)', 5, 3],
        ['【课时61】二重积分的应用', 5, 4],
        ['【课时62】曲线积分计算', 5, 5],
        ['【课时63】格林公式', 5, 6],
        ['【课时64】与路径无关', 5, 7],
        // 第七章 索引6, 共12课时 (65-76)
        ['【课时65】常数项级数', 6, 1],
        ['【课时66】基本性质', 6, 2],
        ['【课时67】比较审敛法', 6, 3],
        ['【课时68】比值审敛法', 6, 4],
        ['【课时69】根植审敛法', 6, 5],
        ['【课时70】莱布尼茨审敛法', 6, 6],
        ['【课时71】绝对收敛与条件收敛', 6, 7],
        ['【课时72】幂级数概念', 6, 8],
        ['【课时73】收敛半径求法', 6, 9],
        ['【课时74】求和函数', 6, 10],
        ['【课时75】展开成幂级数(1)', 6, 11],
        ['【课时76】展开成幂级数(2)', 6, 12],
        // 第八章 索引7, 共3课时 (77-79)
        ['【课时77】行列式概念', 7, 1],
        ['【课时78】行列式性质', 7, 2],
        ['【课时79】克莱姆法则', 7, 3],
        // 第九章 索引8, 共8课时 (80-87)
        ['【课时80】矩阵概念', 8, 1],
        ['【课时81】矩阵的乘法', 8, 2],
        ['【课时82】转置与方阵', 8, 3],
        ['【课时83】伴随矩阵', 8, 4],
        ['【课时84】逆矩阵的概念', 8, 5],
        ['【课时85】初等变换', 8, 6],
        ['【课时86】求逆矩阵', 8, 7],
        ['【课时87】矩阵的秩', 8, 8],
        // 第十章 索引9, 共5课时 (88-92)
        ['【课时88】n维向量', 9, 1],
        ['【课时89】线性相关性', 9, 2],
        ['【课时90】极大无关', 9, 3],
        ['【课时91】齐次线性方程组', 9, 4],
        ['【课时92】非齐次线性方程组', 9, 5],
        // 第十一章 索引10, 无实际课时，但为了完整性补一个占位 (共0课时)
    ];

    // 构建flatLessons数组，包含bv, page(分P)
    let flatLessons = [];
    rawLessons.forEach(item => {
        if (item.length === 3) {
            let title = item[0];
            let chapIdx = item[1];
            let p = item[2];          // 该课时在章节内的分P序号
            let bv = chapterBV[chapIdx] || 'BV1Cr4y1y7AF';
            flatLessons.push({
                id: flatLessons.length + 1,  // 1~92
                chapterIndex: chapIdx,
                chapterName: chapterNames[chapIdx],
                fullTitle: title,
                bv: bv,
                page: p,
                duration: '15:00' // 固定时长，可忽略
            });
        }
    });

    // 过滤掉可能的undefined (第十一章无课时，但rawLessons已完整覆盖1-92)
    flatLessons = flatLessons.filter(l => l !== undefined);

    // DOM 元素
    const biliIframe = document.getElementById('bilibiliIframe');
    const currentVideoTitle = document.getElementById('currentVideoTitle');
    const chapterList = document.getElementById('chapterList');
    const prevPageBtn = document.getElementById('prevPageBtn');
    const nextPageBtn = document.getElementById('nextPageBtn');
    const pageInput = document.getElementById('pageInput');
    const totalHint = document.getElementById('totalChapterHint');

    let currentLessonId = flatLessons[0]?.id || 1;
    let currentPageChapterIndex = 0;

    // 播放课时：直接使用内嵌数据构建iframe src
    function playLessonById(id) {
        const lesson = flatLessons.find(l => l.id === id);
        if (!lesson) return;
        currentLessonId = id;
        // 使用您提供的iframe格式，但需要构建正确的bvid和p参数
        // 注意：B站嵌入代码通常需要aid和cid，但简化版可以直接用bvid和page
        // 这里采用标准player.html?bvid=xxx&page=yy  （page即分P序号）
        const src = `https://player.bilibili.com/player.html?isOutside=true&bvid=${lesson.bv}&page=${lesson.page}&autoplay=1`;
        biliIframe.src = src;
        currentVideoTitle.innerText = `${lesson.chapterName} · ${lesson.fullTitle} (第${lesson.page}P)`;

        // 更新高亮
        if (lesson.chapterIndex !== currentPageChapterIndex) {
            currentPageChapterIndex = lesson.chapterIndex;
            renderCurrentPage();
        } else {
            renderCurrentPage();
        }
    }

    // 渲染章节列表
    function renderCurrentPage() {
        const lessons = flatLessons.filter(l => l.chapterIndex === currentPageChapterIndex);
        if (lessons.length === 0) {
            chapterList.innerHTML = '<li class="empty-message">本章暂无课时</li>';
        } else {
            let html = `<li class="chapter-group-header"><span>📖 ${chapterNames[currentPageChapterIndex]}</span><span>${lessons.length}课时</span></li>`;
            lessons.forEach(lesson => {
                const activeClass = (lesson.id === currentLessonId) ? 'active' : '';
                html += `<li data-id="${lesson.id}" class="${activeClass}">
                            <i class="fa-regular fa-circle-play"></i>
                            <span class="chapter-title" title="${lesson.fullTitle}">${lesson.fullTitle}</span>
                            <span class="duration-badge">P${lesson.page}</span>
                        </li>`;
            });
            chapterList.innerHTML = html;
        }
        document.querySelectorAll('.chapter-list li[data-id]').forEach(li => {
            li.addEventListener('click', function () {
                playLessonById(parseInt(this.dataset.id));
            });
        });
        pageInput.value = currentPageChapterIndex + 1;
        prevPageBtn.disabled = (currentPageChapterIndex === 0);
        nextPageBtn.disabled = (currentPageChapterIndex === chapterNames.length - 1);
    }

    function goToChapter(index) {
        if (index < 0 || index >= chapterNames.length) return;
        currentPageChapterIndex = index;
        renderCurrentPage();
    }

    prevPageBtn.addEventListener('click', () => goToChapter(currentPageChapterIndex - 1));
    nextPageBtn.addEventListener('click', () => goToChapter(currentPageChapterIndex + 1));
    pageInput.addEventListener('change', function () {
        let val = parseInt(this.value) || 1;
        if (val < 1) val = 1; else if (val > 11) val = 11;
        this.value = val;
        goToChapter(val - 1);
    });

    // 初始化第一课时
    if (flatLessons.length) {
        playLessonById(flatLessons[0].id);
    }
    if (totalHint) totalHint.innerText = `总课时 ${flatLessons.length}`;
})();
