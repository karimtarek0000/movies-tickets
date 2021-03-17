<template>
  <section class="action-user">
    <!--  -->
    <div class="action-user__head">
      <h2>was selected movie</h2>
      <div>
        <GSvg
          v-show="statusGetMovie"
          nameIcon="select-movie"
          title="select-movie"
        />
        <span>{{ statusGetMovie ? movie.name : "No choose movie yet" }}</span>
      </div>
    </div>
    <!--  -->
    <div :style="{ opacity: statusGetMovie ? 1 : 0.3 }">
      <div class="action-user__select-box">
        <slot name="selectBox" />
      </div>
      <!--  -->
      <slot name="screenCinema" />
      <!--  -->
      <slot name="submit" />
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionActionUser",
  props: {
    movie: {
      type: Object,
      required: false
    },
    statusGetMovie: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style lang="scss">
//
.action-user {
  text-transform: capitalize;
  padding-left: 80px;

  //
  @media (max-width: 1360px) {
    padding-left: 40px;
  }

  @media (max-width: 1310px) {
    padding-left: 0;
    margin-top: 25px;
  }

  //
  &__head {
    display: flex;
    align-items: center;
    font-weight: 400;

    //
    @media (max-width: 1310px) {
      justify-content: center;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }

    div {
      display: flex;
      align-items: center;

      //
      @media (max-width: 768px) {
        margin-top: 15px;
      }
    }

    //
    h2 {
      color: var(--green);
      font-size: 29px;
      margin-right: 10px;
    }

    svg {
      width: 28px;
      height: 28px;
      margin-right: 10px;
    }

    span {
      font-size: 23px;
    }
  }

  //
  &__select-box {
    display: flex;
    flex-flow: wrap row;
    margin-top: 20px;

    //
    @media (max-width: 1310px) {
      justify-content: center;
    }

    //
    select {
      width: inherit;
      height: inherit;
      -webkit-appearance: none;
      -moz-appearance: none;
      -o-appearance: none;
      appearance: none;
      background-color: rgba(#121212, 0.1);
      border-radius: 5px;
      border: 1px solid var(--white);
      color: var(--white);
      font-size: 18px;
      padding: 0 10px;
      text-transform: uppercase;
      font-weight: 400;

      //
      &:focus {
        outline: none;
      }
    }

    .custom-select {
      position: relative;
      width: 288px;
      height: 47px;
      flex-shrink: 0;

      @media (max-width: 768px) {
        width: 100%;
      }

      //
      &:nth-of-type(1) {
        margin-right: 20px;

        //
        @media (max-width: 768px) {
          margin-right: 0;
          margin-bottom: 30px;
        }
      }

      //
      svg {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        display: block;
        fill: white;
        width: 20px;
        height: 20px;
      }
    }

    .note {
      font-size: 12px;
      margin-top: 5px;
      color: var(--green);
    }
  }
}
</style>
