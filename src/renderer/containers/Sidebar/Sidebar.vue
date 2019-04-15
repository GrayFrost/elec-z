<template>
  <div id="sidebar">
    <div class="top">
      <div>头</div>
      <div>
          <router-link to="/file">文件</router-link>
      </div>
    </div>
    <div class="bottom">bot</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#sidebar {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>


