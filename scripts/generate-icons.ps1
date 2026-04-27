#!/usr/bin/env pwsh
# Generates all required icon sizes from public/soho-logo.png
# Run from project root:  pwsh scripts/generate-icons.ps1

Add-Type -AssemblyName System.Drawing

$ErrorActionPreference = "Stop"
$publicDir = Join-Path $PSScriptRoot ".." | Resolve-Path | Join-Path -ChildPath "public"
$source    = Join-Path $publicDir "soho-logo.png"

if (-not (Test-Path $source)) {
    Write-Host "ERROR: $source not found." -ForegroundColor Red
    Write-Host "Save the SoHo Wealth logo as public\soho-logo.png first, then re-run." -ForegroundColor Yellow
    exit 1
}

function Resize-PNG {
    param(
        [string]$SourcePath,
        [string]$OutPath,
        [int]$Size,
        [bool]$Maskable = $false,
        [string]$BgHex = "#0B1F3A"
    )

    $src = [System.Drawing.Image]::FromFile($SourcePath)
    try {
        $bmp = New-Object System.Drawing.Bitmap $Size, $Size
        $g   = [System.Drawing.Graphics]::FromImage($bmp)
        $g.SmoothingMode      = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $g.InterpolationMode  = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.PixelOffsetMode    = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

        if ($Maskable) {
            $r  = [byte][Convert]::ToInt32($BgHex.Substring(1,2),16)
            $gC = [byte][Convert]::ToInt32($BgHex.Substring(3,2),16)
            $b  = [byte][Convert]::ToInt32($BgHex.Substring(5,2),16)
            $bg = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, $r, $gC, $b))
            $g.FillRectangle($bg, 0, 0, $Size, $Size)
            $bg.Dispose()
            $inner  = [int]([math]::Round($Size * 0.78))
            $offset = [int](($Size - $inner) / 2)
            $g.DrawImage($src, $offset, $offset, $inner, $inner)
        } else {
            $g.DrawImage($src, 0, 0, $Size, $Size)
        }

        $bmp.Save($OutPath, [System.Drawing.Imaging.ImageFormat]::Png)
        Write-Host "  wrote $OutPath ($Size x $Size$(if ($Maskable) { ', maskable' }))" -ForegroundColor Green
        $g.Dispose()
        $bmp.Dispose()
    } finally {
        $src.Dispose()
    }
}

Write-Host "Generating icons from $source..." -ForegroundColor Cyan
Resize-PNG -SourcePath $source -OutPath (Join-Path $publicDir "icon-512.png")          -Size 512
Resize-PNG -SourcePath $source -OutPath (Join-Path $publicDir "icon-192.png")          -Size 192
Resize-PNG -SourcePath $source -OutPath (Join-Path $publicDir "apple-touch-icon.png")  -Size 180
Resize-PNG -SourcePath $source -OutPath (Join-Path $publicDir "icon-512-maskable.png") -Size 512 -Maskable $true
Write-Host "Done." -ForegroundColor Cyan
