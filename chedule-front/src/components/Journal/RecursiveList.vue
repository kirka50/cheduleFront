<template>
    <v-list-item v-for="(item, index) in items" :key="index">
      <v-list-group v-if="item.value">
        <template v-slot:activator="{props}">
          <v-list-item
              v-bind="props"
              :title="item.title"
              @click="pushTitle(item.title)"
          >
          </v-list-item>
        </template>
        <RecursiveList @updateTitle="pushTitle" :title-list="titleList" v-if="item.value" :items="item.value" />
      </v-list-group>
      <v-list-item v-else
                   @click="pushTitle(item.title)"
          :title="item.title"
      />
    </v-list-item>
</template>

<script>
export default {
  name: 'RecursiveList',
  props: {
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
    pushTitle(title) {
       this.$emit('updateTitle', ...this.titleList.push(title))
    }
  }
};
</script>

<style scoped>

</style>