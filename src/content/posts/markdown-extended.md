---
title: Markdown 扩展功能
published: 2024-05-01
updated: 2024-11-29
description: '了解更多 Mizuki 中的 Markdown 功能'
image: ''
tags: [示例, Markdown, Mizuki]
category: '示例'
draft: false 
---

## GitHub 仓库卡片
你可以添加链接到 GitHub 仓库的动态卡片，页面加载时会从 GitHub API 拉取仓库信息。

::github{repo="matsuzaka-yuki/Mizuki"}

使用代码 `::github{repo="matsuzaka-yuki/Mizuki"}` 创建 GitHub 仓库卡片。

```markdown
::github{repo="matsuzaka-yuki/Mizuki"}
```

## 提示框

支持以下类型的提示框：`note` `tip` `important` `warning` `caution`

:::note
用户在浏览时也应注意的重要信息。
:::

:::tip
帮助用户更好地完成操作的可选信息。
:::

:::important
用户成功操作所必需的关键信息。
:::

:::warning
由于潜在风险，需要用户立即注意的重要内容。
:::

:::caution
某个操作可能带来的负面后果。
:::

### 基本语法

```markdown
:::note
用户在浏览时也应注意的重要信息。
:::

:::tip
帮助用户更好地完成操作的可选信息。
:::
```

### 自定义标题

提示框的标题可以自定义。

:::note[我的自定义标题]
这是一个带有自定义标题的提示框。
:::

```markdown
:::note[我的自定义标题]
这是一个带有自定义标题的提示框。
:::
```

### GitHub 语法

> [!TIP]
> 也支持 [GitHub 语法](https://github.com/orgs/community/discussions/16925)。

```
> [!NOTE]
> 也支持 GitHub 语法。

> [!TIP]
> 也支持 GitHub 语法。
```

### 剧透/隐藏文本

你可以在文本中添加剧透内容，文本也支持 **Markdown** 语法。

这段内容 :spoiler[被隐藏了 **哈哈**]！

```markdown
这段内容 :spoiler[被隐藏了 **哈哈**]！
```
