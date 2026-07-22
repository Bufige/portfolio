import { execSync } from "child_process";

const BUCKET = "s3://bufige.portifolio";

function run(cmd: string) {
  console.log(`> ${cmd}`);
  execSync(cmd, { stdio: "inherit" });
}

function main() {
  console.log("Building...");
  run("npm run build");

  console.log(`\nDeploying to ${BUCKET}...`);
  run(`aws s3 sync build/ ${BUCKET} --delete`);

  console.log("\nDone.");
}

main();
