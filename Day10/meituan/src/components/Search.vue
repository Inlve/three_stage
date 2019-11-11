<template >
    <form action = "/" >
        <van-search
                v-model = "value"
                placeholder = "请输入搜索关键词"
                show-action
                shape="round"
                @search = "onSearch"
                @cancel = "onCancel"
        />
    </form >
</template >

<script >
    import Vue from 'vue';
    import {Search} from 'vant';

    Vue.use(Search);
    export default {
        name: "Search",
        data(){
            return{
                value:''
            }
        },
        methods: {
            onSearch () {},
            onCancel () {}
        }
    }
</script >

<style scoped >

</style >