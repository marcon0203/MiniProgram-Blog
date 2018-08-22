//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse("button.open-type.getUserInfo"),
    tabTouch: false, //tab点击会触发swiper的滚动，会导致调用两次相同的服务，使用此tag来阻止swiper调用服务，只是切换page
    window_width: wx.getSystemInfoSync().windowWidth || 375, // 单位是px
    tab_config: {
      tabs: ["全部", "前端", "后端", "设计", "产品","更多>>"], // tabs
      fixed: false, // tabbar是否固定宽度
      active_tab: 0, //当前激活的tab
      item_width: 70, // 单位是px
      tab_left: 0, // 如果tabbar不是固定宽度，则目前左移的位置
      underline: {
        offset: 0, //下划线的位移
        margins: 20 //下划线的左右间距
      }
    },
    swipe_config: {
      indicator_dots: false, // 不显示小圆点
      autoplay: false, // 自动切换
      interval: 2000, // 自动切换频率
      duration: 500, // 切换时间
      current: 0 // 当前激活的panel
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: "../logs/logs"
    });
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      });
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        });
      };
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo;
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          });
        }
      });
    }
  },
  getUserInfo: function(e) {
    console.log(e);
    app.globalData.userInfo = e.detail.userInfo;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    });
  },
  /**
   * 更换页面到指定page ，从0开始
   */
  updateSelectedPage(page) {
    let that = this;
    console.log("========== updateSelectedPage" + page);
    let { window_width, tab_config, swipe_config } = this.data;
    let underline_offset = tab_config.item_width * page;
    
    tab_config.active_tab = page;
    swipe_config.current = page;
    tab_config.underline.offset = underline_offset;
    if (!tab_config.fixed) {
      // 如果tab不是固定的 就要 检测tab是否被遮挡
      let show_item_num = Math.round(window_width / tab_config.item_width); // 一个界面完整显示的tab item个数
      let min_left_item = tab_config.item_width * (page - show_item_num + 1); // 最小scroll-left
      let max_left_item = tab_config.item_width * page; //  最大scroll-left
      if (
        tab_config.tab_left < min_left_item ||
        tab_config.tab_left > max_left_item
      ) {
        // 如果被遮挡，则要移到当前元素居中位置
        tab_config.tab_left =
          max_left_item - (window_width - tab_config.item_width) / 2;
      }
    }
    that.setData({
      tab_config: tab_config,
      swipe_config: swipe_config
    });
    //调用页面的接口更新页面
    // that.loadOrderList(page);
  },

  /**
   * tab的点击事件
   */
  handlerTabTap(e) {
    this.setData({
      tabTouch: true
    });
    this.updateSelectedPage(e.currentTarget.dataset.index);
  },

  /**
   * swiper的滑动事件
   */
  bindChange(e) {
    if (!this.data.tabTouch) {
      // console.log("===== swiperChange " + e.detail.current);
      this.updateSelectedPage(e.detail.current);
    }
  }
});
