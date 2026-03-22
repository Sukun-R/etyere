let words;
let words_for_display;

function main() {
  if (inputtype === "roma") {
    const times = words.roma.length
    let wordsCount = 0;
    let wordLen = words.roma[wordsCount].length;
    let wordIdx = 0;
    let charsNum = 0;
    let str = "";
    let typed = "";
    let typedArr = [];
    let miss = 0;
    let accurate = 0;
    let arrForJudgement = words.roma[wordsCount][0];
    let nstr = "";
    let narr = ["nn", "xn"];
    let nFlag = true;
    let ni = 1;
    let typeddata = [];
    let isSpecialN = false;
    const starttime = Date.now();
    let progress = "";
    let initVel = Date.now();
    const initVelArr = [];
    let allTyped = ''
    const allTypedArr = []
    let lastJudgement = true;
    let buffer = ''
    const kpmArr = []
    const rkpmArr = []
    let currentMisses = 0
    const missArr = []
    let missData = []
    const missDataArr = []
    document.addEventListener("keydown", function keyEvent(e) {
      if (typeof words.roma[wordsCount][wordIdx] === "string") {
        if (judge(e.key, words.roma[wordsCount][wordIdx], charsNum, "str")) {
          if (wordIdx === 0 && progress === "") {
            initVelArr.push((Date.now() - initVel) / 1000);
          }
          accurate++;
          charsNum++;
          typed += e.key;
          progress += e.key;
          words_for_display = wordsForDisplay(words);
          displayWords(
            createInterimProgressEle(
              words,
              wordsCount,
              typeddata,
              progress,
              words.roma[wordsCount][wordIdx],
              true
            )
          );
          if (charsNum === words.roma[wordsCount][wordIdx].length) {
            charsNum = 0;
            wordIdx++;
            str = "";
            progress = "";
            typeddata.push(null);
            arrForJudgement = words.roma[wordsCount][wordIdx];
          }
          if (!lastJudgement) {
            allTyped += `<span class="now_miss">${buffer.replace(/ /g, "␣")}</span>`
            buffer = ''
            lastJudgement = true;
          }
          allTyped += e.key
        } else if (
          !judge(e.key, words.roma[wordsCount][wordIdx], charsNum, "str") &&
          !e.shiftKey
        ) {
          miss++;
          missData.push(typed.length)
          currentMisses++
          buffer += e.key
          lastJudgement = false;
          displayWords(
            createInterimProgressEle(
              words,
              wordsCount,
              typeddata,
              progress,
              words.roma[wordsCount][wordIdx],
              false
            )
          );
        }
      } else if (typeof words.roma[wordsCount][wordIdx] === "object") {
        if (
          JSON.stringify(words.roma[wordsCount][wordIdx]) ===
          JSON.stringify(["n", "nn", "xn"])
        ) {
          if (typeof words.roma[wordsCount][wordIdx + 1] === "string") {
            if (nFlag) narr.push("n" + words.roma[wordsCount][wordIdx + 1][0]);
            nFlag = false;
            nstr += e.key;
            if (ni !== 3) {
              if (nstr === "xn".substr(0, ni)) {
                if (wordIdx === 0 && progress === "") {
                  initVelArr.push((Date.now() - initVel) / 1000);
                }
                accurate++;
                typed += e.key;
                memories["ん"] = 2;
                memories["ん_b"] = 1;
                if (ni === 2) {
                  typeddata.push(2);
                }
                progress += e.key;
                words_for_display = wordsForDisplay(words);
                ni++;
                if (!lastJudgement) {
                  allTyped += `<span class="now_miss">${buffer.replace(/ /g, "␣")}</span>`
                  buffer = ''
                  lastJudgement = true;
                }
                allTyped += e.key
                displayWords(
                  createInterimProgressEle(
                    words,
                    wordsCount,
                    typeddata,
                    progress,
                    "xn",
                    true
                  )
                );
              } else if (nstr === "nn".substr(0, ni)) {
                if (wordIdx === 0 && progress === "") {
                  initVelArr.push((Date.now() - initVel) / 1000);
                }
                accurate++;
                typed += e.key;
                progress += e.key;
                if (ni === 1 && nstr[0] !== "x" && memories["ん"] !== 1) {
                  memories["ん"] = 0;
                  words_for_display = wordsForDisplay(words);
                  displayWords(
                    createInterimProgressEle(
                      words,
                      wordsCount,
                      typeddata,
                      progress,
                      "n",
                      true
                    )
                  );
                } else if (
                  ni === 1 &&
                  nstr[0] !== "x" &&
                  memories["ん"] === 1
                ) {
                  words_for_display = wordsForDisplay(words);
                  displayWords(
                    createInterimProgressEle(
                      words,
                      wordsCount,
                      typeddata,
                      progress,
                      "nn",
                      true
                    )
                  );
                } else if (ni === 2 && nstr[0] !== "x") {
                  memories["ん"] = 1;
                  memories["ん_b"] = 0;
                  typeddata.push(1);
                  words_for_display = wordsForDisplay(words);
                  displayWords(
                    createInterimProgressEle(
                      words,
                      wordsCount,
                      typeddata,
                      progress,
                      "nn",
                      true
                    )
                  );
                }
                ni++;
                if (!lastJudgement) {
                  allTyped += `<span class="now_miss">${buffer.replace(/ /g, "␣")}</span>`
                  buffer = ''
                  lastJudgement = true;
                }
                allTyped += e.key
              } else if (
                narr
                  .map((v) => v[1])
                  .filter((v) => v !== "n")
                  .includes(e.key) &&
                nstr[0] === "n"
              ) {
                if (wordIdx === 0 && progress === "") {
                  initVelArr.push((Date.now() - initVel) / 1000);
                }
                accurate++;
                typed += e.key;
                memories["ん"] = 0;
                charsNum++;
                str += e.key;
                if (ni === 2) {
                  typeddata.push(0);
                  progress = e.key;
                }
                words_for_display = wordsForDisplay(words);
                displayWords(
                  createInterimProgressEle(
                    words,
                    wordsCount,
                    typeddata,
                    progress,
                    words.roma[wordsCount][wordIdx + 1],
                    true
                  )
                );
                ni++;
                if (!lastJudgement) {
                  allTyped += `<span class="now_miss">${buffer.replace(/ /g, "␣")}</span>`
                  buffer = ''
                  lastJudgement = true;
                }
                allTyped += e.key
              } else if (e.shiftKey) {
              } else {
                miss++;
                missData.push(typed.length)
                currentMisses++
                nstr = nstr.substr(0, nstr.length - 1);
                buffer += e.key
                lastJudgement = false;
                if (progress.length <= 1) {
                  displayWords(
                    createInterimProgressEle(
                      words,
                      wordsCount,
                      typeddata,
                      progress,
                      ["n", "nn", "xn"][memories["ん"]],
                      false
                    )
                  );
                } else {
                  displayWords(
                    createInterimProgressEle(
                      words,
                      wordsCount,
                      typeddata,
                      progress,
                      words.roma[wordsCount][wordIdx + 1],
                      false
                    )
                  );
                }
              }
            }
            if (ni === 3) {
              wordIdx++;
              arrForJudgement = words.roma[wordsCount][wordIdx];
              nstr = "";
              if (memories["ん"] !== 0) {
                progress = "";
              }
              narr = ["nn", "xn"];
              nFlag = true;
              ni = 1;
            }
          } else if (typeof words.roma[wordsCount][wordIdx + 1] === "object") {
            if (nFlag)
              words.roma[wordsCount][wordIdx + 1]
                .map((v) => v[0])
                .forEach((v) => narr.push("n" + v));
            nFlag = false;
            nstr += e.key;
            if (ni !== 3) {
              if (nstr === "xn".substr(0, ni)) {
                if (wordIdx === 0 && progress === "") {
                  initVelArr.push((Date.now() - initVel) / 1000);
                }
                accurate++;
                typed += e.key;
                memories["ん"] = 2;
                memories["ん_b"] = 1;
                if (ni === 2) {
                  typeddata.push(2);
                }
                progress += e.key;
                words_for_display = wordsForDisplay(words);
                ni++;
                if (!lastJudgement) {
                  allTyped += `<span class="now_miss">${buffer.replace(/ /g, "␣")}</span>`
                  buffer = ''
                  lastJudgement = true;
                }
                allTyped += e.key
                displayWords(
                  createInterimProgressEle(
                    words,
                    wordsCount,
                    typeddata,
                    progress,
                    "xn",
                    true
                  )
                );
              } else if (nstr === "nn".substr(0, ni)) {
                if (wordIdx === 0 && progress === "") {
                  initVelArr.push((Date.now() - initVel) / 1000);
                }
                accurate++;
                typed += e.key;
                progress += e.key;
                if (ni === 1 && nstr[0] !== "x" && memories["ん"] !== 1) {
                  memories["ん"] = 0;
                  words_for_display = wordsForDisplay(words);
                  displayWords(
                    createInterimProgressEle(
                      words,
                      wordsCount,
                      typeddata,
                      progress,
                      "n",
                      true
                    )
                  );
                } else if (
                  ni === 1 &&
                  nstr[0] !== "x" &&
                  memories["ん"] === 1
                ) {
                  words_for_display = wordsForDisplay(words);
                  displayWords(
                    createInterimProgressEle(
                      words,
                      wordsCount,
                      typeddata,
                      progress,
                      "nn",
                      true
                    )
                  );
                } else if (ni === 2 && nstr[0] !== "x") {
                  memories["ん"] = 1;
                  memories["ん_b"] = 0;
                  typeddata.push(1);
                  words_for_display = wordsForDisplay(words);
                  displayWords(
                    createInterimProgressEle(
                      words,
                      wordsCount,
                      typeddata,
                      progress,
                      "nn",
                      true
                    )
                  );
                }
                ni++;
                if (!lastJudgement) {
                  allTyped += `<span class="now_miss">${buffer.replace(/ /g, "␣")}</span>`
                  buffer = ''
                  lastJudgement = true;
                }
                allTyped += e.key
              } else if (
                narr
                  .map((v) => v[1])
                  .filter((v) => v !== "n")
                  .includes(e.key) &&
                nstr[0] === "n"
              ) {
                if (wordIdx === 0 && progress === "") {
                  initVelArr.push((Date.now() - initVel) / 1000);
                }
                accurate++;
                typed += e.key;
                memories["ん"] = 0;
                charsNum++;
                str += e.key;
                if (ni === 2) {
                  typeddata.push(0);
                  progress = e.key;
                  if (
                    !words.roma[wordsCount][wordIdx + 1]
                      .filter((v) => v[0] === str)
                      .includes(
                        words.roma[wordsCount][wordIdx + 1][
                        getIndexFromMemories(
                          words.roma[wordsCount][wordIdx + 1]
                        )
                        ]
                      )
                  ) {
                    changeIndexInMemories(
                      words.roma[wordsCount][wordIdx + 1],
                      words.roma[wordsCount][wordIdx + 1].filter(
                        (v) => v[0] === str
                      )
                    );
                  }
                }
                words_for_display = wordsForDisplay(words);
                displayWords(
                  createInterimProgressEle(
                    words,
                    wordsCount,
                    typeddata,
                    progress,
                    words.roma[wordsCount][wordIdx + 1][
                    getIndexFromMemories(words.roma[wordsCount][wordIdx + 1])
                    ],
                    true
                  )
                );
                ni++;
                if (!lastJudgement) {
                  allTyped += `<span class="now_miss">${buffer.replace(/ /g, "␣")}</span>`
                  buffer = ''
                  lastJudgement = true;
                }
                allTyped += e.key
              } else if (e.shiftKey) {
              } else {
                miss++;
                missData.push(typed.length)
                currentMisses++
                nstr = nstr.substr(0, nstr.length - 1);
                buffer += e.key
                lastJudgement = false;
                if (progress.length <= 1) {
                  displayWords(
                    createInterimProgressEle(
                      words,
                      wordsCount,
                      typeddata,
                      progress,
                      ["n", "nn", "xn"][memories["ん"]],
                      false
                    )
                  );
                } else {
                  displayWords(
                    createInterimProgressEle(
                      words,
                      wordsCount,
                      typeddata,
                      progress,
                      words.roma[wordsCount][wordIdx + 1][
                      getIndexFromMemories(
                        words.roma[wordsCount][wordIdx + 1]
                      )
                      ],
                      false
                    )
                  );
                }
              }
            }
            if (ni === 3) {
              wordIdx++;
              arrForJudgement = words.roma[wordsCount][wordIdx];
              nstr = "";
              if (memories["ん"] !== 0) {
                progress = "";
              }
              narr = ["nn", "xn"];
              nFlag = true;
              ni = 1;
            }
          }
        } else {
          if (judge(e.key, arrForJudgement, charsNum, "object")) {
            if (wordIdx === 0 && progress === "") {
              initVelArr.push((Date.now() - initVel) / 1000);
            }
            accurate++;
            str += e.key;
            progress += e.key;
            arrForJudgement = words.roma[wordsCount][wordIdx].filter(
              (v) => v.substr(0, charsNum + 1) === str
            );
            const data = words.roma[wordsCount][wordIdx].find((v) => v === str);
            charsNum++;
            typed += e.key;
            if (
              !arrForJudgement.includes(
                words.roma[wordsCount][wordIdx][
                getIndexFromMemories(words.roma[wordsCount][wordIdx])
                ]
              )
            ) {
              changeIndexInMemories(
                words.roma[wordsCount][wordIdx],
                arrForJudgement
              );
            }
            if (str === "nn") {
              memories["ん_b"] = 0;
              typeddata.push(0);
              isSpecialN = true;
            }
            if (str === "xn") {
              memories["ん_b"] = 1;
              typeddata.push(1);
              isSpecialN = true;
            }
            if (!lastJudgement) {
              allTyped += `<span class="now_miss">${buffer.replace(/ /g, "␣")}</span>`
              buffer = ''
              lastJudgement = true;
            }
            allTyped += e.key
            words_for_display = wordsForDisplay(words);
            displayWords(
              createInterimProgressEle(
                words,
                wordsCount,
                typeddata,
                progress,
                words.roma[wordsCount][wordIdx][
                getIndexFromMemories(words.roma[wordsCount][wordIdx])
                ],
                true
              )
            );
            if (data) {
              charsNum = 0;
              wordIdx++;
              if (!isSpecialN) {
                typeddata.push(
                  Object.values(has_some_patterns_roma_table)
                    .find((v) => v.includes(str))
                    .indexOf(str)
                );
              }
              isSpecialN = false;
              str = "";
              progress = "";
              arrForJudgement = words.roma[wordsCount][wordIdx];
            }
          } else if (
            !judge(e.key, arrForJudgement, charsNum, "object") &&
            !e.shiftKey
          ) {
            miss++;
            missData.push(typed.length)
            currentMisses++
            buffer += e.key
            lastJudgement = false;
            displayWords(
              createInterimProgressEle(
                words,
                wordsCount,
                typeddata,
                progress,
                words.roma[wordsCount][wordIdx][
                getIndexFromMemories(words.roma[wordsCount][wordIdx])
                ],
                false
              )
            );
          }
        }
      }

      if (wordIdx === wordLen) {
        wordsCount++;
        typedArr.push(typed);
        kpmArr.push(roundOff(typed.length * (60 / ((Date.now() - initVel) / 1000)), -2))
        rkpmArr.push(roundOff(typed.length * (60 / (((Date.now() - initVel) / 1000) - initVelArr.at(-1))), -2))
        missArr.push(currentMisses)
        allTypedArr.push(allTyped)
        missDataArr.push(missData)
        if (wordsCount === times) {
          document.removeEventListener("keydown", keyEvent);
          document.getElementById("words").remove();
          result(
            roundOff((Date.now() - starttime) / 1000, -2),
            accurate,
            miss,
            roundOff((accurate / (accurate + miss)) * 100, -2),
            roundOff(accurate * (60 / ((Date.now() - starttime) / 1000)), -2),
            roundOff(
              accurate *
              (60 /
                ((Date.now() - starttime) / 1000 -
                  initVelArr.reduce((acc, cur) => acc + cur))),
              -2
            ),
            roundOff(
              initVelArr.reduce((acc, cur) => acc + cur) / initVelArr.length,
              -3
            ),
            Math.floor(
              60000 *
              (accurate / (Date.now() - starttime)) *
              (Math.floor(10000 * (accurate / (accurate + miss))) / 10000) ** 2
            ),
            [words.kanji, typedArr],
            [words.kanji, allTypedArr],
            initVelArr,
            kpmArr,
            rkpmArr,
            missArr,
            missDataArr
          );
        } else if (wordsCount !== times) {
          wordLen = words.roma[wordsCount].length;
          wordIdx = 0;
          typed = "";
          allTyped = ''
          currentMisses = 0
          typeddata = [];
          missData = []
          arrForJudgement = words.roma[wordsCount][0];
          initVel = Date.now();
          displayWords({
            kanji: words_for_display.kanji[wordsCount],
            hiragana: words_for_display.hiragana[wordsCount],
            roma: words_for_display.roma[wordsCount],
          });
        }
      }
    });
  }
  if (inputtype === "kana") {
    const times = words.kanji.length
    let wordsCount = 0;
    let typed = "";
    let typedArr = [];
    let textLength = words.hiragana[0].length;
    let nowWord = words.hiragana[wordsCount];
    let charAtNow = 0;
    let miss = 0;
    let accurate = 0;
    const starttime = Date.now();
    let initVel = Date.now();
    const initVelArr = [];
    let allTyped = ''
    const allTypedArr = []
    let lastJudgement = true;
    let buffer = ''
    const kpmArr = []
    const rkpmArr = []
    let currentMisses = 0
    const missArr = []
    let missData = []
    const missDataArr = []
    document.addEventListener("keydown", function keyEvent(e) {
      if (nowWord[charAtNow] === codeToKana(e.keyCode, e.shiftKey)) {
        if (!charAtNow) {
          initVelArr.push((Date.now() - initVel) / 1000);
        }
        allTyped += nowWord[charAtNow]
        charAtNow++;
        accurate++;
        typed += codeToKana(e.keyCode, e.shiftKey);
        if (!lastJudgement) {
          allTyped += `<span class="now_miss">${buffer.replace(/ /g, "␣")}</span>`
          buffer = ''
          lastJudgement = true;
        }
        displayWords(
          createInterimProgressEle(
            words_for_display,
            wordsCount,
            charAtNow,
            0,
            0,
            true
          )
        );
      } else if (nowWord[charAtNow] === e.key) {
        if (!charAtNow) {
          initVelArr.push((Date.now() - initVel) / 1000);
        }
        allTyped += nowWord[charAtNow]
        charAtNow++;
        accurate++;
        typed += nowWord[charAtNow];
        if (!lastJudgement) {
          allTyped += `<span class="now_miss">${buffer.replace(/ /g, "␣")}</span>`
          buffer = ''
          lastJudgement = true;
        }
        displayWords(
          createInterimProgressEle(
            words_for_display,
            wordsCount,
            charAtNow,
            0,
            0,
            true
          )
        );
      } else if (e.shiftKey) {
      } else {
        if (codeToKana(e.keyCode, e.shiftKey)) {
          buffer += codeToKana(e.keyCode, e.shiftKey)
        }
        if (!codeToKana(e.keyCode, e.shiftKey)) {
          buffer += e.key
        }
        missData.push(typed.length)
        currentMisses++
        lastJudgement = false;
        miss++;
        missData.push(typed.length)
        displayWords(
          createInterimProgressEle(
            words_for_display,
            wordsCount,
            charAtNow,
            0,
            0,
            false
          )
        );
      }
      if (charAtNow === textLength) {
        wordsCount++;
        typedArr.push(typed);
        missArr.push(currentMisses)
        allTypedArr.push(allTyped)
        missDataArr.push(missData)
        kpmArr.push(roundOff(typed.length * (60 / ((Date.now() - initVel) / 1000)), -2))
        rkpmArr.push(roundOff(typed.length * (60 / (((Date.now() - initVel) / 1000) - initVelArr.at(-1))), -2))
        if (wordsCount === times) {
          document.removeEventListener("keydown", keyEvent);
          document.getElementById("words").remove();
          result(
            roundOff((Date.now() - starttime) / 1000, -2),
            accurate,
            miss,
            roundOff((accurate / (accurate + miss)) * 100, -2),
            roundOff(accurate * (60 / ((Date.now() - starttime) / 1000)), -2),
            roundOff(
              accurate *
              (60 /
                ((Date.now() - starttime) / 1000 -
                  initVelArr.reduce((acc, cur) => acc + cur))),
              -2
            ),
            roundOff(
              initVelArr.reduce((acc, cur) => acc + cur) / initVelArr.length,
              -3
            ),
            Math.floor(
              60000 *
              (accurate / (Date.now() - starttime)) *
              (Math.floor(10000 * (accurate / (accurate + miss))) / 10000) ** 2
            ),
            [words.kanji, typedArr],
            [words.kanji, allTypedArr],
            initVelArr,
            kpmArr,
            rkpmArr,
            missArr,
            missDataArr
          );
        } else if (wordsCount !== times) {
          charAtNow = 0;
          textLength = words.hiragana[wordsCount].length;
          nowWord = words.hiragana[wordsCount];
          typed = "";
          allTyped = ''
          currentMisses = 0
          typeddata = [];
          missData = []
          initVel = Date.now();
          displayWords({
            kanji: words_for_display.kanji[wordsCount],
            hiragana: words_for_display.hiragana[wordsCount],
          });
        }
      }
    });
  }
}

