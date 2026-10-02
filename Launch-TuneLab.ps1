param([switch]$Browser)
$ErrorActionPreference = 'Stop'
$appFile = Join-Path $PSScriptRoot 'portable\index.html'
if (!(Test-Path -LiteralPath $appFile)) { throw 'TuneLab portable/index.html is missing. Extract the complete ZIP first.' }
$appUrl = ([uri]$appFile).AbsoluteUri
if ($Browser) { Start-Process -FilePath $appUrl; exit }
$candidates = foreach ($basePath in @(${env:ProgramFiles(x86)}, $env:ProgramFiles, $env:LOCALAPPDATA)) {
    if ($basePath) {
        Join-Path $basePath 'Microsoft\Edge\Application\msedge.exe'
        Join-Path $basePath 'Google\Chrome\Application\chrome.exe'
    }
}
$browserPath = $candidates | Where-Object { Test-Path -LiteralPath $_ } | Select-Object -First 1
if ($browserPath) {
    # Use the existing profile; no private mode, new profile or kiosk restrictions.
    Start-Process -FilePath $browserPath -ArgumentList ('--app="' + $appUrl + '"')
} else { Start-Process -FilePath $appUrl }
