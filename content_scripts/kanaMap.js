/*
 * File created By Thorbjørn Bonvik, 2017.
 * based on mozillas emoji substitution example
 * This file contains the Map of latin string --> hiragana substitutions.
 */



let tempArray = new Array();
let sortedKanaMap;

/* HIRAGANA MAPPINGS */

let kanaa = new Map();
let kanai = new Map();
let kanao = new Map();
let kanau = new Map();
let kanae = new Map();
let kanan = new Map();

let kanad = new Map();
let kanah = new Map();
let kanay = new Map();

kanaa.set('a', 'あ');
kanaa.set('ka', 'か');
kanaa.set('sa', 'さ');
kanaa.set('ta', 'た');
kanaa.set('na', 'な');
kanaa.set('ha', 'は');
kanaa.set('ma', 'ま');
kanaa.set('ya', 'や');
kanaa.set('ra', 'ら');
kanaa.set('wa', 'わ');

kanai.set('i', 'い');
kanai.set('ki', 'き');
kanai.set('shi', 'し');
kanai.set('chi', 'ち');
kanai.set('ni', 'に');
kanai.set('hi', 'ひ');
kanai.set('mi', 'み');
kanai.set('ri', 'り');
//kanai.set('wi', 'ゐ'); //outdated character

kanau.set('u', 'う');
kanau.set('ku', 'く');
kanau.set('su', 'す');
kanau.set('tsu', 'つ');
kanau.set('nu', 'ぬ');
kanau.set('fu', 'ふ');
kanau.set('mu', 'む');
kanau.set('ru', 'る');
kanau.set('yu', 'ゆ');

kanae.set('e', 'え');
kanae.set('ke', 'け');
kanae.set('se', 'せ');
kanae.set('te', 'て');
kanae.set('ne', 'ね');
kanae.set('he', 'へ');
kanae.set('me', 'め');
kanae.set('re', 'れ');
//kanae.set('we', 'ゑ'); //outdated character

kanao.set('o', 'お');
kanao.set('ko', 'こ');
kanao.set('so', 'そ');
kanao.set('to', 'と');
kanao.set('no', 'の');
kanao.set('ho', 'ほ');
kanao.set('mo', 'も');
kanao.set('ro', 'ろ');
kanao.set('yo', 'よ');
kanao.set('wo', 'を');

kanan.set('n', 'ん');

//How to implement: 1. Dakuten active -> all dakuten. EASY || 2. Dakuten active only additionally selected characters BETTer

kanad.set('ga', 'が');
kanad.set('gi', 'ぎ');
kanad.set('gu', 'ぐ');
kanad.set('ge', 'げ');
kanad.set('go', 'ご');

kanad.set('za', 'ざ');
kanad.set('ji', 'じ');
kanad.set('zu', 'ず');
kanad.set('ze', 'ぜ');
kanad.set('zo', 'ぞ');

kanad.set('da', 'だ');
kanad.set('dji', 'ぢ');
kanad.set('dzu', 'づ');
kanad.set('de', 'で');
kanad.set('do', 'ど');

kanad.set('ba', 'ば');
kanad.set('bi', 'び');
kanad.set('bu', 'ぶ');
kanad.set('be', 'べ');
kanad.set('bo', 'ぼ');

kanah.set('pa', 'ぱ');
kanah.set('pu', 'ぷ');
kanah.set('pi', 'ぴ');
kanah.set('pe', 'ぺ');
kanah.set('po', 'ぽ');

//YOON
kanay.set('kya', 'きゃ');
kanay.set('kyu', 'きゅ');
kanay.set('kyo', 'きょ');

kanay.set('sha', 'しゃ');
kanay.set('shu', 'しゅ');
kanay.set('sho', 'しょ');

kanay.set('cha', 'ちゃ');
kanay.set('chu', 'ちゅ');
kanay.set('cho', 'ちょ');

kanay.set('nya', 'にゃ');
kanay.set('nyu', 'にゅ');
kanay.set('nyo', 'にょ');

kanay.set('hya', 'ひゃ');
kanay.set('hyu', 'ひゅ');
kanay.set('hyo', 'ひょ');

kanay.set('mya', 'みゃ');
kanay.set('myu', 'みゅ');
kanay.set('myo', 'みょ');

kanay.set('rya', 'りゃ');
kanay.set('ryu', 'りゅ');
kanay.set('ryo', 'りょ');


// ORDER: n, a, i, u, o, e, da, ha, yo,
// TODO: da, ha, yo
let dictionary = [[false, Array.from(kanan)], [false, Array.from(kanaa)], [false,Array.from(kanai)], [false, Array.from(kanau)], [false, Array.from(kanao)], [false, Array.from(kanae)],
                  [false, Array.from(kanad)], [false, Array.from(kanah)], [false, Array.from(kanay)]];


/*
 * After all the dictionary entries have been set, sort them by length.
 *
 * Because iteration over Maps happens by insertion order, this avoids
 * scenarios where words that are substrings of other words get substituted
 * first, leading to the longer word's substitution never triggering.
 *
 * For example, the 'kya' substitution would never get triggered
 * if the 'ya' substitution happens first because the input term 'kya'
 * would become 'kゃ', and the search for 'kya' would not find any matches.
 */

function getSortedMap(){
  tempArray = new Array();

  for (var i = 0; i < dictionary.length; i++) {
    if(dictionary[i][0]){
      //console.log("ADD " + Array.from(dictionary[i][1]).toString());
      for(var j = 0; j < dictionary[i][1].length; j++){
        tempArray.push(Array.from(dictionary[i][1][j])); //adds all enabled kana-maps to the substitution array
      }

    }
  }

  tempArray.sort((pair1, pair2) => {
    var firstWord = pair1[0];
    var secondWord = pair2[0];

    if (firstWord.length > secondWord.length) {
      // The first word should come before the second word.

      return -1;
    }
    if (secondWord.length > firstWord.length) {
      // The second word should come before the first word.

      return 1;
    }

    // The words have the same length, it doesn't matter which comes first.
    return 0;
  });

  // Now that the entries are sorted, put them back into a Map.
  return new Map(tempArray);

}
