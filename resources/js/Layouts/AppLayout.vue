<script setup>
import { ref } from "vue";
import { Head, Link, router } from "@inertiajs/vue3";
import ApplicationMark from "@/Components/ApplicationMark.vue";
import Banner from "@/Components/Banner.vue";
import Dropdown from "@/Components/Dropdown.vue";
import DropdownLink from "@/Components/DropdownLink.vue";
import NavLink from "@/Components/NavLink.vue";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink.vue";
import SidebarDashboard from "../DahboardComponents/SidebarDashboard.vue";
import NavbarDashboard from "../DahboardComponents/NavbarDashboard.vue";

defineProps({
    title: String,
});

const showingNavigationDropdown = ref(false);

const switchToTeam = (team) => {
    router.put(
        route("current-team.update"),
        {
            team_id: team.id,
        },
        {
            preserveState: false,
        }
    );
};

const logout = () => {
    router.post(route("logout"));
};
</script>

<template>
    <div>
        <Head :title="title" />

        <Banner />

        <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
            <div class="fixed w-[17.5rem] top-0 left-0">
                <SidebarDashboard />
            </div>
            <div class="fixed pl-[17.5rem] top-0 right-0 w-full">
                <NavbarDashboard />
            </div>
            <!-- <div class="fixed top-0 left-0 z-40 flex w-screen">
            </div> -->

            <main class="pt-[4.3rem]">
                <slot />
            </main>
        </div>
    </div>
</template>
