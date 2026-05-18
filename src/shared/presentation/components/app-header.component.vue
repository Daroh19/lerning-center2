<template>
  <div class="flex align-items-center justify-content-between p-3 surface-100">
    <div class="flex align-items-center gap-2">
      <img
          src="https://logo.clearbit.com/bbva.com"
          height="30"
          @error="onImgError"
      />
      <span class="font-bold">Banco Bilbao Vizcaya Argentaria, S.A.</span>
    </div>
    <div class="flex gap-2">
      <pv-button text @click="$router.push('/home')">Home</pv-button>
      <pv-button text @click="$router.push('/registration/branch-registerins/new')">Attentions</pv-button>
    </div>
    <div class="flex gap-1">
      <pv-button size="small" @click="$i18n.locale = 'en'">EN</pv-button>
      <pv-button size="small" @click="$i18n.locale = 'es'">ES</pv-button>
    </div>
  </div>
</template>

<script>
export default { name: 'AppHeader' }
</script>