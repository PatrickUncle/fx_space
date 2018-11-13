//获取应用实例
var util = require('../../../utils/util.js')

Page({
  data: {
    fileList: [
      {
        image: "../../../images/p_hdownload.png",
        Uploader: "逍遥",
        fileclass: "学习资料",
        filename: "高数期末卷",
        time: "2018/11/12"
      },
      {
        image: "../../../images/p_hdownload.png",
        Uploader: "逍遥",
        fileclass: "学习资料",
        filename: "高数期末卷",
        time: "2018/11/12"
      },
      {
        image: "../../../images/p_hdownload.png",
        Uploader: "逍遥",
        fileclass: "学习资料",
        filename: "高数期末卷",
        time: "2018/11/12"
      },
    ]
  },

  onLoad: function () {

  },

  /**
   * 显示删除按钮
   */
  showDeleteButton: function (e) {
    let fileindex = e.currentTarget.dataset.fileindex
    this.setXmove(fileindex, -65)
  },

  /**
   * 隐藏删除按钮
   */
  hideDeleteButton: function (e) {
    let fileindex = e.currentTarget.dataset.fileindex

    this.setXmove(fileindex, 0)
  },

  /**
   * 设置movable-view位移
   */
  setXmove: function (fileindex, xmove) {
    let fileList = this.data.fileList
    fileList[fileindex].xmove = xmove

    this.setData({
      fileList: fileList
    })
  },

  /**
   * 处理movable-view移动事件
   */
  handleMovableChange: function (e) {
    if (e.detail.source === 'friction') {
      if (e.detail.x < -30) {
        this.showDeleteButton(e)
      } else {
        this.hideDeleteButton(e)
      }
    } else if (e.detail.source === 'out-of-bounds' && e.detail.x === 0) {
      this.hideDeleteButton(e)
    }
  },

  /**
   * 删除产品
   */
  handleDeleteProduct: function (e) {
    let fileindex = e.currentTarget.dataset.fileindex
    let fileList = this.data.fileList

    fileList.splice(fileindex, 1)

    this.setData({
      fileList: fileList
    })
    if (fileList[fileindex]) {
      this.setXmove(fileindex, 0)
    }
  },

  dload: function (e) {
    let fileindex = e.currentTarget.dataset.fileindex
    let fileList = this.data.fileList
    var TIME = util.formatDate(new Date());
    var obj = fileList[fileindex];
    obj.time = TIME;
    console.log(obj);
  }
})