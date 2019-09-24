// 导航动画
<template>
  <div class="tooltips-main-component">
    <ul class="nav-list">
      <li class="nav-list-item">
        <a href="#" class="tooltip">
          Home
          <span class="tooltip-content tooltip-content-1">
            <i class="iconfont icon-iconfonticon-zichan"></i>
          </span>
        </a>
      </li>
      <li class="nav-list-item">
        <a href="#" class="tooltip">
          Life
          <span class="tooltip-content tooltip-content-2">
            <i class="iconfont icon-iconfonticon-xitong"></i>
          </span>
        </a>
      </li>
      <li class="nav-list-item">
        <a href="#" class="tooltip">
          About
          <span class="tooltip-content tooltip-content-3">
            <i class="iconfont icon-iconfonticon-gaojin"></i>
          </span>
        </a>
      </li>
      <li class="nav-list-item">
        <a href="#" class="tooltip">
          My
          <span class="tooltip-content tooltip-content-4">
            <i class="iconfont icon-iconfonticon-yonghu"></i>
          </span>
        </a>
      </li>
      <li class="nav-list-item">
        <a href="#" class="tooltip">
          Hello
          <span class="tooltip-content tooltip-content-5">
            <i class="iconfont icon-iconfonticon-yonghu"></i>
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.tooltips-main-component {
  height: 100vh;
  text-align: center;
  background: #31c59c;
  .nav-list {
    display: inline-block;
    padding-top: 200px;
    .nav-list-item {
      position: relative;
      display: inline-block;
      width: 100px;
      margin: 0 50px;
      font-size: 24px;
      font-weight: bold;
      cursor: pointer;
      .tooltip {
        display: inline-block;
        width: 80px;
        height: 40px;
        border-bottom: 3px solid rgba(0, 0, 0, 0.3);
        color: rgba(0, 0, 0, 0.4);
        transition: all 0.3s;
        &:hover {
          width: 100%;
          color: rgba(255, 255, 255, 1);
          border-color: rgba(255, 255, 255, 1);
        }
        &:hover .tooltip-content {
          display: block;
          opacity: 1;
          transform: translate3d(0, 0, 0) rotate3d(1, 1, 1, 0) scale3d(1, 1, 1);
        }
        &:hover .tooltip-content i {
          opacity: 1;
          font-size: 30px;
          transform: translate3d(0, 0, 0) rotate3d(1, 1, 1, 0) scale3d(1, 1, 1);
        }
        .tooltip-content {
          position: absolute;
          left: 50%;
          bottom: 100%;
          // display: none;
          width: 80px;
          height: 80px;
          // line-height: 80px;
          margin-left: -40px;
          margin-bottom: 20px;
          text-align: center;
          background: white;
          border-radius: 50%;
          transform-origin: 50% 100%;
          opacity: 0;
          transition: all 0.3s;
          &::after {
            position: absolute;
            top: 100%;
            left: 50%;
            display: block;
            content: "";
            width: 30px;
            height: 30px;
            margin-left: -15px;
            margin-top: -12px;
            background: url("../../static/img/bottom-arrows.png") no-repeat
              center center;
            background-size: 100% 100%;
            transition: all 0.3s;
          }
          i {
            display: inline-block;
            margin-top: 20px;
            font-size: 24px;
            color: #00ff80;
            opacity: 0;
            transition: all 0.3s;
          }
        }
        .tooltip-content-1 {
          transform: translate3d(0, 10px, 0) rotate3d(1, 1, 1, 45deg);
        }
        .tooltip-content-2 {
          transform: rotate3d(0, 1, 0, 90deg);
          i {
            transform: translate3d(0, 10px, 0) rotate3d(0, 1, 0, 90deg);
          }
        }
        .tooltip-content-3 {
          transform: translate3d(0, 15px, 0) rotate3d(1, 1, 1, 0);
          i {
            transform: translate3d(0, 10px, 0);
          }
        }
        .tooltip-content-4 {
          transform: rotate3d(1, 0, 0, 90deg);
          i {
            transform: rotate3d(1, 0, 0, 90deg);
          }
        }
        .tooltip-content-5 {
          transform: translate3d(0, -15px, 0);
          i {
            transform: translate3d(0, 15px, 0);
          }
        }
      }
    }
  }
}
</style>
