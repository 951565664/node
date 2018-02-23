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
          "planAllow": `${key}planAllow`,
          "chargeSituation": `${key}chargeSituation`,
          "guideIndex": `${key}guideIndex`,
          "filthFlushWay": `${key}filthFlushWay`,
          "cleanWay": `${key}cleanWay`,
          "planAllowStr": `${key}planAllowStr`,
          "chargeSituationStr": `${key}chargeSituationStr`,
          "guideIndexStr": `${key}guideIndexStr`,
          "filthFlushWayStr": `${key}filthFlushWayStr`,
          "cleanWayStr": `${key}cleanWayStr`,
          accUnitId: "0df7b9b46a6a450e8b3583b3a6105b5d",
          accUnitName: "单位2-2",
          address: "安远路899号地址",
          dePositionStr: "121.4383884948154,31.240160113233987",

          divisionId: "c3d5623630ab4513a50409e9a2e9368d",
          divisionName: "丰台区",
          hasAdvertisementDeviceStr: "有",
          hasChargingPlug: "1",
          hasChargingPlugStr: "有",
          hasEmergencyCallDevice: "1",
          hasEmergencyCallDeviceStr: "有",
          hasMonitorDevice: "1",
          hasMonitorDeviceStr: "有",
          hasParking: "1",
          hasParkingStr: "有",
          hasWiFi: "1",
          hasWiFiStr: "有",
          jcssClassId: "1946f7446b514e8d8cfcbeddeee14242",
          jcssClassText: "固定",
          jcssCode: "公厕GC0001",
          jcssCreateTimeStr: "2016-01-01",
          jcssGradeId: "d9199a00c43e4abb8d9699a1cb1301c0",
          jcssGradeText: "一类",
          jcssName: "安远路899号",
          lifeCycleStage: "1",
          manageStaffId: "66560558f1cf406ca3e502d9c8c42f25",
          manageStaffName: "小徐",
          manageUnitId: "382bc72a502c4f12aaed72112874605a",
          manageUnitName: "单位1",
          orderIndex: 1,
          tdbImgId: "aa2650b5e64442a48a36c82853e38c1b",
          tdbStr: "JCSS_QR_47cba7344560486ba4f3c02c0d7cc8e9",
          typeId: "5db31e67083f4539ba4a5ba6932d31e1",

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
    'planAllow',
    'chargeSituation',
    'guideIndex',
    'filthFlushWay',
    'cleanWay'
  ];
  for (let [key, value] of Object.entries(param)) {
    if (checkKeyArrays.indexOf(key) !== -1) {
      console.log(key + ': ' + value);
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
    'planAllow',
    'chargeSituation',
    'guideIndex',
    'filthFlushWay',
    'cleanWay'
  ];
  for (let [key, value] of Object.entries(param)) {
    if (checkKeyArrays.indexOf(key) !== -1) {
      console.log(key + ': ' + value);
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



