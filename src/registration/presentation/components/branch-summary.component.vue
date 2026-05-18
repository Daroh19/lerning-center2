<template>
  <pv-card>
    <template #header>
      <div class="p-3">
        <h3>{{ branch.name }}</h3>
      </div>
    </template>
    <template #content>
      <p><strong>{{ $t('branch.address') }}:</strong> {{ branch.address }}</p>
      <p><strong>{{ $t('branch.capacity') }}:</strong> {{ branch.capacity }}</p>
      <p><strong>{{ $t('branch.openedAt') }}:</strong> {{ branch.openedAt }}</p>
      <p>{{ branch.description }}</p>
    </template>
    <template #footer>
      <p><strong>{{ $t('branch.registeredAttention') }}:</strong> {{ registeredCount }}</p>
      <p><strong>{{ $t('branch.attentionPct') }}:</strong> {{ attentionPercentage }}</p>
    </template>
  </pv-card>
</template>

<script>
import { AttentionService } from '@/registration/infrastructure/attention.service.js'

const attentionService = new AttentionService()

/**
 * Branch Summary component
 * @summary Displays branch info and attention statistics
 * @author Tu Nombre Apellido
 */
export default {
  name: 'BranchSummary',
  props: {
    branch: { type: Object, required: true }
  },
  data() {
    return { attentions: [] }
  },
  computed: {
    branchAttentions() {
      return this.attentions.filter(a => a.branchId === this.branch.id)
    },
    registeredCount() {
      return this.branchAttentions.length
    },
    attentionPercentage() {
      const total = this.branchAttentions.length
      if (total === 0) return '0%'
      const withRegisterIn = this.branchAttentions.filter(a => a.registerInAt).length
      return new Intl.NumberFormat('en', {
        style: 'percent', maximumFractionDigits: 0
      }).format(withRegisterIn / total)
    }
  },
  async created() {
    this.attentions = await attentionService.getAll()
  }
}
</script>