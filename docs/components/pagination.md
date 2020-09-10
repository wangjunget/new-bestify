## Pagination

### 基础样式
pageCount需为[7-21]的奇数
:::demo
```html
<template>
  <span>总页数少于 7 个</span>
  <nb-pagination :total="200" :pageSize="30"/>
</template>
<template>
  <span>总页数多于 7 个</span>
  <nb-pagination :total="200"/>
</template>
<template>
  <span>自定义显示页的个数（包含···）</span>
  <nb-pagination :total="200" :pageCount="9"/>
</template>
```
:::

### 自定义切换按钮文字
:::demo
```html
<template>
  <nb-pagination :total="200" prevText="上一页" nextText="下一页"/>
  <nb-pagination :total="200" prevText="⬅️" nextText="➡️"/>
</template>
```
:::

### 扩展内容
:::demo
```html
<template>
  <span>显示总数</span>
  <nb-pagination :total="200" showTotal/>
</template>

<template>
  <span>背景色</span>
  <nb-pagination :total="200" background/>
</template>

<template>
  <span>跳转</span>
  <nb-pagination :total="200" showJump/>
</template>
```
:::

### 完整功能
:::demo
```html
<template>
  <nb-pagination
    :total="200"
    :pageSize="10"
    :pageCount="9"
    prevText="上一页"
    nextText="下一页"
    showTotal
    showJump
  />
</template>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| total     | 总条目数           | number | — | — |
| pageSize | 每页显示条目个数 | number | — | — |
| pageCount | 页码按钮的数量，当总页数超过该值时会折叠 | number | 大于等于 7 且小于等于 21 的奇数 | — |
| currentPage | 当前页数 | number | — | 1 |
| prevText | 替代图标显示的上一页文字 | string | — | < |
| nextText | 替代图标显示的下一页文字 | string | — | > |
| showJump | 是否显示跳转功能 | boolean | — | false |
| showTotal | 是否显示总条数 | boolean | — | false |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| currentChange | 当前页改变时会触发 | 当前页 |
| prevClick | 用户点击上一页按钮改变当前页后触发 | 当前页 |
| nextClick | 用户点击下一页按钮改变当前页后触发 | 当前页 |
