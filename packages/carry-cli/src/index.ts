import { Command } from "commander";
import { bridgeCommand } from "./commands/bridge";
import { compatCommand } from "./commands/compat";
import { initCommand } from "./commands/init";
import { inspectCommand } from "./commands/inspect";
import { shareCommand } from "./commands/share";
import { validateCommand } from "./commands/validate";

export function createProgram(): Command {
  const program = new Command();

  program.name("carry");

  program
    .command("bridge")
    .argument("<file>")
    .requiredOption("--source <source>")
    .action(async (file: string, options: { source: string }) => {
      await bridgeCommand(file, options.source as never);
    });

  program
    .command("compat")
    .argument("<file>")
    .requiredOption("--source <source>")
    .action(async (file: string, options: { source: string }) => {
      await compatCommand(file, options.source as never);
    });

  program
    .command("init")
    .requiredOption("--template <template>")
    .requiredOption("--out <out>")
    .action(async (options: { template: string; out: string }) => {
      await initCommand(options.template, options.out);
    });

  program
    .command("validate")
    .argument("<file>")
    .action(async (file: string) => {
      await validateCommand(file);
    });

  program
    .command("inspect")
    .argument("<file>")
    .action(async (file: string) => {
      await inspectCommand(file);
    });

  program
    .command("share")
    .argument("<file>")
    .requiredOption("--provider <providerId>")
    .requiredOption("--scope <scope>", "scope to share", collectScopes, [])
    .action(
      async (
        file: string,
        options: { provider: string; scope: string[] }
      ) => {
        await shareCommand(file, options.provider, options.scope as never);
      }
    );

  return program;
}

function collectScopes(value: string, previous: string[]): string[] {
  return [...previous, value];
}
