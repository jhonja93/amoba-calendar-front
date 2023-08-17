<script setup>
import IconChartPie from '@/components/icons/IconChartPie.vue'
import IconTag from '@/components/icons/IconTag.vue'
import IconCalendar from '@/components/icons/IconCalendar.vue'
import IconCircleUser from '@/components/icons/IconCircleUser.vue'
import IconGear from '@/components/icons/IconGear.vue'
import IconBell from '@/components/icons/IconBell.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import Calendar from '@/components/Calendar.vue'
</script>

<template>
  <div class="bg-white flex justify-center items-center h-screen font-Montserrat">
    <div class="bg-amoba p-8 rounded shadow-md w-5/6 h-5/6 flex gap-10">
      <div
        class="bg-primary main-nav flex flex-grow flex-col w-1/4 rounded-lg text-white justify-center relative"
      >
        <div class="mb-4 px-4 font-normal">
          <div class="w-full flex items-center h-10 pl-4 rounded-lg cursor-pointer">
            <IconChartPie class="h-6 w-6 fill-current mr-3" />
            <span>Dashboard</span>
          </div>
          <div class="w-full flex items-center h-10 pl-4 rounded-lg cursor-pointer">
            <IconTag class="h-6 w-6 fill-current mr-3" />
            <span>Transactions</span>
          </div>
          <div class="w-full flex items-center h-10 pl-4 rounded-lg cursor-pointer">
            <IconCalendar class="h-6 w-6 fill-current mr-3" />
            <span>Schedules</span>
          </div>
          <div class="w-full flex items-center h-10 pl-4 rounded-lg cursor-pointer">
            <IconCircleUser class="h-6 w-6 fill-current mr-3" />
            <span>Users</span>
          </div>
          <div class="w-full flex items-center h-10 pl-4 rounded-lg cursor-pointer">
            <IconGear class="h-6 w-6 fill-current mr-3" />
            <span>Settings</span>
          </div>
        </div>
        <div class="absolute flex flex-col bottom-10 ml-10">
          <span class="mb-5">Help</span>
          <span>Contact Us</span>
        </div>
      </div>
      <div class="main-content flex-grow w-3/4">
        <div class="flex justify-between">
          <h1 class="font-bold text-2xl">Schedules</h1>
          <div class="w-full bg-gray-100 flex items-center" style="justify-content: end">
            <div class="flex">
              <div class="relative text-gray-600">
                <input
                  type="search"
                  name="serch"
                  placeholder="Search..."
                  class="bg-white h-8 w-full xl:w-50 px-5 rounded-lg border text-sm focus:outline-none"
                /><button type="submit" class="absolute right-0 top-0 mt-2 mr-4">
                  <IconSearch class="h-4 w-4 fill-current" />
                </button>
              </div>
            </div>
            <div class="flex items-center relative ml-2">
              <IconBell height="20" class="fill-current mr-3 hover:text-blue-500" />
              <img src="profile.jpeg" class="w-8 h-8 rounded-full shadow-lg" />
            </div>
          </div>
        </div>
        <div class="flex flex-col mt-5">
          <span>Seleccione Fecha</span>
          <input type="date" />
        </div>
        <div class="flex gap-3 mt-5">
          <Calendar class="rounded-lg flex-grow" />
          <div class="bg-white rounded-lg">
            <h2>Rutas Disponibles</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
