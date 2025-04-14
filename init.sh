#!/bin/sh
# Check if the migration has already been applied
if [ ! -f ".migration_done" ]; then
  echo "Running migrations and seed..."
  npm run seed
  touch .migration_done
else
  echo "Migrations already done. Skipping."
fi

npm run dev