function codeToKana(num, shift) {
  if (!shift) {
    switch (num) {
      case 51:
        return "あ";
      case 69:
        return "い";
      case 52:
        return "う";
      case 53:
        return "え";
      case 54:
        return "お";
      case 84:
        return "か";
      case 71:
        return "き";
      case 72:
        return "く";
      case 186:
        return "け";
      case 66:
        return "こ";
      case 88:
        return "さ";
      case 68:
        return "し";
      case 82:
        return "す";
      case 80:
        return "せ";
      case 67:
        return "そ";
      case 81:
        return "た";
      case 65:
        return "ち";
      case 90:
        return "つ";
      case 87:
        return "て";
      case 83:
        return "と";
      case 85:
        return "な";
      case 73:
        return "に";
      case 49:
        return "ぬ";
      case 188:
        return "ね";
      case 75:
        return "の";
      case 70:
        return "は";
      case 86:
        return "ひ";
      case 50:
        return "ふ";
      case 222:
        return "へ";
      case 189:
        return "ほ";
      case 74:
        return "ま";
      case 78:
        return "み";
      case 221:
        return "む";
      case 191:
        return "め";
      case 77:
        return "も";
      case 55:
        return "や";
      case 56:
        return "ゆ";
      case 57:
        return "よ";
      case 79:
        return "ら";
      case 76:
        return "り";
      case 190:
        return "る";
      case 187:
        return "れ";
      case 226:
        return "ろ";
      case 48:
        return "わ";
      case 89:
        return "ん";
      case 192:
        return "゛";
      case 219:
        return "゜";
    }
  }
  if (shift) {
    switch (num) {
      case 51:
        return "ぁ";
      case 69:
        return "ぃ";
      case 52:
        return "ぅ";
      case 53:
        return "ぇ";
      case 54:
        return "ぉ";
      case 90:
        return "っ";
      case 55:
        return "ゃ";
      case 56:
        return "ゅ";
      case 57:
        return "ょ";
      case 48:
        return "を";
    }
  }
}
function roundOff(num, dig) {
  const factor = Math.pow(10, -dig);
  return Math.round((num + Number.EPSILON) * factor) / factor;
}

