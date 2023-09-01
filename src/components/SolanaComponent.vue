<script setup lang="ts">
import { ref } from 'vue'
import { trasnferSolana } from "../backend/solana.ts"

const props = defineProps<{ msg: string }>()

let msg = ref<string>(props.msg);
let address_from = ref<string>("");
let address_to = ref<string>("");
let amount = ref<number>(0);

function transfer() {
  trasnferSolana(address_from.value,  address_to.value, amount.value);
}
</script>

<template>
  <div class="w-96">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <span class="text-2xl">{{ msg }}</span>
      <div class="mb-4 mt-5">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="from">
          Public Key From
        </label>
        <input v-model="address_from" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="from" type="text">
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="to">
          Public Key To
        </label>
        <input v-model="address_to" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  id="to" type="text">
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="to">
          Transfer Amount
        </label>
        <input v-model="amount" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  id="to" type="number">
      </div>
      <div class="flex items-center justify-between">
        <button @click="transfer()" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Transact
        </button>
      </div>
    </form>
  </div>
</template>
