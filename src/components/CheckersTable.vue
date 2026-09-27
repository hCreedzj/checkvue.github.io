<template>
  <div class="checkers-table">
    <div
      v-for="(row, rowIndex) in table"
      :key="rowIndex"
      class="checkers-table__row"
    >
      <TableCell
        v-for="(cell, cellIndex) in row"
        class="checkers-table__cell"
        :class="{'checkers-table__cell--highlight': tableHighlight[rowIndex][cellIndex] === 1 }"
        :key="rowIndex + '-' + cellIndex + cell"
        :data="{ figureType: cell, cx: cellIndex, cy: rowIndex }"
        @showWay="showWay"
      />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";

import TableCell from "@/components/TableCell.vue";
import { useMainStore } from "@/store";

const store = useMainStore();

const { table, tableHighlight } = storeToRefs(store);

function showWay(data) {
  const { ways } = data;

  const tempArr = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ];

  ways.forEach(way => {
    tempArr[way.cy][way.cx] = 1;
  });

  store.$patch({
    tableHighlight: tempArr,
  })
}
</script>


<style lang="less">
.checkers-table {
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 800px;
  margin: 0 auto;
  border: 1px solid @gray;
  &__row {
    display: flex;
    width: 100%;
    &:nth-child(2n) {
      .checkers-table__cell:nth-child(2n+1) {
        background-color: @brown;
      }
    }
    &:nth-child(2n+1) {
      .checkers-table__cell:nth-child(2n) {
        background-color: @brown;
      }
    }
  }
  &__cell {
    position: relative;
    &--highlight {
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: @green;
        opacity: 0.5;
      }
    }
  }
}
</style>