function judge(key, ele, num, type) {
  let judgement;
  if (type === "str") {
    if (ele[num] === key) {
      judgement = true;
    }
    if (ele[num] !== key) {
      judgement = false;
    }
  }
  if (type === "object") {
    const arr = ele.map((v) => v[num]);
    if (arr.includes(key)) {
      judgement = true;
    }
    if (!arr.includes(key)) {
      judgement = false;
    }
  }
  return judgement;
}

function createInterimProgressEle(dic, idx, data, input, base, judgement) {
  if (inputtype === "roma") {
    const roma = dic.roma[idx];
    const typed = [];
    const untyped = [];
    let progressdata = "";
    const words = {
      kanji: dic.kanji[idx],
      hiragana: dic.hiragana[idx],
      roma: "",
    };
    for (let i = 0; i < data.length; i++) {
      if (data[i] === null) {
        typed.push(roma[i]);
      } else {
        typed.push(roma[i][data[i]]);
      }
    }
    if (input && input !== "nn" && input !== "xn") {
      typed.push(input);
    }
    untyped.push(base.substr(input.length));
    if (input === "nn" || input === "xn") {
      for (let i = data.length; i < roma.length; i++) {
        if (typeof roma[i] === "string") {
          untyped.push(roma[i]);
        }
        if (typeof roma[i] === "object") {
          if (JSON.stringify(roma[i]) === JSON.stringify(["nn", "xn"])) {
            const idx = memories["ん_b"];
            untyped.push(roma[i][idx]);
          } else {
            const idx = getIndexFromMemories(roma[i]);
            untyped.push(roma[i][idx]);
          }
        }
      }
    } else {
      for (let i = data.length + 1; i < roma.length; i++) {
        if (typeof roma[i] === "string") {
          untyped.push(roma[i]);
        }
        if (typeof roma[i] === "object") {
          if (JSON.stringify(roma[i]) === JSON.stringify(["nn", "xn"])) {
            const idx = memories["ん_b"];
            untyped.push(roma[i][idx]);
          } else {
            const idx = getIndexFromMemories(roma[i]);
            untyped.push(roma[i][idx]);
          }
        }
      }
    }
    if (judgement === false) {
      progressdata = `<span id="typed">${typed
        .join("")
        .replace(/　/g, " ")
        .replace(/ /g, "␣")}</span><span class="now_miss">${untyped
          .join("")
          .substr(0, 1)
          .replace(/　/g, " ")
          .replace(/ /g, "␣")}</span><span id="untyped">${untyped
            .join("")
            .substr(1)
            .replace(/　/g, " ")
            .replace(/ /g, "␣")}</span>`;
    } else {
      progressdata = `<span id="typed">${typed
        .join("")
        .replace(/　/g, " ")
        .replace(/ /g, "␣")}</span><span id="now">${untyped
          .join("")
          .substr(0, 1)
          .replace(/　/g, " ")
          .replace(/ /g, "␣")}</span><span id="untyped">${untyped
            .join("")
            .substr(1)
            .replace(/　/g, " ")
            .replace(/ /g, "␣")}</span>`;
    }
    words.roma = progressdata;
    return words;
  }
  if (inputtype === "kana") {
    let progressdata;
    const words = {
      kanji: dic.kanji[idx],
    };
    if (judgement === false) {
      progressdata = `<span id="typed">${dic.hiragana[idx].substr(
        0,
        data
      )}</span><span class="now_miss">${dic.hiragana[idx].at(
        data
      )}</span><span id="untyped">${dic.hiragana[idx].substr(data + 1)}`;
    } else {
      progressdata = `<span id="typed">${dic.hiragana[idx].substr(
        0,
        data
      )}</span><span id="now">${dic.hiragana[idx].at(
        data
      )}</span><span id="untyped">${dic.hiragana[idx].substr(data + 1)}`;
    }
    words.hiragana = progressdata;
    return words;
  }
}
function wordsForDisplay(dic) {
  const roma = dic.roma;
  const romaArr = [];
  const words = {
    kanji: dic.kanji,
    hiragana: dic.hiragana,
    roma: romaArr,
  };
  for (let i of roma) {
    const arr = [];
    for (let j of i) {
      if (typeof j === "string") {
        arr.push(j);
      }
      if (typeof j === "object") {
        if (JSON.stringify(j) === JSON.stringify(["nn", "xn"])) {
          const idx = memories["ん_b"];
          arr.push(j[idx]);
        } else {
          const idx = getIndexFromMemories(j);
          arr.push(j[idx]);
        }
      }
    }
    romaArr.push(arr.join("").replace(/　/g, " ").replace(/ /g, "␣"));
  }
  return words;
}

