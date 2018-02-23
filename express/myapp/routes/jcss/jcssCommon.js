var express = require('express');
var router = express.Router();

const URL_AFTER_Fix = '.smvc'
const ROUTER_ARR = [
  {
    router:'loadJcssTenantTypeId',
    name:'基础设施类型'
  },{
    router:'loadStandardSelect',
    name:'指标等级管理'
  },{
    router:'loadStandardByJcssTypeSelect',
    name:'指标等级管理根据基础设施'
  },
];

  router.get(`/${'loadJcssTenantTypeId'}${URL_AFTER_Fix}`,function (req, res, next) {
    res.send({
      "result": 0,
      "msg": "参数列表成功",
      
      "data": new Array(5).fill(1).map((item2,key) => ({ "name": `设施类型${key}`, "id": `${key}` }))
    });
  })
  router.get(`/${'loadStandardSelect'}${URL_AFTER_Fix}`,function (req, res, next) {
    res.send({
      "result": 0,
      "msg": "参数列表成功",
      
      "data": new Array(5).fill(1).map((item2,key) => ({ "name": `指标等级管理${parseInt(Math.random()*1000)}`, "id": `${parseInt(Math.random()*1000)}` }))
    });
  })
  router.get(`/${'loadStandardByJcssTypeSelect'}${URL_AFTER_Fix}`,function (req, res, next) {
    console.log('req.query',req.query.jcssTenantTypeId)
    res.send({
      "result": 0,
      "msg": "参数列表成功",
      
      "data": new Array(5).fill(1).map((item2,key) => ({ "name": `指标等级管理根据基础设施${req.query.jcssTenantTypeId}${key}`, "id": `${req.query.jcssTenantTypeId}${key}` }))
    });
  })

  router.get(`/${'loadFieldValuesByJcssTypeSelect'}${URL_AFTER_Fix}`,function (req, res, next) {
    res.send({
      "result": 0,
      "msg": "参数列表成功",
      
      "data": new Array(5).fill(1).map((item2,key) => ({ "name": `基础设施${req.query.jcssTenantTypeId}${key}`, "id": `${req.query.jcssTenantTypeId}${req.query.jcssTenantFieldValuesId}${key}` }))
    });
  })
  router.get(`/${'loadCollectCycleSelect'}${URL_AFTER_Fix}`,function (req, res, next) {
    res.send({
      "result": 0,
      "msg": "参数列表成功",
      
      "data": new Array(5).fill(1).map((item2,key) => ({ "name": `采集周期${key}`, "id": `${key}` }))
    });
  })
  router.get(`/${'loadCollectWaySelect'}${URL_AFTER_Fix}`,function (req, res, next) {
    res.send({
      "result": 0,
      "msg": "参数列表成功",
      
      "data": new Array(5).fill(1).map((item2,key) => ({ "name": `计算方式${key}`, "id": `${key}` }))
    });
  })
module.exports = router;