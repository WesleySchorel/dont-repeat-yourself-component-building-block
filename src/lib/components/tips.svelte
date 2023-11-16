<section class="container-voortgang-1">
	<div class="container-voortgang-2">
		<ul>
			<li>
				<section>
					<div>
						<span class="goed-bezig">Goed bezig!</span>
						<p>Je hebt al grote stappen gemaakt met principe Begrijpelijk!</p>
					</div>
				</section> 
			</li>
			<li>
				<section>
					<div>
						<span class="tip">Tip</span>
						<p>
							Kijk ook eens naar succescriteria 1.5.2. Deze is namelijk eenvoudig toe te passen!
						</p>
					</div>
				</section>
			</li>
			<li>
				<section>
					<div>
						<span class="tip">Tip</span>
						<p>
							Succescriteria 1.2.3 zal de toegankelijkheid op je website sterk verbeteren door het
							contrast gebruik.
						</p>
					</div>
				</section>
			</li>
		</ul>
	</div>
</section>

<style>
    /* VOORTGANG */
    .container-voortgang-1 {
		background-color: var(--c-container);
		padding: 1em 1em;
		margin: 1em;
		border-radius: 0.5em;
	}

	.container-voortgang-2 {
		display: flex;
		flex-wrap: wrap;
		border-radius: 0.5em;
	}

    .container-voortgang-2 p {
		font-size: 1em;
		max-width: 16rem;
		margin-top: .25em;
	}

	.container-voortgang-2 ul {
		list-style-type: none;
		display: flex;
		flex-wrap: wrap;
		gap: 1em;
		margin: 1em;
	}

	.container-voortgang-2 li {
		background-color: var(--c-container-stroke);
		padding: 1em;
		border-radius: 0.5em;
		min-width: 16em;
	}

    /* VOORTGANG PRESTATIES */
	.goed-bezig {
		color: var(--c-green);
		font-size: 1.25em;
	}

	.tip {
		color: var(--c-orange);
		font-size: 1.25em;
	}


</style>
