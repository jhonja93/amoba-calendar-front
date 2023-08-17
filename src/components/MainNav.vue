<template>
  <div class="bg-primary flex flex-col items-center text-white">
    <div class="mb-4 px-4 self-center">
      <div class="w-full flex items-center h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer">
        <IconChartPie class="h-6 w-6 fill-current mr-3" />
        <span>Dashboard</span>
      </div>
      <div class="w-full flex items-center h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer">
        <IconTag class="h-6 w-6 fill-current mr-3" />
        <span>Transactions</span>
      </div>
      <div class="w-full flex items-center h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer">
        <IconCalendar class="h-6 w-6 fill-current mr-3" />
        <span>Schedules</span>
      </div>
      <div class="w-full flex items-center h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer">
        <IconCircleUser class="h-6 w-6 fill-current mr-3" />
        <span>Users</span>
      </div>
      <div class="w-full flex items-center h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer">
        <IconGear class="h-6 w-6 fill-current mr-3" />
        <span>Settings</span>
      </div>
    </div>
    <div class="absolute bottom-0 flex flex-col">
      <span class="mb-5">Help</span>
      <span>Contact Us</span>
    </div>
  </div>
</template>

<script setup>
import IconChartPie from '@/components/icons/IconChartPie.vue'
import IconTag from '@/components/icons/IconTag.vue'
import IconCalendar from '@/components/icons/IconCalendar.vue'
import IconCircleUser from '@/components/icons/IconCircleUser.vue'
import IconGear from '@/components/icons/IconGear.vue'
</script>
