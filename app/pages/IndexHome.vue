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
    title=""
    description="Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects."
    image="https://nuxt.com/assets/blog/nuxt-icon/cover.png"
    date="2024-11-25"
  /><UBlogPost
    title="Introducing Nuxt Icon v1"
    description="Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects."
    image="https://nuxt.com/assets/blog/nuxt-icon/cover.png"
    date="2024-11-25"
  /><UBlogPost
    title="Introducing Nuxt Icon v1"
    description="Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects."
    image="https://nuxt.com/assets/blog/nuxt-icon/cover.png"
    date="2024-11-25"
  />

      </div>
  </UCard>
</template>