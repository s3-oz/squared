#!/bin/bash

echo "Preparing squared.com.au for Vercel deployment..."

# 1. Copy content into the website directory
echo "Copying content files..."
mkdir -p content
cp -r ../05-content-generator/* content/

# 2. Update the content loader to use local path
echo "Updating content loader..."
sed -i.bak "s|path.join(process.cwd(), '..', '05-content-generator')|path.join(process.cwd(), 'content')|g" lib/content/loader.ts
rm lib/content/loader.ts.bak

# 3. Create vercel.json if it doesn't exist
if [ ! -f vercel.json ]; then
  echo "Creating vercel.json..."
  cat > vercel.json << 'EOF'
{
  "framework": "nextjs",
  "regions": ["syd1"],
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "outputDirectory": ".next"
}
EOF
fi

# 4. Update .gitignore to include content
echo "Updating .gitignore..."
if ! grep -q "^content/$" .gitignore 2>/dev/null; then
  echo "# Content files (remove this line if you want to commit content)" >> .gitignore
  echo "content/" >> .gitignore
fi

# 5. Create environment variables file
echo "Creating .env.production..."
cat > .env.production << 'EOF'
NEXT_PUBLIC_SITE_URL=https://squared.com.au
NEXT_PUBLIC_API_URL=https://api.squared.com.au
NODE_ENV=production
EOF

echo "Deployment preparation complete!"
echo ""
echo "Next steps:"
echo "1. Commit these changes to git"
echo "2. Push to your repository"
echo "3. Connect the repository to Vercel"
echo "4. Deploy!"
echo ""
echo "Note: Content files are in the 'content' directory."
echo "If you want to version control them, remove 'content/' from .gitignore"