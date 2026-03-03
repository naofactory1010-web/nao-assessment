// app.js - Premium Version
document.addEventListener('DOMContentLoaded', () => {
    // 状態管理
    let currentIndex = 0;
    let totalScores = { r: 0, b: 0, c: 0, l: 0 };
    let userAnswers = []; // 回答ログを保存

    // タイプ別の診断結果データ定義
    const typeResults = {
        "1": {
            name: "【慎重すぎる戦略家】 (Type A)",
            loss: "マイナス 3,000,000円",
            desc: "<b>【あなたの優れた資質】</b><br>あなたは非常に慎重で、優れたリスク管理能力の持ち主です。オッズの歪みや展開の妙味に気づく「眼」を持っていますが、決して無謀な賭けには出ません。わずかな不安要素も見逃さず、徹底的にリスクを排除しようとするその姿勢は、本来、投資において非常に優秀な資質だと言えます。<br><br><b>【論理的な逸脱の根拠】</b><br>頭では「ここは買いだ」と分かっているのに、締切直前になって買わない理由を探し、結局見送ってしまう。そして予想が的中し、画面の前で「ほら、やっぱり当たっていた」と悔しがる。手堅く立ち回っているつもりかもしれませんが、実はこれこそがあなたの資産が増えない最大の要因です。投資において「100%の確証」を求めることは、「100%の利益獲得機会の放棄」と同義です。<br><br><b>【行動心理学的プロファイル】</b><br>原因は、あなた自身の「損失回避の心理」が異常に強いことです。人間は得をする喜びよりも、損をする痛みを約2倍強く感じる生き物です。あなたは無意識のうちに、資産が減ることへの恐怖による過剰な反応が生じているだけなのです。<br><br><b>【解決のための臨床的アプローチ】</b><br>この状態から脱却するには、感情を意思決定のプロセスから完全に切り離す必要があります。不安要素があっても、期待値（オッズと勝率のバランス）が基準を満たせば、機械的に購入ボタンを押す「客観的な意思決定ルールの習得」が不可欠です。"
        },
        "2": {
            name: "【データ分析の探求者】 (Type B)",
            loss: "マイナス 5,500,000円",
            desc: "<b>【あなたの優れた資質】</b><br>あなたは情報収集能力に長け、非常に勤勉です。展示タイム、選手コメント、モーター勝率など、あらゆるデータを吟味し、根拠に基づいた論理的な予想を組み立てようとするその姿勢は、感覚だけで舟券を買っている大半のファンとは一線を画しています。<br><br><b>【論理的な逸脱の根拠】</b><br>あなたは、膨大なデータを集めることで「絶対に勝てる完璧な理由」を作り上げようとしています。しかし実際には、「自分の買いたい本命選手」に都合の良いデータだけを無意識に寄せ集め、無理やり自分を納得させているケースが多くありませんか。厳しく言えば、それは分析ではなく単なる「購入理由の捏造」です。<br><br><b>【行動心理学的プロファイル】</b><br>人間には、自分の思い込みを裏付ける情報ばかりを集めてしまう「確証バイアス」という心理的欠陥があります。あなたはデータを「真実を知るため」ではなく、「自分の予想を安心させるための精神安定剤」として消費してしまっているのです。<br><br><b>【解決のための臨床的アプローチ】</b><br>データ分析の真髄は、「どの情報を集めるか」ではなく「どの情報を捨てるか」にあります。主観や思い込みを完全に排除し、本当にオッズと勝率に歪みを生み出す「客観的な指標」だけを抽出するフィルターを持たなければなりません。"
        },
        "3": {
            name: "【鋭い大局観の持ち主】 (Type C)",
            loss: "マイナス 7,000,000円",
            desc: "<b>【あなたの優れた資質】</b><br>あなたはレースの展開を読む直感や、オッズの歪みを見抜く鋭いセンスを持っています。実際にあなたの読み通りにレースが決着し、利益を積み上げることも多いはずです。勝負所を見極める「展開を読み切る眼力」は、確かにあなたの中に備わっています。<br><br><b>【論理的な逸脱の根拠】</b><br>コツコツと利益を積み上げているにも関わらず、収支がマイナスになるのは、熱くなった際に普段の何倍もの掛け金を投じてしまうからです。ボートレースに100%はありません。どれほど自信のあるレースでも、たった1回の不適切なオーバーベットが、数日分の利益をほんの数分で吹き飛ばしてしまいます。あなたの敗因は予想力ではなく、資金管理の欠落なのです。<br><br><b>【行動心理学的プロファイル】</b><br>的中が続くと「次も当たる」と錯覚したり、自信が大きくなると欲求に脳が支配されます。感情の昂ぶりによって、破滅リスクを冷静に見積もれなくなっている状態です。<br><br><b>【解決のための臨床的アプローチ】</b><br>あなたに必要なのは、これ以上予想の精度を上げることではありません。プロの投資家が実践しているような「絶対に破綻しない資金配分（バンクロール管理）のルール」を自らに課すことです。感情の高ぶりを強制的にシャットアウトするための数学的な防衛ラインの構築が不可欠です。"
        },
        "4": {
            name: "【ロマンを追う穴党】 (Type D)",
            loss: "マイナス 9,000,000円",
            desc: "<b>【あなたの優れた資質】</b><br>あなたは本命党のように単調なレースには見向きもせず、大衆が気づかない「死角」を見つける想像力に優れています。誰もが思いもよらない展開を予想し、見事に万舟券を射止める度胸は、紛れもなくあなたの強力な武器です。<br><br><b>【論理的な逸脱の根拠】</b><br>あなたは「オッズが高い＝美味しい」と錯覚し、荒れる明確な根拠がないレースにまで大穴を狙い続けていませんか。統計的に見て、あなたが買っている大半の穴舟券は、利益を市場に捨て続けるだけの「無意味な投資」になっています。たまに高配当を当てて高揚感を味わう裏で、失ってきた総額を計算したことはあるでしょうか。<br><br><b>【行動心理学的プロファイル】</b><br>あなたの脳は、すでに「利益」よりも「万舟を当てた時の強烈なドーパミン」を優先して求めてしまっています。一撃で過去の負けを取り戻せるという甘い誘惑が、冷静な期待値の計算を完全に放棄させている、立派な依存状態です。<br><br><b>【解決のための臨床的アプローチ】</b><br>「配当が高いから」ではなく、オッズと発生確率が割に合っている「本当に狙うべき特異点」だけを冷徹に撃ち抜くための思考回路が必要です。感情的なロマンを捨て、投資としての高配当をシステム的に獲得する手法へシフトしなければなりません。"
        },
        "5": {
            name: "【手堅いリスク分散家】 (Type E)",
            loss: "マイナス 6,500,000円",
            desc: "<b>【あなたの優れた資質】</b><br>展開の紛れや抜け目を恐れるあなたは、様々なレースシナリオを想定できる幅広い想像力の持ち主です。あらゆる可能性をヘッジしようとする姿勢は、投資において資産を守るための重要な防御能力と言えます。<br><br><b>【論理的な逸脱の根拠】</b><br>「絶対に当てたい」という思いから買い目を広げすぎた結果、的中したのに購入額を下回る「トリガミ」になっていませんか。的中率の高さに満足しているかもしれませんが、過剰な保険の買い目は、あなたの資産を実質的に削り取っています。「当たって損をする」という、投資として完全に破綻した状態です。<br><br><b>【行動心理学的プロファイル】</b><br>人間は「損失を被る痛み」を極端に嫌う性質を持っています。あなたが多点買いをしてしまうのは、利益のためではなく「外れてお金を失う恐怖」から精神的な安心感を得るためです。つまり、あなたは舟券ではなく「精神の安定」に高いコストを払い続けているのです。<br><br><b>【解決のための臨床的アプローチ】</b><br>買い目を絞る恐怖を乗り越えるには、「どれだけ点数を絞っても、長期的に見れば確実に利益が残る」という期待値の数学的な裏付けが必要です。安心感への対価を払うのをやめ、真の期待値リターンを追求する構築法を体得する必要があります。"
        },
        "6": {
            name: "【人情味あふれる共感者】 (Type F)",
            loss: "マイナス 4,500,000円",
            desc: "<b>【あなたの優れた資質】</b><br>選手へのリスペクトを忘れず、人間ドラマを深く愛しています。ストーリーに感情移入できる豊かな感性は、ファンとして非常に素晴らしい人間的魅力です。<br><br><b>【論理的な逸脱の根拠】</b><br>ボートレースは純粋なゼロサムゲームです。「情」や「応援」という感情を買い目に混ぜた瞬間、それは投資ではなく「市場への寄付行為」へと変質します。あなたのその純粋な優しさは、理論で立ち回る冷徹な投資家の財布を潤しているのが現実です。<br><br><b>【行動心理学的プロファイル】</b><br>人間は、無機質な数字の羅列よりも感情を揺さぶられる「物語」に価値を感じるようにできています。「好きな選手に勝ってほしい」という希望的観測が、本来フラットに判断すべき客観的な数値を曇らせてしまうのです。<br><br><b>【解決のための臨床的アプローチ】</b><br>利益を残したいのであれば、選手を感情を持つ人間としてではなく、期待値を構成する「単なるデータ変数のひとつ」として冷徹に処理するマインドシフトが必要です。市場の感情が生み出す「歪み」を逆手に取り、ノイズから利益を抜く手法が求められます。"
        },
        "7": {
            name: "【不屈の勝負師】 (Type G)",
            loss: "マイナス 12,000,000円以上（破産）",
            desc: "<b>【あなたの優れた資質】</b><br>あなたは負けに屈しないアグレッシブな精神力を持っています。どれほど窮地に立たされても「ここから巻き返してやる」と闘志を燃やす姿勢は、並の人間では持ち得ないエネルギーです。<br><br><b>【論理的な逸脱の根拠】</b><br>負けてしまった際、後半のレースで一気に負けを取り戻そうとして掛け金を釣り上げたりしていませんか。それは反骨心ではなく、冷静な資金管理からの逸脱です。負けを取り戻そうとする焦りは、期待値計算機能を完全に停止させます。自ら資産を損なうリスクの高い運用であることを直視しなければなりません。<br><br><b>【行動心理学的プロファイル】</b><br>プロスペクト理論の通り、人間は損失を抱えると損失を回避しようとして「普段なら絶対に取らない無謀なリスク」を進んで取ってしまう認知的特性があります。個人の資質ではなく、生物としての本能が判断を歪ませているのです。<br><br><b>【解決のための臨床的アプローチ】</b><br>一度感情が優位になった思考を、意志力で制御することは困難です。今あなたに必要なのは「感情の干渉を物理的に遮断するための、絶対的な意志決定フロー（撤退・損切り基準）」をシステムとして組み込むことです。"
        },
        "8": {
            name: "【探求を止めない完璧主義者】 (Type H)",
            loss: "プラス 2,500,000円",
            desc: "<b>【あなたの優れた資質】</b><br>卓越した分析力と知性を持ち、常に分析ロジックを向上させようとする向上心に満ちています。独自の展開予想レベルは非常に高く、ボートレースの真理に限りなく近づいています。あなたの予想モデルは一般的なファンの次元を大きく超えています。<br><br><b>【論理的な逸脱の根拠】</b><br>自信のあるレースが「突発的な事故」等で外れた際、「なぜ外れたのか」を何時間も分析し、ルールをどんどん追加していませんか。その結果、あなたの予想式は条件が厳しすぎる「ツギハギの怪物」になり、本来狙うべき美味しい期待値レースまでも見逃すようになっています。完璧を求めるがゆえに、自らの武器の優位性を自ら潰してしまっているのです。<br><br><b>【行動心理学的プロファイル】</b><br>脳はランダムなノイズの中にも理由や法則を見つけ出そうとする性質があります。ロジックを信じているからこそ不条理な負けを受け入れられず、「もっと条件を厳しくすれば100%当てられた」という完璧主義の罠（過剰適合）に陥ってしまうのです。<br><br><b>【解決のための臨床的アプローチ】</b><br>不完全な情報市場において「100%」は存在しません。正しい勝負をしても一定の割合で発生する「理不尽な外れ（分散）」を、涼しい顔で「必要経費」として受け入れる統計的なメンタルセットが必要です。"
        },
    };

    // DOM要素
    const startScreen = document.getElementById('start-screen');
    const questionScreen = document.getElementById('question-screen');
    const loadingScreen = document.getElementById('loading-screen');
    const resultScreen = document.getElementById('result-screen');

    // イベントリスナー
    document.getElementById('start-btn').addEventListener('click', () => {
        switchScreen(startScreen, questionScreen);
        renderQuestion();
    });

    function switchScreen(from, to) {
        from.classList.remove('active');
        to.classList.add('active');
        window.scrollTo(0, 0);
    }

    function renderQuestion() {
        if (currentIndex >= diagnosticData.length) {
            finishDiagnostic();
            return;
        }

        const q = diagnosticData[currentIndex];

        // 進捗更新
        const progress = Math.round((currentIndex / diagnosticData.length) * 100);
        document.getElementById('progress-bar').style.width = `${progress}%`;
        document.getElementById('progress-text').innerText = `解析進捗: ${progress}%`;

        // テキスト設定
        document.getElementById('question-title').innerText = `Q${q.id}. ${q.title}`;
        document.getElementById('question-situation').innerHTML = q.situation;

        // 選択肢の生成
        const optsContainer = document.getElementById('options-container');
        optsContainer.innerHTML = '';

        for (const [key, text] of Object.entries(q.options)) {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerText = text;
            btn.onclick = () => selectOption(key, q.scores[key]);
            optsContainer.appendChild(btn);
        }
        window.scrollTo(0, 0);
    }

    function selectOption(key, scoresArray) {
        if (scoresArray && scoresArray.length === 4) {
            totalScores.r += scoresArray[0];
            totalScores.b += scoresArray[1];
            totalScores.c += scoresArray[2];
            totalScores.l += scoresArray[3];

            // 回答ログの記録 (例: "1-a")
            userAnswers.push(`${diagnosticData[currentIndex].id}-${key}`);
        }

        currentIndex++;
        renderQuestion();
    }

    function finishDiagnostic() {
        switchScreen(questionScreen, loadingScreen);

        let msgs = [
            "意思決定アルゴリズムをシミュレートしています...",
            "個別回答ログから認知プロバイアスを空間上にマッピング...",
            "隠れた意思決定のクセ（動的インサイト）を復元中...",
            "経済的損失ポテンシャルを定量化しています...",
            "最終アセスメント報告書を生成中..."
        ];

        let textEl = document.getElementById('loading-text');
        let step = 0;

        const interval = setInterval(() => {
            step++;
            if (step < msgs.length) {
                textEl.innerText = msgs[step];
            } else {
                clearInterval(interval);
                showResult();
            }
        }, 1200);
    }

    function showResult() {
        switchScreen(loadingScreen, resultScreen);

        // V4ロジックに基づく判定
        const maxScorePerAxis = diagnosticData.length * 5;
        const rRatio = totalScores.r / maxScorePerAxis;
        const bRatio = totalScores.b / maxScorePerAxis;
        const cRatio = totalScores.c / maxScorePerAxis;
        const lRatio = totalScores.l / maxScorePerAxis;

        // ギャンブル化率（投資乖離指数）
        const gamblingFactor = totalScores.r + totalScores.b;
        const investmentFactor = totalScores.c + totalScores.l;
        const gambleRate = (gamblingFactor / (gamblingFactor + investmentFactor)) * 100;

        document.getElementById('result-label-text').innerText = "行動心理学的・投資乖離指数";

        // --- プロ仕様：重心マッチング（ユークリッド距離）ロジック ---
        // 各タイプの理想的なR, B, C, L座標を定義 (0.0 - 1.0)
        const typeCentroids = {
            "1": { r: 0.25, b: 0.25, c: 0.85, l: 0.45 }, // 慎重戦略家（C高、R低）
            "2": { r: 0.35, b: 0.85, c: 0.25, l: 0.85 }, // データ探求（B,L高）
            "3": { r: 0.85, b: 0.35, c: 0.35, l: 0.85 }, // 鋭い大局観（R,L高）
            "4": { r: 0.85, b: 0.85, c: 0.25, l: 0.25 }, // ロマン穴党（R,B高）
            "5": { r: 0.35, b: 0.45, c: 0.85, l: 0.35 }, // リスク分散（C高）
            "6": { r: 0.50, b: 0.50, c: 0.50, l: 0.50 }, // 人情共感（平均・中心）
            "7": { r: 0.90, b: 0.45, c: 0.15, l: 0.25 }, // 不屈勝負師（R極、C低）
            "8": { r: 0.15, b: 0.15, c: 0.85, l: 0.85 }  // 完璧主義（L,C高）
        };

        const userVecRaw = { r: rRatio, b: bRatio, c: cRatio, l: lRatio };

        // --- 偏差スケーリング：微小な偏りを3倍に増幅して「個性」を際立たせる ---
        // 以前の10倍では平均的なユーザーが消失したため、3倍にマイルド化
        const mean = 0.5; // 理論的な中心
        const scale = 3.0; // 増幅係数
        const userVec = {
            r: mean + (userVecRaw.r - mean) * scale,
            b: mean + (userVecRaw.b - mean) * scale,
            c: mean + (userVecRaw.c - mean) * scale,
            l: mean + (userVecRaw.l - mean) * scale
        };

        let typeKey = "6";
        let minDistance = Infinity;

        for (const [key, centroid] of Object.entries(typeCentroids)) {
            const distance = Math.sqrt(
                Math.pow(userVec.r - centroid.r, 2) +
                Math.pow(userVec.b - centroid.b, 2) +
                Math.pow(userVec.c - centroid.c, 2) +
                Math.pow(userVec.l - centroid.l, 2)
            );

            // 中心(Type 6)への重み付け：微小な偏りがある場合は他タイプを優先、
            // 真に真ん中に近い場合は正当にType 6に着地させる係数(1.2)
            const weightedDistance = (key === "6") ? distance * 1.2 : distance;

            if (weightedDistance < minDistance) {
                minDistance = weightedDistance;
                typeKey = key;
            }
        }

        renderResult(typeKey, gambleRate);

        function renderResult(type, currentGambleRate) {
            const resData = typeResults[type];
            const gambleRateVal = currentGambleRate;

            // --- 修正：属性名とType名を構造的に分離して表示 ---
            const firstSpaceIndex = resData.name.indexOf(' ');
            const mainName = resData.name.substring(0, firstSpaceIndex);
            const subName = resData.name.substring(firstSpaceIndex + 1);

            const typeNameEl = document.getElementById('result-type-name');
            typeNameEl.innerHTML = `
                <span class="main-type-name">${mainName}</span>
                <span class="sub-type-badge">${subName}</span>
            `;

            document.getElementById('result-gamble-rate').innerText = `${gambleRateVal.toFixed(1)}%`;
            document.getElementById('rate-bar-fill').style.width = `${gambleRateVal}%`;
            document.getElementById('result-loss-amount').innerText = resData.loss;

            // --- シームレス統合ロジック ---
            const reportEl = document.getElementById('result-description');
            reportEl.innerHTML = '';

            // 1. 回答からインサイトを収集
            let matchedInsights = [];
            userAnswers.forEach(ans => {
                if (insightTriggers[ans]) {
                    matchedInsights.push(insightTriggers[ans]);
                }
            });
            // 全員に付与するコールドリーディング
            matchedInsights.push(insightTriggers["cold-1"]);
            matchedInsights.push(insightTriggers["cold-2"]);

            // 2. レポートをセクションごとに分割して描画
            const sectionTexts = resData.desc.split("<br><br>");
            const sectionMap = ["assets", "deviation", "profile", "approach"];

            sectionTexts.forEach((text, index) => {
                let sectionHtml = text;
                const currentCat = sectionMap[index];

                // 該当するカテゴリーのインサイトを文章として末尾に連結
                matchedInsights.filter(ins => ins.category === currentCat).forEach(ins => {
                    sectionHtml += ins.text;
                });

                const sectionDiv = document.createElement('div');
                sectionDiv.className = 'report-section';
                sectionDiv.innerHTML = sectionHtml;
                reportEl.appendChild(sectionDiv);
            });

            // --- 本番環境用URL設定 ---
            const PUBLIC_URL = "https://naofactory1010-web.github.io/nao-assessment/"; // 公開URLを設定済み
            const X_ACCOUNT_ID = "nao_boatrace"; // [@nao_boatrace] アカウントIDを設定完了

            // シェア機能：診断結果をX（Twitter）に投稿するためのリンク生成
            const tweetText = encodeURIComponent(`【ボートレース投資・行動心理診断】\n\n判定：${resData.name}\n投資乖離指数：${gambleRateVal.toFixed(1)}%\n予報ポテンシャル：${resData.loss}\n\n解析室ナオ（ @${X_ACCOUNT_ID} ）監修のアセスメントにより、私の心理プロファイルが可視化されました。\n\n#解析室ナオ #行動心理アセスメント\n${PUBLIC_URL}`);

            const shareBtn = document.getElementById('share-btn');
            if (shareBtn) {
                shareBtn.onclick = () => {
                    window.open(`https://twitter.com/intent/tweet?text=${tweetText}`, '_blank');
                };
            }
        }
    }
});
