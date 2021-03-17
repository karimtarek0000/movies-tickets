<template>
  <div class="screen-cinema">
    <!-- Head -->
    <div class="screen-cinema__head">
      <h3>choose seats</h3>
      <GSvg nameIcon="screen-cinema" title="screen cinema" />
    </div>
    <!-- Explian icons -->
    <div class="screen-cinema__explian">
      <div>
        <GSvg nameIcon="occupied" title="occupied" />
        <span>occupied</span>
      </div>
      <div>
        <GSvg nameIcon="selected-seat" title="selected seat" />
        <span>selected</span>
      </div>
    </div>
    <!-- Screen -->
    <div class="screen-cinema__screen">
      <!--  -->
      <div class="screen-cinema__screen__shape"></div>
    </div>
    <!-- Seats -->
    <div class="screen-cinema__seats">
      <!-- 1 -->
      <div class="screen-cinema__seats__row screen-cinema__seats__row--1">
        <div
          class="screen-cinema__seats__seat"
          v-for="seat in row.slice(0, 5)"
          :key="seat"
          @click="
            getSeatsOccupied.includes(seat) ||
            selectDay === 1 ||
            selectParty === 1
              ? null
              : selectSeat(seat)
          "
          :style="{
            pointerEvents: getSeatsOccupied.includes(seat) ? 'none' : 'all'
          }"
        >
          <GSvg nameIcon="seat_cinema" title="seat cinema" />
          <span>{{ seat }}</span>
          <GSvg
            v-if="getSeatsOccupied.includes(seat)"
            nameIcon="occupied"
            title="occupied"
          />
          <GSvg
            v-show="getSeatsNumbers.includes(seat)"
            nameIcon="selected-seat"
            title="selected seat"
          />
        </div>
      </div>
      <!-- 2 -->
      <div class="screen-cinema__seats__row screen-cinema__seats__row--2">
        <div
          class="screen-cinema__seats__seat"
          v-for="seat in row.slice(5, 11)"
          :key="seat"
          @click="
            getSeatsOccupied.includes(seat) ||
            selectDay === 1 ||
            selectParty === 1
              ? null
              : selectSeat(seat)
          "
          :style="{
            pointerEvents: getSeatsOccupied.includes(seat) ? 'none' : 'all'
          }"
        >
          <GSvg nameIcon="seat_cinema" title="seat cinema" />
          <span>{{ seat }}</span>
          <GSvg
            v-if="getSeatsOccupied.includes(seat)"
            nameIcon="occupied"
            title="occupied"
          />
          <GSvg
            v-show="getSeatsNumbers.includes(seat)"
            nameIcon="selected-seat"
            title="selected seat"
          />
        </div>
      </div>
      <!-- 3 -->
      <div class="screen-cinema__seats__row screen-cinema__seats__row--3">
        <div
          class="screen-cinema__seats__seat"
          v-for="seat in row.slice(11, 19)"
          :key="seat"
          @click="
            getSeatsOccupied.includes(seat) ||
            selectDay === 1 ||
            selectParty === 1
              ? null
              : selectSeat(seat)
          "
          :style="{
            pointerEvents: getSeatsOccupied.includes(seat) ? 'none' : 'all'
          }"
        >
          <GSvg nameIcon="seat_cinema" title="seat cinema" />
          <span>{{ seat }}</span>
          <GSvg
            v-if="getSeatsOccupied.includes(seat)"
            nameIcon="occupied"
            title="occupied"
          />
          <GSvg
            v-show="getSeatsNumbers.includes(seat)"
            nameIcon="selected-seat"
            title="selected seat"
          />
        </div>
      </div>
      <!-- 4 -->
      <div class="screen-cinema__seats__row screen-cinema__seats__row--4">
        <div
          class="screen-cinema__seats__seat"
          v-for="seat in row.slice(19, 28)"
          :key="seat"
          @click="
            getSeatsOccupied.includes(seat) ||
            selectDay === 1 ||
            selectParty === 1
              ? null
              : selectSeat(seat)
          "
          :style="{
            pointerEvents: getSeatsOccupied.includes(seat) ? 'none' : 'all'
          }"
        >
          <GSvg nameIcon="seat_cinema" title="seat cinema" />
          <span>{{ seat }}</span>
          <GSvg
            v-if="getSeatsOccupied.includes(seat)"
            nameIcon="occupied"
            title="occupied"
          />
          <GSvg
            v-show="getSeatsNumbers.includes(seat)"
            nameIcon="selected-seat"
            title="selected seat"
          />
        </div>
      </div>
      <!-- 5 -->
      <div class="screen-cinema__seats__row screen-cinema__seats__row--5">
        <div
          class="screen-cinema__seats__seat"
          v-for="seat in row.slice(28, 38)"
          :key="seat"
          @click="
            getSeatsOccupied.includes(seat) ||
            selectDay === 1 ||
            selectParty === 1
              ? null
              : selectSeat(seat)
          "
          :style="{
            pointerEvents: getSeatsOccupied.includes(seat) ? 'none' : 'all'
          }"
        >
          <GSvg nameIcon="seat_cinema" title="seat cinema" />
          <span>{{ seat }}</span>
          <GSvg
            v-if="getSeatsOccupied.includes(seat)"
            nameIcon="occupied"
            title="occupied"
          />
          <GSvg
            v-show="getSeatsNumbers.includes(seat)"
            nameIcon="selected-seat"
            title="selected seat"
          />
        </div>
      </div>
      <!-- 6 -->
      <div class="screen-cinema__seats__row screen-cinema__seats__row--6">
        <div
          class="screen-cinema__seats__seat"
          v-for="seat in row.slice(38, 50)"
          :key="seat"
          @click="
            getSeatsOccupied.includes(seat) ||
            selectDay === 1 ||
            selectParty === 1
              ? null
              : selectSeat(seat)
          "
          :style="{
            pointerEvents: getSeatsOccupied.includes(seat) ? 'none' : 'all'
          }"
        >
          <GSvg nameIcon="seat_cinema" title="seat cinema" />
          <span>{{ seat }}</span>
          <GSvg
            v-if="getSeatsOccupied.includes(seat)"
            nameIcon="occupied"
            title="occupied"
          />
          <GSvg
            v-show="getSeatsNumbers.includes(seat)"
            nameIcon="selected-seat"
            title="selected seat"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//
