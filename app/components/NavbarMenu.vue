<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const route= useRoute();
const items= computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    href: '/',
    active: route.path.startsWith('/index'),
  },
  {
    label: 'Projects',
    href: '/projects',
    active: route.path.startsWith('/projects'),
  },
  {
    label: 'Contact',
    href: '/contact',
    active: route.path.startsWith('/contact'),
  },
])

</script>
<template>
    <UHeader title="Joel Reyes" :toggle="{
      color: 'primary',
      variant: 'subtle',
      class: 'rounded-full'
    }">
    <UNavigationMenu :items="items" />
        <template #right>
            <UColorModeButton />
        </template>
        <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
    </UHeader>
</template>