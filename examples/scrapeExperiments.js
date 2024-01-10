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

const { findExperiments } = require('discord-datautils/utils/getExperiments')

// Every function takes a file path and parses the data 

let strings = findExperiments("../exampleStrings.js")

/* example output: 
   [
        {
            "kind": "user",
            "id": "2021-02_staff_qc_debugging",
            "label": "Display QS scores in results. Not a real experiment",
            "defaultConfig": {
                "showScores": false
            },
            "treatments": [
                {
                    "id": 1,
                    "label": "Show scores in QS results",
                    "config": {
                        "showScores": true
                    }
                }
            ]
        },
        {
            "kind": "user",
            "id": "2022-01_server_recommendations_rollout",
            "label": "Rollout experiment for server recommendations.",
            "defaultConfig": {
                "showRecs": false
            },
            "treatments": [
                {
                    "id": 1,
                    "label": "Show server recommendations",
                    "config": {
                        "showRecs": true
                    }
                }
            ]
        },
        {
            "kind": "guild",
            "id": "2023-09_guild_events_entrypoint",
            "label": "Experiments with showing Events entrypoint in the channel list in friends guilds",
            "defaultConfig": {
                "canSeeTopLevelEventsEntrypoint": false
            },
            "treatments": [
                {
                    "id": 1,
                    "label": "User can see top level events entrypoint in friend guilds",
                    "config": {
                        "canSeeTopLevelEventsEntrypoint": true
                    }
                }
            ]
        },
        {
            "kind": "guild",
            "id": "2023-09_recurring_events",
            "label": "Allows guild to create recurring events",
            "defaultConfig": {
                "enabled": false
            },
            "treatments": [
                {
                    "id": 1,
                    "label": "Recurring Events are enabled",
                    "config": {
                        "enabled": true
                    }
                }
            ]
        },
        {
            "kind": "user",
            "id": "2023-08_trial_notif_to_nitro_home",
            "label": "Trial Notification to Nitro Home",
            "defaultConfig": {
                "enabled": false
            },
            "treatments": [
                {
                    "id": 1,
                    "label": "Enabled",
                    "config": {
                        "enabled": true
                    }
                }
            ]
        },
        {
            "kind": "user",
            "id": "2023-12_create_guild_modal_themeing",
            "label": "Create Guild Modal Force Light Theme",
            "defaultConfig": {
                "forceLightTheme": false
            },
            "treatments": [
                {
                    "id": 1,
                    "label": "Force Light Theme",
                    "config": {
                        "forceLightTheme": true
                    }
                }
            ]
        },
    .............
 ]
*/ 