<script setup>
import Welcome from "@/Components/Welcome.vue";
</script>

<template>




    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-20">
             
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

                <div class="p-4 border-2 grid grid-cols-12 gap-6">
                
                    <div class="col-span-12 mt-5">
                        <div class="grid gap-2 grid-cols-1 lg:grid-cols-2">
                            <div class="bg-white shadow-lg p-4" id="chartline"></div>
                            <div class="bg-white shadow-lg" >
                                <div id="default-carousel" class="relative w-full" data-carousel="slide">
                                    <!-- Carousel wrapper -->
                                    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                                        <!-- Item 1 -->
                                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                            <!-- <img src="/img/escudo.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> -->
                                            <img src="/img/escudo.png" class="absolute block object-contain w-full h-full top-0 left-0" alt="...">
                                        </div>
                                        <!-- Item 2 -->
                                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                            <img src="/img/gore.jpg" class="absolute block object-contain w-full h-full top-0 left-0" alt="...">
                                        </div>
                                        <!-- Item 3 -->
                                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                            <img src="/img/logo_gore.png" class="absolute block object-contain w-full h-full top-0 left-0" alt="...">
                                        </div>
                                        <!-- Item 4 -->
                                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                            <img src="/img/puno.jpg" class="absolute block object-contain w-full h-full top-0 left-0" alt="...">
                                        </div>
                                    </div>
                                    <!-- Slider indicators -->
                                    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                                        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                                        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                                        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                                        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                                        
                                    </div>
                                    <!-- Slider controls -->
                                    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                                        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                                            <span class="sr-only">Previous</span>
                                        </span>
                                    </button>
                                    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                                        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                                            <span class="sr-only">Next</span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>
