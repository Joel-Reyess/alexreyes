<script lang="ts">
</script>
<template>
  <UCard>
    <div class="justify-center flex align-center align-items-center">
      <UAvatar src="https://github.com/benjamincanac.png" loading="lazy" :chip="{
        inset: true
      }" />
      <Placeholder class="h-8" />
    </div>
    <div class="justify-center flex align-center align-items-center bg-[linear-gradient(to_right,_#FBED96,_#ABECD6)]">
      <UPageHeader title="Hi I'm Joel"
        description="I develop ideas and help build software solutions for better performance." variant="soft" />
    </div>
    <USeparator class="my-4" />
    <p class="text-4xl font-bold text-center">Recent projects</p>
    <USeparator class="my-4" />
    <div class="justify-center flex align-center align-items-center">
      <UBlogPost title="Employee Vacation Management System"
        description="An enterprise web application designed to streamline and automate employee vacation management."
        :image="{ src: 'vacation.png', loading: 'lazy' }" date="2026-10-09" class="w-1/3"
        :ui="{ image: 'object-contain' }" />
      <UBlogPost title="Real-Time Production Monitoring System"
        description="A web-based production monitoring application developed to provide real-time visibility into manufacturing operations."
        :image="{ src: 'employee-vacation-management-system.jpeg', loading: 'lazy' }" date="2025-08-06" class="w-1/3" />
      <UBlogPost title="Digital Invoice Management System — Progressive Web Application (PWA)"
        description="A progressive web application designed to digitize and streamline invoice management processes for a bakery business."
        :image="{ src: 'facturas.png', loading: 'lazy' }" date="2025-04-25" class="w-1/3" />
    </div>

    <UPageCard title="About me" description="I am a passionate software developer with experience in creating web applications using any technology stack. 
    I enjoy learning new technologies and applying them to solve real-world problems. My goal is to continuously improve my 
    skills and contribute to the development of innovative software solutions." icon="i-lucide-cpu"
      orientation="horizontal" spotlight spotlight-color="secondary">
      <img src="" alt="Tailwind CSS" class="w-full" />
    </UPageCard>
    <USeparator class="my-4" />

    <p class="text-2xl font-bold text-center">Skills</p>
    <div class="justify-center flex align-center align-items-center">
      <div class="grid grid-cols-4 gap-4 pt-8 w-md h-md">
        <div>
          <p>
            Vue
          </p>
          <img src="../assets/vueLogo.svg" />
        </div>
        <div>
          <p>
            Nuxt
          </p>
          <img src="../assets/nuxtLogo.svg" />
        </div>
        <div>
          <p>
            Terminal
          </p>
          <img src="../assets/terminalShell.svg" />
        </div>
        <div>
          <p>
            React
          </p>
          <img src="../assets/reactLogo.svg" />
        </div>
        <div>
          <p>
            MSSQL
          </p>
          <img src="../assets/microsoft-sql-server-logo.svg" />
        </div>
        <div>
          <p>
            MySQL
          </p>
          <img src="../assets/mysqlLogo.svg" />
        </div>
        <div>
          <p>
            Php
          </p>
          <img src="../assets/php.svg"  class="w-full"/>
        </div>
        <div>
          <p>
            Node.js
          </p>
          <img src="../assets/nodejs.svg" class="w-full"/>
        </div>
        <div>
          <p>
            Quasar
          </p>
          <img src="../assets/quasar.svg" class="w-full"/>
        </div>
        <div>
          <p>
            Active Directory
          </p>
          <img src="../assets/directory.svg" class="w-full"/>
        </div>
        <div>
          <p>
            IIS Server
          </p>
          <img src="../assets/iis.svg" class="w-full"/>
        </div>
        <div>
          <p>
            OpenClaw
          </p>
          <img src="../assets/openclaw.svg" class="w-full"/>
        </div>
      </div>
    </div>
  </UCard>
</template>