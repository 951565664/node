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
          "total": 15,
          "rows": new Array(20).fill(1).map((item, key) => ({
            "id": `${key}id`,
            "fileJson": '[{"id":"58e16b7181824a4c966ad27b1c1f3ffe","name":"jcss报表权限、.doc"},{"id":"29164b96fa34464d95cb466af4be600b","name":"1.png"},{"id":"bbc8948710cf4e3dbe20825a497ba15e","name":"1-0-0.zip"}]',
            "fileJsonList": [{ "id": "58e16b7181824a4c966ad27b1c1f3ffe", "name": "jcss报表权限、.doc" }, { "id": "29164b96fa34464d95cb466af4be600b", "name": "1.png" }, { "id": "bbc8948710cf4e3dbe20825a497ba15e", "name": "1-0-0.zip" }],
            "approvalStateStr": "审核状态",
            "carId": "b5e30f376b2f4de6923347d7f307e246",
            "carCode": "测试车辆29",
            "driverName": `${key}驾驶员`,
            "maintainAddressId": "zc1",
            "maintainAddressStr": "单位1",
            "convalesceFee": `${key}`,
            "convalesceDate": "2017-11-18",
            "convalesceGrade": "保养等级",
            "convalesceContent": '报修项目',
            "approvalMemo": '审核备注',
            "convalescePart": '保养零件',
            "memo": 'memo备注',
          }))
        }
      }
    });
  }
);
router.get('/save.smvc',
  function (req, res, next) {
    for (let [key, value] of Object.entries(JSON.parse(req.query.parameters).param)) {
      console.log(key, value);
    }
    res.send({
      "result": 0,
      "msg": "保存成功",
      "data": {
        "authParam": {
          "tenantId": "4eaf9423eb0043648e502134586b088a"
        },
        "data": {}

      }
    });
  }
);
router.get('/update.smvc',
  function (req, res, next) {
    for (let [key, value] of Object.entries(JSON.parse(req.query.parameters).param)) {
      console.log(key, value);
    }
    res.send({
      "result": 0,
      "msg": "保存成功",
      "data": {
        "authParam": {
          "tenantId": "4eaf9423eb0043648e502134586b088a"
        },
        "data": {}

      }
    });
  }
);

module.exports = router;