/*
	Copyright (c) DeltaNedas 2020

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program. If not, see <https://www.gnu.org/licenses/>.
*/

const pirates = /CODEX|IGGGAMES/;

const yarr = player => {
	if (player.name.match(pirates)) {
		Call.sendChatMessage("actual retard pirating a free game");
	}
};

Events.on(WorldLoadEvent, e => {
	// Players are added shortly after loading
	Time.run(60, () => {
		Groups.player.each(yarr);
	});
});

Events.on(PlayerChatEvent, e => {
	yarr(e.player);
});
