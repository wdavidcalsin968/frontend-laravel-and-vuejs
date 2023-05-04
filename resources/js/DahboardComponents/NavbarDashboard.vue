<script setup>
import { ref } from "vue";
import { Head, Link, router } from "@inertiajs/vue3";
import ApplicationMark from "@/Components/ApplicationMark.vue";
import Banner from "@/Components/Banner.vue";
import Dropdown from "@/Components/Dropdown.vue";
import DropdownLink from "@/Components/DropdownLink.vue";
import NavLink from "@/Components/NavLink.vue";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink.vue";

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


const listNav = [
        {
          label: 'Item 1',
          link: '#',
          iconPath: 'M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V64 368 480c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z',
          iconColor: 'currentColor'
        },
        {
          label: 'Item 2',
          link: '#',
          iconPath: 'M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352z',
          iconColor: 'currentColor'
        },
        {
          label: 'Item 3',
          link: '#',
          iconPath: 'M320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z',
          iconColor: 'currentColor'
        },
        {
          label: 'Item 4',
          link: '#',
          iconPath: 'M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z',
          iconColor: 'currentColor'
        },
        {
          label: 'Item 5',
          link: '#',
          iconPath: 'M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z',
          iconColor: 'currentColor'
        },
        {
          label: 'Item 6',
          link: '#',
          iconPath: 'M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z',
          iconColor: 'currentColor'
        }
      ]
  

   
</script>

