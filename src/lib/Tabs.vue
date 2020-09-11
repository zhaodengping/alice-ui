<template>
<div class="A-tabs">
    <div class="A-tabs-nav" ref="container">
        <div v-for='(item,index) in titles' :key="index" class="A-tabs-nav-item" @click="select(item)" :ref="el => { if (item==selected) navItems=el }" :class="{selected:selected==item}">{{item}}</div>
        <div class="indicator" ref="indicator"></div>
    </div>
    <div class="A-tabs-content">
        <component v-for="c in results" :key="c" :is=" c" class="A-tabs-content-item" :class="{contentSelected:c.props.title==selected}" />
    </div>
</div>
</template>

<script lang="ts">
import {
    onMounted,
    ref,
    watchEffect
} from 'vue'
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

        let select = (title: string) => {
            context.emit('update:selected', title)
        }
        const navItems = ref < HTMLDivElement > (null)
        const container = ref < HTMLDivElement > (null);
        const indicator = ref < HTMLDivElement > (null);
        onMounted(() => {
            watchEffect(() => {
                const {
                    width
                } = navItems.value.getBoundingClientRect()
                indicator.value.style.width = width + 'px';
                const {
                    left: left1
                } = container.value.getBoundingClientRect()
                const {
                    left: left2
                } = navItems.value.getBoundingClientRect()
                indicator.value.style.left = (left2 - left1) + 'px'
            })
        })

        return {
            results,
            titles,
            select,
            navItems,
            container,
            indicator
        }
    }
}
</script>

<style lang="scss">
.A-tabs-nav {
    position: relative;
    display: flex;
    margin-bottom: 20px;
    border-bottom: 1px solid #f2f2f2;
    padding-bottom: 10px;

    .A-tabs-nav-item {
        margin-right: 10px;
        cursor: pointer;
    }

    .indicator {
        position: absolute;
        bottom: -1px;
        left: 0;
        background-color: #409eff;
        width: 100px;
        height: 3px;
        transition: all 250ms;
    }
}

.A-tabs-content {
    &-item {
        display: none;
    }

    .contentSelected {
        display: block
    }
}
</style>
