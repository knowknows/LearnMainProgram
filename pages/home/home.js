// pages/home/home.js
Page({
  data: {
    name: 'coderWhy',
    movie: ['西游记', '哆啦A梦', '红楼梦'],
    counter: 0
  },
  add() {
    this.setData({
      counter: this.data.counter + 1
    })
  },
  nadd() {
    if (this.data.counter > 0) {
      this.setData({
        counter: this.data.counter - 1
      })
    } else {
      console.log('hahha');
      return;
    }
  }
})