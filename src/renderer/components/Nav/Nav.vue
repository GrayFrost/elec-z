<template>
  <div id="nav">
    <router-link to="/file" class="link">文件</router-link>
    <router-link to="/play" class="link">音视</router-link>
    <router-link to="/chat" class="link">socket</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
#nav{
    margin: 10px 0;
}
.link {
  display: block;
  height: 30px;
  line-height: 30px;
  text-decoration: none;
  color: #fff;
  text-align: center;
}
</style>


