import fs from "node:fs"; import path from "node:path";
const root=process.cwd(); const files=[]; function walk(dir){for(const entry of fs.readdirSync(dir,{withFileTypes:true})){const full=path.join(dir,entry.name);if(entry.isDirectory()) walk(full); else files.push(full)}} walk(path.join(root,"src"));
const errors=[]; for(const file of files.filter(f=>/\.(ts|tsx)$/.test(f))){const source=fs.readFileSync(file,"utf8");if(/^['\"]use client['\"];?/m.test(source)&&/(pms_profiles_enriched|insight-returns-data|universe-data).*\.json/.test(source))errors.push(path.relative(root,file));}
if(errors.length){console.error(`Client components importing large research data:\n${errors.join("\n")}`);process.exit(1)} console.log("Client data-import boundary passed.");
