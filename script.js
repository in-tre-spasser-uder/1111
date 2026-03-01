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

    // 信息技术概论模拟题 1-20
    'mock-it-1': { name: '信息技术概论模拟卷1', files: [{ name: '信息技术概论模拟卷1.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概论模拟卷1.pdf', type: 'pdf' }, { name: '信息技术概论模拟卷1答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概论模拟卷1答案.pdf', type: 'pdf' }] },
    'mock-it-2': { name: '信息技术概论模拟卷2', files: [{ name: '信息技术概论模拟卷2.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概论模拟卷2.pdf', type: 'pdf' }, { name: '信息技术概论模拟卷2答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概论模拟卷2答案.pdf', type: 'pdf' }] },
    'mock-it-3': { name: '信息技术概论模拟卷3', files: [{ name: '信息技术概论模拟卷3.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概论模拟卷3.pdf', type: 'pdf' }, { name: '信息技术概论模拟卷3答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概论模拟卷3答案.pdf', type: 'pdf' }] },
    'mock-it-4': { name: '信息技术概论模拟卷4', files: [{ name: '信息技术概论模拟卷4.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概论模拟卷4.pdf', type: 'pdf' }, { name: '信息技术概论模拟卷4答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概论模拟卷4答案.pdf', type: 'pdf' }] },
    'mock-it-5': { name: '信息技术概论模拟卷5', files: [{ name: '信息技术概论模拟卷5.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概论模拟卷5.pdf', type: 'pdf' }, { name: '信息技术概论模拟卷5答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概括略的题目和答案.txt', type: 'txt' }] },
    "mock-it-6": {
        "name": "信息技概论模拟卷6",
        "files": [
            {
                "name": "信息技概论模拟卷6.pdf",
                "fileUrl": "./zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概论模拟卷6.pdf",
                "type": "pdf"
            },
            {
                "name": "信息技概论模拟卷6答案.pdf",
                "fileUrl": "./zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概论模拟卷6答案.pdf",
                "type": "pdf"
            }
        ]
    },
    "mock-it-7": {
        "name": "信息技概论模拟卷7",
        "files": [
            {
                "name": "信息技概论模拟卷7.pdf",
                "fileUrl": "./zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概论模拟卷7.pdf",
                "type": "pdf"
            },
            {
                "name": "信息技概论模拟卷7答案.pdf",
                "fileUrl": "./zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概论模拟卷7答案.pdf",
                "type": "pdf"
            }
        ]
    },
    // ... (other mock-it entries would be similarly updated)

    'mock-it-12': { name: '信息技术概论模拟卷12', files: [{ name: '信息技术概论模拟卷12.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概论模拟卷12.pdf', type: 'pdf' }, { name: '信息技术概论模拟卷12答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概论模拟卷12答案.pdf', type: 'pdf' }] },
    "mock-it-13": {
        "name": "信息技概论模拟卷13",
        "files": [
            {
                "name": "信息技术概论模拟卷13.pdf",
                "fileUrl": "./zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概论模拟卷13.pdf",
                "type": "pdf"
            },
            {
                "name": "信息技术概论模拟卷13答案.pdf",
                "fileUrl": "./zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概论模拟卷13答案.pdf",
                "type": "pdf"
            }
        ]
    },
    "mock-it-14": {
        "name": "信息技术概论模拟卷14",
        "files": [
            {
                "name": "信息技术概论模拟卷14.pdf",
                "fileUrl": "./zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概论模拟卷14.pdf",
                "type": "pdf"
            },
            {
                "name": "信息技术概论模拟卷14答案.pdf",
                "fileUrl": "./zhuanshengben/专升本题背资料/模拟题/信息技术概论/信息技术概论模拟卷14答案.pdf",
                "type": "pdf"
            }
        ]
    },
    // ... (其余条目保持一致格式)

    'mock-it-17': { name: '信息技术概论模拟卷17', files: [{ name: '信息技术概论模拟卷17.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/信息技术概论模拟卷17.pdf', type: 'pdf' }, { name: '信息技术概论模拟卷17答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/信息技术概论模拟卷17答案.pdf', type: 'pdf' }] },
    'mock-it-18': { name: '信息技术概论模拟卷18', files: [{ name: '信息技术概论模拟卷18.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/信息技术概论模拟卷18.pdf', type: 'pdf' }, { name: '信息技术概论模拟卷18答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/信息技术概论模拟卷18答案.pdf', type: 'pdf' }] },
    'mock-it-19': { name: '信息技术概论模拟卷19', files: [{ name: '信息技术概论模拟卷19.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/信息技术概论模拟卷19.pdf', type: 'pdf' }, { name: '信息技术概论模拟卷19答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/信息技术概论模拟卷19答案.pdf', type: 'pdf' }] },
    'mock-it-20': { name: '信息技术概论模拟卷20', files: [{ name: '信息技术概论模拟卷20.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/信息技术概论模拟卷20.pdf', type: 'pdf' }, { name: '信息技术概论模拟卷20答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/信息技术概论模拟卷20答案.pdf', type: 'pdf' }] },

    // ===== 模拟题2 - 机构模拟题（成套）版本 =====
    // 政治模拟题 1-20 机构模拟题（成套）
    'mock2-politics-1': { name: '24佳鑫诺政治模拟卷', files: [{ name: '24佳鑫诺政治模拟卷.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/政治/佳鑫诺/24佳鑫诺政治模拟卷.pdf', type: 'pdf' }, { name: '24佳鑫诺政治模拟卷答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/政治/佳鑫诺/24佳鑫诺政治模拟卷答案.pdf', type: 'pdf' }] },
    'mock2-politics-2': { name: '25佳鑫诺政治模拟卷', files: [{ name: '25佳鑫诺政治模拟卷.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/政治/佳鑫诺/25佳鑫诺政治模拟卷.pdf', type: 'pdf' }, { name: '25佳鑫诺政治模拟卷答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/政治/佳鑫诺/25佳鑫诺政治模拟卷答案.pdf', type: 'pdf' }] },
    'mock2-politics-3': { name: '26佳鑫诺政治模拟卷', files: [{ name: '26佳鑫诺政治模拟卷.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/政治/佳鑫诺/26佳鑫诺政治模拟卷.pdf', type: 'pdf' }, { name: '26佳鑫诺政治模拟卷答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/政治/佳鑫诺/26佳鑫诺政治模拟卷答案.pdf', type: 'pdf' }] },
    'mock2-politics-4': { name: '佳鑫诺超越营政治冲刺卷', files: [{ name: '佳鑫诺超越营政治冲刺卷.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/政治/佳鑫诺/佳鑫诺超越营政治冲刺卷.pdf', type: 'pdf' }, { name: '佳鑫诺超越营政治冲刺卷答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/政治/佳鑫诺/佳鑫诺超越营政治冲刺卷答案.pdf', type: 'pdf' }] },
    'mock2-politics-5': { name: '库课政治', files: [{ name: '库课政治.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/政治/库课政治.pdf', type: 'pdf' }, { name: '库课政治.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/政治/库课政治.pdf', type: 'pdf' }] },
    // ... 继续添加4-20，按照相同格式，把fileUrl中的路径改为多一层 "机构模拟题（成套）/"

    // 英语模拟题 1-20 机构模拟题（成套）
    'mock2-english-1': { name: '24佳鑫诺英语模拟卷', files: [{ name: '24佳鑫诺英语模拟卷.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/英语/佳鑫诺/24佳鑫诺英语模拟卷.pdf', type: 'pdf' }, { name: '24佳鑫诺英语模拟卷答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/英语/佳鑫诺/24佳鑫诺英语模拟卷答案.pdf', type: 'pdf' }] },
    'mock2-english-2': { name: '25佳鑫诺英语模拟卷', files: [{ name: '25佳鑫诺英语模拟卷.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/英语/佳鑫诺/25佳鑫诺英语模拟卷.pdf', type: 'pdf' }, { name: '25佳鑫诺英语模拟卷答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/英语/佳鑫诺/25佳鑫诺英语模拟卷答案.pdf', type: 'pdf' }] },
    'mock2-english-3': { name: '26佳鑫诺英语模拟卷', files: [{ name: '26佳鑫诺英语模拟卷.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/英语/佳鑫诺/26佳鑫诺英语模拟卷.pdf', type: 'pdf' }, { name: '26佳鑫诺英语模拟卷答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/英语/佳鑫诺/26佳鑫诺英语模拟卷答案.pdf', type: 'pdf' }] },
    'mock2-english-4': { name: '佳鑫诺超越营英语冲刺卷', files: [{ name: '佳鑫诺超越营英语冲刺卷.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/英语/佳鑫诺/佳鑫诺超越营英语冲刺卷.pdf', type: 'pdf' }, { name: '佳鑫诺超越营英语冲刺卷答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/英语/佳鑫诺/佳鑫诺超越营英语冲刺卷答案.pdf', type: 'pdf' }] },
    'mock2-english-5': { name: '库课英语', files: [{ name: '库课英语.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/英语/库课库课英语.pdf', type: 'pdf' }, { name: '', fileUrl: './zhuanshengben/', type: 'pdf' }] },
    // ... 继续添加5-10，按照相同格式，把fileUrl中的路径改为多一层 "机构模拟题（成套）/"

    'mock2-english-8': { name: 'Molly英语模考押题卷3', files: [{ name: '26终版河北专升本英语模拟押题卷（三）.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/英语/Molly/26终版河北专升本英语模拟押题卷（三）.pdf', type: 'pdf' }, { name: '26终版河北专升本英语模拟押题卷（三）答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/模拟题/机构模拟题（成套）/英语/Molly/26终版河北专升本英语模拟押题卷（三）答案.pdf', type: 'pdf' }] },
    // ... 继续添加8-20

    // 高数模拟题 1-20 机构模拟题（成套）
    'mock2-math-1': { name: '24佳鑫诺高数一模拟卷', files: [{ name: '24佳鑫诺高数一模拟卷.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/佳鑫诺/24佳鑫诺高数一模拟卷.pdf', type: 'pdf' }, { name: '24佳鑫诺高数一模拟卷答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/佳鑫诺/24佳鑫诺高数一模拟卷答案.pdf', type: 'pdf' }] },
    'mock2-math-2': { name: '25佳鑫诺高数一模拟卷', files: [{ name: '25佳鑫诺高数一模拟卷.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/佳鑫诺/25佳鑫诺高数一模拟卷.pdf', type: 'pdf' }, { name: '25佳鑫诺高数一模拟卷答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/佳鑫诺/25佳鑫诺高数一模拟卷答案.pdf', type: 'pdf' }] },
    'mock2-math-3': { name: '26佳鑫诺高数一模拟卷', files: [{ name: '26佳鑫诺高数一模拟卷.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/佳鑫诺/26佳鑫诺高数一模拟卷.pdf', type: 'pdf' }, { name: '26佳鑫诺高数一模拟卷答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/佳鑫诺/26佳鑫诺高数一模拟卷答案.pdf', type: 'pdf' }] },
    'mock2-math-4': { name: '26仿真模拟卷数一第一套', files: [{ name: '26仿真模拟卷数一第一套.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/仿真模拟卷/26仿真模拟卷数一第一套.pdf', type: 'pdf' }, { name: '26仿真模拟卷数一第一套答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/仿真模拟卷/26仿真模拟卷数一第一套答案.pdf', type: 'pdf' }] },
    'mock2-math-4': { name: '26仿真模拟卷数一第二套', files: [{ name: '26仿真模拟卷数一第二套.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/仿真模拟卷/26仿真模拟卷数一第二套.pdf', type: 'pdf' }, { name: '26仿真模拟卷数一第二套答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/仿真模拟卷/26仿真模拟卷数一第二套答案.pdf', type: 'pdf' }] },
    'mock2-math-5': { name: '26仿真模拟卷数一第三套', files: [{ name: '26仿真模拟卷数一第三套.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/仿真模拟卷/26仿真模拟卷数一第三套.pdf', type: 'pdf' }, { name: '26仿真模拟卷数一第三套答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/仿真模拟卷/26仿真模拟卷数一第三套答案.pdf', type: 'pdf' }] },
    'mock2-math-6': { name: '26仿真模拟卷数一第四套', files: [{ name: '26仿真模拟卷数一第四套.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/仿真模拟卷/26仿真模拟卷数一第四套.pdf', type: 'pdf' }, { name: '26仿真模拟卷数一第四套答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/仿真模拟卷/26仿真模拟卷数一第四套答案.pdf', type: 'pdf' }] },
    'mock2-math-7': { name: '佳鑫诺集训营综合演练数学12套', files: [{ name: '佳鑫诺集训营综合演练数学12套.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/佳鑫诺/佳鑫诺集训营综合演练数学12套.pdf', type: 'pdf' }, { name: '佳鑫诺集训营综合演练数学12套答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/佳鑫诺/佳鑫诺集训营综合演练数学12套答案.pdf', type: 'pdf' }] },
    'mock2-math-8': { name: '高等数学（上册）精选750题', files: [{ name: '高等数学（上册）精选750题.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/宋浩/高等数学（上册）精选750题.pdf', type: 'pdf' }, { name: '高等数学（上册）精选750题答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/宋浩/高等数学（上册）精选750题答案.pdf', type: 'pdf' }] },
    'mock2-math-9': { name: '2023 考研数学 复习全书・基础篇', files: [{ name: '2023 考研数学 复习全书・基础篇.pdf', fileUrl: './zhuanshengben/机构模拟题（成套）/专升本题背资料/机构模拟题（成套）/高数一/李永乐/2023 考研数学 复习全书・基础篇.pdf', type: 'pdf' }, { name: '2023 考研数学 复习全书・基础篇答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/李永乐/2023 考研数学 复习全书・基础篇答案.pdf', type: 'pdf' }] },
    'mock2-math-10': { name: '2023数学基础过关660题习题册（数学一）', files: [{ name: '2023数学基础过关660题习题册（数学一）.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/李永乐/2023数学基础过关660题习题册（数学一）.pdf', type: 'pdf' }, { name: '2023数学基础过关660题习题册（数学一）答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/李永乐/2023数学基础过关660题答案册（数学一）.pdf', type: 'pdf' }] },
    'mock2-math-11': { name: '2023数学基础过关660题习题册（数学二）', files: [{ name: '2023数学基础过关660题习题册（数学二）.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/李永乐/2023数学基础过关660题习题册（数学二）.pdf', type: 'pdf' }, { name: '2023数学基础过关660题习题册（数学二）答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/李永乐/2023数学基础过关660题答案册（数学二）.pdf', type: 'pdf' }] },
    'mock2-math-12': { name: '第一章1-求函数的定义域', files: [{ name: '第一章1-求函数的定义域.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第一章1-求函数的定义域.pdf', type: 'pdf' }] },
    'mock2-math-13': { name: '第一章2-判断函数的同一性', files: [{ name: '第一章2-判断函数的同一性.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第一章2-判断函数的同一性.pdf', type: 'pdf' }] },
    'mock2-math-14': { name: '第一章3-函数的性质', files: [{ name: '第一章3-函数的性质.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第一章3-函数的性质.pdf', type: 'pdf' }] },
    'mock2-math-15': { name: '第一章4-函数的解析式', files: [{ name: '第一章4-函数的解析式.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第一章4-函数的解析式.pdf', type: 'pdf' }] },
    'mock2-math-16': { name: '第一章5-极限的计算', files: [{ name: '第一章5-极限的计算.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第一章5-极限的计算.pdf', type: 'pdf' }] },
    'mock2-math-17': { name: '第一章6-等价无穷小代换', files: [{ name: '第一章6-等价无穷小代换.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第一章6-等价无穷小代换.pdf', type: 'pdf' }] },
    'mock2-math-18': { name: '第一章7-两个重要极限', files: [{ name: '第一章7-两个重要极限.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第一章7-两个重要极限.pdf', type: 'pdf' }] },
    'mock2-math-19': { name: '第一章8-无穷小与无穷大', files: [{ name: '第一章8-无穷小与无穷大.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第一章8-无穷小与无穷大.pdf', type: 'pdf' }] },
    'mock2-math-20': { name: '第一章9-数列极限', files: [{ name: '第一章9-数列极限.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第一章9-数列极限.pdf', type: 'pdf' }] },
    'mock2-math-21': { name: '第一章10-函数的连续性', files: [{ name: '第一章10-函数的连续性.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第一章10-函数的连续性.pdf', type: 'pdf' }] },
    'mock2-math-22': { name: '第一章11-函数的间断点', files: [{ name: '第一章11-函数的间断点.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第一章11-函数的间断点.pdf', type: 'pdf' }] },
    'mock2-math-23': { name: '第二章1-导数的定义', files: [{ name: '第二章1-导数的定义.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第二章1-导数的定义.pdf', type: 'pdf' }] },
    'mock2-math-24': { name: '第二章2-初等函数的求导', files: [{ name: '第二章2-初等函数的求导.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第二章2-初等函数的求导.pdf', type: 'pdf' }] },
    'mock2-math-25': { name: '第二章3-隐函数的求导', files: [{ name: '第二章3-隐函数的求导.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第二章3-隐函数的求导.pdf', type: 'pdf' }] },
    'mock2-math-26': { name: '第二章4-参数方程的求导', files: [{ name: '第二章4-参数方程的求导.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第二章4-参数方程的求导.pdf', type: 'pdf' }] },
    'mock2-math-27': {
        name: '第二章5幂指函数和对数函数的求导',
        files: [{
            name: '第二章5幂指函数和对数函数的求导.pdf',
            fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第二章5幂指函数和对数函数的求导.pdf',
            type: 'pdf'
        }]
    },
    'mock2-math-28': { name: '第二章6-高阶导数的计算', files: [{ name: '第二章6-高阶导数的计算.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第二章6-高阶导数的计算.pdf', type: 'pdf' }] },
    'mock2-math-29': { name: '第二章7-微分的计算', files: [{ name: '第二章7-微分的计算.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第二章7-微分的计算.pdf', type: 'pdf' }] },
    'mock2-math-30': { name: '第二章8-导数的几何意义', files: [{ name: '第二章8-导数的几何意义.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第二章8-导数的几何意义.pdf', type: 'pdf' }] },
    'mock2-math-31': { name: '第二章9-可导、连续与极限存在的关系', files: [{ name: '第二章9-可导、连续与极限存在的关系.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第二章9-可导、连续与极限存在的关系.pdf', type: 'pdf' }] },
    'mock2-math-32': { name: '第二章10-中值定理', files: [{ name: '第二章10-中值定理.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第二章10-中值定理.pdf', type: 'pdf' }] },
    'mock2-math-33': { name: '第二章11-洛必达法则', files: [{ name: '第二章11-洛必达法则.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第二章11-洛必达法则.pdf', type: 'pdf' }] },
    'mock2-math-34': { name: '第二章12-单调性与极值', files: [{ name: '第二章12-单调性与极值.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第二章12-单调性与极值.pdf', type: 'pdf' }] },
    'mock2-math-35': {
        name: '第二章13-凹凸性与拐点', files: [{
            name: '第二章13凹凸性与拐点.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第二章13凹凸性与拐点.pdf',
            type: 'pdf'
        }]
    },
    'mock2-math-36': {
        name: '第二章14最值',
        files: [{
            name: '第二章14最值.pdf',
            fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第二章14最值.pdf',
            type: 'pdf'
        }]
    },
    'mock2-math-37': {
        name: '第二章15曲线的渐近线',
        files: [{
            name: '第二章15曲线的渐近线.pdf',
            fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第二章15曲线的渐近线.pdf',
            type: 'pdf'
        }]
    },
    'mock2-math-38': { name: '第三章1-不定积分的概念与性质', files: [{ name: '第三章1-不定积分的概念与性质.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第三章1-不定积分的概念与性质.pdf', type: 'pdf' }] },
    'mock2-math-39': { name: '第三章2-不定积分的直接积分法', files: [{ name: '第三章2-不定积分的直接积分法.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第三章2-不定积分的直接积分法.pdf', type: 'pdf' }] },
    'mock2-math-40': { name: '第三章3-不定积分的第一类换元积分法（凑微分法）', files: [{ name: '第三章3-不定积分的第一类换元积分法（凑微分法）.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/专升本八百题/第三章3-不定积分的第一类换元积分法（凑微分法）.pdf', type: 'pdf' }] },
    'mock2-math-41': {
        name: '1.1 函数', files: [
            { name: '1.1 函数.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/1.1 函数.pdf', type: 'pdf' },
            { name: '1.1 函数.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/1.1 函数.pdf', type: 'pdf' }
        ]
    },
    'mock2-math-42': {
        name: '1.2 极限', files: [
            { name: '1.2 极限.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/1.2 极限.pdf', type: 'pdf' },
            { name: '1.2 极限.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/1.2 极限.pdf', type: 'pdf' }
        ]
    },
    'mock2-math-43': {
        name: '1.3 连续', files: [
            { name: '1.3 连续.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/1.3 连续.pdf', type: 'pdf' },
            { name: '1.3 连续.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/1.3 连续.pdf', type: 'pdf' }
        ]
    },
    'mock2-math-44': {
        name: '2.1 导数的概念', files: [
            { name: '2.1 导数的概念.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/2.1 导数的概念.pdf', type: 'pdf' },
            { name: '2.1 导数的概念.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/2.1 导数的概念.pdf', type: 'pdf' }
        ]
    },
    'mock2-math-45': {
        name: '2.2 一元函数的求导法则', files: [
            { name: '2.2 一元函数的求导法则.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/2.2 一元函数的求导法则.pdf', type: 'pdf' },
            { name: '2.2 一元函数的求导法则.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/2.2 一元函数的求导法则.pdf', type: 'pdf' }
        ]
    },
    'mock2-math-46': {
        name: '2.3 高阶导数', files: [
            { name: '2.3 高阶导数.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/2.3 高阶导数.pdf', type: 'pdf' },
            { name: '2.3 高阶导数.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/2.3 高阶导数.pdf', type: 'pdf' }
        ]
    },
    'mock2-math-47': {
        name: '2.4 隐函数及参数方程求导', files: [
            { name: '2.4 隐函数及由参数方程所确定的函数的导数.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/2.4 隐函数及由参数方程所确定的函数的导数.pdf', type: 'pdf' },
            { name: '2.4 隐函数求导.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/2.4 隐函数求导.pdf', type: 'pdf' }
        ]
    },
    'mock2-math-48': {
        name: '2.5 函数的微分', files: [
            { name: '2.5 函数的微分.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/2.5 函数的微分.pdf', type: 'pdf' },
            { name: '2.5 微分.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/2.5 微分.pdf', type: 'pdf' }
        ]
    },
    'mock2-math-49': {
        name: '2.6 微分中值定理', files: [
            { name: '2.6 微分中值定理.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/2.6 微分中值定理.pdf', type: 'pdf' },
            { name: '2.6 微分中值定理.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/2.6 微分中值定理.pdf', type: 'pdf' }
        ]
    },
    'mock2-math-50': {
        name: '2.7 导数的应用', files: [
            { name: '2.7 导数的应用_1.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/2.7 导数的应用_1.pdf', type: 'pdf' },
            { name: '2.7 导数的应用_2.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/2.7 导数的应用_2.pdf', type: 'pdf' },
            { name: '2.7 导数的应用_1.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/2.7 导数的应用_1.pdf', type: 'pdf' },
            { name: '2.7 导数的应用_2.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/2.7 导数的应用_2.pdf', type: 'pdf' }
        ]
    },
    'mock2-math-51': {
        name: '3.1 不定积分', files: [
            { name: '3.1 不定积分_1.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/3.1 不定积分_1.pdf', type: 'pdf' },
            { name: '3.1 不定积分_2.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/3.1 不定积分_2.pdf', type: 'pdf' },
            { name: '3.1 不定积分_3.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/3.1 不定积分_3.pdf', type: 'pdf' },
            { name: '3.1 不定积分_1.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/3.1 不定积分_1.pdf', type: 'pdf' },
            { name: '3.1 不定积分_2.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/3.1 不定积分_2.pdf', type: 'pdf' },
            { name: '3.1 不定积分_3.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/3.1 不定积分_3.pdf', type: 'pdf' }
        ]
    },
    'mock2-math-52': {
        name: '3.2 定积分的概念与性质', files: [
            { name: '3.2 定积分的概念与性质_3.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/3.2 定积分的概念与性质_3.pdf', type: 'pdf' },
            { name: '3.2 定积分_345.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/3.2 定积分_345.pdf', type: 'pdf' }
        ]
    },
    'mock2-math-53': {
        name: '3.2 定积分的概念与计算(一)', files: [
            { name: '3.2 定积分的概念与计算_1.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/3.2 定积分的概念与计算_1.pdf', type: 'pdf' },
            { name: '3.2 定积分_1.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/3.2 定积分_1.pdf', type: 'pdf' }
        ]
    },
    'mock2-math-54': {
        name: '3.2 定积分的概念与计算(二)', files: [
            { name: '3.2 定积分的概念与计算_2.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/3.2 定积分的概念与计算_2.pdf', type: 'pdf' },
            { name: '3.2 定积分_2.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/3.2 定积分_2.pdf', type: 'pdf' }
        ]
    },
    'mock2-math-55': {
        name: '3.3 广义积分', files: [
            { name: '3.3 广义积分.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/3.3 广义积分.pdf', type: 'pdf' },
            { name: '3.3 广义积分.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/3.3 广义积分.pdf', type: 'pdf' }
        ]
    },
    'mock2-math-56': {
        name: '4.1 常微分方程的概念', files: [
            { name: '4.1 常微分方程的概念.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/4.1 常微分方程的概念.pdf', type: 'pdf' },
            { name: '4.1 微分方程概念.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/4.1 微分方程概念.pdf', type: 'pdf' }
        ]
    },
    'mock2-math-57': {
        name: '4.2 一阶微分方程(一)', files: [
            { name: '4.2 一阶微分方程_1.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/4.2 一阶微分方程_1.pdf', type: 'pdf' },
            { name: '4.2 一阶微分方程_1.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/4.2 一阶微分方程_1.pdf', type: 'pdf' }
        ]
    },
    'mock2-math-58': {
        name: '4.2 一阶微分方程(二)', files: [
            { name: '4.2 一阶微分方程_2.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/4.2 一阶微分方程_2.pdf', type: 'pdf' },
            { name: '4.2 一阶微分方程_2.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/4.2 一阶微分方程_2.pdf', type: 'pdf' }
        ]
    },
    'mock2-math-59': {
        name: '4.4 二阶常系数线性微分方程(一)', files: [
            { name: '4.4 二阶常系数线性微分方程_1.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/4.4 二阶常系数线性微分方程_1.pdf', type: 'pdf' },
            { name: '4.4 二阶常系数线性微分方程.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/4.4 二阶常系数线性微分方程.pdf', type: 'pdf' }
        ]
    },
    'mock2-math-60': {
        name: '4.4 二阶常系数线性微分方程(二)', files: [
            { name: '4.4 二阶常系数线性微分方程_2.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/4.4 二阶常系数线性微分方程_2.pdf', type: 'pdf' },
            { name: '4.4 二阶非齐次微分方程.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/4.4 二阶非齐次微分方程.pdf', type: 'pdf' }
        ]
    },
    'mock2-math-61': {
        name: '6.1 多元函数的概念', files: [
            { name: '6.1 多元函数的概念.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/6.1 多元函数的概念.pdf', type: 'pdf' },
            { name: '6.1 多元函数的概念.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/6.1 多元函数的概念.pdf', type: 'pdf' }
        ]
    },
    'mock2-math-62': {
        name: '6.2 偏导数与全微分', files: [
            { name: '6.2 偏导数与全微分.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/6.2 偏导数与全微分.pdf', type: 'pdf' },
            { name: '6.2 偏导数与全微分.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/6.2 偏导数与全微分.pdf', type: 'pdf' }
        ]
    },
    'mock2-math-63': {
        name: '6.3 方向导数与梯度', files: [
            { name: '6.3 方向导数与梯度.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/6.3 方向导数与梯度.pdf', type: 'pdf' },
            { name: '6.3 方向导数与梯度.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/6.3 方向导数与梯度.pdf', type: 'pdf' }
        ]
    },
    'mock2-math-64': {
        name: '6.5 多元函数的极值及应用', files: [
            { name: '6.5 多元函数的极值及应用.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/6.5 多元函数的极值及应用.pdf', type: 'pdf' },
            { name: '6.5 多元函数的极值与最值.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/6.5 多元函数的极值与最值.pdf', type: 'pdf' }
        ]
    },
    'mock2-math-65': {
        name: '7.1 二重积分的概念以及性质', files: [
            { name: '7.1 二重积分的概念以及性质.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/7.1 二重积分的概念以及性质.pdf', type: 'pdf' },
            { name: '7.1 二重积分的概念及性质.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/7.1 二重积分的概念及性质.pdf', type: 'pdf' }
        ]
    },
    'mock2-math-66': {
        name: '7.2 二重积分的计算(一)', files: [
            { name: '7.2 二重积分的计算下.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/7.2 二重积分的计算下.pdf', type: 'pdf' },
            { name: '7.2 二重积分的计算_1.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/7.2 二重积分的计算_1.pdf', type: 'pdf' }
        ]
    },
    'mock2-math-67': {
        name: '7.2 二重积分的计算及应用', files: [
            { name: '7.2 二重积分的计算及应用.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/7.2 二重积分的计算及应用.pdf', type: 'pdf' },
            { name: '7.2 二重积分的计算_2.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/7.2 二重积分的计算_2.pdf', type: 'pdf' }
        ]
    },
    'mock2-math-68': {
        name: '8.1 常数项级数的概念及性质', files: [
            { name: '8.1 常数项级数的概念及性质.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/8.1 常数项级数的概念及性质.pdf', type: 'pdf' },
            { name: '8.1 常数项级数.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/8.1 常数项级数.pdf', type: 'pdf' }
        ]
    },
    'mock2-math-69': {
        name: '8.2 常数项级数的审敛法', files: [
            { name: '8.2 常数项级数的审敛法.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题空白版/8.2 常数项级数的审敛法.pdf', type: 'pdf' },
            { name: '8.2 常数项级数敛散性型的判断.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/高数一/1000题笔记/8.2 常数项级数敛散性型的判断.pdf', type: 'pdf' }
        ]
    },// ... 继续添加3-20

    // 信息技术模拟题 1-20 机构模拟题（成套）
    'mock2-it-1': { name: '26北方黑马信息技术概论模拟卷', files: [{ name: '26北方黑马信息技术概论模拟卷.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/26北方黑马信息技术概论模拟卷.pdf', type: 'pdf' }, { name: '26北方黑马信息技术概论模拟卷答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/26北方黑马信息技术概论模拟卷答案.pdf', type: 'pdf' }] },
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
    'mock2-it-17': {
        name: '信息技术概论第一章', files: [
            { name: '信息技术概论第一章.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/拜客网/信息技术概论第一章.pdf', type: 'pdf' },
            { name: '信息技术概论第一至四章完整答案和解析.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/拜客网/信息技术概论第一至四章完整答案和解析.pdf', type: 'pdf' }
        ]
    },
    'mock2-it-18': {
        name: '信息技术概论第二章', files: [
            { name: '信息技术概论第二章.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/拜客网/信息技术概论第二章.pdf', type: 'pdf' },
            { name: '信息技术概论第一至四章完整答案和解析.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/拜客网/信息技术概论第一至四章完整答案和解析.pdf', type: 'pdf' }
        ]
    },
    'mock2-it-19': {
        name: '信息技术概论第三章', files: [
            { name: '信息技术概论第三章.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/拜客网/信息技术概论第三章.pdf', type: 'pdf' },
            { name: '信息技术概论第一至四章完整答案和解析.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/拜客网/信息技术概论第一至四章完整答案和解析.pdf', type: 'pdf' }
        ]
    },
    'mock2-it-20': {
        name: '信息技术概论第四章', files: [
            { name: '信息技术概论第四章.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/拜客网/信息技术概论第四章.pdf', type: 'pdf' },
            { name: '信息技术概论第一至四章完整答案和解析.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/拜客网/信息技术概论第一至四章完整答案和解析.pdf', type: 'pdf' }
        ]
    },
    'mock2-it-21': {
        name: '信息技术概论第五章', files: [
            { name: '信息技术概论第五章.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/拜客网/信息技术概论第五章.pdf', type: 'pdf' },
            { name: '信息技术概论第五章答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/拜客网/信息技术概论第五章答案.pdf', type: 'pdf' }
        ]
    },
    'mock2-it-22': {
        name: '信息技术概论第六章', files: [
            { name: '信息技术概论第六章.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/拜客网/信息技术概论第六章.pdf', type: 'pdf' },
            { name: '信息技术概论第六章答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/拜客网/信息技术概论第六章答案.pdf', type: 'pdf' }
        ]
    },
    'mock2-it-23': {
        name: '信息技术概论第七章', files: [
            { name: '信息技术概论第七章.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/拜客网/信息技术概论第七章.pdf', type: 'pdf' },
            { name: '信息技术概论第七章答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/拜客网/信息技术概论第七章答案.pdf', type: 'pdf' }
        ]
    },
    'mock2-it-24': {
        name: '信息技术概论第八章', files: [
            { name: '信息技术概论第八章.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/拜客网/信息技术概论第八章.pdf', type: 'pdf' },
            { name: '信息技术概论第八章答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/拜客网/信息技术概论第八章答案.pdf', type: 'pdf' }
        ]
    },
    'mock2-it-25': {
        name: '信息技术概论第九章', files: [
            { name: '信息技术概论第九章.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/佳鑫诺/信息技术概论第九章.pdf', type: 'pdf' },
            { name: '信息技术概论第九章答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/佳鑫诺/信息技术概论第九章答案.pdf', type: 'pdf' }
        ]
    },
    'mock2-it-26': {
        name: '26佳鑫诺信息技术概论模拟卷', files: [
            { name: '26佳鑫诺信息技术概论模拟卷.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/佳鑫诺/26佳鑫诺信息技术概论模拟卷.pdf', type: 'pdf' },
            { name: '26佳鑫诺信息技术概论模拟卷答案.pdf', fileUrl: './zhuanshengben/专升本题背资料/机构模拟题（成套）/信息技术概论/佳鑫诺/26佳鑫诺信息技术概论模拟卷答案.pdf', type: 'pdf' }
        ]
    },
    // ===== 开背知识点 - 静态定义，每科3个（无答案） =====
    'kaibei-politics-1': { name: '政治开背知识点1', files: [{ name: '政治开背知识点1.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/政治/政治开背知识点1.pdf', type: 'pdf' }] },
    'kaibei-politics-2': { name: '政治开背知识点2', files: [{ name: '政治开背知识点2.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/政治/政治开背知识点2.pdf', type: 'pdf' }] },
    'kaibei-politics-3': { name: '政治开背知识点3', files: [{ name: '政治开背知识点3.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/政治/政治开背知识点3.pdf', type: 'pdf' }] },
    'kaibei-politics-4': { name: '政治开背知识点4', files: [{ name: '政治开背知识点4.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/政治/政治开背知识点4.pdf', type: 'pdf' }] },
    'kaibei-politics-5': { name: '政治开背知识点5', files: [{ name: '政治开背知识点5.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/政治/政治开背知识点5.pdf', type: 'pdf' }] },
    'kaibei-politics-6': { name: '政治开背知识点6', files: [{ name: '政治开背知识点6.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/政治/政治开背知识点6.pdf', type: 'pdf' }] },
    'kaibei-politics-7': { name: '政治开背知识点7', files: [{ name: '政治开背知识点7.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/政治/政治开背知识点7.pdf', type: 'pdf' }] },
    'kaibei-politics-8': { name: '政治开背知识点8', files: [{ name: '政治开背知识点8.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/政治/政治开背知识点8.pdf', type: 'pdf' }] },

    'kaibei-english-1': { name: '英语开背知识点1', files: [{ name: '英语开背知识点1.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/英语/英语开背知识点1.pdf', type: 'pdf' }] },
    'kaibei-english-2': { name: '英语开背知识点2', files: [{ name: '英语开背知识点2.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/英语/英语开背知识点2.pdf', type: 'pdf' }] },
    'kaibei-english-3': { name: '英语开背知识点3', files: [{ name: '英语开背知识点3.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/英语/英语开背知识点3.pdf', type: 'pdf' }] },
    'kaibei-english-4': { name: '英语开背知识点4', files: [{ name: '英语开背知识点4.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/英语/英语开背知识点4.pdf', type: 'pdf' }] },
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

    'kaibei-it-1': { name: '信息技术开背知识点1', files: [{ name: '信息技术概论开背知识点1.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/信息技术概论/信息技术概论开背知识点1.pdf', type: 'pdf' }] },
    'kaibei-it-2': { name: '信息技术开背知识点2', files: [{ name: '信息技术概论开背知识点2.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/信息技术概论/信息技术概论开背知识点2.pdf', type: 'pdf' }] },
    'kaibei-it-3': { name: '信息技术开背知识点3', files: [{ name: '信息技术概论开背知识点3.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/信息技术概论/信息技术概论开背知识点3.pdf', type: 'pdf' }] },
    'kaibei-it-4': { name: '信息技术开背知识点4', files: [{ name: '信息技术概论开背知识点4.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/信息技术概论/信息技术概论开背知识点4.pdf', type: 'pdf' }] },
    'kaibei-it-5': { name: '信息技术开背知识点5', files: [{ name: '信息技术概论开背知识点5.pdf', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/信息技术概论/信息技术概论开背知识点5.pdf', type: 'pdf' }] },

    // ===== 开背知识点 - 政治（图片版） =====
    'kaibei-politics-png-1': { name: '政治开背知识点1（图片）', files: [{ name: '政治开背知识点1.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/政治/政治开背知识点1.png', type: 'png' }] },
    'kaibei-politics-png-2': { name: '政治开背知识点2（图片）', files: [{ name: '政治开背知识点2.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/政治/政治开背知识点2.png', type: 'png' }] },
    'kaibei-politics-png-3': { name: '政治开背知识点3（图片）', files: [{ name: '政治开背知识点3.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/政治/政治开背知识点3.png', type: 'png' }] },
    'kaibei-politics-png-4': { name: '政治开背知识点4（图片）', files: [{ name: '政治开背知识点4.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/政治/政治开背知识点4.png', type: 'png' }] },
    'kaibei-politics-png-5': { name: '政治开背知识点5（图片）', files: [{ name: '政治开背知识点5.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/政治/政治开背知识点5.png', type: 'png' }] },
    'kaibei-politics-png-6': { name: '政治开背知识点6（图片）', files: [{ name: '政治开背知识点6.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/政治/政治开背知识点6.png', type: 'png' }] },
    'kaibei-politics-png-7': { name: '政治开背知识点7（图片）', files: [{ name: '政治开背知识点7.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/政治/政治开背知识点7.png', type: 'png' }] },
    'kaibei-politics-png-8': { name: '政治开背知识点8（图片）', files: [{ name: '政治开背知识点8.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/政治/政治开背知识点8.png', type: 'png' }] },

    // ===== 开背知识点 - 英语（图片版） =====
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

    // ===== 开背知识点 - 高数（图片版） =====
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

    // ===== 开背知识点 - 信息技术（图片版） =====
    'kaibei-it-png-1': { name: '信息技术开背知识点1（图片）', files: [{ name: '信息技术开背知识点1.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/信息技术概论/信息技术概论开背知识点1.png', type: 'png' }] },
    'kaibei-it-png-2': { name: '信息技术开背知识点2（图片）', files: [{ name: '信息技术开背知识点2.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/信息技术概论/信息技术概论开背知识点2.png', type: 'png' }] },
    'kaibei-it-png-3': { name: '信息技术开背知识点3（图片）', files: [{ name: '信息技术开背知识点3.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/信息技术概论/信息技术概论开背知识点3.png', type: 'png' }] },
    'kaibei-it-png-4': { name: '信息技术开背知识点4（图片）', files: [{ name: '信息技术开背知识点4.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/信息技术概论/信息技术概论开背知识点4.png', type: 'png' }] },
    'kaibei-it-png-5': { name: '信息技术开背知识点5（图片）', files: [{ name: '信息技术开背知识点5.png', fileUrl: './zhuanshengben/专升本题背资料/开背知识点/信息技术概论/信息技术概论开背知识点5.png', type: 'png' }] },

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
// 双栏对照预览函数
function showDualPreview(file1, file2, target, linkText) {
    // 清除当前的预览文件状态
    currentPreviewFile = null;

    // 重新渲染文件列表，并添加双栏预览
    const content = renderFileContent(target, fileData[target].name);

    // 创建双栏预览的HTML
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

    // 更新内容
    dynamicDiv.innerHTML = content + dualHtml;

    // 重新绑定所有按钮事件
    rebindAllButtons(target, linkText);

    // 加载两个PDF
    setTimeout(() => {
        const leftContainer = document.getElementById('dual-preview-left');
        const rightContainer = document.getElementById('dual-preview-right');

        if (leftContainer && rightContainer) {
            // 加载左侧PDF
            const iframe1 = document.createElement('iframe');
            iframe1.src = file1.fileUrl;
            iframe1.style.width = '100%';
            iframe1.style.height = '550px';
            iframe1.style.border = 'none';
            leftContainer.innerHTML = ''; // 清空容器
            leftContainer.appendChild(iframe1);

            // 加载右侧PDF
            const iframe2 = document.createElement('iframe');
            iframe2.src = file2.fileUrl;
            iframe2.style.width = '100%';
            iframe2.style.height = '550px';
            iframe2.style.border = 'none';
            rightContainer.innerHTML = ''; // 清空容器
            rightContainer.appendChild(iframe2);
        }
    }, 50);

    // 绑定关闭按钮
    document.getElementById('closeDualPreviewBtn').addEventListener('click', function () {
        // 清除双栏预览
        const dualWrap = document.getElementById('dualPreviewWrap');
        const closeArea = document.querySelector('.dual-close-area');
        if (dualWrap) dualWrap.remove();
        if (closeArea) closeArea.remove();

        // 重新绑定按钮
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
            // 题答对照按钮事件
            document.querySelectorAll('.dual-preview-btn').forEach(btn => {
                btn.addEventListener('click', function (e) {
                    e.stopPropagation();
                    const file = JSON.parse(this.getAttribute('data-file'));
                    const baseName = this.getAttribute('data-base-name');

                    // 构建答案文件路径
                    const answerFileName = baseName + '答案.pdf';
                    const answerFileUrl = file.fileUrl.replace('.pdf', '答案.pdf');

                    const answerFile = {
                        name: answerFileName,
                        fileUrl: answerFileUrl,
                        type: 'pdf'
                    };

                    // 显示双栏对照预览
                    showDualPreview(file, answerFile, target, linkText);
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

            // 使用统一的按钮绑定函数
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

// ========== 搜索功能实现 ==========
const searchInput = document.getElementById('search-input');

// 搜索功能
function performSearch() {
    const keyword = searchInput.value.trim().toLowerCase();
    if (!keyword) {
        updateContent(currentTarget, currentLinkText);
        return;
    }

    // 搜索结果存储
    const results = [];

    // 遍历所有文件数据
    for (const [target, data] of Object.entries(fileData)) {
        if (target === 'home') continue; // 跳过首页

        // 检查目录名称是否匹配
        if (data.name.toLowerCase().includes(keyword)) {
            results.push({
                type: 'category',
                name: data.name,
                target: target,
                files: data.files
            });
        }

        // 检查文件名称是否匹配
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

    // 显示搜索结果
    displaySearchResults(results, keyword);
}

// 显示搜索结果
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

    // 按类别分组，并去重文件
    const categories = {};

    results.forEach(result => {
        if (result.type === 'category') {
            // 如果是分类匹配，添加该分类的所有文件
            if (!categories[result.name]) {
                categories[result.name] = {
                    categoryName: result.name,
                    files: []
                };
            }

            // 添加该分类的所有文件（去重）
            result.files.forEach(file => {
                const fileKey = file.name + file.fileUrl;
                if (!categories[result.name].fileSet) {
                    categories[result.name].fileSet = new Set();
                }
                if (!categories[result.name].fileSet.has(fileKey)) {
                    categories[result.name].fileSet.add(fileKey);
                    categories[result.name].files.push(file);
                }
            });
        } else {
            // 如果是文件匹配
            if (!categories[result.category]) {
                categories[result.category] = {
                    categoryName: result.category,
                    files: [],
                    fileSet: new Set()
                };
            }

            // 添加匹配的文件（去重）
            const fileKey = result.file.name + result.file.fileUrl;
            if (!categories[result.category].fileSet.has(fileKey)) {
                categories[result.category].fileSet.add(fileKey);
                categories[result.category].files.push(result.file);
            }
        }
    });

    // 生成搜索结果HTML
    let html = `
        <svg viewBox="0 0 24 24">
            <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
        </svg>
        <h2>搜索结果: "${keyword}"</h2>
        <div class="search-results-list">
    `;

    // 遍历每个分类
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

                // 添加文件徽章
                let fileBadge = '';
                if (file.name.includes('答案') || file.name.toLowerCase().includes('answer')) {
                    fileBadge = '<span class="file-badge answer">答案</span>';
                } else {
                    fileBadge = '<span class="file-badge question">题目</span>';
                }

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

    // 如果有预览文件，添加预览区域
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

    // 重新绑定按钮事件
    document.querySelectorAll('.preview-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            const file = JSON.parse(this.getAttribute('data-file'));
            currentPreviewFile = file;
            displaySearchResults(results, keyword); // 重新显示搜索结果

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

    // 绑定关闭预览按钮
    const closeBtn = document.getElementById('closePreviewBtn');
    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            currentPreviewFile = null;
            displaySearchResults(results, keyword);
        });
    }
}

// 添加搜索输入事件监听
if (searchInput) {
    // 添加搜索图标
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

    // 输入事件
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

    // 键盘事件
    searchInput.addEventListener('keyup', function (e) {
        if (e.key === 'Escape') {
            this.value = '';
            const clearBtn = document.querySelector('.search-clear-btn');
            if (clearBtn) clearBtn.style.display = 'none';
            updateContent(currentTarget, currentLinkText);
        }
    });
}

// 在初始化函数中添加搜索功能相关样式
function addSearchStyles() {
    const style = document.createElement('style');
    style.textContent = `
        /* 搜索结果列表样式 */
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

        /* 搜索高亮 */
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

// 在init函数中添加样式
function init() {
    console.log('初始化静态版本...');

    // 添加固定样式
    addFixedStyles();

    // 添加搜索样式
    addSearchStyles();

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

// ========== 悬浮可拖拽AI助手 ==========
const aiFloatBtn = document.getElementById('aiFloatBtn');
const aiFloatWindow = document.getElementById('aiFloatWindow');
const aiFloatHeader = document.getElementById('aiFloatHeader');
const aiMinimizeBtn = document.getElementById('aiMinimizeBtn');
const aiCloseBtn = document.getElementById('aiCloseBtn');
const aiModelSelector = document.getElementById('aiModelSelector');
const aiFloatChats = document.getElementById('aiFloatChats');
const aiFloatForm = document.getElementById('aiFloatForm');
const aiFloatInput = document.getElementById('aiFloatInput');
const aiFloatSendBtn = document.getElementById('aiFloatSendBtn');
const aiFloatClearBtn = document.getElementById('aiFloatClearBtn');
const aiFloatThemeBtn = document.getElementById('aiFloatThemeBtn');
const aiModelName = document.getElementById('aiModelName');

// AI状态
let floatCurrentModel = 'deepseek';
let floatChatHistory = [];
let floatController = null;
let floatIsMinimized = false;
let floatIsDragging = false;
let floatStartX, floatStartY, floatStartLeft, floatStartTop;

// 初始化
function initFloatAI() {
    // 添加欢迎消息
    addWelcomeMessage(floatCurrentModel);

    // 从localStorage恢复位置
    loadFloatPosition();

    // 初始化主题
    initTheme();
}

// 添加欢迎消息
function addWelcomeMessage(model) {
    const config = floatAIConfig[model];

    // 根据模型选择不同的图标
    let iconUrl = '';
    if (model === 'deepseek') {
        iconUrl = 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/deepseek.svg';
    } else if (model === 'chatglm') {
        iconUrl = 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/chatglm.svg';
    } else if (model === 'qwen') {
        iconUrl = 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/qwen.svg';
    } else if (model === 'ernie') {
        iconUrl = 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/baidu.svg';
    }

    aiFloatChats.innerHTML = `
        <div class="ai-message ai-bot-message">
            <div class="ai-message-avatar">
                <img src="${iconUrl}" width="20" height="20" alt="${model}" style="border-radius: 4px;">
            </div>
            <div class="ai-message-content">
                ${config.welcomeMsg}
            </div>
        </div>
    `;
}

// 切换AI模型
function switchFloatModel(model) {
    floatCurrentModel = model;
    floatChatHistory = [];

    // 更新UI
    document.querySelectorAll('.ai-model-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.model === model);
    });
    aiModelName.textContent = floatAIConfig[model].name;

    // 添加欢迎消息
    addWelcomeMessage(model);
}

// 添加用户消息
function addUserMessage(text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'ai-message ai-user-message';
    messageDiv.innerHTML = `
        <div class="ai-message-avatar">
            <i class='bx bx-user'></i>
        </div>
        <div class="ai-message-content">${text}</div>
    `;
    aiFloatChats.appendChild(messageDiv);
    aiFloatChats.scrollTop = aiFloatChats.scrollHeight;
}

// 添加机器人消息（加载状态）
function addBotLoadingMessage() {
    const model = floatCurrentModel;

    // 根据模型选择不同的图标
    let iconUrl = '';
    if (model === 'deepseek') {
        iconUrl = 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/deepseek.svg';
    } else if (model === 'chatglm') {
        iconUrl = 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/chatglm.svg';
    } else if (model === 'qwen') {
        iconUrl = 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/qwen.svg';
    } else if (model === 'ernie') {
        iconUrl = 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/baidu.svg';
    }

    const messageDiv = document.createElement('div');
    messageDiv.className = 'ai-message ai-bot-message ai-loading';
    messageDiv.id = 'ai-loading-message';
    messageDiv.innerHTML = `
        <div class="ai-message-avatar">
            <img src="${iconUrl}" width="20" height="20" alt="${model}" style="border-radius: 4px;">
        </div>
        <div class="ai-message-content">正在思考</div>
    `;
    aiFloatChats.appendChild(messageDiv);
    aiFloatChats.scrollTop = aiFloatChats.scrollHeight;
    return messageDiv;
}

// 更新机器人消息
function updateBotMessage(text) {
    const loadingMsg = document.getElementById('ai-loading-message');
    if (loadingMsg) {
        loadingMsg.classList.remove('ai-loading');
        loadingMsg.querySelector('.ai-message-content').innerHTML = formatMessage(text);
    }
}

// 格式化消息（支持代码块等）
function formatMessage(text) {
    return text.replace(/\n/g, '<br>').replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
}

// 发送消息
async function sendFloatMessage() {
    const message = aiFloatInput.value.trim();
    if (!message) return;

    // 清空输入框
    aiFloatInput.value = '';

    // 添加用户消息
    addUserMessage(message);

    // 添加加载消息
    addBotLoadingMessage();

    // 准备请求
    const config = floatAIConfig[floatCurrentModel];
    floatController = new AbortController();

    try {
        // 获取当前模型对应的modelId
        let modelId = '';
        if (floatCurrentModel === 'deepseek') {
            modelId = API_CONFIG.gitcode.models.deepseek.modelId;
        } else if (floatCurrentModel === 'chatglm') {
            modelId = API_CONFIG.gitcode.models.glm5.modelId;
        } else if (floatCurrentModel === 'qwen') {
            modelId = API_CONFIG.gitcode.models.qwen35.modelId;
        } else if (floatCurrentModel === 'ernie') {
            modelId = API_CONFIG.gitcode.models.deepseek.modelId; // 默认使用DeepSeek
        }

        // GitCode API 统一请求格式
        const requestBody = {
            model: modelId,
            messages: [
                {
                    role: "system",
                    content: "你是一个专升本备考助手，专门帮助用户解答专升本考试相关问题，包括政治、英语、高等数学、信息技术概论等科目。请用中文友好地回答用户问题。"
                },
                {
                    role: "user",
                    content: message
                }
            ],
            stream: false,
            max_tokens: config.maxTokens || 4096,
            temperature: config.temperature || 0.6,
            top_p: config.topP || 0.95,
            top_k: config.topK || 50,
            frequency_penalty: config.frequencyPenalty || 0,
            presence_penalty: 0
        };

        // 添加thinking_budget（如果存在）
        if (config.thinkingBudget) {
            requestBody.thinking_budget = config.thinkingBudget;
        }

        const response = await fetch(config.apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${config.apiKey}`
            },
            body: JSON.stringify(requestBody),
            signal: floatController.signal
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('API错误详情:', data);
            throw new Error(data.error?.message || `请求失败 (${response.status})`);
        }

        // 解析响应 - GitCode API统一返回格式
        let responseText = '';
        if (data.choices && data.choices.length > 0) {
            responseText = data.choices[0].message?.content || '未获取到回复内容';
        } else {
            responseText = 'API返回格式异常';
            console.error('异常响应格式:', data);
        }

        // 更新消息
        updateBotMessage(responseText);

        // 保存到历史
        floatChatHistory.push(
            { role: 'user', content: message },
            { role: 'assistant', content: responseText }
        );

    } catch (error) {
        if (error.name !== 'AbortError') {
            console.error('请求错误:', error);
            updateBotMessage('抱歉，请求失败：' + error.message);
        }
    }
}

// 清空对话
function clearFloatChats() {
    floatChatHistory = [];
    aiFloatChats.innerHTML = '';
    addWelcomeMessage(floatCurrentModel);
}

// 切换主题
function toggleFloatTheme() {
    console.log('切换主题'); // 添加日志调试

    // 切换body的dark-theme类
    document.body.classList.toggle('dark-theme');

    // 更新按钮图标
    const isDark = document.body.classList.contains('dark-theme');
    aiFloatThemeBtn.innerHTML = isDark ? '<i class="bx bx-sun"></i>' : '<i class="bx bx-moon"></i>';

    // 保存主题设置到localStorage
    localStorage.setItem('themeMode', isDark ? 'dark' : 'light');

    console.log('当前主题:', isDark ? '暗色' : '亮色');
}

// 初始化主题
function initTheme() {
    console.log('初始化主题');

    // 从localStorage读取主题设置
    const savedTheme = localStorage.getItem('themeMode');
    console.log('保存的主题:', savedTheme);

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        aiFloatThemeBtn.innerHTML = '<i class="bx bx-sun"></i>';
    } else {
        document.body.classList.remove('dark-theme');
        aiFloatThemeBtn.innerHTML = '<i class="bx bx-moon"></i>';
    }
}


// 拖拽功能
function makeDraggable(element, handle) {
    let isDragging = false;
    let startX, startY, startLeft, startTop;

    handle.addEventListener('mousedown', startDrag);
    handle.addEventListener('touchstart', startDrag, { passive: false });

    function startDrag(e) {
        e.preventDefault(); // 重要：阻止默认行为
        e.stopPropagation(); // 阻止事件冒泡

        isDragging = true;

        // 获取当前元素位置
        const rect = element.getBoundingClientRect();
        startLeft = rect.left;
        startTop = rect.top;

        // 获取鼠标/触摸起始位置
        if (e.type === 'mousedown') {
            startX = e.clientX;
            startY = e.clientY;
            document.addEventListener('mousemove', onDrag);
            document.addEventListener('mouseup', stopDrag);
        } else {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            document.addEventListener('touchmove', onDrag, { passive: false });
            document.addEventListener('touchend', stopDrag);
            document.addEventListener('touchcancel', stopDrag);
        }

        // 添加拖拽样式
        element.classList.add('dragging');

        // 记录初始位置到元素样式
        element.style.left = startLeft + 'px';
        element.style.top = startTop + 'px';
        element.style.right = 'auto';
        element.style.bottom = 'auto';
    }

    function onDrag(e) {
        if (!isDragging) return;

        e.preventDefault(); // 重要：阻止默认行为（如页面滚动）
        e.stopPropagation();

        let clientX, clientY;
        if (e.type === 'mousemove') {
            clientX = e.clientX;
            clientY = e.clientY;
        } else {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        }

        // 计算新位置
        const deltaX = clientX - startX;
        const deltaY = clientY - startY;

        let newLeft = startLeft + deltaX;
        let newTop = startTop + deltaY;

        // 边界限制（可选，防止拖出屏幕）
        const maxLeft = window.innerWidth - element.offsetWidth;
        const maxTop = window.innerHeight - element.offsetHeight;

        newLeft = Math.max(0, Math.min(newLeft, maxLeft));
        newTop = Math.max(0, Math.min(newTop, maxTop));

        // 应用新位置
        element.style.left = newLeft + 'px';
        element.style.top = newTop + 'px';
        element.style.right = 'auto';
        element.style.bottom = 'auto';
    }

    function stopDrag(e) {
        if (!isDragging) return;

        isDragging = false;
        element.classList.remove('dragging');

        // 保存最终位置
        const left = parseFloat(element.style.left);
        const top = parseFloat(element.style.top);
        if (!isNaN(left) && !isNaN(top)) {
            saveFloatPosition(left, top);
        }

        // 移除事件监听
        document.removeEventListener('mousemove', onDrag);
        document.removeEventListener('mouseup', stopDrag);
        document.removeEventListener('touchmove', onDrag);
        document.removeEventListener('touchend', stopDrag);
        document.removeEventListener('touchcancel', stopDrag);
    }
}

// 保存位置到localStorage
function saveFloatPosition(left, top) {
    localStorage.setItem('aiFloatLeft', left);
    localStorage.setItem('aiFloatTop', top);
}

// 加载位置
function loadFloatPosition() {
    const left = localStorage.getItem('aiFloatLeft');
    const top = localStorage.getItem('aiFloatTop');

    if (left && top) {
        aiFloatWindow.style.left = left + 'px';
        aiFloatWindow.style.top = top + 'px';
        aiFloatWindow.style.right = 'auto';
        aiFloatWindow.style.bottom = 'auto';
    }
}

// 事件监听
aiFloatBtn.addEventListener('click', () => {
    aiFloatWindow.style.display = 'flex';
    aiFloatBtn.style.display = 'none';
});

aiCloseBtn.addEventListener('click', () => {
    aiFloatWindow.style.display = 'none';
    aiFloatBtn.style.display = 'flex';
});

aiMinimizeBtn.addEventListener('click', () => {
    floatIsMinimized = !floatIsMinimized;
    aiFloatWindow.classList.toggle('minimized', floatIsMinimized);
    aiMinimizeBtn.textContent = floatIsMinimized ? '+' : '−';
});

aiFloatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    sendFloatMessage();
});

aiFloatClearBtn.addEventListener('click', clearFloatChats);

aiFloatThemeBtn.addEventListener('click', toggleFloatTheme);

// 模型切换
document.querySelectorAll('.ai-model-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        switchFloatModel(btn.dataset.model);
    });
});

