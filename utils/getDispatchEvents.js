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
const { copyFileSync } = require("fs");


async function findDispatchEventsTypes(filePath) {
    const ast = acorn.parse( await fs.readFile(filePath, 'utf-8'), { ecmaVersion: "2022", locations:true});
    let dispatchTypes = []

    let latestStore = ""
    walk.simple(ast, {
      
        Literal(node){
            if (node.raw.includes("Store")){
                latestStore = node.value
            }
            
        },
        VariableDeclaration(node) {
            
            // check if it's a store class variable 
            var args = node?.declarations[0]?.init?.arguments ?? []
            if (
                args.length > 0
            ){
                if (
                    args[0]?.property?.name === "default" &&
                    args[1]?.type === "ObjectExpression"
                ){
                    let dispatchEvents = args[1].properties
                    for (d of args[1].properties){
                        if (d?.key?.name){
                            let args = []
                            let func = d?.value?.body?.body
                            try {
                                    if (
                                    func[0].type === "VariableDeclaration" &&
                                    func[0]?.declarations[0]?.id?.type === "ObjectPattern"
                                ){
                                    args = func[0]?.declarations[0]?.id?.properties?.map(e=>{return e.key.name})
                                }
                            }
                            catch{
    
                            }
    
                            dispatchTypes.push({
                                ID:d.key.name,
                                loc:d.loc,
                                args:args,
                                file:filePath.split('\\')[1],
                                store:latestStore
                            })
                        }
                     

                    }
                   
                }
            }
          
          
            
        },
    });
    return dispatchTypes

}

module.exports = { findDispatchEventsTypes }