<template>
<div class="topnav">
    <router-link to='/' class="logo">
        <svg class="icon logo-color" aria-hidden="true">
            <use xlink:href="#icon-learn"></use>
        </svg>
    </router-link>
    <div class="menu">
        <ul>
            <li>学习</li>
        </ul>
    </div>
    <div class="toggleAside" @click="toggleMenu"></div>
</div>
</template>

<script>
import {
    inject
} from 'vue'
export default {
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
        position: absolute;
        left: 10px;
        top: 10px;
        width: 40px;
        height: 40px;
        border-radius: 10px;
        background-color: #f2f2f2;
    }

    @media (max-width: 500px) {
        >.menu {
            display: none;
        }

        >.logo {
            margin: 0 auto;
        }

        >.toggleAside {
            display: block;
        }
    }
}
</style>
