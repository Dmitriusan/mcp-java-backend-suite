# Install mcp-java-backend-suite via Cline

Run in Cline terminal:

```bash
npx -y mcp-java-backend-suite config
```

This installs and configures all 5 Leaven MCP servers in one step.

# Configuration

The suite generates a ready-to-use `claude_desktop_config.json` snippet covering all servers. Run the config command and follow the output instructions.

Individual servers included:
- `mcp-jvm-diagnostics` — thread dumps, GC logs, heap analysis
- `mcp-redis-diagnostics` — Redis memory, slowlog, client health
- `mcp-spring-boot-actuator` — Spring Boot health, metrics, beans
- `mcp-db-analyzer` — schema, indexes, query plans (requires `DATABASE_URL`)
- `mcp-migration-advisor` — migration risk analysis

See each server's `llms-install.md` for individual configuration options.
