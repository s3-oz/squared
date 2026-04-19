#!/bin/bash

# Fix all service pages to use 'any' type for content
for file in app/services/*.tsx; do
  if grep -q "const content = await getPageContent" "$file"; then
    sed -i '' 's/const content = await getPageContent/const rawContent = await getPageContent/g' "$file"
    sed -i '' '/const rawContent = await getPageContent/a\
  const content = rawContent as any
' "$file"
  fi
done

echo "Fixed content types in service pages"