<template>
    <div>
      <h1>TodoApp</h1>
      <AppTodoList />
    </div>
  </template>
  
  <script>
  import AppTodoList from '@/components/TodoList.vue';
  
  export default {
    components: {
      AppTodoList,
    },
  };
  </script>
  
  <style>
  h1 {
    font-size: 20px;
    color: white;
    margin-bottom: 20px;
  }
  </style>
  