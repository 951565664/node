var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/loadCarFinalState.smvc', function(req, res, next) {
  res.send({
    "result": 0,
    "msg": "参数列表成功",
    "data": {
      "authParam": {
        "tenantId": "4eaf9423eb0043648e502134586b088a"
      },
      "data":[
        {"name":"车辆状态一","id":"zc1"},
        {"name":"车辆状态二","id":"zc2"},
        {"name":"车辆状态三","id":"zc3"}
      ]
    }
  });
});

module.exports = router;
