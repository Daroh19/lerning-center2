<template>
  <div class="p-4" aria-label="Branch Attention Registry">
    <h1>{{ $t('attention.title') }}</h1>

    <div class="card p-4 mt-3">
      <h2>Ticket Validation</h2>
      <div class="flex gap-2 align-items-center mt-3">
        <label for="ticketInput">{{ $t('attention.ticketLabel') }}</label>
        <pv-input-text
            id="ticketInput"
            v-model="ticketInput"
            aria-label="Ticket Identifier"
        />
        <pv-button :label="$t('attention.registerIn')" @click="handleRegisterIn" />
      </div>

      <div class="mt-3" aria-live="polite">
        <p v-if="result === 'invalid'" style="color: red;">
          {{ $t('attention.invalid') }}
        </p>
        <p v-else-if="result === 'already'" style="color: orange;">
          {{ $t('attention.alreadyRegistered') }}
        </p>
        <div v-else-if="result === 'success'" class="mt-2">
          <p><strong>Branch Id:</strong> {{ foundBranch.id }}</p>
          <p><strong>Branch Name:</strong> {{ foundBranch.name }}</p>
          <p><strong>Branch Description:</strong> {{ foundBranch.description }}</p>
          <p><strong>Attention First Name:</strong> {{ foundAttention.firstName }}</p>
          <p><strong>Attention Last Name:</strong> {{ foundAttention.lastName }}</p>
          <p><strong>Register-In At:</strong> {{ foundAttention.registerInAt }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AttentionService } from '@/registration/infrastructure/attention.service.js'
import { BranchService } from '@/registration/infrastructure/branch.service.js'

const attentionService = new AttentionService()
const branchService = new BranchService()

/**
 * Branch Attention Registry page
 * @summary Handles ticket validation and register-in process
 * @author Tu Nombre Apellido
 */
export default {
  name: 'BranchAttentionRegistry',
  data() {
    return {
      ticketInput: '',
      result: null,
      foundAttention: null,
      foundBranch: null
    }
  },
  methods: {
    async handleRegisterIn() {
      this.result = null
      const allAttentions = await attentionService.getAll()
      const found = allAttentions.find(
          a => a.ticketIdentifier === this.ticketInput
      )
      if (!found) {
        this.result = 'invalid'
      } else if (found.registerInAt) {
        this.result = 'already'
      } else {
        const now = new Date().toISOString()
        await attentionService.updateRegisterIn(found.id, now)
        const branches = await branchService.getAll()
        this.foundBranch = branches.find(b => b.id === found.branchId)
        this.foundAttention = { ...found, registerInAt: now }
        this.result = 'success'
      }
    }
  }
}
</script>