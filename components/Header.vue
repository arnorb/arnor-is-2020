<template>
    <b-container class="mb-3">
        <b-navbar>
            <h4>
                <b-navbar-brand to="/">
                    Arnór Bogason
                </b-navbar-brand>
            </h4>

            <b-navbar-nav class="ml-auto">
                <b-nav-item to="/verkefni">verkefni</b-nav-item>
                <b-nav-item to="/">um mig</b-nav-item>
                <b-nav-item to="/">hafa samband</b-nav-item>
            </b-navbar-nav>
        </b-navbar>
    </b-container>
</template>

<style lang="scss" scoped>
    h4 {
        font-weight: 700;
        font-size: 1.5rem;
    }
    .nav-item {
        &:last-of-type a {
            padding-right: 0;
        }

        a {
            font-weight: 500;
            font-size: 1rem;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }
</style>