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



async function findRoutes(filePath) {
    const ast = acorn.parse( await fs.readFile(filePath, 'utf-8'), { ecmaVersion: "2022" });
    let Routes = {}

    walk.simple(ast, {
        CallExpression(node) {
            const keys = node?.arguments[0]?.properties?.map(e => e?.key?.name);
            
            // there is missing routes here
            if (
                keys?.includes("USER") &&
                keys?.includes("USER_RELATIONSHIPS") 
            ) {
                console.log(keys.length)
                const firstArgument = node?.arguments[0].properties
                for (route of firstArgument){
                    if (route.value.type === "Literal"){
                        Routes[route.key.name] = route.value.value
                    }
                    if ( route.value.type  === "ArrowFunctionExpression"){
                        // a try catch here, because some routes can't be scraped using eval since it uses client variables
                        try {Routes[route.key.name] = eval(`(${escodegen.generate(route.value)})(':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param',':param')`)}
                        catch{
                            console.log(route.key.name)
                        }
                    }

                } 
        

            }
        },
    });
    return Routes

}

module.exports = { findRoutes }