<template>
  <div>
    <!-- 1) - Text -->
    <slot name="text" :displayText="displayText"></slot>
    <!-- 2) - All actions -->
    <!-- <button v-if="statusTextLong && !isExpand" @click="isExpand = true">
      {{ readMore }}
    </button>
    <button v-if="statusTextLong && isExpand" @click="isExpand = false">
      {{ readLess }}
    </button> -->
  </div>
</template>

<script>
export default {
  name: "CutText",
  props: {
    text: {
      type: String,
      required: true
    },
    targetPosition: {
      type: Number,
      required: true
    },
    readMore: {
      type: String,
      default: "read more"
    },
    readLess: {
      type: String,
      default: "read less"
    }
  },
  data() {
    return {
      chunksText: [],
      isExpand: false
    };
  },
  computed: {
    // 1) - Status text long
    statusTextLong() {
      return this.chunksText.length === 2;
    },
    // 2) - Display text
    // eslint-disable-next-line vue/return-in-computed-property
    displayText() {
      // 1) - If statusTextLong equal false or isExpand equal true will br render all text
      if (!this.statusTextLong || this.isExpand)
        return this.chunksText.join(" ");
      // 2) - Else will be render chunk 0 from array
      return `${this.chunksText[0]}.....`;
    }
  },
  created() {
    // Set chunksText assign fn statusChunksText
    this.chunksText = this.statusChunksText();
  },
  methods: {
    // Status chunks text
    statusChunksText() {
      // 1) - Check if targetPosition equal space or not
      const position = this.text.indexOf(" ", this.targetPosition);
      // 2) - Check if text length leth than or equal targetPosition will be return full text
      if (this.text.length <= this.targetPosition || position === -1)
        return [this.text];
      // 3) - Finaly else will be return array with 2 length first => 0 to position, second position to end
      return [this.text.substring(0, position), this.text.substring(position)];
    }
  }
};
</script>

<style></style>
