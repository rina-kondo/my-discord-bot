// ****起動処理****
//  discord.jsライブラリの設定を呼び出し・変数に保存
const { Client, Events, GatewayIntentBits } = require('discord.js');

//  botのトークン情報を呼び出し・変数に保存
const { token } = require('./config.json');

// クライアントインスタンスの作成
const client = new Client({ intents: [GatewayIntentBits.Guilds]});

// クライアントオブジェクトが準備OKとなった時、一度だけ実行される
client.once(Events.ClientReady, c => {
  console.log(`準備OKです ${c.user.tag}がログインします。`);
});


// ****スラッシュコマンド処理****
// スラッシュコマンドに応答するためにinteractionCreateのイベントリスナーを使用
client.on(Events.InteractionCreate, async interaction => {

  // スラッシュ以外のコマンドは対象外(終了)
  if (!interaction.isChartInputCommand()) return;

  // スラッシュコマンドに対する処理
  if (interaction.commandName === heyFile.data.name) {
    try {
      await heyFile.execute(interaction);
    } catch (error) {
      console.log(error);
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({ content: 'コマンド実行時にエラーになりました。', ephemeral: true });
      } else {
        await interaction.reply({ content: 'コマンド実行時にエラーになりました。', ephemeral: true });
      }
    }
  } else {
    console.error(`${interaction.commandName}というコマンドは対応していません。`);
  }
});


// ログイン
client.login(token);
