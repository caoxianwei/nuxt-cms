let animate = {
  /**
   * opts:
   * delay 是 setInterval 第二个参数
   * duration 是这个动画需要多长时间完成
   * delta 这是一个函数，代表时间进度（progress）和动画进度的关系。如：delta = function(p){ return p; }：代表动画是线性的
   * step 真正执行动画（操作elem.style）的函数。它接受当前动画进度，然后应用到element上。
   * @param opts
   */
  animate: function (opts) {
    let start = new Date;
    let id = setInterval(function () {
      let timePassed = new Date - start;
      let progress = timePassed / opts.duration; //progress 是时间的进度（currentTime/duration）
      if (progress > 1) progress = 1;
      let delta = opts.delta(progress);
      opts.step(delta);
      if (progress == 1) clearInterval(id);
    }, opts.delay || 10);
  },
}

export default animate
