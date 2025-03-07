# MCP Java Backend Suite

Complete MCP toolkit for Java backend developers. 35 tools across 5 servers — install once, configure once.

## What's Included

| Server | Tools | What It Does |
|--------|-------|-------------|
| [mcp-db-analyzer](https://www.npmjs.com/package/mcp-db-analyzer) | 9 | PostgreSQL, MySQL, SQLite schema analysis, index optimization, query plans, slow queries, connections, table relationships |
| [mcp-jvm-diagnostics](https://www.npmjs.com/package/mcp-jvm-diagnostics) | 6 | Thread dump analysis, deadlock detection, GC log analysis, heap histogram analysis, heap diff comparison |
| [mcp-migration-advisor](https://www.npmjs.com/package/mcp-migration-advisor) | 6 | Flyway/Liquibase migration risk analysis, lock detection, data loss detection, rollback generation |
| [mcp-spring-boot-actuator](https://www.npmjs.com/package/mcp-spring-boot-actuator) | 7 | Health, metrics, environment, beans, startup, and cache analysis |
| [mcp-redis-diagnostics](https://www.npmjs.com/package/mcp-redis-diagnostics) | 7 | Memory fragmentation, slowlog analysis, client connections, keyspace health, unified performance report |

## Why the Suite?

Installing 5 MCP servers individually means 5 packages to manage, 5 config blocks to write, and 5 things to keep updated. The suite gives you everything in one install:

- **DB Analyzer** — database schema analysis, index optimization, query plans, slow query detection
- **JVM Diagnostics** — thread dump analysis, deadlock detection, GC log parsing, heap profiling
- **Migration Advisor** — Flyway/Liquibase migration risk analysis, lock detection, rollback generation
- **Spring Boot Actuator** — health checks, metrics, environment, beans, startup and cache analysis
- **Redis Diagnostics** — memory fragmentation, slowlog analysis, client connections, keyspace health

That is 35 tools covering the full Java backend diagnostic stack. One `npm install`, one config block, zero friction.

## Quick Start

```bash
npm install -g mcp-java-backend-suite
```

Then generate your Claude Desktop configuration:

```bash
npx mcp-java-backend-suite config
```

Copy the output into `~/.claude/claude_desktop_config.json`.

## Claude Desktop Configuration

```json
{
  "mcpServers": {
    "db-analyzer": {
      "command": "npx",
      "args": ["-y", "mcp-db-analyzer"]
    },
    "jvm-diagnostics": {
      "command": "npx",
      "args": ["-y", "mcp-jvm-diagnostics"]
    },
    "migration-advisor": {
      "command": "npx",
      "args": ["-y", "mcp-migration-advisor"]
    },
    "spring-boot-actuator": {
      "command": "npx",
      "args": ["-y", "mcp-spring-boot-actuator"]
    },
    "redis-diagnostics": {
      "command": "npx",
      "args": ["-y", "mcp-redis-diagnostics"],
      "env": {
        "REDIS_URL": "redis://localhost:6379"
      }
    }
  }
}
```

## License

MIT
