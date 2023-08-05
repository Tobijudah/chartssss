<script setup lang="ts">
import { ref } from 'vue';
import type { Chart, FormState } from '@/types';

const charts: Chart[] = ['songs', 'artists'];

const state = ref<FormState>({
  country: '',
  number: null,
  chart: charts[0],
});

const search = async () => {
  const data = await fetch('/api/musixmatch', {
    method: 'POST',
    body: JSON.stringify(state.value),
  });
  console.log(data);
};

const countries = [
  { label: 'Nigeria', value: 'ng' },
  { label: 'United States', value: 'us' },
  { label: 'United Kingdom', value: 'gb' },
  { label: 'South Africa', value: 'za' },
  { label: 'Ghana', value: 'gh' },
];
</script>

<template>
  <div class="container">
    <form class="form" @submit.prevent="search">
      <label class="label purple" for="number">
        Top:
        <input
          min="1"
          max="100"
          id="number"
          class="input"
          type="number"
          v-model="state.number"
          placeholder="10 (Default)"
        />
      </label>

      <div>
        <p class="radiosLabel purple">Chart:</p>
        <div class="radios">
          <template v-for="chart of charts" :key="chart">
            <input
              :id="chart"
              type="radio"
              :value="chart"
              class="radioInput"
              v-model="state.chart"
            />
            <label :for="chart" class="radio purple">{{ chart }}</label>
          </template>
        </div>
      </div>

      <label for="country" class="label purple">
        Country:
        <select required name="country" id="country" class="select" v-model="state.country">
          <option selected disabled value="">Pick a country</option>
          <option v-for="country of countries" :key="country.value" :value="country.value">
            {{ country.label }}
          </option>
        </select>
      </label>

      <p class="info">
        Top <span class="purple">{{ state.number || 10 }} {{ state.chart }}</span> in
        <span class="purple">{{
          countries.find(country => country.value === state.country)?.label || '...'
        }}</span>
      </p>

      <button type="submit" class="button">Search</button>
    </form>
  </div>
</template>

<style scoped>
.container {
  width: max(22%, 300px);
  background-color: #fff;
  padding: 30px;
  border-radius: 16px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.label {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input {
  width: 100%;
  padding: 10px;
  border-radius: 9999px;
  border: 1px solid #c9c9c9;
}

.input::placeholder {
  color: #827476;
}

.radiosLabel {
  margin-bottom: 8px;
}

.radios {
  display: flex;
  gap: 8px;
}

.radioInput {
  display: none;
}

.radioInput:checked + .radio {
  color: #ff536e;
  font-weight: 600;
  border: 1px solid #341539;
}

.radio {
  cursor: pointer;
  width: 100%;
  background: #fff;
  color: #341539a0;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  padding: 10px;
  border: 1px solid #341539a0;
  border-radius: 32px;
  transition:
    background 0.2s ease-in-out,
    color 0.2s ease-in-out,
    border 0.2s ease-in-out;
}

.select {
  padding: 10px;
  border: 1px solid #341539a0;
  border-radius: 32px;
}

.info {
  margin-top: 16px;
}

.button {
  cursor: pointer;
  background: #ff536e;
  color: #fff;
  font-weight: 600;
  padding: 10px;
  border: 1px solid #341539;
  border-radius: 32px;
}
</style>