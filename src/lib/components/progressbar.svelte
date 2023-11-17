<section class="progress-container">
    <progress id="progress-partner" max="100" value="65" />
    <label class="progress-percentage" for="progress-partner">16/25</label>
</section>

<style>
    .progress-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-end;
		gap: 1em;
		margin-top: 0.25em;
	}


    progress {
		width: 100%;
	}

	progress[value] {
		/* Reset the default appearance */
		-webkit-appearance: none;
		appearance: none;
		height: 10px;
	}

	/* chrome/safari */
	progress[value]::-webkit-progress-bar {
		background-color: var(--c-container-stroke);
		border-radius: 0.5em;
	}

	progress[value]::-webkit-progress-value {
		background-color: var(--c-pink);
		border-radius: 0.5em;
	}

	.progress-percentage {
		height: 85%;
	}
</style>