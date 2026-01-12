
/*
脚本功能：滴答清单解锁VIP
适配工具：Loon
文件位置：ticktick_VIP/ticktick.js
*/

var body = $response.body;
var obj = JSON.parse(body);

// 下面是原脚本的解混淆逻辑
obj.proEndDate = "2099-01-01T00:00:00.000+0000"; // 到期时间
obj.needSubscribe = false; // 是否需要订阅
obj.pro = true; // 开启Pro状态

// Loon 专用结束命令 (必须封装在对象里)
$done({ body: JSON.stringify(obj) });