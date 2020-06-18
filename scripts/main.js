/*
	Copyright (c) DeltaNedas 2020

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
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