import { mapGetters, mapMutations } from "vuex";
//
export default {
  name: "ScreenCinema",
  props: {
    selectDay: {
      type: [String, Number],
      required: true
    },
    selectParty: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      row: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50
      ]
    };
  },
  computed: {
    ...mapGetters(["getSelectedMovie", "getSeatsOccupied", "getSeatsNumbers"])
  },
  methods: {
    //
    ...mapMutations(["removeSeats", "addSeats"]),
    //
    selectSeat(seat) {
      if (this.getSeatsNumbers.includes(seat)) {
        // 1) - Get index of seat if exsist in this seats numbers
        const getIndexSeat = this.getSeatsNumbers.indexOf(seat);
        // 2) - After get index will remove this index from seats numbers
        this.removeSeats(getIndexSeat);
      } else {
        // Else push new seats in seats numbers
        this.addSeats(seat);
      }
    }
  },
  watch: {
    getSelectedMovie() {
      this.removeSeats();
    }
  }
};
</script>

<style lang="scss">
//
.screen-cinema {
  margin-top: 25px;

  //
  &__head {
    display: flex;
    justify-content: center;
    align-items: center;

    //
    h3 {
      font-size: 30px;
      text-transform: uppercase;
      color: var(--green);
      font-weight: 500;
      order: 1;
    }

    //
    svg {
      order: 0;
      width: 21px;
      height: 21px;
      margin: 0 10px;
    }
  }

  //
  &__explian {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    font-weight: 400;

    //
    div {
      display: flex;
      align-items: center;
      margin: 0 5px;

      //
      svg {
        width: 19px;
        height: 19px;
      }

      span {
        display: block;
        margin-left: 5px;
        font-size: 13px;
      }
    }
  }

  //
  &__screen {
    display: flex;
    justify-content: center;
    perspective: 1000px;

    //
    &__shape {
      position: relative;
      margin-top: -10px;
      width: 400px;
      height: 100px;
      background-color: var(--white);
      transform: rotateX(-60deg);

      //
      @media (max-width: 437px) {
        width: 300px;
      }

      //
      &::after {
        content: "";
        position: absolute;
        width: inherit;
        height: inherit;
        background-color: inherit;
        top: 0;
        opacity: 0.8;
        filter: blur(100px);
      }
    }
  }

  //
  &__seats {
    margin-top: -5px;

    //
    @media (max-width: 500px) {
      margin-top: -40px;
      transform: scale(0.8);
    }

    @media (max-width: 444px) {
      margin-top: -40px;
      transform: scale(0.7);
    }

    //
    &__row {
      display: flex;
      justify-content: center;
      margin-bottom: 5px;
    }

    //
    &__seat {
      position: relative;
      margin: 0 2px;
      cursor: pointer;

      //
      span {
        position: absolute;
        left: 50%;
        bottom: 5px;
        transform: translateX(-50%);
        color: black;
      }
    }

    //
    svg {
      width: 37px;
      height: 37px;

      //
      &:nth-of-type(2),
      &:nth-of-type(3) {
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
}
</style>
