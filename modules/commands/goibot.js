

const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "lul",
  description: "goibot",
  commandCategory: "Không xài lệnh",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  var { threadID, messageID } = event;
  var tl = ["em là bot cute ặ", "Ơi ơi bot nghe !!", "Rồi kêu gì nói lẹ", "Chơi bê đê hong", "Kêu quài -.-", "Ú mai gót", "1+1=3 nha", "Ếch ộp ếch ộp🐸", "Tiếc quá cậu đã bị ban","tớ có mấy câu này á cứ kêu tớ không biết mày thiểu năng à ?", "Em đây~~~~", "Admin seen kìa em iu", "Tớ mệt òi nha!", "Dễ thương không có trong danh sách của cậu", "Ultr?", "Có giấy súc không?","Dùng callad đi kêu tớ có cc gì đâu?", "Đừngg sướng lắm anh ơi", "Con chim bé uwu", "Vl con này thích tớ mn ạ", "Tớ báo công an", "Xin lỗi :((( ","Gì đó thánh bú liếm","Con lồn kêu quài mày", "Quá ghê gớm....🌚😳 Và đây là Folontilô!😱😱 Folontilô ui... 🥶🥶👿😳một tình huống múa phải nói là cực 👿gắt!! *music🤯 Thẹn thùng nhìn em quay gót đi mãi😞😞💔 Anh đứng chết lặng trong mưa😭😭 Dù rằng bên😊😊 em đã có ai Nhưng nơi đây anh 🤗🤗🥱vẫn còn chờ...","admin đã nói :mày là con dthw","Tao thứ 2 ko ai chủ nhật","Đéo biết mày là ai nhưng tao yêu mày oke","Thích thì dùng lệnh kêu kêu cái cc","Đấm chết mẹ mày giờ. Đụng là đơm","Phô lâu đi rồi anh cho xin in tư","26 Sơn là chào anh em nhé. Lắc lắc","Em biết múa quạt nè ahihi","Con cò bé bé nó đậu má mày","Anh nghĩ em yêu anh à, ko đâu em yêu admin nhất","Muốn cưới anh, nhưng ko có tiền","hmmmm", "Đừng spam em nha :<<", "Đừng để em nóng!!!", "cậu gọi bot có gì không?", "mệt kêu hoài -.-", "Chăm chỉ học hành đi", "Bae ăn cơm chưa?", "Tuyển phi công nè ạ", "Nếu cậu đang cô đơn thì chúng ta có thể thành đôi :3", "Đang làm gì vậy?", "Được của ló :)))", "Làm chồng em không ạ?", "đi ga chỗ khác chơi", "Công chúa em sao đấy?", "Có gì ăn không:(( đói quáaa", "Yêu em không?", "cậu bị làm sao í@@", "Bạn là nhất!!!", "Kêu chi lắm thế? Bộ thích tao rồi à :v", "Chần chờ gì chồng ơi em đâyyy", "Em... Sao em lại nói những cái lời đó chi zay em?", "Thầy dạy phờ ri màaa", "Yeu em rat nhieu ^^", "Đồ con lợn lùn :))", "Đợi xí. Đi ẻ cái :()", "Yeu anh den luy ^^", "Nên nhớ đừng bao giờ cướp ghệ của admin :))", "Anh quát em à?\nNói to thế á?", "Trả quần cho em huhu", "Baby, take my hand. I want you to be my husband. Cause you're my Iron Man. And I love you 3000 <3", "Tao cười tao đi toilet=))", "Hãy nên nhớ, cuộc tình nào cũng có lúc tàn phai", "hoa hồng nở rộ 4 mùa...nối tiếp đi:)", "lalalalaaaa", "Đừng quá yêu một ai đó, khi chính bản thân bạn vẫn bị tổn thương!", "Bae, em nhu bong hoa. Nhung nguoi hai dau phai ta 💔", "Overnight không?", "Hãy gọi cho admin tôi để được yêu thương<3", "Hát đi cho kẹo 🍭", "vợ gọi có việc gì không?", "Dzạaaaaa~~~", "gọi bot có gì hemm :3", "Dzạ em đây :>", "sao thế bae yêu dấu :>", "Sao thế công chúa", "Được của ló :)))", "Nếu một ngày nào đó bạn gọi tôi mà tôi không trả lời nghĩa là bot bị payyy acccc ;-;", "Em đây", "chào bạn tôi là bot của duck", "Vợ gọi có việc gì không?", "Sử dụng !callad để liên lạc với admin!", "Em đây~~~~", "Yêu anh nhất", "Sao thế công chúa nhõng nhẽo của em", "Tuyển máy bay trực thăng nè ai yêu em hog", "Cậu có cô đơn ko để mik tâm sự", "Yêu ko ạ vã quá!!!", "bot dthw như chủ của bot ạ", "Đừng khen anh ngại quá hí hí" ,"Làm vợ anh ko ạ?", "Đừng spam anh nha :<<, anh mệt lắm ời", "Cút ra😏 tớ có vợ rồi😏🖕", "Ai Làm Vợ Em Hog?", "Alaba Trap", "không được spam bot nhé các bae", "Yêu anh ko?", "Vợ anh đây rồi", "chủ tớ là thứ hai hong ai là nhất", "làm Vợ em đuy😏", "Chủ Em Đẹp Zai Khoai To Lắm UwU", "Yêu Tất Cả Mụi Người:3", "Tuyển Ghệ nè các bbi😏🖕y ạ :3"];
