<template>
    <div class="phone">
        <div>
            <input type="tel" placeholder="请输入手机号码">
        </div>
        <div>
            <input type="tel" class="code-txt" placeholder="请输入验证码">
            <a class="getcode" href="javascript:;">获取验证码</a>
        </div>
        <a id="btn_quick_login" class="sub codeBtn disable-btn" rel="nofollow">登  录</a>
    </div>
</template>

<style scope>
.phone input {
    height: 48px;
    width: 100%;
    border: 0;
    font-size: 14px;
    outline: none;
}
.phone .code-txt {
    width: 64%;
}
.phone div{
    border-bottom: 1px solid #ebebeb;
    position: relative;
}
.getcode{
    position: absolute;
    right: 0;
    top: 0;
    height: 48px;
    line-height: 48px;
    font-size: 14px;
}
#btn_quick_login{
    display: block;
    background: #dbdbdb;
    height: 48px;
    line-height: 48px;
    font-size: 18px;
    margin-top: 25px;
    text-align: center;
    color: #fff;
}
</style>

