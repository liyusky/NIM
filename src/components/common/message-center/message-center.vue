<template>
    <div class="message-center">
        <div class="center-content">
            <header class="content-header">
                <p>消息中心</p>
                <div class="header-button">
                    <img class="button-delete" src="../../../../static/img/delete.png">
                    <img class="button-close" src="../../../../static/img/closebtn.png" @click="closeEvent">
                </div>
            </header>
            <section class="content-tabbar">
                <div class="tabbar-switch">
                    <div class="switch-item" :class="{SwitchItemClick:tabShow}" @click="toggleShowEvent">
                        <span>系统中心</span>
                    </div>
                    <div class="switch-item" :class="{SwitchItemClick:!tabShow}" @click="toggleHideEvent">
                        <span>自定义中心</span>
                    </div>
                </div>
                <div class="tabbar-skip">
                    <div class="skip-item" :class="{skipItemShow:tabShow}">1</div>
                    <div class="skip-item" :class="{skipItemShow:!tabShow}">2</div>
                </div>
            </section>
        </div>    
    </div>    
</template>
<script>
export default{
    data(){
        return{
            tabShow:true
        }
    },
    methods:{
        toggleHideEvent(){
            if(!this.tabShow) return;
            if(this.tabShow){
                this.tabShow = false;
            }
        },
        toggleShowEvent(){
            if(this.tabShow) return;
            if(!this.tabShow){
                this.tabShow = true;
            }
        },
        closeEvent(){
            this.$emit('closeEvent');
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '../../scss/message-center/message-center.scss';
</style>