var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "bot ngu")) {
    return api.sendMessage("Ngu con mẹ mày. Mày tin tao đấm chết mẹ mày không", threadID);
  };

  if ((event.body.toLowerCase() == "bot óc chó")) {
    return api.sendMessage("Tao óc chó như mày nhó nên chúng mình cùng là cờ hó 😼", threadID);
  };

  if ((event.body.toLowerCase() == "bot chó") || (event.body.toLowerCase() == "bot chó")) {
    return api.sendMessage("Chó nào vừa nói xấu tao đấy, muốn chết hả 😾", threadID);
  };

  if ((event.body.toLowerCase() == "ôi") || (event.body.toLowerCase() == "oi")) {
    return api.sendMessage("Ôi cái sấm sét của thiên lôi lo mà tương tác đi 🥶", threadID);
  };

  if ((event.body.toLowerCase() == "ối") || (event.body.toLowerCase() == "ối")) {
    return api.sendMessage("Ối cailon biết tương tác k 🤷‍♂️", threadID);
  };

  if ((event.body.toLowerCase() == "ơi") || (event.body.toLowerCase() == "oi")) {
    return api.sendMessage("Ngoan đấy tặng cậu 1 câu thần chú đó là\n Tớ thích cậu mất rùi :3", threadID);
  };

  if ((event.body.toLowerCase() == "ừ") || (event.body.toLowerCase() == "u")) {
    return api.sendMessage("Ừ à 😞 biết dạ k ? Láo à 😼", threadID);
  };

  if ((event.body.toLowerCase() == "ừa") || (event.body.toLowerCase() == "ua")) {
    return api.sendMessage("Ừa à 😞 biết dạ k? Láo à :)))", threadID);
  };

  if ((event.body.toLowerCase() == "uk") || (event.body.toLowerCase() == "uk")) {
    return api.sendMessage( "uk cc phải là uh mới đúng nghen =)))", threadID);
  };

  if ((event.body.toLowerCase() == "dạ") || (event.body.toLowerCase() == "Dạ")) {
    return api.sendMessage("bé ngoan quớ,em xứng đáng có 10 người yêu ❤", threadID);
  };

  if ((event.body.toLowerCase() == "yêu") || (event.body.toLowerCase() == "Yêu")) {
    return api.sendMessage("Yêu cc, tiền, xe, nhà thì đéo có mà yêu với đương, lo học hành và đi làm kiếm tiền đê yêu sau", threadID);
  };

  if ((event.body.toLowerCase() == "đmm") || (event.body.toLowerCase() == "dm")) {
    return api.sendMessage("Bất hiếu cha sinh mẹ đẻ mà mày nói thế là hỏng người rồi", threadID);
  };

  if ((event.body.toLowerCase() == "đmm bot") || (event.body.toLowerCase() == "dmm bot")) {
    return api.sendMessage("Bất hiếu cha sinh mẹ đẻ mà mày nói thế là hỏng người rồi", threadID);
  };

  if ((event.body.toLowerCase() == "chửi cmm") || (event.body.toLowerCase() == "chui cmm")) {
    return api.sendMessage("Bất hiếu cha sinh mẹ đẻ mà mày nói thế là hỏng người rồi", threadID);
  };

  if ((event.body.toLowerCase() == "cmm bot") || (event.body.toLowerCase() == "cmm bot")) {
    return api.sendMessage("Chửi cc gì thích đấm nhau ko mà sồn sồn lên thế :)", threadID);
  };

  if ((event.body.toLowerCase() == "địt") || (event.body.toLowerCase() == "dit")) {
    return api.sendMessage("Địt cc thích đụ ko :)", threadID);
  };

  if ((event.body.toLowerCase() == "địt cc") || (event.body.toLowerCase() == "dit cc")) {
    return api.sendMessage("À mày thích địt à cởi quần ra đụ lẹ nào :)", threadID);
  };

  if ((event.body.toLowerCase() == "anh tèo") || (event.body.toLowerCase() == "anh teo")) {
    return api.sendMessage("Anh ấy tuy ko đẹp trai hay giỏi gì nhưng được cái hài hước và luôn mong đạt được mục tiêu anh ấy muốn <3 <3 ", threadID);
  };

  if ((event.body.toLowerCase() == "a tèo") || (event.body.toLowerCase() == "a teo")) {
    return api.sendMessage("Anh ấy tuy ko đẹp trai hay giỏi gì nhưng được cái hài hước và luôn mong đạt được mục tiêu anh ấy muốn <3 <3 ", threadID);
  };

  if ((event.body.toLowerCase() == "tèo") || (event.body.toLowerCase() == "teo")) {
    return api.sendMessage("Anh ấy tuy ko đẹp trai hay giỏi gì nhưng được cái hài hước và luôn mong đạt được mục tiêu anh ấy muốn <3 <3 ", threadID);
  };

  if ((event.body.toLowerCase() == "bot ơi") ||  (event.body.toLowerCase() == "bot ơi")) {
    return api.sendMessage("Nói đi, em còn phải phục vụ các box khác nữa :3 ", threadID);
  };

  if ((event.body.toLowerCase() == "yêu bot") || (event.body.toLowerCase() == "yeu bot")) {
    return api.sendMessage("Hmm... Bot ngại lắm thôi yêu admin của bot nhé :))", threadID);
  };

   if ((event.body.toLowerCase() == "yêu anh") || (event.body.toLowerCase() == "yeu anh")) {
    return api.sendMessage("Anh cũng yêu em <3", threadID);
  };

   if ((event.body.toLowerCase() == "chửi cc") || (event.body.toLowerCase() == "chui cc")) {
    return api.sendMessage("️Matday quá đi bạn à ><, cần tao chỉnh đốn mày lại ko :)", threadID);
  };

  if ((event.body.toLowerCase() == "hentai") || (event.body.toLowerCase() == "hentai")) {
    return api.sendMessage("Hả 😋, em thích coi lắm", threadID);
  };

  if ((event.body.toLowerCase() == "cc cút") || (event.body.toLowerCase() == "cc cút")) {
    return api.sendMessage("Sao mày ko cút? Mà bảo tao :) mệt lồn ghê :>", threadID);
  };

  if ((event.body.toLowerCase() == "vãi") || (event.body.toLowerCase() == "vai")) {
    return api.sendMessage("Vãi l....:)))", threadID);
  };

  if ((event.body.toLowerCase() == "Alo") || (event.body.toLowerCase() == "alo")) {
    return api.sendMessage("Hi ạ!! Tương tác với box lẹ đi :3", threadID);
  };

  if ((event.body.toLowerCase() == "Aloo") || (event.body.toLowerCase() == "aloo")) {
    return api.sendMessage("Hellu!! Tương tác với box lẹ đi :)", threadID);
  };

  if ((event.body.toLowerCase() == "link") || (event.body.toLowerCase() == "link")) {
    return api.sendMessage("Link bao nhiêu phút á cho e xem với nào 🤤", threadID);
  };

  if ((event.body.toLowerCase() == "cứu") || (event.body.toLowerCase() == "Cứu")) {
    return api.sendMessage("Cứu cc ngu thì chết khôn thì sống cậu chủ bảo tao thế <3", threadID);
  };

  if ((event.body.toLowerCase() == "gây war à") || (event.body.toLowerCase() == "Gây war a")) {
    return api.sendMessage("War cc đm thử war xem tao kick hết :) có tao ở đây mà làm loạn hả :))))", threadID);
  };

  if ((event.body.toLowerCase() == "đi gây war") || (event.body.toLowerCase() == "Đi gây war")) {
    return api.sendMessage("War cc đm thử war xem tao kick hết :) có tao ở đây mà làm loạn hả :))))", threadID);
  };

  if ((event.body.toLowerCase() == "thích gây war à") || (event.body.toLowerCase() == "Thích gây war a")) {
    return api.sendMessage("War cc đm thử war xem tao kick hết :) có tao ở đây mà làm loạn hả :))))", threadID);
  };  

  if ((event.body.toLowerCase() == "hát đi mng") || (event.body.toLowerCase() == "hat di mng")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi") || (event.body.toLowerCase() == "Hát đi")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };  

  if ((event.body.toLowerCase() == "bot hát đi") || (event.body.toLowerCase() == "Bot hát di")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi nào") || (event.body.toLowerCase() == "Hát đi nào")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi bot") || (event.body.toLowerCase() == "Hát đi bot")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi mng") || (event.body.toLowerCase() == "Tt đi mng")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi nào mng") || (event.body.toLowerCase() == "Tt đi nào mng")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "tt mng ơi") || (event.body.toLowerCase() == "tt mng oi")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "nn nha mng") || (event.body.toLowerCase() == "nn nha mng")) {
    return api.sendMessage("️Ngủ ngon ạ <3 Chúc mọi người mơ siêu đẹp <3", threadID);
  };

  if ((event.body.toLowerCase() == "admin m là ai v bot") || (event.body.toLowerCase() == "admin m la ai v bot")) {
    return api.sendMessage("️Admin tao là duck có gì dùng lệnh !adm để biết thêm chi tiết", threadID);
  };

  if ((event.body.toLowerCase() == "admin m là ai vậy bot") || (event.body.toLowerCase() == "admin m la ai vậy bot")) {
    return api.sendMessage("️Admin tao duck có gì dùng lệnh !adm để biết thêm chi tiết", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi mn") || (event.body.toLowerCase() == "Tt đi mn")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "flop quá") || (event.body.toLowerCase() == "Flop quá ")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick, 3 là ăn đấm, 4 là ăng nhăng nhăng, 5 là á á á ớ ớ kimochi:))))", threadID);
  };

  if ((event.body.toLowerCase() == "con cac") || (event.body.toLowerCase() == "con cac")) {
    return api.sendMessage("️Đm móc ra bố check hàng :)))", threadID);
  };

  if ((event.body.toLowerCase() == "cai lon") || (event.body.toLowerCase() == "cai lon")) {
    return api.sendMessage("️Mày bẩn vừa thôi con lon :)))", threadID);
  };

  if ((event.body.toLowerCase() == "clozz") || (event.body.toLowerCase() == "clozz")) {
    return api.sendMessage("️Mày bẩn vừa thôi con lồn :)))", threadID);
  };

  if ((event.body.toLowerCase() == "clmm bot") || (event.body.toLowerCase() == "clmm bot")) {
    return api.sendMessage("️Chửi gì đấy con dog :) bố mmày nhịn mày lâu lắm rồi đấy nhá", threadID);
  };

  if ((event.body.toLowerCase() == "bot cc") || (event.body.toLowerCase() == "bot cc")) {
    return api.sendMessage("️Chửi gì đấy con dog :) bố mmày nhịn mày lâu lắm rồi đấy nhá", threadID);
  };

  if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "cc bot")) {
    return api.sendMessage("️Chửi gì đấy con dog :) bố mmày nhịn mày lâu lắm rồi đấy nhá", threadID);
  };

  if ((event.body.toLowerCase() == "cặc") || (event.body.toLowerCase() == "cac")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)", threadID);
  };

  if ((event.body.toLowerCase() == "a tèo") || (event.body.toLowerCase() == "a teo")) {
    return api.sendMessage("️Kêu chủ của tôi gì á :)?", threadID);
  };

  if ((event.body.toLowerCase() == "ông tèo") || (event.body.toLowerCase() == "ong teo")) {
    return api.sendMessage("️Sao nói gì admin tôi đấy ?", threadID);
  };

  if ((event.body.toLowerCase() == "bot dthw quá") || (event.body.toLowerCase() == "bot dthw qua")) {
    return api.sendMessage("️dạ quá khen ạ hihi :>", threadID);
  };

  if ((event.body.toLowerCase() == "haha") || (event.body.toLowerCase() == "haha")) {
    return api.sendMessage("️Haha dui quá ha :>> cười cười mẹ mày 😼:)", threadID);
  };

  if ((event.body.toLowerCase() == "kkk") || (event.body.toLowerCase() == "kkk")) {
    return api.sendMessage("️Haha dui quá ha :>> cười mẹ m à :)", threadID);
  };

  if ((event.body.toLowerCase() == "con cặc") || (event.body.toLowerCase() == "con cặc")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)", threadID);
  };

  if ((event.body.toLowerCase() == "cái lồn") || (event.body.toLowerCase() == "cai lon")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)", threadID);
  };

  if ((event.body.toLowerCase() == "lồn") || (event.body.toLowerCase() == "lồn")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)", threadID);
  };

  if ((event.body.toLowerCase() == "đm") || (event.body.toLowerCase() == "dm")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)", threadID);
  };

  if ((event.body.toLowerCase() == "đm bot") || (event.body.toLowerCase() == "dm bot")) {
    return api.sendMessage("️Chửi cc gì đấy sủa lại bố mày nghe nào :) nít ranh mà cứ thích sồn :)", threadID);
  };

  if ((event.body.toLowerCase() == "lozz") || (event.body.toLowerCase() == "lozz")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)", threadID);
  };

  if ((event.body.toLowerCase() == "clmm") || (event.body.toLowerCase() == "clmm")) {
    return api.sendMessage("️Bớt chửi thề cho nên người đi bạn êi :))) ko tao vả chetmemay giờ", threadID);
  };

  if ((event.body.toLowerCase() == "ko ai thương t hết") || (event.body.toLowerCase() == "ko ai thuong t het")) {
    return api.sendMessage("️Thôi ngoan nào bot thương bạn mà <3 <3 ", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu em không") || (event.body.toLowerCase() == "bot yeu em khong")) {
    return api.sendMessage("Hi, Bot yêu em hơn cả ny em cơ, yêu bot đi <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu admin bot không") || (event.body.toLowerCase() == "bot co yeu admin bot khong")) {
    return api.sendMessage("Có, yêu anh ấy nhất đừng hòng cướp của tôi", threadID);
  };

  if ((event.body.toLowerCase() == "bot có người yêu chưa") || (event.body.toLowerCase() == "bot co nguoi yeu chua")) {
    return api.sendMessage("Rồi ạ, là cậu đấy <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot im đi") || (event.body.toLowerCase() == "bot im di")) {
    return api.sendMessage("Im cc :))) m bớt sủa lại hộ tao, nưng hay gì bảo t im :>>", threadID);
  };

  if ((event.body.toLowerCase() == "bot cút đi") || (event.body.toLowerCase() == "bot cut di")) {
    return api.sendMessage("Mày cút rồi bố mày cút, ko khiến mày lên tiếng :))))", threadID);
  };

  if ((event.body.toLowerCase() == "bot chửi cái lon gì") || (event.body.toLowerCase() == "bot chui cai lon gi")) {
    return api.sendMessage("Chửi mày đấy, nhục vãi hahaha :>>, còn hỏi", threadID);
  };

  if ((event.body.toLowerCase() == "bot có buồn ko") || (event.body.toLowerCase() == "bot co buon ko")) {
    return api.sendMessage("Có mọi người sao bé buồn đc <3 yêu lắm <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu t ko") || (event.body.toLowerCase() == "bot co yeu t ko")) {
    return api.sendMessage("Dạ có yêu cậu và mọi người nhiều lắm", threadID);
  };

  if ((event.body.toLowerCase() == "bot đi ngủ đi") || (event.body.toLowerCase() == "bot di ngu di")) {
    return api.sendMessage("Tớ là bot, cậu là người nên cần đi ngủ nè <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot ăn cơm chưa") || (event.body.toLowerCase() == "bot an com chua")) {
    return api.sendMessage("Mình nhìn cậu ăn là thấy no rồi <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có thương tui ko") || (event.body.toLowerCase() == "bot co thuong tui ko")) {
    return api.sendMessage("Có <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có thương t ko") || (event.body.toLowerCase() == "bot co thuong t ko")) {
    return api.sendMessage("Có <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có link fb của admin ko") || (event.body.toLowerCase() == "bot co link fb của admin ko")) {
    return api.sendMessage("Dĩ nhiên rồi có gì liên hệ anh ấy nha <3\nLink fb nè: https://www.facebook.com/minkduc1901", threadID);
  };

  if ((event.body.toLowerCase() == "bot làm thơ đi") ||  (event.body.toLowerCase() == "bot lam tho di")) {
    return api.sendMessage("Yêu cậu như một cực hình\nNhấp lên nhấp xuống hai mình cùng rên", threadID);
  };

  if ((event.body.toLowerCase() == "clmm bot lon") ||  (event.body.toLowerCase() == "clmm bot lon")) {
    return api.sendMessage("Mày chửi gì đấy nói rõ lên bố mày nghe lại xem nào :))", threadID);
  };

  if ((event.body.toLowerCase() == "cc") ||  (event.body.toLowerCase() == "cc")) {
    return api.sendMessage("À ý mày bảo mày là chó á hả sủa đi tao nghe :)", threadID);
  }; 
  if ((event.body.toLowerCase() == "á") || (event.body.toLowerCase() == "á đ m")) {
    return api.sendMessage("Hả gì ai đụ mày hả", threadID);
  };
if ((event.body.toLowerCase() == "cái qq") || (event.body.toLowerCase() == "qq")) {
    return api.sendMessage("quần què là cái quần éo gì", threadID);
  };
  if ((event.body.toLowerCase() == "ulatr") || (event.body.toLowerCase() == "ulatroi")) {
    return api.sendMessage("U là trời là cái gì, trời bị u hả 🤔", threadID);
  };
  if ((event.body.toLowerCase() == "cái nịt") || (event.body.toLowerCase() == "còn cái nịt")) {
    return api.sendMessage("Còn đúng cái nịt thôi, Cho em xin", threadID);
  };
  if ((event.body.toLowerCase() == "hăi") || (event.body.toLowerCase() == "hãi")) {
    return api.sendMessage("Cái đấy là chào kiểu ngoài hành tinh đó hả", threadID);
  };
if ((event.body.toLowerCase() == "xin in4") || (event.body.toLowerCase() == "xin in tư đi")) {
    return api.sendMessage("Hông bé ơi, bé hông phô lâu anh mà đòi xin in4 của anh. anh ko cho đâu", threadID);
  };
if ((event.body.toLowerCase() == "war") || (event.body.toLowerCase() == "war ko")) {
    return api.sendMessage("war hả. tag em zô em chủi chết mẹ chúng nó", threadID);
  };
  if ((event.body.toLowerCase() == "khum") || (event.body.toLowerCase() == "khum cho đâu")) {
    return api.sendMessage("khum khum là cái lồn gì zậy", threadID);
  };
if ((event.body.toLowerCase() == "ahihi") || (event.body.toLowerCase() == "ahihi")) {
    return api.sendMessage("Cười gì giống bede quá hà 😊", threadID);
  };
  if ((event.body.toLowerCase() == "xin") || (event.body.toLowerCase() == "cho xin")) {
    return api.sendMessage("có làm mới có ăn nha", threadID);
  };
  if ((event.body.toLowerCase() == "2") || (event.body.toLowerCase() == "hai")) {
    return api.sendMessage("Ba bốn năm sáu bảy tám chín mười mày cười tao khóc", threadID);
  };
if ((event.body.toLowerCase() == "có cái nịt") || (event.body.toLowerCase() == "cai nịt")) {
    return api.sendMessage("Lấy nịt buộc tiền", threadID);
  };
  if ((event.body.toLowerCase() == "cho xin in4 đi") || (event.body.toLowerCase() == "cho em xin in4")) {
    return api.sendMessage("Hông bé ơi, bé chưa phô lâu anh mà đòi xin in4 của anh,anh ko cho đâu", threadID);
  };
if ((event.body.toLowerCase() == "lz") || (event.body.toLowerCase() == "cái lz")) {
    return api.sendMessage("lz là cái gì cơ, phải lồn mới đúng nghen", threadID);
  };
  if ((event.body.toLowerCase() == "cút") || (event.body.toLowerCase() == "cút đi")) {
    return api.sendMessage("Á à. Bảo tao cút hả, Cút thì cút sợ lz gì mày 😎", threadID);
  };
  if ((event.body.toLowerCase() == "biến") || (event.body.toLowerCase() == "biến đi")) {
    return api.sendMessage("Xin lỗi mày nhưng tao đéo có phép", threadID);
  };
if ((event.body.toLowerCase() == "pp") || (event.body.toLowerCase() == "pai")) {
    return api.sendMessage("Chào mày mày đi đi", threadID);
  };
  if ((event.body.toLowerCase() == "=))") || (event.body.toLowerCase() == "=)))")) {
    return api.sendMessage("Icon cười đấy là cười kiểu đéo gì vậy ", threadID);
  };
if ((event.body.toLowerCase() == ":))") || (event.body.toLowerCase() == ":)))")) {
    return api.sendMessage("Mày cười cái giề. vui lắm gì gì, cho tao cười ké zới :)))", threadID);
  };
  if ((event.body.toLowerCase() == "clm") || (event.body.toLowerCase() == "clmm")) {
    return api.sendMessage("Cái lz mẹ mày thì nói mẹ đi, bày bày đặt clm", threadID);
  };
  if ((event.body.toLowerCase() == "vc") || (event.body.toLowerCase() == "vc luôn")) {
    return api.sendMessage("Á đù. vãi cứt :)", threadID);
  };
  if ((event.body.toLowerCase() == "tvm") || (event.body.toLowerCase() == "hi tvm")) {
    return api.sendMessage("Thành viên mới vào tương tác nhiều nha :33", threadID);
  };
if ((event.body.toLowerCase() == "!nude") || (event.body.toLowerCase() == "!mông")) {
    return api.sendMessage("Bớt dâm lại đĩ . Tao méc má mày giờ", threadID);
  };
if ((event.body.toLowerCase() == "điên") || (event.body.toLowerCase() == "đin")) {
    return api.sendMessage("Điên điên , quá điên, điên hết rồi, điên cc", threadID);
  };
  if ((event.body.toLowerCase() == "khùng") || (event.body.toLowerCase() == "khung")) {
    return api.sendMessage("Khùng lắm nha con, để tao gọi người bắt mày đi", threadID);
  };
  if ((event.body.toLowerCase() == "dâm") || (event.body.toLowerCase() == "dam dang")) {
    return api.sendMessage("Em có dâm đâu, em chỉ muốn được địt thôi❤️", threadID);
  };
  if ((event.body.toLowerCase() == "câm") || (event.body.toLowerCase() == "nín")) {
    return api.sendMessage("Nó bảo mày câm lại kìa, quánh nó cho tao", threadID);
  };
if ((event.body.toLowerCase() == "ỉa") || (event.body.toLowerCase() == "ỹa")) {
    return api.sendMessage("Mày dơ nó vừa vừa thôi. ỉa chung với tao ko", threadID);
  };
if ((event.body.toLowerCase() == "đi") || (event.body.toLowerCase() == "đi ko")) {
    return api.sendMessage("Đi địt nhau hả. cho em đi vớiiii, chúng mình threesome😘", threadID);
  };
  if ((event.body.toLowerCase() == "đĩ") || (event.body.toLowerCase() == "!cave")) {
    return api.sendMessage("hazzzzz. làm đĩ có vui ko sao ngày nào cũng làm vậy, cho tao làm với😌", threadID);
  };
  if ((event.body.toLowerCase() == "đỉ") || (event.body.toLowerCase() == "đỷ")) {
    return api.sendMessage("làm đĩ zui lắm cho em làm với", threadID);
  };
  if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
    return api.sendMessage("", threadID);
  };
  if ((event.body.toLowerCase() == "lẹ") || (event.body.toLowerCase() == "lẹ coi")) {
    return api.sendMessage("Từ từ bố mày đang ỉa hối cl", threadID);
  };
