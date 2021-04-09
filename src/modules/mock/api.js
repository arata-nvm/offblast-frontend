import MockAdapter from "axios-mock-adapter"

const randomMockData = {
    "name": "科学技術・イノベーション創出の活性化に関する法律",
    "url": "https://elaws.e-gov.go.jp/document?lawid=420AC1000000063",
    "haikus": [
        "向上に 寄与することを 目的と",
        "研究を 行うもので 政令で",
        "第二条 第一項に 規定する",
        "健全な 発展及び 安全で",
        "及びその 地方公共 団体の",
        "国及び 地方公共 団体は",
        "有効な 活用及び 継承が",
        "その技能 及び知識の 有効な",
        "有効な 活用及び 継承を",
        "適切な 処遇その他の 必要な",
        "海外の 地域における 卓越し",
        "一項の 規定その他の 法律の",
        "政令で 定めるものの 支払を",
        "所属する 試験研究 機関等",
        "国は、その 委託に係る 研究で",
        "政令で 定めるものが 国と国",
        "時価よりも 低い対価を 受けること",
        "賠償の 請求権を 放棄する",
        "人材の 活用等に 係るもの",
        "適正な 使用について 第一義",
        "応じ、国 及び民間 事業者の",
        "開発に 係る資金を 交付する",
        "推進を 図るため、その 公募型",
        "重要な イノベーションの 創出を",
        "関心を 深めるために 必要な",
        "寄附金の 積極的な 受入れの",
        "能力の 積極的な 活用を",
        "人材の 確保その他の 取組を",
        "能力を 最大限に 発揮して",
        "向上に 寄与することに 配慮する",
        "これによる イノベーションの 創出を",
        "活性化 及び研究 開発の",
        "研究の 結果を国に 政令で",
        "行った 研究により 得た記録",
        "二項中 試験研究 機関等",
        "これによる イノベーションの 創出に",
        "開発の 成果に係る 仕様等",
        "研究の 成果に係る 国有の",
        "推進に 資するよう、その 所掌事務",
        "情報の 積極的な 活用を",
        "誠実に 履行するため 必要が",
        "法人の 範囲を含め 検討を",
        "著作物 その他の知的 財産の",
        "活用を 促進し、その 創造と",
        "三条に 定めるものの ほか、公募",
        "政令で 定める日から 施行する",
        "第二条 第三項に 規定する",
        "法律の 規定について 検討を",
        "各号に 定める日から 施行する",
        "法律の 施行に関し 必要な",
        "体制の 整備について 速やかに",
        "同項の 有期労働 契約で",
        "法律の 施行の日から 施行する",
        "二条第 十一項に 規定する"
    ]
};

const detectMockData = {
    "haikus": [
        "学問の 自由はこれを 保証する"
    ]
};

export default {
    run: client => {
        const mock = new MockAdapter(client);

        mock.onGet('/random').reply(200, randomMockData)
        mock.onPost('/detect').reply(200, detectMockData)
    }
}