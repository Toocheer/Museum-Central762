# Frontmatter使用指导

## type

`必需` `string` 指定页面使用的模板类型

#### 参数

* `Home`: 主页
* `Landingpage`: 落地页，一般用于各栏目的扉页列表
* `Detail`: 图文混排页，用于漫游、展览等内页
* `Underconstruction`: 未建成页，仅用于栏目未建成时作占位符
* `Page`: 一般的Markdown页面，用于历史、专栏等内页

#### 用例

```
type: Home
```



## title

`可选` `string` 指定页面大标题

#### 用例

```
title: 历史
```



## subtitle

`可选` `string` 指定页面副标题

#### 用例

```
subtitle: History
```



## description

`可选` `string` 指定页面顶栏简介

#### 用例

```
description: 寸尺亦能去西东，讲述中原地方铁路的兴起的发展
```

**注意：可以使用html标签对内容进行排版。**



## meta

`必需` `array` 描述页面的关键词和简介，用于搜索引擎优化

#### 参数

* `name`: 用于描述该项指定的meta类型，可选 `keywords` 或 `description`
* `content`: 用于描述该项的内容

#### 用例

```
meta:
  - name: keywords
    content: 驻汝铁路, 驻马店窄轨, 老君庙
  - name: description
    content: 驻汝铁路，1981年建成通车，由河南省地方铁路局驻马店地方铁路指挥部管辖。
```

**注意：每项前面都必须带`- `，因为这是一个列表项。此外，keywords的内容应用半角逗号分隔。**



## permalink

`必需` `string` 指定本页面的路径

#### 用例

```
permalink: /
```



## search

`可选` `boolean` 指定本页面是否被搜索插件索引

#### 用例

```
search: false
```



## special

`仅Home页` `string` 指定首页顶栏入口，提示网站的最新专题内容

#### 参数

* `title`: 标题
* `subtitle`: 副标题
* `description`: 描述文字
* `link`: 指向链接。内链可用 `/your/special/page/route/` 形式，外链可直接粘贴URL
* `bgImg`: 背景图片URL
* `colorBg`: 背景颜色，不带#号
* `color`: 文字颜色，不带#号

#### 用例

```
special:
  title: 小火车再出发！
  subtitle: 中原铁道(数字)博物馆 × 豫见铁路公园
  description: 查看专题报道 ›
  link: https://mp.weixin.qq.com/s/RyHyUdscQO_9E11lR2qgqg
  bgImg: https://s1.ax1x.com/2022/04/30/Lz6ujJ.png
  colorBg: 314c1e
  color: ccedb5
```



## updates

`仅Home页` `string` 指定首页顶栏入口，提示网站的更新内容

#### 参数

* `date`: 更新日期
* `info`: 更新简介

#### 用例

```
updates:
  date: 2022年10月
  info: 博物馆第一期建设
```



## jumboItems

`仅Home页` `array` 指定网站的轮播图

#### 参数

* `title`: 标题
* `subtitle`: 副标题
* `description`: 描述文字
* `jumboImg`: 图片URL
* `link`: 指向链接。内链可用 `/your/tour/page/route/` 形式，外链可直接粘贴URL
* `isActive`: `boolean` 可选，指定轮播的首图。应为唯一。

#### 用例

```
jumboItems:
  - title: 仍在运用的老河口机车转盘
    subTitle: 湖北老河口 · 光化水泥厂
    jumboImg: https://s4.ax1x.com/2022/01/19/7DIvjA.jpg
    link: ./#
    isActive: true
  - title: 废弃机车中的前方展望
    subTitle: 河南登封 · 朝杞铁路炮房沟站
    jumboImg: https://s4.ax1x.com/2022/01/19/7DIjcd.jpg
    link: /tour/chaoqi
```

**注意：每项前面都必须带`- `，因为这是一个列表项，即便只有一项。**



## categories

`仅Home页` `array` 指定网站的首页栏目入口网格

#### 参数

* `title`: 标题
* `subtitle`: 副标题
* `description`: 描述文字
* `bgImg`: 图片URL
* `link`: 指向链接。内链可用 `/your/tour/page/route/` 形式，外链可直接粘贴URL