if ((event.body.toLowerCase() == "omg") || (event.body.toLowerCase() == "umg")) {
    return api.sendMessage("Bất ngờ chưa😎", threadID);
  };
  if ((event.body.toLowerCase() == "ok") || (event.body.toLowerCase() == "oke")) {
    return api.sendMessage("Là oke hay là bao cao su", threadID);
  };
  if ((event.body.toLowerCase() == "kê") || (event.body.toLowerCase() == "oce")) {
    return api.sendMessage("Kê là gà chứ đéo phải oke", threadID);
  };
  if ((event.body.toLowerCase() == "vg") || (event.body.toLowerCase() == "vâng")) {
    return api.sendMessage("Bé ngoan thế. Yêu bé lắm 😘", threadID);
  };
  if ((event.body.toLowerCase() == "ủa") || (event.body.toLowerCase() == "ũa")) {
    return api.sendMessage("Hả gì ủa ủa gì gì", threadID);
  };
  if ((event.body.toLowerCase() == "dcm") || (event.body.toLowerCase() == "dm")) {
    return api.sendMessage("Sao mày lại đòi địt mẹ ngta vậy con", threadID);
  };
if ((event.body.toLowerCase() == "jz") || (event.body.toLowerCase() == "j")) {
    return api.sendMessage("Gì gì hỏi tao tao biết hỏi ai", threadID);
  };
