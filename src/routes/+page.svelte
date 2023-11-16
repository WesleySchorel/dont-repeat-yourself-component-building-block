<script>
    export let data
    import Toolboard from '../lib/components/toolboard.svelte';

    $: principes = data.principes;
    $: principe = data.principe;
    $: url = data.url;

</script>

<Toolboard {principe} {url} {principes} />

