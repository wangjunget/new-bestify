<template>
    <div>
        <input v-model="text" placeholder="这可太难了">       
    </div>
</template>
<script>
export default {
    name: "nb-select",
    data() {
        return {
            text: ""
        }
    }
}
</script>>
<style lang="scss" scoped>
input {
    height: 36px;
    width: 200px;
    font-size: 16px;
    padding-left: 10px;
}
</style>>