# システム構造

```mermaid
flowchart LR
  AE[[ArchiveEngine]]
  AE --> HR[(HistoryRecord)]

  subgraph CS1[CurationSystem]
    CEDB1[(CurationDB)]
    CE1[[CurationEngine]]
  end
  HR --> CS1

  subgraph CS2[CurationSystem]
    CEDB2[(CurationDB)]
    CE2[[CurationEngine]]
  end
  HR --> CS2

  subgraph CS3[CurationSystem]
    CEDB3[(CurationDB)]
    CE3[[CurationEngine]]
  end
  HR --> CS3  
```

## HistoryRecord

あらゆる歴史的事象を記録するためのデータベース

### 基本データ構造

#### scene

いつ、どこで、何が、何をしたかを記録するもの

- 22 BBY、惑星ナブーで、アナキンがパドメと結婚した
- 4 ABY、皇帝パルパティーンの玉座の間で、ルークがダースベイダーを倒した
- 0 BBY、オルデラン星系で、デススターが惑星オルデランを破壊した
- 32 BBY、タトゥイーンで、砂嵐が起きた
- 33 BBY、ナブーの戦いを知った少年たちはひどいショックを受けた。

#### series

sceneをまとめたもの。seriesの中にseriesが入ることもある。単一のsceneが複数のseriesに入ることもある。

```mermaid
flowchart TB
    AB["ムスタファーで大規模噴火"]
  subgraph SW["スターウォーズ"]
    SW1[パルパティーン青年、フォースに夢中になる]
    subgraph ANAKIN["アナキン編"]

      subgraph PM["ファントム・メナス"]
        PM1["タトゥイーンで砂嵐"]
        PM2["ポッドレース優勝"]
        PM3["ジェダイに推薦"]

        subgraph NABOO["ナブーの戦い"]
          N1["パドメと出会う"]
          N2["ジェダイ指揮で戦闘"]
        end
      end

      subgraph CW["クローン・ウォーズ"]
        CW1["クローン戦争開始"]
        CW2["ジェダイが指揮して戦闘"]
      end

    end

    subgraph LUKE["ルーク編"]

      subgraph NH["新たなる希望"]
        NH1["オビ=ワンと出会う"]
        NH2["ヨーダの訓練"]
      end

      subgraph ROTJ["ジェダイの帰還"]
        R1["デススター再建"]
        R2["ダースベイダー撃破"]
        R3["パルパティーン死亡"]
      end

    end

  end
```

#### cast

sceneの事象を引き起こすありとあらゆるもの。
sceneやseriesもcastとしての役割を果たすことがある。

- オビ=ワン=ケノービ
- デススター
- ジェダイ
- ムスタファー
- ポッドレース
- ナブー
- ライトセーバー
- 砂嵐
- タトゥイーン
- フォース
- クローン戦争
- ナブーの戦い

などなど

## CurationSystem

HistoryRecordに入っている情報を目的に応じて提供するためのアプリケーションおよびデータベース

## ArchiveEngine

HistoryRecordに記録するためのアプリケーション