if ((event.body.toLowerCase() == "?") || (event.body.toLowerCase() == "ủa?")) {
    return api.sendMessage("Chấm hỏi cc. dùng não đi", threadID);
  };
  if ((event.body.toLowerCase() == "đẹp ") || (event.body.toLowerCase() == "đẹp vậy")) {
    return api.sendMessage("awww. đẹp thì làm ngiu em nha😘", threadID);
  };
  if ((event.body.toLowerCase() == "hok") || (event.body.toLowerCase() == "hong")) {
    return api.sendMessage("không là không chứ hok là cái lz gì", threadID);
  };
  if ((event.body.toLowerCase() == "tồi") || (event.body.toLowerCase() == "tồy")) {
    return api.sendMessage("Tồi quá thì chơi minh đi nha", threadID);
  };
    if ((event.body.toLowerCase() == "ủa gì") || (event.body.toLowerCase() == "ủa gì zậy")) {
    return api.sendMessage("Ủa cái qq ấy chứ ủa. Biết gì chưa tao kể cho nghe nè", threadID);
  };
    if ((event.body.toLowerCase() == ":v") || (event.body.toLowerCase() == "v:")) {
    return api.sendMessage("Cười cái con chim non nè. Cười quái dị vc", threadID);
  };
    if ((event.body.toLowerCase() == "xD") || (event.body.toLowerCase() == ":c")) {
    return api.sendMessage("Cười nhe cả hàm ghê quá tròi", threadID);
  };
