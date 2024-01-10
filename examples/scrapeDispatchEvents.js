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

const { findDispatchEventsTypes } = require('../utils/getDispatchEvents.js')

// Every function takes a file path and parses the data 

let strings = findDispatchEventsTypes("../exampleScript.js")

/* example output: 
  [
      "MASKED_LINK_ADD_TRUSTED_PROTOCOL": [
        {
            "ID": "MASKED_LINK_ADD_TRUSTED_PROTOCOL",
            "loc": {
                "start": {
                    "line": 64,
                    "column": 16
                },
                "end": {
                    "line": 73,
                    "column": 17
                }
            },
            "args": [
                "url"
            ],
            "file": "exampleScript.Js",
            "store": "MaskedLinkStore"
        }
    ],
    "BACKGROUND_SYNC_CHANNEL_MESSAGES": [
        {
            "ID": "BACKGROUND_SYNC_CHANNEL_MESSAGES",
            "loc": {
                "start": {
                    "line": 259,
                    "column": 16
                },
                "end": {
                    "line": 273,
                    "column": 17
                }
            },
            "args": [
                "changesByChannelId"
            ],
            "file": "exampleScript.Js",
            "store": "MessageStore"
        }
    ],
    "LOAD_MESSAGES": [
        {
            "ID": "LOAD_MESSAGES",
            "loc": {
                "start": {
                    "line": 282,
                    "column": 16
                },
                "end": {
                    "line": 284,
                    "column": 17
                }
            },
            "args": [],
            "file": "exampleScript.Js",
            "store": "MessageStore"
        }
    ],
    "LOAD_MESSAGES_SUCCESS_CACHED": [
        {
            "ID": "LOAD_MESSAGES_SUCCESS_CACHED",
            "loc": {
                "start": {
                    "line": 317,
                    "column": 16
                },
                "end": {
                    "line": 328,
                    "column": 17
                }
            },
            "args": [
                "channelId",
                "jump",
                "focus",
                "before",
                "after",
                "limit",
                "truncate"
            ],
            "file": "exampleScript.Js",
            "store": "MessageStore"
        }
    ],
    ....
  ]

*/ 