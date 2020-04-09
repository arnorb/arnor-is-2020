<template>
    <b-container fluid :class="{ 'nav-container-hero': isDark }">
        <b-container class="pb-3">
            <b-navbar class="align-items-start flex-column flex-md-row" :class="{ dark: isDark }">
                <h4>
                    <b-navbar-brand to="/">
                        Arnór Bogason
                    </b-navbar-brand>
                </h4>

                <b-navbar-nav class="ml-md-auto">
                    <b-nav-item to="/verkefni">verkefni</b-nav-item>
                    <b-nav-item to="/um-mig">um mig</b-nav-item>
                    <b-nav-item to="/hafa-samband">hafa samband</b-nav-item>
                </b-navbar-nav>
            </b-navbar>
        </b-container>

    </b-container>
</template>

<script>
export default {
    props: {
        isDark: Boolean 
    }
}
</script>

<style lang="scss" scoped>
    h4 {
        font-weight: 700;
        font-size: 1.5rem;
    }

    .nav-container-hero {
        background-color: #234874;

        a, .nav-link {
            color: #fff;
        }
    }

</style>