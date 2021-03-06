"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(0));

var _toast = _interopRequireDefault(require('./../components/vant/toast/toast.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  data: {
    notice: [],
    Nonotice: ''
  },
  methods: {
    click: function click(e) {
      console.log(this.notice);
    }
  },
  computed: {},
  onLoad: function onLoad(e) {
    var _this = this;

    // 拿到公告
    _toast["default"].loading({
      message: '公告祈祷中...',
      forbidClick: true,
      mask: true,
      duration: 0
    });

    var _jwt = wx.getStorageSync('jwt');

    if (_jwt) {
      var jwt = JSON.parse(_jwt);
      wx.request({
        url: this.$app.$options.globalData.urlRequest + '/api/v1/ann/getann',
        method: 'GET',
        data: {
          jwt: this.jwt
        },
        header: {
          'Authorization': "Bearer ".concat(jwt)
        },
        success: function success(res) {
          if (res.statusCode == 200) {
            console.log(res); // for (var i=0;i<res.data.length;i++)
            //   { 
            //     this.noticetest[i] = {text: res.data[i].text, desc: res.data[i].title}
            //   }
            //   console.log(this.noticetest)

            if (res.data.data.length != 0) {
              _this.notice = res.data.data;
            } else {
              _this.Nonotice = "现在没有公告";
            }

            _toast["default"].clear();
          } else {
            wx.redirectTo({
              url: '../login/index'
            });
          }
        },
        fail: function fail(res) {
          console.log('Timeout');
        }
      });
    } else {
      wx.redirectTo({
        url: '../login/index'
      });
    }
  }
}, {info: {"components":{"van-tabbar":{"path":"./../components/vant/tabbar/index"},"van-tabbar-item":{"path":"./../components/vant/tabbar-item/index"},"ttabbar":{"path":"./../components/tabbar"},"van-button":{"path":"./../components/vant/button/index"},"van-icon":{"path":"./../components/vant/icon/index"},"van-field":{"path":"./../components/vant/field/index"},"van-divider":{"path":"./../components/vant/divider/index"},"van-cell-group":{"path":"./../components/vant/cell-group/index"},"van-toast":{"path":"./../components/vant/toast/index"},"van-panel":{"path":"./../components/vant/panel/index"},"van-cell":{"path":"./../components/vant/cell/index"}},"on":{}}, handlers: {}, models: {}, refs: undefined }, {info: {"components":{"van-tabbar":{"path":"./../components/vant/tabbar/index"},"van-tabbar-item":{"path":"./../components/vant/tabbar-item/index"},"ttabbar":{"path":"./../components/tabbar"},"van-button":{"path":"./../components/vant/button/index"},"van-icon":{"path":"./../components/vant/icon/index"},"van-field":{"path":"./../components/vant/field/index"},"van-divider":{"path":"./../components/vant/divider/index"},"van-cell-group":{"path":"./../components/vant/cell-group/index"},"van-toast":{"path":"./../components/vant/toast/index"},"van-panel":{"path":"./../components/vant/panel/index"},"van-cell":{"path":"./../components/vant/cell/index"}},"on":{}}, handlers: {}, models: {}, refs: undefined });