let time = {
  //获取毫秒数
  getMillisecond: function (num, type) {
    switch (type) {
      case 'day':
        return num * 24 * 60 * 60 * 1000
        break
      case 'hour':
        return num * 60 * 60 * 1000
        break
      case 'minute':
        return num * 60 * 1000
        break
      case 'second':
        return num * 1000
        break
    }
  },
  //转换毫秒数
  formatMillisecond: function (num, to) {
    switch (to) {
      case 'day':
        return num / 24 / 60 / 60 / 1000
        break
      case 'hour':
        return num / 60 / 60 / 1000
        break
      case 'minute':
        return num / 60 / 1000
        break
      case 'second':
        return num / 1000
        break
    }
  },
  //随机间歇执行
  nextTime: 0,
  frequency: function (callback,speed) {
    return setInterval(() => {
      let now = new Date().getTime();
      if (now >= this.nextTime) {
        callback()
        this.nextTime = now + Math.random()*speed
      }
    }, 300)
  }
}

export default time
