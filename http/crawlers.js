var https = require("https");
var cheerio = require('cheerio')
var url = 'https://github.com/search?utf8=%E2%9C%93&q=react&type=';

https.get(url,function(res){
    var html = '';
    res.on('data',function(data){
        html += data;

    })

    res.on('end',function(){
        printListData(filterChapters(html));
    }).on('error',function(){
        console.error('获取github关于react的搜索出错')
    })
})

function filterChapters(html){
    var $cheerio = cheerio.load(html);
    var chapters = $cheerio('.repo-list-item');
    var listData = [];
    chapters.each(function(item){
        var chapter = $cheerio(this)
        var chapterTitle = chapter.find('h3').find('a').text();
        var chapterContent = chapter.find('.d-inline-block').text();
        listData.push({

            title:chapterTitle,
            content:chapterContent
        })
    });
    return listData;
}

function printListData(listData){
    listData.forEach(function(element) {
        console.log(element.title+'\n');
        console.log(element.content+'\n');

    });
}