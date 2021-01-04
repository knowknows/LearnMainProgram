// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagepaths: ""
  },
  handlebindtap() {
    //系统API，让用户在选中图片(或者拍照)
    console.log('------------');
    wx.chooseImage({
      success: (res) => {
        console.log('this', this);
        //取出我们的路径
        const path = res.tempFilePaths[0];
        this.setData({
          imagepaths: path
        })
        //  imagepaths=path;
        // console.log(res);
      }
    })
  }
})