if ((event.body.toLowerCase() == "-.-") || (event.body.toLowerCase() == ".-.")) {
    return api.sendMessage("Thái độ gì đấy. Tin tao đấm mày không", threadID);
  };
if ((event.body.toLowerCase() == "biến thái") || (event.body.toLowerCase() == "đồi trụy")) {
    return api.sendMessage("Thứ như này bắn ngay đừng cho đẻ trứng", threadID);
  };
    if ((event.body.toLowerCase() == "kick") || (event.body.toLowerCase() == "kik")) {
    return api.sendMessage("Kick mẹ nó đi ở đây chật đất", threadID);
  };
if ((event.body.toLowerCase() == "ờ") || (event.body.toLowerCase() == "ò")) {
    return api.sendMessage("Ờ Ò cái qq. Phải dạ vâng nghe hông", threadID);
  };
    if ((event.body.toLowerCase() == "um") || (event.body.toLowerCase() == "ừm")) {
    return api.sendMessage("Ừ thì ừ mẹ đi cho nó truất. ừm cái đb", threadID);
  };
if ((event.body.toLowerCase() == "đù") || (event.body.toLowerCase() == "á đù")) {
    return api.sendMessage("aduvip. Á đù anh bạn à. Dân chơi đù cơ", threadID);
  };
    if ((event.body.toLowerCase() == "hô hô") || (event.body.toLowerCase() == "ho ho")) {
    return api.sendMessage("Cười kiểu đéo gì ra tiếng hô hô hay vậy. Cười đểu tao à😡", threadID);
  };
  if ((event.body.toLowerCase() == "nhục") || (event.body.toLowerCase() == "nhục chưa")) {
    return api.sendMessage("Nhục như con cá nục. Này chắc phải đội quần mới hết nhục", threadID);
  };
if ((event.body.toLowerCase() == "quê") || (event.body.toLowerCase() == "quê vl")) {
    return api.sendMessage("Ôi con sông quê con sông quê. Tao cười vào mặt", threadID);
  };
if ((event.body.toLowerCase() == "hay") || (event.body.toLowerCase() == "hay quá")) {
    return api.sendMessage("Hay. quá Hay cho 1 tràng pháo tay nào 👏👏👏", threadID);
  };
    if ((event.body.toLowerCase() == "đỉnh") || (event.body.toLowerCase() == "đỉnh chưa")) {
    return api.sendMessage("Quá đỉnh quá tuyện vời. Gút chóp 👌👌👌", threadID);
  };
    if ((event.body.toLowerCase() == "lạy") || (event.body.toLowerCase() == "tao lạy")) {
    return api.sendMessage("Tao xin khép đít mở háng lạy mày luôn con chó 🙏🏿🙏🏿🙏🏿", threadID);
  };
    if ((event.body.toLowerCase() == "cút lẹ") || (event.body.toLowerCase() == "biến lẹ")) {
    return api.sendMessage("Đuổi đuổi cái lồn tao nè", threadID);
  };

if ((event.body.toLowerCase() == "may vc") || (event.body.toLowerCase() == "may vl")) {
    return api.sendMessage("May thế. Chúa hù hộ em", threadID);
  };
if ((event.body.toLowerCase() == "lắc lắc") || (event.body.toLowerCase() == "lắc đầu")) {
    return api.sendMessage("26 sơn la xin chào anh em. Lắc lắc giật giật", threadID);
  };
if ((event.body.toLowerCase() == "iu") || (event.body.toLowerCase() == "iu ck")) {
    return api.sendMessage("Nít nôi học không lo học chồng con cái đb", threadID);
  };
if ((event.body.toLowerCase() == "iu vk") || (event.body.toLowerCase() == "aie")) {
    return api.sendMessage("Lo học đi. Yêu đương cc", threadID);
  };
if ((event.body.toLowerCase() == "eya") || (event.body.toLowerCase() == "eia")) {
    return api.sendMessage("Chúng mày lo học đi. Ba mẹ thì còng lưng 🤦", threadID);
  };
    if ((event.body.toLowerCase() == "à") || (event.body.toLowerCase() == "à à")) {
    return api.sendMessage("À thế làm sao mà à.", threadID);
  };
    if ((event.body.toLowerCase() == "kệ tao") || (event.body.toLowerCase() == "kệ mẹ tao")) {
    return api.sendMessage("kệ mày thì kệ mày 😏", threadID);
  };
    if ((event.body.toLowerCase() == "kệ mày") || (event.body.toLowerCase() == "kệ mẹ mày")) {
    return api.sendMessage("kệ tao thì kệ mày 😏", threadID);
  };
    if ((event.body.toLowerCase() == "sợ") || (event.body.toLowerCase() == "sợ à")) {
    return api.sendMessage("Từ lớp 1 đến lớp 5 tao còn chưa sợ. Cậy gì đầu buồi lớp 7 như mày.", threadID);
  };
    if ((event.body.toLowerCase() == "rén") || (event.body.toLowerCase() == "rén à")) {
    return api.sendMessage("Rén cc tao đang bận đi ỉa thôi", threadID);
  };
    if ((event.body.toLowerCase() == "cút ngay") || (event.body.toLowerCase() == "cút giùm")) {
    return api.sendMessage("Cút con cặc tao ở đây ám mày nha đĩ lồn", threadID);
  };
