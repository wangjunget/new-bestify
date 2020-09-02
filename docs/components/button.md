### button

常用的操作按钮。

### 基本用法

基础的按钮用法。

:::demo
```html
<template>
  <nb-button
    text="默认按钮"
  />
  <nb-button
    text="主要按钮"
    type="primary"
  />
  <nb-button
    text="朴素按钮"
    plain
  />
  <nb-button
    text="圆角"
    plain
    round
  />
  <nb-button
    text="圆形"
    plain
    circle
  />
  <nb-button
    text="主要按钮"
    type="primary"
    disabled
  />
  <nb-button
    text="文字按钮"
    type="text"
  />
</template>
```
:::

### 自定义样式

:::demo
```html
<template>
  <nb-button
    text="自定义宽高"
    width="300"
    height="100"
  />
  <nb-button
    text="自定义背景字体"
    width="300"
    height="100"
    backgroundColor="#999"
    color="#000"
  />
  <nb-button
    text="自定义边框"
    width="300"
    height="100"
    border="2px solid #000"
    borderRadius="20"
  />
</template>
```
:::

### 禁用 loading 聚焦

:::demo
```html
<template>
  <nb-button
    text="禁用"
    disabled
    type="success"
  />
  <nb-button
    text="loading"
    loading
    type="success"
  />
  <nb-button
    text="聚焦"
    autofocus
    type="success"
  />
</template>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| width     |      -      | string/number | — | — |
| height | - | string/number |  | |
| backgroundColor | - | string | — | — |
| color | - | string | — | true |
| border | - | string/number | — |  |
| borderRadius | - | string/number | — | — |
| type | - | string | primary/success/info/warning/danger/text | default |
| plain | - | boolean | true/false | flase |
| circle | - | boolean | true/false | flase |
| round | - | boolean | true/false | flase |
| loading | - | boolean | true/false | flase |
| disabled | - | boolean | true/false | flase |
| autofocus | - | boolean | true/false | flase |
| text | - | string | - |  |

