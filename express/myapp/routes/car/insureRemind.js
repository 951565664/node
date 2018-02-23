var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/queryList.smvc',
  function (req, res, next) {
    // approvalState	审核状态	string	
    // carId	维修车辆	string	
    // driverName	j驾驶员	string	
    // endDate	维修日期（结束时间）	string	
    // maintainAddressId	维修地点	string	
    // startDate	维修日期(开始时间)	string	中间逗号分隔
    // let {carId,endDate,startDate,approvalState,maintainAddressId,driverName,} = JSON.parse(req.query.parameters).param
    for (let [key, value] of Object.entries(JSON.parse(req.query.parameters).param)) {
      console.log(key, value);
    }
    res.send({
      "result": 0,
      "msg": "分页查询数据成功",
      "data": {
        "authParam": {
          "tenantId": "4eaf9423eb0043648e502134586b088a"
        },
        "data": {
          "total": 20,
          "rows": new Array(20).fill(1).map((item, key) => ({
            "id": `${key}id`,
            "color": `${key % 3 == 0 ? 'red' : (key % 3 == 1 ? 'yellow' : 'blue')}`,
            "carId": "b5e30f376b2f4de6923347d7f307e246",
            "carCode": "测试车辆29",
            "commercialInsuranceDate": "2017-11-18",
            "commercialInsuranceDateStr": "2017-11-18",
            "compulsoryInsuranceDate": "2017-11-18",
            "compulsoryInsuranceDateStr": "2017-11-18",
            "commercialInsuranceState": "commercialInsuranceState",
            "commercialInsuranceStateStr": "commercialInsuranceStateStr",
            "compulsoryInsuranceState": "compulsoryInsuranceState",
            "compulsoryInsuranceStateStr": "compulsoryInsuranceStateStr",
            "carGradeName": "carGradeName1",
            "carClassName": 'carClassName',
          }))
        }
      }
    });
  }
);
router.get('/message.smvc',
  function (req, res, next) {
    res.send({
      "result": 0,
      "msg": "保存成功",
      "data": {
        "authParam": {
          "tenantId": "4eaf9423eb0043648e502134586b088a"
        },
        "data": [{ message: '商业险状态', color: 'red' }, { message: '	交强险最近确认日期', color: 'yellow' }]
      }
    });
  }
);
router.get('/approval.smvc',
  function (req, res, next) {
    for (let [key, value] of Object.entries(JSON.parse(req.query.parameters).param)) {
      console.log(key, value);
    }
    res.send({
      "result": 0,
      "msg": "审批成功",
      "data": {
        "data": {}
      }
    });
  }
);

module.exports = router;
