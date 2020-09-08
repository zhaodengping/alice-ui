<template>
    <div>
        <div v-for='(item,index) in titles' :key="index">{{item}}</div>
        <component v-for="(c,index) in results" :key="index" :is="c"></component>
    </div>
</template>
<script lang='ts'>
export default {
    setup(props,context){
        const results=context.slots.default()
        let titles = results.map(item=>{
            return item.props.title
        })
        return {results,titles}
    }
}
</script>