<script>
    import { v4 as uuid } from "uuid";
    import FaRegPlusSquare from "svelte-icons/fa/FaRegPlusSquare.svelte";
    import TodoForm from "./TodoForm.svelte";
    import Todo from "./Todo.svelte";

    let todos = [
        {
            id: uuid(),
            title: "Study for 4 hours",
            isCompleted: true,
        },
        {
            id: uuid(),
            title: "Go to the gym",
            isCompleted: false,
        },
        {
            id: uuid(),
            title: "Meditate for 30 minutes",
            isCompleted: true,
        },
    ];

    function addTodo(title) {
        const newTodo = {
            id: uuid(),
            title,
            isCompleted: false,
        };

        todos = [newTodo, ...todos];
    }

    function toggleTodo(id) {
        todos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, isCompleted: !todo.isCompleted };
            }

            return todo;
        });
    }

    function removeTodo(id) {
        todos = todos.filter((todo) => todo.id !== id);
    }

    function retitleTodo(id, title) {
        todos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, title };
            }

            return todo;
        });
    }
</script>

<div class="todo-list">
    <TodoForm {addTodo} ButtonIcon={FaRegPlusSquare} />
    {#if todos.length === 0}
        <p>There is no ToDo left</p>
    {:else}
        <ul>
            {#each todos as todo (todo.id)}
                <Todo {todo} {toggleTodo} {removeTodo} {retitleTodo} />
            {/each}
        </ul>
    {/if}
</div>

<style lang="scss">
    .todo-list {
        padding: 20px;
        border-radius: 1px;
        max-height: 450px;
        overflow: auto;
        background-color: variables.$secondaryColor;
        p {
            text-align: center;
        }
        ul {
            list-style: none;
        }
    }
</style>
