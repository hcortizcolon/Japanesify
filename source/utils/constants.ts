import { JapanesifyState } from './types';

export const getHiraganaMaps = (
  state: JapanesifyState,
  previousState: JapanesifyState
) => {
  return {
    n: new Map([['n', 'ん']]),
    a: new Map([
      ['wa', 'わ'],
      ['ra', 'ら'],
      ['ya', 'や'],
      ['ma', 'ま'],
      ['ha', 'は'],
      state.enabled && state.n ? ['んa', 'な'] : ['na', 'な'],
      ['ta', 'た'],
      ['sa', 'さ'],
      ['ka', 'か'],
      ['a', 'あ'],
    ]),
    i: new Map([
      ['ri', 'り'],
      ['mi', 'み'],
      state.enabled && state.n ? ['んi', 'に'] : ['ni', 'に'],
      ['shi', 'し'],
      ['chi', 'ち'],
      ['hi', 'ひ'],
      ['ki', 'き'],
      ['i', 'い'],
    ]),
    u: new Map([
      ['tsu', 'つ'],
      ['su', 'す'],
      state.enabled && state.n ? ['んu', 'ぬ'] : ['nu', 'ぬ'],
      ['fu', 'ふ'],
      ['mu', 'む'],
      ['ru', 'る'],
      ['yu', 'ゆ'],
      ['ku', 'く'],
      ['u', 'う'],
    ]),
    e: new Map([
      ['re', 'れ'],
      ['me', 'め'],
      ['he', 'へ'],
      state.enabled && state.n ? ['んe', 'ね'] : ['ne', 'ね'],
      ['te', 'て'],
      ['se', 'せ'],
      ['ke', 'け'],
      ['e', 'え'],
    ]),
    o: new Map([
      ['wo', 'を'],
      ['yo', 'よ'],
      ['ro', 'ろ'],
      ['mo', 'も'],
      ['ho', 'ほ'],
      state.enabled && state.n ? ['んo', 'の'] : ['no', 'の'],
      ['to', 'と'],
      ['so', 'そ'],
      ['ko', 'こ'],
      ['o', 'お'],
    ]),
    dak: new Map([
      state.a
        ? state.enabled
          ? ['gあ', 'が']
          : ['ga', 'が']
        : previousState.a
        ? ['が', 'ga']
        : ['', ''],
      state.a
        ? state.enabled
          ? ['zあ', 'ざ']
          : ['za', 'ざ']
        : previousState.a
        ? ['ざ', 'za']
        : ['', ''],
      state.a
        ? state.enabled
          ? ['dあ', 'だ']
          : ['da', 'だ']
        : previousState.a
        ? ['だ', 'da']
        : ['', ''],
      state.a
        ? state.enabled
          ? ['bあ', 'ば']
          : ['ba', 'ば']
        : previousState.a
        ? ['ば', 'ba']
        : ['', ''],
      state.i
        ? state.enabled
          ? ['gい', 'ぎ']
          : ['gi', 'ぎ']
        : previousState.i
        ? ['ぎ', 'gi']
        : ['', ''],
      state.i
        ? state.enabled
          ? ['djい', 'ぢ']
          : ['dji', 'ぢ']
        : previousState.i
        ? ['ぢ', 'dji']
        : ['', ''],
      state.i
        ? state.enabled
          ? ['jい', 'じ']
          : ['ji', 'じ']
        : previousState.i
        ? ['じ', 'ji']
        : ['', ''],
      state.i
        ? state.enabled
          ? ['bい', 'び']
          : ['bi', 'び']
        : previousState.i
        ? ['び', 'bi']
        : ['', ''],
      state.u
        ? state.enabled
          ? ['gう', 'ぐ']
          : ['gu', 'ぐ']
        : previousState.u
        ? ['ぐ', 'gu']
        : ['', ''],
      state.u
        ? state.enabled
          ? ['dzう', 'づ']
          : ['dzu', 'づ']
        : previousState.u
        ? ['づ', 'dzu']
        : ['', ''],
      state.u
        ? state.enabled
          ? ['zう', 'ず']
          : ['zu', 'ず']
        : previousState.u
        ? ['ず', 'zu']
        : ['', ''],
      state.u
        ? state.enabled
          ? ['bう', 'ぶ']
          : ['bu', 'ぶ']
        : previousState.u
        ? ['ぶ', 'bu']
        : ['', ''],
      state.e
        ? state.enabled
          ? ['gえ', 'げ']
          : ['ge', 'げ']
        : previousState.e
        ? ['げ', 'ge']
        : ['', ''],
      state.e
        ? state.enabled
          ? ['zえ', 'ぜ']
          : ['ze', 'ぜ']
        : previousState.e
        ? ['ぜ', 'ze']
        : ['', ''],
      state.e
        ? state.enabled
          ? ['dえ', 'で']
          : ['de', 'で']
        : previousState.e
        ? ['で', 'de']
        : ['', ''],
      state.e
        ? state.enabled
          ? ['bえ', 'べ']
          : ['be', 'べ']
        : previousState.e
        ? ['べ', 'be']
        : ['', ''],
      state.o
        ? state.enabled
          ? ['gお', 'ご']
          : ['go', 'ご']
        : previousState.o
        ? ['ご', 'go']
        : ['', ''],
      state.o
        ? state.enabled
          ? ['zお', 'ぞ']
          : ['zo', 'ぞ']
        : previousState.o
        ? ['ぞ', 'zo']
        : ['', ''],
      state.o
        ? state.enabled
          ? ['dお', 'ど']
          : ['do', 'ど']
        : previousState.o
        ? ['ど', 'do']
        : ['', ''],
      state.o
        ? state.enabled
          ? ['bお', 'ぼ']
          : ['bo', 'ぼ']
        : previousState.o
        ? ['ぼ', 'bo']
        : ['', ''],
    ]),
    han: new Map([
      state.a
        ? state.enabled
          ? ['pあ', 'ぱ']
          : ['pa', 'ぱ']
        : previousState.a
        ? ['ぱ', 'pa']
        : ['', ''],
      state.i
        ? state.enabled
          ? ['pい', 'ぴ']
          : ['pi', 'ぴ']
        : previousState.i
        ? ['ぴ', 'pi']
        : ['', ''],
      state.u
        ? state.enabled
          ? ['pう', 'ぷ']
          : ['pu', 'ぷ']
        : previousState.u
        ? ['ぷ', 'pu']
        : ['', ''],
      state.e
        ? state.enabled
          ? ['pえ', 'ぺ']
          : ['pe', 'ぺ']
        : previousState.e
        ? ['ぺ', 'pe']
        : ['', ''],
      state.o
        ? state.enabled
          ? ['pお', 'ぽ']
          : ['po', 'ぽ']
        : previousState.o
        ? ['ぽ', 'po']
        : ['', ''],
    ]),
    yoon: new Map([
      state.a
        ? state.enabled
          ? ['kや', 'きゃ']
          : ['kya', 'kiゃ']
        : previousState.a
        ? ['きゃ', 'kya']
        : ['', ''],
      state.a
        ? state.enabled
          ? ['sは', 'しゃ']
          : ['sha', 'shiゃ']
        : previousState.a
        ? ['しゃ', 'sha']
        : ['', ''],
      state.a
        ? state.enabled
          ? ['cは', 'ちゃ']
          : ['cha', 'chiゃ']
        : previousState.a
        ? ['ちゃ', 'cha']
        : ['', ''],
      state.a
        ? state.enabled
          ? ['nや', 'にゃ']
          : ['nya', 'niゃ']
        : previousState.a
        ? ['にゃ', 'nya']
        : ['', ''],
      state.a
        ? state.enabled
          ? ['hや', 'ひゃ']
          : ['hya', 'hiゃ']
        : previousState.a
        ? ['ひゃ', 'hya']
        : ['', ''],
      state.a
        ? state.enabled
          ? ['mや', 'みゃ']
          : ['mya', 'miゃ']
        : previousState.a
        ? ['みゃ', 'mya']
        : ['', ''],
      state.a
        ? state.enabled
          ? ['rや', 'りゃ']
          : ['rya', 'riゃ']
        : previousState.a
        ? ['りゃ', 'rya']
        : ['', ''],
      state.o
        ? state.enabled
          ? ['kよ', 'きょ']
          : ['kyo', 'kiょ']
        : previousState.o
        ? ['きょ', 'kyo']
        : ['', ''],
      state.o
        ? state.enabled
          ? ['sほ', 'しょ']
          : ['sho', 'shiょ']
        : previousState.o
        ? ['しょ', 'sho']
        : ['', ''],
      state.o
        ? state.enabled
          ? ['cほ', 'ちょ']
          : ['cho', 'chiょ']
        : previousState.o
        ? ['ちょ', 'cho']
        : ['', ''],
      state.o
        ? state.enabled
          ? ['nよ', 'にょ']
          : ['nyo', 'niょ']
        : previousState.o
        ? ['にょ', 'nyo']
        : ['', ''],
      state.o
        ? state.enabled
          ? ['hよ', 'ひょ']
          : ['hyo', 'hiょ']
        : previousState.o
        ? ['ひょ', 'hyo']
        : ['', ''],
      state.o
        ? state.enabled
          ? ['mよ', 'みょ']
          : ['myo', 'miょ']
        : previousState.o
        ? ['みょ', 'myo']
        : ['', ''],
      state.o
        ? state.enabled
          ? ['rよ', 'りょ']
          : ['ryo', 'riょ']
        : previousState.o
        ? ['りょ', 'ryo']
        : ['', ''],
      state.u
        ? state.enabled
          ? ['kゆ', 'きゅ']
          : ['kyu', 'kiゅ']
        : previousState.u
        ? ['きゅ', 'kyu']
        : ['', ''],
      state.u
        ? state.enabled
          ? ['shう', 'しゅ']
          : ['shu', 'shiゅ']
        : previousState.u
        ? ['しゅ', 'shu']
        : ['', ''],
      state.u
        ? state.enabled
          ? ['chう', 'ちゅ']
          : ['chu', 'chiゅ']
        : previousState.u
        ? ['ちゅ', 'chu']
        : ['', ''],
      state.u
        ? state.enabled
          ? ['nゆ', 'にゅ']
          : ['nyu', 'niゅ']
        : previousState.u
        ? ['にゅ', 'nyu']
        : ['', ''],
      state.u
        ? state.enabled
          ? ['hゆ', 'ひゅ']
          : ['hyu', 'hiゅ']
        : previousState.u
        ? ['ひゅ', 'hyu']
        : ['', ''],
      state.u
        ? state.enabled
          ? ['mゆ', 'みゅ']
          : ['myu', 'miゅ']
        : previousState.u
        ? ['みゅ', 'myu']
        : ['', ''],
      state.u
        ? state.enabled
          ? ['rゆ', 'りゅ']
          : ['ryu', 'riゅ']
        : previousState.u
        ? ['りゅ', 'ryu']
        : ['', ''],
    ]),
  };
};

