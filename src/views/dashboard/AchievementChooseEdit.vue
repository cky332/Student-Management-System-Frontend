<template>
    <Navi />
    <div class="app-container">
        <div class="table_center">
            <table class="content">
                <tr>
                    <td colspan="6" style="font-size: 24px; font-weight: bold; color: #304156">
                        {{formName}}
                    </td>
                </tr>

                <tr style="height: 40px">
                    <td colspan="1" width="200">成果名</td>
                    <td colspan="5">
                        <el-select v-model="form. achievementId" placeholder="请选择成果名" style="width: 90%">
                            <el-option v-for="items in  achievementIdList" :key="items.value" :label="items.label" :value="items.value">
                            </el-option>
                        </el-select>
                    </td>
                </tr>

                <tr style="height: 40px">
                    <td colspan="1" width="200">姓名</td>
                    <td colspan="5">
                        <el-select v-model="form.studentId" placeholder="请选择学生" style="width: 90%">
                            <el-option v-for="items in studentIdList" :key="items.value" :label="items.label" :value="items.value">
                            </el-option>
                        </el-select>
                    </td>
                </tr>



            </table>
        </div>

        <div class="centerButton">
            <el-button size="mini" class="rowButton" @click="doSumit()">提交</el-button>
            <el-button size="mini" class="rowButton" @click="back()">返回</el-button>
        </div>
    </div>
</template>

<script>
    import Navi from "@/components/Navi";
    import router from "@/router/index.js";
    import { achievementchooserEditInit, achievementchooserEditSubmit } from "@/service/genServ.js";
    export default {
        name: "AchievementChooserEdit",
        data() {
            return {
                isadd:false,
                form: {
                    achievementName: "",
                    achievementId: "",
                    studentName: "",
                    studentId: "",

                },
                studentIdList: [],
                achievementIdList: [],
                formName: "成果信息编辑",
            };
        },
        components: {
            Navi,
        },
        created() {
            this.id = this.$route.query.id;
            console.log("ssss"+this.id )
            this.isadd = this.$route.query.isadd;
            let aid=this.$route.query.aid;
            this.isadd = this.$route.query.isadd;
            this.fetchData(aid);
            console.log(this.isadd+'css')
        },
        methods: {
            fetchData(aid) {
                console.log(aid+'lll')
                if(aid==undefined){
                achievementchooserEditInit({ id: this.id,form: this.form }).then((res) => {
                    if(this.isadd==='true'){
                    this.form.achievementDate='';
                    this.form.achievementId='';
                    this.form.achievementName='';
                    this.form.studentId='';
                    }else{
                        this.form =res.data.form;
                    }
                    this.studentIdList = res.data.studentIdList;
                    this. achievementIdList = res.data. achievementIdList;
                });}else{
                    achievementchooserEditInit({ id: this.id,form: this.form,aid: aid }).then((res) => {
                        if(this.isadd==='true'){
                            this.form.achievementDate='';
                            this.form.achievementId='';
                            this.form.achievementName='';
                            this.form.studentId='';
                        }else{
                            this.form =res.data.form;
                        }
                        this.studentIdList = res.data.studentIdList;
                        this. achievementIdList = res.data. achievementIdList;
                    });
                }
            },

            doSumit() {
                achievementchooserEditSubmit({ id: this.id, form: this.form }).then(
                    (res) => {
                        if (res.code === 0) {
                            this.$message({
                                message: '保存成功！',
                                type: 'success',
                            })
                            this.id = res.data.id;
                        } else {
                            this.$message({
                                message: res.msg,
                                type: 'warning',
                            })
                        }
                    }
                );
            },

            back() {
                router.push('/AchievementChooser')
            }
        },
    };
</script>
