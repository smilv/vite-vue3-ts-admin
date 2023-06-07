<!--
 * @Description: @vue-flow
 * @Author: zhaobin
 * @Date: 2023-01-10 11:15:29
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-06-07 14:24:33
-->
<script lang="ts" setup name="Flow">
import type { VueFlowStore, Node, Edge, Connection } from "@vue-flow/core";
import { VueFlow, useVueFlow, Panel, PanelPosition, MarkerType } from "@vue-flow/core";
import { Background } from "@vue-flow/background";
import { Controls } from "@vue-flow/controls";
import { MiniMap } from "@vue-flow/minimap";
interface VueFlowInstance {
  instance: VueFlowStore | null;
}

const nodes = ref<Node[]>([
  { id: "node-1", type: "input", label: "Node 1", position: { x: 0, y: 0 } },
  { id: "node-2", label: "Node 2", position: { x: 0, y: 100 } },
]);
const edges = ref<Edge[]>([
  {
    id: "e1-2",
    source: "node-1",
    target: "node-2",
    markerEnd: MarkerType.ArrowClosed,
  },
]);
const vueFlowInstance: VueFlowInstance = reactive({ instance: null });
const defaultZoom = ref<number>(1);
const {
  onPaneReady,
  addNodes,
  addEdges,
  setNodes,
  setEdges,
  nodesSelectionActive,
  addSelectedNodes,
  getNodes,
  toObject,
  dimensions,
} = useVueFlow();

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
  const node = {
    id: `node-${id}`,
    label: `Node ${id}`,
    position: { x: (Math.random() * dimensions.value.width) / 2, y: (Math.random() * dimensions.value.height) / 2 },
  };
  addNodes([node]);
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
function onConnect(connectionEvent: Connection) {
  const edge = {
    ...connectionEvent,
    markerEnd: MarkerType.ArrowClosed,
  };
  addEdges([edge]);
}
</script>
<template>
  <div class="flow-wrapper">
    <VueFlow :nodes="nodes" :edges="edges" @connect="onConnect">
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
  </div>
</template>
<style>
@import "@vue-flow/core/dist/style.css";
@import "@vue-flow/core/dist/theme-default.css";
@import "@vue-flow/controls/dist/style.css";
.vue-flow__controls {
  border-bottom: solid 2px;
}
</style>
<style lang="scss" scoped>
.flow-wrapper {
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
}
</style>
