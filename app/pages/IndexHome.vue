<script lang="ts">
</script>
<template>

   <UCard>
    <template #header>
      <Placeholder class="h-8" />
      <UAvatar
        src="https://github.com/benjamincanac.png"
        loading="lazy"
        :chip="{
          inset: true
        }"
      />
      <UBlogPost
    title="Introducing Nuxt Icon v1"
    description="Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects."
    :badge="{
      label: 'Release',
      color: 'primary',
      variant: 'solid'
    }"
    avatar="https://github.com/benjamincanac.png"
  />
    </template>

    <Placeholder class="h-32" />
  </UCard>
</template>