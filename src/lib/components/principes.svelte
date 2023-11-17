<script>
  import Progressbar from "./progressbar.svelte";

    export let principes;
</script>

<section class="container-principes">
    <ul>
        {#each principes as principe}
        <li>
                <div class="principe">
					<a href="/">
                <section>
                    <h3><span>{principe.titel}. </span> Principe {principe.index}</h3>
                    <p>
						{principe.titel}
					</p>
                </section>
                <Progressbar />
			</a>
            </div>
        </li>
        {/each}
    </ul>
</section>

<style>
	:global(*) {
		box-sizing: border-box;
	}

	li {
		margin: 0;
	}

	li a {
		text-decoration: none;
		color: inherit;
	}

	h3 {
		font-size: 1.5em;
		margin-bottom: .25em;
	}

    .container-principes ul {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(40em, 1fr));
		gap: 1em;

		list-style-type: none;
		margin: 0 1em;
		margin-bottom: 1em;
	}

	.container-principes  li {
		border-radius: 0.5em;
	}

	span {
		color: var(--c-pink);
	}

	.principe p {
		font-size: 1em;
		margin-bottom: 3rem;
        width: 80%;
	}

	.principe {
		padding: 2em;
		background-color: var(--c-container);

		border-radius: 0.5em;
		height: 100%;
		width: 60%;
		border: solid 1px var(--c-container-stroke);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
</style>