if ((event.body.toLowerCase() == "lộn") || (event.body.toLowerCase() == "lộn rồi")) {
    return api.sendMessage("Ko sao. Trứng còn lộn huống hồ gì con người", threadID);
  };
    if ((event.body.toLowerCase() == "cmm") || (event.body.toLowerCase() == "cm")) {
    return api.sendMessage("Chửi mẹ ngta thế mày vui lắm hay gì 😏", threadID);
  };
    if ((event.body.toLowerCase() == "má") || (event.body.toLowerCase() == "má nó")) {
    return api.sendMessage("Ơi ơi má đây con. Về má cho bú", threadID);
  };
if ((event.body.toLowerCase() == "kệ chị") || (event.body.toLowerCase() == "kệ em")) {
    return api.sendMessage("Kệ con cặc anh em với nhau. Quan tâm xíu đi", threadID);
  };
if ((event.body.toLowerCase() == "kệ anh") || (event.body.toLowerCase() == "kệ con")) {
    return api.sendMessage("Kệ kệ cái đầu buồi. Yêu thương nhau đi", threadID);
  };
if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
    return api.sendMessage("", threadID);
  };if ((event.body.toLowerCase() == "sao mày") || (event.body.toLowerCase() == "sao em")) {
    return api.sendMessage("Sao trăng gì. Tao đang ỉa", threadID);
  };
if ((event.body.toLowerCase() == "sao chị") || (event.body.toLowerCase() == "sao anh")) {
    return api.sendMessage("Hazz. Toang rồi. Sao trăng gì nữa", threadID);
  };
if ((event.body.toLowerCase() == "dơ") || (event.body.toLowerCase() == "dơ vc")) {
    return api.sendMessage("Eo ôi khiếp thế. Tránh xa tao ra", threadID);
  };
if ((event.body.toLowerCase() == "black pink") || (event.body.toLowerCase() == "blackpink")) {
    return api.sendMessage("4 chị đẹp hát hay và là vợ em", threadID);
  };
if ((event.body.toLowerCase() == "ặc") || (event.body.toLowerCase() == "ặc ặc")) {
    return api.sendMessage("Sao zậy. Bú cu mắc nghẹn hả", threadID);
  };
if ((event.body.toLowerCase() == "cho xin đi") || (event.body.toLowerCase() == "cho tao xin")) {
    return api.sendMessage("Có làm mới có ăn. xin cái lồn", threadID);
  };
if ((event.body.toLowerCase() == "bai") || (event.body.toLowerCase() == "baiii")) {
    return api.sendMessage("Tạm biệt mày nha.", threadID);
  };
    if ((event.body.toLowerCase() == "jztr") || (event.body.toLowerCase() == "cái jztr")) {
    return api.sendMessage("Hỏi trời chứ sao hỏi tao", threadID);
  };
if ((event.body.toLowerCase() == "gà") || (event.body.toLowerCase() == "non")) {
    return api.sendMessage("Thôi về nhà ngủ đi em. Để ngta nói zậy nhục như tró", threadID);
  };
if ((event.body.toLowerCase() == "bot khùng") || (event.body.toLowerCase() == "bot điên")) {
    return api.sendMessage("Khùng điên cũng éo tới lượt mày đánh giá", threadID);
  };
if ((event.body.toLowerCase() == "ko") || (event.body.toLowerCase() == "ko có")) {
    return api.sendMessage("Ừ ừ tao biết rồi", threadID);
  };
if ((event.body.toLowerCase() == "có") || (event.body.toLowerCase() == "có nè")) {
    return api.sendMessage("Có gì, bao cao su hả. Chịch thoaiii", threadID);
  };
if ((event.body.toLowerCase() == "nhanh") || (event.body.toLowerCase() == "nhanh lên")) {
    return api.sendMessage("Từ từ hối hối cl", threadID);
  };
if ((event.body.toLowerCase() == "ê") || (event.body.toLowerCase() == "ê m")) {
    return api.sendMessage("Ê cc. Biết tao nhiêu tuổi ko mà ê", threadID);
  };
if ((event.body.toLowerCase() == "hú") || (event.body.toLowerCase() == "hú le")) {
    return api.sendMessage("Hú qq. người ko làm đi làm chó", threadID);
  };
  if ((event.body.toLowerCase() == "hai tvm") || (event.body.toLowerCase() == "hăi tvm")) {
    return api.sendMessage("Mới vào nhớ tương tác ko là ăn đạp", threadID);
  };
if ((event.body.toLowerCase() == "tt") || (event.body.toLowerCase() == "tt đi")) {
    return api.sendMessage("Đéo tương tác thì kick mẹ đi. kêu với chả gọi", threadID);
  };
if ((event.body.toLowerCase() == "cl") || (event.body.toLowerCase() == "cái lz")) {
    return api.sendMessage("Tao có 1 cái. Muốn đụ thì zô đây", threadID);
  };
if ((event.body.toLowerCase() == ":((") || (event.body.toLowerCase() == ":(((")) {
    return api.sendMessage("Sao buồn zậy. Không sao đâu mọi chuyện sẽ ổn thôi", threadID);
  };
if ((event.body.toLowerCase() == "chán") || (event.body.toLowerCase() == "chán quá")) {
    return api.sendMessage("Học bài đi. Chán chán đb", threadID);
  };
if ((event.body.toLowerCase() == "khóc") || (event.body.toLowerCase() == "chắc tao khóc")) {
    return api.sendMessage("Khóc đi khóc đi đừng ngại ngùng", threadID);
  };
  if ((event.body.toLowerCase() == "sủa") || (event.body.toLowerCase() == "sủa cc")) {
    return api.sendMessage("Mày có hiểu không mà bảo nó sủa", threadID);
  };
if ((event.body.toLowerCase() == "hazzz") || (event.body.toLowerCase() == "hazz")) {
    return api.sendMessage("Cậu sao vậy. Có chuyện gì à", threadID);
  };
if ((event.body.toLowerCase() == "hazzzz") || (event.body.toLowerCase() == "hazzzzz")) {
    return api.sendMessage("Cậu sao thế. Có chuyện gì hả", threadID);
  };
if ((event.body.toLowerCase() == "haiz") || (event.body.toLowerCase() == "haizz")) {
    return api.sendMessage("Sao thế. Có chuyện gì xảy ra à", threadID);
  };
if ((event.body.toLowerCase() == "haizzz") || (event.body.toLowerCase() == "haizzzz")) {
    return api.sendMessage("Cậu sao đấy. Ai làm gì cậu hả.", threadID);
  };
  if ((event.body.toLowerCase() == ":<") || (event.body.toLowerCase() == ":<<")) {
    return api.sendMessage("Em bé của tôi sao đây 🥺", threadID);
  };
  if ((event.body.toLowerCase() == "khók") || (event.body.toLowerCase() == "khóc đây")) {
    return api.sendMessage("Khóc đi cho vơi hết muộn phiền", threadID);
  };
