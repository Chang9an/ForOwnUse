/***********************************

> 应用名称：Stay去除仓库广告
> 更新时间：2022-10-17
> 脚本功能：去除仓库广告
> 特别说明：⛔⛔⛔
            本脚本仅供学习交流使用，禁止转载售卖
            ⛔⛔⛔
            
[rewrite_local]

# ～ Stay（2022-10-17）
^https?:\/\/api\.shenyin\.name\/stay-fork\/browse\/featured$ url script-response-body https://raw.fastgit.org/Chang9an/ForOwnUse/main/Script/stay.js

[mitm]

hostname=api.shenyin.name

***********************************/

let ddgksf2013 = JSON.parse($response.body);
if (ddgksf2013.biz) {
    ddgksf2013.biz = Object.values(ddgksf2013.biz).filter(item => !(item["type"]=="promoted"));
}
$done({ body: JSON.stringify(ddgksf2013) });
