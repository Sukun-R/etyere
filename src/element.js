const parent = document.getElementsByTagName("body")[0];
const base = document.getElementsByTagName("h1")[0];
let sentences;
let inputtype;
let mode;
let isEN = false;
let basetimes;
document.addEventListener("load", set());

function set() {
  const ele1 = document.createElement("div");
  const ele2 = document.createElement("h2");
  const ele3 = document.createElement("input");
  const ele4 = document.createElement("label");
  const ele5 = document.createElement("input");
  const ele6 = document.createElement("button");
  const ele7 = document.createElement("div");
  const ele8 = document.createElement("p");
  const ele9 = document.createElement("label");
  const ele10 = document.createElement("label");
  const ele11 = document.createElement("input");
  const ele12 = document.createElement("input");
  const div = document.createElement("div");
  const p1 = document.createElement("p");
  const lb1 = document.createElement("label");
  const lb2 = document.createElement("label");
  const org = document.createElement("input");
  const ety = document.createElement("input");
  const t = document.createElement("div");
  const p2 = document.createElement("p");
  const wrds = document.createElement("input");
  const b = document.createElement("datalist");
  const rk1 = document.createElement("option");
  const rk2 = document.createElement("option");
  const rk3 = document.createElement("option");
  const rk4 = document.createElement("option");
  const rk5 = document.createElement("option");
  const rk6 = document.createElement("option");
  const rk7 = document.createElement("option");
  const rk8 = document.createElement("option");
  const rk9 = document.createElement("option");
  const rk10 = document.createElement("option");
  const rk11 = document.createElement("option");
  const rk12 = document.createElement("option");
  const rk13 = document.createElement("option");
  const rk14 = document.createElement("option");
  const rk15 = document.createElement("option");
  const rk16 = document.createElement("option");
  const rk17 = document.createElement("option");
  const rk18 = document.createElement("option");
  const rk19 = document.createElement("option");
  const rk20 = document.createElement("option");
  const rk21 = document.createElement("option");
  const rk22 = document.createElement("option");
  const rk23 = document.createElement("option");
  const rk24 = document.createElement("option");
  const rk25 = document.createElement("option");
  const rk26 = document.createElement("option");
  const rk27 = document.createElement("option");
  const rk28 = document.createElement("option");
  const e1 = document.createElement("option");
  const e2 = document.createElement("option");
  const e3 = document.createElement("option");
  const e4 = document.createElement("option");
  const e5 = document.createElement("option");
  const e6 = document.createElement("option");
  const e7 = document.createElement("option");
  const e8 = document.createElement("option");
  const e9 = document.createElement("option");
  const e10 = document.createElement("option");
  const e11 = document.createElement("option");
  const e12 = document.createElement("option");
  const e13 = document.createElement("option");
  const e14 = document.createElement("option");
  const e15 = document.createElement("option");
  const e16 = document.createElement("option");
  const ele13 = document.createElement("div");
  const ele14 = document.createElement("p");
  const ele15 = document.createElement("details");
  const ele16 = document.createElement("summary");
  const ele17 = document.createElement("div");
  // い
  const ele18 = document.createElement("label");
  const ele19 = document.createElement("p");
  const ele20 = document.createElement("select");
  const ele21 = document.createElement("option");
  const ele22 = document.createElement("option");
  // う
  const ele23 = document.createElement("label");
  const ele24 = document.createElement("p");
  const ele25 = document.createElement("select");
  const ele26 = document.createElement("option");
  const ele27 = document.createElement("option");
  const ele28 = document.createElement("option");
  // か
  const ele29 = document.createElement("label");
  const ele30 = document.createElement("p");
  const ele31 = document.createElement("select");
  const ele32 = document.createElement("option");
  const ele33 = document.createElement("option");
  // く
  const ele34 = document.createElement("label");
  const ele35 = document.createElement("p");
  const ele36 = document.createElement("select");
  const ele37 = document.createElement("option");
  const ele38 = document.createElement("option");
  const ele39 = document.createElement("option");
  // こ
  const ele40 = document.createElement("label");
  const ele41 = document.createElement("p");
  const ele42 = document.createElement("select");
  const ele43 = document.createElement("option");
  const ele44 = document.createElement("option");
  // し
  const ele45 = document.createElement("label");
  const ele46 = document.createElement("p");
  const ele47 = document.createElement("select");
  const ele48 = document.createElement("option");
  const ele49 = document.createElement("option");
  const ele50 = document.createElement("option");
  // せ
  const ele51 = document.createElement("label");
  const ele52 = document.createElement("p");
  const ele53 = document.createElement("select");
  const ele54 = document.createElement("option");
  const ele55 = document.createElement("option");
  // ち
  const ele56 = document.createElement("label");
  const ele57 = document.createElement("p");
  const ele58 = document.createElement("select");
  const ele59 = document.createElement("option");
  const ele60 = document.createElement("option");
  // つ
  const ele61 = document.createElement("label");
  const ele62 = document.createElement("p");
  const ele63 = document.createElement("select");
  const ele64 = document.createElement("option");
  const ele65 = document.createElement("option");
  // ふ
  const ele66 = document.createElement("label");
  const ele67 = document.createElement("p");
  const ele68 = document.createElement("select");
  const ele69 = document.createElement("option");
  const ele70 = document.createElement("option");
  // ん
  const ele71 = document.createElement("label");
  const ele72 = document.createElement("p");
  const ele73 = document.createElement("select");
  const ele74 = document.createElement("option");
  const ele75 = document.createElement("option");
  const ele76 = document.createElement("option");
  // ぁ
  const ele77 = document.createElement("label");
  const ele78 = document.createElement("p");
  const ele79 = document.createElement("select");
  const ele80 = document.createElement("option");
  const ele81 = document.createElement("option");
  // ぃ
  const ele82 = document.createElement("label");
  const ele83 = document.createElement("p");
  const ele84 = document.createElement("select");
  const ele85 = document.createElement("option");
  const ele86 = document.createElement("option");
  const ele87 = document.createElement("option");
  const ele88 = document.createElement("option");
  // ぅ
  const ele89 = document.createElement("label");
  const ele90 = document.createElement("p");
  const ele91 = document.createElement("select");
  const ele92 = document.createElement("option");
  const ele93 = document.createElement("option");
  // ぇ
  const ele94 = document.createElement("label");
  const ele95 = document.createElement("p");
  const ele96 = document.createElement("select");
  const ele97 = document.createElement("option");
  const ele98 = document.createElement("option");
  const ele99 = document.createElement("option");
  const ele100 = document.createElement("option");
  // ぉ
  const ele101 = document.createElement("label");
  const ele102 = document.createElement("p");
  const ele103 = document.createElement("select");
  const ele104 = document.createElement("option");
  const ele105 = document.createElement("option");
  // っ
  const ele106 = document.createElement("label");
  const ele107 = document.createElement("p");
  const ele108 = document.createElement("select");
  const ele109 = document.createElement("option");
  const ele110 = document.createElement("option");
  const ele111 = document.createElement("option");
  const ele112 = document.createElement("option");
  // ゃ
  const ele113 = document.createElement("label");
  const ele114 = document.createElement("p");
  const ele115 = document.createElement("select");
  const ele116 = document.createElement("option");
  const ele117 = document.createElement("option");
  // ゅ
  const ele118 = document.createElement("label");
  const ele119 = document.createElement("p");
  const ele120 = document.createElement("select");
  const ele121 = document.createElement("option");
  const ele122 = document.createElement("option");
  // ょ
  const ele123 = document.createElement("label");
  const ele124 = document.createElement("p");
  const ele125 = document.createElement("select");
  const ele126 = document.createElement("option");
  const ele127 = document.createElement("option");
  // ゎ
  const ele128 = document.createElement("label");
  const ele129 = document.createElement("p");
  const ele130 = document.createElement("select");
  const ele131 = document.createElement("option");
  const ele132 = document.createElement("option");
  // じ
  const ele133 = document.createElement("label");
  const ele134 = document.createElement("p");
  const ele135 = document.createElement("select");
  const ele136 = document.createElement("option");
  const ele137 = document.createElement("option");
  // いぇ
  const ele138 = document.createElement("label");
  const ele139 = document.createElement("p");
  const ele140 = document.createElement("select");
  const ele141 = document.createElement("option");
  const ele142 = document.createElement("option");
  const ele143 = document.createElement("option");
  const ele144 = document.createElement("option");
  const ele145 = document.createElement("option");
  const ele146 = document.createElement("option");
  const ele147 = document.createElement("option");
  const ele148 = document.createElement("option");
  const ele149 = document.createElement("option");
  // うぁ
  const ele150 = document.createElement("label");
  const ele151 = document.createElement("p");
  const ele152 = document.createElement("select");
  const ele153 = document.createElement("option");
  const ele154 = document.createElement("option");
  const ele155 = document.createElement("option");
  const ele156 = document.createElement("option");
  const ele157 = document.createElement("option");
  const ele158 = document.createElement("option");
  const ele159 = document.createElement("option");
  // うぃ
  const ele160 = document.createElement("label");
  const ele161 = document.createElement("p");
  const ele162 = document.createElement("select");
  const ele163 = document.createElement("option");
  const ele164 = document.createElement("option");
  const ele165 = document.createElement("option");
  const ele166 = document.createElement("option");
  const ele167 = document.createElement("option");
  const ele168 = document.createElement("option");
  const ele169 = document.createElement("option");
  const ele170 = document.createElement("option");
  const ele171 = document.createElement("option");
  const ele172 = document.createElement("option");
  const ele173 = document.createElement("option");
  const ele174 = document.createElement("option");
  const ele175 = document.createElement("option");
  const ele176 = document.createElement("option");
  // うぇ
  const ele177 = document.createElement("label");
  const ele178 = document.createElement("p");
  const ele179 = document.createElement("select");
  const ele180 = document.createElement("option");
  const ele181 = document.createElement("option");
  const ele182 = document.createElement("option");
  const ele183 = document.createElement("option");
  const ele184 = document.createElement("option");
  const ele185 = document.createElement("option");
  const ele186 = document.createElement("option");
  const ele187 = document.createElement("option");
  const ele188 = document.createElement("option");
  const ele189 = document.createElement("option");
  const ele190 = document.createElement("option");
  const ele191 = document.createElement("option");
  const ele192 = document.createElement("option");
  const ele193 = document.createElement("option");
  // うぉ
  const ele194 = document.createElement("label");
  const ele195 = document.createElement("p");
  const ele196 = document.createElement("select");
  const ele197 = document.createElement("option");
  const ele198 = document.createElement("option");
  const ele199 = document.createElement("option");
  const ele200 = document.createElement("option");
  const ele201 = document.createElement("option");
  const ele202 = document.createElement("option");
  const ele203 = document.createElement("option");
  // ヴぁ
  const ele204 = document.createElement("label");
  const ele205 = document.createElement("p");
  const ele206 = document.createElement("select");
  const ele207 = document.createElement("option");
  const ele208 = document.createElement("option");
  const ele209 = document.createElement("option");
  // ヴゃ
  const ele210 = document.createElement("label");
  const ele211 = document.createElement("p");
  const ele212 = document.createElement("select");
  const ele213 = document.createElement("option");
  const ele214 = document.createElement("option");
  const ele215 = document.createElement("option");
  // ヴぃ
  const ele216 = document.createElement("label");
  const ele217 = document.createElement("p");
  const ele218 = document.createElement("select");
  const ele219 = document.createElement("option");
  const ele220 = document.createElement("option");
  const ele221 = document.createElement("option");
  const ele222 = document.createElement("option");
  const ele223 = document.createElement("option");
  const ele224 = document.createElement("option");
  // ヴゃ
  const ele225 = document.createElement("label");
  const ele226 = document.createElement("p");
  const ele227 = document.createElement("select");
  const ele228 = document.createElement("option");
  const ele229 = document.createElement("option");
  const ele230 = document.createElement("option");
  // ヴぇ
  const ele231 = document.createElement("label");
  const ele232 = document.createElement("p");
  const ele233 = document.createElement("select");
  const ele234 = document.createElement("option");
  const ele235 = document.createElement("option");
  const ele236 = document.createElement("option");
  const ele237 = document.createElement("option");
  const ele238 = document.createElement("option");
  const ele239 = document.createElement("option");
  // ヴぉ
  const ele240 = document.createElement("label");
  const ele241 = document.createElement("p");
  const ele242 = document.createElement("select");
  const ele243 = document.createElement("option");
  const ele244 = document.createElement("option");
  const ele245 = document.createElement("option");
  // ヴょ
  const ele246 = document.createElement("label");
  const ele247 = document.createElement("p");
  const ele248 = document.createElement("select");
  const ele249 = document.createElement("option");
  const ele250 = document.createElement("option");
  const ele251 = document.createElement("option");
  // きゃ
  const ele252 = document.createElement("label");
  const ele253 = document.createElement("p");
  const ele254 = document.createElement("select");
  const ele255 = document.createElement("option");
  const ele256 = document.createElement("option");
  const ele257 = document.createElement("option");
  // きぃ
  const ele258 = document.createElement("label");
  const ele259 = document.createElement("p");
  const ele260 = document.createElement("select");
  const ele261 = document.createElement("option");
  const ele262 = document.createElement("option");
  const ele263 = document.createElement("option");
  const ele264 = document.createElement("option");
  const ele265 = document.createElement("option");
  // きゅ
  const ele266 = document.createElement("label");
  const ele267 = document.createElement("p");
  const ele268 = document.createElement("select");
  const ele269 = document.createElement("option");
  const ele270 = document.createElement("option");
  const ele271 = document.createElement("option");
  // きぇ
  const ele272 = document.createElement("label");
  const ele273 = document.createElement("p");
  const ele274 = document.createElement("select");
  const ele275 = document.createElement("option");
  const ele276 = document.createElement("option");
  const ele277 = document.createElement("option");
  const ele278 = document.createElement("option");
  const ele279 = document.createElement("option");
  // きょ
  const ele280 = document.createElement("label");
  const ele281 = document.createElement("p");
  const ele282 = document.createElement("select");
  const ele283 = document.createElement("option");
  const ele284 = document.createElement("option");
  const ele285 = document.createElement("option");
  // ぎゃ
  const ele286 = document.createElement("label");
  const ele287 = document.createElement("p");
  const ele288 = document.createElement("select");
  const ele289 = document.createElement("option");
  const ele290 = document.createElement("option");
  const ele291 = document.createElement("option");
  // ぎぃ
  const ele292 = document.createElement("label");
  const ele293 = document.createElement("p");
  const ele294 = document.createElement("select");
  const ele295 = document.createElement("option");
  const ele296 = document.createElement("option");
  const ele297 = document.createElement("option");
  const ele298 = document.createElement("option");
  const ele299 = document.createElement("option");
  // ぎゅ
  const ele300 = document.createElement("label");
  const ele301 = document.createElement("p");
  const ele302 = document.createElement("select");
  const ele303 = document.createElement("option");
  const ele304 = document.createElement("option");
  const ele305 = document.createElement("option");
  // ぎぇ
  const ele306 = document.createElement("label");
  const ele307 = document.createElement("p");
  const ele308 = document.createElement("select");
  const ele309 = document.createElement("option");
  const ele310 = document.createElement("option");
  const ele311 = document.createElement("option");
  const ele312 = document.createElement("option");
  const ele313 = document.createElement("option");
  // ぎょ
  const ele314 = document.createElement("label");
  const ele315 = document.createElement("p");
  const ele316 = document.createElement("select");
  const ele317 = document.createElement("option");
  const ele318 = document.createElement("option");
  const ele319 = document.createElement("option");
  // くぁ
  const ele320 = document.createElement("label");
  const ele321 = document.createElement("p");
  const ele322 = document.createElement("select");
  const ele323 = document.createElement("option");
  const ele324 = document.createElement("option");
  const ele325 = document.createElement("option");
  const ele326 = document.createElement("option");
  const ele327 = document.createElement("option");
  const ele328 = document.createElement("option");
  const ele329 = document.createElement("option");
  const ele330 = document.createElement("option");
  const ele331 = document.createElement("option");
  // くぃ
  const ele332 = document.createElement("label");
  const ele333 = document.createElement("p");
  const ele334 = document.createElement("select");
  const ele335 = document.createElement("option");
  const ele336 = document.createElement("option");
  const ele337 = document.createElement("option");
  const ele338 = document.createElement("option");
  const ele339 = document.createElement("option");
  const ele340 = document.createElement("option");
  const ele341 = document.createElement("option");
  const ele342 = document.createElement("option");
  const ele343 = document.createElement("option");
  const ele344 = document.createElement("option");
  const ele345 = document.createElement("option");
  const ele346 = document.createElement("option");
  const ele347 = document.createElement("option");
  const ele348 = document.createElement("option");
  const ele349 = document.createElement("option");
  // くぅ
  const ele350 = document.createElement("label");
  const ele351 = document.createElement("p");
  const ele352 = document.createElement("select");
  const ele353 = document.createElement("option");
  const ele354 = document.createElement("option");
  const ele355 = document.createElement("option");
  const ele356 = document.createElement("option");
  const ele357 = document.createElement("option");
  const ele358 = document.createElement("option");
  const ele359 = document.createElement("option");
  const ele360 = document.createElement("option");
  // くぇ
  const ele361 = document.createElement("label");
  const ele362 = document.createElement("p");
  const ele363 = document.createElement("select");
  const ele364 = document.createElement("option");
  const ele365 = document.createElement("option");
  const ele366 = document.createElement("option");
  const ele367 = document.createElement("option");
  const ele368 = document.createElement("option");
  const ele369 = document.createElement("option");
  const ele370 = document.createElement("option");
  const ele371 = document.createElement("option");
  const ele372 = document.createElement("option");
  const ele373 = document.createElement("option");
  const ele374 = document.createElement("option");
  const ele375 = document.createElement("option");
  const ele376 = document.createElement("option");
  const ele377 = document.createElement("option");
  const ele378 = document.createElement("option");
  // くぉ
  const ele379 = document.createElement("label");
  const ele380 = document.createElement("p");
  const ele381 = document.createElement("select");
  const ele382 = document.createElement("option");
  const ele383 = document.createElement("option");
  const ele384 = document.createElement("option");
  const ele385 = document.createElement("option");
  const ele386 = document.createElement("option");
  const ele387 = document.createElement("option");
  const ele388 = document.createElement("option");
  const ele389 = document.createElement("option");
  const ele390 = document.createElement("option");
  // ぐぁ
  const ele391 = document.createElement("label");
  const ele392 = document.createElement("p");
  const ele393 = document.createElement("select");
  const ele394 = document.createElement("option");
  const ele395 = document.createElement("option");
  const ele396 = document.createElement("option");
  // ぐぃ
  const ele397 = document.createElement("label");
  const ele398 = document.createElement("p");
  const ele399 = document.createElement("select");
  const ele400 = document.createElement("option");
  const ele401 = document.createElement("option");
  const ele402 = document.createElement("option");
  const ele403 = document.createElement("option");
  const ele404 = document.createElement("option");
  // ぐぅ
  const ele405 = document.createElement("label");
  const ele406 = document.createElement("p");
  const ele407 = document.createElement("select");
  const ele408 = document.createElement("option");
  const ele409 = document.createElement("option");
  const ele410 = document.createElement("option");
  // ぐぇ
  const ele411 = document.createElement("label");
  const ele412 = document.createElement("p");
  const ele413 = document.createElement("select");
  const ele414 = document.createElement("option");
  const ele415 = document.createElement("option");
  const ele416 = document.createElement("option");
  const ele417 = document.createElement("option");
  const ele418 = document.createElement("option");
  // ぐぉ
  const ele419 = document.createElement("label");
  const ele420 = document.createElement("p");
  const ele421 = document.createElement("select");
  const ele422 = document.createElement("option");
  const ele423 = document.createElement("option");
  const ele424 = document.createElement("option");
  // しゃ
  const ele425 = document.createElement("label");
  const ele426 = document.createElement("p");
  const ele427 = document.createElement("select");
  const ele428 = document.createElement("option");
  const ele429 = document.createElement("option");
  const ele430 = document.createElement("option");
  const ele431 = document.createElement("option");
  const ele432 = document.createElement("option");
  const ele433 = document.createElement("option");
  const ele434 = document.createElement("option");
  const ele435 = document.createElement("option");
  // しぃ
  const ele436 = document.createElement("label");
  const ele437 = document.createElement("p");
  const ele438 = document.createElement("select");
  const ele439 = document.createElement("option");
  const ele440 = document.createElement("option");
  const ele441 = document.createElement("option");
  const ele442 = document.createElement("option");
  const ele443 = document.createElement("option");
  const ele444 = document.createElement("option");
  const ele445 = document.createElement("option");
  const ele446 = document.createElement("option");
  const ele447 = document.createElement("option");
  const ele448 = document.createElement("option");
  const ele449 = document.createElement("option");
  const ele450 = document.createElement("option");
  const ele451 = document.createElement("option");
  // しゅ
  const ele452 = document.createElement("label");
  const ele453 = document.createElement("p");
  const ele454 = document.createElement("select");
  const ele455 = document.createElement("option");
  const ele456 = document.createElement("option");
  const ele457 = document.createElement("option");
  const ele458 = document.createElement("option");
  const ele459 = document.createElement("option");
  const ele460 = document.createElement("option");
  const ele461 = document.createElement("option");
  const ele462 = document.createElement("option");
  // しぇ
  const ele463 = document.createElement("label");
  const ele464 = document.createElement("p");
  const ele465 = document.createElement("select");
  const ele466 = document.createElement("option");
  const ele467 = document.createElement("option");
  const ele468 = document.createElement("option");
  const ele469 = document.createElement("option");
  const ele470 = document.createElement("option");
  const ele471 = document.createElement("option");
  const ele472 = document.createElement("option");
  const ele473 = document.createElement("option");
  const ele474 = document.createElement("option");
  const ele475 = document.createElement("option");
  const ele476 = document.createElement("option");
  const ele477 = document.createElement("option");
  const ele478 = document.createElement("option");
  const ele479 = document.createElement("option");
  // しょ
  const ele480 = document.createElement("label");
  const ele481 = document.createElement("p");
  const ele482 = document.createElement("select");
  const ele483 = document.createElement("option");
  const ele484 = document.createElement("option");
  const ele485 = document.createElement("option");
  const ele486 = document.createElement("option");
  const ele487 = document.createElement("option");
  const ele488 = document.createElement("option");
  const ele489 = document.createElement("option");
  const ele490 = document.createElement("option");
  // じゃ
  const ele491 = document.createElement("label");
  const ele492 = document.createElement("p");
  const ele493 = document.createElement("select");
  const ele494 = document.createElement("option");
  const ele495 = document.createElement("option");
  const ele496 = document.createElement("option");
  const ele497 = document.createElement("option");
  const ele498 = document.createElement("option");
  const ele499 = document.createElement("option");
  const ele500 = document.createElement("option");
  // じぃ
  const ele501 = document.createElement("label");
  const ele502 = document.createElement("p");
  const ele503 = document.createElement("select");
  const ele504 = document.createElement("option");
  const ele505 = document.createElement("option");
  const ele506 = document.createElement("option");
  const ele507 = document.createElement("option");
  const ele508 = document.createElement("option");
  const ele509 = document.createElement("option");
  const ele510 = document.createElement("option");
  const ele511 = document.createElement("option");
  const ele512 = document.createElement("option");
  const ele513 = document.createElement("option");
  // じゅ
  const ele514 = document.createElement("label");
  const ele515 = document.createElement("p");
  const ele516 = document.createElement("select");
  const ele517 = document.createElement("option");
  const ele518 = document.createElement("option");
  const ele519 = document.createElement("option");
  const ele520 = document.createElement("option");
  const ele521 = document.createElement("option");
  const ele522 = document.createElement("option");
  const ele523 = document.createElement("option");
  // じぇ
  const ele524 = document.createElement("label");
  const ele525 = document.createElement("p");
  const ele526 = document.createElement("select");
  const ele527 = document.createElement("option");
  const ele528 = document.createElement("option");
  const ele529 = document.createElement("option");
  const ele530 = document.createElement("option");
  const ele531 = document.createElement("option");
  const ele532 = document.createElement("option");
  const ele533 = document.createElement("option");
  const ele534 = document.createElement("option");
  const ele535 = document.createElement("option");
  const ele536 = document.createElement("option");
  const ele537 = document.createElement("option");
  // じょ
  const ele538 = document.createElement("label");
  const ele539 = document.createElement("p");
  const ele540 = document.createElement("select");
  const ele541 = document.createElement("option");
  const ele542 = document.createElement("option");
  const ele543 = document.createElement("option");
  const ele544 = document.createElement("option");
  const ele545 = document.createElement("option");
  const ele546 = document.createElement("option");
  const ele547 = document.createElement("option");
  // すぁ
  const ele548 = document.createElement("label");
  const ele549 = document.createElement("p");
  const ele550 = document.createElement("select");
  const ele551 = document.createElement("option");
  const ele552 = document.createElement("option");
  const ele553 = document.createElement("option");
  // すぃ
  const ele554 = document.createElement("label");
  const ele555 = document.createElement("p");
  const ele556 = document.createElement("select");
  const ele557 = document.createElement("option");
  const ele558 = document.createElement("option");
  const ele559 = document.createElement("option");
  const ele560 = document.createElement("option");
  const ele561 = document.createElement("option");
  // すぅ
  const ele562 = document.createElement("label");
  const ele563 = document.createElement("p");
  const ele564 = document.createElement("select");
  const ele565 = document.createElement("option");
  const ele566 = document.createElement("option");
  const ele567 = document.createElement("option");
  // すぇ
  const ele568 = document.createElement("label");
  const ele569 = document.createElement("p");
  const ele570 = document.createElement("select");
  const ele571 = document.createElement("option");
  const ele572 = document.createElement("option");
  const ele573 = document.createElement("option");
  const ele574 = document.createElement("option");
  const ele575 = document.createElement("option");
  // すぉ
  const ele576 = document.createElement("label");
  const ele577 = document.createElement("p");
  const ele578 = document.createElement("select");
  const ele579 = document.createElement("option");
  const ele580 = document.createElement("option");
  const ele581 = document.createElement("option");
  // ずぁ
  const ele582 = document.createElement("label");
  const ele583 = document.createElement("p");
  const ele584 = document.createElement("select");
  const ele585 = document.createElement("option");
  const ele586 = document.createElement("option");
  const ele587 = document.createElement("option");
  // ずぃ
  const ele588 = document.createElement("label");
  const ele589 = document.createElement("p");
  const ele590 = document.createElement("select");
  const ele591 = document.createElement("option");
  const ele592 = document.createElement("option");
  const ele593 = document.createElement("option");
  const ele594 = document.createElement("option");
  const ele595 = document.createElement("option");
  // ずぅ
  const ele596 = document.createElement("label");
  const ele597 = document.createElement("p");
  const ele598 = document.createElement("select");
  const ele599 = document.createElement("option");
  const ele600 = document.createElement("option");
  const ele601 = document.createElement("option");
  // ずぇ
  const ele602 = document.createElement("label");
  const ele603 = document.createElement("p");
  const ele604 = document.createElement("select");
  const ele605 = document.createElement("option");
  const ele606 = document.createElement("option");
  const ele607 = document.createElement("option");
  const ele608 = document.createElement("option");
  const ele609 = document.createElement("option");
  // ずぉ
  const ele610 = document.createElement("label");
  const ele611 = document.createElement("p");
  const ele612 = document.createElement("select");
  const ele613 = document.createElement("option");
  const ele614 = document.createElement("option");
  const ele615 = document.createElement("option");
  // ちゃ
  const ele616 = document.createElement("label");
  const ele617 = document.createElement("p");
  const ele618 = document.createElement("select");
  const ele619 = document.createElement("option");
  const ele620 = document.createElement("option");
  const ele621 = document.createElement("option");
  const ele622 = document.createElement("option");
  const ele623 = document.createElement("option");
  const ele624 = document.createElement("option");
  const ele625 = document.createElement("option");
  // ちぃ
  const ele626 = document.createElement("label");
  const ele627 = document.createElement("p");
  const ele628 = document.createElement("select");
  const ele629 = document.createElement("option");
  const ele630 = document.createElement("option");
  const ele631 = document.createElement("option");
  const ele632 = document.createElement("option");
  const ele633 = document.createElement("option");
  const ele634 = document.createElement("option");
  const ele635 = document.createElement("option");
  const ele636 = document.createElement("option");
  const ele637 = document.createElement("option");
  const ele638 = document.createElement("option");
  // ちゅ
  const ele639 = document.createElement("label");
  const ele640 = document.createElement("p");
  const ele641 = document.createElement("select");
  const ele642 = document.createElement("option");
  const ele643 = document.createElement("option");
  const ele644 = document.createElement("option");
  const ele645 = document.createElement("option");
  const ele646 = document.createElement("option");
  const ele647 = document.createElement("option");
  const ele648 = document.createElement("option");
  // ちぇ
  const ele649 = document.createElement("label");
  const ele650 = document.createElement("p");
  const ele651 = document.createElement("select");
  const ele652 = document.createElement("option");
  const ele653 = document.createElement("option");
  const ele654 = document.createElement("option");
  const ele655 = document.createElement("option");
  const ele656 = document.createElement("option");
  const ele657 = document.createElement("option");
  const ele658 = document.createElement("option");
  const ele659 = document.createElement("option");
  const ele660 = document.createElement("option");
  const ele661 = document.createElement("option");
  const ele662 = document.createElement("option");
  // ちょ
  const ele663 = document.createElement("label");
  const ele664 = document.createElement("p");
  const ele665 = document.createElement("select");
  const ele666 = document.createElement("option");
  const ele667 = document.createElement("option");
  const ele668 = document.createElement("option");
  const ele669 = document.createElement("option");
  const ele670 = document.createElement("option");
  const ele671 = document.createElement("option");
  const ele672 = document.createElement("option");
  // ぢゃ
  const ele673 = document.createElement("label");
  const ele674 = document.createElement("p");
  const ele675 = document.createElement("select");
  const ele676 = document.createElement("option");
  const ele677 = document.createElement("option");
  const ele678 = document.createElement("option");
  // ぢぃ
  const ele679 = document.createElement("label");
  const ele680 = document.createElement("p");
  const ele681 = document.createElement("select");
  const ele682 = document.createElement("option");
  const ele683 = document.createElement("option");
  const ele684 = document.createElement("option");
  const ele685 = document.createElement("option");
  const ele686 = document.createElement("option");
  // ぢゅ
  const ele687 = document.createElement("label");
  const ele688 = document.createElement("p");
  const ele689 = document.createElement("select");
  const ele690 = document.createElement("option");
  const ele691 = document.createElement("option");
  const ele692 = document.createElement("option");
  // ぢぇ
  const ele693 = document.createElement("label");
  const ele694 = document.createElement("p");
  const ele695 = document.createElement("select");
  const ele696 = document.createElement("option");
  const ele697 = document.createElement("option");
  const ele698 = document.createElement("option");
  const ele699 = document.createElement("option");
  const ele700 = document.createElement("option");
  // ぢょ
  const ele701 = document.createElement("label");
  const ele702 = document.createElement("p");
  const ele703 = document.createElement("select");
  const ele704 = document.createElement("option");
  const ele705 = document.createElement("option");
  const ele706 = document.createElement("option");
  // つぁ
  const ele707 = document.createElement("label");
  const ele708 = document.createElement("p");
  const ele709 = document.createElement("select");
  const ele710 = document.createElement("option");
  const ele711 = document.createElement("option");
  const ele712 = document.createElement("option");
  const ele713 = document.createElement("option");
  const ele714 = document.createElement("option");
  // つぃ
  const ele715 = document.createElement("label");
  const ele716 = document.createElement("p");
  const ele717 = document.createElement("select");
  const ele718 = document.createElement("option");
  const ele719 = document.createElement("option");
  const ele720 = document.createElement("option");
  const ele721 = document.createElement("option");
  const ele722 = document.createElement("option");
  const ele723 = document.createElement("option");
  const ele724 = document.createElement("option");
  const ele725 = document.createElement("option");
  const ele726 = document.createElement("option");
  // つぇ
  const ele727 = document.createElement("label");
  const ele728 = document.createElement("p");
  const ele729 = document.createElement("select");
  const ele730 = document.createElement("option");
  const ele731 = document.createElement("option");
  const ele732 = document.createElement("option");
  const ele733 = document.createElement("option");
  const ele734 = document.createElement("option");
  const ele735 = document.createElement("option");
  const ele736 = document.createElement("option");
  const ele737 = document.createElement("option");
  const ele738 = document.createElement("option");
  // つぉ
  const ele739 = document.createElement("label");
  const ele740 = document.createElement("p");
  const ele741 = document.createElement("select");
  const ele742 = document.createElement("option");
  const ele743 = document.createElement("option");
  const ele744 = document.createElement("option");
  const ele745 = document.createElement("option");
  const ele746 = document.createElement("option");
  // てゃ
  const ele747 = document.createElement("label");
  const ele748 = document.createElement("p");
  const ele749 = document.createElement("select");
  const ele750 = document.createElement("option");
  const ele751 = document.createElement("option");
  const ele752 = document.createElement("option");
  // てぃ
  const ele753 = document.createElement("label");
  const ele754 = document.createElement("p");
  const ele755 = document.createElement("select");
  const ele756 = document.createElement("option");
  const ele757 = document.createElement("option");
  const ele758 = document.createElement("option");
  const ele759 = document.createElement("option");
  const ele760 = document.createElement("option");
  // てゅ
  const ele761 = document.createElement("label");
  const ele762 = document.createElement("p");
  const ele763 = document.createElement("select");
  const ele764 = document.createElement("option");
  const ele765 = document.createElement("option");
  const ele766 = document.createElement("option");
  // てぇ
  const ele767 = document.createElement("label");
  const ele768 = document.createElement("p");
  const ele769 = document.createElement("select");
  const ele770 = document.createElement("option");
  const ele771 = document.createElement("option");
  const ele772 = document.createElement("option");
  const ele773 = document.createElement("option");
  const ele774 = document.createElement("option");
  // てょ
  const ele775 = document.createElement("label");
  const ele776 = document.createElement("p");
  const ele777 = document.createElement("select");
  const ele778 = document.createElement("option");
  const ele779 = document.createElement("option");
  const ele780 = document.createElement("option");
  // でゃ
  const ele781 = document.createElement("label");
  const ele782 = document.createElement("p");
  const ele783 = document.createElement("select");
  const ele784 = document.createElement("option");
  const ele785 = document.createElement("option");
  const ele786 = document.createElement("option");
  // でぃ
  const ele787 = document.createElement("label");
  const ele788 = document.createElement("p");
  const ele789 = document.createElement("select");
  const ele790 = document.createElement("option");
  const ele791 = document.createElement("option");
  const ele792 = document.createElement("option");
  const ele793 = document.createElement("option");
  const ele794 = document.createElement("option");
  // でゅ
  const ele795 = document.createElement("label");
  const ele796 = document.createElement("p");
  const ele797 = document.createElement("select");
  const ele798 = document.createElement("option");
  const ele799 = document.createElement("option");
  const ele800 = document.createElement("option");
  // でぇ
  const ele801 = document.createElement("label");
  const ele802 = document.createElement("p");
  const ele803 = document.createElement("select");
  const ele804 = document.createElement("option");
  const ele805 = document.createElement("option");
  const ele806 = document.createElement("option");
  const ele807 = document.createElement("option");
  const ele808 = document.createElement("option");
  // でょ
  const ele809 = document.createElement("label");
  const ele810 = document.createElement("p");
  const ele811 = document.createElement("select");
  const ele812 = document.createElement("option");
  const ele813 = document.createElement("option");
  const ele814 = document.createElement("option");
  // とぁ
  const ele815 = document.createElement("label");
  const ele816 = document.createElement("p");
  const ele817 = document.createElement("select");
  const ele818 = document.createElement("option");
  const ele819 = document.createElement("option");
  const ele820 = document.createElement("option");
  // とぃ
  const ele821 = document.createElement("label");
  const ele822 = document.createElement("p");
  const ele823 = document.createElement("select");
  const ele824 = document.createElement("option");
  const ele825 = document.createElement("option");
  const ele826 = document.createElement("option");
  const ele827 = document.createElement("option");
  const ele828 = document.createElement("option");
  // とぅ
  const ele829 = document.createElement("label");
  const ele830 = document.createElement("p");
  const ele831 = document.createElement("select");
  const ele832 = document.createElement("option");
  const ele833 = document.createElement("option");
  const ele834 = document.createElement("option");
  // とぇ
  const ele835 = document.createElement("label");
  const ele836 = document.createElement("p");
  const ele837 = document.createElement("select");
  const ele838 = document.createElement("option");
  const ele839 = document.createElement("option");
  const ele840 = document.createElement("option");
  const ele841 = document.createElement("option");
  const ele842 = document.createElement("option");
  // とぉ
  const ele843 = document.createElement("label");
  const ele844 = document.createElement("p");
  const ele845 = document.createElement("select");
  const ele846 = document.createElement("option");
  const ele847 = document.createElement("option");
  const ele848 = document.createElement("option");
  // どぁ
  const ele849 = document.createElement("label");
  const ele850 = document.createElement("p");
  const ele851 = document.createElement("select");
  const ele852 = document.createElement("option");
  const ele853 = document.createElement("option");
  const ele854 = document.createElement("option");
  // どぃ
  const ele855 = document.createElement("label");
  const ele856 = document.createElement("p");
  const ele857 = document.createElement("select");
  const ele858 = document.createElement("option");
  const ele859 = document.createElement("option");
  const ele860 = document.createElement("option");
  const ele861 = document.createElement("option");
  const ele862 = document.createElement("option");
  // どぅ
  const ele863 = document.createElement("label");
  const ele864 = document.createElement("p");
  const ele865 = document.createElement("select");
  const ele866 = document.createElement("option");
  const ele867 = document.createElement("option");
  const ele868 = document.createElement("option");
  // どぇ
  const ele869 = document.createElement("label");
  const ele870 = document.createElement("p");
  const ele871 = document.createElement("select");
  const ele872 = document.createElement("option");
  const ele873 = document.createElement("option");
  const ele874 = document.createElement("option");
  const ele875 = document.createElement("option");
  const ele876 = document.createElement("option");
  // どぉ
  const ele877 = document.createElement("label");
  const ele878 = document.createElement("p");
  const ele879 = document.createElement("select");
  const ele880 = document.createElement("option");
  const ele881 = document.createElement("option");
  const ele882 = document.createElement("option");
  // にゃ
  const ele883 = document.createElement("label");
  const ele884 = document.createElement("p");
  const ele885 = document.createElement("select");
  const ele886 = document.createElement("option");
  const ele887 = document.createElement("option");
  const ele888 = document.createElement("option");
  // にぃ
  const ele889 = document.createElement("label");
  const ele890 = document.createElement("p");
  const ele891 = document.createElement("select");
  const ele892 = document.createElement("option");
  const ele893 = document.createElement("option");
  const ele894 = document.createElement("option");
  const ele895 = document.createElement("option");
  const ele896 = document.createElement("option");
  // にゅ
  const ele897 = document.createElement("label");
  const ele898 = document.createElement("p");
  const ele899 = document.createElement("select");
  const ele900 = document.createElement("option");
  const ele901 = document.createElement("option");
  const ele902 = document.createElement("option");
  // にぇ
  const ele903 = document.createElement("label");
  const ele904 = document.createElement("p");
  const ele905 = document.createElement("select");
  const ele906 = document.createElement("option");
  const ele907 = document.createElement("option");
  const ele908 = document.createElement("option");
  const ele909 = document.createElement("option");
  const ele910 = document.createElement("option");
  // にょ
  const ele911 = document.createElement("label");
  const ele912 = document.createElement("p");
  const ele913 = document.createElement("select");
  const ele914 = document.createElement("option");
  const ele915 = document.createElement("option");
  const ele916 = document.createElement("option");
  // ひゃ
  const ele917 = document.createElement("label");
  const ele918 = document.createElement("p");
  const ele919 = document.createElement("select");
  const ele920 = document.createElement("option");
  const ele921 = document.createElement("option");
  const ele922 = document.createElement("option");
  // ひぃ
  const ele923 = document.createElement("label");
  const ele924 = document.createElement("p");
  const ele925 = document.createElement("select");
  const ele926 = document.createElement("option");
  const ele927 = document.createElement("option");
  const ele928 = document.createElement("option");
  const ele929 = document.createElement("option");
  const ele930 = document.createElement("option");
  // ひゅ
  const ele931 = document.createElement("label");
  const ele932 = document.createElement("p");
  const ele933 = document.createElement("select");
  const ele934 = document.createElement("option");
  const ele935 = document.createElement("option");
  const ele936 = document.createElement("option");
  // ひぇ
  const ele937 = document.createElement("label");
  const ele938 = document.createElement("p");
  const ele939 = document.createElement("select");
  const ele940 = document.createElement("option");
  const ele941 = document.createElement("option");
  const ele942 = document.createElement("option");
  const ele943 = document.createElement("option");
  const ele944 = document.createElement("option");
  // ひょ
  const ele945 = document.createElement("label");
  const ele946 = document.createElement("p");
  const ele947 = document.createElement("select");
  const ele948 = document.createElement("option");
  const ele949 = document.createElement("option");
  const ele950 = document.createElement("option");
  // びゃ
  const ele951 = document.createElement("label");
  const ele952 = document.createElement("p");
  const ele953 = document.createElement("select");
  const ele954 = document.createElement("option");
  const ele955 = document.createElement("option");
  const ele956 = document.createElement("option");
  // びぃ
  const ele957 = document.createElement("label");
  const ele958 = document.createElement("p");
  const ele959 = document.createElement("select");
  const ele960 = document.createElement("option");
  const ele961 = document.createElement("option");
  const ele962 = document.createElement("option");
  const ele963 = document.createElement("option");
  const ele964 = document.createElement("option");
  // びゅ
  const ele965 = document.createElement("label");
  const ele966 = document.createElement("p");
  const ele967 = document.createElement("select");
  const ele968 = document.createElement("option");
  const ele969 = document.createElement("option");
  const ele970 = document.createElement("option");
  // びぇ
  const ele971 = document.createElement("label");
  const ele972 = document.createElement("p");
  const ele973 = document.createElement("select");
  const ele974 = document.createElement("option");
  const ele975 = document.createElement("option");
  const ele976 = document.createElement("option");
  const ele977 = document.createElement("option");
  const ele978 = document.createElement("option");
  // びょ
  const ele979 = document.createElement("label");
  const ele980 = document.createElement("p");
  const ele981 = document.createElement("select");
  const ele982 = document.createElement("option");
  const ele983 = document.createElement("option");
  const ele984 = document.createElement("option");
  // ぴゃ
  const ele985 = document.createElement("label");
  const ele986 = document.createElement("p");
  const ele987 = document.createElement("select");
  const ele988 = document.createElement("option");
  const ele989 = document.createElement("option");
  const ele990 = document.createElement("option");
  // ぴぃ
  const ele991 = document.createElement("label");
  const ele992 = document.createElement("p");
  const ele993 = document.createElement("select");
  const ele994 = document.createElement("option");
  const ele995 = document.createElement("option");
  const ele996 = document.createElement("option");
  const ele997 = document.createElement("option");
  const ele998 = document.createElement("option");
  // ぴゅ
  const ele999 = document.createElement("label");
  const ele1000 = document.createElement("p");
  const ele1001 = document.createElement("select");
  const ele1002 = document.createElement("option");
  const ele1003 = document.createElement("option");
  const ele1004 = document.createElement("option");
  // ぴぇ
  const ele1005 = document.createElement("label");
  const ele1006 = document.createElement("p");
  const ele1007 = document.createElement("select");
  const ele1008 = document.createElement("option");
  const ele1009 = document.createElement("option");
  const ele1010 = document.createElement("option");
  const ele1011 = document.createElement("option");
  const ele1012 = document.createElement("option");
  // ぴょ
  const ele1013 = document.createElement("label");
  const ele1014 = document.createElement("p");
  const ele1015 = document.createElement("select");
  const ele1016 = document.createElement("option");
  const ele1017 = document.createElement("option");
  const ele1018 = document.createElement("option");
  // ふぁ
  const ele1019 = document.createElement("label");
  const ele1020 = document.createElement("p");
  const ele1021 = document.createElement("select");
  const ele1022 = document.createElement("option");
  const ele1023 = document.createElement("option");
  const ele1024 = document.createElement("option");
  const ele1025 = document.createElement("option");
  const ele1026 = document.createElement("option");
  const ele1027 = document.createElement("option");
  const ele1028 = document.createElement("option");
  // ふゃ
  const ele1029 = document.createElement("label");
  const ele1030 = document.createElement("p");
  const ele1031 = document.createElement("select");
  const ele1032 = document.createElement("option");
  const ele1033 = document.createElement("option");
  const ele1034 = document.createElement("option");
  const ele1035 = document.createElement("option");
  const ele1036 = document.createElement("option");
  // ふぃ
  const ele1037 = document.createElement("label");
  const ele1038 = document.createElement("p");
  const ele1039 = document.createElement("select");
  const ele1040 = document.createElement("option");
  const ele1041 = document.createElement("option");
  const ele1042 = document.createElement("option");
  const ele1043 = document.createElement("option");
  const ele1044 = document.createElement("option");
  const ele1045 = document.createElement("option");
  const ele1046 = document.createElement("option");
  const ele1047 = document.createElement("option");
  const ele1048 = document.createElement("option");
  const ele1049 = document.createElement("option");
  const ele1050 = document.createElement("option");
  const ele1051 = document.createElement("option");
  // ふぅ
  const ele1052 = document.createElement("label");
  const ele1053 = document.createElement("p");
  const ele1054 = document.createElement("select");
  const ele1055 = document.createElement("option");
  const ele1056 = document.createElement("option");
  const ele1057 = document.createElement("option");
  const ele1058 = document.createElement("option");
  const ele1059 = document.createElement("option");
  // ふゅ
  const ele1060 = document.createElement("label");
  const ele1061 = document.createElement("p");
  const ele1062 = document.createElement("select");
  const ele1063 = document.createElement("option");
  const ele1064 = document.createElement("option");
  const ele1065 = document.createElement("option");
  const ele1066 = document.createElement("option");
  const ele1067 = document.createElement("option");
  const ele1068 = document.createElement("option");
  // ふぇ
  const ele1069 = document.createElement("label");
  const ele1070 = document.createElement("p");
  const ele1071 = document.createElement("select");
  const ele1072 = document.createElement("option");
  const ele1073 = document.createElement("option");
  const ele1074 = document.createElement("option");
  const ele1075 = document.createElement("option");
  const ele1076 = document.createElement("option");
  const ele1077 = document.createElement("option");
  const ele1078 = document.createElement("option");
  const ele1079 = document.createElement("option");
  const ele1080 = document.createElement("option");
  const ele1081 = document.createElement("option");
  const ele1082 = document.createElement("option");
  const ele1083 = document.createElement("option");
  // ふぉ
  const ele1084 = document.createElement("label");
  const ele1085 = document.createElement("p");
  const ele1086 = document.createElement("select");
  const ele1087 = document.createElement("option");
  const ele1088 = document.createElement("option");
  const ele1089 = document.createElement("option");
  const ele1090 = document.createElement("option");
  const ele1091 = document.createElement("option");
  const ele1092 = document.createElement("option");
  const ele1093 = document.createElement("option");
  // ふょ
  const ele1094 = document.createElement("label");
  const ele1095 = document.createElement("p");
  const ele1096 = document.createElement("select");
  const ele1097 = document.createElement("option");
  const ele1098 = document.createElement("option");
  const ele1099 = document.createElement("option");
  const ele1100 = document.createElement("option");
  const ele1101 = document.createElement("option");
  // みゃ
  const ele1102 = document.createElement("label");
  const ele1103 = document.createElement("p");
  const ele1104 = document.createElement("select");
  const ele1105 = document.createElement("option");
  const ele1106 = document.createElement("option");
  const ele1107 = document.createElement("option");
  // みぃ
  const ele1108 = document.createElement("label");
  const ele1109 = document.createElement("p");
  const ele1110 = document.createElement("select");
  const ele1111 = document.createElement("option");
  const ele1112 = document.createElement("option");
  const ele1113 = document.createElement("option");
  const ele1114 = document.createElement("option");
  const ele1115 = document.createElement("option");
  // みゅ
  const ele1116 = document.createElement("label");
  const ele1117 = document.createElement("p");
  const ele1118 = document.createElement("select");
  const ele1119 = document.createElement("option");
  const ele1120 = document.createElement("option");
  const ele1121 = document.createElement("option");
  // みぇ
  const ele1122 = document.createElement("label");
  const ele1123 = document.createElement("p");
  const ele1124 = document.createElement("select");
  const ele1125 = document.createElement("option");
  const ele1126 = document.createElement("option");
  const ele1127 = document.createElement("option");
  const ele1128 = document.createElement("option");
  const ele1129 = document.createElement("option");
  // みょ
  const ele1130 = document.createElement("label");
  const ele1131 = document.createElement("p");
  const ele1132 = document.createElement("select");
  const ele1133 = document.createElement("option");
  const ele1134 = document.createElement("option");
  const ele1135 = document.createElement("option");
  // りゃ
  const ele1136 = document.createElement("label");
  const ele1137 = document.createElement("p");
  const ele1138 = document.createElement("select");
  const ele1139 = document.createElement("option");
  const ele1140 = document.createElement("option");
  const ele1141 = document.createElement("option");
  // りぃ
  const ele1142 = document.createElement("label");
  const ele1143 = document.createElement("p");
  const ele1144 = document.createElement("select");
  const ele1145 = document.createElement("option");
  const ele1146 = document.createElement("option");
  const ele1147 = document.createElement("option");
  const ele1148 = document.createElement("option");
  const ele1149 = document.createElement("option");
  // りゅ
  const ele1150 = document.createElement("label");
  const ele1151 = document.createElement("p");
  const ele1152 = document.createElement("select");
  const ele1153 = document.createElement("option");
  const ele1154 = document.createElement("option");
  const ele1155 = document.createElement("option");
  // りぇ
  const ele1156 = document.createElement("label");
  const ele1157 = document.createElement("p");
  const ele1158 = document.createElement("select");
  const ele1159 = document.createElement("option");
  const ele1160 = document.createElement("option");
  const ele1161 = document.createElement("option");
  const ele1162 = document.createElement("option");
  const ele1163 = document.createElement("option");
  // りょ
  const ele1164 = document.createElement("label");
  const ele1165 = document.createElement("p");
  const ele1166 = document.createElement("select");
  const ele1167 = document.createElement("option");
  const ele1168 = document.createElement("option");
  const ele1169 = document.createElement("option");

  const etyWordsList = [
    "[R&K]ことわざ",
    "[R&K]顔の慣用句",
    "[R&K]思い出の言葉",
    "[R&K]擬音・擬態語",
    "[R&K]おふくろの味",
    "[R&K]数のある言葉",
    "[R&K]バレンタイン",
    "[R&K]冬の言葉(1)",
    "[R&K]慣用句",
    "[R&K]元気が出る言葉",
    "[R&K]いろはかるた",
    "[R&K]大掃除の言葉",
    "[R&K]冬の言葉(2)",
    "[R&K]エコライフ",
    "[R&K]冬の言葉(3)",
    "[R&K]魚のことわざ",
    "[R&K]給食のおかず",
    "[R&K]秋の言葉",
    "[R&K]食感ことば",
    "[R&K]学校にあるもの",
    "[R&K]大好きなおやつ",
    "[R&K]夏のおやつ",
    "[R&K]夏の言葉",
    "[R&K]初夏の言葉",
    "[R&K]梅雨の言葉",
    "[R&K]短いことわざ",
    "[R&K]春の言葉",
    "[R&K]体の慣用句",
    "[E]ことわざ",
    "[E]慣用句",
    "[E]スターウォーズ名言",
    "[E]天気のことば",
    "[E]挨拶",
    "[E]あいづち",
    "[E]学校で",
    "[E]スヌーピーのことば",
    "[E]表情",
    "[E]早口言葉",
    "[E]自己紹介",
    "[E]ほめことば",
    "[E]映画",
    "[E]電話の会話",
    "[E]ローマの休日のセリフ",
    "[E]スポーツのことば",
  ];
  // 説明
  ele1.id = "set";
  ele2.id = "set_text";
  // ファイル選択
  ele2.innerHTML =
    "使用するファイルを選択してください。(txtファイル)<br>ワードはそれぞれ改行区切りにしてください。";
  ele3.id = "file_selection";
  ele3.type = "file";
  ele3.accept = ".txt";
  ele4.textContent = "出題数：";
  ele5.id = "num";
  ele5.type = "number";
  ele5.placeholder = "20";
  ele6.id = "start_button";
  ele6.textContent = "開始";
  // 入力方式
  ele7.id = "inputtype_selection";
  ele8.textContent = "入力方式: ";
  ele9.classList.add("inputtype_selection_text");
  ele9.textContent = "ローマ字入力";
  ele10.classList.add("inputtype_selection_text");
  ele10.textContent = "かな入力";
  ele11.type = "radio";
  ele11.name = "inputtype";
  ele11.value = "roma";
  ele11.required = true;
  ele11.checked = true;
  ele12.type = "radio";
  ele12.name = "inputtype";
  ele12.value = "kana";
  ele12.required = true;
  // モード
  div.id = "mode_selection";
  p1.textContent = "モード: ";
  lb1.classList.add("mode_selection_text");
  lb1.textContent = "通常";
  lb2.classList.add("mode_selection_text");
  lb2.textContent = "e-typing";
  org.type = "radio";
  org.name = "mode";
  org.value = "original";
  org.required = true;
  org.checked = true;
  ety.type = "radio";
  ety.name = "mode";
  ety.value = "e-typing";
  ety.required = true;
  p2.textContent = "ワードを選択 :";
  t.classList.add("hidden");
  wrds.id = "ety_words";
  wrds.name = "wordname";
  wrds.setAttribute("list", "wordslist");
  wrds.placeholder = "[R&K]ことわざ";
  wrds.required = true;
  b.id = "wordslist";
  rk1.value = "[R&K]ことわざ";
  rk2.value = "[R&K]顔の慣用句";
  rk3.value = "[R&K]思い出の言葉";
  rk4.value = "[R&K]擬音・擬態語";
  rk5.value = "[R&K]おふくろの味";
  rk6.value = "[R&K]数のある言葉";
  rk7.value = "[R&K]バレンタイン";
  rk8.value = "[R&K]冬の言葉(1)";
  rk9.value = "[R&K]慣用句";
  rk10.value = "[R&K]元気が出る言葉";
  rk11.value = "[R&K]いろはかるた";
  rk12.value = "[R&K]大掃除の言葉";
  rk13.value = "[R&K]冬の言葉(2)";
  rk14.value = "[R&K]エコライフ";
  rk15.value = "[R&K]冬の言葉(3)";
  rk16.value = "[R&K]魚のことわざ";
  rk17.value = "[R&K]給食のおかず";
  rk18.value = "[R&K]秋の言葉";
  rk19.value = "[R&K]食感ことば";
  rk20.value = "[R&K]学校にあるもの";
  rk21.value = "[R&K]大好きなおやつ";
  rk22.value = "[R&K]夏のおやつ";
  rk23.value = "[R&K]夏の言葉";
  rk24.value = "[R&K]初夏の言葉";
  rk25.value = "[R&K]梅雨の言葉";
  rk26.value = "[R&K]短いことわざ";
  rk27.value = "[R&K]春の言葉";
  rk28.value = "[R&K]体の慣用句";
  e1.value = "[E]ことわざ";
  e2.value = "[E]慣用句";
  e3.value = "[E]スターウォーズ名言";
  e4.value = "[E]天気のことば";
  e5.value = "[E]挨拶";
  e6.value = "[E]あいづち";
  e7.value = "[E]学校で";
  e8.value = "[E]スヌーピーのことば";
  e9.value = "[E]表情";
  e10.value = "[E]早口言葉";
  e11.value = "[E]自己紹介";
  e12.value = "[E]ほめことば";
  e13.value = "[E]映画";
  e14.value = "[E]電話の会話";
  e15.value = "[E]ローマの休日のセリフ";
  e16.value = "[E]スポーツのことば";
  // 綴りの設定
  ele13.id = "spell_setting";
  ele14.textContent = "綴りの設定";
  ele16.textContent = "設定を開く";
  ele17.id = "spelling_table";
  // い
  ele19.textContent = "い :";
  ele20.name = "い";
  ele21.value = "0";
  ele21.textContent = "i";
  ele22.value = "1";
  ele22.textContent = "yi";
  // う
  ele24.textContent = "う :";
  ele25.name = "う";
  ele26.value = "0";
  ele26.textContent = "u";
  ele27.value = "1";
  ele27.textContent = "wu";
  ele28.value = "2";
  ele28.textContent = "whu";
  // か
  ele30.textContent = "か :";
  ele31.name = "か";
  ele32.value = "0";
  ele32.textContent = "ka";
  ele33.value = "1";
  ele33.textContent = "ca";
  // く
  ele35.textContent = "く :";
  ele36.name = "く";
  ele37.value = "0";
  ele37.textContent = "ku";
  ele38.value = "1";
  ele38.textContent = "cu";
  ele39.value = "2";
  ele39.textContent = "qu";
  // こ
  ele41.textContent = "こ :";
  ele42.name = "こ";
  ele43.value = "0";
  ele43.textContent = "ko";
  ele44.value = "1";
  ele44.textContent = "co";
  // し
  ele46.textContent = "し :";
  ele47.name = "し";
  ele48.value = "0";
  ele48.textContent = "si";
  ele49.value = "1";
  ele49.textContent = "shi";
  ele50.value = "2";
  ele50.textContent = "ci";
  // せ
  ele52.textContent = "せ :";
  ele53.name = "せ";
  ele54.value = "0";
  ele54.textContent = "se";
  ele55.value = "1";
  ele55.textContent = "ce";
  // ち
  ele57.textContent = "ち :";
  ele58.name = "ち";
  ele59.value = "0";
  ele59.textContent = "ti";
  ele60.value = "1";
  ele60.textContent = "chi";
  // つ
  ele62.textContent = "つ :";
  ele63.name = "つ";
  ele64.value = "0";
  ele64.textContent = "tu";
  ele65.value = "1";
  ele65.textContent = "tsu";
  // ふ
  ele67.textContent = "ふ :";
  ele68.name = "ふ";
  ele69.value = "0";
  ele69.textContent = "hu";
  ele70.value = "1";
  ele70.textContent = "fu";
  // ん
  ele72.textContent = "ん :";
  ele73.name = "ん";
  ele74.value = "0";
  ele74.textContent = "n";
  ele75.value = "1";
  ele75.textContent = "nn";
  ele76.value = "2";
  ele76.textContent = "xn";
  // ぁ
  ele78.textContent = "ぁ :";
  ele79.name = "ぁ";
  ele80.value = "0";
  ele80.textContent = "la";
  ele81.value = "1";
  ele81.textContent = "xa";
  // ぃ
  ele83.textContent = "ぃ :";
  ele84.name = "ぃ";
  ele85.value = "0";
  ele85.textContent = "li";
  ele86.value = "1";
  ele86.textContent = "xi";
  ele87.value = "2";
  ele87.textContent = "lyi";
  ele88.value = "3";
  ele88.textContent = "xyi";
  // ぅ
  ele90.textContent = "ぅ :";
  ele91.name = "ぅ";
  ele92.value = "0";
  ele92.textContent = "lu";
  ele93.value = "1";
  ele93.textContent = "xu";
  // ぇ
  ele95.textContent = "ぇ :";
  ele96.name = "ぇ";
  ele97.value = "0";
  ele97.textContent = "le";
  ele98.value = "1";
  ele98.textContent = "xe";
  ele99.value = "2";
  ele99.textContent = "lye";
  ele100.value = "3";
  ele100.textContent = "xye";
  // ぉ
  ele102.textContent = "ぉ :";
  ele103.name = "ぉ";
  ele104.value = "0";
  ele104.textContent = "lo";
  ele105.value = "1";
  ele105.textContent = "xo";
  // っ
  ele107.textContent = "っ :";
  ele108.name = "っ";
  ele109.value = "0";
  ele109.textContent = "ltu";
  ele110.value = "1";
  ele110.textContent = "xtu";
  ele111.value = "2";
  ele111.textContent = "ltsu";
  ele112.value = "3";
  ele112.textContent = "xtsu";
  // ゃ
  ele114.textContent = "ゃ :";
  ele115.name = "ゃ";
  ele116.value = "0";
  ele116.textContent = "lya";
  ele117.value = "1";
  ele117.textContent = "xya";
  // ゅ
  ele119.textContent = "ゅ :";
  ele120.name = "ゅ";
  ele121.value = "0";
  ele121.textContent = "lyu";
  ele122.value = "1";
  ele122.textContent = "xyu";
  // ょ
  ele124.textContent = "ょ :";
  ele125.name = "ょ";
  ele126.value = "0";
  ele126.textContent = "lyo";
  ele127.value = "1";
  ele127.textContent = "xyo";
  // ゎ
  ele129.textContent = "ゎ :";
  ele130.name = "ゎ";
  ele131.value = "0";
  ele131.textContent = "lwa";
  ele132.value = "1";
  ele132.textContent = "xwa";
  // じ
  ele134.textContent = "じ :";
  ele135.name = "じ";
  ele136.value = "0";
  ele136.textContent = "zi";
  ele137.value = "1";
  ele137.textContent = "ji";
  // いぇ
  ele139.textContent = "いぇ :";
  ele140.name = "いぇ";
  ele141.value = "0";
  ele141.textContent = "ye";
  ele142.value = "1";
  ele142.textContent = "ile";
  ele143.value = "2";
  ele143.textContent = "ixe";
  ele144.value = "3";
  ele144.textContent = "yile";
  ele145.value = "4";
  ele145.textContent = "yixe";
  ele146.value = "5";
  ele146.textContent = "ilye";
  ele147.value = "6";
  ele147.textContent = "ixye";
  ele148.value = "7";
  ele148.textContent = "yilye";
  ele149.value = "8";
  ele149.textContent = "yixye";
  // うぁ
  ele151.textContent = "うぁ :";
  ele152.name = "うぁ";
  ele153.value = "0";
  ele153.textContent = "wha";
  ele154.value = "1";
  ele154.textContent = "ula";
  ele155.value = "2";
  ele155.textContent = "uxa";
  ele156.value = "3";
  ele156.textContent = "wula";
  ele157.value = "4";
  ele157.textContent = "wuxa";
  ele158.value = "5";
  ele158.textContent = "whula";
  ele159.value = "6";
  ele159.textContent = "whuxa";
  // うぃ
  ele161.textContent = "うぃ :";
  ele162.name = "うぃ";
  ele163.value = "0";
  ele163.textContent = "wi";
  ele164.value = "1";
  ele164.textContent = "whi";
  ele165.value = "2";
  ele165.textContent = "uli";
  ele166.value = "3";
  ele166.textContent = "uxi";
  ele167.value = "4";
  ele167.textContent = "ulyi";
  ele168.value = "5";
  ele168.textContent = "uxyi";
  ele169.value = "6";
  ele169.textContent = "wuli";
  ele170.value = "7";
  ele170.textContent = "wuxi";
  ele171.value = "8";
  ele171.textContent = "wulyi";
  ele172.value = "9";
  ele172.textContent = "wuxyi";
  ele173.value = "10";
  ele173.textContent = "whuli";
  ele174.value = "11";
  ele174.textContent = "whuxi";
  ele175.value = "12";
  ele175.textContent = "whulyi";
  ele176.value = "13";
  ele176.textContent = "whuxyi";
  // うぇ
  ele178.textContent = "うぇ :";
  ele179.name = "うぇ";
  ele180.value = "0";
  ele180.textContent = "we";
  ele181.value = "1";
  ele181.textContent = "whe";
  ele182.value = "2";
  ele182.textContent = "ule";
  ele183.value = "3";
  ele183.textContent = "uxe";
  ele184.value = "4";
  ele184.textContent = "ulye";
  ele185.value = "5";
  ele185.textContent = "uxye";
  ele186.value = "6";
  ele186.textContent = "wule";
  ele187.value = "7";
  ele187.textContent = "wuxe";
  ele188.value = "8";
  ele188.textContent = "wulye";
  ele189.value = "9";
  ele189.textContent = "wuxye";
  ele190.value = "10";
  ele190.textContent = "whule";
  ele191.value = "11";
  ele191.textContent = "whuxe";
  ele192.value = "12";
  ele192.textContent = "whulye";
  ele193.value = "13";
  ele193.textContent = "whuxye";
  // うぉ
  ele195.textContent = "うぉ :";
  ele196.name = "うぉ";
  ele197.value = "0";
  ele197.textContent = "who";
  ele198.value = "1";
  ele198.textContent = "ulo";
  ele199.value = "2";
  ele199.textContent = "uxo";
  ele200.value = "3";
  ele200.textContent = "wulo";
  ele201.value = "4";
  ele201.textContent = "wuxo";
  ele202.value = "5";
  ele202.textContent = "whulo";
  ele203.value = "6";
  ele203.textContent = "whuxo";
  // ヴぁ
  ele205.textContent = "ヴぁ :";
  ele206.name = "ヴぁ";
  ele207.value = "0";
  ele207.textContent = "va";
  ele208.value = "1";
  ele208.textContent = "vula";
  ele209.value = "2";
  ele209.textContent = "vuxa";
  // ヴゃ
  ele211.textContent = "ヴゃ :";
  ele212.name = "ヴゃ";
  ele213.value = "0";
  ele213.textContent = "vya";
  ele214.value = "1";
  ele214.textContent = "vulya";
  ele215.value = "2";
  ele215.textContent = "vuxya";
  // ヴぃ
  ele217.textContent = "ヴぃ :";
  ele218.name = "ヴぃ";
  ele219.value = "0";
  ele219.textContent = "vi";
  ele220.value = "1";
  ele220.textContent = "vyi";
  ele221.value = "2";
  ele221.textContent = "vuli";
  ele222.value = "3";
  ele222.textContent = "vuxi";
  ele223.value = "4";
  ele223.textContent = "vulyi";
  ele224.value = "5";
  ele224.textContent = "vuxyi";
  // ヴゅ
  ele226.textContent = "ヴゅ :";
  ele227.name = "ヴゅ";
  ele228.value = "0";
  ele228.textContent = "vyu";
  ele229.value = "1";
  ele229.textContent = "vulyu";
  ele230.value = "2";
  ele230.textContent = "vuxyu";
  // ヴぇ
  ele232.textContent = "ヴぇ :";
  ele233.name = "ヴぇ";
  ele234.value = "0";
  ele234.textContent = "ve";
  ele235.value = "1";
  ele235.textContent = "vye";
  ele236.value = "2";
  ele236.textContent = "vule";
  ele237.value = "3";
  ele237.textContent = "vuxe";
  ele238.value = "4";
  ele238.textContent = "vulye";
  ele239.value = "5";
  ele239.textContent = "vuxye";
  // ヴぉ
  ele241.textContent = "ヴぉ :";
  ele242.name = "ヴぉ";
  ele243.value = "0";
  ele243.textContent = "vo";
  ele244.value = "1";
  ele244.textContent = "vulo";
  ele245.value = "2";
  ele245.textContent = "vuxo";
  // ヴょ
  ele247.textContent = "ヴょ :";
  ele248.name = "ヴょ";
  ele249.value = "0";
  ele249.textContent = "vyo";
  ele250.value = "1";
  ele250.textContent = "vulyo";
  ele251.value = "2";
  ele251.textContent = "vuxyo";
  // きゃ
  ele253.textContent = "きゃ :";
  ele254.name = "きゃ";
  ele255.value = "0";
  ele255.textContent = "kya";
  ele256.value = "1";
  ele256.textContent = "kilya";
  ele257.value = "2";
  ele257.textContent = "kixya";
  // きぃ
  ele259.textContent = "きぃ :";
  ele260.name = "きぃ";
  ele261.value = "0";
  ele261.textContent = "kyi";
  ele262.value = "1";
  ele262.textContent = "kili";
  ele263.value = "2";
  ele263.textContent = "kixi";
  ele264.value = "3";
  ele264.textContent = "kilyi";
  ele265.value = "4";
  ele265.textContent = "kixyi";
  // きゅ
  ele267.textContent = "きゅ :";
  ele268.name = "きゅ";
  ele269.value = "0";
  ele269.textContent = "kyu";
  ele270.value = "1";
  ele270.textContent = "kilyu";
  ele271.value = "2";
  ele271.textContent = "kixyu";
  // きぇ
  ele273.textContent = "きぇ :";
  ele274.name = "きぇ";
  ele275.value = "0";
  ele275.textContent = "kye";
  ele276.value = "1";
  ele276.textContent = "kile";
  ele277.value = "2";
  ele277.textContent = "kixe";
  ele278.value = "3";
  ele278.textContent = "kilye";
  ele279.value = "4";
  ele279.textContent = "kixye";
  // きょ
  ele281.textContent = "きょ :";
  ele282.name = "きょ";
  ele283.value = "0";
  ele283.textContent = "kyo";
  ele284.value = "1";
  ele284.textContent = "kilyo";
  ele285.value = "2";
  ele285.textContent = "kixyo";
  // ぎゃ
  ele287.textContent = "ぎゃ :";
  ele288.name = "ぎゃ";
  ele289.value = "0";
  ele289.textContent = "gya";
  ele290.value = "1";
  ele290.textContent = "gilya";
  ele291.value = "2";
  ele291.textContent = "gixya";
  // ぎぃ
  ele293.textContent = "ぎぃ :";
  ele294.name = "ぎぃ";
  ele295.value = "0";
  ele295.textContent = "gyi";
  ele296.value = "1";
  ele296.textContent = "gili";
  ele297.value = "2";
  ele297.textContent = "gixi";
  ele298.value = "3";
  ele298.textContent = "gilyi";
  ele299.value = "4";
  ele299.textContent = "gixyi";
  // ぎゅ
  ele301.textContent = "ぎゅ :";
  ele302.name = "ぎゅ";
  ele303.value = "0";
  ele303.textContent = "gyu";
  ele304.value = "1";
  ele304.textContent = "gilyu";
  ele305.value = "2";
  ele305.textContent = "gixyu";
  // ぎぇ
  ele307.textContent = "ぎぇ :";
  ele308.name = "ぎぇ";
  ele309.value = "0";
  ele309.textContent = "gye";
  ele310.value = "1";
  ele310.textContent = "gile";
  ele311.value = "2";
  ele311.textContent = "gixe";
  ele312.value = "3";
  ele312.textContent = "gilye";
  ele313.value = "4";
  ele313.textContent = "gixye";
  // ぎょ
  ele315.textContent = "ぎょ :";
  ele316.name = "ぎょ";
  ele317.value = "0";
  ele317.textContent = "gyo";
  ele318.value = "1";
  ele318.textContent = "gilyo";
  ele319.value = "2";
  ele319.textContent = "gixyo";
  // くぁ
  ele321.textContent = "くぁ :";
  ele322.name = "くぁ";
  ele323.value = "0";
  ele323.textContent = "qa";
  ele324.value = "1";
  ele324.textContent = "kwa";
  ele325.value = "2";
  ele325.textContent = "qwa";
  ele326.value = "3";
  ele326.textContent = "kula";
  ele327.value = "4";
  ele327.textContent = "kuxa";
  ele328.value = "5";
  ele328.textContent = "cula";
  ele329.value = "6";
  ele329.textContent = "cuxa";
  ele330.value = "7";
  ele330.textContent = "qula";
  ele331.value = "8";
  ele331.textContent = "quxa";
  // くぃ
  ele333.textContent = "くぃ :";
  ele334.name = "くぃ";
  ele335.value = "0";
  ele335.textContent = "qi";
  ele336.value = "1";
  ele336.textContent = "kwi";
  ele337.value = "2";
  ele337.textContent = "qwi";
  ele338.value = "3";
  ele338.textContent = "kuli";
  ele339.value = "4";
  ele339.textContent = "kuxi";
  ele340.value = "5";
  ele340.textContent = "kulyi";
  ele341.value = "6";
  ele341.textContent = "kuxyi";
  ele342.value = "7";
  ele342.textContent = "culi";
  ele343.value = "8";
  ele343.textContent = "cuxi";
  ele344.value = "9";
  ele344.textContent = "culyi";
  ele345.value = "10";
  ele345.textContent = "cuxyi";
  ele346.value = "11";
  ele346.textContent = "quli";
  ele347.value = "12";
  ele347.textContent = "quxi";
  ele348.value = "13";
  ele348.textContent = "qulyi";
  ele349.value = "14";
  ele349.textContent = "quxyi";
  // くぅ
  ele351.textContent = "くぅ :";
  ele352.name = "くぅ";
  ele353.value = "0";
  ele353.textContent = "kwu";
  ele354.value = "1";
  ele354.textContent = "qwu";
  ele355.value = "2";
  ele355.textContent = "kulu";
  ele356.value = "3";
  ele356.textContent = "kuxu";
  ele357.value = "4";
  ele357.textContent = "culu";
  ele358.value = "5";
  ele358.textContent = "cuxu";
  ele359.value = "6";
  ele359.textContent = "qulu";
  ele360.value = "7";
  ele360.textContent = "quxu";
  // くぇ
  ele362.textContent = "くぇ :";
  ele363.name = "くぇ";
  ele364.value = "0";
  ele364.textContent = "qe";
  ele365.value = "1";
  ele365.textContent = "kwe";
  ele366.value = "2";
  ele366.textContent = "qwe";
  ele367.value = "3";
  ele367.textContent = "kule";
  ele368.value = "4";
  ele368.textContent = "kuxe";
  ele369.value = "5";
  ele369.textContent = "kulye";
  ele370.value = "6";
  ele370.textContent = "kuxye";
  ele371.value = "7";
  ele371.textContent = "cule";
  ele372.value = "8";
  ele372.textContent = "cuxe";
  ele373.value = "9";
  ele373.textContent = "culye";
  ele374.value = "10";
  ele374.textContent = "cuxye";
  ele375.value = "11";
  ele375.textContent = "qule";
  ele376.value = "12";
  ele376.textContent = "quxe";
  ele377.value = "13";
  ele377.textContent = "qulye";
  ele378.value = "14";
  ele378.textContent = "quxye";
  // くぉ
  ele380.textContent = "くぉ :";
  ele381.name = "くぉ";
  ele382.value = "0";
  ele382.textContent = "qo";
  ele383.value = "1";
  ele383.textContent = "kwo";
  ele384.value = "2";
  ele384.textContent = "qwo";
  ele385.value = "3";
  ele385.textContent = "kulo";
  ele386.value = "4";
  ele386.textContent = "kuxo";
  ele387.value = "5";
  ele387.textContent = "culo";
  ele388.value = "6";
  ele388.textContent = "cuxo";
  ele389.value = "7";
  ele389.textContent = "qulo";
  ele390.value = "8";
  ele390.textContent = "quxo";
  // ぐぁ
  ele392.textContent = "ぐぁ :";
  ele393.name = "ぐぁ";
  ele394.value = "0";
  ele394.textContent = "gwa";
  ele395.value = "1";
  ele395.textContent = "gula";
  ele396.value = "2";
  ele396.textContent = "guxa";
  // ぐぃ
  ele398.textContent = "ぐぃ :";
  ele399.name = "ぐぃ";
  ele400.value = "0";
  ele400.textContent = "gwi";
  ele401.value = "1";
  ele401.textContent = "guli";
  ele402.value = "2";
  ele402.textContent = "guxi";
  ele403.value = "3";
  ele403.textContent = "gulyi";
  ele404.value = "4";
  ele404.textContent = "guxyi";
  // ぐぅ
  ele406.textContent = "ぐぅ :";
  ele407.name = "ぐぅ";
  ele408.value = "0";
  ele408.textContent = "gwu";
  ele409.value = "1";
  ele409.textContent = "gulu";
  ele410.value = "2";
  ele410.textContent = "guxu";
  // ぐぇ
  ele412.textContent = "ぐぇ :";
  ele413.name = "ぐぇ";
  ele414.value = "0";
  ele414.textContent = "gwe";
  ele415.value = "1";
  ele415.textContent = "gule";
  ele416.value = "2";
  ele416.textContent = "guxe";
  ele417.value = "3";
  ele417.textContent = "gulye";
  ele418.value = "4";
  ele418.textContent = "guxye";
  // ぐぉ
  ele420.textContent = "ぐぉ :";
  ele421.name = "ぐぉ";
  ele422.value = "0";
  ele422.textContent = "gwo";
  ele423.value = "1";
  ele423.textContent = "gulo";
  ele424.value = "2";
  ele424.textContent = "guxo";
  // しゃ
  ele426.textContent = "しゃ :";
  ele427.name = "しゃ";
  ele428.value = "0";
  ele428.textContent = "sya";
  ele429.value = "1";
  ele429.textContent = "sha";
  ele430.value = "2";
  ele430.textContent = "silya";
  ele431.value = "3";
  ele431.textContent = "sixya";
  ele432.value = "4";
  ele432.textContent = "shilya";
  ele433.value = "5";
  ele433.textContent = "shixya";
  ele434.value = "6";
  ele434.textContent = "cilya";
  ele435.value = "7";
  ele435.textContent = "cixya";
  // しぃ
  ele437.textContent = "しぃ :";
  ele438.name = "しぃ";
  ele439.value = "0";
  ele439.textContent = "syi";
  ele440.value = "1";
  ele440.textContent = "sili";
  ele441.value = "2";
  ele441.textContent = "sixi";
  ele442.value = "3";
  ele442.textContent = "silyi";
  ele443.value = "4";
  ele443.textContent = "sixyi";
  ele444.value = "5";
  ele444.textContent = "shili";
  ele445.value = "6";
  ele445.textContent = "shixi";
  ele446.value = "7";
  ele446.textContent = "shilyi";
  ele447.value = "8";
  ele447.textContent = "shixyi";
  ele448.value = "9";
  ele448.textContent = "cili";
  ele449.value = "10";
  ele449.textContent = "cixi";
  ele450.value = "11";
  ele450.textContent = "cilyi";
  ele451.value = "12";
  ele451.textContent = "cixyi";
  // しゅ
  ele453.textContent = "しゅ :";
  ele454.name = "しゅ";
  ele455.value = "0";
  ele455.textContent = "syu";
  ele456.value = "1";
  ele456.textContent = "shu";
  ele457.value = "2";
  ele457.textContent = "silyu";
  ele458.value = "3";
  ele458.textContent = "sixyu";
  ele459.value = "4";
  ele459.textContent = "shilyu";
  ele460.value = "5";
  ele460.textContent = "shixyu";
  ele461.value = "6";
  ele461.textContent = "cilyu";
  ele462.value = "7";
  ele462.textContent = "cixyu";
  // しぇ
  ele464.textContent = "しぇ :";
  ele465.name = "しぇ";
  ele466.value = "0";
  ele466.textContent = "sye";
  ele467.value = "1";
  ele467.textContent = "she";
  ele468.value = "2";
  ele468.textContent = "sile";
  ele469.value = "3";
  ele469.textContent = "sixe";
  ele470.value = "4";
  ele470.textContent = "silye";
  ele471.value = "5";
  ele471.textContent = "sixye";
  ele472.value = "6";
  ele472.textContent = "shile";
  ele473.value = "7";
  ele473.textContent = "shixe";
  ele474.value = "8";
  ele474.textContent = "shilye";
  ele475.value = "9";
  ele475.textContent = "shixye";
  ele476.value = "10";
  ele476.textContent = "cile";
  ele477.value = "11";
  ele477.textContent = "cixe";
  ele478.value = "12";
  ele478.textContent = "cilye";
  ele479.value = "13";
  ele479.textContent = "cixye";
  // しょ
  ele481.textContent = "しょ :";
  ele482.name = "しょ";
  ele483.value = "0";
  ele483.textContent = "syo";
  ele484.value = "1";
  ele484.textContent = "sho";
  ele485.value = "2";
  ele485.textContent = "silyo";
  ele486.value = "3";
  ele486.textContent = "sixyo";
  ele487.value = "4";
  ele487.textContent = "shilyo";
  ele488.value = "5";
  ele488.textContent = "shixyo";
  ele489.value = "6";
  ele489.textContent = "cilyo";
  ele490.value = "7";
  ele490.textContent = "cixyo";
  // じゃ
  ele492.textContent = "じゃ :";
  ele493.name = "じゃ";
  ele494.value = "0";
  ele494.textContent = "ja";
  ele495.value = "1";
  ele495.textContent = "jya";
  ele496.value = "2";
  ele496.textContent = "zya";
  ele497.value = "3";
  ele497.textContent = "jilya";
  ele498.value = "4";
  ele498.textContent = "jixya";
  ele499.value = "5";
  ele499.textContent = "zilya";
  ele500.value = "6";
  ele500.textContent = "zixya";
  // じぃ
  ele502.textContent = "じぃ :";
  ele503.name = "じぃ";
  ele504.value = "0";
  ele504.textContent = "jyi";
  ele505.value = "1";
  ele505.textContent = "zyi";
  ele506.value = "2";
  ele506.textContent = "jili";
  ele507.value = "3";
  ele507.textContent = "jixi";
  ele508.value = "4";
  ele508.textContent = "jilyi";
  ele509.value = "5";
  ele509.textContent = "jixyi";
  ele510.value = "6";
  ele510.textContent = "zili";
  ele511.value = "7";
  ele511.textContent = "zixi";
  ele512.value = "8";
  ele512.textContent = "zilyi";
  ele513.value = "9";
  ele513.textContent = "zixyi";
  // じゅ
  ele515.textContent = "じゅ :";
  ele516.name = "じゅ";
  ele517.value = "0";
  ele517.textContent = "ju";
  ele518.value = "1";
  ele518.textContent = "jyu";
  ele519.value = "2";
  ele519.textContent = "zyu";
  ele520.value = "3";
  ele520.textContent = "jilyu";
  ele521.value = "4";
  ele521.textContent = "jixyu";
  ele522.value = "5";
  ele522.textContent = "zilyu";
  ele523.value = "6";
  ele523.textContent = "zixyu";
  // じぇ
  ele525.textContent = "じぇ :";
  ele526.name = "じぇ";
  ele527.value = "0";
  ele527.textContent = "je";
  ele528.value = "1";
  ele528.textContent = "jye";
  ele529.value = "2";
  ele529.textContent = "zye";
  ele530.value = "3";
  ele530.textContent = "jile";
  ele531.value = "4";
  ele531.textContent = "jixe";
  ele532.value = "5";
  ele532.textContent = "jilye";
  ele533.value = "6";
  ele533.textContent = "jixye";
  ele534.value = "7";
  ele534.textContent = "zile";
  ele535.value = "8";
  ele535.textContent = "zixe";
  ele536.value = "8";
  ele536.textContent = "zilye";
  ele537.value = "10";
  ele537.textContent = "zixye";
  // じょ
  ele539.textContent = "じょ :";
  ele540.name = "じょ";
  ele541.value = "0";
  ele541.textContent = "jo";
  ele542.value = "1";
  ele542.textContent = "jyo";
  ele543.value = "2";
  ele543.textContent = "zyo";
  ele544.value = "3";
  ele544.textContent = "jilyo";
  ele545.value = "4";
  ele545.textContent = "jixyo";
  ele546.value = "5";
  ele546.textContent = "zilyo";
  ele547.value = "6";
  ele547.textContent = "zixyo";
  // すぁ
  ele549.textContent = "すぁ :";
  ele550.name = "すぁ";
  ele551.value = "0";
  ele551.textContent = "swa";
  ele552.value = "1";
  ele552.textContent = "sula";
  ele553.value = "2";
  ele553.textContent = "suxa";
  // すぃ
  ele555.textContent = "すぃ :";
  ele556.name = "すぃ";
  ele557.value = "0";
  ele557.textContent = "swi";
  ele558.value = "1";
  ele558.textContent = "suli";
  ele559.value = "2";
  ele559.textContent = "suxi";
  ele560.value = "3";
  ele560.textContent = "sulyi";
  ele561.value = "4";
  ele561.textContent = "suxyi";
  // すぅ
  ele563.textContent = "すぅ :";
  ele564.name = "すぅ";
  ele565.value = "0";
  ele565.textContent = "swu";
  ele566.value = "1";
  ele566.textContent = "sulu";
  ele567.value = "2";
  ele567.textContent = "suxu";
  // すぇ
  ele569.textContent = "すぇ :";
  ele570.name = "すぇ";
  ele571.value = "0";
  ele571.textContent = "swe";
  ele572.value = "1";
  ele572.textContent = "sule";
  ele573.value = "2";
  ele573.textContent = "suxe";
  ele574.value = "3";
  ele574.textContent = "sulye";
  ele575.value = "4";
  ele575.textContent = "suxye";
  // すぉ
  ele577.textContent = "すぉ :";
  ele578.name = "すぉ";
  ele579.value = "0";
  ele579.textContent = "swo";
  ele580.value = "1";
  ele580.textContent = "sulo";
  ele581.value = "2";
  ele581.textContent = "suxo";
  // ずぁ
  ele583.textContent = "ずぁ :";
  ele584.name = "ずぁ";
  ele585.value = "0";
  ele585.textContent = "zwa";
  ele586.value = "1";
  ele586.textContent = "zula";
  ele587.value = "2";
  ele587.textContent = "zuxa";
  // ずぃ
  ele589.textContent = "ずぃ :";
  ele590.name = "ずぃ";
  ele591.value = "0";
  ele591.textContent = "zwi";
  ele592.value = "1";
  ele592.textContent = "zuli";
  ele593.value = "2";
  ele593.textContent = "zuxi";
  ele594.value = "3";
  ele594.textContent = "zulyi";
  ele595.value = "4";
  ele595.textContent = "zuxyi";
  // ずぅ
  ele597.textContent = "ずぅ :";
  ele598.name = "ずぅ";
  ele599.value = "0";
  ele599.textContent = "zwu";
  ele600.value = "1";
  ele600.textContent = "zulu";
  ele601.value = "2";
  ele601.textContent = "zuxu";
  // ずぇ
  ele603.textContent = "ずぇ :";
  ele604.name = "ずぇ";
  ele605.value = "0";
  ele605.textContent = "zwe";
  ele606.value = "1";
  ele606.textContent = "zule";
  ele607.value = "2";
  ele607.textContent = "zuxe";
  ele608.value = "3";
  ele608.textContent = "zulye";
  ele609.value = "4";
  ele609.textContent = "zuxye";
  // ずぉ
  ele611.textContent = "ずぉ :";
  ele612.name = "ずぉ";
  ele613.value = "0";
  ele613.textContent = "zwo";
  ele614.value = "1";
  ele614.textContent = "zulo";
  ele615.value = "2";
  ele615.textContent = "zuxo";
  // ちゃ
  ele617.textContent = "ちゃ :";
  ele618.name = "ちゃ";
  ele619.value = "0";
  ele619.textContent = "tya";
  ele620.value = "1";
  ele620.textContent = "cha";
  ele621.value = "2";
  ele621.textContent = "cya";
  ele622.value = "3";
  ele622.textContent = "tilya";
  ele623.value = "4";
  ele623.textContent = "tixya";
  ele624.value = "5";
  ele624.textContent = "chilya";
  ele625.value = "6";
  ele625.textContent = "chixya";
  // ちぃ
  ele627.textContent = "ちぃ :";
  ele628.name = "ちぃ";
  ele629.value = "0";
  ele629.textContent = "tyi";
  ele630.value = "1";
  ele630.textContent = "cyi";
  ele631.value = "2";
  ele631.textContent = "tili";
  ele632.value = "3";
  ele632.textContent = "tixi";
  ele633.value = "4";
  ele633.textContent = "tilyi";
  ele634.value = "5";
  ele634.textContent = "tixyi";
  ele635.value = "6";
  ele635.textContent = "chili";
  ele636.value = "7";
  ele636.textContent = "chixi";
  ele637.value = "8";
  ele637.textContent = "chilyi";
  ele638.value = "9";
  ele638.textContent = "chixyi";
  // ちゅ
  ele640.textContent = "ちゅ :";
  ele641.name = "ちゅ";
  ele642.value = "0";
  ele642.textContent = "tyu";
  ele643.value = "1";
  ele643.textContent = "chu";
  ele644.value = "2";
  ele644.textContent = "cyu";
  ele645.value = "3";
  ele645.textContent = "tilyu";
  ele646.value = "4";
  ele646.textContent = "tixyu";
  ele647.value = "5";
  ele647.textContent = "chilyu";
  ele648.value = "6";
  ele648.textContent = "chixyu";
  // ちぇ
  ele650.textContent = "ちぇ :";
  ele651.name = "ちぇ";
  ele652.value = "0";
  ele652.textContent = "tye";
  ele653.value = "1";
  ele653.textContent = "cye";
  ele654.value = "2";
  ele654.textContent = "cye";
  ele655.value = "3";
  ele655.textContent = "tile";
  ele656.value = "4";
  ele656.textContent = "tixe";
  ele657.value = "5";
  ele657.textContent = "tilye";
  ele658.value = "6";
  ele658.textContent = "tixye";
  ele659.value = "7";
  ele659.textContent = "chile";
  ele660.value = "8";
  ele660.textContent = "chixe";
  ele661.value = "9";
  ele661.textContent = "chilye";
  ele662.value = "10";
  ele662.textContent = "chixye";
  // ちょ
  ele664.textContent = "ちょ :";
  ele665.name = "ちょ";
  ele666.value = "0";
  ele666.textContent = "tyo";
  ele667.value = "1";
  ele667.textContent = "cho";
  ele668.value = "2";
  ele668.textContent = "cyo";
  ele669.value = "3";
  ele669.textContent = "tilyo";
  ele670.value = "4";
  ele670.textContent = "tixyo";
  ele671.value = "5";
  ele671.textContent = "chilyo";
  ele672.value = "6";
  ele672.textContent = "chixyo";
  // ぢゃ
  ele674.textContent = "ぢゃ :";
  ele675.name = "ぢゃ";
  ele676.value = "0";
  ele676.textContent = "dya";
  ele677.value = "1";
  ele677.textContent = "dilya";
  ele678.value = "2";
  ele678.textContent = "dixya";
  // ぢぃ
  ele680.textContent = "ぢぃ :";
  ele681.name = "ぢぃ";
  ele682.value = "0";
  ele682.textContent = "dyi";
  ele683.value = "1";
  ele683.textContent = "dili";
  ele684.value = "2";
  ele684.textContent = "dixi";
  ele685.value = "3";
  ele685.textContent = "dilyi";
  ele686.value = "4";
  ele686.textContent = "dixyi";
  // ぢゅ
  ele688.textContent = "ぢゅ :";
  ele689.name = "ぢゅ";
  ele690.value = "0";
  ele690.textContent = "dyu";
  ele691.value = "1";
  ele691.textContent = "dilyu";
  ele692.value = "2";
  ele692.textContent = "dixyu";
  // ぢぇ
  ele694.textContent = "ぢぇ :";
  ele695.name = "ぢぇ";
  ele696.value = "0";
  ele696.textContent = "dye";
  ele697.value = "1";
  ele697.textContent = "dile";
  ele698.value = "2";
  ele698.textContent = "dixe";
  ele699.value = "3";
  ele699.textContent = "dilye";
  ele700.value = "4";
  ele700.textContent = "dixye";
  // ぢょ
  ele702.textContent = "ぢょ :";
  ele703.name = "ぢょ";
  ele704.value = "0";
  ele704.textContent = "dyo";
  ele705.value = "1";
  ele705.textContent = "dilyo";
  ele706.value = "2";
  ele706.textContent = "dixyo";
  // つぁ
  ele708.textContent = "つぁ :";
  ele709.name = "つぁ";
  ele710.value = "0";
  ele710.textContent = "tsa";
  ele711.value = "1";
  ele711.textContent = "tula";
  ele712.value = "2";
  ele712.textContent = "tuxa";
  ele713.value = "3";
  ele713.textContent = "tsula";
  ele714.value = "4";
  ele714.textContent = "tsuxa";
  // つぃ
  ele716.textContent = "つぃ :";
  ele717.name = "つぃ";
  ele718.value = "0";
  ele718.textContent = "tsi";
  ele719.value = "1";
  ele719.textContent = "tuli";
  ele720.value = "2";
  ele720.textContent = "tuxi";
  ele721.value = "3";
  ele721.textContent = "tulyi";
  ele722.value = "4";
  ele722.textContent = "tuxyi";
  ele723.value = "5";
  ele723.textContent = "tsuli";
  ele724.value = "6";
  ele724.textContent = "tsuxi";
  ele725.value = "7";
  ele725.textContent = "tsulyi";
  ele726.value = "8";
  ele726.textContent = "tsuxyi";
  // つぇ
  ele728.textContent = "つぇ :";
  ele729.name = "つぇ";
  ele730.value = "0";
  ele730.textContent = "tse";
  ele731.value = "1";
  ele731.textContent = "tule";
  ele732.value = "2";
  ele732.textContent = "tuxe";
  ele733.value = "3";
  ele733.textContent = "tulye";
  ele734.value = "4";
  ele734.textContent = "tuxye";
  ele735.value = "5";
  ele735.textContent = "tsule";
  ele736.value = "6";
  ele736.textContent = "tsuxe";
  ele737.value = "7";
  ele737.textContent = "tsulye";
  ele738.value = "8";
  ele738.textContent = "tsuxye";
  // つぉ
  ele740.textContent = "つぉ :";
  ele741.name = "つぉ";
  ele742.value = "0";
  ele742.textContent = "tso";
  ele743.value = "1";
  ele743.textContent = "tulo";
  ele744.value = "2";
  ele744.textContent = "tuxo";
  ele745.value = "3";
  ele745.textContent = "tsulo";
  ele746.value = "4";
  ele746.textContent = "tsuxo";
  // てゃ
  ele748.textContent = "てゃ :";
  ele749.name = "てゃ";
  ele750.value = "0";
  ele750.textContent = "tha";
  ele751.value = "1";
  ele751.textContent = "telya";
  ele752.value = "2";
  ele752.textContent = "texya";
  // てぃ
  ele754.textContent = "てぃ :";
  ele755.name = "てぃ";
  ele756.value = "0";
  ele756.textContent = "thi";
  ele757.value = "1";
  ele757.textContent = "teli";
  ele758.value = "2";
  ele758.textContent = "texi";
  ele759.value = "3";
  ele759.textContent = "telyi";
  ele760.value = "4";
  ele760.textContent = "texyi";
  // てゅ
  ele762.textContent = "てゅ :";
  ele763.name = "てゅ";
  ele764.value = "0";
  ele764.textContent = "thu";
  ele765.value = "1";
  ele765.textContent = "telyu";
  ele766.value = "2";
  ele766.textContent = "texyu";
  // てぇ
  ele768.textContent = "てぇ :";
  ele769.name = "てぇ";
  ele770.value = "0";
  ele770.textContent = "the";
  ele771.value = "1";
  ele771.textContent = "tele";
  ele772.value = "2";
  ele772.textContent = "texe";
  ele773.value = "3";
  ele773.textContent = "telye";
  ele774.value = "4";
  ele774.textContent = "texye";
  // てょ
  ele776.textContent = "てょ :";
  ele777.name = "てょ";
  ele778.value = "0";
  ele778.textContent = "tho";
  ele779.value = "1";
  ele779.textContent = "telyo";
  ele780.value = "2";
  ele780.textContent = "texyo";
  // でゃ
  ele782.textContent = "でゃ :";
  ele783.name = "でゃ";
  ele784.value = "0";
  ele784.textContent = "dha";
  ele785.value = "1";
  ele785.textContent = "delya";
  ele786.value = "2";
  ele786.textContent = "dexya";
  // でぃ
  ele788.textContent = "でぃ :";
  ele789.name = "でぃ";
  ele790.value = "0";
  ele790.textContent = "dhi";
  ele791.value = "1";
  ele791.textContent = "deli";
  ele792.value = "2";
  ele792.textContent = "dexi";
  ele793.value = "3";
  ele793.textContent = "delyi";
  ele794.value = "4";
  ele794.textContent = "dexyi";
  // でゅ
  ele796.textContent = "でゅ :";
  ele797.name = "でゅ";
  ele798.value = "0";
  ele798.textContent = "dhu";
  ele799.value = "1";
  ele799.textContent = "delyu";
  ele800.value = "2";
  ele800.textContent = "dexyu";
  // でぇ
  ele802.textContent = "でぇ :";
  ele803.name = "でぇ";
  ele804.value = "0";
  ele804.textContent = "dhe";
  ele805.value = "1";
  ele805.textContent = "dele";
  ele806.value = "2";
  ele806.textContent = "dexe";
  ele807.value = "3";
  ele807.textContent = "delye";
  ele808.value = "4";
  ele808.textContent = "dexye";
  // でょ
  ele810.textContent = "でょ :";
  ele811.name = "でょ";
  ele812.value = "0";
  ele812.textContent = "dho";
  ele813.value = "1";
  ele813.textContent = "delyo";
  ele814.value = "2";
  ele814.textContent = "dexyo";
  // とぁ
  ele816.textContent = "とぁ :";
  ele817.name = "とぁ";
  ele818.value = "0";
  ele818.textContent = "twa";
  ele819.value = "1";
  ele819.textContent = "tola";
  ele820.value = "2";
  ele820.textContent = "toxa";
  // とぃ
  ele822.textContent = "とぃ :";
  ele823.name = "とぃ";
  ele824.value = "0";
  ele824.textContent = "twi";
  ele825.value = "1";
  ele825.textContent = "toli";
  ele826.value = "2";
  ele826.textContent = "toxi";
  ele827.value = "3";
  ele827.textContent = "tolyi";
  ele828.value = "4";
  ele828.textContent = "toxyi";
  // とぅ
  ele830.textContent = "とぅ :";
  ele831.name = "とぅ";
  ele832.value = "0";
  ele832.textContent = "twu";
  ele833.value = "1";
  ele833.textContent = "tolu";
  ele834.value = "2";
  ele834.textContent = "toxu";
  // とぇ
  ele836.textContent = "とぇ :";
  ele837.name = "とぇ";
  ele838.value = "0";
  ele838.textContent = "twe";
  ele839.value = "1";
  ele839.textContent = "tole";
  ele840.value = "2";
  ele840.textContent = "toxe";
  ele841.value = "3";
  ele841.textContent = "tolye";
  ele842.value = "4";
  ele842.textContent = "toxye";
  // とぉ
  ele844.textContent = "とぉ :";
  ele845.name = "とぉ";
  ele846.value = "0";
  ele846.textContent = "two";
  ele847.value = "1";
  ele847.textContent = "tolo";
  ele848.value = "2";
  ele848.textContent = "toxo";
  // どぁ
  ele850.textContent = "どぁ :";
  ele851.name = "どぁ";
  ele852.value = "0";
  ele852.textContent = "dwa";
  ele853.value = "1";
  ele853.textContent = "dola";
  ele854.value = "2";
  ele854.textContent = "doxa";
  // どぃ
  ele856.textContent = "どぃ :";
  ele857.name = "どぃ";
  ele858.value = "0";
  ele858.textContent = "dwi";
  ele859.value = "1";
  ele859.textContent = "doli";
  ele860.value = "2";
  ele860.textContent = "doxi";
  ele861.value = "3";
  ele861.textContent = "dolyi";
  ele862.value = "4";
  ele862.textContent = "doxyi";
  // どぅ
  ele864.textContent = "どぅ :";
  ele865.name = "どぅ";
  ele866.value = "0";
  ele866.textContent = "dwu";
  ele867.value = "1";
  ele867.textContent = "dolu";
  ele868.value = "2";
  ele868.textContent = "doxu";
  // どぇ
  ele870.textContent = "どぇ :";
  ele871.name = "どぇ";
  ele872.value = "0";
  ele872.textContent = "dwe";
  ele873.value = "1";
  ele873.textContent = "dole";
  ele874.value = "2";
  ele874.textContent = "doxe";
  ele875.value = "3";
  ele875.textContent = "dolye";
  ele876.value = "4";
  ele876.textContent = "doxye";
  // どぉ
  ele878.textContent = "どぉ :";
  ele879.name = "どぉ";
  ele880.value = "0";
  ele880.textContent = "dwo";
  ele881.value = "1";
  ele881.textContent = "dolo";
  ele882.value = "2";
  ele882.textContent = "doxo";
  // にゃ
  ele884.textContent = "にゃ :";
  ele885.name = "にゃ";
  ele886.value = "0";
  ele886.textContent = "nya";
  ele887.value = "1";
  ele887.textContent = "nilya";
  ele888.value = "2";
  ele888.textContent = "nixya";
  // にぃ
  ele890.textContent = "にぃ :";
  ele891.name = "にぃ";
  ele892.value = "0";
  ele892.textContent = "nyi";
  ele893.value = "1";
  ele893.textContent = "nili";
  ele894.value = "2";
  ele894.textContent = "nixi";
  ele895.value = "3";
  ele895.textContent = "nilyi";
  ele896.value = "4";
  ele896.textContent = "nixyi";
  // にゅ
  ele898.textContent = "にゅ :";
  ele899.name = "にゅ";
  ele900.value = "0";
  ele900.textContent = "nyu";
  ele901.value = "1";
  ele901.textContent = "nilyu";
  ele902.value = "2";
  ele902.textContent = "nixyu";
  // にぇ
  ele904.textContent = "にぇ :";
  ele905.name = "にぇ";
  ele906.value = "0";
  ele906.textContent = "nye";
  ele907.value = "1";
  ele907.textContent = "nile";
  ele908.value = "2";
  ele908.textContent = "nixe";
  ele909.value = "3";
  ele909.textContent = "nilye";
  ele910.value = "4";
  ele910.textContent = "nixye";
  // にょ
  ele912.textContent = "にょ :";
  ele913.name = "にょ";
  ele914.value = "0";
  ele914.textContent = "nyo";
  ele915.value = "1";
  ele915.textContent = "nilyo";
  ele916.value = "2";
  ele916.textContent = "nixyo";
  // ひゃ
  ele918.textContent = "ひゃ :";
  ele919.name = "ひゃ";
  ele920.value = "0";
  ele920.textContent = "hya";
  ele921.value = "1";
  ele921.textContent = "hilya";
  ele922.value = "2";
  ele922.textContent = "hixya";
  // ひぃ
  ele924.textContent = "ひぃ :";
  ele925.name = "ひぃ";
  ele926.value = "0";
  ele926.textContent = "hyi";
  ele927.value = "1";
  ele927.textContent = "hili";
  ele928.value = "2";
  ele928.textContent = "hixi";
  ele929.value = "3";
  ele929.textContent = "hilyi";
  ele930.value = "4";
  ele930.textContent = "hixyi";
  // ひゅ
  ele932.textContent = "ひゅ :";
  ele933.name = "ひゅ";
  ele934.value = "0";
  ele934.textContent = "hyu";
  ele935.value = "1";
  ele935.textContent = "hilyu";
  ele936.value = "2";
  ele936.textContent = "hixyu";
  // ひぇ
  ele938.textContent = "ひぇ :";
  ele939.name = "ひぇ";
  ele940.value = "0";
  ele940.textContent = "hye";
  ele941.value = "1";
  ele941.textContent = "hile";
  ele942.value = "2";
  ele942.textContent = "hixe";
  ele943.value = "3";
  ele943.textContent = "hilye";
  ele944.value = "4";
  ele944.textContent = "hixye";
  // ひょ
  ele946.textContent = "ひょ :";
  ele947.name = "ひょ";
  ele948.value = "0";
  ele948.textContent = "hyo";
  ele949.value = "1";
  ele949.textContent = "hilyo";
  ele950.value = "2";
  ele950.textContent = "hixyo";
  // びゃ
  ele952.textContent = "びゃ :";
  ele953.name = "びゃ";
  ele954.value = "0";
  ele954.textContent = "bya";
  ele955.value = "1";
  ele955.textContent = "bilya";
  ele956.value = "2";
  ele956.textContent = "bixya";
  // びぃ
  ele958.textContent = "びぃ :";
  ele959.name = "びぃ";
  ele960.value = "0";
  ele960.textContent = "byi";
  ele961.value = "1";
  ele961.textContent = "bili";
  ele962.value = "2";
  ele962.textContent = "bixi";
  ele963.value = "3";
  ele963.textContent = "bilyi";
  ele964.value = "4";
  ele964.textContent = "bixyi";
  // びゅ
  ele966.textContent = "びゅ :";
  ele967.name = "びゅ";
  ele968.value = "0";
  ele968.textContent = "byu";
  ele969.value = "1";
  ele969.textContent = "bilyu";
  ele970.value = "2";
  ele970.textContent = "bixyu";
  // びぇ
  ele972.textContent = "びぇ :";
  ele973.name = "びぇ";
  ele974.value = "0";
  ele974.textContent = "bye";
  ele975.value = "1";
  ele975.textContent = "bile";
  ele976.value = "2";
  ele976.textContent = "bixe";
  ele977.value = "3";
  ele977.textContent = "bilye";
  ele978.value = "4";
  ele978.textContent = "bixye";
  // びょ
  ele980.textContent = "びょ :";
  ele981.name = "びょ";
  ele982.value = "0";
  ele982.textContent = "byo";
  ele983.value = "1";
  ele983.textContent = "bilyo";
  ele984.value = "2";
  ele984.textContent = "bixyo";
  // ぴゃ
  ele986.textContent = "ぴゃ :";
  ele987.name = "ぴゃ";
  ele988.value = "0";
  ele988.textContent = "pya";
  ele989.value = "1";
  ele989.textContent = "pilya";
  ele990.value = "2";
  ele990.textContent = "pixya";
  // ぴぃ
  ele992.textContent = "ぴぃ :";
  ele993.name = "ぴぃ";
  ele994.value = "0";
  ele994.textContent = "pyi";
  ele995.value = "1";
  ele995.textContent = "pili";
  ele996.value = "2";
  ele996.textContent = "pixi";
  ele997.value = "3";
  ele997.textContent = "pilyi";
  ele998.value = "4";
  ele998.textContent = "pixyi";
  // ぴゅ
  ele1000.textContent = "ぴゅ :";
  ele1001.name = "ぴゅ";
  ele1002.value = "0";
  ele1002.textContent = "pyu";
  ele1003.value = "1";
  ele1003.textContent = "pilyu";
  ele1004.value = "2";
  ele1004.textContent = "pixyu";
  // ぴぇ
  ele1006.textContent = "ぴぇ :";
  ele1007.name = "ぴぇ";
  ele1008.value = "0";
  ele1008.textContent = "pye";
  ele1009.value = "1";
  ele1009.textContent = "pile";
  ele1010.value = "2";
  ele1010.textContent = "pixe";
  ele1011.value = "3";
  ele1011.textContent = "pilye";
  ele1012.value = "4";
  ele1012.textContent = "pixye";
  // ぴょ
  ele1014.textContent = "ぴょ :";
  ele1015.name = "ぴょ";
  ele1016.value = "0";
  ele1016.textContent = "pyo";
  ele1017.value = "1";
  ele1017.textContent = "pilyo";
  ele1018.value = "2";
  ele1018.textContent = "pixyo";
  // ふぁ
  ele1020.textContent = "ふぁ :";
  ele1021.name = "ふぁ";
  ele1022.value = "0";
  ele1022.textContent = "fa";
  ele1023.value = "1";
  ele1023.textContent = "fwa";
  ele1024.value = "2";
  ele1024.textContent = "hwa";
  ele1025.value = "3";
  ele1025.textContent = "fula";
  ele1026.value = "4";
  ele1026.textContent = "fuxa";
  ele1027.value = "5";
  ele1027.textContent = "hula";
  ele1028.value = "6";
  ele1028.textContent = "huxa";
  // ふゃ
  ele1030.textContent = "ふゃ :";
  ele1031.name = "ふゃ";
  ele1032.value = "0";
  ele1032.textContent = "fya";
  ele1033.value = "1";
  ele1033.textContent = "fulya";
  ele1034.value = "2";
  ele1034.textContent = "fuxya";
  ele1035.value = "3";
  ele1035.textContent = "hulya";
  ele1036.value = "4";
  ele1036.textContent = "huxya";
  // ふぃ
  ele1038.textContent = "ふぃ :";
  ele1039.name = "ふぃ";
  ele1040.value = "0";
  ele1040.textContent = "fi";
  ele1041.value = "1";
  ele1041.textContent = "fwi";
  ele1042.value = "2";
  ele1042.textContent = "fyi";
  ele1043.value = "3";
  ele1043.textContent = "hwi";
  ele1044.value = "4";
  ele1044.textContent = "fuli";
  ele1045.value = "5";
  ele1045.textContent = "fuxi";
  ele1046.value = "6";
  ele1046.textContent = "fulyi";
  ele1047.value = "7";
  ele1047.textContent = "fuxyi";
  ele1048.value = "8";
  ele1048.textContent = "huli";
  ele1049.value = "9";
  ele1049.textContent = "huxi";
  ele1050.value = "10";
  ele1050.textContent = "hulyi";
  ele1051.value = "11";
  ele1051.textContent = "huxyi";
  // ふぅ
  ele1053.textContent = "ふぅ :";
  ele1054.name = "ふぅ";
  ele1055.value = "0";
  ele1055.textContent = "fwu";
  ele1056.value = "1";
  ele1056.textContent = "fulu";
  ele1057.value = "2";
  ele1057.textContent = "fuxu";
  ele1058.value = "3";
  ele1058.textContent = "hulu";
  ele1059.value = "4";
  ele1059.textContent = "huxu";
  // ふゅ
  ele1061.textContent = "ふゅ :";
  ele1062.name = "ふゅ";
  ele1063.value = "0";
  ele1063.textContent = "fyu";
  ele1064.value = "1";
  ele1064.textContent = "hwyu";
  ele1065.value = "2";
  ele1065.textContent = "fulyu";
  ele1066.value = "3";
  ele1066.textContent = "fuxyu";
  ele1067.value = "4";
  ele1067.textContent = "hulyu";
  ele1068.value = "5";
  ele1068.textContent = "huxyu";
  // ふぇ
  ele1070.textContent = "ふぇ :";
  ele1071.name = "ふぇ";
  ele1072.value = "0";
  ele1072.textContent = "fe";
  ele1073.value = "1";
  ele1073.textContent = "fwe";
  ele1074.value = "2";
  ele1074.textContent = "fye";
  ele1075.value = "3";
  ele1075.textContent = "hwe";
  ele1076.value = "4";
  ele1076.textContent = "fule";
  ele1077.value = "5";
  ele1077.textContent = "fuxe";
  ele1078.value = "6";
  ele1078.textContent = "fulye";
  ele1079.value = "7";
  ele1079.textContent = "fuxye";
  ele1080.value = "8";
  ele1080.textContent = "hule";
  ele1081.value = "9";
  ele1081.textContent = "huxe";
  ele1082.value = "10";
  ele1082.textContent = "hulye";
  ele1083.value = "11";
  ele1083.textContent = "huxye";
  // ふぉ
  ele1085.textContent = "ふぉ :";
  ele1086.name = "ふぉ";
  ele1087.value = "0";
  ele1087.textContent = "fo";
  ele1088.value = "1";
  ele1088.textContent = "fwo";
  ele1089.value = "2";
  ele1089.textContent = "hwo";
  ele1090.value = "3";
  ele1090.textContent = "fulo";
  ele1091.value = "4";
  ele1091.textContent = "fuxo";
  ele1092.value = "5";
  ele1092.textContent = "hulo";
  ele1093.value = "6";
  ele1093.textContent = "huxo";
  // ふょ
  ele1095.textContent = "ふょ :";
  ele1096.name = "ふょ";
  ele1097.value = "0";
  ele1097.textContent = "fyo";
  ele1098.value = "1";
  ele1098.textContent = "fulyo";
  ele1099.value = "2";
  ele1099.textContent = "fuxyo";
  ele1100.value = "3";
  ele1100.textContent = "hulyo";
  ele1101.value = "4";
  ele1101.textContent = "huxyo";
  // みゃ
  ele1103.textContent = "みゃ :";
  ele1104.name = "みゃ";
  ele1105.value = "0";
  ele1105.textContent = "mya";
  ele1106.value = "1";
  ele1106.textContent = "milya";
  ele1107.value = "2";
  ele1107.textContent = "mixya";
  // みぃ
  ele1109.textContent = "みぃ :";
  ele1110.name = "みぃ";
  ele1111.value = "0";
  ele1111.textContent = "myi";
  ele1112.value = "1";
  ele1112.textContent = "mili";
  ele1113.value = "2";
  ele1113.textContent = "mixi";
  ele1114.value = "3";
  ele1114.textContent = "milyi";
  ele1115.value = "4";
  ele1115.textContent = "mixyi";
  // みゅ
  ele1117.textContent = "みゅ :";
  ele1118.name = "みゅ";
  ele1119.value = "0";
  ele1119.textContent = "myu";
  ele1120.value = "1";
  ele1120.textContent = "milyu";
  ele1121.value = "2";
  ele1121.textContent = "mixyu";
  // みぇ
  ele1123.textContent = "みぇ :";
  ele1124.name = "みぇ";
  ele1125.value = "0";
  ele1125.textContent = "mye";
  ele1126.value = "1";
  ele1126.textContent = "mile";
  ele1127.value = "2";
  ele1127.textContent = "mixe";
  ele1128.value = "3";
  ele1128.textContent = "milye";
  ele1129.value = "4";
  ele1129.textContent = "mixye";
  // みょ
  ele1131.textContent = "みょ :";
  ele1132.name = "みょ";
  ele1133.value = "0";
  ele1133.textContent = "myo";
  ele1134.value = "1";
  ele1134.textContent = "milyo";
  ele1135.value = "2";
  ele1135.textContent = "mixyo";
  // りゃ
  ele1137.textContent = "りゃ :";
  ele1138.name = "りゃ";
  ele1139.value = "0";
  ele1139.textContent = "rya";
  ele1140.value = "1";
  ele1140.textContent = "rilya";
  ele1141.value = "2";
  ele1141.textContent = "rixya";
  // りぃ
  ele1143.textContent = "りぃ :";
  ele1144.name = "りぃ";
  ele1145.value = "0";
  ele1145.textContent = "ryi";
  ele1146.value = "1";
  ele1146.textContent = "rili";
  ele1147.value = "2";
  ele1147.textContent = "rixi";
  ele1148.value = "3";
  ele1148.textContent = "rilyi";
  ele1149.value = "4";
  ele1149.textContent = "rixyi";
  // りゅ
  ele1151.textContent = "りゅ :";
  ele1152.name = "りゅ";
  ele1153.value = "0";
  ele1153.textContent = "ryu";
  ele1154.value = "1";
  ele1154.textContent = "rilyu";
  ele1155.value = "2";
  ele1155.textContent = "rixyu";
  // りぇ
  ele1157.textContent = "りぇ :";
  ele1158.name = "りぇ";
  ele1159.value = "0";
  ele1159.textContent = "rye";
  ele1160.value = "1";
  ele1160.textContent = "rile";
  ele1161.value = "2";
  ele1161.textContent = "rixe";
  ele1162.value = "3";
  ele1162.textContent = "rilye";
  ele1163.value = "4";
  ele1163.textContent = "rixye";
  // りょ
  ele1165.textContent = "りょ :";
  ele1166.name = "りょ";
  ele1167.value = "0";
  ele1167.textContent = "ryo";
  ele1168.value = "1";
  ele1168.textContent = "rilyo";
  ele1169.value = "2";
  ele1169.textContent = "rixyo";
  parent.insertBefore(ele1, base.nextSibling);
  // 説明
  ele1.appendChild(ele2);
  // ファイル選択
  ele1.appendChild(ele3);
  ele1.appendChild(ele4);
  ele4.appendChild(ele5);
  ele1.appendChild(ele6);
  // 入力方式
  ele1.appendChild(ele7);
  ele7.appendChild(ele8);
  ele7.appendChild(ele9);
  ele7.appendChild(ele10);
  ele9.appendChild(ele11);
  ele10.appendChild(ele12);
  // モード
  ele1.appendChild(div);
  div.appendChild(p1);
  div.appendChild(lb1);
  lb1.appendChild(org);
  div.appendChild(lb2);
  lb2.appendChild(ety);
  div.appendChild(t);
  t.appendChild(p2);
  t.appendChild(wrds);
  t.appendChild(b);
  b.appendChild(rk1);
  b.appendChild(rk2);
  b.appendChild(rk3);
  b.appendChild(rk4);
  b.appendChild(rk5);
  b.appendChild(rk6);
  b.appendChild(rk7);
  b.appendChild(rk8);
  b.appendChild(rk9);
  b.appendChild(rk10);
  b.appendChild(rk11);
  b.appendChild(rk12);
  b.appendChild(rk13);
  b.appendChild(rk14);
  b.appendChild(rk15);
  b.appendChild(rk16);
  b.appendChild(rk17);
  b.appendChild(rk18);
  b.appendChild(rk19);
  b.appendChild(rk20);
  b.appendChild(rk21);
  b.appendChild(rk22);
  b.appendChild(rk23);
  b.appendChild(rk24);
  b.appendChild(rk25);
  b.appendChild(rk26);
  b.appendChild(rk27);
  b.appendChild(rk28);
  b.appendChild(e1);
  b.appendChild(e2);
  b.appendChild(e3);
  b.appendChild(e4);
  b.appendChild(e5);
  b.appendChild(e6);
  b.appendChild(e7);
  b.appendChild(e8);
  b.appendChild(e9);
  b.appendChild(e10);
  b.appendChild(e11);
  b.appendChild(e12);
  b.appendChild(e13);
  b.appendChild(e14);
  b.appendChild(e15);
  b.appendChild(e16);
  // 綴りの設定
  ele1.appendChild(ele13);
  ele13.appendChild(ele14);
  ele13.appendChild(ele15);
  ele15.appendChild(ele16);
  ele15.appendChild(ele17);
  // い
  ele17.appendChild(ele18);
  ele18.appendChild(ele19);
  ele18.appendChild(ele20);
  ele20.appendChild(ele21);
  ele20.appendChild(ele22);
  // う
  ele17.appendChild(ele23);
  ele23.appendChild(ele24);
  ele23.appendChild(ele25);
  ele25.appendChild(ele26);
  ele25.appendChild(ele27);
  ele25.appendChild(ele28);
  // か
  ele17.appendChild(ele29);
  ele29.appendChild(ele30);
  ele29.appendChild(ele31);
  ele31.appendChild(ele32);
  ele31.appendChild(ele33);
  // く
  ele17.appendChild(ele34);
  ele34.appendChild(ele35);
  ele34.appendChild(ele36);
  ele36.appendChild(ele37);
  ele36.appendChild(ele38);
  ele36.appendChild(ele39);
  // こ
  ele17.appendChild(ele40);
  ele40.appendChild(ele41);
  ele40.appendChild(ele42);
  ele42.appendChild(ele43);
  ele42.appendChild(ele44);
  // し
  ele17.appendChild(ele45);
  ele45.appendChild(ele46);
  ele45.appendChild(ele47);
  ele47.appendChild(ele48);
  ele47.appendChild(ele49);
  ele47.appendChild(ele50);
  // せ
  ele17.appendChild(ele51);
  ele51.appendChild(ele52);
  ele51.appendChild(ele53);
  ele53.appendChild(ele54);
  ele53.appendChild(ele55);
  // ち
  ele17.appendChild(ele56);
  ele56.appendChild(ele57);
  ele56.appendChild(ele58);
  ele58.appendChild(ele59);
  ele58.appendChild(ele60);
  // つ
  ele17.appendChild(ele61);
  ele61.appendChild(ele62);
  ele61.appendChild(ele63);
  ele63.appendChild(ele64);
  ele63.appendChild(ele65);
  // ふ
  ele17.appendChild(ele66);
  ele66.appendChild(ele67);
  ele66.appendChild(ele68);
  ele68.appendChild(ele69);
  ele68.appendChild(ele70);
  // ん
  ele17.appendChild(ele71);
  ele71.appendChild(ele72);
  ele71.appendChild(ele73);
  ele73.appendChild(ele74);
  ele73.appendChild(ele75);
  ele73.appendChild(ele76);
  // ぁ
  ele17.appendChild(ele77);
  ele77.appendChild(ele78);
  ele77.appendChild(ele79);
  ele79.appendChild(ele80);
  ele79.appendChild(ele81);
  // ぃ
  ele17.appendChild(ele82);
  ele82.appendChild(ele83);
  ele82.appendChild(ele84);
  ele84.appendChild(ele85);
  ele84.appendChild(ele86);
  ele84.appendChild(ele87);
  ele84.appendChild(ele88);
  // ぅ
  ele17.appendChild(ele89);
  ele89.appendChild(ele90);
  ele89.appendChild(ele91);
  ele91.appendChild(ele92);
  ele91.appendChild(ele93);
  // ぇ
  ele17.appendChild(ele94);
  ele94.appendChild(ele95);
  ele94.appendChild(ele96);
  ele96.appendChild(ele97);
  ele96.appendChild(ele98);
  ele96.appendChild(ele99);
  ele96.appendChild(ele100);
  // ぉ
  ele17.appendChild(ele101);
  ele101.appendChild(ele102);
  ele101.appendChild(ele103);
  ele103.appendChild(ele104);
  ele103.appendChild(ele105);
  // っ
  ele17.appendChild(ele106);
  ele106.appendChild(ele107);
  ele106.appendChild(ele108);
  ele108.appendChild(ele109);
  ele108.appendChild(ele110);
  ele108.appendChild(ele111);
  ele108.appendChild(ele112);
  // ゃ
  ele17.appendChild(ele113);
  ele113.appendChild(ele114);
  ele113.appendChild(ele115);
  ele115.appendChild(ele116);
  ele115.appendChild(ele117);
  // ゅ
  ele17.appendChild(ele118);
  ele118.appendChild(ele119);
  ele118.appendChild(ele120);
  ele120.appendChild(ele121);
  ele120.appendChild(ele122);
  // ょ
  ele17.appendChild(ele123);
  ele123.appendChild(ele124);
  ele123.appendChild(ele125);
  ele125.appendChild(ele126);
  ele125.appendChild(ele127);
  // ゎ
  ele17.appendChild(ele128);
  ele128.appendChild(ele129);
  ele128.appendChild(ele130);
  ele130.appendChild(ele131);
  ele130.appendChild(ele132);
  // じ
  ele17.appendChild(ele133);
  ele133.appendChild(ele134);
  ele133.appendChild(ele135);
  ele135.appendChild(ele136);
  ele135.appendChild(ele137);
  // いぇ
  ele17.appendChild(ele138);
  ele138.appendChild(ele139);
  ele138.appendChild(ele140);
  ele140.appendChild(ele141);
  ele140.appendChild(ele142);
  ele140.appendChild(ele143);
  ele140.appendChild(ele144);
  ele140.appendChild(ele145);
  ele140.appendChild(ele146);
  ele140.appendChild(ele147);
  ele140.appendChild(ele148);
  ele140.appendChild(ele149);
  // うぁ
  ele17.appendChild(ele150);
  ele150.appendChild(ele151);
  ele150.appendChild(ele152);
  ele152.appendChild(ele153);
  ele152.appendChild(ele154);
  ele152.appendChild(ele155);
  ele152.appendChild(ele156);
  ele152.appendChild(ele157);
  ele152.appendChild(ele158);
  ele152.appendChild(ele159);
  // うぃ
  ele17.appendChild(ele160);
  ele160.appendChild(ele161);
  ele160.appendChild(ele162);
  ele162.appendChild(ele163);
  ele162.appendChild(ele164);
  ele162.appendChild(ele165);
  ele162.appendChild(ele166);
  ele162.appendChild(ele167);
  ele162.appendChild(ele168);
  ele162.appendChild(ele169);
  ele162.appendChild(ele170);
  ele162.appendChild(ele171);
  ele162.appendChild(ele172);
  ele162.appendChild(ele173);
  ele162.appendChild(ele174);
  ele162.appendChild(ele175);
  ele162.appendChild(ele176);
  // うぇ
  ele17.appendChild(ele177);
  ele177.appendChild(ele178);
  ele177.appendChild(ele179);
  ele179.appendChild(ele180);
  ele179.appendChild(ele181);
  ele179.appendChild(ele182);
  ele179.appendChild(ele183);
  ele179.appendChild(ele184);
  ele179.appendChild(ele185);
  ele179.appendChild(ele186);
  ele179.appendChild(ele187);
  ele179.appendChild(ele188);
  ele179.appendChild(ele189);
  ele179.appendChild(ele190);
  ele179.appendChild(ele191);
  ele179.appendChild(ele192);
  ele179.appendChild(ele193);
  // うぉ
  ele17.appendChild(ele194);
  ele194.appendChild(ele195);
  ele194.appendChild(ele196);
  ele196.appendChild(ele197);
  ele196.appendChild(ele198);
  ele196.appendChild(ele199);
  ele196.appendChild(ele200);
  ele196.appendChild(ele201);
  ele196.appendChild(ele202);
  ele196.appendChild(ele203);
  // ヴぁ
  ele17.appendChild(ele204);
  ele204.appendChild(ele205);
  ele204.appendChild(ele206);
  ele206.appendChild(ele207);
  ele206.appendChild(ele208);
  ele206.appendChild(ele209);
  // ヴゃ
  ele17.appendChild(ele210);
  ele210.appendChild(ele211);
  ele210.appendChild(ele212);
  ele212.appendChild(ele213);
  ele212.appendChild(ele214);
  ele212.appendChild(ele215);
  // ヴぃ
  ele17.appendChild(ele216);
  ele216.appendChild(ele217);
  ele216.appendChild(ele218);
  ele218.appendChild(ele219);
  ele218.appendChild(ele220);
  ele218.appendChild(ele221);
  ele218.appendChild(ele222);
  ele218.appendChild(ele223);
  ele218.appendChild(ele224);
  // ヴゃ
  ele17.appendChild(ele225);
  ele225.appendChild(ele226);
  ele225.appendChild(ele227);
  ele227.appendChild(ele228);
  ele227.appendChild(ele229);
  ele227.appendChild(ele230);
  // ヴぃ
  ele17.appendChild(ele231);
  ele231.appendChild(ele232);
  ele231.appendChild(ele233);
  ele233.appendChild(ele234);
  ele233.appendChild(ele235);
  ele233.appendChild(ele236);
  ele233.appendChild(ele237);
  ele233.appendChild(ele238);
  ele233.appendChild(ele239);
  // ヴぉ
  ele17.appendChild(ele240);
  ele240.appendChild(ele241);
  ele240.appendChild(ele242);
  ele242.appendChild(ele243);
  ele242.appendChild(ele244);
  ele242.appendChild(ele245);
  // ヴょ
  ele17.appendChild(ele246);
  ele246.appendChild(ele247);
  ele246.appendChild(ele248);
  ele248.appendChild(ele249);
  ele248.appendChild(ele250);
  ele248.appendChild(ele251);
  // きゃ
  ele17.appendChild(ele252);
  ele252.appendChild(ele253);
  ele252.appendChild(ele254);
  ele254.appendChild(ele255);
  ele254.appendChild(ele256);
  ele254.appendChild(ele257);
  // きぃ
  ele17.appendChild(ele258);
  ele258.appendChild(ele259);
  ele258.appendChild(ele260);
  ele260.appendChild(ele261);
  ele260.appendChild(ele262);
  ele260.appendChild(ele263);
  ele260.appendChild(ele264);
  ele260.appendChild(ele265);
  // きゃ
  ele17.appendChild(ele266);
  ele266.appendChild(ele267);
  ele266.appendChild(ele268);
  ele268.appendChild(ele269);
  ele268.appendChild(ele270);
  ele268.appendChild(ele271);
  // きぃ
  ele17.appendChild(ele272);
  ele272.appendChild(ele273);
  ele272.appendChild(ele274);
  ele274.appendChild(ele275);
  ele274.appendChild(ele276);
  ele274.appendChild(ele277);
  ele274.appendChild(ele278);
  ele274.appendChild(ele279);
  // きょ
  ele17.appendChild(ele280);
  ele280.appendChild(ele281);
  ele280.appendChild(ele282);
  ele282.appendChild(ele283);
  ele282.appendChild(ele284);
  ele282.appendChild(ele285);
  // ぎゃ
  ele17.appendChild(ele286);
  ele286.appendChild(ele287);
  ele286.appendChild(ele288);
  ele288.appendChild(ele289);
  ele288.appendChild(ele290);
  ele288.appendChild(ele291);
  // ぎぃ
  ele17.appendChild(ele292);
  ele292.appendChild(ele293);
  ele292.appendChild(ele294);
  ele294.appendChild(ele295);
  ele294.appendChild(ele296);
  ele294.appendChild(ele297);
  ele294.appendChild(ele298);
  ele294.appendChild(ele299);
  // ぎゃ
  ele17.appendChild(ele300);
  ele300.appendChild(ele301);
  ele300.appendChild(ele302);
  ele302.appendChild(ele303);
  ele302.appendChild(ele304);
  ele302.appendChild(ele305);
  // ぎぃ
  ele17.appendChild(ele306);
  ele306.appendChild(ele307);
  ele306.appendChild(ele308);
  ele308.appendChild(ele309);
  ele308.appendChild(ele310);
  ele308.appendChild(ele311);
  ele308.appendChild(ele312);
  ele308.appendChild(ele313);
  // ぎょ
  ele17.appendChild(ele314);
  ele314.appendChild(ele315);
  ele314.appendChild(ele316);
  ele316.appendChild(ele317);
  ele316.appendChild(ele318);
  ele316.appendChild(ele319);
  // くぁ
  ele17.appendChild(ele320);
  ele320.appendChild(ele321);
  ele320.appendChild(ele322);
  ele322.appendChild(ele323);
  ele322.appendChild(ele324);
  ele322.appendChild(ele325);
  ele322.appendChild(ele326);
  ele322.appendChild(ele327);
  ele322.appendChild(ele328);
  ele322.appendChild(ele329);
  ele322.appendChild(ele330);
  ele322.appendChild(ele331);
  // くぃ
  ele17.appendChild(ele332);
  ele332.appendChild(ele333);
  ele332.appendChild(ele334);
  ele334.appendChild(ele335);
  ele334.appendChild(ele336);
  ele334.appendChild(ele337);
  ele334.appendChild(ele338);
  ele334.appendChild(ele339);
  ele334.appendChild(ele340);
  ele334.appendChild(ele341);
  ele334.appendChild(ele342);
  ele334.appendChild(ele343);
  ele334.appendChild(ele344);
  ele334.appendChild(ele345);
  ele334.appendChild(ele346);
  ele334.appendChild(ele347);
  ele334.appendChild(ele348);
  ele334.appendChild(ele349);
  // くぅ
  ele17.appendChild(ele350);
  ele350.appendChild(ele351);
  ele350.appendChild(ele352);
  ele352.appendChild(ele353);
  ele352.appendChild(ele354);
  ele352.appendChild(ele355);
  ele352.appendChild(ele356);
  ele352.appendChild(ele357);
  ele352.appendChild(ele358);
  ele352.appendChild(ele359);
  ele352.appendChild(ele360);
  // くぇ
  ele17.appendChild(ele361);
  ele361.appendChild(ele362);
  ele361.appendChild(ele363);
  ele363.appendChild(ele364);
  ele363.appendChild(ele365);
  ele363.appendChild(ele366);
  ele363.appendChild(ele367);
  ele363.appendChild(ele368);
  ele363.appendChild(ele369);
  ele363.appendChild(ele370);
  ele363.appendChild(ele371);
  ele363.appendChild(ele372);
  ele363.appendChild(ele373);
  ele363.appendChild(ele374);
  ele363.appendChild(ele375);
  ele363.appendChild(ele376);
  ele363.appendChild(ele377);
  ele363.appendChild(ele378);
  // くぉ
  ele17.appendChild(ele379);
  ele379.appendChild(ele380);
  ele379.appendChild(ele381);
  ele381.appendChild(ele382);
  ele381.appendChild(ele383);
  ele381.appendChild(ele384);
  ele381.appendChild(ele385);
  ele381.appendChild(ele386);
  ele381.appendChild(ele387);
  ele381.appendChild(ele388);
  ele381.appendChild(ele389);
  ele381.appendChild(ele390);
  // ぐぁ
  ele17.appendChild(ele391);
  ele391.appendChild(ele392);
  ele391.appendChild(ele393);
  ele393.appendChild(ele394);
  ele393.appendChild(ele395);
  ele393.appendChild(ele396);
  // ぐぃ
  ele17.appendChild(ele397);
  ele397.appendChild(ele398);
  ele397.appendChild(ele399);
  ele399.appendChild(ele400);
  ele399.appendChild(ele401);
  ele399.appendChild(ele402);
  ele399.appendChild(ele403);
  ele399.appendChild(ele404);
  // ぐぅ
  ele17.appendChild(ele405);
  ele405.appendChild(ele406);
  ele405.appendChild(ele407);
  ele407.appendChild(ele408);
  ele407.appendChild(ele409);
  ele407.appendChild(ele410);
  // ぐぇ
  ele17.appendChild(ele411);
  ele411.appendChild(ele412);
  ele411.appendChild(ele413);
  ele413.appendChild(ele414);
  ele413.appendChild(ele415);
  ele413.appendChild(ele416);
  ele413.appendChild(ele417);
  ele413.appendChild(ele418);
  // ぐぉ
  ele17.appendChild(ele419);
  ele419.appendChild(ele420);
  ele419.appendChild(ele421);
  ele421.appendChild(ele422);
  ele421.appendChild(ele423);
  ele421.appendChild(ele424);
  // しゃ
  ele17.appendChild(ele425);
  ele425.appendChild(ele426);
  ele425.appendChild(ele427);
  ele427.appendChild(ele428);
  ele427.appendChild(ele429);
  ele427.appendChild(ele430);
  ele427.appendChild(ele431);
  ele427.appendChild(ele432);
  ele427.appendChild(ele433);
  ele427.appendChild(ele434);
  ele427.appendChild(ele435);
  // しぃ
  ele17.appendChild(ele436);
  ele436.appendChild(ele437);
  ele436.appendChild(ele438);
  ele438.appendChild(ele439);
  ele438.appendChild(ele440);
  ele438.appendChild(ele441);
  ele438.appendChild(ele442);
  ele438.appendChild(ele443);
  ele438.appendChild(ele444);
  ele438.appendChild(ele445);
  ele438.appendChild(ele446);
  ele438.appendChild(ele447);
  ele438.appendChild(ele448);
  ele438.appendChild(ele449);
  ele438.appendChild(ele450);
  ele438.appendChild(ele451);
  // しゅ
  ele17.appendChild(ele452);
  ele452.appendChild(ele453);
  ele452.appendChild(ele454);
  ele454.appendChild(ele455);
  ele454.appendChild(ele456);
  ele454.appendChild(ele457);
  ele454.appendChild(ele458);
  ele454.appendChild(ele459);
  ele454.appendChild(ele460);
  ele454.appendChild(ele461);
  ele454.appendChild(ele462);
  // しぇ
  ele17.appendChild(ele463);
  ele463.appendChild(ele464);
  ele463.appendChild(ele465);
  ele465.appendChild(ele466);
  ele465.appendChild(ele467);
  ele465.appendChild(ele468);
  ele465.appendChild(ele469);
  ele465.appendChild(ele470);
  ele465.appendChild(ele471);
  ele465.appendChild(ele472);
  ele465.appendChild(ele473);
  ele465.appendChild(ele474);
  ele465.appendChild(ele475);
  ele465.appendChild(ele476);
  ele465.appendChild(ele477);
  ele465.appendChild(ele478);
  ele465.appendChild(ele479);
  // しょ
  ele17.appendChild(ele480);
  ele480.appendChild(ele481);
  ele480.appendChild(ele482);
  ele482.appendChild(ele483);
  ele482.appendChild(ele484);
  ele482.appendChild(ele485);
  ele482.appendChild(ele486);
  ele482.appendChild(ele487);
  ele482.appendChild(ele488);
  ele482.appendChild(ele489);
  ele482.appendChild(ele490);
  // じゃ
  ele17.appendChild(ele491);
  ele491.appendChild(ele492);
  ele491.appendChild(ele493);
  ele493.appendChild(ele494);
  ele493.appendChild(ele495);
  ele493.appendChild(ele496);
  ele493.appendChild(ele497);
  ele493.appendChild(ele498);
  ele493.appendChild(ele499);
  ele493.appendChild(ele500);
  // じぃ
  ele17.appendChild(ele501);
  ele501.appendChild(ele502);
  ele501.appendChild(ele503);
  ele503.appendChild(ele504);
  ele503.appendChild(ele505);
  ele503.appendChild(ele506);
  ele503.appendChild(ele507);
  ele503.appendChild(ele508);
  ele503.appendChild(ele509);
  ele503.appendChild(ele510);
  ele503.appendChild(ele511);
  ele503.appendChild(ele512);
  ele503.appendChild(ele513);
  // じゅ
  ele17.appendChild(ele514);
  ele514.appendChild(ele515);
  ele514.appendChild(ele516);
  ele516.appendChild(ele517);
  ele516.appendChild(ele518);
  ele516.appendChild(ele519);
  ele516.appendChild(ele520);
  ele516.appendChild(ele521);
  ele516.appendChild(ele522);
  ele516.appendChild(ele523);
  // じぇ
  ele17.appendChild(ele524);
  ele524.appendChild(ele525);
  ele524.appendChild(ele526);
  ele526.appendChild(ele527);
  ele526.appendChild(ele528);
  ele526.appendChild(ele529);
  ele526.appendChild(ele530);
  ele526.appendChild(ele531);
  ele526.appendChild(ele532);
  ele526.appendChild(ele533);
  ele526.appendChild(ele534);
  ele526.appendChild(ele535);
  ele526.appendChild(ele536);
  ele526.appendChild(ele537);
  // じょ
  ele17.appendChild(ele538);
  ele538.appendChild(ele539);
  ele538.appendChild(ele540);
  ele540.appendChild(ele541);
  ele540.appendChild(ele542);
  ele540.appendChild(ele543);
  ele540.appendChild(ele544);
  ele540.appendChild(ele545);
  ele540.appendChild(ele546);
  ele540.appendChild(ele547);
  // すぁ
  ele17.appendChild(ele548);
  ele548.appendChild(ele549);
  ele548.appendChild(ele550);
  ele550.appendChild(ele551);
  ele550.appendChild(ele552);
  ele550.appendChild(ele553);
  // すぃ
  ele17.appendChild(ele554);
  ele554.appendChild(ele555);
  ele554.appendChild(ele556);
  ele556.appendChild(ele557);
  ele556.appendChild(ele558);
  ele556.appendChild(ele559);
  ele556.appendChild(ele560);
  ele556.appendChild(ele561);
  // すぅ
  ele17.appendChild(ele562);
  ele562.appendChild(ele563);
  ele562.appendChild(ele564);
  ele564.appendChild(ele565);
  ele564.appendChild(ele566);
  ele564.appendChild(ele567);
  // すぇ
  ele17.appendChild(ele568);
  ele568.appendChild(ele569);
  ele568.appendChild(ele570);
  ele570.appendChild(ele571);
  ele570.appendChild(ele572);
  ele570.appendChild(ele573);
  ele570.appendChild(ele574);
  ele570.appendChild(ele575);
  // すぉ
  ele17.appendChild(ele576);
  ele576.appendChild(ele577);
  ele576.appendChild(ele578);
  ele578.appendChild(ele579);
  ele578.appendChild(ele580);
  ele578.appendChild(ele581);
  // ずぁ
  ele17.appendChild(ele582);
  ele582.appendChild(ele583);
  ele582.appendChild(ele584);
  ele584.appendChild(ele585);
  ele584.appendChild(ele586);
  ele584.appendChild(ele587);
  // ずぃ
  ele17.appendChild(ele588);
  ele588.appendChild(ele589);
  ele588.appendChild(ele590);
  ele590.appendChild(ele591);
  ele590.appendChild(ele592);
  ele590.appendChild(ele593);
  ele590.appendChild(ele594);
  ele590.appendChild(ele595);
  // ずぅ
  ele17.appendChild(ele596);
  ele596.appendChild(ele597);
  ele596.appendChild(ele598);
  ele598.appendChild(ele599);
  ele598.appendChild(ele600);
  ele598.appendChild(ele601);
  // ずぇ
  ele17.appendChild(ele602);
  ele602.appendChild(ele603);
  ele602.appendChild(ele604);
  ele604.appendChild(ele605);
  ele604.appendChild(ele606);
  ele604.appendChild(ele607);
  ele604.appendChild(ele608);
  ele604.appendChild(ele609);
  // ずぉ
  ele17.appendChild(ele610);
  ele610.appendChild(ele611);
  ele610.appendChild(ele612);
  ele612.appendChild(ele613);
  ele612.appendChild(ele614);
  ele612.appendChild(ele615);
  // ちゃ
  ele17.appendChild(ele616);
  ele616.appendChild(ele617);
  ele616.appendChild(ele618);
  ele618.appendChild(ele619);
  ele618.appendChild(ele620);
  ele618.appendChild(ele621);
  ele618.appendChild(ele622);
  ele618.appendChild(ele623);
  ele618.appendChild(ele624);
  ele618.appendChild(ele625);
  // ちぃ
  ele17.appendChild(ele626);
  ele626.appendChild(ele627);
  ele626.appendChild(ele628);
  ele628.appendChild(ele629);
  ele628.appendChild(ele630);
  ele628.appendChild(ele631);
  ele628.appendChild(ele632);
  ele628.appendChild(ele633);
  ele628.appendChild(ele634);
  ele628.appendChild(ele635);
  ele628.appendChild(ele636);
  ele628.appendChild(ele637);
  ele628.appendChild(ele638);
  // ちゅ
  ele17.appendChild(ele639);
  ele639.appendChild(ele640);
  ele639.appendChild(ele641);
  ele641.appendChild(ele642);
  ele641.appendChild(ele643);
  ele641.appendChild(ele644);
  ele641.appendChild(ele645);
  ele641.appendChild(ele646);
  ele641.appendChild(ele647);
  ele641.appendChild(ele648);
  // ちぇ
  ele17.appendChild(ele649);
  ele649.appendChild(ele650);
  ele649.appendChild(ele651);
  ele651.appendChild(ele652);
  ele651.appendChild(ele653);
  ele651.appendChild(ele654);
  ele651.appendChild(ele655);
  ele651.appendChild(ele656);
  ele651.appendChild(ele657);
  ele651.appendChild(ele658);
  ele651.appendChild(ele659);
  ele651.appendChild(ele660);
  ele651.appendChild(ele661);
  ele651.appendChild(ele662);
  // ちょ
  ele17.appendChild(ele663);
  ele663.appendChild(ele664);
  ele663.appendChild(ele665);
  ele665.appendChild(ele666);
  ele665.appendChild(ele667);
  ele665.appendChild(ele668);
  ele665.appendChild(ele669);
  ele665.appendChild(ele670);
  ele665.appendChild(ele671);
  ele665.appendChild(ele672);
  // ぢゃ
  ele17.appendChild(ele673);
  ele673.appendChild(ele674);
  ele673.appendChild(ele675);
  ele675.appendChild(ele676);
  ele675.appendChild(ele677);
  ele675.appendChild(ele678);
  // ぢぃ
  ele17.appendChild(ele679);
  ele679.appendChild(ele680);
  ele679.appendChild(ele681);
  ele681.appendChild(ele682);
  ele681.appendChild(ele683);
  ele681.appendChild(ele684);
  ele681.appendChild(ele685);
  ele681.appendChild(ele686);
  // ぢゅ
  ele17.appendChild(ele687);
  ele687.appendChild(ele688);
  ele687.appendChild(ele689);
  ele689.appendChild(ele690);
  ele689.appendChild(ele691);
  ele689.appendChild(ele692);
  // ぢぇ
  ele17.appendChild(ele693);
  ele693.appendChild(ele694);
  ele693.appendChild(ele695);
  ele695.appendChild(ele696);
  ele695.appendChild(ele697);
  ele695.appendChild(ele698);
  ele695.appendChild(ele699);
  ele695.appendChild(ele700);
  // ぢょ
  ele17.appendChild(ele701);
  ele701.appendChild(ele702);
  ele701.appendChild(ele703);
  ele703.appendChild(ele704);
  ele703.appendChild(ele705);
  ele703.appendChild(ele706);
  // つぁ
  ele17.appendChild(ele707);
  ele707.appendChild(ele708);
  ele707.appendChild(ele709);
  ele709.appendChild(ele710);
  ele709.appendChild(ele711);
  ele709.appendChild(ele712);
  ele709.appendChild(ele713);
  ele709.appendChild(ele714);
  // つぃ
  ele17.appendChild(ele715);
  ele715.appendChild(ele716);
  ele715.appendChild(ele717);
  ele717.appendChild(ele718);
  ele717.appendChild(ele719);
  ele717.appendChild(ele720);
  ele717.appendChild(ele721);
  ele717.appendChild(ele722);
  ele717.appendChild(ele723);
  ele717.appendChild(ele724);
  ele717.appendChild(ele725);
  ele717.appendChild(ele726);
  // つぇ
  ele17.appendChild(ele727);
  ele727.appendChild(ele728);
  ele727.appendChild(ele729);
  ele729.appendChild(ele730);
  ele729.appendChild(ele731);
  ele729.appendChild(ele732);
  ele729.appendChild(ele733);
  ele729.appendChild(ele734);
  ele729.appendChild(ele735);
  ele729.appendChild(ele736);
  ele729.appendChild(ele737);
  ele729.appendChild(ele738);
  // つぉ
  ele17.appendChild(ele739);
  ele739.appendChild(ele740);
  ele739.appendChild(ele741);
  ele741.appendChild(ele742);
  ele741.appendChild(ele743);
  ele741.appendChild(ele744);
  ele741.appendChild(ele745);
  ele741.appendChild(ele746);
  // てゃ
  ele17.appendChild(ele747);
  ele747.appendChild(ele748);
  ele747.appendChild(ele749);
  ele749.appendChild(ele750);
  ele749.appendChild(ele751);
  ele749.appendChild(ele752);
  // てぃ
  ele17.appendChild(ele753);
  ele753.appendChild(ele754);
  ele753.appendChild(ele755);
  ele755.appendChild(ele756);
  ele755.appendChild(ele757);
  ele755.appendChild(ele758);
  ele755.appendChild(ele759);
  ele755.appendChild(ele760);
  // てゅ
  ele17.appendChild(ele761);
  ele761.appendChild(ele762);
  ele761.appendChild(ele763);
  ele763.appendChild(ele764);
  ele763.appendChild(ele765);
  ele763.appendChild(ele766);
  // てぇ
  ele17.appendChild(ele767);
  ele767.appendChild(ele768);
  ele767.appendChild(ele769);
  ele769.appendChild(ele770);
  ele769.appendChild(ele771);
  ele769.appendChild(ele772);
  ele769.appendChild(ele773);
  ele769.appendChild(ele774);
  // てょ
  ele17.appendChild(ele775);
  ele775.appendChild(ele776);
  ele775.appendChild(ele777);
  ele777.appendChild(ele778);
  ele777.appendChild(ele779);
  ele777.appendChild(ele780);
  // でゃ
  ele17.appendChild(ele781);
  ele781.appendChild(ele782);
  ele781.appendChild(ele783);
  ele783.appendChild(ele784);
  ele783.appendChild(ele785);
  ele783.appendChild(ele786);
  // でぃ
  ele17.appendChild(ele787);
  ele787.appendChild(ele788);
  ele787.appendChild(ele789);
  ele789.appendChild(ele790);
  ele789.appendChild(ele791);
  ele789.appendChild(ele792);
  ele789.appendChild(ele793);
  ele789.appendChild(ele794);
  // でゅ
  ele17.appendChild(ele795);
  ele795.appendChild(ele796);
  ele795.appendChild(ele797);
  ele797.appendChild(ele798);
  ele797.appendChild(ele799);
  ele797.appendChild(ele800);
  // でぇ
  ele17.appendChild(ele801);
  ele801.appendChild(ele802);
  ele801.appendChild(ele803);
  ele803.appendChild(ele804);
  ele803.appendChild(ele805);
  ele803.appendChild(ele806);
  ele803.appendChild(ele807);
  ele803.appendChild(ele808);
  // でょ
  ele17.appendChild(ele809);
  ele809.appendChild(ele810);
  ele809.appendChild(ele811);
  ele811.appendChild(ele812);
  ele811.appendChild(ele813);
  ele811.appendChild(ele814);
  // とぁ
  ele17.appendChild(ele815);
  ele815.appendChild(ele816);
  ele815.appendChild(ele817);
  ele817.appendChild(ele818);
  ele817.appendChild(ele819);
  ele817.appendChild(ele820);
  // とぃ
  ele17.appendChild(ele821);
  ele821.appendChild(ele822);
  ele821.appendChild(ele823);
  ele823.appendChild(ele824);
  ele823.appendChild(ele825);
  ele823.appendChild(ele826);
  ele823.appendChild(ele827);
  ele823.appendChild(ele828);
  // とぅ
  ele17.appendChild(ele829);
  ele829.appendChild(ele830);
  ele829.appendChild(ele831);
  ele831.appendChild(ele832);
  ele831.appendChild(ele833);
  ele831.appendChild(ele834);
  // とぇ
  ele17.appendChild(ele835);
  ele835.appendChild(ele836);
  ele835.appendChild(ele837);
  ele837.appendChild(ele838);
  ele837.appendChild(ele839);
  ele837.appendChild(ele840);
  ele837.appendChild(ele841);
  ele837.appendChild(ele842);
  // とぉ
  ele17.appendChild(ele843);
  ele843.appendChild(ele844);
  ele843.appendChild(ele845);
  ele845.appendChild(ele846);
  ele845.appendChild(ele847);
  ele845.appendChild(ele848);
  // どぁ
  ele17.appendChild(ele849);
  ele849.appendChild(ele850);
  ele849.appendChild(ele851);
  ele851.appendChild(ele852);
  ele851.appendChild(ele853);
  ele851.appendChild(ele854);
  // どぃ
  ele17.appendChild(ele855);
  ele855.appendChild(ele856);
  ele855.appendChild(ele857);
  ele857.appendChild(ele858);
  ele857.appendChild(ele859);
  ele857.appendChild(ele860);
  ele857.appendChild(ele861);
  ele857.appendChild(ele862);
  // どぅ
  ele17.appendChild(ele863);
  ele863.appendChild(ele864);
  ele863.appendChild(ele865);
  ele865.appendChild(ele866);
  ele865.appendChild(ele867);
  ele865.appendChild(ele868);
  // どぇ
  ele17.appendChild(ele869);
  ele869.appendChild(ele870);
  ele869.appendChild(ele871);
  ele871.appendChild(ele872);
  ele871.appendChild(ele873);
  ele871.appendChild(ele874);
  ele871.appendChild(ele875);
  ele871.appendChild(ele876);
  // どぉ
  ele17.appendChild(ele877);
  ele877.appendChild(ele878);
  ele877.appendChild(ele879);
  ele879.appendChild(ele880);
  ele879.appendChild(ele881);
  ele879.appendChild(ele882);
  // にゃ
  ele17.appendChild(ele883);
  ele883.appendChild(ele884);
  ele883.appendChild(ele885);
  ele885.appendChild(ele886);
  ele885.appendChild(ele887);
  ele885.appendChild(ele888);
  // にぃ
  ele17.appendChild(ele889);
  ele889.appendChild(ele890);
  ele889.appendChild(ele891);
  ele891.appendChild(ele892);
  ele891.appendChild(ele893);
  ele891.appendChild(ele894);
  ele891.appendChild(ele895);
  ele891.appendChild(ele896);
  // にゅ
  ele17.appendChild(ele897);
  ele897.appendChild(ele898);
  ele897.appendChild(ele899);
  ele899.appendChild(ele900);
  ele899.appendChild(ele901);
  ele899.appendChild(ele902);
  // にぇ
  ele17.appendChild(ele903);
  ele903.appendChild(ele904);
  ele903.appendChild(ele905);
  ele905.appendChild(ele906);
  ele905.appendChild(ele907);
  ele905.appendChild(ele908);
  ele905.appendChild(ele909);
  ele905.appendChild(ele910);
  // にょ
  ele17.appendChild(ele911);
  ele911.appendChild(ele912);
  ele911.appendChild(ele913);
  ele913.appendChild(ele914);
  ele913.appendChild(ele915);
  ele913.appendChild(ele916);
  // ひゃ
  ele17.appendChild(ele917);
  ele917.appendChild(ele918);
  ele917.appendChild(ele919);
  ele919.appendChild(ele920);
  ele919.appendChild(ele921);
  ele919.appendChild(ele922);
  // ひぃ
  ele17.appendChild(ele923);
  ele923.appendChild(ele924);
  ele923.appendChild(ele925);
  ele925.appendChild(ele926);
  ele925.appendChild(ele927);
  ele925.appendChild(ele928);
  ele925.appendChild(ele929);
  ele925.appendChild(ele930);
  // ひゅ
  ele17.appendChild(ele931);
  ele931.appendChild(ele932);
  ele931.appendChild(ele933);
  ele933.appendChild(ele934);
  ele933.appendChild(ele935);
  ele933.appendChild(ele936);
  // ひぇ
  ele17.appendChild(ele937);
  ele937.appendChild(ele938);
  ele937.appendChild(ele939);
  ele939.appendChild(ele940);
  ele939.appendChild(ele941);
  ele939.appendChild(ele942);
  ele939.appendChild(ele943);
  ele939.appendChild(ele944);
  // ひょ
  ele17.appendChild(ele945);
  ele945.appendChild(ele946);
  ele945.appendChild(ele947);
  ele947.appendChild(ele948);
  ele947.appendChild(ele949);
  ele947.appendChild(ele950);
  // びゃ
  ele17.appendChild(ele951);
  ele951.appendChild(ele952);
  ele951.appendChild(ele953);
  ele953.appendChild(ele954);
  ele953.appendChild(ele955);
  ele953.appendChild(ele956);
  // びぃ
  ele17.appendChild(ele957);
  ele957.appendChild(ele958);
  ele957.appendChild(ele959);
  ele959.appendChild(ele960);
  ele959.appendChild(ele961);
  ele959.appendChild(ele962);
  ele959.appendChild(ele963);
  ele959.appendChild(ele964);
  // びゅ
  ele17.appendChild(ele965);
  ele965.appendChild(ele966);
  ele965.appendChild(ele967);
  ele967.appendChild(ele968);
  ele967.appendChild(ele969);
  ele967.appendChild(ele970);
  // びぇ
  ele17.appendChild(ele971);
  ele971.appendChild(ele972);
  ele971.appendChild(ele973);
  ele973.appendChild(ele974);
  ele973.appendChild(ele975);
  ele973.appendChild(ele976);
  ele973.appendChild(ele977);
  ele973.appendChild(ele978);
  // びょ
  ele17.appendChild(ele979);
  ele979.appendChild(ele980);
  ele979.appendChild(ele981);
  ele981.appendChild(ele982);
  ele981.appendChild(ele983);
  ele981.appendChild(ele984);
  // ぴゃ
  ele17.appendChild(ele985);
  ele985.appendChild(ele986);
  ele985.appendChild(ele987);
  ele987.appendChild(ele988);
  ele987.appendChild(ele989);
  ele987.appendChild(ele990);
  // ぴぃ
  ele17.appendChild(ele991);
  ele991.appendChild(ele992);
  ele991.appendChild(ele993);
  ele993.appendChild(ele994);
  ele993.appendChild(ele995);
  ele993.appendChild(ele996);
  ele993.appendChild(ele997);
  ele993.appendChild(ele998);
  // ぴゅ
  ele17.appendChild(ele999);
  ele999.appendChild(ele1000);
  ele999.appendChild(ele1001);
  ele1001.appendChild(ele1002);
  ele1001.appendChild(ele1003);
  ele1001.appendChild(ele1004);
  // ぴぇ
  ele17.appendChild(ele1005);
  ele1005.appendChild(ele1006);
  ele1005.appendChild(ele1007);
  ele1007.appendChild(ele1008);
  ele1007.appendChild(ele1009);
  ele1007.appendChild(ele1010);
  ele1007.appendChild(ele1011);
  ele1007.appendChild(ele1012);
  // ぴょ
  ele17.appendChild(ele1013);
  ele1013.appendChild(ele1014);
  ele1013.appendChild(ele1015);
  ele1015.appendChild(ele1016);
  ele1015.appendChild(ele1017);
  ele1015.appendChild(ele1018);
  // ふぁ
  ele17.appendChild(ele1019);
  ele1019.appendChild(ele1020);
  ele1019.appendChild(ele1021);
  ele1021.appendChild(ele1022);
  ele1021.appendChild(ele1023);
  ele1021.appendChild(ele1024);
  ele1021.appendChild(ele1025);
  ele1021.appendChild(ele1026);
  ele1021.appendChild(ele1027);
  ele1021.appendChild(ele1028);
  // ふゃ
  ele17.appendChild(ele1029);
  ele1029.appendChild(ele1030);
  ele1029.appendChild(ele1031);
  ele1031.appendChild(ele1032);
  ele1031.appendChild(ele1033);
  ele1031.appendChild(ele1034);
  ele1031.appendChild(ele1035);
  ele1031.appendChild(ele1036);
  // ふぃ
  ele17.appendChild(ele1037);
  ele1037.appendChild(ele1038);
  ele1037.appendChild(ele1039);
  ele1039.appendChild(ele1040);
  ele1039.appendChild(ele1041);
  ele1039.appendChild(ele1042);
  ele1039.appendChild(ele1043);
  ele1039.appendChild(ele1044);
  ele1039.appendChild(ele1045);
  ele1039.appendChild(ele1046);
  ele1039.appendChild(ele1047);
  ele1039.appendChild(ele1048);
  ele1039.appendChild(ele1049);
  ele1039.appendChild(ele1050);
  ele1039.appendChild(ele1051);
  // ふぅ
  ele17.appendChild(ele1052);
  ele1052.appendChild(ele1053);
  ele1052.appendChild(ele1054);
  ele1054.appendChild(ele1055);
  ele1054.appendChild(ele1056);
  ele1054.appendChild(ele1057);
  ele1054.appendChild(ele1058);
  ele1054.appendChild(ele1059);
  // ふゅ
  ele17.appendChild(ele1060);
  ele1060.appendChild(ele1061);
  ele1060.appendChild(ele1062);
  ele1062.appendChild(ele1063);
  ele1062.appendChild(ele1064);
  ele1062.appendChild(ele1065);
  ele1062.appendChild(ele1066);
  ele1062.appendChild(ele1067);
  ele1062.appendChild(ele1068);
  // ふぇ
  ele17.appendChild(ele1069);
  ele1069.appendChild(ele1070);
  ele1069.appendChild(ele1071);
  ele1071.appendChild(ele1072);
  ele1071.appendChild(ele1073);
  ele1071.appendChild(ele1074);
  ele1071.appendChild(ele1075);
  ele1071.appendChild(ele1076);
  ele1071.appendChild(ele1077);
  ele1071.appendChild(ele1078);
  ele1071.appendChild(ele1079);
  ele1071.appendChild(ele1080);
  ele1071.appendChild(ele1081);
  ele1071.appendChild(ele1082);
  ele1071.appendChild(ele1083);
  // ふぉ
  ele17.appendChild(ele1084);
  ele1084.appendChild(ele1085);
  ele1084.appendChild(ele1086);
  ele1086.appendChild(ele1087);
  ele1086.appendChild(ele1088);
  ele1086.appendChild(ele1089);
  ele1086.appendChild(ele1090);
  ele1086.appendChild(ele1091);
  ele1086.appendChild(ele1092);
  ele1086.appendChild(ele1093);
  // ふょ
  ele17.appendChild(ele1094);
  ele1094.appendChild(ele1095);
  ele1094.appendChild(ele1096);
  ele1096.appendChild(ele1097);
  ele1096.appendChild(ele1098);
  ele1096.appendChild(ele1099);
  ele1096.appendChild(ele1100);
  ele1096.appendChild(ele1101);
  // みゃ
  ele17.appendChild(ele1102);
  ele1102.appendChild(ele1103);
  ele1102.appendChild(ele1104);
  ele1104.appendChild(ele1105);
  ele1104.appendChild(ele1106);
  ele1104.appendChild(ele1107);
  // みぃ
  ele17.appendChild(ele1108);
  ele1108.appendChild(ele1109);
  ele1108.appendChild(ele1110);
  ele1110.appendChild(ele1111);
  ele1110.appendChild(ele1112);
  ele1110.appendChild(ele1113);
  ele1110.appendChild(ele1114);
  ele1110.appendChild(ele1115);
  // みゅ
  ele17.appendChild(ele1116);
  ele1116.appendChild(ele1117);
  ele1116.appendChild(ele1118);
  ele1118.appendChild(ele1119);
  ele1118.appendChild(ele1120);
  ele1118.appendChild(ele1121);
  // みぇ
  ele17.appendChild(ele1122);
  ele1122.appendChild(ele1123);
  ele1122.appendChild(ele1124);
  ele1124.appendChild(ele1125);
  ele1124.appendChild(ele1126);
  ele1124.appendChild(ele1127);
  ele1124.appendChild(ele1128);
  ele1124.appendChild(ele1129);
  // みょ
  ele17.appendChild(ele1130);
  ele1130.appendChild(ele1131);
  ele1130.appendChild(ele1132);
  ele1132.appendChild(ele1133);
  ele1132.appendChild(ele1134);
  ele1132.appendChild(ele1135);
  // りゃ
  ele17.appendChild(ele1136);
  ele1136.appendChild(ele1137);
  ele1136.appendChild(ele1138);
  ele1138.appendChild(ele1139);
  ele1138.appendChild(ele1140);
  ele1138.appendChild(ele1141);
  // りぃ
  ele17.appendChild(ele1142);
  ele1142.appendChild(ele1143);
  ele1142.appendChild(ele1144);
  ele1144.appendChild(ele1145);
  ele1144.appendChild(ele1146);
  ele1144.appendChild(ele1147);
  ele1144.appendChild(ele1148);
  ele1144.appendChild(ele1149);
  // りゅ
  ele17.appendChild(ele1150);
  ele1150.appendChild(ele1151);
  ele1150.appendChild(ele1152);
  ele1152.appendChild(ele1153);
  ele1152.appendChild(ele1154);
  ele1152.appendChild(ele1155);
  // りぇ
  ele17.appendChild(ele1156);
  ele1156.appendChild(ele1157);
  ele1156.appendChild(ele1158);
  ele1158.appendChild(ele1159);
  ele1158.appendChild(ele1160);
  ele1158.appendChild(ele1161);
  ele1158.appendChild(ele1162);
  ele1158.appendChild(ele1163);
  // りょ
  ele17.appendChild(ele1164);
  ele1164.appendChild(ele1165);
  ele1164.appendChild(ele1166);
  ele1166.appendChild(ele1167);
  ele1166.appendChild(ele1168);
  ele1166.appendChild(ele1169);
  ele6.addEventListener("click", async () => {
    inputtype = document.querySelector('input[name="inputtype"]:checked').value;
    if (!ele5.value) {
      alert("出題数を入力してください");
    } else if (ele5.value > 10000 || ele5.value <= 0) {
      alert("出題数は1~10000にしてください");
    } else if (org.checked && !ele3.files.length) {
      alert("ファイルを選択してください");
    } else if (
      org.checked &&
      ele3.files[0].name.slice(ele3.files[0].name.indexOf(".") + 1) !== "txt"
    ) {
      alert("txtファイルを選択してください");
    } else if (ety.checked && !etyWordsList.includes(wrds.value)) {
      alert("ワードを選択してください");
    } else {
      times = Number(ele5.value)
      basetimes = times
      if (org.checked) {
        sendSentencesData(d_S).then((result) => {
          sentences = result;
          mode = "original";
          console.log(sentences)
          words = sortWords(sentences, ele5.value);

          if (inputtype === "roma") {
            words_for_display = wordsForDisplay(words);
          }
          if (inputtype === "kana") {
            words_for_display = Object.assign({}, words);
            words.hiragana = signOptimization(words.hiragana, true);
            words_for_display.hiragana = signOptimization(
              words_for_display.hiragana,
              false
            );
          }
        });
      }
      if (ety.checked) {
        mode = "etyping";
        const settingInfo = etyModeSetting(wrds.value);
        if (inputtype === "roma") {
          words = await generateEtyWordsData(settingInfo, ele5.value);
          words_for_display = wordsForDisplay(words);
        }
        if (inputtype === "kana") {
          words_for_display = await generateEtyWordsData(
            settingInfo,
            ele5.value,
            false
          );
          words = Object.assign({}, words_for_display);
          words.hiragana = signOptimization(words_for_display.hiragana, true);
        }
      }
      console.log(words, words_for_display);
      ele1.remove();
      countDown();
    }
  });
  ele17.addEventListener("change", (e) => settingSpell(e));
  div.addEventListener("change", (e) => {
    if (e.target.value === "original") {
      t.className = "hidden";
      ele3.disabled = false;
    }
    if (e.target.value === "e-typing") {
      t.className = "visible";
      ele3.disabled = true;
    }
  });
}

