<template>
    <div>
        <Header />
        <LeftNav />
        <Main />
        <Footer />
    </div>
</template>

<script>
import Header from '../components/TopNavigation.vue'
import LeftNav from '../components/LeftNavigation.vue'
import Main from '../components/HelloWorld.vue'
import Footer from '../components/HelloWorld.vue'

export default {
    components: {
        Header,
        LeftNav,
        Main,
        Footer
    }
}
</script>