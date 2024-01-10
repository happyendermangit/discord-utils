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

const { findStrings } = require('../utils/getStrings.js')

// Every function takes a file path and parses the data 

let strings = findStrings("../exampleStrings.js")

/* example output: 
    {
        DISCORD: 'Discord',
        DISCORD_DESC_SHORT: 'Imagine a place',
        DISCORD_DESC_LONG: 'Join over 100 million people who use Discord to talk and hang out with communities and friends.',
        NOTIFICATION_BODY_ATTACHMENT: 'Uploaded !!{filename}!!',
        NOTIFICATION_TITLE_START_GAME: "Somebody Playin'",
        .............
        YES_TEXT_SPANISH: 'S├¡',
        NO_TEXT_SPANISH: 'No',
        GOT_IT_TEXT_SPANISH: 'Entendido',
        LANGUAGE_CHANGED_CONFIRMATION_TITLE_SPANISH: '┬íEl cambio fue hecho!',
        LANGUAGE_CHANGED_CONFIRMATION_SUBTITLE_SPANISH: 'Discord est├í configurado en Espa├▒ol. Puedes elegir otro idioma en "Ajustes de aplicaci├│n" > "Idioma".'
    }
*/ 