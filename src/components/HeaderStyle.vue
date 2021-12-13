<template>
    <nav :class="`nav navbar navbar-expand-lg navbar-light iq-navbar ${stateNavbarStyle}`">
        <div class="container-fluid navbar-inner">
            <router-link to="/" class="navbar-brand ml-3">
                <logo />
                <h4 class="logo-title fw-bold">
                    CCC
                </h4>
            </router-link>
            <div class="sidebar-toggle" data-toggle="sidebar" data-active="true">
                <i class="icon">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" @click="opensidebar">
                        <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                    </svg>
                </i>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import logo from '@/components/custom/Logo/logo';

export default {
    name: 'HeaderStyle1',
    components: {
        logo,
    },

    props: {
        fullsidebar: { type: Boolean, default: false },
    },

    computed: {
        ...mapGetters({
            stateNavbarStyle: 'navbarstyle',
        }),
    },

    methods: {
            ...mapActions({
                navbarstyleChange: 'navbarstyleAction',
            }),
            opensidebar () {
                this.$emit('makefullsidebar', !this.fullsidebar);
            },
    },

    mounted () {
        const navstyle = sessionStorage.getItem('navbarstyle');
        this.navbarstyleChange(navstyle);
    },
};
</script>
