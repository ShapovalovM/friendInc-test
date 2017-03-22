var request = require("request"),
    cheerio = require("cheerio"),
    searchUrl = "ru.wikipedia.org",
    mainUrl = "https://ru.wikipedia.org/wiki";

var result = [];

'use strict';

function check(i, mainCallback) {
    if (result.length >= 1000) {
        mainCallback(result);
    } else {
        var res = result[i] ? result[i] : mainUrl;
        collectUrls(res).then(function(index){
            i++;
            check(i,  mainCallback);
        }).catch(function(err){
            console.log(err);
        })
    }
}

check(-1, function(res) {
    console.log(res);
});

function collectUrls(url) {
    return new Promise(function (resolve, reject) {
        request(url, function (err, res, body) {
            if (err) { reject(err) }

            var $ = cheerio.load(body),
                urlList = [],
                links = $("a");
            
            for (var j = 0; j < links.length - 1; j++) {
                if (result.length < 1000) {
                    var url = $(links[j]).attr('href');
                    if (url !== undefined && extractDomain(url) == searchUrl) {
                        if (url.indexOf('/wiki') === 0) {
                            result.push(mainUrl + url.split('/wiki')[1]);
                        } else {
                            result.push(urlList);
                        }
                    }
                    resolve(true);
                }
            }
        });
    });
}

function extractDomain(url) {
    var domain;
    if (url.indexOf('/wiki') === 0) {
        return searchUrl;
    }
    //find & remove protocol (http, ftp, etc.) and get domain
    if (url.indexOf("://") > -1) {
        domain = url.split('/')[2];
    }
    else {
        domain = url.split('/')[0];
    }

    //find & remove port number
    domain = domain.split(':')[0];

    return domain;
}