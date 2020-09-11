<template>
<div class="A-tabs">
    <div class="A-tabs-nav">
        <div v-for='(item,index) in titles' :key="index" class="A-tabs-nav-item" @click="select(item)" :class="{selected:selected==item}">{{item}}</div>
    </div>
    <component :is="current"></component>
</div>
</template>

<script lang="ts">
export default {
    props: {
        selected: {
            type: String
        }
    },
    setup(props, context) {
        let results = context.slots.default()
        let titles = results.map(item => {
            return item.props.title
        })
        let current = results.filter(item => {
            return item.props.title == props.selected
        })[0]
        let select = (title: string) => {
            context.emit('update:selected', title)
        }
        return {
            results,
            titles,
            current,
            select
        }
    }
}
</script>

<style lang="scss">
.A-tabs-nav {
    display: flex;
    border-bottom: 1px solid #f2f2f2;

    .A-tabs-nav-item {
        margin-right: 10px;
    }

    .selected {
        color: #409eff;
    }
}
</style>