function countDown() {
  const ele1 = document.createElement("div");
  const ele2 = document.createElement("h1");
  ele1.id = "countdown";
  ele2.id = "text";
  ele2.innerHTML = "スペースを押してください";
  parent.insertBefore(ele1, base.nextSibling);
  ele1.appendChild(ele2);
  document.addEventListener("keydown", function startEvent(e) {
    if (e.key === " ") {
      document.removeEventListener("keydown", startEvent);
      ele2.innerHTML = "3";
      let num = 3;
      const counter = setInterval(() => {
        num--;
        ele2.innerHTML = num;
        if (num === 0) {
          clearInterval(counter);
          ele1.remove();
          game();
        }
      }, 1000);
    }
  });
}

function game() {
  if (inputtype === "roma") {
    const ele1 = document.createElement("div");
    const ele2 = document.createElement("h1");
    const ele3 = document.createElement("h1");
    const ele4 = document.createElement("h2");
    ele1.id = "words";
    ele2.id = "kanji";
    ele3.id = "hiragana";
    ele4.id = "roma";
    if (isEN) {
      ele3.className = "hidden";
    }
    ele2.innerHTML = words_for_display.kanji[0];
    ele3.innerHTML = words_for_display.hiragana[0];
    ele4.innerHTML = words_for_display.roma[0];
    parent.insertBefore(ele1, base.nextSibling);
    ele1.appendChild(ele2);
    ele1.appendChild(ele3);
    ele1.appendChild(ele4);
    main();
  }
  if (inputtype === "kana") {
    const ele1 = document.createElement("div");
    const ele2 = document.createElement("h1");
    const ele3 = document.createElement("h1");
    ele1.id = "words";
    ele2.id = "kanji";
    ele3.id = "hiragana";
    ele2.innerHTML = words_for_display.kanji[0];
    ele3.innerHTML = words_for_display.hiragana[0];
    parent.insertBefore(ele1, base.nextSibling);
    ele1.appendChild(ele2);
    ele1.appendChild(ele3);
    main();
  }
}

