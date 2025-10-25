$CURRENT_DIR = Get-Location
$PROFILE_PATH = $PROFILE
$BUN_CREATE_DIR = "$CURRENT_DIR\templates"

if (!(Test-Path $PROFILE_PATH)) {
    New-Item -ItemType File -Path $PROFILE_PATH -Force | Out-Null
}

$content = Get-Content $PROFILE_PATH -Raw
$newLine = "`$env:BUN_CREATE_DIR = `"$BUN_CREATE_DIR`""

if ($content -match '^\$env:BUN_CREATE_DIR\s*=\s*".*"$') {
    $content = [regex]::Replace($content, '^\$env:BUN_CREATE_DIR\s*=\s*".*"$', $newLine, 'Multiline')
} else {
    $content += "`n$newLine`n"
}

Set-Content -Path $PROFILE_PATH -Value $content -Encoding UTF8

. $PROFILE_PATH

Write-Host "Set BUN_CREATE_DIR to $BUN_CREATE_DIR and updated $PROFILE_PATH"