// 启用拖拽
makeDraggable(aiFloatWindow, aiFloatHeader);

// 初始化
initFloatAI();

// 点击空白处关闭窗口（可选）
document.addEventListener('click', (e) => {
    if (!aiFloatWindow.contains(e.target) && !aiFloatBtn.contains(e.target)) {
        // 不自动关闭，让用户手动控制
    }
});

// 窗口大小改变时调整位置
window.addEventListener('resize', () => {
    const left = parseFloat(aiFloatWindow.style.left);
    const top = parseFloat(aiFloatWindow.style.top);

    if (!isNaN(left) && !isNaN(top)) {
        const maxLeft = window.innerWidth - aiFloatWindow.offsetWidth;
        const maxTop = window.innerHeight - aiFloatWindow.offsetHeight;

        let newLeft = Math.min(left, maxLeft);
        let newTop = Math.min(top, maxTop);

        if (newLeft < 0) newLeft = 0;
        if (newTop < 0) newTop = 0;

        aiFloatWindow.style.left = newLeft + 'px';
        aiFloatWindow.style.top = newTop + 'px';
        saveFloatPosition(newLeft, newTop);
    }
});

// 移动端强制显示AI按钮
(function () {
    // 立即执行
    function forceShowButton() {
        const btn = document.getElementById('aiFloatBtn');
        if (btn) {
            btn.style.display = 'flex';
            btn.style.opacity = '1';
            btn.style.visibility = 'visible';
            btn.style.zIndex = '999999';
            console.log('AI按钮已强制显示');
        } else {
            console.log('等待AI按钮创建...');
            setTimeout(forceShowButton, 500);
        }
    }

    // 页面加载后执行
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', forceShowButton);
    } else {
        forceShowButton();
    }

    // 延迟再执行一次（防止被覆盖）
    setTimeout(forceShowButton, 1000);
    setTimeout(forceShowButton, 2000);
})();

