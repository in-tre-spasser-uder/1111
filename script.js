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

    // ===== 模拟题 - 静态定义，每科20套 =====
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

    // 信息技术模拟题 1-20
    'mock-it-1': { name: '信息技术模拟卷1', files: [{ name: '信息技术模拟卷1.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷1.pdf', type: 'pdf' }, { name: '信息技术模拟卷1答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷1答案.pdf', type: 'pdf' }] },
    'mock-it-2': { name: '信息技术模拟卷2', files: [{ name: '信息技术模拟卷2.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷2.pdf', type: 'pdf' }, { name: '信息技术模拟卷2答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷2答案.pdf', type: 'pdf' }] },
    'mock-it-3': { name: '信息技术模拟卷3', files: [{ name: '信息技术模拟卷3.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷3.pdf', type: 'pdf' }, { name: '信息技术模拟卷3答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷3答案.pdf', type: 'pdf' }] },
    'mock-it-4': { name: '信息技术模拟卷4', files: [{ name: '信息技术模拟卷4.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷4.pdf', type: 'pdf' }, { name: '信息技术模拟卷4答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷4答案.pdf', type: 'pdf' }] },
    'mock-it-5': { name: '信息技术模拟卷5', files: [{ name: '信息技术模拟卷5.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷5.pdf', type: 'pdf' }, { name: '信息技术模拟卷5答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷5答案.pdf', type: 'pdf' }] },
    'mock-it-6': { name: '信息技术模拟卷6', files: [{ name: '信息技术模拟卷6.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷6.pdf', type: 'pdf' }, { name: '信息技术模拟卷6答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷6答案.pdf', type: 'pdf' }] },
    'mock-it-7': { name: '信息技术模拟卷7', files: [{ name: '信息技术模拟卷7.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷7.pdf', type: 'pdf' }, { name: '信息技术模拟卷7答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷7答案.pdf', type: 'pdf' }] },
    'mock-it-8': { name: '信息技术模拟卷8', files: [{ name: '信息技术模拟卷8.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷8.pdf', type: 'pdf' }, { name: '信息技术模拟卷8答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷8答案.pdf', type: 'pdf' }] },
    'mock-it-9': { name: '信息技术模拟卷9', files: [{ name: '信息技术模拟卷9.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷9.pdf', type: 'pdf' }, { name: '信息技术模拟卷9答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷9答案.pdf', type: 'pdf' }] },
    'mock-it-10': { name: '信息技术模拟卷10', files: [{ name: '信息技术模拟卷10.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷10.pdf', type: 'pdf' }, { name: '信息技术模拟卷10答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷10答案.pdf', type: 'pdf' }] },
    'mock-it-11': { name: '信息技术模拟卷11', files: [{ name: '信息技术模拟卷11.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷11.pdf', type: 'pdf' }, { name: '信息技术模拟卷11答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷11答案.pdf', type: 'pdf' }] },
    'mock-it-12': { name: '信息技术模拟卷12', files: [{ name: '信息技术模拟卷12.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷12.pdf', type: 'pdf' }, { name: '信息技术模拟卷12答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷12答案.pdf', type: 'pdf' }] },
    'mock-it-13': { name: '信息技术模拟卷13', files: [{ name: '信息技术模拟卷13.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷13.pdf', type: 'pdf' }, { name: '信息技术模拟卷13答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷13答案.pdf', type: 'pdf' }] },
    'mock-it-14': { name: '信息技术模拟卷14', files: [{ name: '信息技术模拟卷14.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷14.pdf', type: 'pdf' }, { name: '信息技术模拟卷14答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷14答案.pdf', type: 'pdf' }] },
    'mock-it-15': { name: '信息技术模拟卷15', files: [{ name: '信息技术模拟卷15.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷15.pdf', type: 'pdf' }, { name: '信息技术模拟卷15答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷15答案.pdf', type: 'pdf' }] },
    'mock-it-16': { name: '信息技术模拟卷16', files: [{ name: '信息技术模拟卷16.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷16.pdf', type: 'pdf' }, { name: '信息技术模拟卷16答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷16答案.pdf', type: 'pdf' }] },
    'mock-it-17': { name: '信息技术模拟卷17', files: [{ name: '信息技术模拟卷17.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷17.pdf', type: 'pdf' }, { name: '信息技术模拟卷17答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷17答案.pdf', type: 'pdf' }] },
    'mock-it-18': { name: '信息技术模拟卷18', files: [{ name: '信息技术模拟卷18.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷18.pdf', type: 'pdf' }, { name: '信息技术模拟卷18答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷18答案.pdf', type: 'pdf' }] },
    'mock-it-19': { name: '信息技术模拟卷19', files: [{ name: '信息技术模拟卷19.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷19.pdf', type: 'pdf' }, { name: '信息技术模拟卷19答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷19答案.pdf', type: 'pdf' }] },
    'mock-it-20': { name: '信息技术模拟卷20', files: [{ name: '信息技术模拟卷20.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷20.pdf', type: 'pdf' }, { name: '信息技术模拟卷20答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术模拟卷20答案.pdf', type: 'pdf' }] },

    // ===== 开背知识点 - 静态定义，每科3个（无答案） =====
    'kaibei-politics-1': { name: '政治开背知识点1', files: [{ name: '政治开背知识点1.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/政治/政治开背知识点1.pdf', type: 'pdf' }] },
    'kaibei-politics-2': { name: '政治开背知识点2', files: [{ name: '政治开背知识点2.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/政治/政治开背知识点2.pdf', type: 'pdf' }] },
    'kaibei-politics-3': { name: '政治开背知识点3', files: [{ name: '政治开背知识点3.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/政治/政治开背知识点3.pdf', type: 'pdf' }] },
    'kaibei-politics-4': { name: '政治开背知识点4', files: [{ name: '政治开背知识点4.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/政治/政治开背知识点4.pdf', type: 'pdf' }] },
    'kaibei-politics-5': { name: '政治开背知识点5', files: [{ name: '政治开背知识点5.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/政治/政治开背知识点5.pdf', type: 'pdf' }] },
    'kaibei-politics-6': { name: '政治开背知识点6', files: [{ name: '政治开背知识点6.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/政治/政治开背知识点6.pdf', type: 'pdf' }] },
    'kaibei-politics-7': { name: '政治开背知识点7', files: [{ name: '政治开背知识点7.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/政治/政治开背知识点7.pdf', type: 'pdf' }] },

    'kaibei-english-1': { name: '英语开背知识点1', files: [{ name: '英语开背知识点1.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/英语/英语开背知识点1.pdf', type: 'pdf' }] },
    'kaibei-english-2': { name: '英语开背知识点2', files: [{ name: '英语开背知识点2.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/英语/英语开背知识点2.pdf', type: 'pdf' }] },
    'kaibei-english-3': { name: '英语开背知识点3', files: [{ name: '英语开背知识点3.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/英语/英语开背知识点3.pdf', type: 'pdf' }] },

    'kaibei-math-1': { name: '高数开背知识点1', files: [{ name: '高数开背知识点1.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/高数一/高数开背知识点1.pdf', type: 'pdf' }] },
    'kaibei-math-2': { name: '高数开背知识点2', files: [{ name: '高数开背知识点2.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/高数一/高数开背知识点2.pdf', type: 'pdf' }] },
    'kaibei-math-3': { name: '高数开背知识点3', files: [{ name: '高数开背知识点3.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/高数一/高数开背知识点3.pdf', type: 'pdf' }] },

    'kaibei-it-1': { name: '信息技术开背知识点1', files: [{ name: '信息技术开背知识点1.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/信息技术概论/信息技术开背知识点1.pdf', type: 'pdf' }] },
    'kaibei-it-2': { name: '信息技术开背知识点2', files: [{ name: '信息技术开背知识点2.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/信息技术概论/信息技术开背知识点2.pdf', type: 'pdf' }] },
    'kaibei-it-3': { name: '信息技术开背知识点3', files: [{ name: '信息技术开背知识点3.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/信息技术概论/信息技术开背知识点3.pdf', type: 'pdf' }] }
};

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

// 添加fixed-open类的样式
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

// 初始化
function init() {
    console.log('初始化静态版本...');

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

    console.log('初始化完成，fileData包含', Object.keys(fileData).length, '个条目');
}

// 启动初始化
init();