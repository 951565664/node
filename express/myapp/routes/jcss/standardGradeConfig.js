var express = require('express');
var router = express.Router();

const URL_AFTER_Fix = '.smvc'

router.get(`/queryList${URL_AFTER_Fix}`, function (req, res, next) {
  // for (let [key, value] of Object.entries(req.query)) {
  //   console.log(key, value);
  // }
  const {jcssTenantTypeId,standardCode} = req.query
  res.send({
    "result": 0,
    "msg": "分页查询数据成功",
    "data": {
      "total": 20,
      "rows": new Array(25).fill(1).map((item, key) => ({
        "id": `${key}id`,
        color:'#45C400'	,
        jcssTenantTypeCode:`${key}code`,	    //基础设施类型
        jcssTenantTypeId:`${key%5}`,	    //基础设施类型
        jcssTenantTypeName:`设施类型${key%5}`,	    //基础设施类型
        level:`${key}等级`,	    //等级
        levelName:`${key}名称`,	    //名称
        measureUnit:`${key}度量单位`,	    //度量单位
        orderIndex:`${key}`,	    //排序号
        photosIdList: [{ "id": "58e16b7181824a4c966ad27b1c1f3ffe", "name": "jcss报表权限、.doc" }, { "id": "29164b96fa34464d95cb466af4be600b", "name": "1.png" }, { "id": "bbc8948710cf4e3dbe20825a497ba15e", "name": "1-0-0.zip" }],
        standardCode:`${parseInt(key/5)}${key%5}`,	    //指标编号
        standardCodeName:`指标等级${parseInt(key/5)}${key%5}`,	    //指标编号
      })).filter(item => (standardCode === undefined || standardCode === item.standardCode) && item.jcssTenantTypeId === jcssTenantTypeId )
    }
  });
})
router.post(`/save${URL_AFTER_Fix}`, function (req, res, next) {
  for (let [key, value] of Object.entries(req.body)) {
    console.log(key, value);
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
    console.log(key, value);
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

module.exports = router;