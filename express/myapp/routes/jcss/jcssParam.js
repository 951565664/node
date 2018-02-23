var express = require('express');
var router = express.Router();
var urllib = require('url');
const URL_AFTER_Fix = '.smvc'

router.get(`/loadJcssTypeDetail${URL_AFTER_Fix}`, function (req, res, next) {
  res.send(
    {
      "result": 0,
      "msg": "参数列表成功",
      "data": {
        "authParam": { "tenantId": "4eaf9423eb0043648e502134586b088a" },
        "data": { "hasDevice": '0' }
      },
      "exception": null
    }
  );
})

router.get(`/loadParamList${URL_AFTER_Fix}`, function (req, res, next) {
  var query = urllib.parse(req.url, true).query;
  var param = JSON.parse(query.parameters).param;
  // console.log(typeof(param));
  let {paramTypeCodeKey} = param;

  res.jsonp(
    {
      "result": 0,
      "msg": "参数列表成功",
      "data": {
        "authParam": { "tenantId": "4eaf9423eb0043648e502134586b088a" },
        "data": new Array(10).fill(1).map( (item,key) => ({name:paramTypeCodeKey+key,id:paramTypeCodeKey+key}))
      },
      "exception": null
    })
  
})
router.get(`/loadHasRoom${URL_AFTER_Fix}`, function (req, res, next) {

  res.jsonp(
    {
      "result": 0,
      "msg": "参数列表成功",
      "data": {
        "authParam": { "tenantId": "4eaf9423eb0043648e502134586b088a" },
        "data": [
          {name:'有',id:'you'},
          {name:'无',id:'wu'},
        ]
      },
      "exception": null
    })
  
})

module.exports = router;