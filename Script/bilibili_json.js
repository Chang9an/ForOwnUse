/*
自用B站去广告脚本
*/


let body=$response.body;if(body){switch(!0){case/^https:\/\/app\.bilibili\.com\/x\/v2\/feed\/index\?/.test($request.url):try{let t=JSON.parse(body),a=[];for(let e of t.data.items)!e.hasOwnProperty("banner_item")&&(e.hasOwnProperty("ad_info")||-1!==e.card_goto.indexOf("ad")||"small_cover_v2"!==e.card_type&&"large_cover_v1"!==e.card_type&&"large_cover_single_v9"!==e.card_type||a.push(e));t.data.items=a,body=JSON.stringify(t)}catch(i){console.log(`推荐去广告出现异常：`+i)}break;case/^https?:\/\/app\.bilibili\.com\/x\/v2\/feed\/index\/story\?/.test($request.url):try{let s=JSON.parse(body),r=[];for(let d of s.data.items)d.hasOwnProperty("ad_info")||-1!==d.card_goto.indexOf("ad")||r.push(d);s.data.items=r,body=JSON.stringify(s)}catch(o){console.log(`记录Story的aid出现异常：`+o)}break;case/^https?:\/\/app\.bilibili\.com\/x\/v\d\/account\/teenagers\/status\?/.test($request.url):try{let l=JSON.parse(body);l.data.teenagers_status=0,body=JSON.stringify(l)}catch(c){console.log(`teenagers出现异常：`+c)}break;case/^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/tab/.test($request.url):try{let p=new Set([39,40,41,774,857,545,151,442,99,100,101,554,556]),y=new Set([176,107]),n=new Set([177,178,179,181,102,104,106,486,488,489]),b=JSON.parse(body);if(b.data.tab){let h=b.data.tab.filter(t=>p.has(t.id));b.data.tab=h}if(b.data.top){let f=b.data.top.filter(t=>y.has(t.id));b.data.top=f}if(b.data.bottom){let m=b.data.bottom.filter(t=>n.has(t.id));b.data.bottom=m}body=JSON.stringify(b)}catch(v){console.log(`标签页处理出现异常：`+v)}break;case/^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/mine/.test($request.url):try{let g=JSON.parse(body),u=new Set([396,397,398,399,402,404,407,410,425,426,427,428,430,432,433,434,494,495,496,497,500,501]);g.data.sections_v2.forEach((t,a)=>{t.items.forEach(t=>{622===t.id&&(t.title="会员购",t.uri="bilibili://mall/home")});let e=t.items.filter(t=>u.has(t.id));g.data.sections_v2[a].items=e,g.data.sections_v2[a].button={},delete g.data.sections_v2[a].be_up_title,delete g.data.sections_v2[a].tip_icon,delete g.data.sections_v2[a].tip_title;for(let i=0;i<g.data.sections_v2.length;i++)("创作中心"==g.data.sections_v2[i].title||"創作中心"==g.data.sections_v2[i].title)&&(delete g.data.sections_v2[i].title,delete g.data.sections_v2[i].type);delete g.data.vip_section_v2,delete g.data.vip_section,g.data.hasOwnProperty("live_tip")&&(g.data.live_tip={}),g.data.hasOwnProperty("answer")&&(g.data.answer={}),g.data.vip_type=2,g.data.vip.type=2,g.data.vip.status=1,g.data.vip.vip_pay_type=1,g.data.vip.due_date=4669824160}),body=JSON.stringify(g)}catch(_){console.log(`我的页面处理出现异常：`+_)}break;case/^https?:\/\/api\.live\.bilibili\.com\/xlive\/app-room\/v1\/index\/getInfoByRoom/.test($request.url):try{let $=JSON.parse(body);$.data.activity_banner_info=null,body=JSON.stringify($)}catch(w){console.log(`直播去广告出现异常：`+w)}break;case/^https?:\/\/app\.bilibili\.com\/x\/resource\/top\/activity/.test($request.url):try{let x=JSON.parse(body);x.data&&(x.data.hash="ddgksf2013",x.data.online.icon=""),body=JSON.stringify(x)}catch(k){console.log(`右上角去广告出现异常：`+k)}break;case/^https?:\/\/app\.bilibili\.com\/x\/v2\/search\/square/.test($request.url):try{let O=JSON.parse(body);O.data={type:"history",title:"搜索历史",search_hotword_revision:2},body=JSON.stringify(O)}catch(P){console.log(`热搜去广告出现异常：`+P)}break;case/https?:\/\/app\.bilibili\.com\/x\/v2\/account\/myinfo\?/.test($request.url):try{let W=JSON.parse(body);W.data.vip.type=2,W.data.vip.status=1,W.data.vip.vip_pay_type=1,W.data.vip.due_date=4669824160,body=JSON.stringify(W)}catch(E){console.log(`1080P出现异常：`+E)}break;case/pgc\/page\/bangumi/.test($request.url):try{let q=JSON.parse(body);q.result.modules.forEach(t=>{t.style.startsWith("banner")&&(t.items=t.items.filter(t=>-1!=t.link.indexOf("play"))),t.style.startsWith("function")&&(t.items=t.items.filter(t=>-1==t.blink.indexOf("www.bilibili.com"))),t.style.startsWith("tip")&&(t.items=[])}),body=JSON.stringify(q)}catch(B){console.log(`追番去广告出现异常：`+B)}break;case/pgc\/page\/cinema\/tab\?/.test($request.url):try{let I=JSON.parse(body);I.result.modules.forEach(t=>{t.style.startsWith("banner")&&(t.items=t.items.filter(t=>-1!=t.link.indexOf("play"))),t.style.startsWith("function")&&(t.items=t.items.filter(t=>-1==t.blink.indexOf("www.bilibili.com"))),t.style.startsWith("tip")&&(t.items=[])}),body=JSON.stringify(I)}catch(R){console.log(`观影页去广告出现异常：`+R)}break;case/^https?:\/\/api\.vc\.bilibili\.com\/dynamic_svr\/v1\/dynamic_svr\/dynamic_(history|new)\?/.test($request.url):try{let S=JSON.parse(body),j=[];S.data.cards.forEach(t=>{t.hasOwnProperty("display")&&0>=t.card.indexOf("ad_ctx")&&(t.desc.dynamic_id=t.desc.dynamic_id_str,t.desc.pre_dy_id=t.desc.pre_dy_id_str,t.desc.orig_dy_id=t.desc.orig_dy_id_str,t.desc.rid=t.desc.rid_str,j.push(t))}),S.data.cards=j,body=JSON.stringify(S)}catch(z){console.log(`动态去广告出现异常：`+z)}break;case/^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/skin\?/.test($request.url):try{let A=JSON.parse(body);A&&A.hasOwnProperty("data")&&A.data.hasOwnProperty("common_equip")&&A.data.common_equip.hasOwnProperty("package_url"),body=JSON.stringify(A)}catch(C){console.log(`去除强制设置的皮肤出现异常：`+C)}break;case/^https:\/\/app\.bilibili\.com\/x\/v2\/splash\/list/.test($request.url):try{let D=JSON.parse(body);if(D.data&&D.data.list)for(let F of D.data.list)F.duration=0,F.begin_time=2240150400,F.end_time=2240150400;body=JSON.stringify(D)}catch(G){console.log(`开屏广告（预加载）出现异常：`+G)}break;default:$done({})}$done({body})}else $done({});
