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


const fs = require("fs").promises;
const path = require("path");
const acorn = require("acorn");
const walk = require("acorn-walk");
const escodegen = require('escodegen');



async function getBuildInfo(filePath) {
    const ast = acorn.parse( await fs.readFile(filePath, 'utf-8'), { ecmaVersion: "2022" });
    let BuildInfo = {}

    walk.simple(ast, {
        ObjectExpression(node) {
            const keys = node?.properties?.map(e => e?.key?.name);
            
            if (    
                keys?.includes("buildNumber") &&
                keys?.includes("versionHash")  
            ) {
                const strings = node?.properties
                for (string of strings){
                    let key = string.key.value ?? string.key.name
                    if (key === "buildNumber" || key === "versionHash"){
                        BuildInfo[key] = string.value.value
                    }
                } 
        

            }
        },
    });
    return BuildInfo

}

module.exports = { getBuildInfo }