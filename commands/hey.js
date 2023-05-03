// SlashCommandBuilderという部品をdiscord.jsからインポート
// スラッシュコマンドを簡単に構築できる
const { SlashCommandBuilder } = require('discord.js');

// 以下の形式にすることで、他のファイルでインポートして使用可能になる
module.exports = {
  data: new SlashCommandBuilder()
    .setName('hey')
    .setDescription('あいさつに反応してbotが返事します'),
  execute: async function (interaction) {
    await interaction.reply('heke!');
  },
};

// module.exportsの補足
// キー・バリューの連想配列のような形で構成されています。
//
// module.exports = {
//    キー: バリュー,
//    キー: バリュー,
// };
//

// setNameには命名ルールがあり、『1 ～ 32 文字であること』大文字、スペース、および『-』『_』以外の記号が使えません。
