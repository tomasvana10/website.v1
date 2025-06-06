"use server";

export async function getRepoVersion() {
  return await fetch(`https://api.github.com/repos/tomasvana10/website/tags`)
    .then((res) => res.json())
    .then((tags) => tags[0]?.name.slice(1) ?? null);
}
