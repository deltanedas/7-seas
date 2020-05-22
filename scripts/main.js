// Prevent event handling multiple times
if (!this.global.sevenSeas) {
	this.global.sevenSeas = true;

	const pirates = /CODEX|IGGGAMES/;

	const yarr = player => {
		if (player.name.match(pirates)) {
			Call.sendChatMessage("actual retard pirating a free game");
		}
	};

	Events.on(EventType.WorldLoadEvent, cons(e => {
		// Players are added shortly after loading
		Time.run(60, run(() => {
			const players = Vars.playerGroup.all();
			players.each(cons(yarr));
		}));
	}));
	Events.on(EventType.PlayerChatEvent, cons(e => {
		yarr(e.player);
	}));
}
