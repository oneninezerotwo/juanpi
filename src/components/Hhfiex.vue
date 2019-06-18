<template>
  <div class="brand-sort">
    <table>
      <tbody>
        <tr>
          <td class="all active">推荐</td>
          <td class="price">
            <span>价格</span>
            <span class="sort-icon"></span>
          </td>
          <td class="sales">销量</td>
          <td class="addtime">上新</td>
          <td class="screen">
            <span>筛选</span>
            <span class="sort-icon"></span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "hfiex"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sort-fixed {
  position: fixed;
  top: 0;
  z-index: 200;
}

.brand-sort {
  width: 16rem;
  color: #333;
  background-color: #fff;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 14px;
  border-bottom: 1px solid #ebebeb;
  text-align: center;
}
body * {
  max-height: 9000rem;
}
.brand-sort table {
  width: 100%;
  height: 30px;
}
tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
user agent stylesheet table {
  display: table;
  border-collapse: separate;
  border-spacing: 2px;
  border-color: grey;
}
.brand-sort .active {
  color: #ff464e;
}

.brand-sort table td {
  width: 20%;
}
.brand-sort .screen .sort-icon {
  height: 13px;
  width: 11px;
  margin-left: 5px;
  background-position-y: 0;
  background-position-x: -23px;
}

.brand-sort .sort-icon {
  background: url(https://jp.juancdn.com/jpwebapp_v1/images_v1/icon/sort_sprite.png)
    no-repeat;
  background-size: 49px;
  margin-left: 5px;
  display: inline-block;
}
.brand-sort table td span {
  vertical-align: middle;
}
.brand-sort .price .sort-icon {
  height: 15px;
  width: 8px;
  background-position-x: 0;
}

.brand-sort .sort-icon {
  background: url(https://jp.juancdn.com/jpwebapp_v1/images_v1/icon/sort_sprite.png)
    no-repeat;
  background-size: 49px;
  margin-left: 5px;
  display: inline-block;
}
.brand-sort table td span {
  vertical-align: middle;
}
</style>