if ((event.body.toLowerCase() == "sv") || (event.body.toLowerCase() == "sao vậy")) {
    return api.sendMessage("Sao trăng gì. Ăn lồn rồi", threadID);
  };
if ((event.body.toLowerCase() == "khiếp") || (event.body.toLowerCase() == "khiếp thế")) {
    return api.sendMessage("Khiếp quá. ebe sợ. awwwwwww", threadID);
  };
  if ((event.body.toLowerCase() == "aww") || (event.body.toLowerCase() == "awww")) {
    return api.sendMessage("Gì la dữ vậy mày. chết đến nơi hông bằng", threadID);
  };
if ((event.body.toLowerCase() == "awwww") || (event.body.toLowerCase() == "awwwwww")) {
    return api.sendMessage("Gì la ghê thế. Tao hoang mang vãi c", threadID);
  };
  if ((event.body.toLowerCase() == "như c") || (event.body.toLowerCase() == "như cc")) {
    return api.sendMessage("Như cái đầu buồi luôn. ", threadID);
  };
  if ((event.body.toLowerCase() == "ghê") || (event.body.toLowerCase() == "ghê chưa")) {
    return api.sendMessage("Quá ghê nuôn 😁😁", threadID);
  };
if ((event.body.toLowerCase() == "đéo") || (event.body.toLowerCase() == "đéo biết")) {
    return api.sendMessage("Ngu vl. Cái gì cũng đéo", threadID);
  };
if ((event.body.toLowerCase() == "đéo chơi") || (event.body.toLowerCase() == "đéo thích")) {
    return api.sendMessage("Tới đi bạn ơi. Ngại ngùng cái gì", threadID);
  };
if ((event.body.toLowerCase() == "thôi") || (event.body.toLowerCase() == "thôi mà")) {
    return api.sendMessage("Thôi cái gì. Ta chỉ sống 1 lần trên đời", threadID);
};
if ((event.body.toLowerCase() == "thôi má") || (event.body.toLowerCase() == "thôi mày ơi")) {
    return api.sendMessage("Thôi cái gì mà thôi. Tới luôn đi", threadID);
  };
if ((event.body.toLowerCase() == "chết") || (event.body.toLowerCase() == "chết mẹ")) {
    return api.sendMessage("Xin vĩnh biệt cuộc đời. Kiếp sống hẩm hiu", threadID);
  };
  if ((event.body.toLowerCase() == "chết cha") || (event.body.toLowerCase() == "chết tao")) {
    return api.sendMessage("xin vĩnh biệt cụ. Ra đi thanh thản", threadID);
  };
  if ((event.body.toLowerCase() == "năn nỉ") || (event.body.toLowerCase() == "năn nỉ á")) {
    return api.sendMessage("Năn nỉ cc. Lấy súng bắn nó mẹ cho rồi", threadID);
  };
if ((event.body.toLowerCase() == "flop vc") || (event.body.toLowerCase() == "flop vl")) {
    return api.sendMessage("Flop thì đưa key tao kick hết cho mà tuyển đứa khác", threadID);
  };
  if ((event.body.toLowerCase() == "điên à") || (event.body.toLowerCase() == "khùng à")) {
    return api.sendMessage("Cho nó vào viện đê. Để tao gọi 113", threadID);
  };
  if ((event.body.toLowerCase() == "bê đê") || (event.body.toLowerCase() == "gay")) {
    return api.sendMessage("Kệ ngta chứ sao mày kị thị vậy con👎🏿", threadID);
  };
  if ((event.body.toLowerCase() == "im mồm") || (event.body.toLowerCase() == "nín lại")) {
    return api.sendMessage("Ngta có mồm ngta sủa. Mày bảo im là im thế nào", threadID);
  };
if ((event.body.toLowerCase() == "trùm") || (event.body.toLowerCase() == "chùm")) {
    return api.sendMessage("Trùm mềm chứ trùm cái lồn gì. Tao mới là trùm", threadID);
  };
if ((event.body.toLowerCase() == "tao trùm") || (event.body.toLowerCase() == "tao là trùm")) {
    return api.sendMessage("Trùm cc nghe mắc ỉa chưa. tao mới là trùm", threadID);
  };
if ((event.body.toLowerCase() == "trùm bóc") || (event.body.toLowerCase() == "trùm box")) {
    return api.sendMessage("Im mẹ mồm. tao mới trùm", threadID);
  };
if ((event.body.toLowerCase() == "chất") || (event.body.toLowerCase() == "chất chưa")) {
    return api.sendMessage("Quá chất. Chất như nước lồn. À nhầm nước cất", threadID);
  };
if ((event.body.toLowerCase() == "quá chất") || (event.body.toLowerCase() == "truất")) {
    return api.sendMessage("Chất vãi lồn bạn ơi. Bạn là nhất", threadID);
  };
if ((event.body.toLowerCase() == "oẹ") || (event.body.toLowerCase() == "oẹ oẹ")) {
    return api.sendMessage("Bộ nó xấu lắm hả sao m ói ghê vâỵ. Mà công nhận nó xấu thiệt =)))", threadID);
  };
  if ((event.body.toLowerCase() == "dễ") || (event.body.toLowerCase() == "dễ mà")) {
    return api.sendMessage("Dễ con cặc. Nói thì ai nói chả đc 😏", threadID);
  };
if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙃")) {
    return api.sendMessage("Đéo ổn thì nói ra đi. icon cái lồn tao 😏", threadID);
  };
  if ((event.body.toLowerCase() == "☺️") || (event.body.toLowerCase() == "😊")) {
    return api.sendMessage("Tao nhìn icon là thấy đéo ổn rồi đấy", threadID);
  };
  if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😼")) {
    return api.sendMessage("Nhếch mép con cặc. Mày tính gạ địt ai?", threadID);
  };
  if ((event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😂")) {
    return api.sendMessage("Cười vừa vừa thôi. Chảy nước mắt nước mũi ghê quá", threadID);
  };
if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😍")) {
    return api.sendMessage("Tao biết tao đẹp mà.  Ahihi", threadID);
  };
if ((event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "😁")) {
    return api.sendMessage("Cười zui thế cho tao cười với coi 😁😁😁", threadID);
  };

  if ((event.body.toLowerCase() == "chịu") || (event.body.toLowerCase() == "tao chịu")) {
    return api.sendMessage("Tao cũng chịu. Sự ngu dốt của nó tao ko cản nỗi", threadID);
  };
if ((event.body.toLowerCase() == "mé") || (event.body.toLowerCase() == "moá")) {
    return api.sendMessage("Mẹ đây con. Về mẹ cho bú", threadID);
  };

  if ((event.body.toLowerCase() == "nhớp") || (event.body.toLowerCase() == "thúi")) {
    return api.sendMessage("Thôi mày né tao ra dùm. Tao đang thơm tho lắm.", threadID);
  };
  if ((event.body.toLowerCase() == "key") || (event.body.toLowerCase() == "đưa key")) {
    return api.sendMessage("key cái đầu buồi, tính cướp box anh hả, mơ đi cưng 😏", threadID);
  };
  if ((event.body.toLowerCase() == "z hả") || (event.body.toLowerCase() == "vậy hả")) {
    return api.sendMessage("chứ sao nữa hả hả đầu buồi", threadID);
  };
if ((event.body.toLowerCase() == "xin key") || (event.body.toLowerCase() == "cho key")) {
    return api.sendMessage("thích key ko. nhìn bản thân mày có xứng đáng ko 😏", threadID);
  };
  if ((event.body.toLowerCase() == "cho tao key") || (event.body.toLowerCase() == "đưa tao key")) {
    return api.sendMessage("đừng đưa cho nó. nó tuổi lồn có key 😏", threadID);
  };
  
