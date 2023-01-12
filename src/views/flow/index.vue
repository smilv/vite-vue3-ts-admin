<!--
 * @Description: @vue-flow
 * @Author: zhaobin
 * @Date: 2023-01-10 11:15:29
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-01-12 17:00:59
-->
<script lang="ts">
export default {
  name: "FlowIndex",
};
</script>
<script lang="ts" setup>
import { ref, reactive } from "vue";
import { VueFlow, useVueFlow, Panel, PanelPosition, MarkerType } from "@vue-flow/core";
import type { VueFlowStore, Node, Edge } from "@vue-flow/core";
import { Background } from "@vue-flow/background";
import { Controls } from "@vue-flow/controls";
import { MiniMap } from "@vue-flow/minimap";
interface VueFlowInstance {
  instance: VueFlowStore | null;
}

const nodes = ref<Node[]>([
  { id: "node-1", type: "input", label: "Node 1", position: { x: 100, y: 5 } },
  { id: "node-2", label: "Node 2", position: { x: 100, y: 100 } },
]);
const edges = ref<Edge[]>([
  {
    id: "e1-2",
    source: "node-1",
    target: "node-2",
    markerEnd: MarkerType.Arrow,
  },
]);
const vueFlowInstance: VueFlowInstance = reactive({ instance: null });
const defaultZoom = ref<number>(1);
const { onPaneReady, addNodes, setNodes, setEdges, nodesSelectionActive, addSelectedNodes, getNodes, toObject } =
  useVueFlow();

onPaneReady((instance) => {
  vueFlowInstance.instance = instance;
  resetTransform();
});
function resetTransform() {
  vueFlowInstance.instance?.fitView();
  vueFlowInstance.instance?.zoomTo(defaultZoom.value);
}
function addNode() {
  const id = getNodes.value.length + 1;
  const newNode = {
    id: `node-${id}`,
    label: `Node ${id}`,
    position: { x: 0, y: 0 },
  };
  addNodes([newNode]);
}
function selectAll() {
  addSelectedNodes(getNodes.value);
  nodesSelectionActive.value = true;
}
function reset() {
  setNodes(nodes.value);
  setEdges(edges.value);
  resetTransform();
}
function save() {
  console.log(toObject());
}
</script>
<template>
  <VueFlow :nodes="nodes" :edges="edges" auto-connect>
    <Panel :position="PanelPosition.TopRight">
      <el-button type="primary" @click="addNode">新增节点</el-button>
      <el-button type="primary" @click="reset">重置</el-button>
      <el-button type="primary" @click="selectAll">全选</el-button>
      <el-button type="primary" @click="save">保存</el-button>
    </Panel>
    <Background />
    <MiniMap />
    <Controls />
  </VueFlow>
</template>
<style>
@import "@vue-flow/core/dist/style.css";
@import "@vue-flow/core/dist/theme-default.css";
@import "@vue-flow/controls/dist/style.css";
</style>
<style lang="scss" scoped></style>
