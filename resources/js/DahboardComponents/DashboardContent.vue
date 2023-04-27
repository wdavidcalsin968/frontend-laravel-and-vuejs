<script setup>
import Welcome from "@/Components/Welcome.vue";
</script>

<template>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 pt-6 lg:px-1">
             
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full min-w-0 ng-star-inserted">
                
                <div class="flex flex-col flex-auto p-6 bg-card shadow rounded-2xl overflow-hidden bg-white">
                    <div class="flex justify-between">
                            <div class="text-lg font-medium tracking-tight leading-6 truncate">Summary</div>
                            <div
                                class=" rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                                <svg aria-hidden="true" class="h-7 w-7 text-blue-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
                            </div>
                        </div>
                    <div class="flex flex-col items-center mt-2">
                        <div class="text-7xl sm:text-8xl font-bold tracking-tight leading-none text-blue-500">
                            21
                        </div>
                        <div class="text-lg font-medium text-blue-600 dark:text-blue-500">Due Tasks</div>
                        <div class="flex items-baseline justify-center w-full mt-5 text-secondary">
                            <div class="text-md font-medium truncate">Completed:</div>
                            <div class="ml-1.5 text-lg font-semibold">12</div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col flex-auto p-6 bg-card shadow rounded-2xl overflow-hidden bg-white">
                    <div class="flex justify-between">
                            <div class="text-lg font-medium tracking-tight leading-6 truncate">Overdue</div>
                            <div
                                class=" rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                                <svg aria-hidden="true" class="h-7 w-7 text-blue-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
                            </div>
                        </div>
                    <div class="flex flex-col items-center mt-2">
                        <div class="text-7xl sm:text-8xl font-bold tracking-tight leading-none text-red-500">
                            17
                        </div>
                        <div class="text-lg font-medium text-red-600 dark:text-red-500">Tasks</div>
                        <div class="flex items-baseline justify-center w-full mt-5 text-secondary">
                            <div class="text-md font-medium truncate">From yesterday: </div>
                            <div class="ml-1.5 text-lg font-semibold">9</div>
                        </div>
                    </div>
                </div>
                
                <div class="flex flex-col flex-auto p-6 bg-card shadow rounded-2xl overflow-hidden bg-white">
                    <div class="flex justify-between">
                            <div class="text-lg font-medium tracking-tight leading-6 truncate">Open</div>
                            <div
                                class=" rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                                <svg aria-hidden="true" class="h-7 w-7 text-blue-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
                            </div>
                        </div>
                    <div class="flex flex-col items-center mt-2">
                        <div class="text-7xl sm:text-8xl font-bold tracking-tight leading-none text-amber-500">
                            24
                        </div>
                        <div class="text-lg font-medium text-amber-600 dark:text-amber-500">Due Tasks</div>
                        <div class="flex items-baseline justify-center w-full mt-5 text-secondary">
                            <div class="text-md font-medium truncate">Closed today: </div>
                            <div class="ml-1.5 text-lg font-semibold">19</div>
                        </div>
                    </div>
                </div>
                
                <div class="flex flex-col flex-auto p-6 bg-card shadow rounded-2xl overflow-hidden bg-white">
                    <div class="flex justify-between">
                            <div class="text-lg font-medium tracking-tight leading-6 truncate">Summary</div>
                            <div
                                class=" rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                                <svg aria-hidden="true" class="h-7 w-7 text-blue-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
                            </div>
                        </div>
                    <div class="flex flex-col items-center mt-2">
                        <div class="text-7xl sm:text-8xl font-bold tracking-tight leading-none text-green-500">
                            38
                        </div>
                        <div class="text-lg font-medium text-green-600 dark:text-green-500">Proposals</div>
                        <div class="flex items-baseline justify-center w-full mt-5 text-secondary">
                            <div class="text-md font-medium truncate">Completed:</div>
                            <div class="ml-1.5 text-lg font-semibold">16</div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>
