<template>
  <section class="list-movies">
    <!-- Head -->
    <div class="list-movies__head">
      <h1>movies now showing</h1>
      <!--  -->
      <div>
        <GSvg nameIcon="popcorn" title="popcorn" />
        <span>booked now</span>
      </div>
    </div>
    <!-- All Movies -->
    <div class="list-movies__movies">
      <!--  -->
      <slot name="cardMovie" />
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionListMovie"
};
</script>

<style lang="scss">
//
.list-movies {
  //
  &__head {
    width: 100%;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: var(--green);
    margin-top: 20px;
    margin-bottom: 15px;
    font-weight: 500;
    //
    > * {
      flex-shrink: 0;
    }
    //
    h1 {
      font-size: 50px;
      margin-right: 15px;
    }
    //
    div {
      display: flex;
      align-self: flex-end;
      align-items: center;
      //
      svg {
        height: 26px;
        width: 20px;
        margin-right: 5px;
      }
      //
      span {
        display: block;
        font-size: 30px;
      }
    }
  }
  //
  &__movies {
    display: flex;
    flex-flow: wrap row;
    justify-content: space-between;
    padding-top: 15px;
    max-height: 70vh;
    overflow-y: auto;

    //
    @include changeScrollBar(
      $width: 2,
      $colorTrack: black,
      $colorThumb: rgba(255, 255, 255, 0.164)
    );
  }
  //
  &__movie {
    flex: 0 0 calc((100% - 16px) / 2);
    margin-bottom: 60px;
    height: 60vh;
    position: relative;

    //
    &::after {
      content: "";
      background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.5) 30%,
        rgba(0, 0, 0, 1)
      );
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      position: absolute;
    }

    //
    &__img {
      width: 100%;
      height: inherit;
      overflow: hidden;
      border-radius: 5px;

      //
      img {
        max-width: 100%;
        max-height: 100%;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    //
    &__select {
      position: absolute;
      top: -14px;
      right: 0px;
      display: block;
      z-index: 2;
      //
      svg {
        width: 28px;
        height: 28px;
      }
    }

    //
    &__info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: absolute;
      bottom: -25px;
      left: 50%;
      width: 95%;
      height: 50px;
      background-color: rgba(black, 0.9);
      border-radius: 200px;
      border: 1px solid rgba(white, 0.2);
      transform: translateX(-50%);
      z-index: 2;
      text-transform: uppercase;
      color: var(--green);
      padding: 0 12px;

      //
      &__title {
        font-size: 16px;
        font-weight: 500;
      }
      //
      &__btn-select {
        @extend %rest-btn;
        background-color: var(--green);
        height: 36px;
        width: 124px;
        border-radius: 200px;
        border: 1px solid rgba(white, 0.2);
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
}
</style>
