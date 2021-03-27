import fs from "fs";
import matter from "gray-matter";

export function getChangelog() {
  const fileContents = fs.readFileSync(process.cwd() + "/CHANGELOG.md").toString()
  const object = matter(fileContents)
  return JSON.parse(JSON.stringify(object))
}