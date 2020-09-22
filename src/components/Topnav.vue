<template>
<div class="topnav">
    <router-link to='/' class="logo">
        <svg class="icon logo-color" aria-hidden="true">
            <use xlink:href="#icon-learn"></use>
        </svg>
    </router-link>

    <div class="toggleAside" @click="toggleMenu" v-if='isDoc'>
        <svg class="icon logo-color" aria-hidden="true">
            <use xlink:href="#icon-menu"></use>
        </svg>
    </div>
    <router-link to='/' class="home-logo">
        <svg class="icon logo-color" aria-hidden="true">
            <use xlink:href="#icon-learn"></use>
        </svg>
    </router-link>
    <div class="menu">
        <ul>
            <li>文档</li>
        </ul>
    </div>

</div>
</template>

<script>
import {
    inject
} from 'vue'
export default {
    data() {
        return {
            isDoc: false
        }
    },
    created() {
        if (this.$route.fullPath == '/') {
            this.isDoc = false
        } else {
            this.isDoc = true
        }
    },
    setup() {
        const menuVisible = inject('showMenu')
        const toggleMenu = () => {
            menuVisible.value = !menuVisible.value
        }
        return {
            toggleMenu,
        }
    }
}
</script>

<style lang="scss" scoped>
.topnav {
    position: fixed;
    top: 0;
    background: #fff;
    display: flex;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    padding: 16px;
    z-index: 100;
    width: 100%;
    border-bottom: 1px solid #f2f2f2;

    .logo {
        display: flex;
        align-items: center;

        &:hover {
            cursor: pointer;
        }

        .logo-color {
            margin-right: 10px;
            color: #409eff;
            font-size: 40px;
        }
    }

    .menu ul {
        white-space: nowrap;
        flex-wrap: nowrap;

        >li {
            margin: 0 1em;
            color: #304455;
        }
    }

    .toggleAside {
        display: none;
        width: 40px;
        border-radius: 10px;
        font-size: 40px;
        color: #409eff;
    }

    .home-logo {
        display: none;
    }

    @media (max-width: 500px) {
        >.logo {
            display: none;
            margin: 0 auto;
        }

        >.toggleAside {
            display: block;
        }

        .home-logo {
            display: block;
            font-size: 30px;
            color: #409eff;
        }
    }
}
</style>