function changeIndexInMemories(base, arr) {
  const keyname = Object.keys(has_some_patterns_roma_table).find(
    (v) =>
      JSON.stringify(has_some_patterns_roma_table[v]) === JSON.stringify(base)
  );
  const keyindex = base.indexOf(arr[0]);
  memories[keyname] = keyindex;
}
function getIndexFromMemories(arr) {
  const keyname = Object.keys(has_some_patterns_roma_table).find(
    (v) =>
      JSON.stringify(has_some_patterns_roma_table[v]) === JSON.stringify(arr)
  );
  return memories[keyname];
}

function signOptimization(arr, f) {
  const result = [];
  let tmp = "";
  const signs = [
    "\uff10",
    "\uff11",
    "\uff12",
    "\uff13",
    "\uff14",
    "\uff15",
    "\uff16",
    "\uff17",
    "\uff18",
    "\uff19",
    "\uff01",
    "\u201d",
    "\uff03",
    "\uff04",
    "\uff05",
    "\uff06",
    "\u2019",
    "\uff08",
    "\uff09",
    "\u30fc",
    "\uff1d",
    "\uff3e",
    "\uff5e",
    "\uffe5",
    "\uff5c",
    "\uff20",
    "\u2018",
    "\u300c",
    "\uff5b",
    "\uff1b",
    "\uff0b",
    "\uff1a",
    "\uff0a",
    "\u300d",
    "\uff5d",
    "\u3001",
    "\uff1c",
    "\u3002",
    "\uff1e",
    "\u30fb",
    "\uff1f",
    "\uff3f",
    "\uff41",
    "\uff42",
    "\uff43",
    "\uff44",
    "\uff45",
    "\uff46",
    "\uff47",
    "\uff48",
    "\uff49",
    "\uff4a",
    "\uff4b",
    "\uff4c",
    "\uff4d",
    "\uff4e",
    "\uff4f",
    "\uff50",
    "\uff51",
    "\uff52",
    "\uff53",
    "\uff54",
    "\uff55",
    "\uff56",
    "\uff57",
    "\uff58",
    "\uff59",
    "\uff5a",
    "\uff21",
    "\uff22",
    "\uff23",
    "\uff24",
    "\uff25",
    "\uff26",
    "\uff27",
    "\uff28",
    "\uff29",
    "\uff2a",
    "\uff2b",
    "\uff2c",
    "\uff2d",
    "\uff2e",
    "\uff2f",
    "\uff30",
    "\uff31",
    "\uff32",
    "\uff33",
    "\uff34",
    "\uff35",
    "\uff36",
    "\uff37",
    "\uff38",
    "\uff39",
    "\uff3a",
    "\u3000",
  ];
  const kanasigns = [
    "ゔ",
    "ヴ",
    "が",
    "ぎ",
    "ぐ",
    "げ",
    "ご",
    "ざ",
    "じ",
    "ず",
    "ぜ",
    "ぞ",
    "だ",
    "ぢ",
    "づ",
    "で",
    "ど",
    "ば",
    "び",
    "ぶ",
    "べ",
    "ぼ",
    "ぱ",
    "ぴ",
    "ぷ",
    "ぺ",
    "ぽ",
  ];
  for (let i = 0; i < arr.length; i++) {
    tmp = arr[i];
    for (j of tmp) {
      if (signs.includes(j) && f) {
        if (sign_table[j] === ",") {
          tmp = tmp.replace(j, "<");
        } else if (sign_table[j] === ".") {
          tmp = tmp.replace(j, ">");
        } else if (sign_table[j] === "/") {
          tmp = tmp.replace(j, "?");
        } else if (sign_table[j] === "[") {
          tmp = tmp.replace(j, "{");
        } else if (sign_table[j] === "]") {
          tmp = tmp.replace(j, "}");
        } else if (sign_table[j] === "-") {
          tmp = tmp.replace(j, "|");
        } else if (sign_table[j] === " ") {
          tmp = tmp.replace(j, " ");
        } else {
          tmp = tmp.replace(j, sign_table[j]);
        }
      }
      if (kanasigns.includes(j)) {
        tmp = tmp.replace(j, splitSignKana(j));
      }
      if ((j === "　" || j === " ") && !f) {
        tmp = tmp.replace(j, "␣");
      }
      if ((j === "　" || j === " ") && f) {
        tmp = tmp.replace(j, "␣");
      }
    }
    result.push(tmp);
  }
  return result;
}

