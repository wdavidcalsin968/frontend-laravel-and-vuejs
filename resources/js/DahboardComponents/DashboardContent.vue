<script setup>
import Welcome from "@/Components/Welcome.vue";
</script>

<template>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg">
                <div class="p-2">
                    <div class="flex row">
                        <div>
                            <img src="" alt="">
                        </div>
                        <div class="p-2">
                            <h1 class="font-black text-3xl text-gray-800"> Bienvenido, Brayan</h1>
                            <p class="font-normal text-sm text-gray-400">Tu tienes 2 nuevos mensajes y 15 nuevas tareas</p>
                        </div>
                        

                        <div>
                            <a href="#" class="bg-sky-950 text-2xl text-white text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 underline h-8">Mensajes</a> 

                            <a href="#" class="bg-indigo-950 text-2xl text-white underline hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 underline h-8">tareas</a>
                        </div>

                    </div>
                    
                    <div class="p-2">
                            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-black bg-gray-200 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Seleccione Lenguaje de Programación <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                            <!-- Dropdown  -->
                            <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">python</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">C++</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">java</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">PHP</a>
                                </li>
                                </ul>
                            </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
