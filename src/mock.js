// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock a data of problem list
const problemListData = function() {
    let problems = [];
    for (let i = 0; i < 20; i++) {
        let newProblemObject = {
            id: i, //  Random.csentence( min, max )
            display_id: '000'+Random.integer(1, 9),
            status: Random.integer(0, 2),
            title: Random.csentence(3, 10), // Random.cname() 随机生成一个常见的中文姓名
            date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        problems.push(newProblemObject)
    }

    return {
        data: { results: problems}
    }
}

const problemData = function() {
    let problem = {
        id: Random.integer(1,100),
        display_id: '000'+Random.integer(1, 9),
        status: Random.integer(0, 2),
        title: Random.csentence(3, 10),
        description: Random.csentence(3,10)
    };

    return {
        data: { results: problem}
    }
}

const contestData = function () {
    let contest = {
        id: Random.integer(1,100),
        status: Random.integer(0, 2),
        name: Random.csentence(3, 10),
        description: Random.csentence(3,10),
        startTime: Random.time(),
        endTime: Random.time()
    };
    return {
        data: { results: contest}
    }
}

const contestListData = function() {
    let contests = [];
    for (let i = 0; i < 6; i++) {
        let contestObject = {
            id: i,
            status: Random.integer(0, 2),
            name: Random.csentence(3, 10),
            description: Random.csentence(3,10),
            startTime: Random.time(),
            endTime: Random.time()
        }
        contests.push(contestObject)
    }

    return {
        data: { results: contests}
    }
}

const submissionListData = function() {
    let submissions = [];
    for (let i = 0; i < 20; i++) {
        let submission = {
            id: i,
            title_id: '000'+Random.integer(1, 9),
            title: Random.csentence(3, 10),
            submitter: Random.csentence(3,10),
            submit_time: Random.date() + ' ' + Random.time(),
            time: Random.integer(4, 2000),
            memory: Random.integer(10,300),
            lang: "C++",
            size: Random.integer(100, 9999),
            status: Random.integer(0,2)
        };
        submissions.push(submission)
    }

    return {
        data: { results: submissions}
    }
}
const submissionData = function() {
    let submission = {
        id: Random.integer(1,100),
        title_id: '000'+Random.integer(1, 9),
        title: Random.csentence(3, 10),
        submitter: Random.cname(),
        submit_time: Random.date() + ' ' + Random.time(),
        time: Random.integer(4, 2000),
        memory: Random.integer(10,300),
        lang: "C++",
        size: Random.integer(100, 9999),
        status: Random.integer(0,2),
        testcases: [
            {
                status: 0,
                time: 123,
                memory: 345
            },
            {
                status: 0,
                time: 123,
                memory: 345
            },
            {
                status: 0,
                time: 123,
                memory: 345
            },
            {
                status: 0,
                time: 123,
                memory: 345
            },
            {
                status: 0,
                time: 123,
                memory: 345
            },
        ]
    };

    return {
        data: { results: submission}
    }
}

// Mock.mock( url, post/get , 返回的数据)；
// Mock.mock('/api/problems', 'get', problemListData)
// Mock.mock('/api/problem/0001', 'get', problemData)
// Mock.mock('/api/contests', 'get', contestListData)
// Mock.mock('/api/contest/1', 'get', contestData)
// Mock.mock('/api/submission/1', 'get', submissionData())
// Mock.mock('/api/submissions', 'get', submissionListData())