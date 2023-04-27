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
                    

                </div>
            </div>
        </div>
    </div>
</template>