function splitSignKana(str) {
  const splitKana = str.normalize("NFD");
  const kana = splitKana.at(0);
  const sign = splitKana.codePointAt(1).toString(16);
  if (sign === "3099") {
    return kana + "゛";
  }
  if (sign === "309a") {
    return kana + "゜";
  }
}

function changeMissesRed(str, arr) {
  let lastJudgement = true;
  let buffer = ''
  let result = ''
  for (let i = 0; i < str.length; i++) {
    if (arr.includes(i)) {
      lastJudgement = false
    } else {
      lastJudgement = true
    }
    if (!lastJudgement) {
      buffer += str[i]
    } else {
      if (buffer) {
        result += `<span class="now_miss">${buffer}</span>`
        buffer = ''
      }
      result += str[i]
    }
  }
  return result
}

async function generateEtyWordsData(dic, times, f) {
  const wordsdata = etydata[dic.mode].find((v) => v.name === dic.word);
  sentences = [dic, times];
  const result = {};
  const randomInt = createRandomInt(wordsdata.kanji.length, times);
  if (dic.mode === "roma") {
    result.kanji = [];
    result.hiragana = [];
    result.roma = [];
    for (let i = 0; i < times; i++) {
      result.kanji.push(wordsdata.kanji[randomInt[i]]);
      result.hiragana.push(wordsdata.kana[randomInt[i]]);
      await HiraganaToRoma(wordsdata.kana[randomInt[i]]).then((r) =>
        result.roma.push(r)
      );
    }
    isEN = false;
  }
  if (dic.mode === "kana") {
    result.kanji = [];
    result.hiragana = [];
    for (let i = 0; i < times; i++) {
      result.kanji.push(wordsdata.kanji[randomInt[i]]);
      result.hiragana.push(wordsdata.kana[randomInt[i]]);
    }
    result.hiragana = signOptimization(result.hiragana, f);
    isEN = false;
  }
  if (dic.mode === "en") {
    result.kanji = [];
    result.hiragana = [];
    result.roma = [];
    for (let i = 0; i < times; i++) {
      result.kanji.push(wordsdata.kanji[randomInt[i]]);
      result.hiragana.push(wordsdata.en[randomInt[i]]);
      result.roma.push(wordsdata.en[randomInt[i]]);
    }
    inputtype = "roma";
    isEN = true;
  }
  return result;
}

