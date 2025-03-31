module.exports.config = {
  name: "leaveNoti",
  eventType: ["log:unsubscribe"],
  version: "1.0.0",
  credits: "HĐGN",//mod lại by Tòn
  description: "Thông báo bot hoặc người rời khỏi nhóm có random gif/ảnh/video",
  dependencies: {
    "fs-extra": "",
    "path": ""
  }
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

  const path = join(__dirname, "cache", "leaveGif");
  if (existsSync(path)) mkdirSync(path, { recursive: true });	

  const path2 = join(__dirname, "cache", "leaveGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}

module.exports.run = async function({ api, event, Users, Threads }) {
  if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
  const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
  const { join } =  global.nodemodule["path"];
  const { threadID } = event;
  const moment = require("moment-timezone");
  const hours = moment.tz("Asia/Ho_Chi_Minh").format("HH");
  const time = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:s");
  const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
  const iduser = event.logMessageData.leftParticipantFbId;
  const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
  const type = (event.author == event.logMessageData.leftParticipantFbId) ? "𝒗𝒊̀ 𝒌𝒉𝒐̂𝒏𝒈 𝒕𝒉𝒆̂̉ 𝒄𝒉𝒖𝒏𝒈 𝒔𝒐̂́𝒏𝒈 𝒗𝒐̛́𝒊 𝒎𝒐̣𝒊 𝒏𝒈𝒖̛𝒐̛̀𝒊 𝒕𝒓𝒐𝒏𝒈 𝒏𝒉𝒐́𝒎 𝒏𝒆̂𝒏 đ𝒂̃ 𝒕𝒖̛̣ 𝒈𝒊𝒂́𝒄 𝒓𝒂 𝒅𝒊 𝒎𝒂̃𝒊 𝒎𝒂̃𝒊" : "𝒗𝒊̀ 𝒌𝒉𝒐̂𝒏𝒈 đ𝒖̉ đ𝒂̆̉𝒏𝒈 𝒄𝒂̂́𝒑 đ𝒆̂̉ 𝒄𝒐́ 𝒕𝒉𝒆̂̉ 𝒐̛̉ đ𝒂̂𝒚 𝒍𝒂̂𝒖 𝒅𝒂̀𝒊 𝒏𝒆̂𝒏 đ𝒂̃ 𝒃𝒊̣ 𝒒𝒖𝒂̉𝒏 𝒕𝒓𝒊̣ 𝒗𝒊𝒆̂𝒏 𝒄𝒉𝒐 𝒓𝒂 đ𝒂̉𝒐 𝒗𝒊̃𝒏𝒉 𝒗𝒊𝒆̂̃𝒏";
  const path = join(__dirname, "cache", "leaveGif");
  const gifPath = join(path, `${threadID}.mp4`);
  var msg, formPush

  if (existsSync(path)) mkdirSync(path, { recursive: true });

  (typeof data.customLeave == "undefined") ? msg ="•[⚜️] 𝒕𝒉𝒂̀𝒏𝒉 𝒗𝒊𝒆̂𝒏 𝒎𝒂𝒏𝒈 𝒕𝒆̂𝒏 {name} {type} [⚜️]\n●▬▬▬▬๑۩۩๑▬▬▬▬●\n\n🌺🌸🌺𝒅𝒖̀ 𝒔𝒂𝒐 𝒕𝒉𝒊̀ 𝒄𝒖̃𝒏𝒈 𝒄𝒂̉𝒎 𝒐̛𝒏 𝒃𝒂̣𝒏 {name} đ𝒂̃ đ𝒐̂̀𝒏𝒈 𝒉𝒂̀𝒏𝒉 𝒄𝒖̀𝒏𝒈 𝒄𝒉𝒖́𝒏𝒈 𝒕𝒐̂𝒊 𝒕𝒓𝒐𝒏𝒈 𝒕𝒉𝒐̛̀𝒊 𝒈𝒊𝒂𝒏 𝒒𝒖𝒂 😊💔\n 🌸𝗣𝗥𝗢𝗙𝗜𝗟𝗘: https://facebook.com/profile.php?id={uid}\n\n[] 𝒕𝒉𝒐̛̀𝒊 𝒈𝒊𝒂𝒏 𝒐𝒖𝒕 𝒏𝒉𝒐́𝒎 : 𝒃𝒖𝒐̂̉𝒊 {session} || ⏰" + time : msg = data.customLeave;
  msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type)
  .replace(/\{iduser}/g, iduser).replace(/\{session}/g, hours <= 10 ? "𝒔𝒂́𝒏𝒈" : 
    hours > 10 && hours <= 12 ? "𝒕𝒓𝒖̛𝒂" :
    hours > 12 && hours <= 18 ? "𝒄𝒉𝒊𝒆̂̀𝒖" : "𝒕𝒐̂́𝒊");

  const randomPath = readdirSync(join(__dirname, "cache", "leaveGif", "randomgif"));

  if (existsSync(gifPath)) formPush = { body: msg, attachment: createReadStream(gifPath) }
  else if (randomPath.length != 0) {
    const pathRandom = join(__dirname, "cache", "leaveGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
    formPush = { body: msg, attachment: createReadStream(pathRandom) }
  }
  else formPush = { body: msg }

  return api.sendMessage(formPush, threadID);
    }