function displayWords(dic) {
  if (inputtype === "roma") {
    const ele1 = document.getElementById("kanji");
    const ele2 = document.getElementById("hiragana");
    const ele3 = document.getElementById("roma");
    ele1.innerHTML = dic.kanji;
    ele2.innerHTML = dic.hiragana;
    ele3.innerHTML = dic.roma;
  }
  if (inputtype === "kana") {
    const ele1 = document.getElementById("kanji");
    const ele2 = document.getElementById("hiragana");
    ele1.innerHTML = dic.kanji;
    ele2.innerHTML = dic.hiragana;
  }
}

function result(time, typed, miss, accuracy, kpm, rkpm, initvel, score, typedArr, allTypedArr, initVelArr, kpmArr, rkpmArr, missArr, missDataArr) {
  const result = document.createElement('div')
  const ele1 = document.createElement("div");
  const ele2 = document.createElement("h2");
  const ele3 = document.createElement("h2");
  const ele4 = document.createElement("h2");
  const ele5 = document.createElement("h2");
  const ele6 = document.createElement("h2");
  const ele7 = document.createElement("h2");
  const ele8 = document.createElement("h2");
  const ele9 = document.createElement("h2");
  const ele10 = document.createElement("button");
  const ele11 = document.createElement("button");
  const ele12 = document.createElement("button");
  const ele13 = document.createElement("button");
  const ele14 = document.createElement('div')
  const ele15 = document.createElement('div')
  const ele16 = document.createElement('input')
  const ele17 = document.createElement('button')
  const ele18 = document.createElement('canvas')
  result.id = 'results'
  ele1.id = "data_result";
  ele1.classList.add('visible')
  ele2.id = "time";
  ele3.id = "typedcount";
  ele4.id = "miss";
  ele5.id = "accuracy";
  ele6.id = "kpm";
  ele7.id = "rkpm";
  ele8.id = "initvel";
  ele9.id = "score";
  ele10.id = "retry_button";
  ele11.id = "result_toggle";
  ele12.id = "words_toggle";
  ele13.id = "figure_toggle";
  ele14.id = 'words_result'
  ele15.id = 'words_result_full'
  ele16.id = 'words_result_full_checkbox'
  ele17.id = 'words_select_retry_button'
  ele18.id = 'chart'
  ele18.classList.add('hidden')
  ele14.classList.add('hidden')
  ele15.classList.add('hidden')
  ele2.innerHTML = `入力時間:${time}秒`;
  ele3.innerHTML = `打鍵数:${typed}`;
  ele4.innerHTML = `ミス数:${miss}`;
  ele5.innerHTML = `正確性:${accuracy}%`;
  ele6.innerHTML = `KPM:${kpm}`;
  ele7.innerHTML = `RKPM:${rkpm}`;
  ele8.innerHTML = `初速:${initvel}秒`;
  ele9.innerHTML = `スコア換算:${score}`;
  ele10.innerHTML = "リトライ";
  ele11.innerHTML = "結果";
  ele12.innerHTML = "ワード";
  ele13.innerHTML = "グラフ";
  ele16.type = 'checkbox'
  ele17.innerHTML = '選択リトライ'
  parent.insertBefore(result, base.nextSibling)
  result.appendChild(ele1);
  ele1.appendChild(ele2);
  ele1.appendChild(ele3);
  ele1.appendChild(ele4);
  ele1.appendChild(ele5);
  ele1.appendChild(ele6);
  ele1.appendChild(ele7);
  ele1.appendChild(ele8);
  if (mode === "etyping") {
    ele1.appendChild(ele9);
  }
  result.appendChild(ele14)
  result.appendChild(ele15)
  result.appendChild(ele10);
  result.appendChild(ele11);
  result.appendChild(ele12);
  result.appendChild(ele13);
  result.appendChild(ele16)
  result.appendChild(ele17)
  result.appendChild(ele18)
  for (let i = 0; i < typedArr[0].length; i++) {
    const word_kanji = document.createElement('h2')
    const word_typed = document.createElement('h2')
    const details = document.createElement('p')
    const selection = document.createElement('input')
    word_kanji.innerHTML = typedArr[0][i]
    word_typed.innerHTML = changeMissesRed(typedArr[1][i], missDataArr[i])
    details.innerHTML = `初速:${initVelArr[i]}, KPM:${kpmArr[i]}, RKPM:${rkpmArr[i]}, ミス数:${missArr[i]}`
    selection.type = 'checkbox'
    selection.classList.add('choose_words')
    selection.value = `${typedArr[0][i]} ${typedArr[1][i]}`
    ele14.appendChild(word_kanji)
    ele14.appendChild(word_typed)
    ele14.appendChild(details)
    ele14.appendChild(selection)
  }
  for (let i = 0; i < allTypedArr[0].length; i++) {
    const word_kanji = document.createElement('h2')
    const word_typed = document.createElement('h2')
    const details = document.createElement('p')
    word_kanji.innerHTML = allTypedArr[0][i]
    word_typed.innerHTML = allTypedArr[1][i]
    details.innerHTML = `初速:${initVelArr[i]}, KPM:${kpmArr[i]}, RKPM:${rkpmArr[i]}, ミス数:${missArr[i]}`
    ele15.appendChild(word_kanji)
    ele15.appendChild(word_typed)
    ele15.appendChild(details)
  }
  ele11.addEventListener('click', () => {
    ele1.className = 'visible'
    ele14.className = 'hidden'
    ele15.className = 'hidden'
  })
  ele12.addEventListener('click', () => {
    ele1.className = 'hidden'
    ele14.className = 'visible'
    ele15.className = 'hidden'
  })
  ele13.addEventListener('click', () => {
    ele18.className = 'visible'
    console.log([...Array(kpmArr.length).keys()])
    let chart = new Chart(ele18, {
      type: 'line',
      data: {
        labels: [...Array(kpmArr.length).keys()],
        datasets: [
          {
            label: 'KPM',
            data: kpmArr,
            borderColor: "rgba(50,50,50,50)",
            backgroundColor: "rgba(0,0,0,0)",
          },
          {
            label: 'RKPM',
            data: rkpmArr,
            borderColor: "rgba(50,50,50,50)",
            backgroundColor: "rgba(0,0,0,0)",
          }
        ]

      },
      options: {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false
        },
        stacked: false,
        scales: {
          y: {
            min: 0,
            max: Math.max(...rkpmArr) + 100
          }
        }
      }
    })
  })
  ele16.addEventListener('click', () => {
    if (ele16.checked) {
      ele1.className = 'hidden'
      ele14.className = 'hidden'
      ele15.className = 'visible'
    }
    if (!ele16.checked) {
      ele1.className = 'hidden'
      ele14.className = 'visible'
      ele15.className = 'hidden'
    }
  })
  ele17.addEventListener('click', () => {
    const typedWords = document.getElementsByClassName('choose_words')
    if (inputtype === 'roma') {
      const result = {
        kanji: [],
        hiragana: [],
        roma: [],
      }
      for (let i = 0; i < typedWords.length; i++) {
        if (typedWords[i].checked) {
          result.kanji.push(words.kanji[i])
          result.hiragana.push(words.hiragana[i])
          result.roma.push(words.roma[i])
        }
      }
      words = sortSelectedWords(result)
      words_for_display = wordsForDisplay(words);
      console.log(result)
    }
    if (inputtype === 'kana') {
      const result = {
        kanji: [],
        hiragana: [],
      }
      for (let i = 0; i < typedWords.length; i++) {
        if (typedWords[i].checked) {
          result.kanji.push(words.kanji[i])
          result.hiragana.push(words.hiragana[i])
        }
      }
      words = sortSelectedWords(result)
      words_for_display = Object.assign({}, words);
      words.hiragana = signOptimization(words.hiragana, true);
      words_for_display.hiragana = signOptimization(
        words_for_display.hiragana,
        false
      );
      console.log(result)
    }
  })
  document.addEventListener("keydown", handleKeydown);
  ele10.addEventListener("click", retry, { once: true });
  ele17.addEventListener('click', wordsSelectRetry, { once: true })
}

function handleKeydown(e) {
  if (e.key === "r" || e.key === "R") {
    retry();
  }
}

async function retry() {
  document.getElementById("retry_button").removeEventListener("click", retry);
  document.removeEventListener("keydown", handleKeydown);
  document.getElementById("results").remove();
  await wordsReset();
  countDown();
}

function wordsSelectRetry() {
  document.getElementById("words_select_retry_button").removeEventListener("click", wordsSelectRetry);
  document.removeEventListener("keydown", handleKeydown);
  document.getElementById("results").remove();
  countDown();
}