// ========== 统计卡片功能 ==========
function updateStatsCards() {
    // 初始化各科计数器
    const stats = {
        politics: { total: 0, mock: 0, past: 0, kaibei: 0 },
        english: { total: 0, mock: 0, past: 0, kaibei: 0 },
        math: { total: 0, mock: 0, past: 0, kaibei: 0 },
        it: { total: 0, mock: 0, past: 0, kaibei: 0 }
    };

    // 遍历所有文件数据
    Object.entries(fileData).forEach(([key, data]) => {
        if (key === 'home') return; // 跳过首页

        const filesCount = data.files ? data.files.length : 0;

        // 根据key判断科目和类型
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

    // 更新DOM
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

// 在init函数中调用
function init() {
    console.log('初始化静态版本...');

    // 添加固定样式
    addFixedStyles();

    // 添加搜索样式
    addSearchStyles();

    // 设置点击固定展开/收缩功能
    setupClickToFix();

    // 绑定菜单链接
    bindMenuLinks();

    // 更新首页内容
    updateContent('home', '首页');

    // 添加统计卡片更新
    updateStatsCards();  // 新增这行

    // 设置首页为活动状态
    document.querySelectorAll('.sidebar li.active').forEach(li => li.classList.remove('active'));
    const homeLi = document.getElementById('menu-home');
    if (homeLi) homeLi.classList.add('active');

    console.log('初始化完成，fileData包含', Object.keys(fileData).length, '个条目');
}

// 统一的按钮绑定函数
function rebindAllButtons(target, linkText) {
    // 预览按钮
    document.querySelectorAll('.preview-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            e.preventDefault(); // 添加阻止默认行为

            // 如果存在双栏预览，先移除它
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
            e.preventDefault(); // 添加阻止默认行为

            // 如果存在双栏预览，先移除它
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
            e.preventDefault(); // 添加阻止默认行为

            // 清除当前的预览文件状态
            currentPreviewFile = null;

            const file = JSON.parse(this.getAttribute('data-file'));
            const baseName = this.getAttribute('data-base-name');

            // 构建答案文件路径
            const answerFileName = baseName + '答案.pdf';
            const answerFileUrl = file.fileUrl.replace('.pdf', '答案.pdf');

            const answerFile = {
                name: answerFileName,
                fileUrl: answerFileUrl,
                type: 'pdf'
            };

            // 显示双栏对照预览
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