export const getKatakanaMaps = (
  state: JapanesifyState,
  previousState: JapanesifyState
) => {
  return {
    n: new Map([
      previousState.enabled &&
      previousState.n &&
      previousState.kana === 'hiragana'
        ? ['ん', 'ン']
        : ['n', 'ン'],
    ]),
    a: new Map([
      previousState.kana === 'hiragana' ? ['わ', 'ワ'] : ['wa', 'ワ'],
      previousState.kana === 'hiragana' ? ['ら', 'ラ'] : ['ra', 'ラ'],
      previousState.a && previousState.kana === 'hiragana'
        ? ['や', 'ヤ']
        : ['ya', 'ヤ'],
      previousState.kana === 'hiragana' ? ['ま', 'マ'] : ['ma', 'マ'],
      previousState.a && previousState.kana === 'hiragana'
        ? ['は', 'ハ']
        : ['ha', 'ハ'],
      previousState.a && previousState.kana === 'hiragana'
        ? ['な', 'ナ']
        : state.enabled && state.n
        ? ['ンa', 'ナ']
        : ['na', 'ナ'],
      previousState.kana === 'hiragana' ? ['た', 'タ'] : ['ta', 'タ'],
      previousState.kana === 'hiragana' ? ['さ', 'サ'] : ['sa', 'サ'],
      previousState.kana === 'hiragana' ? ['か', 'カ'] : ['ka', 'カ'],
      previousState.a && previousState.kana === 'hiragana'
        ? ['あ', 'ア']
        : ['a', 'ア'],
    ]),
    i: new Map([
      previousState.kana === 'hiragana' ? ['り', 'リ'] : ['ri', 'リ'],
      previousState.kana === 'hiragana' ? ['み', 'ミ'] : ['mi', 'ミ'],
      previousState.kana === 'hiragana'
        ? ['に', 'ニ']
        : state.enabled && state.n
        ? ['ンi', 'ニ']
        : ['ni', 'ニ'],
      previousState.kana === 'hiragana' ? ['し', 'シ'] : ['shi', 'シ'],
      previousState.kana === 'hiragana' ? ['ち', 'チ'] : ['chi', 'チ'],
      previousState.kana === 'hiragana' ? ['ひ', 'ヒ'] : ['hi', 'ヒ'],
      previousState.kana === 'hiragana' ? ['き', 'キ'] : ['ki', 'キ'],
      previousState.kana === 'hiragana' ? ['い', 'イ'] : ['i', 'イ'],
    ]),
    u: new Map([
      previousState.kana === 'hiragana' ? ['つ', 'ツ'] : ['tsu', 'ツ'],
      previousState.kana === 'hiragana' ? ['す', 'ス'] : ['su', 'ス'],
      previousState.kana === 'hiragana' ? ['ぬ', 'ヌ'] : state.enabled && state.n ? ['ンu', 'ヌ'] : ['nu', 'ヌ'],
      previousState.kana === 'hiragana' ? ['ふ', 'フ'] : ['fu', 'フ'],
      previousState.kana === 'hiragana' ? ['む', 'ム'] : ['mu', 'ム'],
      previousState.kana === 'hiragana' ? ['る', 'ル'] : ['ru', 'ル'],
      previousState.kana === 'hiragana' ? ['ゆ', 'ユ'] : ['yu', 'ユ'],
      previousState.kana === 'hiragana' ? ['く', 'ク'] : ['ku', 'ク'],
      previousState.kana === 'hiragana' ? ['う', 'ウ'] : ['u', 'ウ'],
    ]),
    e: new Map([
      previousState.kana === 'hiragana' ? ['れ', 'レ'] : ['re', 'レ'],
      previousState.kana === 'hiragana' ? ['め', 'メ'] : ['me', 'メ'],
      previousState.kana === 'hiragana' ? ['へ', 'ヘ'] : ['he', 'ヘ'],
      previousState.kana === 'hiragana' ? ['ね', 'ネ'] : state.enabled && state.n ? ['ンe', 'ネ'] : ['ne', 'ネ'],
      previousState.kana === 'hiragana' ? ['て', 'テ'] : ['te', 'テ'],
      previousState.kana === 'hiragana' ? ['せ', 'セ'] : ['se', 'セ'],
      previousState.kana === 'hiragana' ? ['け', 'ケ'] : ['ke', 'ケ'],
      previousState.kana === 'hiragana' ? ['え', 'エ'] : ['e', 'エ'],
    ]),
    o: new Map([
      previousState.kana === 'hiragana' ? ['を', 'ヲ'] : ['wo', 'ヲ'],
      previousState.kana === 'hiragana' ? ['よ', 'ヨ'] : ['yo', 'ヨ'],
      previousState.kana === 'hiragana' ? ['ろ', 'ロ'] : ['ro', 'ロ'],
      previousState.kana === 'hiragana' ? ['も', 'モ'] : ['mo', 'モ'],
      previousState.kana === 'hiragana' ? ['ほ', 'ホ'] : ['ho', 'ホ'],
      previousState.kana === 'hiragana' ? ['の', 'ノ'] : state.enabled && state.n ? ['ンo', 'ノ'] : ['no', 'ノ'],
      previousState.kana === 'hiragana' ? ['と', 'ト'] : ['to', 'ト'],
      previousState.kana === 'hiragana' ? ['そ', 'ソ'] : ['so', 'ソ'],
      previousState.kana === 'hiragana' ? ['こ', 'コ'] : ['ko', 'コ'],
      previousState.kana === 'hiragana' ? ['お', 'オ'] : ['o', 'オ'],
    ]),
    dak: new Map([
      state.a
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.a
            ? ['が', 'ガ']
            : ['gア', 'ガ']
          : ['ga', 'ガ']
        : previousState.a
        ? ['ガ', 'ga']
        : ['', ''],
      state.a
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.a
            ? ['ざ', 'ザ']
            : ['zア', 'ザ']
          : ['za', 'ザ']
        : previousState.a
        ? ['ザ', 'za']
        : ['', ''],
      state.a
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.a
            ? ['だ', 'ダ']
            : ['dア', 'ダ']
          : ['da', 'ダ']
        : previousState.a
        ? ['ダ', 'da']
        : ['', ''],
      state.a
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.a
            ? ['ば', 'バ']
            : ['bア', 'バ']
          : ['ba', 'バ']
        : previousState.a
        ? ['バ', 'ba']
        : ['', ''],
      state.i
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.i
            ? ['ぎ', 'ギ']
            : ['gイ', 'ギ']
          : ['gi', 'ギ']
        : previousState.i
        ? ['ギ', 'gi']
        : ['', ''],
      state.i
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.i
            ? ['ぢ', 'ヂ']
            : ['djイ', 'ヂ']
          : ['dji', 'ヂ']
        : previousState.i
        ? ['ヂ', 'dji']
        : ['', ''],
      state.i
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.i
            ? ['じ', 'ジ']
            : ['jイ', 'ジ']
          : ['ji', 'ジ']
        : previousState.i
        ? ['ジ', 'ji']
        : ['', ''],
      state.i
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.i
            ? ['び', 'ビ']
            : ['bイ', 'ビ']
          : ['bi', 'ビ']
        : previousState.i
        ? ['ビ', 'bi']
        : ['', ''],
      state.u
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.u
            ? ['ぐ', 'グ']
            : ['gウ', 'グ']
          : ['gu', 'グ']
        : previousState.u
        ? ['グ', 'gu']
        : ['', ''],
      state.u
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.u
            ? ['づ', 'ヅ']
            : ['dzウ', 'ヅ']
          : ['dzu', 'ヅ']
        : previousState.u
        ? ['ヅ', 'dzu']
        : ['', ''],
      state.u
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.u
            ? ['ず', 'ズ']
            : ['zウ', 'ズ']
          : ['zu', 'ズ']
        : previousState.u
        ? ['ズ', 'zu']
        : ['', ''],
      state.u
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.u
            ? ['ぶ', 'ブ']
            : ['bウ', 'ブ']
          : ['bu', 'ブ']
        : previousState.u
        ? ['ブ', 'bu']
        : ['', ''],
      state.e
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.e
            ? ['げ', 'ゲ']
            : ['gエ', 'ゲ']
          : ['ge', 'ゲ']
        : previousState.e
        ? ['ゲ', 'ge']
        : ['', ''],
      state.e
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.e
            ? ['ぜ', 'ゼ']
            : ['zエ', 'ゼ']
          : ['ze', 'ゼ']
        : previousState.e
        ? ['ゼ', 'ze']
        : ['', ''],
      state.e
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.e
            ? ['で', 'デ']
            : ['dエ', 'デ']
          : ['de', 'デ']
        : previousState.e
        ? ['デ', 'de']
        : ['', ''],
      state.e
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.e
            ? ['べ', 'ベ']
            : ['bエ', 'ベ']
          : ['be', 'ベ']
        : previousState.e
        ? ['ベ', 'be']
        : ['', ''],
      state.o
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.o
            ? ['ご', 'ゴ']
            : ['gオ', 'ゴ']
          : ['go', 'ゴ']
        : previousState.o
        ? ['ゴ', 'go']
        : ['', ''],
      state.o
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.o
            ? ['ぞ', 'ゾ']
            : ['zオ', 'ゾ']
          : ['zo', 'ゾ']
        : previousState.o
        ? ['ゾ', 'zo']
        : ['', ''],
      state.o
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.o
            ? ['ど', 'ド']
            : ['dオ', 'ド']
          : ['do', 'ド']
        : previousState.o
        ? ['ド', 'do']
        : ['', ''],
      state.o
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.o
            ? ['ぼ', 'ボ']
            : ['bオ', 'ボ']
          : ['bo', 'ボ']
        : previousState.o
        ? ['ボ', 'bo']
        : ['', ''],
    ]),
    han: new Map([
      state.a
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.a
            ? ['ぱ', 'パ']
            : ['pア', 'パ']
          : ['pa', 'パ']
        : previousState.a
        ? ['パ', 'pa']
        : ['', ''],
      state.i
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.i
            ? ['ぴ', 'ピ']
            : ['pイ', 'ピ']
          : ['pi', 'ピ']
        : previousState.i
        ? ['ピ', 'pi']
        : ['', ''],
      state.u
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.u
            ? ['ぷ', 'プ']
            : ['pウ', 'プ']
          : ['pu', 'プ']
        : previousState.u
        ? ['プ', 'pu']
        : ['', ''],
      state.e
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.e
            ? ['ぺ', 'ペ']
            : ['pエ', 'ペ']
          : ['pe', 'ペ']
        : previousState.e
        ? ['ペ', 'pe']
        : ['', ''],
      state.o
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.o
            ? ['ぽ', 'ポ']
            : ['pオ', 'ポ']
          : ['po', 'ポ']
        : previousState.o
        ? ['ポ', 'po']
        : ['', ''],
    ]),
    yoon: new Map([
      state.a
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.a
            ? ['きゃ', 'キャ']
            : ['kヤ', 'キャ']
          : ['kya', 'kiャ']
        : previousState.a
        ? ['キャ', 'kya']
        : ['', ''],
      state.a
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.a
            ? ['しゃ', 'シャ']
            : ['sハ', 'シャ']
          : ['sha', 'shiャ']
        : previousState.a
        ? ['シャ', 'sha']
        : ['', ''],
      state.a
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.a
            ? ['ちゃ', 'チャ']
            : ['cハ', 'チャ']
          : ['cha', 'chiャ']
        : previousState.a
        ? ['チャ', 'cha']
        : ['', ''],
      state.a
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.a
            ? ['にゃ', 'ニャ']
            : ['nヤ', 'ニャ']
          : ['nya', 'niャ']
        : previousState.a
        ? ['ニャ', 'nya']
        : ['', ''],
      state.a
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.a
            ? ['ひゃ', 'ヒャ']
            : ['hヤ', 'ヒャ']
          : ['hya', 'hiャ']
        : previousState.a
        ? ['ヒャ', 'hya']
        : ['', ''],
      state.a
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.a
            ? ['みゃ', 'ミャ']
            : ['mヤ', 'ミャ']
          : ['mya', 'miャ']
        : previousState.a
        ? ['ミャ', 'mya']
        : ['', ''],
      state.a
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.a
            ? ['りゃ', 'リャ']
            : ['rヤ', 'リャ']
          : ['rya', 'riャ']
        : previousState.a
        ? ['リャ', 'rya']
        : ['', ''],
      state.o
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.o
            ? ['きょ', 'キョ']
            : ['kヨ', 'キョ']
          : ['kyo', 'kiョ']
        : previousState.o
        ? ['キョ', 'kyo']
        : ['', ''],
      state.o
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.o
            ? ['しょ', 'ショ']
            : ['sホ', 'ショ']
          : ['sho', 'shiョ']
        : previousState.o
        ? ['ショ', 'sho']
        : ['', ''],
      state.o
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.o
            ? ['ちょ', 'チョ']
            : ['cホ', 'チョ']
          : ['cho', 'chiョ']
        : previousState.o
        ? ['チョ', 'cho']
        : ['', ''],
      state.o
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.o
            ? ['にょ', 'ニョ']
            : ['nヨ', 'ニョ']
          : ['nyo', 'niョ']
        : previousState.o
        ? ['ニョ', 'nyo']
        : ['', ''],
      state.o
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.o
            ? ['ひょ', 'ヒョ']
            : ['hヨ', 'ヒョ']
          : ['hyo', 'hiョ']
        : previousState.o
        ? ['ヒョ', 'hyo']
        : ['', ''],
      state.o
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.o
            ? ['みょ', 'ミョ']
            : ['mヨ', 'ミョ']
          : ['myo', 'miョ']
        : previousState.o
        ? ['ミョ', 'myo']
        : ['', ''],
      state.o
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.o
            ? ['りょ', 'リョ']
            : ['rヨ', 'リョ']
          : ['ryo', 'riョ']
        : previousState.o
        ? ['リョ', 'ryo']
        : ['', ''],
      state.u
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.u
            ? ['きゅ', 'キュ']
            : ['kユ', 'キュ']
          : ['kyu', 'kiュ']
        : previousState.u
        ? ['キュ', 'kyu']
        : ['', ''],
      state.u
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.u
            ? ['しゅ', 'シュ']
            : ['shウ', 'シュ']
          : ['shu', 'shiュ']
        : previousState.u
        ? ['シュ', 'shu']
        : ['', ''],
      state.u
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.u
            ? ['ちゅ', 'チュ']
            : ['chウ', 'チュ']
          : ['chu', 'chiュ']
        : previousState.u
        ? ['チュ', 'chu']
        : ['', ''],
      state.u
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.u
            ? ['にゅ', 'ニュ']
            : ['nユ', 'ニュ']
          : ['nyu', 'niュ']
        : previousState.u
        ? ['ニュ', 'nyu']
        : ['', ''],
      state.u
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.u
            ? ['ひゅ', 'ヒュ']
            : ['hユ', 'ヒュ']
          : ['hyu', 'hiュ']
        : previousState.u
        ? ['ヒュ', 'hyu']
        : ['', ''],
      state.u
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.u
            ? ['みゅ', 'ミュ']
            : ['mユ', 'ミュ']
          : ['myu', 'miュ']
        : previousState.u
        ? ['ミュ', 'myu']
        : ['', ''],
      state.u
        ? state.enabled
          ? previousState.kana === 'hiragana' && previousState.u
            ? ['りゅ', 'リュ']
            : ['rユ', 'リュ']
          : ['ryu', 'riュ']
        : previousState.u
        ? ['リュ', 'ryu']
        : ['', ''],
    ]),
  };
};

export const defaultJapanesifyState: JapanesifyState = {
  enabled: false,
  kana: 'hiragana',
  n: false,
  a: false,
  i: false,
  u: false,
  e: false,
  o: false,
  dak: false,
  han: false,
  yoon: false,
};

export const JAPANESIFY_STATE = 'JapanesifyState';
