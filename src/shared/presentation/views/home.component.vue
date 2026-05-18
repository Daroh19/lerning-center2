<template>
  <div class="p-4">
    <h1>{{ $t('home.title') }}</h1>
    <p>{{ $t('home.welcome') }}</p>

    <h2>{{ $t('home.branches') }}</h2>
    <div class="grid">
      <div class="col-6" v-for="branch in branches" :key="branch.id">
        <branch-summary :branch="branch" />
      </div>
    </div>
  </div>
</template>

<script>
import BranchSummary from '@/registration/presentation/components/branch-summary.component.vue'
import { BranchService } from '@/registration/infrastructure/branch.service.js'

const branchService = new BranchService()

/**
 * Home page
 * @summary Displays welcome message and registered branches
 * @author Tu Nombre Apellido
 */
export default {
  name: 'HomePage',
  components: { BranchSummary },
  data() {
    return { branches: [] }
  },
  async created() {
    this.branches = await branchService.getAll()
  }
}
</script>