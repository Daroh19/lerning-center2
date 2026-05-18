<template>
  <div class="p-4 text-center">
    <h1>Page Not Found</h1>
    <p>The route <strong>{{ $route.fullPath }}</strong> was not found.</p>
    <pv-button label="Go to Home" @click="$router.push('/home')" />
  </div>
</template>

<script>
export default { name: 'PageNotFound' }
</script>



