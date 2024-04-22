/******************************
QuantumultX 修复 vvebo 粉丝列表
参考：
https://raw.githubusercontent.com/androidcn/userscripts/main/VVebo.snippet
更新时间：2024-4-22
*************************

[mitm]
hostname = api.weibo.cn
[rewrite_local]
^https:\/\/api\.weibo\.cn\/2\/cardlist\? url script-response-body https://raw.githubusercontent.com/Chang9an/ForOwnUse/main/Script/vvebofans.js
*************************

*****************************************/
let url = $request.url;
if (url.includes("selffans")) {
  let data = JSON.parse($response.body);
  let cards = data.cards.filter((card) => card.itemid !== "INTEREST_PEOPLE2");
  $done({ body: JSON.stringify({ ...data, cards }) });
} else {
  $done({});
}
