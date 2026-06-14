# Fix folder structure

Some items were created as **folders** instead of **files**. Run this from PowerShell to clean them up:

```powershell
cd "C:\Users\17076\Desktop\open canvas\vibe-settings"

# Remove wrongly-named folders (only if they're empty)
$toRemove = @(
  "backend\build.gradle",
  "backend\java",
  "backend\main",
  "backend\src\controller",
  "backend\src\model",
  "backend\src\service",
  "frontend\package.json",
  "docker-compose.yml"
)

foreach ($path in $toRemove) {
  if (Test-Path $path) {
    Remove-Item -LiteralPath $path -Recurse -Force
    Write-Host "Removed: $path"
  }
}

# Rename template files to their final names
if (Test-Path "frontend\package.json.template") {
  Move-Item "frontend\package.json.template" "frontend\package.json" -Force
}

if (Test-Path "docker-compose.yaml") {
  Move-Item "docker-compose.yaml" "docker-compose.yml" -Force
}
```

After running, your backend should use `build.gradle.kts` (already in place) and the standard Spring Boot layout under `backend/src/main/java/com/opencanvas/`.
