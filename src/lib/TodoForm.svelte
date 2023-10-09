<script>
    import { onMount } from "svelte";

    export let addTodo = undefined;
    export let retitleTodo = undefined;
    export let todo = { title: "" };
    export let isForm = undefined;
    export let ButtonIcon;

    onMount(() => todoTitleInput.focus());

    let todoTitleInput;
    let title = todo.title;
    $: isSubmitButtonDisabled = title.length === 0;

    function handleSubmit(e) {
        e.preventDefault();

        if (retitleTodo) {
            retitleTodo(todo.id, title);
            isForm = false;
        } else {
            addTodo(title);
        }

        title = "";
        todoTitleInput.focus();
    }
</script>

<form class:retitleTodo on:submit={handleSubmit}>
    <input
        type="text"
        placeholder="ToDo Title"
        bind:this={todoTitleInput}
        bind:value={title}
    />

    <button
        type="submit"
        disabled={isSubmitButtonDisabled}
        class:cursor-not-allowed={isSubmitButtonDisabled}
    >
        <svelte:component this={ButtonIcon} />
    </button>
</form>

<style lang="scss">
    form {
        margin-bottom: 20px;
        display: flex;
        input {
            padding: 0 10px;
            border-radius: 1px;
            flex-grow: 1;
        }
        button {
            margin-top: 4px;
            margin-left: 8px;
            width: 22px;
            cursor: pointer;
            background-color: variables.$secondaryColor;
            color: variables.$mainColor;
        }
    }

    .retitleTodo {
        margin-bottom: 0 !important;

        button {
            width: 12px !important;
            background-color: variables.$mainColor !important;
            color: variables.$textColor !important;
        }
    }

    .cursor-not-allowed {
        cursor: not-allowed;
    }
</style>