function etyModeSetting(word) {
  const result = {
    word: "",
    mode: "",
  };
  if (word.includes("[R&K]")) {
    const wordNameStart = 5;
    if (inputtype === "roma") {
      result.word = word.substr(wordNameStart);
      result.mode = "roma";
    }
    if (inputtype === "kana") {
      result.word = word.substr(wordNameStart);
      result.mode = "kana";
    }
  }
  if (word.includes("[E]")) {
    const wordNameStart = 3;
    result.word = word.substr(wordNameStart);
    result.mode = "en";
  }
  return result;
}

async function wordsReset() {
  if (mode === "original") {
    words = sortWords(sentences, basetimes);
    words_for_display = wordsForDisplay(words);
  }
  if (mode === "etyping") {
    if (inputtype === "roma") {
      words = await generateEtyWordsData(sentences[0], sentences[1]);
      words_for_display = wordsForDisplay(words);
    }
    if (inputtype === "kana") {
      words_for_display = await generateEtyWordsData(
        sentences[0],
        sentences[1],
        false
      );
      words = Object.assign({}, words_for_display);
      words.hiragana = signOptimization(words_for_display.hiragana, true);
    }
  }
}

function sortSelectedWords(dic) {
  const randomInt = createRandomInt(dic.kanji.length, dic.kanji.length)
  if (inputtype === 'roma') {
    const result = {
      kanji: [],
      hiragana: [],
      roma: [],
    }
    for (let i = 0; i < dic.kanji.length; i++) {
      result.kanji.push(dic.kanji[randomInt[i]])
      result.hiragana.push(dic.hiragana[randomInt[i]])
      result.roma.push(dic.roma[randomInt[i]])
    }
    return result
  }
  if (inputtype === 'kana') {
    const result = {
      kanji: [],
      hiragana: [],
    }
    for (let i = 0; i < dic.kanji.length; i++) {
      result.kanji.push(dic.kanji[randomInt[i]])
      result.hiragana.push(dic.hiragana[randomInt[i]])
    }
    return result
  }
}
function sortWords(dic, times) {
  if (inputtype === "roma") {
    const kanji = splitWords(dic).kanji;
    const hiragana = splitWords(dic).hiragana;
    const roma = splitWords(dic).roma;
    const random = createRandomInt(kanji.length, times);
    const words = {
      kanji: [],
      hiragana: [],
      roma: [],
    };
    for (let i = 0; i < times; i++) {
      words.kanji.push(kanji[random[i]]);
      words.hiragana.push(hiragana[random[i]]);
      words.roma.push(roma[random[i]]);
    }
    return words;
  }
  if (inputtype === "kana") {
    const kanji = splitWords(dic).kanji;
    const hiragana = splitWords(dic).hiragana;
    const random = createRandomInt(kanji.length, times);
    const words = {
      kanji: [],
      hiragana: [],
    };
    for (let i = 0; i < times; i++) {
      words.kanji.push(kanji[random[i]]);
      words.hiragana.push(hiragana[random[i]]);
    }
    return words;
  }
}

