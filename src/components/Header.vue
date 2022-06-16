<template>
    <div class='header'>
        <div class="logo">
            <img class="logoImg" src="../../public/logo.png"/>
        </div>
        <div class="menu">
            <nav v-for="navItem in navList"
            :key="navItem.name" 
            :id="navItem.name"
            class="nav"
            :class="{'active': navItem.isActive}"
            @click="$router.push(navItem.path) "
            @mouseup="setIsactive">
                {{navItem.name}}
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            navList: [
                {
                    name: 'Home',
                    path: '/',
                    isActive: 'true'
                },
                {
                    name: 'Upload',
                    path: '/cats/new',
                    isActive: false
                },
                {
                    name: 'View',
                    path: '/cats/my',
                    isActive: false
                }   
            ]}
    },
    methods: {
        setIsactive(e) {
            const nameAticveNav = e.target.id;
            this.navList = this.navList.map(elem=> { 
                if (elem.name === nameAticveNav){ 
                    elem.isActive = true;
                    return elem;
                } else {
                    elem.isActive = false;
                    return elem;
                }
            })
        }
    }
}

</script>

<style>
    .header {
        padding: 10px 0;
        width: 100%;
        height: 100px;
        position: sticky;
        top: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: rgb(241, 241, 241);
        border-bottom: 2px solid rgb(211, 184, 32);
    }
    .menu {
        display: flex;
        gap: 20px;
    }
    .nav {
        cursor: pointer;
    }
    .active{
        border-bottom: 2px solid rgb(211, 184, 32);
    }
    .logoImg {
        width: 70px;
        height: 70px;
    }
</style>