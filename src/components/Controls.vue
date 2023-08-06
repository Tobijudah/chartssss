<script setup lang="ts">
import { store } from '@/store';
import fetchChart from '@/api/fetchChart';
import { computed, ref, watch } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import type { Chart, FormState } from '@/types/app';
import CircleAnimation from '@/components/CircleAnimation.vue';

const charts: Chart[] = ['tracks', 'artists'];

const form = ref<FormState>({
  country: '',
  number: null,
  chart: charts[0],
});

const { isLoading, isError, data, error } = useQuery([computed(() => store.state)], fetchChart, {
  staleTime: Infinity,
  cacheTime: Infinity,
});

const search = async () => {
  store.setState({ ...form.value });
};

watch(data, () => {
  const res = data.value;
  if (res) {
    if ('track_list' in res.body.message.body) {
      store.setTracks(res.body.message.body.track_list);
    } else {
      store.setArtists(res.body.message.body.artist_list);
    }
  }
});

const countries = [
  { label: 'Nigeria', value: 'ng' },
  { label: 'United States', value: 'us' },
  { label: 'United Kingdom', value: 'gb' },
  { label: 'South Africa', value: 'za' },
  { label: 'Ghana', value: 'gh' },
];

const currentCountry = computed(
  () => countries.find(country => country.value === form.value.country)?.label,
);
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
          v-model="form.number"
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
              v-model="form.chart"
            />
            <label :for="chart" class="radio purple">{{ chart }}</label>
          </template>
        </div>
      </div>

      <label for="country" class="label purple">
        Country:
        <select required name="country" id="country" class="select" v-model="form.country">
          <option selected disabled value="">Pick a country</option>
          <option v-for="country of countries" :key="country.value" :value="country.value">
            {{ country.label }}
          </option>
        </select>
      </label>

      <p class="info">
        Top <span class="purple">{{ form.number ?? 10 }} {{ form.chart }}</span> in
        <span class="purple">{{ currentCountry || '...' }}</span>
      </p>

      <button type="submit" class="button">
        <template v-if="isLoading">
          <CircleAnimation />
        </template>
        <template v-else> Search</template>
      </button>
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
  border: 1px solid #341539a0;
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
  text-transform: capitalize;
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
  line-height: 16px;
  padding: 10px;
  border: 1px solid #341539;
  border-radius: 32px;
}
</style>