function splitWords(dic) {
  if (inputtype === "roma") {
    const kanji = dic.kanji.split("\r\n");
    const hiragana = dic.hiragana.split("\r\n");
    const romaArr = [...dic.roma];
    const roma = [];
    while (romaArr.indexOf("\r") !== -1) {
      roma.push(romaArr.splice(0, romaArr.indexOf("\r") + 2));
    }
    for (let i = 0; i < roma.length; i++) {
      roma[i].splice(-2);
    }
    roma.push(romaArr);
    return {
      kanji: kanji,
      hiragana: hiragana,
      roma: roma.filter((v) => v),
    };
  }
  if (inputtype === "kana") {
    const kanji = dic.kanji.split("\r\n");
    const hiragana = dic.hiragana.split("\r\n");
    return {
      kanji: kanji,
      hiragana: hiragana,
    };
  }
}

function createRandomInt(max, times) {
  const intArr = [];
  const result = [];
  for (let i = 0; i < times; i++) {
    if (!intArr.length) {
      for (let j = 0; j < max; j++) {
        intArr.push(j);
      }
    }
    if (intArr.length === max && result.length) {
      const randomInt = Math.floor(Math.random() * (intArr.length - 1));
      const targetIdx = intArr.indexOf(result.at(-1));
      intArr.splice(targetIdx, 1);
      result.push(Number(intArr.splice(randomInt, 1).join("")));
    } else {
      const randomInt = Math.floor(Math.random() * intArr.length);
      result.push(Number(intArr.splice(randomInt, 1).join("")));
    }
  }
  return result;
}