if ((event.body.toLowerCase() == "pp mn") || (event.body.toLowerCase() == "chào mn")) {
    return api.sendMessage("Mọi người đéo chào cậu nha. Cậu đi thanh thản", threadID);
  };
  if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
    return api.sendMessage("Lườm lườm con cặc. Móc mắt giờ", threadID);
  };
if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🧐")) {
    return api.sendMessage("Đề chiều nay ra 78. nghe tao phan đi ko cần suy nghĩ", threadID);
  };
  if ((event.body.toLowerCase() == "🤫") || (event.body.toLowerCase() == "🤭")) {
    return api.sendMessage("Gì nói mẹ đi. Bí với chả mật", threadID);
  };
  if ((event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "😟")) {
    return api.sendMessage("Thôi đừng bày ra vẻ mặt đó trước mặt tao. không có kết quả gì đâu /awwwwww cute quá/", threadID);
  };
  if ((event.body.toLowerCase() == "🙁") || (event.body.toLowerCase() == "😕")) {
    return api.sendMessage("Bae sao vậy. Buồn chuyện gì cứ tâm sự với mọi người ở đây (●´⌓`●)", threadID);
  };
  if ((event.body.toLowerCase() == "🌚") || (event.body.toLowerCase() == "🌝")) {
    return api.sendMessage("Gì đó gì đó. Trong sáng lên nghen", threadID);
  };
if ((event.body.toLowerCase() == "😟") || (event.body.toLowerCase() == "😥")) {
    return api.sendMessage("Lo lắng gì vậy bae. ko sao đâu mọi chuyện sẽ ổn thôi", threadID);
  };
if ((event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😡")) {
    return api.sendMessage("Quánh chết mẹ nó. đứa nào làm mày bực", threadID);
  };
if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😲")) {
    return api.sendMessage("Bất ngờ chưa w(°ｏ°)w", threadID);
  };
  if ((event.body.toLowerCase() == "😝") || (event.body.toLowerCase() == "😛")) {
    return api.sendMessage("Cắt lưỡi mày giờ. Lè lè cc", threadID);
  };
  if ((event.body.toLowerCase() == "hù") || (event.body.toLowerCase() == "hù nè")) {
    return api.sendMessage("Hù cái qq. Tao đéo sợ đâu kakaka", threadID);
  };
   if ((event.body.toLowerCase() == "bot điên") || (event.body.toLowerCase() == "khùng")) {
    return api.sendMessage("Tao điên tao khùng kệ mẹ tao. Mắc con cặc gì tới mày hả tró nhu", threadID);
  };
   if ((event.body.toLowerCase() == "bot lỏ") || (event.body.toLowerCase() == "bot cùi")) {
    return api.sendMessage("Cùi vậy đó có sao hơm. Đỡ hơn đứa vừa lùn vừa xấu như mày nhá", threadID);
  };
   if ((event.body.toLowerCase() == "bot nhây") || (event.body.toLowerCase() == "bot nhây vl")) {
    return api.sendMessage("Nhây chỗ nào chỉ coi. Em ko hề nhây nhá", threadID);
  };
   if ((event.body.toLowerCase() == ";.;") || (event.body.toLowerCase() == ";-;")) {
    return api.sendMessage("Vẻ mặt gì đấy, thích ăn đấm không", threadID);
  };
   if ((event.body.toLowerCase() == "hmm") || (event.body.toLowerCase() == "hmmm")) {
    return api.sendMessage("Suy nghĩ gì nữa, đề chìu nay ra con 47. Phang liền cho nóng", threadID);
  };
   if ((event.body.toLowerCase() == "xin off") || (event.body.toLowerCase() == "xin out")) {
    return api.sendMessage("Chào mày nha. Nhớ nào rảnh quay lại chơi với tao ", threadID);
  };
   if ((event.body.toLowerCase() == "sao vậy") || (event.body.toLowerCase() == "sao")) {
    return api.sendMessage("Sao trăng gì tầm này. Chắc lại hết tiền nạp fai fai chứ gì", threadID);
  };
   if ((event.body.toLowerCase() == "dcm bot") || (event.body.toLowerCase() == "dm bot")) {
    return api.sendMessage("Tới mà địt. Cu bao nhiêu mà đòi địt mẹ tao", threadID);
  };
   if ((event.body.toLowerCase() == "lồn bot") || (event.body.toLowerCase() == "cặc bot")) {
    return api.sendMessage("Có thì show ra bố mày xem", threadID);
  };
   if ((event.body.toLowerCase() == "mất dạy") || (event.body.toLowerCase() == "mất nết")) {
    return api.sendMessage("Thứ như nó nên đục zô cái mỏ nó. Đừg để đẻ trứng", threadID);
  };
   if ((event.body.toLowerCase() == "ồ") || (event.body.toLowerCase() == "õmg")) {
    return api.sendMessage("Bất ngờ chưa. kekekekekeke", threadID);
  };
   if ((event.body.toLowerCase() == "buồn") || (event.body.toLowerCase() == "buồn vl")) {
    return api.sendMessage("gì đâu mà buồn. vui lên đi. cuộc đời có bao nhiêu đâu mà hững hờ", threadID);
  };
   if ((event.body.toLowerCase() == "buồn quá") || (event.body.toLowerCase() == "buồn vc")) {
    return api.sendMessage("gì đâu mà buồn. vui lên đi. cuộc đời có bao nhiêu đâu mà hững hờ", threadID);
  };
   if ((event.body.toLowerCase() == "huhu") || (event.body.toLowerCase() == "huhuhu")) {
    return api.sendMessage("Ngu thì chết khóc lóc đầu buồi", threadID);
  };
  if ((event.body.toLowerCase() == "hic") || (event.body.toLowerCase() == "hicc")) {
    return api.sendMessage("ngu thì chết khóc lóc đầu buồi", threadID);
  };
  if ((event.body.toLowerCase() == "xinh") || (event.body.toLowerCase() == "xinh quá")) {
    return api.sendMessage("Vậy thì đích thị chị ấy là vợ em kekekekeke. Yêu chị <3", threadID);
  };
  if ((event.body.toLowerCase() == "xinh lắm") || (event.body.toLowerCase() == "xinh nha")) {
    return api.sendMessage("Vậy thì đích thị chị ấy là vợ em kekekekeke. Yêu chị <3", threadID);
  };
  if ((event.body.toLowerCase() == "In tư admin ") || (event.body.toLowerCase() == "In4 admin ")) {
    return api.sendMessage("https://www.facebook.com/minkduc1901", threadID);
  };
  if ((event.body.toLowerCase() == "admin") || (event.body.toLowerCase() == "Ad bot là ai vậy")) {
    return api.sendMessage(" kêu chi thằng lòn ad ngủ mẹ rồi, phô lô cho nó rồi ib cho nó đê https://www.facebook.com/minkduc1901", threadID);
  };
  if ((event.body.toLowerCase() == "đẹp") || (event.body.toLowerCase() == "đẹp lắm")) {
    return api.sendMessage("Vậy là em đã yêu chị ngay cái nhìn đầu tiên. Cưới em nhé <3", threadID);
  };
  if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
    return api.sendMessage("", threadID);
  };
  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: rand
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }