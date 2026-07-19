MIGRATION_FOLDER = db/migrations
DB_URL = root:@tcp(127.0.0.1:3306)/auth_dev?parseTime=true

# Create a new migration -> gmake migrate-create name="migration_name"
migrate-create:
	goose -dir $(MIGRATION_FOLDER) create $(name) sql

# Run all up migrations
migrate-up:
	goose -dir $(MIGRATION_FOLDER) mysql "$(DB_URL)" up

# Rollback last migration -> gmake migrate-down
migrate-down:
	goose -dir $(MIGRATION_FOLDER) mysql "$(DB_URL)" down

# Rollback all migrations -> gmake migrate-reset
migrate-reset:
	goose -dir $(MIGRATION_FOLDER) mysql "$(DB_URL)" reset

# Show current migration status -> gmake migrate-status
migrate-status:
	goose -dir $(MIGRATION_FOLDER) mysql "$(DB_URL)" status

# Redo last migration (Down then Up) -> gmake migrate-redo
migrate-redo:
	goose -dir $(MIGRATION_FOLDER) mysql "$(DB_URL)" redo

# Run up to a version -> gmake migrate-to version=20200101120000
migrate-to:
	goose -dir $(MIGRATION_FOLDER) mysql "$(DB_URL)" up-to $(version)

# Rollback to a version -> gmake migrate-down-to version=20200101120000
migrate-down-to:
	goose -dir $(MIGRATION_FOLDER) mysql "$(DB_URL)" down-to $(version)

# Force a version -> gmake migrate-force version=20200101120000
migrate-force:
	goose -dir $(MIGRATION_FOLDER) mysql "$(DB_URL)" force $(version)

# Print Goose help -> gmake migrate-help
migrate-help:
	goose -h
