var express = require('express');
var router = express.Router();
var urllib = require('url');
const URL_AFTER_Fix = '.smvc'

router.get(`/queryList${URL_AFTER_Fix}`, function (req, res, next) {
  // for (let [key, value] of Object.entries(req.query)) {
  //   console.log(key, value);
  // }
  const { jcssTenantTypeId, standardCode } = req.query;
  res.jsonp({
    "result": 0,
    "msg": "分页查询数据成功",
    "data": {
      data: {
        "total": 20,
        "rows": new Array(25).fill(1).map((item, key) => ({
          "id": `${key}id`,
          divisionId: "9d27a377b3244a558194e67f31949210",
          divisionName: "江宁路街道",
          enabled: "1",
          jcssClassId: "bcad7bec67194c4ba79e79ebb8912cfd",
          jcssClassText: "类型1",
          jcssCode: "CodeC2",
          jcssGradeId: "4c7f728ae5d9491392080943f3ed5ef7",
          jcssGradeText: "等级1",
          jcssName: "清洁楼12",
          lifeCycleStage: "3",
          manageUnitId: "03cc5c810d8647b7ace192ae616f2679",
          manageUnitName: "单位1-1",
          orderIndex: 1,
          tdbImgId: "cfe44176c2ae491586ee2339f6058b44",
          tdbStr: "JCSS_QR_3734bbfde533434fbfb64b3c244871f7",
          tenantId: "4eaf9423eb0043648e502134586b088a",
          typeId: "4c9dd3160b2643f9a4d9c0e974e70098",
        })).filter(item => (standardCode === undefined || standardCode === item.standardCode) && item.jcssTenantTypeId === jcssTenantTypeId)
      }
    }
  });
})
router.get(`/save${URL_AFTER_Fix}`, function (req, res, next) {

  var query = urllib.parse(req.url, true).query;
  var param = JSON.parse(query.parameters).param;
  // console.log(typeof(param));
  const checkKeyArrays = [
    'containerNum',
    'compressorNum',
    'compressorInvest',
    'ownershipBelong',
    'collectWay',
    'operateUnitId',
  ];
  for (let [key, value] of Object.entries(param)) {
    if(checkKeyArrays.indexOf(key) !== -1){
      console.log(key+': '+value);
    }
  }
  res.jsonp(JSON.stringify({
    "result": 0,
    "msg": "修改成功",
    "data": {}
  }));
})
router.get(`/update${URL_AFTER_Fix}`, function (req, res, next) {

  var query = urllib.parse(req.url, true).query;
  var param = JSON.parse(query.parameters).param;
  // console.log(typeof(param));
  const checkKeyArrays = [
    'containerNum',
    'compressorNum',
    'compressorInvest',
    'ownershipBelong',
    'collectWay',
    'operateUnitId',
  ];
  for (let [key, value] of Object.entries(param)) {
    if(checkKeyArrays.indexOf(key) !== -1){
      console.log(key+': '+value);
    }
  }
  res.jsonp(JSON.stringify({
    "result": 0,
    "msg": "修改成功",
    "data": {}
  }));
})
router.get(`/deletes${URL_AFTER_Fix}`, function (req, res, next) {
  res.send({
    "result": 0,
    "msg": "删除成功",
    "data": {}
  });
})

router.get(`/queryLevelList${URL_AFTER_Fix}`, function (req, res, next) {
  // for (let [key, value] of Object.entries(req.query)) {
  //   console.log(key, value);
  // }
  const { commonStandardConfigId } = req.query
  let resData = {

  }
  if (!commonStandardConfigId) {
    res.send({
      "result": 1,
      "msg": "commonStandardConfigId 为空",
      "data": {}
    });
    return
  }
  let rows = new Array(25).fill(1).map((item, key) => ({
    id: `${key}id`,
    beenAlarm: `${key}beenAlarm`,	//是否报警	number	0，1
    beenAlarmName: `${key}beenAlarmName`,	//是否报警	string	
    commonStandardConfigId: `${key}`,	//指标id	string	
    commonStandardConfigName: `${key}commonStandardConfigName`,	//指标名称	string	
    commonStandardLevelId: `${key}`,	//等级id	string	
    commonStandardLevelLevel: `${key}`,	//报警等级	number	
    commonStandardLevelName: `${key}commonStandardLevelName`,	//等级name	string	
    commonStandardLevelUnit: `${key}commonStandardLevelUnit`,	//等级度量单位	string	
    value: `${key}value`,	//值	number	值为空的，报警记录id也为空

  })).filter(item => (commonStandardConfigId === undefined || (parseInt(commonStandardConfigId) % 3) === (item.commonStandardConfigId % 3)));
  res.send({
    "result": 0,
    "msg": "",
    "data": {
      "total": rows.length,
      "rows": rows
    }
  });
})

module.exports = router;



