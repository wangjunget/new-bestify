### Checkbox

### 基本用法

:::demo

```html
<template>
  <nb-checkbox
    label="这就离谱"
    :checkboxList="applicantList"
    valueKey="accountName"
    dsplayValue="name"
    :checked.sync="applicant"
    :multiple="true"
  />
</template>
<script>
  export default {
    data() {
      return {
        applicantList: [
          { name: "月亮不睡你不睡", accountName: "1" },
          { name: "你是人间秃头妹", accountName: "2" },
        ],
        applicant: [], //绑定值
      };
    },
  };
</script>
```
