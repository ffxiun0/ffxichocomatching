/*
The MIT License (MIT)
    
Copyright (c) 2016 ffxiun0@gmail.com
    
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
    
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
    
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

var Sex = {};
Sex.Male = 0;
Sex.Female = 1;

var Races = {};
Races.None = 0;
Races.Hume = 1;
Races.Elvaan = 2;
Races.Tarutaru = 3;
Races.Galka = 4;
Races.Mithra = 5;

var Types = {};
Types.None = 0;
Types.Cheerful = 1; //明るい
Types.Shy = 2;      //シャイ
Types.Honest = 3;   //誠実
Types.Cool = 4;     //クール
Types.Kind = 5;     //優しい
Types.Modest = 6;   //内気

var chocoL = [];
chocoL[Races.None] = "";
chocoL[Races.Hume] = "恋するチョコ・Ｌ";
chocoL[Races.Elvaan] = "愛するチョコ・Ｌ";
chocoL[Races.Tarutaru] = "萌えるチョコ・Ｌ";
chocoL[Races.Galka] = "好きチョコ・Ｌ";
chocoL[Races.Mithra] = "好きチョコ・Ｌ";

var chocoR = [];
chocoR[Races.None] = "";
chocoR[Races.Hume] = "恋するチョコ・Ｒ";
chocoR[Races.Elvaan] = "愛するチョコ・Ｒ";
chocoR[Races.Tarutaru] = "萌えるチョコ・Ｒ";
chocoR[Races.Galka] = "好きチョコ・Ｒ";
chocoR[Races.Mithra] = "好きチョコ・Ｒ";

var npcMap = [
    [
        [
            { area: "南サンドリア", pos: "L-7", details: "", race: "ヒューム" },
            { area: "南サンドリア", pos: "E-7", details: "", race: "エルヴァーン" },
            { area: "北サンドリア", pos: "E-6", details: "", race: "タルタル" },
            { area: "北サンドリア", pos: "D-9", details: "", race: "ガルカ" },
        ],
        [
            { area: "南サンドリア", pos: "J-8", details: "", race: "ヒューム" },
            { area: "南サンドリア", pos: "C-6", details: "", race: "エルヴァーン" },
            { area: "北サンドリア", pos: "K-9", details: "", race: "タルタル" },
            { area: "北サンドリア", pos: "H-8", details: "", race: "ミスラ" },
        ],
    ],
    [
        [
            { area: "バストゥーク鉱山区", pos: "G-8", details: "", race: "ヒューム" },
            { area: "バストゥーク鉱山区", pos: "E-8", details: "", race: "エルヴァーン" },
            { area: "バストゥーク商業区", pos: "J-10", details: "", race: "タルタル" },
            { area: "バストゥーク商業区", pos: "G-4", details: "", race: "ガルカ" },
        ],
        [
            { area: "バストゥーク鉱山区", pos: "I-7", details: "", race: "ヒューム" },
            { area: "バストゥーク鉱山区", pos: "H-7", details: "", race: "エルヴァーン" },
            { area: "バストゥーク商業区", pos: "G-9", details: "", race: "タルタル" },
            { area: "バストゥーク商業区", pos: "G-8", details: "", race: "ミスラ" },
        ],
    ],
    [
        [
            { area: "ウィンダス水の区(北)", pos: "G-10", details: "", race: "ヒューム" },
            { area: "ウィンダス水の区(北)", pos: "F-8", details: "", race: "エルヴァーン" },
            { area: "ウィンダス森の区", pos: "H-11", details: "", race: "タルタル" },
            { area: "ウィンダス森の区", pos: "G-10", details: "	", race: "ガルカ" },
        ],
        [
            { area: "ウィンダス水の区(南)", pos: "J-9", details: "", race: "ヒューム" },
            { area: "ウィンダス水の区(北)", pos: "K-6", details: "", race: "エルヴァーン" },
            { area: "ウィンダス森の区", pos: "J-6", details: "", race: "タルタル" },
            { area: "ウィンダス森の区", pos: "J-8", details: "", race: "ミスラ" },
        ],
    ],
];

function onChange() {
    var area = getSelectedInt("area");
    var sex1 = getSelectedInt("sex");
    var sex2 = (sex1 + 1) & 1;

    setBgColor("P1Caption", (sex1 == Sex.Male) ? "blue" : "red");
    setBgColor("P2Caption", (sex2 == Sex.Male) ? "blue" : "red");

    setTypeOptions("P11Type", sex1);
    setTypeOptions("P12Type", sex1);
    setTypeOptions("P13Type", sex1);
    setTypeOptions("P14Type", sex1);
    setRaceOptions("P11CrushRace", sex2);
    setRaceOptions("P12CrushRace", sex2);
    setRaceOptions("P13CrushRace", sex2);
    setRaceOptions("P14CrushRace", sex2);
    setTypeOptions("P11CrushType", sex2);
    setTypeOptions("P12CrushType", sex2);
    setTypeOptions("P13CrushType", sex2);
    setTypeOptions("P14CrushType", sex2);

    setTypeOptions("P21Type", sex2);
    setTypeOptions("P22Type", sex2);
    setTypeOptions("P23Type", sex2);
    setTypeOptions("P24Type", sex2);
    setRaceOptions("P21CrushRace", sex1);
    setRaceOptions("P22CrushRace", sex1);
    setRaceOptions("P23CrushRace", sex1);
    setRaceOptions("P24CrushRace", sex1);
    setTypeOptions("P21CrushType", sex1);
    setTypeOptions("P22CrushType", sex1);
    setTypeOptions("P23CrushType", sex1);
    setTypeOptions("P24CrushType", sex1);

    setText("P14Race", (sex1 == Sex.Male) ? "ガルカ" : "ミスラ");
    setText("P24Race", (sex2 == Sex.Male) ? "ガルカ" : "ミスラ");

    setNpcDetails("P11Pos", area, sex1, 0);
    setNpcDetails("P12Pos", area, sex1, 1);
    setNpcDetails("P13Pos", area, sex1, 2);
    setNpcDetails("P14Pos", area, sex1, 3);

    setNpcDetails("P21Pos", area, sex2, 0);
    setNpcDetails("P22Pos", area, sex2, 1);
    setNpcDetails("P23Pos", area, sex2, 2);
    setNpcDetails("P24Pos", area, sex2, 3);
}

function onReset() {
    setSelectedIndex("P11Type", 0);
    setSelectedIndex("P12Type", 0);
    setSelectedIndex("P13Type", 0);
    setSelectedIndex("P14Type", 0);
    setSelectedIndex("P11CrushRace", 0);
    setSelectedIndex("P12CrushRace", 0);
    setSelectedIndex("P13CrushRace", 0);
    setSelectedIndex("P14CrushRace", 0);
    setSelectedIndex("P11CrushType", 0);
    setSelectedIndex("P12CrushType", 0);
    setSelectedIndex("P13CrushType", 0);
    setSelectedIndex("P14CrushType", 0);

    setSelectedIndex("P21Type", 0);
    setSelectedIndex("P22Type", 0);
    setSelectedIndex("P23Type", 0);
    setSelectedIndex("P24Type", 0);
    setSelectedIndex("P21CrushRace", 0);
    setSelectedIndex("P22CrushRace", 0);
    setSelectedIndex("P23CrushRace", 0);
    setSelectedIndex("P24CrushRace", 0);
    setSelectedIndex("P21CrushType", 0);
    setSelectedIndex("P22CrushType", 0);
    setSelectedIndex("P23CrushType", 0);
    setSelectedIndex("P24CrushType", 0);

    setText("Results1", "検索結果がここに表示されます。");
    setText("Results2", "検索結果がここに表示されます。");
}

function onMatch() {
    var items1 = getPlayer1Items();
    var items2 = getPlayer2Items();

    matchMutualLove(items1, items2);
    matchMutualLoveRace(items1, items2);
    matchMutualLoveType(items1, items2);
    matchOneSidedLove(items1, items2);
    matchOneSidedLoveRace(items1, items2);
    matchOneSidedLoveType(items1, items2);
    matchAny(items1, items2);

    setResults("Results1", items1);
    setResults("Results2", items2);
}

function setResults(id, items) {
    var msg = "";
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        msg += chocoL[item.race] + "+"
            + chocoR[item.matched.race]
            + " (" + item.matchMsg + ")<br/>";
    }
    setText(id, msg);
}

function equalsRace(a, b) {
    if (a.crushRace == Races.None && b.race == Races.None)
        return false;
    return a.crushRace == b.race;
}

function equalsType(a, b) {
    if (a.crushType == Types.None && b.type == Types.None)
        return false;
    return a.crushType == b.type;
}


function matchMutualLove(items1, items2) {
    match(items1, items2, "相思相愛", function (a, b) {
        return equalsRace(a, b) && equalsType(a, b)
            && equalsRace(b, a) && equalsType(b, a);
    });
}

function matchMutualLoveRace(items1, items2) {
    match(items1, items2, "種族両思い", function (a, b) {
        return equalsRace(a, b) && equalsRace(b, a);
    });
}

function matchMutualLoveType(items1, items2) {
    match(items1, items2, "性格両思い", function (a, b) {
        return equalsType(a, b) && equalsType(b, a);
    });
}

function matchOneSidedLove(items1, items2) {
    match(items1, items2, "片思い", function (a, b) {
        return (equalsRace(a, b) && equalsType(a, b))
            || (equalsRace(b, a) && equalsType(b, a));
    });
}

function matchOneSidedLoveRace(items1, items2, msg) {
    match(items1, items2, "種族片思い", function (a, b) {
        return equalsRace(a, b) || equalsRace(b, a);
    });
}

function matchOneSidedLoveType(items1, items2, msg) {
    match(items1, items2, "性格片思い", function (a, b) {
        return equalsType(a, b) || equalsType(b, a);
    });
}

function matchAny(items1, items2) {
    match(items1, items2, "一致なし", function (a, b) {
        return true;
    });
}

function match(items1, items2, msg, matchFunc) {
    for (var i = 0; i < items1.length; i++) {
        var item1 = items1[i];
        if (item1.matched) continue;

        for (var j = 0; j < items2.length; j++) {
            var item2 = items2[j];
            if (item2.matched) continue;

            if (matchFunc(item1, item2)) {
                item1.matched = item2;
                item1.matchMsg = msg;
                item2.matched = item1;
                item2.matchMsg = msg;
                break;
            }
        }
    }
}

function getPlayer1Items() {
    var result = [];

    var sex = getSelectedInt("sex");
    var raceGM = (sex == Sex.Male) ? Races.Galka : Races.Mithra;
    result.push(getItem(Races.Hume, "P11Type", "P11CrushRace", "P11CrushType"));
    result.push(getItem(Races.Elvaan, "P12Type", "P12CrushRace", "P12CrushType"));
    result.push(getItem(Races.Tarutaru, "P13Type", "P13CrushRace", "P13CrushType"));
    result.push(getItem(raceGM, "P14Type", "P14CrushRace", "P14CrushType"));

    return result;
}

function getPlayer2Items() {
    var result = [];

    var sex = getSelectedInt("sex");
    var raceGM = (sex == Sex.Male) ? Races.Mithra : Races.Galka;
    result.push(getItem(Races.Hume, "P21Type", "P21CrushRace", "P21CrushType"));
    result.push(getItem(Races.Elvaan, "P22Type", "P22CrushRace", "P22CrushType"));
    result.push(getItem(Races.Tarutaru, "P23Type", "P23CrushRace", "P23CrushType"));
    result.push(getItem(raceGM, "P24Type", "P24CrushRace", "P24CrushType"));

    return result;
}

function getItem(race, idType, idCrushRace, idCrushType) {
    var result = {};
    result.race = race;
    result.type = getSelectedInt(idType);
    result.crushRace = getSelectedInt(idCrushRace);
    result.crushType = getSelectedInt(idCrushType);
    return result;
}

function setTypeOptions(id, sex) {
    if (sex == Sex.Male) {
        setOption(id, 0, Types.None, "未設定");
        setOption(id, 1, Types.Cheerful, "明るい");
        setOption(id, 2, Types.Shy, "シャイ");
        setOption(id, 3, Types.Honest, "誠実");
        setOption(id, 4, Types.Cool, "クール");
    } else {
        setOption(id, 0, Types.None, "未設定");
        setOption(id, 1, Types.Cheerful, "明るい");
        setOption(id, 2, Types.Shy, "シャイ");
        setOption(id, 3, Types.Kind, "優しい");
        setOption(id, 4, Types.Modest, "内気");
    }
}

function setRaceOptions(id, sex) {
    setOption(id, 0, Races.None, "未設定");
    setOption(id, 1, Races.Hume, "ヒューム");
    setOption(id, 2, Races.Elvaan, "エルヴァーン");
    setOption(id, 3, Races.Tarutaru, "タルタル");
    if (sex == Sex.Male) {
        setOption(id, 4, Races.Galka, "ガルカ");
    } else {
        setOption(id, 4, Races.Mithra, "ミスラ");
    }
}

function setNpcDetails(id, area, sex, index) {
    var npc = npcMap[area][sex][index];
    var text = npc.area + " (" + npc.pos + ") " + npc.details;
    setText(id, text);
}

function setBgColor(id, color) {
    var elem = document.getElementById(id);
    elem.classList.remove("blue", "red");
    elem.classList.add(color);
}

function getSelectedInt(id) {
    var select = document.getElementById(id);
    var index = select.selectedIndex;
    var value = parseInt(select.options[index].value);
    return isNaN(value) ? 0 : value;
}

function setSelectedIndex(id, index) {
    var select = document.getElementById(id);
    select.selectedIndex = index;
}

function setText(id, text) {
    var elem = document.getElementById(id);
    return elem.innerHTML = text;
}

function setOption(id, index, value, text) {
    var select = document.getElementById(id);
    select.options[index].value = value;
    select.options[index].innerHTML = text;
}

window.onload = function () {
    onChange();
}
