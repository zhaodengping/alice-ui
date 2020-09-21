<template>
<div class="A-tabs">
    <div :class="[theme=='common'?'A-tabs-nav':'A-tabs-card-nav']" ref="container">
        <div class="tab-head">
            <div v-for='(item,index) in titles' :key="index" class="A-tabs-nav-item" @click="select(item)" :ref="el => { if (item==selected) navItems=el }" :class="[selected===item?'selected':'']">{{item}}</div>
        </div>
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
        },
        theme: {
            type: String,
            default: 'common'
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
        let indicator = null
        indicator = ref < HTMLDivElement > (null);
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
$color:#f2f2f2;

.A-tabs-nav {
    position: relative;
    margin-bottom: 20px;
    border-bottom: 1px solid $color;
    padding-bottom: 10px;

    .tab-head {
        display: flex;

        .A-tabs-nav-item {
            margin-right: 10px;
            cursor: pointer;
        }

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

.A-tabs-card-nav {
    position: relative;
    margin-bottom: 20px;
    border-bottom: 1px solid #e4e7ed;

    .indicator {
        position: absolute;
        bottom: -1px;
        left: 0;
        background-color: #fff;
        width: 100px;
        height: 3px;
        transition: all 250ms;
    }

    .tab-head {
        display: inline-block;
        border: 1px solid #e4e7ed;
        border-bottom: none;
        border-radius: 4px 4px 0 0;

        .A-tabs-nav-item {
            display: inline-block;
            padding: 5px 10px;
            border-left: 1px solid #e4e7ed;

            &:first-child {
                border-left: none;
            }

            &:hover {
                cursor: pointer;
            }
        }

        .A-tabs-nav-item.selected {
            color: #409eff;
        }
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
