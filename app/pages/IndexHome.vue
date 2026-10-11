<script lang="ts">
</script>
<template>

  <UCard>
    <div class="justify-center flex align-center align-items-center">
      <UAvatar src="https://github.com/benjamincanac.png" loading="lazy" :chip="{
        inset: true
      }"/>
      <Placeholder class="h-8" />
    </div>
    <div class="justify-center flex align-center align-items-center bg-[linear-gradient(to_right,_#FBED96,_#ABECD6)]">
      <UPageHeader title="Hi I'm Joel"
        description="I develop ideas and help build software solutions for better performance."
        variant="soft" />
      </div>
      <UPageCTA title="Recent Projects I have developed" />
      <div class="justify-center flex align-center align-items-center">
        <UBlogPost
    title="Employee Vacation Management System"
    description="An enterprise web application designed to streamline and automate employee vacation management."
    img="../assets/images/employee-vacation-management-system.jpeg"
    date="2026-10-09"
  /><UBlogPost
    title="Real-Time Production Monitoring System"
    description="A web-based production monitoring application developed to provide real-time visibility into manufacturing operations."
    image="../../assets/images/real-time-production-monitoring-system.png"
    date="2025-08-06"
  /><UBlogPost
    title="Digital Invoice Management System — Progressive Web Application (PWA)"
    description="A progressive web application designed to digitize and streamline invoice management processes for a bakery business."
    image="../../assets/images/digital-invoice-management-system.png"
    date="2025-04-25"
    
  />

      </div>
  </UCard>
</template>