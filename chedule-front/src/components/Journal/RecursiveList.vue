<template>
    <template v-for="(item, index) in items" :key="index">
      <v-list-group v-if="item.value">
        <template v-slot:activator="{props}">
          <v-list-item
              v-bind="props"
              :title="item.title"
              @click="setPath(item.title)"
          >
          </v-list-item>
        </template>
        <RecursiveList @update-title="setPath" :node-path="addNode(item.title)" :title-list="titleList" v-if="item.value" :items="item.value" />
      </v-list-group>
      <v-list-item v-else
                   @click="setPath(item.title)"
          :title="item.title"
      />
    </template>
</template>

<script>
export default {
  name: 'RecursiveList',
  emits: ["update-title"],
  data() {
    return {
      path: this.nodePath
    }
  },
  props: {
    nodePath: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      required: false,
    },
    titleList: {
      type: Array,
      required: false,
    }
  },
  methods: {
    pushTitle(leaf) {
      console.log(this.path + `_${leaf}`)
    },
    addNode(node) {
      return this.nodePath + `_${node}`
    },
    setPath(leaf = '') {
      this.$emit('update-title', leaf ? this.path + `_${leaf}` : this.path)
    }
  }
};
</script>

<style scoped>

</style>