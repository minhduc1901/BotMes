module.exports.config = {
  name: "joinNoti",
  eventType: ["log:subscribe"],
  version: "1.0.1",
  credits: "HĐGN",//Update by ThanhAli
  description: "Thông báo Bot hoặc người dùng vào nhóm có random gif/ảnh/video",
  dependencies: {
    "fs-extra": "",
    "path": "",
    "pidusage": ""
  }
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

  const path = join(__dirname, "cache", "joinMp4");
  if (existsSync(path)) mkdirSync(path, { recursive: true });	

  const path2 = join(__dirname, "cache", "joinMp4");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event, Users }) {
  const { join } = global.nodemodule["path"];
  const { threadID } = event;
  if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
    api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "💤" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
    const fs = require("fs");
    return api.sendMessage("", event.threadID, () => api.sendMessage({body:`⫸ 𝑲𝒆̂́𝒕 𝒏𝒐̂́𝒊 𝒕𝒉𝒂̀𝒏𝒉 𝒄𝒐̂𝒏𝒈 ⫷
●▬▬▬▬▬๑⇩⇩๑▬▬▬▬▬●
▷ 𝑅𝑈𝐿𝐸 𝐵𝑜𝑡 ◁
⏩ 𝐾ℎ𝑜̂𝑛𝑔 𝑠𝑝𝑎𝑚
⏩ 𝐾ℎ𝑜̂𝑛𝑔 𝑐ℎ𝑢̛̉𝑖 𝑏𝑜𝑡
⏩ 𝐾ℎ𝑜̂𝑛𝑔 𝑘𝑖𝑐𝑘 𝑏𝑜𝑡
⏩ 𝐻𝑎̣𝑛 𝑐ℎ𝑒̂́ 𝑠𝑝𝑎𝑚 🔞+.....
●▬▬▬▬▬๑⇧⇧๑▬▬▬▬▬●
❛━━･❪ 𝑷𝒓𝒆𝒇𝒊𝒙 [!] ❫･━━❜
📲𝑴𝒐̣𝒊 𝒕𝒉𝒂̆́𝒄 𝒎𝒂̆́𝒄 𝒍𝒊𝒆̂𝒏 𝒉𝒆̣̂ 𝒂𝒅𝒎𝒊𝒏:https://www.facebook.com/minkduc191`, attachment: fs.createReadStream(__dirname + "/cache/joinMp4/randomgif")} ,threadID));
  }
  else {
    try {
      const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
      let { threadName, participantIDs } = await api.getThreadInfo(threadID);
      const moment = require("moment-timezone");
      const hours = moment.tz("Asia/Ho_Chi_Minh").format("HH");
      const time = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
      const threadData = global.data.threadData.get(parseInt(threadID)) || {};
      const path = join(__dirname, "cache", "JoinMp4","vdanime.json");
      const pathGif = join(path, `${threadID}.mp4`);

      var mentions = [], nameArray = [], memLength = [], iduser = [], i = 0;

      for (id in event.logMessageData.addedParticipants) {
    const userName = event.logMessageData.addedParticipants[id].fullName;    iduser.push(event.logMessageData.addedParticipants[id].userFbId.toString());
        nameArray.push(userName);
        mentions.push({ tag: userName, id: event.senderID });
        memLength.push(participantIDs.length - i++);
        console.log(userName)
      }
      memLength.sort((a, b) => a - b);		
    (typeof threadData.customJoin == "undefined") ? msg = "🎉𝑪𝒉𝒂̀𝒐 𝑴𝒖̛̀𝒏𝒈 𝑻𝒉𝒂̀𝒏𝒉 𝑽𝒊𝒆̂𝒏 𝑴𝒐̛́𝒊🎉\n━━━━━━━━━━━━\n→ •[🎊]𝐱𝐢𝐧 𝐜𝐡𝐚̀𝐨 {type} {name} 𝐜𝐡𝐚̀𝐨 𝐦𝐮̛̀𝐧𝐠 {type} 𝐭𝐨̛́𝐢 𝐯𝐨̛́𝐢 𝐧𝐡𝐨́𝐦 {threadName}\n→{type} 𝐥𝐚̀ 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝐭𝐡𝐮̛́ {soThanhVien} 𝐜𝐮̉𝐚 𝐧𝐡𝐨́𝐦\n━━━━━━━━━━━━\n 🙈𝒅𝒖̀𝒏𝒈 𝒍𝒆̣̂𝒏𝒉🙈\n•!setname để đổi biệt danh\n•!menu để xem tất cả lệnh bot \n━━━━━━━━━━━━\n→ •[🌹]𝐁𝐚̣𝐧 đ𝐮̛𝐨̛̣𝐜 𝐭𝐡𝐞̂𝐦 𝐯𝐚̀𝐨 𝐧𝐡𝐨́𝐦 𝐛𝐨̛̉𝐢: {author} 💤\n━━━━━━━━━━━━\n•[⏰] [ {time} ]\n": msg = threadData.customJoin;
      var getData = await Users.getData(event.author)
var nameAuthor = typeof getData.name == "undefined" ? "Người dùng tự vào" : getData.name
      msg = msg
      .replace(/\{iduser}/g, iduser.join(', '))
      .replace(/\{name}/g, nameArray.join(', '))
      .replace(/\{type}/g, (memLength.length > 1) ?  '𝐜𝐚́𝐜 𝐛𝐚̣𝐧' : '𝐛𝐚̣𝐧')
      .replace(/\{soThanhVien}/g, memLength.join(', '))
      .replace(/\{threadName}/g, threadName)
      .replace(/\{author}/g, nameAuthor)
      .replace(/\{time}/g, time);

      if (existsSync(path)) mkdirSync(path, { recursive: true });

      const randomPath = readdirSync(join(__dirname, "cache", "joinMp4", "randomgif"));

      if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
      else if (randomPath.length != 0) {
        const pathRandom = join(__dirname, "cache", "joinMp4", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
        formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
      }
      else formPush = { body: msg, mentions }

      return api.sendMessage(formPush, threadID);
    } catch (e) { return console.log(e) };
  }
        }