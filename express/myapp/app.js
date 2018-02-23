var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var system = require("./routes/system")
var {Car,Jcss,FileOpt,Xmeq} = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
  else  next();
});
app.use('/cloud/clwxfw/api/np/v2/commonload', Car.commonload);
app.use('/cloud/clwxfw/api/np/v2/njhjwscCar', Car.car);
app.use('/cloud/clwxfw/api/np/v2/njhjwscMaintain', Car.repairRecord);
app.use('/cloud/clwxfw/api/np/v2/njhjwscInsuranceRemind', Car.insureRemind);
app.use('/cloud/clwxfw/api/np/v2/njhjwscConvalesce', Car.maintainRecord);
app.use('/cloud/clwxfw/api/np/v2/njhjwscAccident', Car.accidentRecord);
app.use('/cloud/jcss/api/np/v2/commonLoadSelect', Jcss.jcssCommon);
app.use('/cloud/jcss/api/np/v2/commonStandardLevel', Jcss.standardGradeConfig);
app.use('/cloud/jcss/api/np/v2/commonStandardConfig', Jcss.standardConfig);
app.use('/cloud/jcss/api/np/v2/param', Jcss.jcssParam);

app.use('/cloud/jcss/api/np/v2/cleanbuid/xmeqCleanBuilding', Xmeq.cleanBuilding);
app.use('/cloud/jcss/api/np/v2/washroom/xmeqPublicWashRoom', Xmeq.publicWashRoom);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;