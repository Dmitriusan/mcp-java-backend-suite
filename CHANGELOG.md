# Changelog

All notable changes to MCP Java Backend Suite will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [0.1.2] - 2026-03-13

### Changed
- Updated all 5 MCP server dependencies to latest versions:
  - mcp-db-analyzer: ^0.2.3
  - mcp-jvm-diagnostics: ^0.1.3
  - mcp-migration-advisor: ^0.2.3
  - mcp-spring-boot-actuator: ^0.1.3
  - mcp-redis-diagnostics: ^0.1.3

## [0.1.1] - 2026-03-10

### Changed
- Updated dependency versions

## [0.1.0] - 2026-03-10

### Added
- Meta-package installing all 5 MCP servers for Java backend developers:
  - mcp-db-analyzer — database performance analysis (PostgreSQL, MySQL, SQLite)
  - mcp-jvm-diagnostics — JVM health analysis (thread dumps, GC logs, heap histograms)
  - mcp-migration-advisor — database migration risk analysis (Flyway, Liquibase)
  - mcp-spring-boot-actuator — Spring Boot application health and performance
  - mcp-redis-diagnostics — Redis health, memory, and performance analysis
- 35 analytical tools across 5 products
- Single `npm install` for the complete suite
