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

// AI配置
const floatAIConfig = {
    'deepseek': {
        name: 'DeepSeek-V3',
        apiKey: '2HwLYY4aow4s7sx5BUntcTsQ',  // 替换为您的API Key
        apiUrl: 'https://api-ai.gitcode.com/v1/chat/completions',
        welcomeMsg: '你好！我是DeepSeek-V3，可以帮你解答专升本问题',
        // 添加模型特定配置
        model: 'deepseek-ai/DeepSeek-V3',
        maxTokens: 4096,
        temperature: 0.6,
        topP: 0.95,
        topK: 50,
        frequencyPenalty: 0,
        thinkingBudget: 32768
    },
    'chatglm': {
        name: 'ChatGLM',
        apiKey: 'PASTE-YOUR-CHATGLM-API-KEY',
        apiUrl: 'https://open.bigmodel.cn/api/paas/v4/chat/completions',
        welcomeMsg: '你好！我是ChatGLM，很高兴为你提供学习帮助'
    },
    'qwen': {
        name: '通义千问',
        apiKey: 'PASTE-YOUR-QWEN-API-KEY',
        apiUrl: 'https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation',
        welcomeMsg: '你好！我是通义千问，让我们一起攻克专升本'
    },
    'ernie': {
        name: '文心一言',
        apiKey: 'PASTE-YOUR-ERNIE-API-KEY',
        apiUrl: 'https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/completions',
        welcomeMsg: '你好！我是文心一言，专为专升本备考设计'
    }
};

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
    aiFloatChats.innerHTML = `
        <div class="ai-message ai-bot-message">
            <div class="ai-message-avatar">
                <i class='bx bx-chip'></i>
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
    const messageDiv = document.createElement('div');
    messageDiv.className = 'ai-message ai-bot-message ai-loading';
    messageDiv.id = 'ai-loading-message';
    messageDiv.innerHTML = `
        <div class="ai-message-avatar">
            <i class='bx bx-chip'></i>
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

    // 构建请求
    let requestBody, headers = { 'Content-Type': 'application/json' };

    // 根据模型构建不同请求
    if (floatCurrentModel === 'deepseek') {
        headers['Authorization'] = `Bearer ${config.apiKey}`;
        requestBody = {
            model: config.model || 'deepseek-ai/DeepSeek-V3',
            messages: [
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
            thinking_budget: config.thinkingBudget || 32768
        };
    } else if (floatCurrentModel === 'chatglm') {
        headers['Authorization'] = `Bearer ${config.apiKey}`;
        requestBody = {
            model: 'glm-4',
            messages: [
                { role: 'system', content: '你是专升本备考助手，用中文回答' },
                { role: 'user', content: message }
            ]
        };
    } else if (floatCurrentModel === 'qwen') {
        headers['Authorization'] = `Bearer ${config.apiKey}`;
        requestBody = {
            model: 'qwen-turbo',
            input: {
                messages: [
                    { role: 'system', content: '你是专升本备考助手，用中文回答' },
                    { role: 'user', content: message }
                ]
            }
        };
    } else if (floatCurrentModel === 'ernie') {
        headers['Authorization'] = `Bearer ${config.apiKey}`;
        requestBody = {
            messages: [
                { role: 'user', content: message }
            ]
        };
    }

    try {
        const response = await fetch(config.apiUrl, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(requestBody),
            signal: floatController.signal
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.error?.message || '请求失败');

        // 解析响应
        let responseText = '';
        if (floatCurrentModel === 'deepseek') {
            responseText = data.choices[0].message.content;
        } else if (floatCurrentModel === 'chatglm') {
            responseText = data.choices[0].message.content;
        } else if (floatCurrentModel === 'qwen') {
            responseText = data.output.choices[0].message.content;
        } else if (floatCurrentModel === 'ernie') {
            responseText = data.result;
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