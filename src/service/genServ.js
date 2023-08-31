import axios from "axios";
import { store } from "@/store/createStore.js"
import { ElMessage } from 'element-plus'

function generalRequest(url, data) {
    return axios.post(
        'http://localhost:9090' + url,
        // url,
        {
            data: data,
        },
        {
            headers: {
                Authorization: 'Bearer ' + store.state.jwtToken
            }
        }
    ).then(res => {
        if (res.status == 500) {

            ElMessage({
                type: 'warnning',
                message: '后端报错'
            });
            return;
        }
        if (res.status == 404) {
            ElMessage({
                type: 'warnning',
                message: '后端方法不存在'
            });
            return;
        }
        return res.data
    }).catch(() => {
        return;
    })
}

export function message(self, msg) {

    self.$message({
      message: msg,
      type: 'warnning',
    })

  }
  export function getAuthHeader() {
    return {
      Authorization: 'Bearer ' + store.state.jwtToken
    }
  }

function getUimsConfig() {
    return generalRequest('/api/auth/getUimsConfig', null)
}
function sendCaptcha(data) {
    return generalRequest('/api/teach/sendCaptcha', data)
}
function verifyCaptcha(data) {
    return generalRequest('/api/teach/verifyCaptcha', data)
}

function getStudentIntroduceData(data) {
    return generalRequest('/api/teach/getStudentIntroduceData', data)
}
function studentInit(data) {
    return generalRequest('/api/teach/studentInit', data)
}
function studentQuery(data) {
    return generalRequest('/api/teach/studentQuery', data)
}
function studentDelete(data) {
    return generalRequest('/api/teach/studentDelete', data)
}
function studentEditInit(data) {
    return generalRequest('/api/teach/studentEditInit', data)
}
function studentEditSubmit(data) {
    return generalRequest('/api/teach/studentEditSubmit', data)
}
function studentCourseTableInit(data) {
    return generalRequest('/api/teach/studentCourseTableInit', data)
}
function getPersonImage(data) {
  return generalRequest('/api/teach/getPersonImage', data)
}

function teacherInit(data) {
    return generalRequest('/api/teach/teacherInit', data)
}
function teacherQuery(data) {
    return generalRequest('/api/teach/teacherQuery', data)
}
function teacherDelete(data) {
    return generalRequest('/api/teach/teacherDelete', data)
}
function teacherEditInit(data) {
    return generalRequest('/api/teach/teacherEditInit', data)
}
function teacherEditSubmit(data) {
    return generalRequest('/api/teach/teacherEditSubmit', data)
}
function getTeacherImage(data) {
    return generalRequest('/api/teach/getTeacherImage', data)
}
function teacherIntroductionInit(data) {
    return generalRequest('/api/teach/teacherIntroductionInit', data)
}
function teacherIntroductionEditInit(data) {
    return generalRequest('/api/teach/teacherIntroductionEditInit', data)
}
function teacherIntroductionEditSubmit(data) {
    return generalRequest('/api/teach/teacherIntroductionEditSubmit', data)
}
// 修改
function  studentIntroductionInit(data){
    return generalRequest('/api/teach/studentIntroductionInit',data)
}
function studentIntroductionEditInit(data) {
    return generalRequest('/api/teach/studentIntroductionEditInit', data)
}
function studentIntroductionEditSubmit(data) {
    return generalRequest('/api/teach/studentIntroductionEditSubmit', data)
}
//修改



function courseInit(data) {
    return generalRequest('/api/teach/courseInit', data)
}
function courseQuery(data) {
    return generalRequest('/api/teach/courseQuery', data)
}
function courseDelete(data) {
    return generalRequest('/api/teach/courseDelete', data)
}

function courseEditInit(data) {
    return generalRequest('/api/teach/courseEditInit', data)
}
function courseEditSubmit(data) {
    return generalRequest('/api/teach/courseEditSubmit', data)
}

function courseChooseInit(data) {
    return generalRequest('/api/teach/courseChooseInit', data)
}
function courseChooseQuery(data) {
    return generalRequest('/api/teach/courseChooseQuery', data)
}
function courseChooseDelete(data) {
    return generalRequest('/api/teach/courseChooseDelete', data)
}

