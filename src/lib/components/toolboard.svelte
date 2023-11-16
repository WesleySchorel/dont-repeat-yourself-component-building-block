<script>
    import Principes from "./principes.svelte";
    import Tips from "./tips.svelte";

    export let principes;
    export let principe;
    export let url;

</script>

    <Tips {principe} {url} />
    <Principes {principes}/>
