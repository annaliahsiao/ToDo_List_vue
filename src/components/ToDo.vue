<template lang="pug">
#todo_from
    h1 ToDo List
    #todo_add
        h3 新增待辦事項
        label
            span 待辦項目：
            input(type="text" v-model="enter_todo" placeholder="新增工作待辦事項")
        label
            span 任務指派：
            select(v-model="task_member")
                option(selected disabled) 請選擇指派人
                option(v-for="item in member" :value="item") {{item}}
        br
        label
            span 製作週期：
            date-picker(v-model="date" range format="YYYY/MM/DD" placeholder="新增任務到期時間" valueType="format")
        a(href="javascript:void(0);" @click="add_item()")#add_todo_btn.btn Add
        br
        br
        span#todo_list_demo 預計新增待辦： {{enter_todo}}，負責人：{{task_member}}，結束日期：{{date[1]}}
    
    br
    hr
    br
    label#search_bar
        span 搜尋：
        #search_input
            img(src='https://img.icons8.com/material-rounded/24/a2b59f/search.png')
            input(type="text" placeholder="搜尋工作待辦項目或負責人" v-model="keyword" @keyup="filter")
    br
    br
    #todo_list_area.flex
        .col
            h2 {{todo_msg}}
            .todo_area
                img(src='https://img.icons8.com/cotton/64/000000/baby-calendar.png' v-if="")
                ul#plan.todo_list
                    li(v-for="(todo,index) in todo_list" v-if="todo.todo_flag && !todo.filter")
                        label
                            input(type="checkbox" @click="done_item(todo)")
                            span 負責人：{{todo.member}}，待辦事項：{{todo.work}}，結束日期：{{todo.time[1]}}。
                            a(href="javascript:void(0);" @click="del_item(index)").del
                                img(src='https://img.icons8.com/fluent-systems-filled/48/666666/trash.png')
        .col
            h2 {{done_msg}}
            .todo_area.off
                img(src='https://img.icons8.com/cotton/64/000000/management.png')
                ul#clean.todo_list.off
                    li(v-for="done in todo_list" v-if="done.todo_flag == false && !done.filter")
                        label
                            input(type="checkbox" checked @click="done_item(done)")
                            span 負責人：{{done.member}}，待辦事項：{{done.work}}，結束日期：{{done.time[1]}}。
</template>
<script>
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
export default {
    name: 'ToDo',
    props: {
        todo_msg: String,
        done_msg: String
    },
    components: {
        DatePicker
    },
    data:()=>{
        return{
            keyword: '',
            member: ['Anna','Sun','Mars','Joe','Gary','Eric','Darren','Jonathan','Ken'],
            enter_todo: '',
            task_member: '請選擇指派人',
            date: [null,null],
            todo_list: [{'filter':false,'todo_flag':false,'member':'Anna','work':'準備履歷','time':['2021/06/05','2021/06/07']},{'filter':false,'todo_flag':false,'member':'Anna','work':'投履歷','time':['2021/06/08','2021/06/10']},{'filter':false,'todo_flag':true,'member':'Anna','work':'製作ToDo List','time':['2021/06/11','2021/06/14']},{'filter':false,'todo_flag':true,'member':'Sun','work':'檢查ToDo List','time':['2021/06/14','2021/06/17']},{'filter':false,'todo_flag':true,'member':'Joe','work':'使用ToDo List','time':['2021/06/14','2021/06/17']},{'filter':false,'todo_flag':false,'member':'Mars','work':'推薦ToDo List','time':['2021/06/17','2021/06/20']}],
        }
    },
    methods:{
        filter(){
            if(this.keyword != ''){
                this.todo_list.forEach((value, index) => {
                    if(value.member.toLowerCase().indexOf(this.keyword.toLowerCase()) != -1 || value.work.toLowerCase().indexOf(this.keyword.toLowerCase()) != -1){
                        value.filter = false;
                    }else{
                        value.filter = true;
                    }
                });
            }else{
                this.todo_list.forEach((value, index) => {
                    value.filter = false;
                });
            }
            
        },
        add_item(){
            this.todo_list.push({
                'filter': false,
                'todo_flag': true,
                'member': this.task_member,
                'work': this.enter_todo,
                'time': this.date
            });
            this.task_member = '請選擇指派人';
            this.enter_todo = '';
            this.dat = [null,null];
        },
        del_item(index){
            if(confirm("確定要刪除嗎？")){
                this.$delete(this.todo_list,index)  
            }
        },
        done_item(todo){
            todo.todo_flag = !todo.todo_flag;
        }
    }
}
</script>

<style scoped lang="stylus">
</style>