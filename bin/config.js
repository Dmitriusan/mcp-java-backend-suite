#!/usr/bin/env node

const CONFIG = {
  mcpServers: {
    "db-analyzer": {
      command: "npx",
      args: ["-y", "mcp-db-analyzer"]
    },
    "jvm-diagnostics": {
      command: "npx",
      args: ["-y", "mcp-jvm-diagnostics"]
    },
    "migration-advisor": {
      command: "npx",
      args: ["-y", "mcp-migration-advisor"]
    },
    "spring-boot-actuator": {
      command: "npx",
      args: ["-y", "mcp-spring-boot-actuator"]
    },
    "redis-diagnostics": {
      command: "npx",
      args: ["-y", "mcp-redis-diagnostics"],
      env: {
        REDIS_URL: "redis://localhost:6379"
      }
    }
  }
};

const arg = process.argv[2];

if (arg === "config") {
  console.log("\n📋 Claude Desktop Configuration\n");
  console.log("Add this to ~/.claude/claude_desktop_config.json:\n");
  console.log(JSON.stringify(CONFIG, null, 2));
  console.log("\n---");
  console.log("Or add individual servers from the snippet above.");
} else {
  console.log("MCP Java Backend Suite — 35 tools for Java backend developers\n");
  console.log("Included servers:");
  console.log("  • mcp-db-analyzer          — 9 tools (PostgreSQL, MySQL, SQLite analysis)");
  console.log("  • mcp-jvm-diagnostics      — 6 tools (thread dumps, GC logs, heap analysis)");
  console.log("  • mcp-migration-advisor    — 6 tools (Flyway/Liquibase risk analysis)");
  console.log("  • mcp-spring-boot-actuator — 7 tools (health, metrics, env, beans, startup, caches)");
  console.log("  • mcp-redis-diagnostics    — 7 tools (memory, slowlog, clients, keyspace, performance)");
  console.log("\nCommands:");
  console.log("  npx mcp-java-backend-suite config   — Print Claude Desktop configuration");
  console.log("  npx mcp-java-backend-suite           — Show this help");
}