#### 用例

```
categories:
  - title: 漫游
    subtitle: Tour
    description: 坐地日行千万里，探寻中原大地硕果累累的轨道遗迹
    bgImg: https://s4.ax1x.com/2022/01/19/7DLmDJ.jpg
    link: /tour
  - title: 车辆
    subtitle: Depot
    description: 动静交错之间，一探它们曾经风驰电掣的身影
    bgImg: https://s4.ax1x.com/2022/01/19/7DLnb9.jpg
    link: /depot
```

**注意：每项前面都必须带`- `，因为这是一个列表项，即便只有一项。**



## pages

`仅Landingpage页` `array` 指定落地页的子页面网格

#### 参数

* `title`: 标题
* `badge`: 角标文字
* `color`: 角标文字颜色，根据角标背景颜色搭配可选 `light` 或 `dark`
* `bgColor`: 角标背景，可选 `primary` `success` `danger` `warning` 或 `info`
* `link`: 指向链接。目前仅限内链形式

#### 用例

```
pages:
  - title: 朝杞铁路建筑展
    badge: 影像展
    color: dark
    bgColor: light
    bgImg: https://s4.ax1x.com/2022/01/14/78SVfA.jpg
    link: /expo/chaoqi-architecture
  - title: 刊物封面和目录展
    badge: 实物展
    color: dark
    bgColor: light
    bgImg: https://s4.ax1x.com/2022/01/21/72UdsO.jpg
    link: /expo/magazines
```

**注意：每项前面都必须带`- `，因为这是一个列表项，即便只有一项。**



## items

`仅Detail页` `array` 指定页面的展示内容

#### 参数

* `name`: 插槽ID，要和Markdown插槽ID匹配。
* `w`: 该插槽全部图片的纵横比的横向比例值。若遇图片横纵混排，取该插槽占大多数的图片朝向。例如一般推荐照片使用横向，文稿使用纵向。
* `h`: 该插槽全部图片的纵横比的纵向比例值
* `mainPic`: `可选` `string` 主图
  * `url` 主图URL
  * `alt` `可选` 主图图注
* `pics`: `可选` `array` 小图
  * `url` 小图URL
  * `alt` `可选` 小图图注

#### 用例

```
items:
  - name: 反修渡槽
    w: 3
    h: 2
    mainPic: 
      url: https://s4.ax1x.com/2022/01/14/78XxmD.jpg
      alt: 渡槽筑字
    pics:
      - url: https://s4.ax1x.com/2022/01/14/78XjOO.jpg
        alt: 渡槽落款：城关公社西街大队
      - url: https://s4.ax1x.com/2022/01/14/78SVfA.jpg
        alt: 渡槽跨过窄轨铁路
      - url: https://s4.ax1x.com/2022/01/14/78SEYd.jpg
        alt: 龙泉村的弯道
   - name: 龙泉明洞
    w: 3
    h: 2
    mainPic: 
      url: https://s4.ax1x.com/2022/01/14/78SFTe.jpg
      alt: 名为明洞，实为隧道
    pics:
      - url: https://s4.ax1x.com/2022/01/14/78SiwD.jpg
        alt: 龙泉明洞入口
      - url: https://s4.ax1x.com/2022/01/14/78SPeO.jpg
        alt: 另一端入口，桥隧相连
```

**注意：每项前面都必须带`- `，因为这是一个列表项，即便只有一项。**



## Markdown正文插槽

`仅Detail页` 指定插槽内容

#### 参数

* `::: slot`: Markdown正文中的插槽ID，必须和 `items` 中的 `name` 值相匹配。结束符为 `:::`，之间为内容。

#### 用例

```
::: slot 反修渡槽
## 反修渡槽

位于河南省新密市平陌镇龙泉村，近龙泉村退役军人服务站。上有“反修渡槽”筑字。
:::

::: slot 龙泉明洞
## 龙泉明洞

位于河南省新密市平陌镇龙泉村四组东北方，桥头景区附近，朝杞铁路代表性的隧道之一。

隧道西侧出口处有一小桥和平交道口，不远则为反修渡槽；东侧为胜天桥。
:::
```



