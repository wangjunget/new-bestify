### Prograss 进度条

用于展示过程进度状态信息

### 基本用法
:::demo
```html
<template>
  <nb-prograss :value='80'/>
</template>

:::

### 不同状态

:::demo
<template>
  成功
  <nb-prograss :value='40' status='success'/>
  默认
  <nb-prograss :value='60' status='exception'/>
  警告
  <nb-prograss :value='80' status='warning'/>
  危险
  <nb-prograss :value='100' status='danger'/>
</template>
:::

### 宽度配置

:::demo
<template>
  <nb-prograss :value='80' :strokeWidth='20'/>
</template>
:::

### 文本内置

:::demo
<template>
  <nb-prograss :value='80' :strokeWidth='20' :textInside='true'/>
</template>
:::

### 环形进度条

:::demo
<template>
  <nb-prograss :value='80' type='circle' status='exception' :width='160'/>
</template>
:::