# システム構造

```mermaid
flowchart LR
  P((People)) --> CE[[CurationEngine]]
  A((Archivist)) --> AE[[ArchiveEngine]]
  AE --> HR[(HistoryRecord)]
  HR --> CE
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

#### series

sceneをまとめたもの。seriesの中にseriesが入ることもある。

```mermaid
flowchart TB

  subgraph SW["スターウォーズ"]

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

## CurationEngine

HistoryRecordに入っている情報を人が見やすい形で提供するためのシステム

## ArchiveEngine

あらゆる事象をHistoryRecordに記録するためのシステム




