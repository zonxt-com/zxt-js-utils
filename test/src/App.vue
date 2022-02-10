<template>
  <div>test js utils</div>
</template>

<script setup>
import { toTreeArray } from "../../dist/index";

const arr = [
  { id: 2, name: "部门R1", parentId: 0 },
  { id: 3, name: "部门C", parentId: 1 },
  { id: 1, name: "部门A", parentId: 2 },
  { id: 4, name: "部门D", parentId: 1 },
  { id: 5, name: "部门E", parentId: 2 },
  { id: 6, name: "部门F", parentId: 3 },
  { id: 7, name: "部门G", parentId: 2 },
  { id: 8, name: "部门H", parentId: 4 },
  { id: 9, name: "部门R2", parentId: 0 },
  { id: 10, name: "部门R3", parentId: 0 },
  { id: 11, name: "部门R2-1", parentId: 9 },
  { id: 12, name: "部门R2-2", parentId: 9 },
];
console.log(toTreeArray(arr));
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
