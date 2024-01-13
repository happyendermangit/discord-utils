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

const { findRoutes } = require('discord-datautils/utils/getRoutes')

// Every function takes a file path and parses the data 

let strings = findRoutes("../exampleMain.js")

/* example output: 
  {
        buildNumber:"3010",
        versionHash:"b5e9f63bcb90a3e5c5e34c81e8d08a90"
  }
*/ 