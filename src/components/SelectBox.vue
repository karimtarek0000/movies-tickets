<template>
  <div class="custom-select">
    <select @change="sendNewValue" :disabled="!statusSelectedMovie">
      <option v-if="label" value="">{{ label }}</option>
      <template v-if="type === 'date'">
        <option
          v-for="option in options"
          :selected="value === option"
          :key="option"
          :value="option"
        >
          {{ option | nameDay }}
          {{ new Date(option).getDay() === 0 ? 7 : new Date(option).getDay() }}
          {{ option | nameMonth }}
        </option>
      </template>
      <template v-else>
        <option
          v-for="option in options"
          :selected="value === option"
          :key="option"
          :value="option"
          >{{ option }}</option
        >
      </template>
    </select>
    <!--  -->
    <GSvg nameIcon="angle-down" title="select-movie" />
    <!--  -->
    <p class="note" v-if="note" v-text="note" />
  </div>
</template>

<script>
export default {
  name: "SelectBox",
  props: {
    type: {
      type: String,
      default: "other"
    },
    value: {
      type: [Number, String],
      required: true
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    label: {
      type: String,
      required: false
    },
    note: {
      type: String,
      required: false
    }
  },
  computed: {
    statusSelectedMovie() {
      return this.$store.getters.getSelectedMovie;
    }
  },
  methods: {
    sendNewValue(e) {
      this.$emit("input", e.target.value);
      this.$emit("changed");
    }
  },
  filters: {
    nameDay(day) {
      //
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      //
      const date = new Date(day);
      //
      return days[date.getDay()];
    },
    //
    nameMonth(month) {
      //
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];

      //
      const date = new Date(month);

      //
      return months[date.getMonth()];
    }
  }
};
</script>

<style></style>
