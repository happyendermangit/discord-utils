const fs = require("fs").promises;
const path = require("path");
const acorn = require("acorn");
const walk = require("acorn-walk");
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


function convertToResult(firstArgument, t) {
    const result = t === "object" || t === undefined ? {} : [];
    
    if (firstArgument){
        for (const t of firstArgument) {
            if (t?.value?.type === "Literal") {
                result[t.key.name] = t.value.value;
            }
    
            if (t?.value?.type === "ObjectExpression") {
                result[t.key.name] = convertToResult(t.value.properties, "object");
            }
    
            if (t?.value?.type === "UnaryExpression") {
                result[t.key.name] = eval(t?.value?.operator + t?.value?.argument.raw);
            }
    
            if (t?.value?.type === "ArrayExpression") {
                let temp = [];
                for (const k of t?.value?.elements) {
                    temp.push(convertToResult(k.properties));
                }
                result[t.key.name] = temp;
            }
        }
    }
    

    return result;
}



async function findExperiments(filePath) {
    const ast = acorn.parse( await fs.readFile(filePath, 'utf-8'), { ecmaVersion: "2022" });
    let Experiments = []

    walk.simple(ast, {
        CallExpression(node) {
            const keys = node?.arguments[0]?.properties?.map(e => e?.key?.name);
            if (
                keys?.includes("kind") &&
                keys?.includes("id") &&
                keys?.includes("treatments")
            ) {
                const firstArgument = node?.arguments[0];
                if (firstArgument){
                    const result = convertToResult(firstArgument.properties);
                    Experiments.push(result)
                }
        

            }
        },
    });
    return Experiments

}

module.exports = { findExperiments }