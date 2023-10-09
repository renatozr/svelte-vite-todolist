<script>
    import TodoList from "./lib/TodoList.svelte";
</script>

<div class="app">
    <h1>ToDo List</h1>
    <TodoList />
</div>

<style lang="scss">
    .app {
        display: flex;
        flex-direction: column;
        align-items: center;
        h1 {
            margin: 30px 0;
        }
    }
</style>
