---
title: 從感測器開始：把訊號變成互動
description: 從原始資料到感官回饋，整理互動裝置中的訊號處理思路。
publishedAt: 2026-08-15
tags:
  - 電子
  - 互動設計
draft: false
sample: true
---

> 這是一篇示範文章，用來確認 Markdown 的排版效果。

感測器提供的只是連續變動的數值。要讓它成為一段有意義的互動，還需要經過校正、濾波、映射，以及對使用情境的理解。

## 先理解資料

在加入複雜演算法之前，我會先記錄一段原始數據，觀察範圍、雜訊與反應速度。這通常比直接猜測參數更有效。

```cpp
const int sensorPin = A0;

void loop() {
  const int value = analogRead(sensorPin);
  Serial.println(value);
  delay(16);
}
```

## 再設計回饋

同一組訊號可以對應成光、聲音或畫面。真正重要的是回饋是否能讓人理解自己的行為對成果造成了什麼影響。
