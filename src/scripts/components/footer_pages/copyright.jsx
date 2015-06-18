var React = require("react");

var Copyright = React.createClass({

  render : function() {
    return (
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <p className="pull-left">
                 &copy; 版权所有 2008-2015 武汉市洪山区康乐家政管理服务中心
              </p>
            </div>
            <div className="col-md-8">
              <ul className="footermenu pull-right">
                <li><a href="#">首页</a></li>
                <li><a href="#">关于我们</a></li>
                <li><a href="#">服务类型</a></li>
                <li><a href="#">家政资讯</a></li>
                <li><a href="#">联系我们</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Copyright;
