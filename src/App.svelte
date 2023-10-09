<script>
    import TodoList from "./lib/TodoList.svelte";
</script>

<div class="app">
    <h1>ToDo List</h1>
    <TodoList />
    <p>
        Made by
        <a href="https://github.com/renatozr" target="_bank">
            Renato Zanella
        </a>
    </p>
</div>

<style lang="scss">
    .app {
        display: flex;
        flex-direction: column;
        align-items: center;
        h1 {
            margin: 30px 0;
        }
        p {
            position: absolute;
            bottom: 20px;
            opacity: 0.4;
        }
    }
</style>
