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
</script>

<template>
    <div>
        <Head :title="title" />

        <Banner />

        <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
            <div class="fixed top-0 left-0 z-40 flex w-screen">
                <aside
                    id="default-sidebar"
                    class="w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 border-r border-solid border-black/10"
                    aria-label="Sidebar"
                >
                    <div
                        class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800"
                    >
                        <h2
                            class="w-full p-5 text-gray-900 rounded-lg dark:text-white uppercase text-center font-bold text-2xl"
                        >
                            Menu
                        </h2>
                        <ul class="space-y-2 font-medium">
                            <li>
                                <a
                                    href="#"
                                    class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    <svg
                                        aria-hidden="true"
                                        class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                                        ></path>
                                        <path
                                            d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                                        ></path>
                                    </svg>
                                    <span class="ml-3">Inicio</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    <svg
                                        aria-hidden="true"
                                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                        ></path>
                                    </svg>
                                    <span class="flex-1 ml-3 whitespace-nowrap"
                                        >Registrar Usuario</span
                                    >
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    <svg
                                        aria-hidden="true"
                                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <span class="flex-1 ml-3 whitespace-nowrap"
                                        >Usuarios</span
                                    >
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    <svg
                                        aria-hidden="true"
                                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <span class="flex-1 ml-3 whitespace-nowrap"
                                        >Formulario</span
                                    >
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    <svg
                                        aria-hidden="true"
                                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <span class="flex-1 ml-3 whitespace-nowrap"
                                        >Reporte</span
                                    >
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    <svg
                                        aria-hidden="true"
                                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <span class="flex-1 ml-3 whitespace-nowrap"
                                        >Cerrar Sesion</span
                                    >
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>
                <nav
                    class="w-full h-[4.55rem] transition-transform -translate-x-52 sm:translate-x-0 bg-white dark:bg-gray-800 border-b border-solid border-black/10"
                >
                    <div class="w-full mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="flex justify-between h-16">
                            <div class="flex">
                                <a
                                    href="https://flowbite.com/"
                                    class="flex items-center"
                                >
                                    <img
                                        src="/logo_unap.png"
                                        class="h-8 mr-3"
                                        alt="Flowbite Logo"
                                    />
                                    <span
                                        class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-slate-800"
                                        >UNA Puno</span
                                    >
                                </a>

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
                            </div>

                            <div class="hidden sm:flex sm:items-center sm:ml-6">
                                <div class="ml-3 relative">
                                    <Dropdown
                                        v-if="
                                            $page.props.jetstream
                                                .hasTeamFeatures
                                        "
                                        align="right"
                                        width="60"
                                    >
                                        <template #trigger>
                                            <span
                                                class="inline-flex rounded-md"
                                            >
                                                <button
                                                    type="button"
                                                    class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50 dark:active:bg-gray-700 transition ease-in-out duration-150"
                                                >
                                                    {{
                                                        $page.props.auth.user
                                                            .current_team.name
                                                    }}

                                                    <svg
                                                        class="ml-2 -mr-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke-width="1.5"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </template>

                                        <template #content>
                                            <div class="w-60">
                                                <template
                                                    v-if="
                                                        $page.props.jetstream
                                                            .hasTeamFeatures
                                                    "
                                                >
                                                    <div
                                                        class="block px-4 py-2 text-xs text-gray-400"
                                                    >
                                                        Manage Team
                                                    </div>

                                                    <DropdownLink
                                                        :href="
                                                            route(
                                                                'teams.show',
                                                                $page.props.auth
                                                                    .user
                                                                    .current_team
                                                            )
                                                        "
                                                    >
                                                        Team Settings
                                                    </DropdownLink>

                                                    <DropdownLink
                                                        v-if="
                                                            $page.props
                                                                .jetstream
                                                                .canCreateTeams
                                                        "
                                                        :href="
                                                            route(
                                                                'teams.create'
                                                            )
                                                        "
                                                    >
                                                        Create New Team
                                                    </DropdownLink>

                                                    <template
                                                        v-if="
                                                            $page.props.auth
                                                                .user.all_teams
                                                                .length > 1
                                                        "
                                                    >
                                                        <div
                                                            class="border-t border-gray-200 dark:border-gray-600"
                                                        />

                                                        <div
                                                            class="block px-4 py-2 text-xs text-gray-400"
                                                        >
                                                            Switch Teams
                                                        </div>

                                                        <template
                                                            v-for="team in $page
                                                                .props.auth.user
                                                                .all_teams"
                                                            :key="team.id"
                                                        >
                                                            <form
                                                                @submit.prevent="
                                                                    switchToTeam(
                                                                        team
                                                                    )
                                                                "
                                                            >
                                                                <DropdownLink
                                                                    as="button"
                                                                >
                                                                    <div
                                                                        class="flex items-center"
                                                                    >
                                                                        <svg
                                                                            v-if="
                                                                                team.id ==
                                                                                $page
                                                                                    .props
                                                                                    .auth
                                                                                    .user
                                                                                    .current_team_id
                                                                            "
                                                                            class="mr-2 h-5 w-5 text-green-400"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            fill="none"
                                                                            viewBox="0 0 24 24"
                                                                            stroke-width="1.5"
                                                                            stroke="currentColor"
                                                                        >
                                                                            <path
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round"
                                                                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                            />
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
                                            <button
                                                v-if="
                                                    $page.props.jetstream
                                                        .managesProfilePhotos
                                                "
                                                class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"
                                            >
                                                <img
                                                    class="h-8 w-8 rounded-full object-cover"
                                                    :src="
                                                        $page.props.auth.user
                                                            .profile_photo_url
                                                    "
                                                    :alt="
                                                        $page.props.auth.user
                                                            .name
                                                    "
                                                />
                                            </button>

                                            <span
                                                v-else
                                                class="inline-flex rounded-md"
                                            >
                                                <button
                                                    type="button"
                                                    class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50 dark:active:bg-gray-700 transition ease-in-out duration-150"
                                                >
                                                    {{
                                                        $page.props.auth.user
                                                            .name
                                                    }}

                                                    <svg
                                                        class="ml-2 -mr-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke-width="1.5"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </template>

                                        <template #content>
                                            <div
                                                class="block px-4 py-2 text-xs text-gray-400"
                                            >
                                                Manage Account
                                            </div>

                                            <DropdownLink
                                                :href="route('profile.show')"
                                            >
                                                Profile
                                            </DropdownLink>

                                            <DropdownLink
                                                v-if="
                                                    $page.props.jetstream
                                                        .hasApiFeatures
                                                "
                                                :href="
                                                    route('api-tokens.index')
                                                "
                                            >
                                                API Tokens
                                            </DropdownLink>

                                            <div
                                                class="border-t border-gray-200 dark:border-gray-600"
                                            />

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
                                    @click="
                                        showingNavigationDropdown =
                                            !showingNavigationDropdown
                                    "
                                >
                                    <svg
                                        class="h-6 w-6"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            :class="{
                                                hidden: showingNavigationDropdown,
                                                'inline-flex':
                                                    !showingNavigationDropdown,
                                            }"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                        <path
                                            :class="{
                                                hidden: !showingNavigationDropdown,
                                                'inline-flex':
                                                    showingNavigationDropdown,
                                            }"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div
                        :class="{
                            block: showingNavigationDropdown,
                            hidden: !showingNavigationDropdown,
                        }"
                        class="sm:hidden"
                    >
                        <div class="pt-2 pb-3 space-y-1">
                            <ResponsiveNavLink
                                :href="route('dashboard')"
                                :active="route().current('dashboard')"
                            >
                                Dashboard
                            </ResponsiveNavLink>
                        </div>

                        <div
                            class="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600"
                        >
                            <div class="flex items-center px-4">
                                <div
                                    v-if="
                                        $page.props.jetstream
                                            .managesProfilePhotos
                                    "
                                    class="shrink-0 mr-3"
                                >
                                    <img
                                        class="h-10 w-10 rounded-full object-cover"
                                        :src="
                                            $page.props.auth.user
                                                .profile_photo_url
                                        "
                                        :alt="$page.props.auth.user.name"
                                    />
                                </div>

                                <div>
                                    <div
                                        class="font-medium text-base text-gray-800 dark:text-gray-200"
                                    >
                                        {{ $page.props.auth.user.name }}
                                    </div>
                                    <div
                                        class="font-medium text-sm text-gray-500"
                                    >
                                        {{ $page.props.auth.user.email }}
                                    </div>
                                </div>
                            </div>

                            <div class="mt-3 space-y-1">
                                <ResponsiveNavLink
                                    :href="route('profile.show')"
                                    :active="route().current('profile.show')"
                                >
                                    Profile
                                </ResponsiveNavLink>

                                <ResponsiveNavLink
                                    v-if="$page.props.jetstream.hasApiFeatures"
                                    :href="route('api-tokens.index')"
                                    :active="
                                        route().current('api-tokens.index')
                                    "
                                >
                                    API Tokens
                                </ResponsiveNavLink>

                                <form method="POST" @submit.prevent="logout">
                                    <ResponsiveNavLink as="button">
                                        Log Out
                                    </ResponsiveNavLink>
                                </form>

                                <template
                                    v-if="$page.props.jetstream.hasTeamFeatures"
                                >
                                    <div
                                        class="border-t border-gray-200 dark:border-gray-600"
                                    />

                                    <div
                                        class="block px-4 py-2 text-xs text-gray-400"
                                    >
                                        Manage Team
                                    </div>

                                    <ResponsiveNavLink
                                        :href="
                                            route(
                                                'teams.show',
                                                $page.props.auth.user
                                                    .current_team
                                            )
                                        "
                                        :active="route().current('teams.show')"
                                    >
                                        Team Settings
                                    </ResponsiveNavLink>

                                    <ResponsiveNavLink
                                        v-if="
                                            $page.props.jetstream.canCreateTeams
                                        "
                                        :href="route('teams.create')"
                                        :active="
                                            route().current('teams.create')
                                        "
                                    >
                                        Create New Team
                                    </ResponsiveNavLink>

                                    <template
                                        v-if="
                                            $page.props.auth.user.all_teams
                                                .length > 1
                                        "
                                    >
                                        <div
                                            class="border-t border-gray-200 dark:border-gray-600"
                                        />

                                        <div
                                            class="block px-4 py-2 text-xs text-gray-400"
                                        >
                                            Switch Teams
                                        </div>

                                        <template
                                            v-for="team in $page.props.auth.user
                                                .all_teams"
                                            :key="team.id"
                                        >
                                            <form
                                                @submit.prevent="
                                                    switchToTeam(team)
                                                "
                                            >
                                                <ResponsiveNavLink as="button">
                                                    <div
                                                        class="flex items-center"
                                                    >
                                                        <svg
                                                            v-if="
                                                                team.id ==
                                                                $page.props.auth
                                                                    .user
                                                                    .current_team_id
                                                            "
                                                            class="mr-2 h-5 w-5 text-green-400"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke-width="1.5"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                            />
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
            </div>

            <main class="ml-48 mt-[2.8rem]">
                <slot />
            </main>
        </div>
    </div>
</template>
