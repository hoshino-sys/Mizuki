---
title: Markdown Mermaid 图表
published: 2023-10-01
pinned: false
description: 在 Markdown 中使用 Mermaid 图表的示例文章。
tags: [Markdown, 博客, Mermaid]
category: 示例
draft: false
---
# Markdown 中使用 Mermaid 图表完全指南

本文演示如何在 Markdown 文档中使用 Mermaid 创建各种复杂图表，包括流程图、时序图、甘特图、类图和状态图。

## 流程图示例

流程图非常适合表示流程或算法步骤。



```mermaid
graph TD
    A[开始] --> B{条件检查}
    B -->|是| C[处理步骤 1]
    B -->|否| D[处理步骤 2]
    C --> E[子流程]
    D --> E
    subgraph E [子流程详情]
        E1[子步骤 1] --> E2[子步骤 2]
        E2 --> E3[子步骤 3]
    end
    E --> F{另一个判断}
    F -->|选项 1| G[结果 1]
    F -->|选项 2| H[结果 2]
    F -->|选项 3| I[结果 3]
    G --> J[结束]
    H --> J
    I --> J
```

## 时序图示例

时序图展示对象之间随时间推移的交互过程。

```mermaid
sequenceDiagram
    participant 用户
    participant Web应用
    participant 服务器
    participant 数据库

    用户->>Web应用: 提交登录请求
    Web应用->>服务器: 发送认证请求
    服务器->>数据库: 查询用户凭证
    数据库-->>服务器: 返回用户数据
    服务器-->>Web应用: 返回认证结果
    
    alt 认证成功
        Web应用->>用户: 显示欢迎页面
        Web应用->>服务器: 请求用户数据
        服务器->>数据库: 获取用户偏好
        数据库-->>服务器: 返回偏好设置
        服务器-->>Web应用: 返回用户数据
        Web应用->>用户: 加载个性化界面
    else 认证失败
        Web应用->>用户: 显示错误信息
        Web应用->>用户: 提示重新输入
    end
```

## 甘特图示例

甘特图非常适合展示项目进度和时间安排。

```mermaid
gantt
    title 网站开发项目时间线
    dateFormat  YYYY-MM-DD
    axisFormat  %m/%d
    
    section 设计阶段
    需求分析              :a1, 2023-10-01, 7d
    UI 设计              :a2, after a1, 10d
    原型制作              :a3, after a2, 5d
    
    section 开发阶段
    前端开发              :b1, 2023-10-20, 15d
    后端开发              :b2, after a2, 18d
    数据库设计            :b3, after a1, 12d
    
    section 测试阶段
    单元测试              :c1, after b1, 8d
    集成测试              :c2, after b2, 10d
    用户验收测试          :c3, after c2, 7d
    
    section 部署
    生产环境部署          :d1, after c3, 3d
    正式上线              :milestone, after d1, 0d
```

## 类图示例

类图展示系统的静态结构，包括类、属性、方法及其关系。

```mermaid
classDiagram
    class User {
        +String username
        +String password
        +String email
        +Boolean active
        +login()
        +logout()
        +updateProfile()
    }
    
    class Article {
        +String title
        +String content
        +Date publishDate
        +Boolean published
        +publish()
        +edit()
        +delete()
    }
    
    class Comment {
        +String content
        +Date commentDate
        +addComment()
        +deleteComment()
    }
    
    class Category {
        +String name
        +String description
        +addArticle()
        +removeArticle()
    }
    
    User "1" -- "*" Article : 撰写
    User "1" -- "*" Comment : 发表
    Article "1" -- "*" Comment : 包含
    Article "1" -- "*" Category : 属于
```

## 状态图示例

状态图展示对象在其生命周期中经历的状态序列。

```mermaid
stateDiagram-v2
    [*] --> 草稿
    
    草稿 --> 审核中 : 提交
    审核中 --> 草稿 : 驳回
    审核中 --> 已通过 : 批准
    已通过 --> 已发布 : 发布
    已发布 --> 已归档 : 归档
    已发布 --> 草稿 : 撤回
    
    state 已发布 {
        [*] --> 可见
        可见 --> 隐藏 : 临时隐藏
        隐藏 --> 可见 : 恢复
        可见 --> [*]
        隐藏 --> [*]
    }
    
    已归档 --> [*]
```

## 饼图示例

饼图非常适合展示比例和百分比数据。

```mermaid
pie title 网站流量来源分析
    "搜索引擎" : 45.6
    "直接访问" : 30.1
    "社交媒体" : 15.3
    "引荐链接" : 6.4
    "其他来源" : 2.6
```

## 总结

Mermaid 是一个强大的工具，可以在 Markdown 文档中创建各种类型的图表。本文演示了如何使用流程图、时序图、甘特图、类图、状态图和饼图。这些图表可以帮助你更清晰地表达复杂的概念、流程和数据结构。

使用 Mermaid 时，只需在代码块中指定 mermaid 语言，并使用简洁的文本语法描述图表。Mermaid 会自动将这些描述转换为精美的可视化图表。

试试在你的下一篇技术博客文章或项目文档中使用 Mermaid 图表吧——它们会让你的内容更加专业、更容易理解！