<template>
  <div class="screen-cinema">
    <!-- Head -->
    <div class="screen-cinema__head">
      <h3>choose seat</h3>
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
            getSeatsOccupied.includes(seat) || !getSelectedMovie
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
            v-show="seatsNumbers.includes(seat)"
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
            getSeatsOccupied.includes(seat) || !getSelectedMovie
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
            v-show="seatsNumbers.includes(seat)"
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
            getSeatsOccupied.includes(seat) || !getSelectedMovie
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
            v-show="seatsNumbers.includes(seat)"
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
            getSeatsOccupied.includes(seat) || !getSelectedMovie
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
            v-show="seatsNumbers.includes(seat)"
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
            getSeatsOccupied.includes(seat) || !getSelectedMovie
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
            v-show="seatsNumbers.includes(seat)"
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
            getSeatsOccupied.includes(seat) || !getSelectedMovie
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
            v-show="seatsNumbers.includes(seat)"
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
import { mapGetters } from "vuex";
//
export default {
  name: "ScreenCinema",
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
      ],
      seatsNumbers: []
    };
  },
  computed: {
    ...mapGetters(["getSelectedMovie", "getSeatsOccupied"])
  },
  methods: {
    //
    selectSeat(seat) {
      if (this.seatsNumbers.includes(seat)) {
        // 1) - Get index of seat if exsist in this seats numbers
        const getIndexSeat = this.seatsNumbers.indexOf(seat);
        // 2) - After get index will remove this index from seats numbers
        this.seatsNumbers.splice(getIndexSeat, 1);
      } else {
        // Else push new seats in seats numbers
        this.seatsNumbers.push(seat);
      }
    }
  }
};
</script>

<style lang="scss">
//
.screen-cinema {
  margin-top: 40px;

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
