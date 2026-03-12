// ========== 静态文件数据配置 ==========
const fileData = {
    // 首页
    'home': {
        name: '首页',
        files: []
    },

    // 招生计划
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

    // 课程标准
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

    // ===== 模拟题 - 静态定义 =====
    // 政治模拟题 1-20
    'mock-politics-1': { name: '政治模拟卷1', files: [{ name: '政治模拟卷1.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷1.pdf', type: 'pdf' }, { name: '政治模拟卷1答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷1答案.pdf', type: 'pdf' }] },
    'mock-politics-2': { name: '政治模拟卷2', files: [{ name: '政治模拟卷2.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷2.pdf', type: 'pdf' }, { name: '政治模拟卷2答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷2答案.pdf', type: 'pdf' }] },
    'mock-politics-3': { name: '政治模拟卷3', files: [{ name: '政治模拟卷3.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷3.pdf', type: 'pdf' }, { name: '政治模拟卷3答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷3答案.pdf', type: 'pdf' }] },
    'mock-politics-4': { name: '政治模拟卷4', files: [{ name: '政治模拟卷4.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷4.pdf', type: 'pdf' }, { name: '政治模拟卷4答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷4答案.pdf', type: 'pdf' }] },
    'mock-politics-5': { name: '政治模拟卷5', files: [{ name: '政治模拟卷5.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷5.pdf', type: 'pdf' }, { name: '政治模拟卷5答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷5答案.pdf', type: 'pdf' }] },
    'mock-politics-6': { name: '政治模拟卷6', files: [{ name: '政治模拟卷6.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷6.pdf', type: 'pdf' }, { name: '政治模拟卷6答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷6答案.pdf', type: 'pdf' }] },
    'mock-politics-7': { name: '政治模拟卷7', files: [{ name: '政治模拟卷7.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷7.pdf', type: 'pdf' }, { name: '政治模拟卷7答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷7答案.pdf', type: 'pdf' }] },
    'mock-politics-8': { name: '政治模拟卷8', files: [{ name: '政治模拟卷8.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷8.pdf', type: 'pdf' }, { name: '政治模拟卷8答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷8答案.pdf', type: 'pdf' }] },
    'mock-politics-9': { name: '政治模拟卷9', files: [{ name: '政治模拟卷9.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷9.pdf', type: 'pdf' }, { name: '政治模拟卷9答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷9答案.pdf', type: 'pdf' }] },
    'mock-politics-10': { name: '政治模拟卷10', files: [{ name: '政治模拟卷10.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷10.pdf', type: 'pdf' }, { name: '政治模拟卷10答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷10答案.pdf', type: 'pdf' }] },
    'mock-politics-11': { name: '政治模拟卷11', files: [{ name: '政治模拟卷11.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷11.pdf', type: 'pdf' }, { name: '政治模拟卷11答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷11答案.pdf', type: 'pdf' }] },
    'mock-politics-12': { name: '政治模拟卷12', files: [{ name: '政治模拟卷12.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷12.pdf', type: 'pdf' }, { name: '政治模拟卷12答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷12答案.pdf', type: 'pdf' }] },
    'mock-politics-13': { name: '政治模拟卷13', files: [{ name: '政治模拟卷13.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷13.pdf', type: 'pdf' }, { name: '政治模拟卷13答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷13答案.pdf', type: 'pdf' }] },
    'mock-politics-14': { name: '政治模拟卷14', files: [{ name: '政治模拟卷14.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷14.pdf', type: 'pdf' }, { name: '政治模拟卷14答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷14答案.pdf', type: 'pdf' }] },
    'mock-politics-15': { name: '政治模拟卷15', files: [{ name: '政治模拟卷15.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷15.pdf', type: 'pdf' }, { name: '政治模拟卷15答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷15答案.pdf', type: 'pdf' }] },
    'mock-politics-16': { name: '政治模拟卷16', files: [{ name: '政治模拟卷16.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷16.pdf', type: 'pdf' }, { name: '政治模拟卷16答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷16答案.pdf', type: 'pdf' }] },
    'mock-politics-17': { name: '政治模拟卷17', files: [{ name: '政治模拟卷17.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷17.pdf', type: 'pdf' }, { name: '政治模拟卷17答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷17答案.pdf', type: 'pdf' }] },
    'mock-politics-18': { name: '政治模拟卷18', files: [{ name: '政治模拟卷18.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷18.pdf', type: 'pdf' }, { name: '政治模拟卷18答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷18答案.pdf', type: 'pdf' }] },
    'mock-politics-19': { name: '政治模拟卷19', files: [{ name: '政治模拟卷19.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷19.pdf', type: 'pdf' }, { name: '政治模拟卷19答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷19答案.pdf', type: 'pdf' }] },
    'mock-politics-20': { name: '政治模拟卷20', files: [{ name: '政治模拟卷20.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷20.pdf', type: 'pdf' }, { name: '政治模拟卷20答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/政治/政治模拟卷20答案.pdf', type: 'pdf' }] },

    // 英语模拟题 1-20
    'mock-english-1': { name: '英语模拟卷1', files: [{ name: '英语模拟卷1.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷1.pdf', type: 'pdf' }, { name: '英语模拟卷1答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷1答案.pdf', type: 'pdf' }] },
    'mock-english-2': { name: '英语模拟卷2', files: [{ name: '英语模拟卷2.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷2.pdf', type: 'pdf' }, { name: '英语模拟卷2答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷2答案.pdf', type: 'pdf' }] },
    'mock-english-3': { name: '英语模拟卷3', files: [{ name: '英语模拟卷3.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷3.pdf', type: 'pdf' }, { name: '英语模拟卷3答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷3答案.pdf', type: 'pdf' }] },
    'mock-english-4': { name: '英语模拟卷4', files: [{ name: '英语模拟卷4.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷4.pdf', type: 'pdf' }, { name: '英语模拟卷4答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷4答案.pdf', type: 'pdf' }] },
    'mock-english-5': { name: '英语模拟卷5', files: [{ name: '英语模拟卷5.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷5.pdf', type: 'pdf' }, { name: '英语模拟卷5答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷5答案.pdf', type: 'pdf' }] },
    'mock-english-6': { name: '英语模拟卷6', files: [{ name: '英语模拟卷6.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷6.pdf', type: 'pdf' }, { name: '英语模拟卷6答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷6答案.pdf', type: 'pdf' }] },
    'mock-english-7': { name: '英语模拟卷7', files: [{ name: '英语模拟卷7.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷7.pdf', type: 'pdf' }, { name: '英语模拟卷7答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷7答案.pdf', type: 'pdf' }] },
    'mock-english-8': { name: '英语模拟卷8', files: [{ name: '英语模拟卷8.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷8.pdf', type: 'pdf' }, { name: '英语模拟卷8答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷8答案.pdf', type: 'pdf' }] },
    'mock-english-9': { name: '英语模拟卷9', files: [{ name: '英语模拟卷9.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷9.pdf', type: 'pdf' }, { name: '英语模拟卷9答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷9答案.pdf', type: 'pdf' }] },
    'mock-english-10': { name: '英语模拟卷10', files: [{ name: '英语模拟卷10.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷10.pdf', type: 'pdf' }, { name: '英语模拟卷10答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷10答案.pdf', type: 'pdf' }] },
    'mock-english-11': { name: '英语模拟卷11', files: [{ name: '英语模拟卷11.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷11.pdf', type: 'pdf' }, { name: '英语模拟卷11答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷11答案.pdf', type: 'pdf' }] },
    'mock-english-12': { name: '英语模拟卷12', files: [{ name: '英语模拟卷12.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷12.pdf', type: 'pdf' }, { name: '英语模拟卷12答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷12答案.pdf', type: 'pdf' }] },
    'mock-english-13': { name: '英语模拟卷13', files: [{ name: '英语模拟卷13.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷13.pdf', type: 'pdf' }, { name: '英语模拟卷13答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷13答案.pdf', type: 'pdf' }] },
    'mock-english-14': { name: '英语模拟卷14', files: [{ name: '英语模拟卷14.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷14.pdf', type: 'pdf' }, { name: '英语模拟卷14答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷14答案.pdf', type: 'pdf' }] },
    'mock-english-15': { name: '英语模拟卷15', files: [{ name: '英语模拟卷15.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷15.pdf', type: 'pdf' }, { name: '英语模拟卷15答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷15答案.pdf', type: 'pdf' }] },
    'mock-english-16': { name: '英语模拟卷16', files: [{ name: '英语模拟卷16.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷16.pdf', type: 'pdf' }, { name: '英语模拟卷16答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷16答案.pdf', type: 'pdf' }] },
    'mock-english-17': { name: '英语模拟卷17', files: [{ name: '英语模拟卷17.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷17.pdf', type: 'pdf' }, { name: '英语模拟卷17答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷17答案.pdf', type: 'pdf' }] },
    'mock-english-18': { name: '英语模拟卷18', files: [{ name: '英语模拟卷18.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷18.pdf', type: 'pdf' }, { name: '英语模拟卷18答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷18答案.pdf', type: 'pdf' }] },
    'mock-english-19': { name: '英语模拟卷19', files: [{ name: '英语模拟卷19.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷19.pdf', type: 'pdf' }, { name: '英语模拟卷19答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷19答案.pdf', type: 'pdf' }] },
    'mock-english-20': { name: '英语模拟卷20', files: [{ name: '英语模拟卷20.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷20.pdf', type: 'pdf' }, { name: '英语模拟卷20答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/英语/英语模拟卷20答案.pdf', type: 'pdf' }] },

    // 高数模拟题 1-20
    'mock-math-1': { name: '高数模拟卷1', files: [{ name: '高数模拟卷1.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷1.pdf', type: 'pdf' }, { name: '高数模拟卷1答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷1答案.pdf', type: 'pdf' }] },
    'mock-math-2': { name: '高数模拟卷2', files: [{ name: '高数模拟卷2.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷2.pdf', type: 'pdf' }, { name: '高数模拟卷2答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷2答案.pdf', type: 'pdf' }] },
    'mock-math-3': { name: '高数模拟卷3', files: [{ name: '高数模拟卷3.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷3.pdf', type: 'pdf' }, { name: '高数模拟卷3答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷3答案.pdf', type: 'pdf' }] },
    'mock-math-4': { name: '高数模拟卷4', files: [{ name: '高数模拟卷4.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷4.pdf', type: 'pdf' }, { name: '高数模拟卷4答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷4答案.pdf', type: 'pdf' }] },
    'mock-math-5': { name: '高数模拟卷5', files: [{ name: '高数模拟卷5.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷5.pdf', type: 'pdf' }, { name: '高数模拟卷5答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷5答案.pdf', type: 'pdf' }] },
    'mock-math-6': { name: '高数模拟卷6', files: [{ name: '高数模拟卷6.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷6.pdf', type: 'pdf' }, { name: '高数模拟卷6答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷6答案.pdf', type: 'pdf' }] },
    'mock-math-7': { name: '高数模拟卷7', files: [{ name: '高数模拟卷7.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷7.pdf', type: 'pdf' }, { name: '高数模拟卷7答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷7答案.pdf', type: 'pdf' }] },
    'mock-math-8': { name: '高数模拟卷8', files: [{ name: '高数模拟卷8.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷8.pdf', type: 'pdf' }, { name: '高数模拟卷8答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷8答案.pdf', type: 'pdf' }] },
    'mock-math-9': { name: '高数模拟卷9', files: [{ name: '高数模拟卷9.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷9.pdf', type: 'pdf' }, { name: '高数模拟卷9答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷9答案.pdf', type: 'pdf' }] },
    'mock-math-10': { name: '高数模拟卷10', files: [{ name: '高数模拟卷10.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷10.pdf', type: 'pdf' }, { name: '高数模拟卷10答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷10答案.pdf', type: 'pdf' }] },
    'mock-math-11': { name: '高数模拟卷11', files: [{ name: '高数模拟卷11.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷11.pdf', type: 'pdf' }, { name: '高数模拟卷11答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷11答案.pdf', type: 'pdf' }] },
    'mock-math-12': { name: '高数模拟卷12', files: [{ name: '高数模拟卷12.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷12.pdf', type: 'pdf' }, { name: '高数模拟卷12答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷12答案.pdf', type: 'pdf' }] },
    'mock-math-13': { name: '高数模拟卷13', files: [{ name: '高数模拟卷13.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷13.pdf', type: 'pdf' }, { name: '高数模拟卷13答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷13答案.pdf', type: 'pdf' }] },
    'mock-math-14': { name: '高数模拟卷14', files: [{ name: '高数模拟卷14.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷14.pdf', type: 'pdf' }, { name: '高数模拟卷14答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷14答案.pdf', type: 'pdf' }] },
    'mock-math-15': { name: '高数模拟卷15', files: [{ name: '高数模拟卷15.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷15.pdf', type: 'pdf' }, { name: '高数模拟卷15答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷15答案.pdf', type: 'pdf' }] },
    'mock-math-16': { name: '高数模拟卷16', files: [{ name: '高数模拟卷16.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷16.pdf', type: 'pdf' }, { name: '高数模拟卷16答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷16答案.pdf', type: 'pdf' }] },
    'mock-math-17': { name: '高数模拟卷17', files: [{ name: '高数模拟卷17.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷17.pdf', type: 'pdf' }, { name: '高数模拟卷17答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷17答案.pdf', type: 'pdf' }] },
    'mock-math-18': { name: '高数模拟卷18', files: [{ name: '高数模拟卷18.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷18.pdf', type: 'pdf' }, { name: '高数模拟卷18答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷18答案.pdf', type: 'pdf' }] },
    'mock-math-19': { name: '高数模拟卷19', files: [{ name: '高数模拟卷19.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷19.pdf', type: 'pdf' }, { name: '高数模拟卷19答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷19答案.pdf', type: 'pdf' }] },
    'mock-math-20': { name: '高数模拟卷20', files: [{ name: '高数模拟卷20.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷20.pdf', type: 'pdf' }, { name: '高数模拟卷20答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷20答案.pdf', type: 'pdf' }] },
    'mock-math-21': { name: '高数模拟卷21', files: [{ name: '高数模拟卷21.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷21.pdf', type: 'pdf' }, { name: '高数模拟卷21答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷21答案.pdf', type: 'pdf' }] },
    'mock-math-22': { name: '高数模拟卷22', files: [{ name: '高数模拟卷22.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷22.pdf', type: 'pdf' }, { name: '高数模拟卷22答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷22答案.pdf', type: 'pdf' }] },
    'mock-math-23': { name: '高数模拟卷23', files: [{ name: '高数模拟卷23.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷23.pdf', type: 'pdf' }, { name: '高数模拟卷23答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/高数一/高数模拟卷23答案.pdf', type: 'pdf' }] },

    // 信息技术概论模拟题 1-20
    'mock-it-1': { name: '信息技术概论模拟卷1', files: [{ name: '信息技术概论模拟卷1.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概论模拟卷1.pdf', type: 'pdf' }, { name: '信息技术概论模拟卷1答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概论模拟卷1答案.pdf', type: 'pdf' }] },
    'mock-it-2': { name: '信息技术概论模拟卷2', files: [{ name: '信息技术概论模拟卷2.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概论模拟卷2.pdf', type: 'pdf' }, { name: '信息技术概论模拟卷2答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概论模拟卷2答案.pdf', type: 'pdf' }] },
    'mock-it-3': { name: '信息技术概论模拟卷3', files: [{ name: '信息技术概论模拟卷3.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概论模拟卷3.pdf', type: 'pdf' }, { name: '信息技术概论模拟卷3答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概论模拟卷3答案.pdf', type: 'pdf' }] },
    'mock-it-4': { name: '信息技术概论模拟卷4', files: [{ name: '信息技术概论模拟卷4.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概论模拟卷4.pdf', type: 'pdf' }, { name: '信息技术概论模拟卷4答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概论模拟卷4答案.pdf', type: 'pdf' }] },
    'mock-it-5': { name: '信息技术概论模拟卷5', files: [{ name: '信息技术概论模拟卷5.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概论模拟卷5.pdf', type: 'pdf' }, { name: '信息技术概括略的题目和答案.txt', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概括略的题目和答案.txt', type: 'txt' }] },
    'mock-it-6': { name: '信息技术概论模拟卷6', files: [{ name: '信息技术概论模拟卷6.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概论模拟卷6.pdf', type: 'pdf' }, { name: '信息技术概论模拟卷6答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概论模拟卷6答案.pdf', type: 'pdf' }] },
    'mock-it-7': { name: '信息技术概论模拟卷7', files: [{ name: '信息技术概论模拟卷7.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概论模拟卷7.pdf', type: 'pdf' }, { name: '信息技术概论模拟卷7答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概论模拟卷7答案.pdf', type: 'pdf' }] },
    'mock-it-12': { name: '信息技术概论模拟卷12', files: [{ name: '信息技术概论模拟卷12.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概论模拟卷12.pdf', type: 'pdf' }, { name: '信息技术概论模拟卷12答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概论模拟卷12答案.pdf', type: 'pdf' }] },
    'mock-it-13': { name: '信息技术概论模拟卷13', files: [{ name: '信息技术概论模拟卷13.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概论模拟卷13.pdf', type: 'pdf' }, { name: '信息技术概论模拟卷13答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概论模拟卷13答案.pdf', type: 'pdf' }] },
    'mock-it-14': { name: '信息技术概论模拟卷14', files: [{ name: '信息技术概论模拟卷14.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概论模拟卷14.pdf', type: 'pdf' }, { name: '信息技术概论模拟卷14答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概论模拟卷14答案.pdf', type: 'pdf' }] },
    'mock-it-17': { name: '信息技术概论模拟卷17', files: [{ name: '信息技术概论模拟卷17.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/信息技术概论模拟卷17.pdf', type: 'pdf' }, { name: '信息技术概论模拟卷17答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/信息技术概论模拟卷17答案.pdf', type: 'pdf' }] },
    'mock-it-18': { name: '信息技术概论模拟卷18', files: [{ name: '信息技术概论模拟卷18.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/信息技术概论模拟卷18.pdf', type: 'pdf' }, { name: '信息技术概论模拟卷18答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/信息技术概论模拟卷18答案.pdf', type: 'pdf' }] },
    'mock-it-19': { name: '信息技术概论模拟卷19', files: [{ name: '信息技术概论模拟卷19.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/信息技术概论模拟卷19.pdf', type: 'pdf' }, { name: '信息技术概论模拟卷19答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/信息技术概论模拟卷19答案.pdf', type: 'pdf' }] },
    'mock-it-20': { name: '信息技术概论模拟卷20', files: [{ name: '信息技术概论模拟卷20.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/信息技术概论模拟卷20.pdf', type: 'pdf' }, { name: '信息技术概论模拟卷20答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/信息技术概论模拟卷20答案.pdf', type: 'pdf' }] },

    // ===== 模拟题2 - 机构模拟题（成套）版本 =====
    'mock2-politics-1': { name: '24佳鑫诺政治模拟卷', files: [{ name: '24佳鑫诺政治模拟卷.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/政治/佳鑫诺/24佳鑫诺政治模拟卷.pdf', type: 'pdf' }, { name: '24佳鑫诺政治模拟卷答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/政治/佳鑫诺/24佳鑫诺政治模拟卷答案.pdf', type: 'pdf' }] },
    'mock2-politics-2': { name: '25佳鑫诺政治模拟卷', files: [{ name: '25佳鑫诺政治模拟卷.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/政治/佳鑫诺/25佳鑫诺政治模拟卷.pdf', type: 'pdf' }, { name: '25佳鑫诺政治模拟卷答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/政治/佳鑫诺/25佳鑫诺政治模拟卷答案.pdf', type: 'pdf' }] },
    'mock2-politics-3': { name: '26佳鑫诺政治模拟卷', files: [{ name: '26佳鑫诺政治模拟卷.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/政治/佳鑫诺/26佳鑫诺政治模拟卷.pdf', type: 'pdf' }, { name: '26佳鑫诺政治模拟卷答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/政治/佳鑫诺/26佳鑫诺政治模拟卷答案.pdf', type: 'pdf' }] },
    'mock2-politics-4': { name: '佳鑫诺超越营政治冲刺卷', files: [{ name: '佳鑫诺超越营政治冲刺卷.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/政治/佳鑫诺/佳鑫诺超越营政治冲刺卷.pdf', type: 'pdf' }, { name: '佳鑫诺超越营政治冲刺卷答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/政治/佳鑫诺/佳鑫诺超越营政治冲刺卷答案.pdf', type: 'pdf' }] },
    'mock2-politics-5': { name: '库课政治', files: [{ name: '库课政治.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/政治/库课/库课政治.pdf', type: 'pdf' }, { name: '库课政治.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/政治/库课/库课政治.pdf', type: 'pdf' }] },

    // 英语模拟题 1-20 机构模拟题（成套）
    'mock2-english-1': { name: '24佳鑫诺英语模拟卷', files: [{ name: '24佳鑫诺英语模拟卷.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/英语/佳鑫诺/24佳鑫诺英语模拟卷.pdf', type: 'pdf' }, { name: '24佳鑫诺英语模拟卷答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/英语/佳鑫诺/24佳鑫诺英语模拟卷答案.pdf', type: 'pdf' }] },
    'mock2-english-2': { name: '25佳鑫诺英语模拟卷', files: [{ name: '25佳鑫诺英语模拟卷.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/英语/佳鑫诺/25佳鑫诺英语模拟卷.pdf', type: 'pdf' }, { name: '25佳鑫诺英语模拟卷答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/英语/佳鑫诺/25佳鑫诺英语模拟卷答案.pdf', type: 'pdf' }] },
    'mock2-english-3': { name: '26佳鑫诺英语模拟卷', files: [{ name: '26佳鑫诺英语模拟卷.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/英语/佳鑫诺/26佳鑫诺英语模拟卷.pdf', type: 'pdf' }, { name: '26佳鑫诺英语模拟卷答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/英语/佳鑫诺/26佳鑫诺英语模拟卷答案.pdf', type: 'pdf' }] },
    'mock2-english-4': { name: '佳鑫诺超越营英语冲刺卷', files: [{ name: '佳鑫诺超越营英语冲刺卷.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/英语/佳鑫诺/佳鑫诺超越营英语冲刺卷.pdf', type: 'pdf' }, { name: '佳鑫诺超越营英语冲刺卷答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/英语/佳鑫诺/佳鑫诺超越营英语冲刺卷答案.pdf', type: 'pdf' }] },
    'mock2-english-5': { name: '库课英语', files: [{ name: '库课英语.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/英语/库课库课英语.pdf', type: 'pdf' }, { name: '', fileUrl: './zhuanshengben/', type: 'pdf' }] },
    'mock2-english-6': { name: '26佳鑫诺英语冲刺密卷1', files: [{ name: '26佳鑫诺英语冲刺密卷1.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/英语/佳鑫诺/26佳鑫诺英语冲刺密卷1.pdf', type: 'pdf' }, { name: '26佳鑫诺英语冲刺密卷1答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/英语/佳鑫诺/26佳鑫诺英语冲刺密卷1答案.pdf', type: 'pdf' }] },
    'mock2-english-7': { name: '26佳鑫诺英语冲刺密卷2', files: [{ name: '26佳鑫诺英语冲刺密卷2.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/英语/佳鑫诺/26佳鑫诺英语冲刺密卷2.pdf', type: 'pdf' }, { name: '26佳鑫诺英语冲刺密卷2答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/英语/佳鑫诺/26佳鑫诺英语冲刺密卷2答案.pdf', type: 'pdf' }] },
    'mock2-english-8': { name: '26佳鑫诺英语冲刺密卷3', files: [{ name: '26佳鑫诺英语冲刺密卷3.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/英语/佳鑫诺/26佳鑫诺英语冲刺密卷3.pdf', type: 'pdf' }, { name: '26佳鑫诺英语冲刺密卷3答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/英语/佳鑫诺/26佳鑫诺英语冲刺密卷3答案.pdf', type: 'pdf' }] },
    'mock2-english-9': { name: 'Molly英语模考押题卷3', files: [{ name: '26终版河北专升本英语模拟押题卷（三）.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/英语/Molly/26终版河北专升本英语模拟押题卷（三）.pdf', type: 'pdf' }, { name: '26终版河北专升本英语模拟押题卷（三）答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/英语/Molly/26终版河北专升本英语模拟押题卷（三）答案.pdf', type: 'pdf' }] },

    // 高数模拟题 1-20 机构模拟题（成套）
    'mock2-math-1': { name: '24佳鑫诺高数一模拟卷', files: [{ name: '24佳鑫诺高数一模拟卷.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/佳鑫诺/24佳鑫诺高数一模拟卷.pdf', type: 'pdf' }, { name: '24佳鑫诺高数一模拟卷答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/佳鑫诺/24佳鑫诺高数一模拟卷答案.pdf', type: 'pdf' }] },
    'mock2-math-2': { name: '25佳鑫诺高数一模拟卷', files: [{ name: '25佳鑫诺高数一模拟卷.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/佳鑫诺/25佳鑫诺高数一模拟卷.pdf', type: 'pdf' }, { name: '25佳鑫诺高数一模拟卷答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/佳鑫诺/25佳鑫诺高数一模拟卷答案.pdf', type: 'pdf' }] },
    'mock2-math-3': { name: '26佳鑫诺高数一模拟卷', files: [{ name: '26佳鑫诺高数一模拟卷.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/佳鑫诺/26佳鑫诺高数一模拟卷.pdf', type: 'pdf' }, { name: '26佳鑫诺高数一模拟卷答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/佳鑫诺/26佳鑫诺高数一模拟卷答案.pdf', type: 'pdf' }] },
    'mock2-math-4': { name: '26仿真模拟卷数一第一套', files: [{ name: '26仿真模拟卷数一第一套.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/仿真模拟卷/26仿真模拟卷数一第一套.pdf', type: 'pdf' }, { name: '26仿真模拟卷数一第一套答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/仿真模拟卷/26仿真模拟卷数一第一套答案.pdf', type: 'pdf' }] },
    'mock2-math-5': { name: '26仿真模拟卷数一第二套', files: [{ name: '26仿真模拟卷数一第二套.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/仿真模拟卷/26仿真模拟卷数一第二套.pdf', type: 'pdf' }, { name: '26仿真模拟卷数一第二套答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/仿真模拟卷/26仿真模拟卷数一第二套答案.pdf', type: 'pdf' }] },
    'mock2-math-6': { name: '26仿真模拟卷数一第三套', files: [{ name: '26仿真模拟卷数一第三套.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/仿真模拟卷/26仿真模拟卷数一第三套.pdf', type: 'pdf' }, { name: '26仿真模拟卷数一第三套答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/仿真模拟卷/26仿真模拟卷数一第三套答案.pdf', type: 'pdf' }] },
    'mock2-math-7': { name: '26仿真模拟卷数一第四套', files: [{ name: '26仿真模拟卷数一第四套.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/仿真模拟卷/26仿真模拟卷数一第四套.pdf', type: 'pdf' }, { name: '26仿真模拟卷数一第四套答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/仿真模拟卷/26仿真模拟卷数一第四套答案.pdf', type: 'pdf' }] },
    'mock2-math-8': { name: '佳鑫诺集训营综合演练数学12套', files: [{ name: '佳鑫诺集训营综合演练数学12套.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/佳鑫诺/佳鑫诺集训营综合演练数学12套.pdf', type: 'pdf' }, { name: '佳鑫诺集训营综合演练数学12套答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/佳鑫诺/佳鑫诺集训营综合演练数学12套答案.pdf', type: 'pdf' }] },
    'mock2-math-9': { name: '高等数学（上册）精选750题', files: [{ name: '高等数学（上册）精选750题.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/宋浩/高等数学（上册）精选750题.pdf', type: 'pdf' }, { name: '高等数学（上册）精选750题答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/宋浩/高等数学（上册）精选750题答案.pdf', type: 'pdf' }] },
    'mock2-math-10': { name: '2023 考研数学 复习全书・基础篇', files: [{ name: '2023 考研数学 复习全书・基础篇.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/李永乐/2023 考研数学 复习全书・基础篇.pdf', type: 'pdf' }, { name: '2023 考研数学 复习全书・基础篇答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/李永乐/2023 考研数学 复习全书・基础篇答案.pdf', type: 'pdf' }] },
    'mock2-math-11': { name: '2023数学基础过关660题习题册（数学一）', files: [{ name: '2023数学基础过关660题习题册（数学一）.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/李永乐/2023数学基础过关660题习题册（数学一）.pdf', type: 'pdf' }, { name: '2023数学基础过关660题答案册（数学一）.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/李永乐/2023数学基础过关660题答案册（数学一）.pdf', type: 'pdf' }] },
    'mock2-math-12': { name: '2023数学基础过关660题习题册（数学二）', files: [{ name: '2023数学基础过关660题习题册（数学二）.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/李永乐/2023数学基础过关660题习题册（数学二）.pdf', type: 'pdf' }, { name: '2023数学基础过关660题答案册（数学二）.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/李永乐/2023数学基础过关660题答案册（数学二）.pdf', type: 'pdf' }] },
    'mock2-math-13': { name: '第一章1-求函数的定义域', files: [{ name: '第一章1-求函数的定义域.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第一章1-求函数的定义域.pdf', type: 'pdf' }] },
    'mock2-math-14': { name: '第一章2-判断函数的同一性', files: [{ name: '第一章2-判断函数的同一性.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第一章2-判断函数的同一性.pdf', type: 'pdf' }] },
    'mock2-math-15': { name: '第一章3-函数的性质', files: [{ name: '第一章3-函数的性质.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第一章3-函数的性质.pdf', type: 'pdf' }] },
    'mock2-math-16': { name: '第一章4-函数的解析式', files: [{ name: '第一章4-函数的解析式.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第一章4-函数的解析式.pdf', type: 'pdf' }] },
    'mock2-math-17': { name: '第一章5-极限的计算', files: [{ name: '第一章5-极限的计算.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第一章5-极限的计算.pdf', type: 'pdf' }] },
    'mock2-math-18': { name: '第一章6-等价无穷小代换', files: [{ name: '第一章6-等价无穷小代换.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第一章6-等价无穷小代换.pdf', type: 'pdf' }] },
    'mock2-math-19': { name: '第一章7-两个重要极限', files: [{ name: '第一章7-两个重要极限.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第一章7-两个重要极限.pdf', type: 'pdf' }] },
    'mock2-math-20': { name: '第一章8-无穷小与无穷大', files: [{ name: '第一章8-无穷小与无穷大.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第一章8-无穷小与无穷大.pdf', type: 'pdf' }] },
    'mock2-math-21': { name: '第一章9-数列极限', files: [{ name: '第一章9-数列极限.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第一章9-数列极限.pdf', type: 'pdf' }] },
    'mock2-math-22': { name: '第一章10-函数的连续性', files: [{ name: '第一章10-函数的连续性.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第一章10-函数的连续性.pdf', type: 'pdf' }] },
    'mock2-math-23': { name: '第一章11-函数的间断点', files: [{ name: '第一章11-函数的间断点.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第一章11-函数的间断点.pdf', type: 'pdf' }] },
    'mock2-math-24': { name: '第二章1-导数的定义', files: [{ name: '第二章1-导数的定义.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第二章1-导数的定义.pdf', type: 'pdf' }] },
    'mock2-math-25': { name: '第二章2初等函数求导法 ', files: [{ name: '第二章2初等函数求导法 .pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第二章2初等函数求导法 .pdf', type: 'pdf' }] },
    'mock2-math-26': { name: '第二章4-参数方程的求导', files: [{ name: '第二章4-参数方程的求导.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第二章4-参数方程的求导.pdf', type: 'pdf' }] },
    'mock2-math-27': { name: '第二章5幂指函数和对数函数的求导', files: [{ name: '第二章5幂指函数和对数函数的求导.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第二章5幂指函数和对数函数的求导.pdf', type: 'pdf' }] },
    'mock2-math-28': { name: '第二章6-高阶导数的计算', files: [{ name: '第二章6-高阶导数的计算.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第二章6-高阶导数的计算.pdf', type: 'pdf' }] },
    'mock2-math-29': { name: '第二章7-微分的计算', files: [{ name: '第二章7-微分的计算.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第二章7-微分的计算.pdf', type: 'pdf' }] },
    'mock2-math-30': { name: '第二章8-导数的几何意义', files: [{ name: '第二章8-导数的几何意义.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第二章8-导数的几何意义.pdf', type: 'pdf' }] },
    'mock2-math-31': { name: '第二章9-可导、连续与极限存在的关系', files: [{ name: '第二章9-可导、连续与极限存在的关系.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第二章9-可导、连续与极限存在的关系.pdf', type: 'pdf' }] },
    'mock2-math-32': { name: '第二章10-中值定理', files: [{ name: '第二章10-中值定理.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第二章10-中值定理.pdf', type: 'pdf' }] },
    'mock2-math-33': { name: '第二章11-洛必达法则', files: [{ name: '第二章11-洛必达法则.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第二章11-洛必达法则.pdf', type: 'pdf' }] },
    'mock2-math-34': { name: '第二章12-单调性与极值', files: [{ name: '第二章12-单调性与极值.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第二章12-单调性与极值.pdf', type: 'pdf' }] },
    'mock2-math-35': { name: '第二章13-凹凸性与拐点', files: [{ name: '第二章13凹凸性与拐点.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第二章13凹凸性与拐点.pdf', type: 'pdf' }] },
    'mock2-math-36': { name: '第二章14最值', files: [{ name: '第二章14最值.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第二章14最值.pdf', type: 'pdf' }] },
    'mock2-math-37': { name: '第二章15曲线的渐近线', files: [{ name: '第二章15曲线的渐近线.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第二章15曲线的渐近线.pdf', type: 'pdf' }] },
    'mock2-math-38': { name: '第三章1-不定积分的概念与性质', files: [{ name: '第三章1-不定积分的概念与性质.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第三章1-不定积分的概念与性质.pdf', type: 'pdf' }] },
    'mock2-math-39': { name: '第三章2-不定积分的直接积分法', files: [{ name: '第三章2-不定积分的直接积分法.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第三章2-不定积分的直接积分法.pdf', type: 'pdf' }] },
    'mock2-math-40': { name: '第三章3-不定积分的第一类换元积分法（凑微分法）', files: [{ name: '第三章3-不定积分的第一类换元积分法（凑微分法）.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第三章3-不定积分的第一类换元积分法（凑微分法）.pdf', type: 'pdf' }] },
    'mock2-math-41': { name: '1.1 函数', files: [{ name: '1.1 函数.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/1.1 函数.pdf', type: 'pdf' }, { name: '1.1 函数.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/1.1 函数.pdf', type: 'pdf' }] },
    'mock2-math-42': { name: '1.2 极限', files: [{ name: '1.2 极限.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/1.2 极限.pdf', type: 'pdf' }, { name: '1.2 极限.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/1.2 极限.pdf', type: 'pdf' }] },
    'mock2-math-43': { name: '1.3 连续', files: [{ name: '1.3 连续.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/1.3 连续.pdf', type: 'pdf' }, { name: '1.3 连续.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/1.3 连续.pdf', type: 'pdf' }] },
    'mock2-math-44': { name: '2.1 导数的概念', files: [{ name: '2.1 导数的概念.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/2.1 导数的概念.pdf', type: 'pdf' }, { name: '2.1 导数的概念.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/2.1 导数的概念.pdf', type: 'pdf' }] },
    'mock2-math-45': { name: '2.2 一元函数的求导法则', files: [{ name: '2.2 一元函数的求导法则.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/2.2 一元函数的求导法则.pdf', type: 'pdf' }, { name: '2.2 一元函数的求导法则.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/2.2 一元函数的求导法则.pdf', type: 'pdf' }] },
    'mock2-math-46': { name: '2.3 高阶导数', files: [{ name: '2.3 高阶导数.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/2.3 高阶导数.pdf', type: 'pdf' }, { name: '2.3 高阶导数.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/2.3 高阶导数.pdf', type: 'pdf' }] },
    'mock2-math-47': { name: '2.4 隐函数及参数方程求导', files: [{ name: '2.4 隐函数及由参数方程所确定的函数的导数.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/2.4 隐函数及由参数方程所确定的函数的导数.pdf', type: 'pdf' }, { name: '2.4 隐函数求导.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/2.4 隐函数求导.pdf', type: 'pdf' }] },
    'mock2-math-48': { name: '2.5 函数的微分', files: [{ name: '2.5 函数的微分.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/2.5 函数的微分.pdf', type: 'pdf' }, { name: '2.5 微分.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/2.5 微分.pdf', type: 'pdf' }] },
    'mock2-math-49': { name: '2.6 微分中值定理', files: [{ name: '2.6 微分中值定理.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/2.6 微分中值定理.pdf', type: 'pdf' }, { name: '2.6 微分中值定理.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/2.6 微分中值定理.pdf', type: 'pdf' }] },
    'mock2-math-50': { name: '2.7 导数的应用', files: [{ name: '2.7 导数的应用_1.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/2.7 导数的应用_1.pdf', type: 'pdf' }, { name: '2.7 导数的应用_2.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/2.7 导数的应用_2.pdf', type: 'pdf' }, { name: '2.7 导数的应用_1.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/2.7 导数的应用_1.pdf', type: 'pdf' }, { name: '2.7 导数的应用_2.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/2.7 导数的应用_2.pdf', type: 'pdf' }] },
    'mock2-math-51': { name: '3.1 不定积分', files: [{ name: '3.1 不定积分_1.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/3.1 不定积分_1.pdf', type: 'pdf' }, { name: '3.1 不定积分_2.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/3.1 不定积分_2.pdf', type: 'pdf' }, { name: '3.1 不定积分_3.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/3.1 不定积分_3.pdf', type: 'pdf' }, { name: '3.1 不定积分_1.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/3.1 不定积分_1.pdf', type: 'pdf' }, { name: '3.1 不定积分_2.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/3.1 不定积分_2.pdf', type: 'pdf' }, { name: '3.1 不定积分_3.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/3.1 不定积分_3.pdf', type: 'pdf' }] },
    'mock2-math-52': { name: '3.2 定积分的概念与性质', files: [{ name: '3.2 定积分的概念与性质_3.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/3.2 定积分的概念与性质_3.pdf', type: 'pdf' }, { name: '3.2 定积分_345.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/3.2 定积分_345.pdf', type: 'pdf' }] },
    'mock2-math-53': { name: '3.2 定积分的概念与计算(一)', files: [{ name: '3.2 定积分的概念与计算_1.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/3.2 定积分的概念与计算_1.pdf', type: 'pdf' }, { name: '3.2 定积分_1.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/3.2 定积分_1.pdf', type: 'pdf' }] },
    'mock2-math-54': { name: '3.2 定积分的概念与计算(二)', files: [{ name: '3.2 定积分的概念与计算_2.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/3.2 定积分的概念与计算_2.pdf', type: 'pdf' }, { name: '3.2 定积分_2.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/3.2 定积分_2.pdf', type: 'pdf' }] },
    'mock2-math-55': { name: '3.3 广义积分', files: [{ name: '3.3 广义积分.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/3.3 广义积分.pdf', type: 'pdf' }, { name: '3.3 广义积分.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/3.3 广义积分.pdf', type: 'pdf' }] },
    'mock2-math-56': { name: '4.1 常微分方程的概念', files: [{ name: '4.1 常微分方程的概念.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/4.1 常微分方程的概念.pdf', type: 'pdf' }, { name: '4.1 微分方程概念.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/4.1 微分方程概念.pdf', type: 'pdf' }] },
    'mock2-math-57': { name: '4.2 一阶微分方程(一)', files: [{ name: '4.2 一阶微分方程_1.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/4.2 一阶微分方程_1.pdf', type: 'pdf' }, { name: '4.2 一阶微分方程_1.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/4.2 一阶微分方程_1.pdf', type: 'pdf' }] },
    'mock2-math-58': { name: '4.2 一阶微分方程(二)', files: [{ name: '4.2 一阶微分方程_2.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/4.2 一阶微分方程_2.pdf', type: 'pdf' }, { name: '4.2 一阶微分方程_2.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/4.2 一阶微分方程_2.pdf', type: 'pdf' }] },
    'mock2-math-59': { name: '4.4 二阶常系数线性微分方程(一)', files: [{ name: '4.4 二阶常系数线性微分方程_1.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/4.4 二阶常系数线性微分方程_1.pdf', type: 'pdf' }, { name: '4.4 二阶常系数线性微分方程.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/4.4 二阶常系数线性微分方程.pdf', type: 'pdf' }] },
    'mock2-math-60': { name: '4.4 二阶常系数线性微分方程(二)', files: [{ name: '4.4 二阶常系数线性微分方程_2.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/4.4 二阶常系数线性微分方程_2.pdf', type: 'pdf' }, { name: '4.4 二阶非齐次微分方程.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/4.4 二阶非齐次微分方程.pdf', type: 'pdf' }] },
    'mock2-math-61': { name: '6.1 多元函数的概念', files: [{ name: '6.1 多元函数的概念.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/6.1 多元函数的概念.pdf', type: 'pdf' }, { name: '6.1 多元函数的概念.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/6.1 多元函数的概念.pdf', type: 'pdf' }] },
    'mock2-math-62': { name: '6.2 偏导数与全微分', files: [{ name: '6.2 偏导数与全微分.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/6.2 偏导数与全微分.pdf', type: 'pdf' }, { name: '6.2 偏导数与全微分.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/6.2 偏导数与全微分.pdf', type: 'pdf' }] },
    'mock2-math-63': { name: '6.3 方向导数与梯度', files: [{ name: '6.3 方向导数与梯度.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/6.3 方向导数与梯度.pdf', type: 'pdf' }, { name: '6.3 方向导数与梯度.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/6.3 方向导数与梯度.pdf', type: 'pdf' }] },
    'mock2-math-64': { name: '6.5 多元函数的极值及应用', files: [{ name: '6.5 多元函数的极值及应用.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/6.5 多元函数的极值及应用.pdf', type: 'pdf' }, { name: '6.5 多元函数的极值与最值.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/6.5 多元函数的极值与最值.pdf', type: 'pdf' }] },
    'mock2-math-65': { name: '7.1 二重积分的概念以及性质', files: [{ name: '7.1 二重积分的概念以及性质.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/7.1 二重积分的概念以及性质.pdf', type: 'pdf' }, { name: '7.1 二重积分的概念及性质.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/7.1 二重积分的概念及性质.pdf', type: 'pdf' }] },
    'mock2-math-66': { name: '7.2 二重积分的计算(一)', files: [{ name: '7.2 二重积分的计算下.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/7.2 二重积分的计算下.pdf', type: 'pdf' }, { name: '7.2 二重积分的计算_1.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/7.2 二重积分的计算_1.pdf', type: 'pdf' }] },
    'mock2-math-67': { name: '7.2 二重积分的计算及应用', files: [{ name: '7.2 二重积分的计算及应用.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/7.2 二重积分的计算及应用.pdf', type: 'pdf' }, { name: '7.2 二重积分的计算_2.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/7.2 二重积分的计算_2.pdf', type: 'pdf' }] },
    'mock2-math-68': { name: '8.1 常数项级数的概念及性质', files: [{ name: '8.1 常数项级数的概念及性质.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/8.1 常数项级数的概念及性质.pdf', type: 'pdf' }, { name: '8.1 常数项级数.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/8.1 常数项级数.pdf', type: 'pdf' }] },
    'mock2-math-69': { name: '8.2 常数项级数的审敛法', files: [{ name: '8.2 常数项级数的审敛法.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/8.2 常数项级数的审敛法.pdf', type: 'pdf' }, { name: '8.2 常数项级数敛散性型的判断.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/8.2 常数项级数敛散性型的判断.pdf', type: 'pdf' }] },
    'mock2-math-70': { name: '高数习题集', files: [{ name: '高数习题集.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/高数习题集/高数习题集.pdf', type: 'pdf' }, { name: '高数习题集答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/高数习题集/高数习题集答案.pdf', type: 'pdf' }] },
    'mock2-math-71': { name: '专升本1000题', files: [{ name: '专升本1000题.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本1000题/专升本1000题.pdf', type: 'pdf' }, { name: '专升本1000题答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本1000题/专升本1000题答案.pdf', type: 'pdf' }] },

    // 信息技术模拟题 1-20 机构模拟题（成套）
    'mock2-it-1': { name: '26北方黑马信息技术概论模拟卷', files: [{ name: '26北方黑马信息技术概论模拟卷.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/北方黑马/26北方黑马信息技术概论模拟卷.pdf', type: 'pdf' }, { name: '26北方黑马信息技术概论模拟卷答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/北方黑马/26北方黑马信息技术概论模拟卷答案.pdf', type: 'pdf' }] },
    'mock2-it-2': { name: '不会算法-信息技术概论模拟卷1', files: [{ name: '不会算法-信息技术概论模拟卷1.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/不会算法/不会算法-信息技术概论模拟卷1.pdf', type: 'pdf' }] },
    'mock2-it-3': { name: '不会算法-信息技术概论模拟卷2', files: [{ name: '不会算法-信息技术概论模拟卷2.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/不会算法/不会算法-信息技术概论模拟卷2.pdf', type: 'pdf' }] },
    'mock2-it-4': { name: '不会算法-信息技术概论模拟卷3', files: [{ name: '不会算法-信息技术概论模拟卷3.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/不会算法/不会算法-信息技术概论模拟卷3.pdf', type: 'pdf' }] },
    'mock2-it-5': { name: '不会算法-信息技术概论模拟卷4', files: [{ name: '不会算法-信息技术概论模拟卷4.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/不会算法/不会算法-信息技术概论模拟卷4.pdf', type: 'pdf' }] },
    'mock2-it-6': { name: '不会算法-信息技术概论模拟卷5', files: [{ name: '不会算法-信息技术概论模拟卷5.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/不会算法/不会算法-信息技术概论模拟卷5.pdf', type: 'pdf' }] },
    'mock2-it-7': { name: '不会算法-信息技术概论模拟卷6', files: [{ name: '不会算法-信息技术概论模拟卷6.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/不会算法/不会算法-信息技术概论模拟卷6.pdf', type: 'pdf' }] },
    'mock2-it-8': { name: '不会算法-信息技术概论模拟卷7', files: [{ name: '不会算法-信息技术概论模拟卷7.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/不会算法/不会算法-信息技术概论模拟卷7.pdf', type: 'pdf' }] },
    'mock2-it-9': { name: '不会算法-信息技术概论模拟卷8', files: [{ name: '不会算法-信息技术概论模拟卷8.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/不会算法/不会算法-信息技术概论模拟卷8.pdf', type: 'pdf' }] },
    'mock2-it-10': { name: '不会算法-信息技术概论模拟卷9', files: [{ name: '不会算法-信息技术概论模拟卷9.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/不会算法/不会算法-信息技术概论模拟卷9.pdf', type: 'pdf' }] },
    'mock2-it-11': { name: '不会算法-信息技术概论模拟卷10', files: [{ name: '不会算法-信息技术概论模拟卷10.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/不会算法/不会算法-信息技术概论模拟卷10.pdf', type: 'pdf' }] },
    'mock2-it-12': { name: '不会算法-信息技术概论模拟卷11', files: [{ name: '不会算法-信息技术概论模拟卷11.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/不会算法/不会算法-信息技术概论模拟卷11.pdf', type: 'pdf' }] },
    'mock2-it-13': { name: '不会算法-信息技术概论模拟卷12', files: [{ name: '不会算法-信息技术概论模拟卷12.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/不会算法/不会算法-信息技术概论模拟卷12.pdf', type: 'pdf' }] },
    'mock2-it-14': { name: '不会算法-信息技术概论模拟卷13', files: [{ name: '不会算法-信息技术概论模拟卷13.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/不会算法/不会算法-信息技术概论模拟卷13.pdf', type: 'pdf' }] },
    'mock2-it-15': { name: '不会算法-信息技术概论模拟卷14', files: [{ name: '不会算法-信息技术概论模拟卷14.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/不会算法/不会算法-信息技术概论模拟卷14.pdf', type: 'pdf' }] },
    'mock2-it-16': { name: '不会算法-信息技术概论模拟卷15', files: [{ name: '不会算法-信息技术概论模拟卷15.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/不会算法/不会算法-信息技术概论模拟卷15.pdf', type: 'pdf' }] },
    'mock2-it-17': { name: '信息技术概论第一章', files: [{ name: '信息技术概论第一章.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/拜客网/信息技术概论第一章.pdf', type: 'pdf' }, { name: '信息技术概论第一至四章完整答案和解析.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/拜客网/信息技术概论第一至四章完整答案和解析.pdf', type: 'pdf' }] },
    'mock2-it-18': { name: '信息技术概论第二章', files: [{ name: '信息技术概论第二章.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/拜客网/信息技术概论第二章.pdf', type: 'pdf' }, { name: '信息技术概论第一至四章完整答案和解析.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/拜客网/信息技术概论第一至四章完整答案和解析.pdf', type: 'pdf' }] },
    'mock2-it-19': { name: '信息技术概论第三章', files: [{ name: '信息技术概论第三章.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/拜客网/信息技术概论第三章.pdf', type: 'pdf' }, { name: '信息技术概论第一至四章完整答案和解析.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/拜客网/信息技术概论第一至四章完整答案和解析.pdf', type: 'pdf' }] },
    'mock2-it-20': { name: '信息技术概论第四章', files: [{ name: '信息技术概论第四章.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/拜客网/信息技术概论第四章.pdf', type: 'pdf' }, { name: '信息技术概论第一至四章完整答案和解析.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/拜客网/信息技术概论第一至四章完整答案和解析.pdf', type: 'pdf' }] },
    'mock2-it-21': { name: '信息技术概论第五章', files: [{ name: '信息技术概论第五章.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/拜客网/信息技术概论第五章.pdf', type: 'pdf' }, { name: '信息技术概论第五章答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/拜客网/信息技术概论第五章答案.pdf', type: 'pdf' }] },
    'mock2-it-22': { name: '信息技术概论第六章', files: [{ name: '信息技术概论第六章.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/拜客网/信息技术概论第六章.pdf', type: 'pdf' }, { name: '信息技术概论第六章答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/拜客网/信息技术概论第六章答案.pdf', type: 'pdf' }] },
    'mock2-it-23': { name: '信息技术概论第七章', files: [{ name: '信息技术概论第七章.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/拜客网/信息技术概论第七章.pdf', type: 'pdf' }, { name: '信息技术概论第七章答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/拜客网/信息技术概论第七章答案.pdf', type: 'pdf' }] },
    'mock2-it-24': { name: '信息技术概论第八章', files: [{ name: '信息技术概论第八章.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/拜客网/信息技术概论第八章.pdf', type: 'pdf' }, { name: '信息技术概论第八章答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/拜客网/信息技术概论第八章答案.pdf', type: 'pdf' }] },
    'mock2-it-25': { name: '信息技术概论第九章', files: [{ name: '信息技术概论第九章.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/佳鑫诺/信息技术概论第九章.pdf', type: 'pdf' }, { name: '信息技术概论第九章答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/佳鑫诺/信息技术概论第九章答案.pdf', type: 'pdf' }] },
    'mock2-it-26': { name: '26佳鑫诺信息技术概论模拟卷', files: [{ name: '26佳鑫诺信息技术概论模拟卷.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/佳鑫诺/26佳鑫诺信息技术概论模拟卷.pdf', type: 'pdf' }, { name: '26佳鑫诺信息技术概论模拟卷答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/佳鑫诺/26佳鑫诺信息技术概论模拟卷答案.pdf', type: 'pdf' }] },

    // ===== 开背知识点 =====
    'kaibei-politics-1': {
        name: '非扫描版《马克思主义哲学原理》简答题',
        switchFile: {
            name: '非扫描版《马克思主义哲学原理》简答题.pdf',
            fileUrl: './zhuanshengben/专升本题背资料/开背知识点/政治/非扫描版《马克思主义哲学原理》简答题.pdf',
            type: 'pdf'
        },
        files: [
            {
                name: '扫描版《马克思主义哲学原理》简答题.pdf',
                fileUrl: './zhuanshengben/专升本题背资料/开背知识点/政治/扫描版《马克思主义哲学原理》简答题.pdf',
                type: 'pdf'
            }
        ]
    },

    'kaibei-politics-2': {
        name: '扫描版《毛泽东思想和中国特色社会主义理论体系概论》简答题',
        switchFile: {
            name: '非扫描版《毛泽东思想和中国特色社会主义理论体系概论》简答题.pdf',
            fileUrl: './zhuanshengben/专升本题背资料/开背知识点/政治/非扫描版《毛泽东思想和中国特色社会主义理论体系概论》简答题.pdf',
            type: 'pdf'
        },
        files: [
            {
                name: '扫描版《毛泽东思想和中国特色社会主义理论体系概论》简答题.pdf',
                fileUrl: './zhuanshengben/专升本题背资料/开背知识点/政治/扫描版《毛泽东思想和中国特色社会主义理论体系概论》简答题.pdf',
                type: 'pdf'
            }
        ]
    },

    'kaibei-politics-3': {
        name: '扫描版《习近平新时代中国特色社会主义思想概论》简答题',
        switchFile: {
            name: '非扫描版《习近平新时代中国特色社会主义思想概论》简答题.pdf',
            fileUrl: './zhuanshengben/专升本题背资料/开背知识点/政治/非扫描版《习近平新时代中国特色社会主义思想概论》简答题.pdf',
            type: 'pdf'
        },
        files: [
            {
                name: '扫描版《习近平新时代中国特色社会主义思想概论》简答题.pdf',
                fileUrl: './zhuanshengben/专升本题背资料/开背知识点/政治/扫描版《习近平新时代中国特色社会主义思想概论》简答题.pdf',
                type: 'pdf'
            }
        ]
    },

    'kaibei-english-1': { name: '英语开背知识点1', files: [{ name: '英语开背知识点1.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/英语/英语开背知识点1.pdf', type: 'pdf' }] },
    'kaibei-english-2': { name: '英语开背知识点2', files: [{ name: '英语开背知识点2.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/英语/英语开背知识点2.pdf', type: 'pdf' }] },
    'kaibei-english-3': { name: '英语开背知识点3', files: [{ name: '英语开背知识点3.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/英语/英语开背知识点3.pdf', type: 'pdf' }] },
    'kaibei-english-4': { name: '英语开背知识点4', files: [{ name: '英语开背知识点4.pdf', fileUrl: './zhuanshengben/专升本题背资料/開背知识点/英语/英语開背知識點4.pdf', type: 'pdf' }] },
    'kaibei-english-5': { name: '英语开背知识点5', files: [{ name: '英语开背知识点5.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/英语/英语开背知识点5.pdf', type: 'pdf' }] },
    'kaibei-english-6': { name: '英语开背知识点6', files: [{ name: '英语开背知识点6.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/英语/英语开背知识点6.pdf', type: 'pdf' }] },
    'kaibei-english-7': { name: '英语开背知识点7', files: [{ name: '英语开背知识点7.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/英语/英语开背知识点7.pdf', type: 'pdf' }] },
    'kaibei-english-8': { name: '英语开背知识点8', files: [{ name: '英语开背知识点8.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/英语/英语开背知识点8.pdf', type: 'pdf' }] },
    'kaibei-english-9': { name: '英语开背知识点9', files: [{ name: '英语开背知识点9.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/英语/英语开背知识点9.pdf', type: 'pdf' }] },
    'kaibei-english-10': { name: '英语开背知识点10', files: [{ name: '英语开背知识点10.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/英语/英语开背知识点10.pdf', type: 'pdf' }] },
    'kaibei-english-11': { name: '英语开背知识点11', files: [{ name: '英语开背知识点11.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/英语/英语开背知识点11.pdf', type: 'pdf' }] },
    'kaibei-english-12': { name: '英语开背知识点12', files: [{ name: '英语开背知识点12.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/英语/英语开背知识点12.pdf', type: 'pdf' }] },
    'kaibei-english-13': { name: '英语开背知识点13', files: [{ name: '英语开背知识点13.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/英语/英语开背知识点13.pdf', type: 'pdf' }] },
    'kaibei-english-14': { name: '英语开背知识点14', files: [{ name: '英语开背知识点14.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/英语/英语开背知识点14.pdf', type: 'pdf' }] },
    'kaibei-english-15': { name: '英语开背知识点15', files: [{ name: '英语开背知识点15.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/英语/英语开背知识点15.pdf', type: 'pdf' }] },

    'kaibei-math-1': { name: '高数开背知识点1', files: [{ name: '高数开背知识点1.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/高数一/高数开背知识点1.pdf', type: 'pdf' }] },
    'kaibei-math-2': { name: '高数开背知识点2', files: [{ name: '高数开背知识点2.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/高数一/高数开背知识点2.pdf', type: 'pdf' }] },
    'kaibei-math-3': { name: '高数开背知识点3', files: [{ name: '高数开背知识点3.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/高数一/高数开背知识点3.pdf', type: 'pdf' }] },
    'kaibei-math-4': { name: '高数开背知识点4', files: [{ name: '高数开背知识点4.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/高数一/高数开背知识点4.pdf', type: 'pdf' }] },
    'kaibei-math-5': { name: '高数开背知识点5', files: [{ name: '高数开背知识点5.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/高数一/高数开背知识点5.pdf', type: 'pdf' }] },
    'kaibei-math-6': { name: '高数开背知识点6', files: [{ name: '高数开背知识点6.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/高数一/高数开背知识点6.pdf', type: 'pdf' }] },
    'kaibei-math-7': { name: '高数开背知识点7', files: [{ name: '高数开背知识点7.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/高数一/高数开背知识点7.pdf', type: 'pdf' }] },
    'kaibei-math-8': { name: '高数开背知识点8', files: [{ name: '高数开背知识点8.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/高数一/高数开背知识点8.pdf', type: 'pdf' }] },
    'kaibei-math-9': { name: '高数开背知识点9', files: [{ name: '高数开背知识点9.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/高数一/高数开背知识点9.pdf', type: 'pdf' }] },
    'kaibei-math-10': { name: '高数开背知识点10', files: [{ name: '高数开背知识点10.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/高数一/高数开背知识点10.pdf', type: 'pdf' }] },
    'kaibei-math-11': { name: '高数开背知识点11', files: [{ name: '高数开背知识点11.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/高数一/高数开背知识点11.pdf', type: 'pdf' }] },
    'kaibei-math-12': { name: '高数开背知识点12', files: [{ name: '高数开背知识点12.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/高数一/高数开背知识点12.pdf', type: 'pdf' }] },

    'kaibei-it-1': { name: '信息技术概论知识点汇总', files: [{ name: '信息技术概论知识点汇总.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/信息技术概论/信息技术概论知识点汇总.pdf', type: 'pdf' }] },
    'kaibei-it-2': { name: '信息技术开背知识点2', files: [{ name: '信息技术概论开背知识点2.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/信息技术概论/信息技术概论开背知识点2.pdf', type: 'pdf' }] },
    'kaibei-it-3': { name: '信息技术开背知识点3', files: [{ name: '信息技术概论开背知识点3.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/信息技术概论/信息技术概论开背知识点3.pdf', type: 'pdf' }] },
    'kaibei-it-4': { name: '信息技术开背知识点4', files: [{ name: '信息技术概论开背知识点4.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/信息技术概论/信息技术概论开背知识点4.pdf', type: 'pdf' }] },
    'kaibei-it-5': { name: '信息技术开背知识点5', files: [{ name: '信息技术概论开背知识点5.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/信息技术概论/信息技术概论开背知识点5.pdf', type: 'pdf' }] },

    // ===== 开背知识点 - 图片版 =====
    'kaibei-politics-png-1': { name: '政治开背知识点1（图片）', files: [{ name: '政治开背知识点1.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/政治/政治开背知识点1.png', type: 'png' }] },
    'kaibei-politics-png-2': { name: '政治开背知识点2（图片）', files: [{ name: '政治开背知识点2.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/政治/政治开背知识点2.png', type: 'png' }] },
    'kaibei-politics-png-3': { name: '政治开背知识点3（图片）', files: [{ name: '政治开背知识点3.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/政治/政治开背知识点3.png', type: 'png' }] },
    'kaibei-politics-png-4': { name: '政治开背知识点4（图片）', files: [{ name: '政治开背知识点4.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/政治/政治开背知识点4.png', type: 'png' }] },
    'kaibei-politics-png-5': { name: '政治开背知识点5（图片）', files: [{ name: '政治开背知识点5.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/政治/政治开背知识点5.png', type: 'png' }] },
    'kaibei-politics-png-6': { name: '政治开背知识点6（图片）', files: [{ name: '政治开背知识点6.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/政治/政治开背知识点6.png', type: 'png' }] },
    'kaibei-politics-png-7': { name: '政治开背知识点7（图片）', files: [{ name: '政治开背知识点7.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/政治/政治开背知识点7.png', type: 'png' }] },
    'kaibei-politics-png-8': { name: '政治开背知识点8（图片）', files: [{ name: '政治开背知识点8.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/政治/政治开背知识点8.png', type: 'png' }] },

    'kaibei-english-png-1': { name: '英语开背知识点1（图片）', files: [{ name: '英语开背知识点1.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/英语/英语开背知识点1.png', type: 'png' }] },
    'kaibei-english-png-2': { name: '英语开背知识点2（图片）', files: [{ name: '英语开背知识点2.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/英语/英语开背知识点2.png', type: 'png' }] },
    'kaibei-english-png-3': { name: '英语开背知识点3（图片）', files: [{ name: '英语开背知识点3.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/英语/英语开背知识点3.png', type: 'png' }] },
    'kaibei-english-png-4': { name: '英语开背知识点4（图片）', files: [{ name: '英语开背知识点4.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/英语/英语开背知识点4.png', type: 'png' }] },
    'kaibei-english-png-5': { name: '英语开背知识点5（图片）', files: [{ name: '英语开背知识点5.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/英语/英语开背知识点5.png', type: 'png' }] },
    'kaibei-english-png-6': { name: '英语开背知识点6（图片）', files: [{ name: '英语开背知识点6.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/英语/英语开背知识点6.png', type: 'png' }] },
    'kaibei-english-png-7': { name: '英语开背知识点7（图片）', files: [{ name: '英语开背知识点7.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/英语/英语开背知识点7.png', type: 'png' }] },
    'kaibei-english-png-8': { name: '英语开背知识点8（图片）', files: [{ name: '英语开背知识点8.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/英语/英语开背知识点8.png', type: 'png' }] },
    'kaibei-english-png-9': { name: '英语开背知识点9（图片）', files: [{ name: '英语开背知识点9.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/英语/英语开背知识点9.png', type: 'png' }] },
    'kaibei-english-png-10': { name: '英语开背知识点10（图片）', files: [{ name: '英语开背知识点10.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/英语/英语开背知识点10.png', type: 'png' }] },
    'kaibei-english-png-11': { name: '英语开背知识点11（图片）', files: [{ name: '英语开背知识点11.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/英语/英语开背知识点11.png', type: 'png' }] },
    'kaibei-english-png-12': { name: '英语开背知识点12（图片）', files: [{ name: '英语开背知识点12.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/英语/英语开背知识点12.png', type: 'png' }] },
    'kaibei-english-png-13': { name: '英语开背知识点13（图片）', files: [{ name: '英语开背知识点13.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/英语/英语开背知识点13.png', type: 'png' }] },
    'kaibei-english-png-14': { name: '英语开背知识点14（图片）', files: [{ name: '英语开背知识点14.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/英语/英语开背知识点14.png', type: 'png' }] },
    'kaibei-english-png-15': { name: '英语开背知识点15（图片）', files: [{ name: '英语开背知识点15.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/英语/英语开背知识点15.png', type: 'png' }] },

    'kaibei-math-png-1': { name: '高数开背知识点1（图片）', files: [{ name: '高数开背知识点1.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/高数一/高数开背知识点1.png', type: 'png' }] },
    'kaibei-math-png-2': { name: '高数开背知识点2（图片）', files: [{ name: '高数开背知识点2.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/高数一/高数开背知识点2.png', type: 'png' }] },
    'kaibei-math-png-3': { name: '高数开背知识点3（图片）', files: [{ name: '高数开背知识点3.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/高数一/高数开背知识点3.png', type: 'png' }] },
    'kaibei-math-png-4': { name: '高数开背知识点4（图片）', files: [{ name: '高数开背知识点4.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/高数一/高数开背知识点4.png', type: 'png' }] },
    'kaibei-math-png-5': { name: '高数开背知识点5（图片）', files: [{ name: '高数开背知识点5.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/高数一/高数开背知识点5.png', type: 'png' }] },
    'kaibei-math-png-6': { name: '高数开背知识点6（图片）', files: [{ name: '高数开背知识点6.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/高数一/高数开背知识点6.png', type: 'png' }] },
    'kaibei-math-png-7': { name: '高数开背知识点7（图片）', files: [{ name: '高数开背知识点7.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/高数一/高数开背知识点7.png', type: 'png' }] },
    'kaibei-math-png-8': { name: '高数开背知识点8（图片）', files: [{ name: '高数开背知识点8.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/高数一/高数开背知识点8.png', type: 'png' }] },
    'kaibei-math-png-9': { name: '高数开背知识点9（图片）', files: [{ name: '高数开背知识点9.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/高数一/高数开背知识点9.png', type: 'png' }] },
    'kaibei-math-png-10': { name: '高数开背知识点10（图片）', files: [{ name: '高数开背知识点10.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/高数一/高数开背知识点10.png', type: 'png' }] },
    'kaibei-math-png-11': { name: '高数开背知识点11（图片）', files: [{ name: '高数开背知识点11.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/高数一/高数开背知识点11.png', type: 'png' }] },
    'kaibei-math-png-12': { name: '高数开背知识点12（图片）', files: [{ name: '高数开背知识点12.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/高数一/高数开背知识点12.png', type: 'png' }] },

    'kaibei-it-png-1': { name: '信息技术概论知识点汇总（图片）', files: [{ name: '信息技术概论知识点汇总.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/信息技术概论/信息技术概论知识点汇总.png', type: 'png' }] },
    'kaibei-it-png-2': { name: '信息技术开背知识点2（图片）', files: [{ name: '信息技术开背知识点2.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/信息技术概论/信息技术概论开背知识点2.png', type: 'png' }] },

    'ai-tools': {
        name: '国产AI对比',
        files: [
            {
                name: 'AI工具对比-详细评测.pdf',
                fileUrl: './国产AI对比/AI工具对比-详细评测.pdf',
                type: 'pdf'
            }
        ]
    }
};