<script>
    import FaRegTrashAlt from "svelte-icons/fa/FaRegTrashAlt.svelte";
    import FaRegEdit from "svelte-icons/fa/FaRegEdit.svelte";
    import FaCheck from "svelte-icons/fa/FaCheck.svelte";
    import TodoForm from "./TodoForm.svelte";

    export let todo;
    export let toggleTodo;
    export let removeTodo;
    export let retitleTodo;

    let isForm = false;
</script>

<li>
    {#if isForm}
        <TodoForm {retitleTodo} {todo} bind:isForm ButtonIcon={FaCheck} />
    {:else}
        <label class:line-through={todo.isCompleted}>
            <input
                type="checkbox"
                checked={todo.isCompleted}
                on:click={() => toggleTodo(todo.id)}
            />
            {todo.title}
        </label>
        <button class="retitleButton" on:click={() => (isForm = true)}>
            <FaRegEdit />
        </button>
        <button class="removeButton" on:click={() => removeTodo(todo.id)}>
            <FaRegTrashAlt />
        </button>
    {/if}
</li>

<style lang="scss">
    li {
        margin-bottom: 10px;
        padding: 8px;
        border-radius: 1px;
        position: relative;
        background-color: variables.$mainColor;
        label {
            padding-right: 38px;
            cursor: pointer;
            input {
                vertical-align: middle;
                cursor: pointer;
                &:checked {
                    accent-color: variables.$mainColor;
                    mix-blend-mode: multiply;
                }
            }
        }
        button {
            position: absolute;
            bottom: 8px;
            cursor: pointer;
            background-color: variables.$mainColor;
            color: variables.$textColor;
            &.retitleButton {
                width: 12px;
                right: 26px;
            }
            &.removeButton {
                width: 10px;
                right: 8px;
            }
        }
    }

    .line-through {
        text-decoration: line-through;
    }
</style>
