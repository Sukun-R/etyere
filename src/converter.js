async function sendSentencesData(str) {
  if (inputtype === "roma") {
    const kanji = str;
    const hiragana = await KanjiToHiragana(str);
    const roma = await HiraganaToRoma(hiragana);
    return {
      kanji: kanji,
      hiragana: hiragana,
      roma: roma,
    };
  }
  if (inputtype === "kana") {
    const kanji = str;
    const hiragana = await KanjiToHiragana(str);
    return {
      kanji: kanji,
      hiragana: hiragana,
    };
  }
}


function createTokenizer() {
  return new Promise((resolve, reject) => {
    kuromoji.builder({ dicPath: "./dict/" }).build((err, tokenizer) => {
      if (err) reject(err);
      else resolve(tokenizer);
    });
  });
}

async function KanjiToHiragana(str) {
  try {
    const tokenizer = await createTokenizer();

    const tokens = tokenizer.tokenize(str);

    const hiragana = katakanaToHiragana(tokens.map(t => t.reading || t.surface_form).join(""));

    return hiragana;
  } catch {
    alert("error\nファイル内に不正な文字が含まれている可能性があります。");
  }
}
function katakanaToHiragana(str) {
  return str.replace(/[\u30a1-\u30f6]/g, ch => {
    if (ch === "ヴ") return "ゔ";

    return String.fromCharCode(ch.charCodeAt(0) - 0x60);
  });
}
async function HiraganaToRoma(str) {
  const roma = [];
  const sutegana = "ぁぃぅぇぉゃゅょ";
  const forN = "あいうえおなにぬねのやゆよん";
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "ん" &&
      (forN.includes(str[i + 1]) ||
        str[i + 1] === undefined ||
        str[i + 1] === "\r")
    ) {
      if (str[i + 1] === "う") {
        roma.push([
          "nnu",
          "xnu",
          "nnwu",
          "xnwu",
          "nnwhu",
          "xnwhu",
          "nwu",
          "nwhu",
        ]);
        i++;
      } else {
        roma.push(["nn", "xn"]);
      }
    } else {
      if (
        roma_table_1[str[i]] &&
        !sutegana.includes(str[i + 1]) &&
        !roma_table_3[str[i] + str[i + 1]]
      ) {
        roma.push(roma_table_1[str[i]]);
      }
      if (roma_table_2[str[i] + str[i + 1]]) {
        roma.push(roma_table_2[str[i] + str[i + 1]]);
        i++;
      }
      if (roma_table_3[str[i] + str[i + 1]] && !sutegana.includes(str[i + 2])) {
        roma.push(roma_table_3[str[i] + str[i + 1]]);
        i++;
      }
      if (roma_table_4[str[i] + str[i + 1] + str[i + 2]]) {
        roma.push(roma_table_4[str[i] + str[i + 1] + str[i + 2]]);
        i += 2;
      }
      if (sign_table[str[i]]) {
        roma.push(sign_table[str[i]]);
      }
    }
  }
  return roma;
}
