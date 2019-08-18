<script>
    const ProblemState = {
        0: ['c', '通过'],
        1: ['ng', '未通过'],
    }

    const ContestState = {
        '-1': {name:'finish', caption: '已完成', color: ' red'},
        '0': {name: 'underway', caption: '进行中', color: ' green'},
        '1': {name:'waiting', caption: '未开始', color: ' blue'},
    }

    const JudgeState = {
        '-2': {name: 'Compile Error', color: 'yellow', short: 'CE', type: 'warning'},
        '-1': {name: 'wrong answer', color: "red", short: 'WA', type: "error"},
        '0': {name: 'Accepted', color: 'green', short: 'AC', type: 'success'},
        '1': {name: 'Time Limit Exceeded', short: 'TLE', color: 'red', type: 'error'},
        '2': {name: 'Time Limit Exceeded', short: 'TLE', color: 'red', type: 'error'},
        '3': {name: 'Memory Limit Exceeded', short: 'MLE', color: 'red', type: 'error'},
        '4': {name: 'Runtime Error', short: 'RE', color: 'red', type: 'error'},
        '5': {name: 'System Error', short: 'SE', color: 'red', type: 'error'},
        '6': {name: 'Pending', color: 'yellow', type: 'warning'},
        '7': {name: 'Judging', color: 'blue', type: 'info'},
        '8': {name: 'Partial Accepted', short: 'PAC', color: 'blue', type: 'info'},
        '9': {name: 'Submitting', color: 'yellow', type: 'warning'}
    }

    const ContestType = {
        PUBLIC: 0,
        PASSWORD_PROTECTED: 1
    }

    const UserType = {
        GUEST: 0,
        REGULAR_USER: 1,
        ADMIN: 2,
        SUPER_ADMIN: 3
    }

    const ProblemPermissionType = {
        NONE: 0,
        OWN: 1,
        ALL: 2
    }

    const DifficultyType = {
        '1': '初级A'
    }

    const STORAGE_KEY = {
        AUTHED: 'authed',
        PROBLEM_CODE: 'problemCode',
        languages: 'languages'
    }

    export default {
        ProblemState,
        ContestState,
        JudgeState,

        ContestType,
        UserType,
        ProblemPermissionType,
        DifficultyType,

        STORAGE_KEY
    }
</script>
