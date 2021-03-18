import fs from "fs";
import matter from "gray-matter";

export async function getChangelog() {
  const fileContents = fs.readFileSync(process.cwd() + "/CHANGELOG.md").toString()
  return matter(fileContents)
}