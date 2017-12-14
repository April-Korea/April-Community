<template>
  <div id="login">
    <div class="form">
      <div class="input-group">
      <input type="text" placeholder="아이디">
      <input type="password" placeholder="비밀번호">
    </div>
    <button>로그인</button>
    </div>
    <div class="login-etc">
      <label><input type="checkbox" /><span></span>로그인 유지</label>
      <a href="#">아이디/비밀번호 찾기</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return{ }
  }
}
</script>

<style scoped>
  #login { position: absolute; top: 10px; right: 0; width: 300px; padding: 10px 10px 5px 10px; border: 1px solid #E1E1E1; background-color: #FFF; z-index: 100; }
  #login .form { display: flex; }
  #login .form .input-group { flex: 1; }
  #login .form button { flex-basis: 100px; margin-left: 3px; border: none; background-color: #282C34; color: #FFF; font-size: .8em; }

  #login .login-etc { text-align: left; }
  #login .login-etc a { float: right; height: 30px; line-height: 30px; font-size: .8em; }
  #login .login-etc label { position: relative; display: inline-block; width: 120px; height: 30px; line-height: 30px; padding-left: 30px; font-size: .8em; text-align: left; }
  #login .login-etc label input { display: none; }
  #login .login-etc label input + span { position: absolute; top: 0; left: 0; display: inline-block; width: 20px; height: 20px; margin: 5px 5px 5px 0; border: 1px solid#DFDFDF; box-sizing: border-box; }
  #login .login-etc label input:checked + span::before { position: absolute; display: block; content: ' '; top: 2px; left: 2px; width: 14px; height: 14px; background-color: #282C34; box-sizing: border-box; }
</style>
