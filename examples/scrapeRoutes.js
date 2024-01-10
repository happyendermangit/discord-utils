/** 
 * discord-dataminers-utils - the best utils for scraping data in discord js files 
 * Copyright (c) 2023 Happy enderman
 

 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.

 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 * **/

const { findRoutes } = require('../utils/getRoutes.js')

// Every function takes a file path and parses the data 

let strings = findRoutes("../exampleRoutes.js")

/* example output: 
  {
        USER: '/users/:param',
        USER_RELATIONSHIP: '/users/@me/relationships/:param',
        USER_BULK_RELATIONSHIPS: '/users/@me/relationships/bulk',
        USER_PROFILE: '/users/:param/profile',
        GUILD_PROFILE: '/guilds/:param/profile/:param',
        USER_CHANNELS: '/users/@me/channels',
        BROADCAST_PRIVATE_CHANNEL: '/users/@me/channels/broadcast',
        DM_CHANNEL: '/users/@me/dms/:param',
        USER_SETTINGS_PROTO: '/users/@me/settings-proto/:param',
        .............
        PREMIUM_MARKETING: '/premium-marketing',
        QUESTS_CURRENT_QUESTS: '/quests/@me',
        QUESTS_HEARTBEAT: '/quests/:param/heartbeat',
        ATTACHMENTS_REFRESH_URLS: '/attachments/refresh-urls',
        QUESTS_REWARD_CODE: '/quests/:param/reward-code',
        QUESTS_ENROLL: '/quests/:param/enroll',
        GAME_INVITE: '/game-invite/@me/:param',
        GAME_INVITES: '/game-invite/@me'
  }
*/ 