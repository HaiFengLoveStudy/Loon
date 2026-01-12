/*
脚本功能：滴答清单解锁VIP (Loon版)
更新时间：2026-01-12
使用声明：仅供学习交流，请勿商用
*/

var body = $response.body;
var obj = JSON.parse(body);

// 修改 VIP 字段逻辑
obj.proEndDate = "2099-01-01T00:00:00.000+0000";
obj.needSubscribe = false;
obj.pro = true;

// Loon 必须以对象形式输出 body
$done({ body: JSON.stringify(obj) });