/* 公 2022-08-14 */
var body = $response.body
    .replace(/<head>/, '<head><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ddgksf2013/Html/dsx.css" type="text/css">');
$done({ body });
