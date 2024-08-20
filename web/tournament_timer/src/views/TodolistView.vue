<template>
  <div class="todolist">
    <h1>Todo</h1>
    <ul v-if="todos.length">
      <!-- TodoListItem コンポーネントを使います -->
      <!-- v-bind を使って動的に todo プロパティを渡します -->
      <TodoListItem v-for="todo in todos" :key="todo.id" :todo="todo" @remove="removeTodo" />
    </ul>
    <p v-else>
      TODO 一覧はありません
    </p>
  </div>
</template>

<script>
import TodoListItem from "../components/TodoListItem.vue";

export default {
  components: {
    TodoListItem
  },
  data() {
    return {
      todos: [
        { id: 1, text: "Learn Vue" },
        { id: 2, text: "Learn about single file components" },
        { id: 3, text: "Learn about components" }
      ]
    };
  },
  methods: {
    removeTodo(idToRemove) {
      this.todos = this.todos.filter(todo => {
        return todo.id !== idToRemove;
      });
    }
  }
};
</script>

<style>
h1 {
  text-align: center;
}

.todolist {
  max-width: 400px;
  margin: 0 auto;
  text-align: left;
}
</style>