<template>
    <nav
        class="w-full h-[4.55rem] transition-transform -translate-x-52 sm:translate-x-0 bg-white shadow-md dark:bg-gray-800 border-b border-solid border-black/10">
        <div class="w-full px-8 h-full">
            <div class="flex justify-between items-center content-center h-full  w-full">
                <div class="flex justify-between">
                    <!-- <div class="flex">
                        <a href="https://flowbite.com/" class="flex items-center">
                        <img src="/logo_unap.png" class="h-8 mr-5" alt="Flowbite Logo" />
                        <span
                            class="hidden lg:block self-center text-xl font-semibold whitespace-nowrap dark:text-white text-slate-800">UNA
                            Puno</span>
                            <font-awesome-icon icon="fa-duotone fa-flag-usa" size="xs" style="--fa-primary-color: #2318c9; --fa-secondary-color: #eb0000;" />
                        </a>
                    </div> -->
                    <svg aria-hidden="true" class="h-6 w-6" :fill="currentColor" viewBox="0 0 448 512">! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.<path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                </div>
                <div class="hidden md:flex ">
                    <div class=" flex ">
                        <a v-for="(item, index) in listNav" :key="index" :href="item.link" class="flex items-center p-2 ml-5 rounded-md hover:bg-black/10 group">
                            <svg aria-hidden="true" class="h-4 w-4 text-blue-500 hover:text-white" :fill="item.iconColor" viewBox="0 0 448 512">
                                <path :d="item.iconPath"/>
                            </svg>
                           
                        </a>

                        
                    </div>
                </div>


                    <!-- <div
                                    class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"
                                >
                                    <NavLink
                                        :href="route('dashboard')"
                                        :active="route().current('dashboard')"
                                    >
                                        Dashboard
                                    </NavLink>
                                </div> -->
                

                <div class="hidden sm:flex sm:items-center sm:ml-6">
                    <div class="ml-3 relative">
                        <Dropdown v-if="$page.props.jetstream
                                .hasTeamFeatures
                            " align="right" width="60">
                            <template #trigger>
                                <span class="inline-flex rounded-md">
                                    <button type="button"
                                        class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50 dark:active:bg-gray-700 transition ease-in-out duration-150">
                                        {{
                                            $page.props.auth.user
                                                .current_team.name
                                        }}

                                        <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                        </svg>
                                    </button>
                                </span>
                            </template>

                            <template #content>
                                <div class="w-60">
                                    <template v-if="$page.props.jetstream
                                                .hasTeamFeatures
                                            ">
                                        <div class="block px-4 py-2 text-xs text-gray-400">
                                            Manage Team
                                        </div>

                                        <DropdownLink :href="route(
                                                    'teams.show',
                                                    $page.props.auth
                                                        .user
                                                        .current_team
                                                )
                                                ">
                                            Team Settings
                                        </DropdownLink>

                                        <DropdownLink v-if="$page.props
                                                    .jetstream
                                                    .canCreateTeams
                                                " :href="route(
                                                'teams.create'
                                            )
                                            ">
                                            Create New Team
                                        </DropdownLink>

                                        <template v-if="$page.props.auth
                                                    .user.all_teams
                                                    .length > 1
                                                ">
                                            <div class="border-t border-gray-200 dark:border-gray-600" />

                                            <div class="block px-4 py-2 text-xs text-gray-400">
                                                Switch Teams
                                            </div>

                                            <template v-for="team in $page
                                                        .props.auth.user
                                                        .all_teams" :key="team.id">
                                                <form @submit.prevent="switchToTeam(
                                                            team
                                                        )
                                                        ">
                                                    <DropdownLink as="button">
                                                        <div class="flex items-center">
                                                            <svg v-if="team.id ==
                                                                    $page
                                                                        .props
                                                                        .auth
                                                                        .user
                                                                        .current_team_id
                                                                    " class="mr-2 h-5 w-5 text-green-400"
                                                                xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke-width="1.5"
                                                                stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>

                                                            <div>
                                                                {{
                                                                    team.name
                                                                }}
                                                            </div>
                                                        </div>
                                                    </DropdownLink>
                                                </form>
                                            </template>
                                        </template>
                                    </template>
                                </div>
                            </template>
                        </Dropdown>
                    </div>

                    <div class="ml-3 relative">
                        <Dropdown align="right" width="48">
                            <template #trigger>
                                <button v-if="$page.props.jetstream
                                            .managesProfilePhotos
                                        "
                                    class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition">
                                    <img class="h-8 w-8 rounded-full object-cover" :src="$page.props.auth.user
                                                .profile_photo_url
                                            " :alt="$page.props.auth.user.name" />
                                </button>

                                <span v-else class="inline-flex rounded-md">
                                    <button type="button"
                                        class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50 dark:active:bg-gray-700 transition ease-in-out duration-150">
                                        {{
                                            $page.props.auth.user
                                                .name
                                        }}

                                        <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </button>
                                </span>
                            </template>

                            <template #content>
                                <div class="block px-4 py-2 text-xs text-gray-400">
                                    Manage Account
                                </div>

                                <DropdownLink :href="route('profile.show')">
                                    Profile
                                </DropdownLink>

                                <DropdownLink v-if="$page.props.jetstream
                                            .hasApiFeatures
                                        " :href="route('api-tokens.index')
                ">
                                    API Tokens
                                </DropdownLink>

                                <div class="border-t border-gray-200 dark:border-gray-600"></div>

                                <form @submit.prevent="logout">
                                    <DropdownLink as="button">
                                        Log Out
                                    </DropdownLink>
                                </form>
                            </template>
                        </Dropdown>
                    </div>
                </div>

                <div class="-mr-2 flex items-center sm:hidden">
                    <button
                        class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"
                        @click="showingNavigationDropdown =
                                !showingNavigationDropdown
                                ">
                        <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path :class="{
                                        hidden: showingNavigationDropdown,
                                        'inline-flex':
                                            !showingNavigationDropdown,
                                    }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                            <path :class="{
                                        hidden: !showingNavigationDropdown,
                                        'inline-flex':
                                            showingNavigationDropdown,
                                    }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <div :class="{
                    block: showingNavigationDropdown,
                    hidden: !showingNavigationDropdown,
                }" class="sm:hidden bg-white shadow-md px-2">
            <div class="pt-2 pb-3 space-y-1">
                <ResponsiveNavLink :href="route('dashboard')" :active="route().current('dashboard')">
                    Dashboard
                </ResponsiveNavLink>
            </div>

            <div class="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600">
                <div class="flex items-center px-4 hover:bg-gray-100">
                    <div v-if="$page.props.jetstream
                                .managesProfilePhotos
                            " class="shrink-0 mr-3">
                        <img class="h-10 w-10 rounded-full object-cover" :src="$page.props.auth.user
                                    .profile_photo_url
                                " :alt="$page.props.auth.user.name" />
                    </div>

                    <div>
                        <div class="font-medium text-base text-gray-800 dark:text-gray-200">
                            {{ $page.props.auth.user.name }}
                        </div>
                        <div class="font-medium text-sm text-gray-500">
                            {{ $page.props.auth.user.email }}
                        </div>
                    </div>
                </div>

                <div class="mt-3 space-y-1">
                    <ResponsiveNavLink :href="route('profile.show')" :active="route().current('profile.show')">
                        Profile
                    </ResponsiveNavLink>

                    <ResponsiveNavLink v-if="$page.props.jetstream.hasApiFeatures" :href="route('api-tokens.index')"
                        :active="route().current('api-tokens.index')
                            ">
                        API Tokens
                    </ResponsiveNavLink>

                    <form method="POST" @submit.prevent="logout">
                        <ResponsiveNavLink as="button">
                            Log Out
                        </ResponsiveNavLink>
                    </form>

                    <template v-if="$page.props.jetstream.hasTeamFeatures">
                        <div class="border-t border-gray-200 dark:border-gray-600" />

                        <div class="block px-4 py-2 text-xs text-gray-400">
                            Manage Team
                        </div>

                        <ResponsiveNavLink :href="route(
                                'teams.show',
                                $page.props.auth.user
                                    .current_team
                            )
                            " :active="route().current('teams.show')">
                            Team Settings
                        </ResponsiveNavLink>

                        <ResponsiveNavLink v-if="$page.props.jetstream.canCreateTeams
                            " :href="route('teams.create')" :active="route().current('teams.create')
        ">
                            Create New Team
                        </ResponsiveNavLink>

                        <template v-if="$page.props.auth.user.all_teams
                                .length > 1
                            ">
                            <div class="border-t border-gray-200 dark:border-gray-600" />

                            <div class="block px-4 py-2 text-xs text-gray-400">
                                Switch Teams
                            </div>

                            <template v-for="team in $page.props.auth.user
                                .all_teams" :key="team.id">
                                <form @submit.prevent="switchToTeam(team)
                                    ">
                                    <ResponsiveNavLink as="button">
                                        <div class="flex items-center">
                                            <svg v-if="team.id ==
                                                $page.props.auth
                                                    .user
                                                    .current_team_id
                                                " class="mr-2 h-5 w-5 text-green-400"
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <div>
                                                {{ team.name }}
                                            </div>
                                        </div>
                                    </ResponsiveNavLink>
                                </form>
                            </template>
                        </template>
                    </template>
                </div>
            </div>
        </div>
    </nav>
</template>
