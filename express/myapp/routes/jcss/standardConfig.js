var express = require('express');
var router = express.Router();

const URL_AFTER_Fix = '.smvc'

router.get(`/queryList${URL_AFTER_Fix}`, function (req, res, next) {
  // for (let [key, value] of Object.entries(req.query)) {
  //   console.log(key, value);
  // }
  const { jcssTenantTypeId, standardCode } = req.query
  res.send({
    "result": 0,
    "msg": "分页查询数据成功",
    "data": {
      "total": 20,
      "rows": new Array(25).fill(1).map((item, key) => ({
        "id": `${key}id`,
        color: '#45C400',
        jcssTenantTypeCode: `${key}code`,	    //基础设施类型
        jcssTenantTypeId: `${key % 5}`,	    //基础设施类型
        jcssTenantTypeName: `设施类型${key % 5}`,	    //基础设施类型
        jcssId: `${key}`,	    //基础设施名称
        jcssName: `基础设施${key}`,	    //基础设施名称
        jcssTenantFieldValuesId: `${key}`,	    //设施子类型
        jcssTenantFieldValuesName: `设施子类型${key}`,	    //设施子类型
        level: `${key}等级`,	    //等级
        levelName: `${key}名称`,	    //名称
        measureUnit: `${key}度量单位`,	    //度量单位
        orderIndex: `${key}`,	    //排序号
        photosIdList: [{ "id": "58e16b7181824a4c966ad27b1c1f3ffe", "name": "jcss报表权限、.doc" }, { "id": "29164b96fa34464d95cb466af4be600b", "name": "1.png" }, { "id": "bbc8948710cf4e3dbe20825a497ba15e", "name": "1-0-0.zip" }],
        standardCode: `${parseInt(key / 5)}${key % 5}`,	    //指标编号
        standardCodeName: `指标等级${parseInt(key / 5)}${key % 5}`,	    //指标编号

        caculateWayCode: `${key}`,	    //指标编号
        caculateWayCodeName: `计算方式名称${key}`,	    //指标编号
        collectCycleCode: `${key}`,	    //指标编号
        collectCycleCodeName: `采集周期名称${key}`,	    //指标编号

      })).filter(item => (standardCode === undefined || standardCode === item.standardCode) && item.jcssTenantTypeId === jcssTenantTypeId)
    }
  });
})
router.post(`/save${URL_AFTER_Fix}`, function (req, res, next) {
  for (let [key, value] of Object.entries(req.body)) {

  }
  res.type('application/json');   // => 'application/json'
  res.send(JSON.stringify({
    "result": 0,
    "msg": "修改成功",
    "data": {}
  }));
})
router.post(`/update${URL_AFTER_Fix}`, function (req, res, next) {
  for (let [key, value] of Object.entries(req.query)) {

  }
  res.send(JSON.stringify({
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

  })).filter(item => (commonStandardConfigId === undefined || (parseInt(commonStandardConfigId)%3) === (item.commonStandardConfigId%3) ) );
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