function courseChooseEditInit(data) {
    return generalRequest('/api/teach/courseChooseEditInit', data)
}
function courseChooseEditSubmit(data) {
    return generalRequest('/api/teach/courseChooseEditSubmit', data)
}

function activityInit(data) {
    return generalRequest('/api/teach/activityInit', data)
}
function activityQuery(data) {
    return generalRequest('/api/teach/activityQuery', data)
}
function activityDelete(data) {
    return generalRequest('/api/teach/activityDelete', data)
}

function activityEditInit(data) {
    return generalRequest('/api/teach/activityEditInit', data)
}
function activityEditSubmit(data) {
    return generalRequest('/api/teach/activityEditSubmit', data)
}

function chooserInit(data) {
    return generalRequest('/api/teach/chooserInit', data)
}
function chooserQuery(data) {
    return generalRequest('/api/teach/chooserQuery', data)
}
function chooserDelete(data) {
    return generalRequest('/api/teach/chooserDelete', data)
}

function chooserEditInit(data) {
    return generalRequest('/api/teach/chooserEditInit', data)
}
function chooserEditSubmit(data) {
    return generalRequest('/api/teach/chooserEditSubmit', data)
}
function achievementInit(data) {
    return generalRequest('/api/teach/achievementInit', data)
}
function achievementQuery(data) {
    return generalRequest('/api/teach/achievementQuery', data)
}
function achievementDelete(data) {
    return generalRequest('/api/teach/achievementDelete', data)
}

function achievementEditInit(data) {
    return generalRequest('/api/teach/achievementEditInit', data)
}
function achievementEditSubmit(data) {
    return generalRequest('/api/teach/achievementEditSubmit', data)
}
function achievementchooserInit(data) {
    return generalRequest('/api/teach/achievementchooserInit', data)
}
function achievementchooserQuery(data) {
    return generalRequest('/api/teach/achievementchooserQuery', data)
}
function achievementchooserDelete(data) {
    return generalRequest('/api/teach/achievementchooserDelete', data)
}

function achievementchooserEditInit(data) {
    return generalRequest('/api/teach/achievementchooserEditInit', data)
}
function achievementchooserEditSubmit(data) {
    return generalRequest('/api/teach/achievementchooserEditSubmit', data)
}

export {
    generalRequest,
    getStudentIntroduceData,
    getUimsConfig,
    sendCaptcha,
    verifyCaptcha,

    studentInit,
    studentQuery,
    studentDelete,
    studentEditInit,
    studentEditSubmit,
    studentCourseTableInit,
    getPersonImage,

    teacherInit,
    teacherQuery,
    teacherDelete,
    teacherEditInit,
    teacherEditSubmit,
    getTeacherImage,
    teacherIntroductionInit,
    teacherIntroductionEditInit,
    teacherIntroductionEditSubmit,
    //修改
    studentIntroductionInit,
    studentIntroductionEditInit,
    studentIntroductionEditSubmit,
    //修改
    courseInit,
    courseQuery,
    courseDelete,
    courseEditInit,
    courseEditSubmit,

    courseChooseInit,
    courseChooseQuery,
    courseChooseDelete,
    courseChooseEditInit,
    courseChooseEditSubmit,

    activityInit,
    activityQuery,
    activityDelete,
    activityEditInit,
    activityEditSubmit,

    chooserInit,
    chooserQuery,
    chooserDelete,
    chooserEditInit,
    chooserEditSubmit,
    achievementInit,
    achievementQuery,
    achievementDelete,
    achievementEditInit,
    achievementEditSubmit,

    achievementchooserInit,
    achievementchooserQuery,
    achievementchooserDelete,
    achievementchooserEditInit,
    achievementchooserEditSubmit,
}



export function downloadPost(url, label, data) {

    const requestOptions = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + store.state.jwtToken
        },
        body: JSON.stringify({
            data: data
        })
    };
    return fetch(url, requestOptions)
        .then(async response => {
            const blob = await response.blob()

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = response.status;
                return Promise.reject(error)
            }
            const link = document.createElement('a')
            link.href = URL.createObjectURL(blob)
            link.download = label
            link.click()
            URL.revokeObjectURL(link.href)
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}
