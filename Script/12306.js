/*
[rewrite_local]
^https?:\/\/ad\.12306\.cn\/ad\/ser\/getAdList url script-response-body https://raw.fastgit.org/Chang9an/ForOwnUse/main/Script/12306.js

[mitm]
hostname = %APPEND% ad.12306.cn

*/

let $=function(){const e="undefined"!=typeof $task,t="undefined"!=typeof $httpClient;
    return{isQuanX:e,isSurge:t,notify:(i,n,s)=>{e&&$notify(i,n,s),t&&$notification.post(i,n,s)},getValue:i=>e?$prefs.valueForKey(i):t?$persistentStore.read(i):void 0,setValue:(i,n)=>e?$prefs.setValueForKey(i,n):t?$persistentStore.write(i,n):void 0}}();"undefined"!=typeof $response?function(){let e=JSON.parse($response.body);e.materialsList&&(1===e.materialsList.length?function(e){e.materialsList[0].filePath="h",e.advertParam.skipTime=0}(e):e.materialsList.length>1&&(e.materialsList=[{}]));$done({body:JSON.stringify(e)})}():function(){$.setValue("","train_12306")&&console.log("12306去广告 - 脚本已更新，无需手动运行");$done()}();